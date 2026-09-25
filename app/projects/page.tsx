import ResponsiveImage from '@/components/ResponsiveImage'
import type { Metadata } from 'next'
import Link from 'next/link'
import { projects, type Project } from '@/content/projects'

const caseSlugs = new Set(['84-clinton-lower-east-side-shower-door-before-after', 'interior-design-collaboration-shower-door-nyc'])
const jobs = projects.filter((project) => caseSlugs.has(project.slug))
const guides = projects.filter((project) => !caseSlugs.has(project.slug))

export const metadata: Metadata = {
  title: 'Glass Projects and Planning Guides',
  description: 'See MetroGlass Pro glass projects and separate planning guides for shower doors, hardware, and building coordination.',
  alternates: { canonical: 'https://metroglasspro.com/projects/' },
  openGraph: { images: [{ url: '/assets/og-default.jpg', width: 1200, height: 630, alt: 'MetroGlass Pro custom shower doors and glass installation' }] },
  twitter: { images: ['/assets/og-default.jpg'], card: 'summary_large_image' },
}

function Cards({ items, kind }: { items: Project[]; kind: 'Project' | 'Planning guide' }) {
  return <div className="space-y-8">{items.map((p) => <Link key={p.slug} href={`/projects/${p.slug}/`} className="group block glass-card overflow-hidden card-lift">
    <div className="grid grid-cols-1 sm:grid-cols-[240px_1fr] lg:grid-cols-[300px_1fr]">
      <div className="aspect-[16/10] sm:aspect-auto overflow-hidden bg-cream-dark">
        <ResponsiveImage src={p.image} alt={p.imageAlt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
      </div>
      <div className="p-5 sm:p-7">
        <p className="text-[11px] font-medium tracking-wider uppercase text-orange mb-3">{kind}</p>
        <h3 className="font-serif text-charcoal text-xl sm:text-2xl mb-2 group-hover:text-charcoal/80 transition-colors">{p.title}</h3>
        <p className="text-warm text-[14px] leading-relaxed mb-3">{p.excerpt}</p>
        <p className="text-[12px] text-charcoal/50">{new Date(p.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' })}</p>
      </div>
    </div>
  </Link>)}</div>
}

export default function ProjectsIndex() {
  return <>
    <section className="bg-cream pt-20 sm:pt-32 pb-14 sm:pb-20">
      <div className="max-w-3xl mx-auto px-6 sm:px-10 anim-hero">
        <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Our Work</p>
        <h1 className="heading-serif text-charcoal text-4xl sm:text-6xl lg:text-7xl">Glass projects, up close.</h1>
        <p className="mt-5 text-warm text-base sm:text-lg max-w-lg leading-relaxed">Browse photographed work first. Planning and configuration guides are grouped separately below.</p>
      </div>
    </section>
    <section aria-labelledby="project-work" className="bg-cream pb-20">
      <div className="max-w-4xl mx-auto px-6 sm:px-10">
        <h2 id="project-work" className="heading-serif text-charcoal text-3xl sm:text-4xl mb-8">Completed work</h2>
        <Link href="/blog/edison-nj-clear-tempered-shower-door-bathroom-renovation/" className="group block glass-card overflow-hidden card-lift mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-[240px_1fr] lg:grid-cols-[300px_1fr]">
            <div className="aspect-[16/10] sm:aspect-auto overflow-hidden bg-cream-dark"><ResponsiveImage src="/gallery/edison-nj-clear-tempered-shower-door-hero.jpg" alt="Clear shower glass with brass hardware in the Edison, New Jersey project" className="w-full h-full object-cover" loading="lazy" /></div>
            <div className="p-5 sm:p-7"><p className="text-[11px] font-medium tracking-wider uppercase text-orange mb-3">Project · Edison, New Jersey</p><h3 className="font-serif text-charcoal text-xl sm:text-2xl mb-2">Clear Glass Shower Enclosure in Edison</h3><p className="text-warm text-[14px] leading-relaxed">See the photographed shower glass project featured on the homepage.</p></div>
          </div>
        </Link>
        <Cards items={jobs} kind="Project" />
        <Link href="/gallery/" className="inline-flex min-h-11 items-center mt-8 text-orange underline underline-offset-4">Browse more glass photos</Link>
      </div>
    </section>
    <section aria-labelledby="project-guides" className="bg-cream-light py-20">
      <div className="max-w-4xl mx-auto px-6 sm:px-10">
        <h2 id="project-guides" className="heading-serif text-charcoal text-3xl sm:text-4xl mb-4">Planning guides</h2>
        <p className="text-warm text-base mb-8">Ideas and tradeoffs to discuss before measuring or ordering glass. Layout and price depend on the actual opening.</p>
        <Cards items={guides} kind="Planning guide" />
        <Link href="/blog/" className="inline-flex min-h-11 items-center mt-8 text-orange underline underline-offset-4">More buyer guides</Link>
      </div>
    </section>
    <section className="bg-charcoal py-20 sm:py-24 text-center">
      <div className="max-w-2xl mx-auto px-6 sm:px-10">
        <h2 className="heading-serif text-white text-3xl sm:text-4xl">Have a project in mind?</h2>
        <p className="mt-3 text-white/70 text-base sm:text-lg">Send photos or a short description to start a project-specific estimate.</p>
        <Link href="/contact/" className="btn-pill btn-primary px-8 py-3.5 text-sm mt-8 inline-flex">Request an Estimate</Link>
      </div>
    </section>
  </>
}
