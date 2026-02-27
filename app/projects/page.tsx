import type { Metadata } from 'next'
import Link from 'next/link'
import { projects } from '@/content/projects'

export const metadata: Metadata = {
  title: 'Projects & Insights — NYC Glass Installation | MetroGlassPro',
  description: 'Real project breakdowns and educational insights about shower glass, mirrors, and hardware from MetroGlassPro.',
  alternates: { canonical: 'https://metroglasspro.com/projects/' },
  openGraph: {
    title: 'Projects & Insights — NYC Glass Installation',
    description: 'Real project breakdowns and educational insights about shower glass, mirrors, and hardware.',
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
            Real project breakdowns, material comparisons, and practical insights from our work across NYC.
          </p>
        </div>
      </section>

      <section className="bg-cream pb-28 sm:pb-36">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <div className="space-y-8">
            {projects.map((p) => (
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
