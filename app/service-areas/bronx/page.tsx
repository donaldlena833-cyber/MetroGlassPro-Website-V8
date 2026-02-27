import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Shower Glass Installation Bronx — Frameless Doors & Mirrors',
  description: 'Custom frameless shower doors and mirrors installed across The Bronx. Residential and commercial. Free estimates.',
  alternates: { canonical: 'https://metroglasspro.com/service-areas/bronx/' },
  openGraph: {
    title: 'Shower Glass Installation Bronx — Frameless Doors & Mirrors',
    description: 'Custom frameless shower doors and mirrors installed across The Bronx. Residential and commercial. Free estimates.',
  },
  twitter: { card: 'summary_large_image' },
}

export default function BronxPage() {
  return (
    <>
      <section className="bg-cream pt-20 sm:pt-32 pb-14 sm:pb-20">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 anim-hero">
          <Link href="/service-areas/" className="text-orange text-[13px] font-medium hover:opacity-70 transition-opacity mb-6 inline-block">
            ← All Service Areas
          </Link>
          <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">The Bronx</p>
          <h1 className="heading-serif text-charcoal text-4xl sm:text-6xl">
            Shower Glass Installation in The Bronx
          </h1>
          <p className="mt-5 text-warm text-base sm:text-lg max-w-xl leading-relaxed">
            From Riverdale's spacious single-family homes to new developments in Mott Haven, The Bronx has a growing demand for quality glass installation. We serve the entire borough with the same precision and professionalism we bring to every NYC job — custom measurements, premium hardware, and a clean, on-time install.
          </p>
        </div>
      </section>

      <section className="bg-cream pb-16 sm:pb-24">
        <div className="max-w-3xl mx-auto px-6 sm:px-10">
          <h2 className="font-serif text-charcoal text-2xl sm:text-3xl mb-4">Building types we work with</h2>
          <p className="text-warm text-[15px] leading-relaxed mb-10">
            Single-family homes, multi-family buildings, co-ops, new construction, and renovated apartments. Many Bronx homes are mid-century builds being updated, making shower door replacement one of the most popular requests.
          </p>

          <h2 className="font-serif text-charcoal text-2xl sm:text-3xl mb-4">Services available in The Bronx</h2>
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

          <h2 className="font-serif text-charcoal text-2xl sm:text-3xl mb-4">Neighborhoods we serve in The Bronx</h2>
          <div className="flex flex-wrap gap-2 mb-10">
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">Riverdale</span>
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">Pelham Bay</span>
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">Throgs Neck</span>
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">Morris Park</span>
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">Kingsbridge</span>
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">Fordham</span>
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">Wakefield</span>
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">Co-op City</span>
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">Mott Haven</span>
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">Hunts Point</span>
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">Parkchester</span>
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">City Island</span>
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">Country Club</span>
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">Soundview</span>
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">Woodlawn</span>
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
            <p className="text-warm text-[15px] mb-2">Bronx homeowners upgrading bathrooms — we provide free on-site estimates with same-week availability.</p>
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
