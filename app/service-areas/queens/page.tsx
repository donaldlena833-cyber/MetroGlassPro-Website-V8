import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Shower Glass Installation Queens — Frameless Doors & Mirrors',
  description: 'Custom frameless shower doors and mirrors installed across Queens. Single-family, multi-unit, and new developments. Free estimates.',
  alternates: { canonical: 'https://metroglasspro.com/service-areas/queens/' },
  openGraph: {
    title: 'Shower Glass Installation Queens — Frameless Doors & Mirrors',
    description: 'Custom frameless shower doors and mirrors installed across Queens. Single-family, multi-unit, and new developments. Free estimates.',
  },
  twitter: { card: 'summary_large_image' },
}

export default function QueensPage() {
  return (
    <>
      <section className="bg-cream pt-20 sm:pt-32 pb-14 sm:pb-20">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 anim-hero">
          <Link href="/service-areas/" className="text-orange text-[13px] font-medium hover:opacity-70 transition-opacity mb-6 inline-block">
            ← All Service Areas
          </Link>
          <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Queens</p>
          <h1 className="heading-serif text-charcoal text-4xl sm:text-6xl">
            Shower Glass Installation in Queens
          </h1>
          <p className="mt-5 text-warm text-base sm:text-lg max-w-xl leading-relaxed">
            Queens is NYC's most diverse borough — and its housing stock reflects that. From single-family homes in Bayside to new high-rises in Long Island City, we install custom shower glass in every type of property. Queens homeowners often upgrade from builder-grade framed doors to frameless, which is one of the most impactful bathroom improvements you can make.
          </p>
        </div>
      </section>

      <section className="bg-cream pb-16 sm:pb-24">
        <div className="max-w-3xl mx-auto px-6 sm:px-10">
          <h2 className="font-serif text-charcoal text-2xl sm:text-3xl mb-4">Building types we work with</h2>
          <p className="text-warm text-[15px] leading-relaxed mb-10">
            Single-family homes, two-family homes, garden apartments, co-ops, new-construction condos, and mixed-use buildings. Queens bathrooms tend to be larger than Manhattan, giving more room for full frameless enclosures.
          </p>

          <h2 className="font-serif text-charcoal text-2xl sm:text-3xl mb-4">Services available in Queens</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {[
              { t: 'Frameless Shower Doors', href: '/frameless-shower-doors-nyc/' },
              { t: 'Shower Door Installation', href: '/shower-door-installation-nyc/' },
              { t: 'Shower Door Replacement', href: '/shower-door-replacement-nyc/' },
              { t: 'Custom Mirrors & Glass', href: '/services/' },
              { t: 'Glass Partitions & Railings', href: '/services/' },
              { t: 'Glass Repair', href: '/services/' },
            ].map((s) => (
              <Link key={s.t} href={s.href} className="glass-card p-4 card-lift flex items-center gap-3">
                <span className="text-orange shrink-0">→</span>
                <span className="text-charcoal font-medium text-[14px]">{s.t}</span>
              </Link>
            ))}
          </div>

          <h2 className="font-serif text-charcoal text-2xl sm:text-3xl mb-4">Neighborhoods we serve in Queens</h2>
          <div className="flex flex-wrap gap-2 mb-10">
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">Astoria</span>
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">Long Island City</span>
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">Flushing</span>
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">Forest Hills</span>
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">Jackson Heights</span>
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">Bayside</span>
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">Rego Park</span>
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">Woodside</span>
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">Sunnyside</span>
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">Jamaica</span>
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">Ridgewood</span>
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">Fresh Meadows</span>
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">Kew Gardens</span>
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">Howard Beach</span>
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">Whitestone</span>
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">Douglaston</span>
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">Little Neck</span>
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">Maspeth</span>
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">Middle Village</span>
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">Ozone Park</span>
          </div>

          <h2 className="font-serif text-charcoal text-2xl sm:text-3xl mb-4">Recent projects & insights</h2>
          <div className="space-y-3 mb-10">
            <Link href="/projects/typical-mirror-replacement-nyc/" className="glass-card p-4 card-lift block">
              <span className="text-charcoal font-medium text-[14px]">Mirror Replacement in a NYC Apartment</span>
              <span className="text-warm text-[13px] block mt-1">What a typical mirror replacement looks like — sizing, mounting, timeline.</span>
            </Link>
            <Link href="/projects/crl-geneva-vs-vienna-hinges/" className="glass-card p-4 card-lift block">
              <span className="text-charcoal font-medium text-[14px]">CRL Geneva vs Vienna Hinges</span>
              <span className="text-warm text-[13px] block mt-1">Comparing two popular frameless shower door hinges.</span>
            </Link>
          </div>

          <div className="glass-card p-6 sm:p-8 text-center">
            <p className="text-warm text-[15px] mb-2">Queens homes often have more space for full glass enclosures — let us show you the options.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 mt-5">
              <Link href="/contact/" className="btn-pill btn-primary px-8 py-3 text-sm">Get a Free Estimate</Link>
              <a href="tel:+13329993846" className="btn-pill btn-outline px-8 py-3 text-sm">(332) 999-3846</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
