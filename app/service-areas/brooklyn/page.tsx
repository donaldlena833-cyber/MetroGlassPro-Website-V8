import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Shower Glass Installation Brooklyn — Frameless Doors & Mirrors',
  description: 'Custom frameless shower doors and mirrors installed across Brooklyn. Brownstones, condos, new construction. Free estimates.',
  alternates: { canonical: 'https://metroglasspro.com/service-areas/brooklyn/' },
  openGraph: {
    title: 'Shower Glass Installation Brooklyn — Frameless Doors & Mirrors',
    description: 'Custom frameless shower doors and mirrors installed across Brooklyn. Brownstones, condos, new construction. Free estimates.',
  },
  twitter: { card: 'summary_large_image' },
}

export default function BrooklynPage() {
  return (
    <>
      <section className="bg-cream pt-20 sm:pt-32 pb-14 sm:pb-20">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 anim-hero">
          <Link href="/service-areas/" className="text-orange text-[13px] font-medium hover:opacity-70 transition-opacity mb-6 inline-block">
            ← All Service Areas
          </Link>
          <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Brooklyn</p>
          <h1 className="heading-serif text-charcoal text-4xl sm:text-6xl">
            Shower Glass Installation in Brooklyn
          </h1>
          <p className="mt-5 text-warm text-base sm:text-lg max-w-xl leading-relaxed">
            Brooklyn's mix of classic brownstones, converted lofts, and new-construction condos means every bathroom is different. We measure each one individually and fabricate glass to fit — no stock sizes. Whether you're renovating a Park Slope townhouse or finishing a new build in Williamsburg, we handle the full process from measurement to install.
          </p>
        </div>
      </section>

      <section className="bg-cream pb-16 sm:pb-24">
        <div className="max-w-3xl mx-auto px-6 sm:px-10">
          <h2 className="font-serif text-charcoal text-2xl sm:text-3xl mb-4">Building types we work with</h2>
          <p className="text-warm text-[15px] leading-relaxed mb-10">
            Brownstone townhouses, converted loft buildings, new-construction condos, walk-up apartments, and multi-family homes. Brooklyn bathrooms often have original tile work and non-standard dimensions that require precision measuring.
          </p>

          <h2 className="font-serif text-charcoal text-2xl sm:text-3xl mb-4">Services available in Brooklyn</h2>
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

          <h2 className="font-serif text-charcoal text-2xl sm:text-3xl mb-4">Neighborhoods we serve in Brooklyn</h2>
          <div className="flex flex-wrap gap-2 mb-10">
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">Park Slope</span>
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">Williamsburg</span>
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">DUMBO</span>
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">Brooklyn Heights</span>
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">Bed-Stuy</span>
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">Cobble Hill</span>
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">Carroll Gardens</span>
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">Greenpoint</span>
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">Bushwick</span>
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">Bay Ridge</span>
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">Sunset Park</span>
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">Crown Heights</span>
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">Prospect Heights</span>
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">Fort Greene</span>
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">Boerum Hill</span>
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">Red Hook</span>
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">Flatbush</span>
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">Bensonhurst</span>
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">Brighton Beach</span>
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">Sheepshead Bay</span>
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">Dyker Heights</span>
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">Kensington</span>
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
            <p className="text-warm text-[15px] mb-2">Brooklyn brownstone bathrooms often have unique dimensions — we custom-measure every panel to fit.</p>
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
