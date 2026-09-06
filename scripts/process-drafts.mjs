import { appendFileSync, existsSync, mkdirSync, readdirSync, readFileSync, renameSync, rmSync, writeFileSync } from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const draftsDir = path.join(root, '_drafts')
const blogDir = path.join(root, 'app', 'blog')
const blogIndexPath = path.join(blogDir, 'page.tsx')
const sitemapPath = path.join(root, 'app', 'sitemap.ts')
const today = new Date().toISOString().slice(0, 10)

function reportResult(published) {
  if (process.env.GITHUB_OUTPUT) {
    appendFileSync(process.env.GITHUB_OUTPUT, `published=${published}\n`)
  }
}

if (!existsSync(draftsDir)) {
  console.log('No _drafts directory found.')
  reportResult(false)
  process.exit(0)
}

const drafts = readdirSync(draftsDir, { withFileTypes: true })
  .filter((entry) => entry.isFile() && entry.name.endsWith('.md'))
  .map((entry) => entry.name)
  .sort()

if (drafts.length === 0) {
  console.log('No markdown drafts found.')
  reportResult(false)
  process.exit(0)
}

// Queue placement is not editorial approval. Skip held/future entries so they
// cannot be published early or block a different approved, due article.
let selected
for (const name of drafts) {
  const parsed = parseDraft(readFileSync(path.join(draftsDir, name), 'utf8'))
  if (parsed.meta.status !== 'approved') {
    console.log(`Held ${name}: status must be approved.`)
    continue
  }
  if (!isCalendarDate(parsed.meta.date)) {
    console.log(`Held ${name}: a valid YYYY-MM-DD publication date is required.`)
    continue
  }
  if (parsed.meta.date > today) {
    console.log(`Held ${name}: publication date has not arrived (UTC).`)
    continue
  }
  selected = { name, ...parsed }
  break
}
if (!selected) {
  console.log('No approved, due drafts. No source files changed.')
  reportResult(false)
  process.exit(0)
}
const { name: draftName, meta, body } = selected
const draftPath = path.join(draftsDir, draftName)

const title = required(meta.title, 'title')
const description = meta.description || meta.excerpt || firstParagraph(body)
const slug = slugify(meta.slug || title)
required(slug, 'non-empty slug')
required(body, 'article body')
const label = meta.label || 'Planning Guide'
const excerpt = meta.excerpt || description
const date = meta.date
const displayDate = meta.displayDate || formatDisplayDate(date)
const image = meta.image || '/editorial/shower-door.jpg'
const imageAlt = meta.imageAlt || title
const canonicalPath = `/blog/${slug}/`
const canonicalUrl = `https://metroglasspro.com${canonicalPath}`

const pageDir = path.join(blogDir, slug)
const blogIndex = readFileSync(blogIndexPath, 'utf8')
const sitemap = readFileSync(sitemapPath, 'utf8')
const existingRoute = new RegExp(`/blog/${slug}/?['"]`)
if (
  existsSync(pageDir) ||
  existsSync(path.join(root, 'public', 'blog', `${slug}.html`)) ||
  existsSync(path.join(root, 'public', 'blog', slug)) ||
  existingRoute.test(blogIndex) ||
  existingRoute.test(sitemap)
) {
  throw new Error(`Refusing to overwrite an existing article: ${canonicalPath}. Edit its source separately.`)
}
// Validate both insertion points before writing or consuming the approved draft.
const nextBlogIndex = renderBlogIndex(blogIndex, { canonicalPath, label, title, excerpt, image, imageAlt, displayDate })
const nextSitemap = renderSitemap(sitemap, { canonicalPath, date })
mkdirSync(pageDir, { recursive: true })
writeFileSync(
  path.join(pageDir, 'page.tsx'),
  renderPage({ title, description, slug, label, body, date, image, imageAlt, canonicalUrl }),
  'utf8',
)

writeFileSync(blogIndexPath, nextBlogIndex, 'utf8')
writeFileSync(sitemapPath, nextSitemap, 'utf8')

rmSync(draftPath)
moveMatchingAssets(path.basename(draftName, '.md'), slug)

reportResult(true)
console.log(`Prepared source from approved draft: ${draftName}`)
console.log(`Candidate path: ${canonicalPath}. Build, deployment and live verification are still required.`)

function parseDraft(text) {
  text = text.replace(/^\uFEFF/, '').replace(/\r\n/g, '\n')
  if (!text.startsWith('---\n')) {
    return { meta: {}, body: text.trim() }
  }

  const end = text.indexOf('\n---', 4)
  if (end === -1) {
    return { meta: {}, body: text.trim() }
  }

  const metaText = text.slice(4, end).trim()
  const bodyText = text.slice(end + 4).trim()
  const meta = {}

  for (const line of metaText.split('\n')) {
    const match = line.match(/^([A-Za-z][A-Za-z0-9_-]*):\s*(.*)$/)
    if (!match) continue

    const [, key, rawValue] = match
    meta[key] = rawValue.replace(/^['"]|['"]$/g, '').trim()
  }

  return { meta, body: bodyText }
}

function required(value, key) {
  if (!value) {
    throw new Error(`Draft ${draftName} is missing required frontmatter: ${key}`)
  }

  return value
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function isCalendarDate(value) {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false
  const parsed = new Date(`${value}T00:00:00.000Z`)
  return !Number.isNaN(parsed.valueOf()) && parsed.toISOString().slice(0, 10) === value
}

function formatDisplayDate(value) {
  return new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' }).format(
    new Date(`${value}T00:00:00.000Z`),
  )
}

function firstParagraph(markdown) {
  return (
    markdown
      .split(/\n{2,}/)
      .map((block) => block.trim())
      .find((block) => block && !block.startsWith('#')) || 'MetroGlass Pro planning guide for NYC glass projects.'
  )
}

function renderPage({ title, description, label, body, date, image, imageAlt, canonicalUrl }) {
  return `import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: ${js(title)},
  description: ${js(description)},
  alternates: { canonical: ${js(canonicalUrl)} },
  openGraph: {
    title: ${js(title)},
    description: ${js(description)},
    url: ${js(canonicalUrl)},
    type: 'article',
    images: [
      {
        url: ${js(`https://metroglasspro.com${image}`)},
        alt: ${js(imageAlt)},
      },
    ],
  },
  twitter: { card: 'summary_large_image' },
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: ${js(title)},
  description: ${js(description)},
  image: ${js(`https://metroglasspro.com${image}`)},
  datePublished: ${js(date)},
  dateModified: ${js(date)},
  author: { '@type': 'Organization', name: 'MetroGlass Pro' },
  publisher: { '@type': 'Organization', name: 'MetroGlass Pro' },
  mainEntityOfPage: ${js(canonicalUrl)},
}

export default function PublishedDraftPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <article>
        <section className="bg-cream pt-20 sm:pt-32 pb-14 sm:pb-20">
          <div className="max-w-3xl mx-auto px-6 sm:px-10 anim-hero">
            <Link href="/blog/" className="text-orange text-[13px] font-medium hover:opacity-70 transition-opacity mb-6 inline-block">
              Back to guides
            </Link>
            <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">${escapeJsxText(label)}</p>
            <h1 className="heading-serif text-charcoal text-4xl sm:text-6xl lg:text-7xl">
              ${escapeJsxText(title)}
            </h1>
            <p className="mt-5 text-warm text-base sm:text-lg max-w-2xl leading-relaxed">
              ${escapeJsxText(description)}
            </p>
          </div>
        </section>

        <section className="bg-cream pb-20 sm:pb-28">
          <div className="max-w-5xl mx-auto px-6 sm:px-10 grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-16 items-start">
            <div className="space-y-10">
${markdownToJsx(body)}
            </div>

            <aside className="space-y-6 lg:sticky lg:top-28">
              <div className="rounded-lg overflow-hidden bg-cream-dark">
                <img src=${js(image)} alt=${js(imageAlt)} className="w-full h-auto" />
              </div>
              <div className="glass-card p-6">
                <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Related MetroGlass Pro pages</p>
                <div className="grid gap-3">
                  <Link href="/frameless-shower-doors-nyc/" className="text-charcoal text-sm font-medium hover:text-orange">Frameless Shower Doors</Link>
                  <Link href="/shower-door-installation-nyc/" className="text-charcoal text-sm font-medium hover:text-orange">Shower Door Installation NYC</Link>
                  <Link href="/shower-door-replacement-nyc/" className="text-charcoal text-sm font-medium hover:text-orange">Shower Door Replacement NYC</Link>
                  <Link href="/contact/" className="btn-pill btn-primary px-6 py-3 text-center text-sm mt-2">Request an Estimate</Link>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </article>
    </>
  )
}
`
}

function markdownToJsx(markdown) {
  const blocks = markdown.split(/\n{2,}/).map((block) => block.trim()).filter(Boolean)
  const rendered = []

  for (const block of blocks) {
    if (block.startsWith('## ')) {
      rendered.push(`              <section>
                <h2 className="font-serif text-charcoal text-3xl sm:text-4xl mb-5">${escapeJsxText(block.slice(3))}</h2>
              </section>`)
      continue
    }

    if (block.startsWith('### ')) {
      rendered.push(`              <section>
                <h3 className="font-semibold text-charcoal text-xl mb-3">${escapeJsxText(block.slice(4))}</h3>
              </section>`)
      continue
    }

    if (/^- /.test(block)) {
      const items = block
        .split('\n')
        .filter((line) => line.startsWith('- '))
        .map((line) => `                  <li>${escapeJsxText(line.slice(2))}</li>`)
        .join('\n')
      rendered.push(`              <section className="glass-card p-6 sm:p-8">
                <ul className="space-y-3 text-warm text-[15px] leading-relaxed">
${items}
                </ul>
              </section>`)
      continue
    }

    rendered.push(`              <section>
                <p className="text-warm text-[15px] leading-relaxed">${escapeJsxText(block.replace(/\n/g, ' '))}</p>
              </section>`)
  }

  return rendered.join('\n\n')
}

function renderBlogIndex(file, post) {
  const marker = 'const posts = [\n'
  if (file.split(marker).length !== 2) throw new Error('Blog index insertion point changed; review before publishing.')

  const entry = `  {
    href: ${js(post.canonicalPath)},
    label: ${js(post.label)},
    title: ${js(post.title)},
    excerpt: ${js(post.excerpt)},
    image: ${js(post.image)},
    imageAlt: ${js(post.imageAlt)},
    date: ${js(post.displayDate)},
  },
`

  return file.replace(marker, `${marker}${entry}`)
}

function renderSitemap(file, route) {
  const marker = 'const blogRoutes = [\n'
  if (file.split(marker).length !== 2) throw new Error('Sitemap insertion point changed; review before publishing.')

  const entry = `  {
    path: ${js(route.canonicalPath)},
    lastModified: new Date(${js(`${route.date}T00:00:00.000Z`)}),
    priority: 0.68,
  },
`

  return file.replace(marker, `${marker}${entry}`)
}

function moveMatchingAssets(baseName, slug) {
  const extensions = ['.jpg', '.jpeg', '.png', '.webp']
  const galleryDir = path.join(root, 'public', 'gallery')

  for (const extension of extensions) {
    const from = path.join(draftsDir, `${baseName}${extension}`)
    try {
      renameSync(from, path.join(galleryDir, `${slug}${extension}`))
    } catch {
      // Drafts do not have to include a companion image.
    }
  }
}

function js(value) {
  return JSON.stringify(value)
}

function escapeJsxText(value) {
  return value.replace(/[{}<>]/g, (char) => `{'${char}'}`)
}
