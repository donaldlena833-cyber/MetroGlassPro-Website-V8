import type { Metadata } from 'next'
import Link from 'next/link'
import { projects } from '@/content/projects'

const visibleProjects = projects.filter((project) => !project.slug.startsWith('metroglasspro-project-'))

export const metadata: Metadata = {
  title: 'Real Projects and Buyer Guides',
  description: 'Browse MetroGlass Pro project stories, before and afters, and practical shower door guides from Manhattan and NYC jobs.',
  alternates: { canonical: 'https://metroglasspro.com/projects/' },
  openGraph: {
    title: 'Real Projects and Buyer Guides',
    description: 'Browse project stories, before and afters, and practical shower door guides from Manhattan and NYC jobs.',
  },
  twitter: { card: 'summary_large_image' },
}

export default function ProjectsIndex() {
  return (
    <>
      <section className="bg-cream pt-20 sm:pt-32 pb-14 sm:pb-20">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 anim-hero">
          <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Projects & Insights</p>
          <h1 className="heading-serif text-charcoal text-4xl sm:text-6xl lg:text-7xl">
            From the field.
          </h1>
          <p className="mt-5 text-warm text-base sm:text-lg max-w-lg leading-relaxed">
            Real Manhattan and NYC project stories, before and afters, material comparisons, and practical buyer guidance from the field.
          </p>
        </div>
      </section>

      <section className="bg-cream pb-28 sm:pb-36">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <div className="space-y-8">
            <a
              href="/blog/2026-05-10-glass-tariffs-shower-door-prices-nyc"
              className="group block glass-card overflow-hidden card-lift"
            >
              <div className="grid grid-cols-1 sm:grid-cols-[240px_1fr] lg:grid-cols-[300px_1fr]">
                <div className="aspect-[16/10] sm:aspect-auto overflow-hidden bg-cream-dark">
                  <img
                    src="/editorial/shower-door.jpg"
                    alt="Frameless shower door hardware and glass in a finished bathroom"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 sm:p-7">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-[11px] font-medium tracking-wider uppercase text-orange/70 bg-orange/[0.08] px-2 py-0.5 rounded-full">Market Update</span>
                    <span className="text-[11px] font-medium tracking-wider uppercase text-charcoal/40 bg-charcoal/[0.04] px-2 py-0.5 rounded-full">Buyer Guide</span>
                  </div>
                  <h2 className="font-serif text-charcoal text-xl sm:text-2xl mb-2 group-hover:text-charcoal/80 transition-colors">
                    Why Glass Tariffs Are Pushing Shower Door Prices Higher in NYC
                  </h2>
                  <p className="text-warm text-[14px] leading-relaxed mb-3">
                    A practical look at tariffs, supplier changes, aluminum hardware, glass costs, and how construction-price pressure reaches NYC bathroom renovation quotes.
                  </p>
                  <div className="flex flex-wrap gap-x-5 gap-y-1 text-[12px] text-charcoal/30">
                    <span>Market update</span>
                    <span>May 2026</span>
                  </div>
                </div>
              </div>
            </a>

            <a
              href="/blog/2026-05-09-honest-shower-door-repair-nyc"
              className="group block glass-card overflow-hidden card-lift"
            >
              <div className="grid grid-cols-1 sm:grid-cols-[240px_1fr] lg:grid-cols-[300px_1fr]">
                <div className="aspect-[16/10] sm:aspect-auto overflow-hidden bg-cream-dark">
                  <img
                    src="/editorial/tools.jpg"
                    alt="Shower door hardware and installation tools for repair work"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 sm:p-7">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-[11px] font-medium tracking-wider uppercase text-orange/70 bg-orange/[0.08] px-2 py-0.5 rounded-full">Repair Guide</span>
                    <span className="text-[11px] font-medium tracking-wider uppercase text-charcoal/40 bg-charcoal/[0.04] px-2 py-0.5 rounded-full">Buyer Guide</span>
                  </div>
                  <h2 className="font-serif text-charcoal text-xl sm:text-2xl mb-2 group-hover:text-charcoal/80 transition-colors">
                    Honest Shower Door Repair in NYC
                  </h2>
                  <p className="text-warm text-[14px] leading-relaxed mb-3">
                    How to tell when a shower door needs a simple repair, an adjustment, new parts, or a full replacement before overpaying for the wrong fix.
                  </p>
                  <div className="flex flex-wrap gap-x-5 gap-y-1 text-[12px] text-charcoal/30">
                    <span>Repair guidance</span>
                    <span>May 2026</span>
                  </div>
                </div>
              </div>
            </a>

            <a
              href="/blog/finished-tile-shower-glass-measurement-manhattan/"
              className="group block glass-card overflow-hidden card-lift"
            >
              <div className="grid grid-cols-1 sm:grid-cols-[240px_1fr] lg:grid-cols-[300px_1fr]">
                <div className="aspect-[16/10] sm:aspect-auto overflow-hidden bg-cream-dark">
                  <img
                    src="/editorial/design-process-sketch.jpg"
                    alt="Shower glass planning sketch for a Manhattan bathroom opening"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 sm:p-7">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-[11px] font-medium tracking-wider uppercase text-orange/70 bg-orange/[0.08] px-2 py-0.5 rounded-full">Design Guide</span>
                    <span className="text-[11px] font-medium tracking-wider uppercase text-charcoal/40 bg-charcoal/[0.04] px-2 py-0.5 rounded-full">Manhattan</span>
                  </div>
                  <h2 className="font-serif text-charcoal text-xl sm:text-2xl mb-2 group-hover:text-charcoal/80 transition-colors">
                    Shower Glass Planning for Finished-Tile Manhattan Bathrooms
                  </h2>
                  <p className="text-warm text-[14px] leading-relaxed mb-3">
                    How finished walls, curb slope, hardware clearances, and co-op rules affect custom shower glass before fabrication.
                  </p>
                  <div className="flex flex-wrap gap-x-5 gap-y-1 text-[12px] text-charcoal/30">
                    <span>Design guide</span>
                    <span>April 2026</span>
                  </div>
                </div>
              </div>
            </a>

            {visibleProjects.map((p) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}/`}
                className="group block glass-card overflow-hidden card-lift"
              >
                <div className="grid grid-cols-1 sm:grid-cols-[240px_1fr] lg:grid-cols-[300px_1fr]">
                  <div className="aspect-[16/10] sm:aspect-auto overflow-hidden bg-cream-dark">
                    <img
                      src={p.image}
                      alt={p.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5 sm:p-7">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {p.scenarioType === 'typical' && (
                        <span className="text-[11px] font-medium tracking-wider uppercase text-orange/70 bg-orange/[0.08] px-2 py-0.5 rounded-full">Typical Scenario</span>
                      )}
                      {p.services.map((s) => (
                        <span key={s} className="text-[11px] font-medium tracking-wider uppercase text-charcoal/40 bg-charcoal/[0.04] px-2 py-0.5 rounded-full">{s}</span>
                      ))}
                    </div>
                    <h2 className="font-serif text-charcoal text-xl sm:text-2xl mb-2 group-hover:text-charcoal/80 transition-colors">
                      {p.title}
                    </h2>
                    <p className="text-warm text-[14px] leading-relaxed mb-3">{p.excerpt}</p>
                    <div className="flex flex-wrap gap-x-5 gap-y-1 text-[12px] text-charcoal/30">
                      {p.durationRange && <span>Duration: {p.durationRange}</span>}
                      {p.priceRange && <span>Range: {p.priceRange}</span>}
                      <span>{new Date(p.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-20 sm:py-24 text-center">
        <div className="max-w-2xl mx-auto px-6 sm:px-10">
          <h2 className="heading-serif text-white text-3xl sm:text-4xl">Have a project in mind?</h2>
          <p className="mt-3 text-white/40 text-base sm:text-lg">We&apos;d love to hear about it.</p>
          <Link href="/contact/" className="btn-pill btn-primary px-8 py-3.5 text-sm mt-8 inline-flex">Get a Free Estimate</Link>
        </div>
      </section>
    </>
  )
}
