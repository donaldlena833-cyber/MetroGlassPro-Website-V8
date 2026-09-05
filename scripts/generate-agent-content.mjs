import { readFile, writeFile, readdir } from 'node:fs/promises'
import path from 'node:path'
import { parseHTML } from 'linkedom'
import TurndownService from 'turndown'

const origin = 'https://metroglasspro.com'
const output = path.resolve('out')
const markdown = new TurndownService({ headingStyle: 'atx', bulletListMarker: '-', codeBlockStyle: 'fenced' })
markdown.addRule('pageLinks', {
  filter: 'a',
  replacement: (content, node) => {
    const href = node.getAttribute('href')
    if (!href) return content
    const heading = node.querySelector('h1, h2, h3, h4')
    if (heading) return `\n\n${content.trim()}\n\n[${heading.textContent.trim()}](${href})\n\n`
    const link = `[${content.trim().replace(/\n+/g, ' ')}](${href})`
    return node.className?.includes('btn-pill') ? `\n\n${link}\n\n` : `${link}${node.nextElementSibling?.tagName === 'A' ? ' ' : ''}`
  },
})
markdown.addRule('summary', {
  filter: 'summary',
  replacement: (content) => `\n\n### ${content.trim()}\n\n`,
})
markdown.addRule('definitionTerm', {
  filter: 'dt',
  replacement: (content) => `\n\n**${content.trim()}**\n\n`,
})
markdown.addRule('definition', {
  filter: 'dd',
  replacement: (content) => `${content.trim()}\n\n`,
})
markdown.addRule('tables', {
  filter: 'table',
  replacement: (_content, node) => {
    const rows = Array.from(node.querySelectorAll('tr')).map((row) =>
      Array.from(row.querySelectorAll('th, td')).map((cell) =>
        cell.textContent.trim().replace(/\s+/g, ' ').replace(/\|/g, '\\|')))
    if (!rows.length) return ''
    const caption = node.querySelector('caption')?.textContent.trim()
    const line = (cells) => `| ${cells.join(' | ')} |`
    return `\n\n${caption ? `${caption}\n\n` : ''}${[line(rows[0]), line(rows[0].map(() => '---')), ...rows.slice(1).map(line)].join('\n')}\n\n`
  },
})

async function htmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true })
  const lists = await Promise.all(entries.map((entry) => {
    const name = path.join(directory, entry.name)
    if (entry.isDirectory() && entry.name !== '_next') return htmlFiles(name)
    return entry.isFile() && entry.name === 'index.html' ? [name] : []
  }))
  return lists.flat().sort()
}

const pages = []
for (const filename of await htmlFiles(output)) {
  const html = await readFile(filename, 'utf8')
  const { document } = parseHTML(html)
  const main = document.querySelector('main')?.cloneNode(true)
  const canonical = document.querySelector('link[rel="canonical"]')?.getAttribute('href')
  const robots = document.querySelector('meta[name="robots"]')?.getAttribute('content') || ''
  const relative = path.relative(output, path.dirname(filename)).split(path.sep).join('/')
  const url = `${origin}/${relative ? `${relative}/` : ''}`
  // Preserve existing consolidation decisions and noindex on alternate routes.
  if (!main || /\bnoindex\b/i.test(robots) || canonical !== url) continue
  const title = document.querySelector('h1')?.textContent.trim().replace(/\s+/g, ' ')
  if (!title) throw new Error(`Missing heading: ${url}`)

  main.querySelectorAll('select').forEach((node) => {
    const options = Array.from(node.querySelectorAll('option')).filter((option) => option.getAttribute('value')).map((option) => option.textContent.trim())
    const description = document.createElement('p')
    description.textContent = `${node.hasAttribute('required') ? 'Required' : 'Optional'}. Choices: ${options.join('; ')}.`
    node.replaceWith(description)
  })
  main.querySelectorAll('input[required]').forEach((node) => {
    const description = document.createElement('span')
    description.textContent = ' (required)'
    node.replaceWith(description)
  })
  main.querySelectorAll('script, style, svg, [hidden], [aria-hidden="true"], input, textarea').forEach((node) => node.remove())
  main.querySelectorAll('summary span').forEach((node) => { if (node.textContent.trim() === '+') node.remove() })
  main.querySelectorAll('[href], [src]').forEach((node) => {
    for (const attribute of ['href', 'src']) {
      const value = node.getAttribute(attribute)
      if (value && !/^(?:tel:|sms:|mailto:|data:)/i.test(value)) node.setAttribute(attribute, new URL(value, url).href)
    }
  })
  const text = `Source: ${url}\n\n${markdown.turndown(main.innerHTML).trim()}\n`
  await writeFile(path.join(path.dirname(filename), 'index.md'), text)

  // Keep React's exported markup byte-for-byte apart from the discovery link.
  const alternate = `<link rel="alternate" type="text/markdown" href="${url}index.md"/>`
  if (!html.includes(alternate)) await writeFile(filename, html.replace('</head>', `${alternate}</head>`))
  pages.push({ url, title, markdownUrl: `${url}index.md` })
}

const sitemap = await readFile(path.join(output, 'sitemap.xml'), 'utf8')
const sitemapUrls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1])
for (const url of sitemapUrls) {
  if (!pages.some((page) => page.url === url)) throw new Error(`Sitemap page has no generated Markdown: ${url}`)
}

const directory = [
  '# MetroGlass Pro',
  '',
  '> Shower doors, glazing, glass railings, custom mirrors, glass partitions, and glass repair in New York City.',
  '',
  '## Contact and estimates',
  '',
  '- [Request an estimate](https://metroglasspro.com/contact/): photos, location, service, and building details.',
  '- Phone or text: +1-332-999-3846. Email: operations@metroglasspro.com.',
  '- [Service areas](https://metroglasspro.com/service-areas/): five NYC boroughs, with select Long Island and Northern New Jersey projects.',
  '',
  '## Reading formats',
  '',
  'The canonical HTML pages below contain the full public content. Each has an equivalent index.md file generated from that same content at build time. Request a page with Accept: text/markdown or follow its Markdown alternate link. Published price ranges are planning guidance; project quotes and availability require confirmation.',
  '',
  '## Core glass services',
  '',
  ...pages.filter((page) => /^\/(?:frameless-shower-doors|glazing|glass-railings|custom-mirrors|glass-partitions|glass-repair)-nyc\/$/.test(new URL(page.url).pathname)).map((page) => `- [${page.title}](${page.url}): [Markdown](${page.markdownUrl})`),
  '',
  '## All pages',
  '',
  ...pages.map((page) => `- [${page.title}](${page.url}): [Markdown](${page.markdownUrl})`),
  '',
]
await writeFile(path.join(output, 'llms.txt'), directory.join('\n'))
await writeFile(path.resolve('.next/agent-pages.json'), `${JSON.stringify(pages, null, 2)}\n`)
const baseHeaders = await readFile(path.resolve('public/_headers'), 'utf8')
const markdownHeaders = pages.map((page) => `${new URL(page.markdownUrl).pathname}\n  Content-Type: text/markdown; charset=utf-8\n  Link: <${page.url}>; rel="canonical"`).join('\n\n')
await writeFile(path.join(output, '_headers'), `${baseHeaders}\n\n# Generated Markdown alternate representations\n${markdownHeaders}\n`)
console.log(`Generated Markdown from ${pages.length} canonical HTML pages; all ${sitemapUrls.length} sitemap URLs covered.`)
