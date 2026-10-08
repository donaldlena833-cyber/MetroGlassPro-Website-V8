import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ResponsiveImage from '@/components/ResponsiveImage'
import EstimateRequestForm from '@/components/EstimateRequestForm'
import { neighborhoodGuides } from '@/content/neighborhood-guides'

export const dynamicParams = false
export function generateStaticParams() { return neighborhoodGuides.map(({ slug }) => ({ neighborhood: slug })) }
type Props = { params: Promise<{ neighborhood: string }> }
const origin = 'https://metroglasspro.com'
const date = '2026-10-08'
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { neighborhood } = await params
  const guide = neighborhoodGuides.find((item) => item.slug === neighborhood)
  if (!guide) return {}
  const canonical = `${origin}/blog/${guide.slug}/`
  return { title: guide.title, description: guide.description, alternates: { canonical },
    openGraph: { title: guide.title, description: guide.description, url: canonical, type: 'article', publishedTime: date, modifiedTime: date, images: [{ url: `${origin}${guide.photo}`, alt: guide.photoAlt }] } }
}
export default async function NeighborhoodPage({ params }: Props) {
  const { neighborhood } = await params
  const guide = neighborhoodGuides.find((item) => item.slug === neighborhood)
  if (!guide) notFound()
  const canonical = `${origin}/blog/${guide.slug}/`
  const organization = { '@type': 'Organization', '@id': `${origin}/#organization`, name: 'MetroGlass Pro', url: origin, logo: { '@type': 'ImageObject', url: `${origin}/assets/logo.png` } }
  const schema = { '@context': 'https://schema.org', '@type': 'Article', '@id': `${canonical}#article`, headline: guide.title, description: guide.description, datePublished: date, dateModified: date, mainEntityOfPage: canonical, author: organization, publisher: organization, image: `${origin}${guide.photo}` }
  return <article className="bg-cream text-charcoal">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
    <header className="max-w-6xl mx-auto px-6 sm:px-10 pt-20 sm:pt-28 pb-10 anim-hero">
      <Link href="/blog/" className="text-orange text-sm underline underline-offset-4">MetroGlass Pro · Glass guides</Link>
      <p className="mt-8 text-sm text-warm">{guide.neighborhood}</p>
      <h1 className="heading-serif text-4xl sm:text-6xl max-w-3xl mt-3">{guide.title}</h1>
      <p className="mt-5 text-sm text-warm">By <Link href="/about/" className="underline underline-offset-4">MetroGlass Pro</Link> · <time dateTime={date}>October 8, 2026</time></p>
      <a href="#estimate-brief" className="btn-pill btn-primary px-6 py-3 mt-6 inline-flex">Plan this glass project</a>
    </header>
    <figure className="max-w-6xl mx-auto px-6 sm:px-10 mb-12">
      <ResponsiveImage src={guide.photo} alt={guide.photoAlt} className="w-full max-h-[660px] object-contain bg-cream-dark" loading="eager" sizes="(min-width: 1280px) 1080px, 100vw" />
      <figcaption className="text-sm text-warm leading-relaxed max-w-3xl mt-4">{guide.photoCaption}</figcaption>
    </figure>
    <div className="max-w-6xl mx-auto px-6 sm:px-10 grid lg:grid-cols-[minmax(0,720px)_1fr] gap-12 pb-16">
      <div className="min-w-0">
        <div className="prose-mgp">{guide.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        <p className="font-serif text-2xl sm:text-3xl border-l-2 border-orange pl-5 my-10">{guide.takeaway}</p>
        {guide.sections.map((section, index) => <section key={section.id} id={section.id} className="scroll-mt-28 mb-12">
          <div className="prose-mgp">
            <h2>{section.title}</h2>
            {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {section.checklist && <ul>{section.checklist.map((item) => <li key={item}>{item}</li>)}</ul>}
          </div>
          {section.links && <div className="flex flex-col items-start gap-3 mt-5">{section.links.map((link) => <Link key={link.href} href={link.href} className="text-orange text-sm underline underline-offset-4 hover:text-charcoal transition-colors">{link.label}</Link>)}</div>}
          {index === guide.illustration.after && <figure className="mt-10">
            <div className={guide.illustration.portrait ? 'aspect-[3/4] max-w-sm mx-auto overflow-hidden' : ''}>
              <ResponsiveImage src={guide.illustration.src} alt={guide.illustration.alt} width={1536} height={1024} className={guide.illustration.portrait ? 'w-full h-full object-cover' : 'w-full h-auto'} loading="lazy" sizes={guide.illustration.portrait ? '600px' : '(min-width: 1024px) 720px, 100vw'} />
            </div>
            <figcaption className="text-warm text-sm leading-relaxed mt-3">{guide.illustration.caption}</figcaption>
          </figure>}
        </section>)}
        <section id="estimate-brief" className="scroll-mt-28 border-t border-charcoal/15 pt-10">
          <h2 className="font-serif text-3xl sm:text-4xl">Bring the actual room into the estimate.</h2>
          <p className="text-warm mt-4 leading-relaxed">For this project, useful photos show:</p>
          <ul className="list-disc pl-5 text-warm mt-3 mb-6 space-y-2">{guide.brief.photos.map((item) => <li key={item}>{item}</li>)}</ul>
          <EstimateRequestForm projectContext={{ label: guide.neighborhood, url: canonical, scope: guide.brief.scope, service: guide.brief.service }} />
        </section>
      </div>
      <aside className="lg:order-none order-first">
        <nav aria-label="In this article" className="lg:sticky lg:top-28 border-t border-charcoal/15 pt-5">
          <p className="text-sm text-warm mb-4">In this article</p>
          <ul className="space-y-4 text-sm">{guide.sections.map((section) => <li key={section.id}><a href={`#${section.id}`} className="hover:text-orange transition-colors underline underline-offset-4">{section.title}</a></li>)}<li><a href="#estimate-brief" className="text-orange underline underline-offset-4">Prepare your estimate</a></li></ul>
        </nav>
      </aside>
    </div>
    <section className="max-w-6xl mx-auto px-6 sm:px-10 border-t border-charcoal/15 py-12">
      <h2 className="font-serif text-3xl mb-6">Another room question?</h2>
      <div className="space-y-5">{neighborhoodGuides.filter((item) => item.slug !== guide.slug).map((item) => <Link key={item.slug} href={`/blog/${item.slug}/`} className="block underline underline-offset-4 hover:text-orange transition-colors">{item.title}</Link>)}</div>
    </section>
  </article>
}
