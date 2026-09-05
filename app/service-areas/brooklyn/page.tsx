import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Custom Shower Doors in Brooklyn',
  description: 'Custom shower doors, frameless shower glass, repair, and replacement for Brooklyn brownstones, condos, lofts, and renovations.',
  alternates: { canonical: 'https://metroglasspro.com/service-areas/brooklyn/' },
  openGraph: {
    title: 'Custom Shower Doors in Brooklyn',
    description: 'Custom shower doors, frameless shower glass, repair, and replacement for Brooklyn brownstones, condos, lofts, and renovations.',
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
            Custom Shower Doors in Brooklyn
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

          <h2 className="font-serif text-charcoal text-2xl sm:text-3xl mb-4">Planning for brownstones, walk-ups, and condos</h2>
          <p className="text-warm text-[15px] leading-relaxed mb-4">
            Older tile, narrow stairs, walk-up access, and brownstone layouts can affect how glass is measured and brought into the bathroom. Send photos of the opening and tell us about the stairs or elevator so we can plan the visit.
          </p>
          <p className="text-warm text-[15px] leading-relaxed mb-10">
            A good Brooklyn estimate starts with the shower opening, the building type, the neighborhood, and whether the work is connected to a larger bathroom renovation. For brownstones and older apartments, photos of the wall condition and curb are especially useful because out-of-square openings can affect the glass layout.
          </p>

          <h2 className="font-serif text-charcoal text-2xl sm:text-3xl mb-4">Brooklyn quote prep for custom glass</h2>
          <div className="space-y-4 mb-10">
            <div className="glass-card p-5">
              <h3 className="font-semibold text-charcoal text-[15px] mb-2">Brownstone and townhouse openings</h3>
              <p className="text-warm text-[14px] leading-relaxed">For Park Slope, Carroll Gardens, Fort Greene, Bed-Stuy, and similar townhouse bathrooms, send photos that show the full curb, both tiled side walls, ceiling height, and any out-of-square condition near the jambs.</p>
            </div>
            <div className="glass-card p-5">
              <h3 className="font-semibold text-charcoal text-[15px] mb-2">Condos, lofts, and converted buildings</h3>
              <p className="text-warm text-[14px] leading-relaxed">Williamsburg, DUMBO, Downtown Brooklyn, and Greenpoint projects often involve elevator scheduling, protection requirements, and hardware-finish decisions. Those details should be settled before the install window is booked.</p>
            </div>
            <div className="glass-card p-5">
              <h3 className="font-semibold text-charcoal text-[15px] mb-2">Custom shower doors near the renovation finish line</h3>
              <p className="text-warm text-[14px] leading-relaxed">Final glass measurements should wait until tile, curb, saddle, and finished wall surfaces are complete. If the bathroom is still under construction, we can review layout options first and return to exact sizing when the opening is ready.</p>
            </div>
          </div>

          <h2 className="font-serif text-charcoal text-2xl sm:text-3xl mb-4">Services available in Brooklyn</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {[
              { t: 'Frameless Shower Doors', href: '/frameless-shower-doors-nyc/' },
              { t: 'Shower Door Installation', href: '/shower-door-installation-nyc/' },
              { t: 'Shower Door Replacement', href: '/shower-door-replacement-nyc/' },
              { t: 'Custom Mirrors', href: '/custom-mirrors-nyc/' },
              { t: 'Glass Partitions', href: '/glass-partitions-nyc/' },
              { t: 'Shower Door Repair', href: '/shower-door-repair-nyc/' },
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
            <Link href="/projects/door-fixed-panel-nyc/" className="glass-card p-4 card-lift block">
              <span className="text-charcoal font-medium text-[14px]">Door and Fixed Panel Layout</span>
              <span className="text-warm text-[13px] block mt-1">A common custom shower door layout for Brooklyn renovations with one fixed return and one operating door.</span>
            </Link>
            <Link href="/projects/90-corner-enclosure-nyc/" className="glass-card p-4 card-lift block">
              <span className="text-charcoal font-medium text-[14px]">90-Degree Corner Enclosure</span>
              <span className="text-warm text-[13px] block mt-1">A useful reference for larger Brooklyn bathrooms where two glass runs meet at a corner.</span>
            </Link>
            <Link href="/projects/typical-mirror-replacement-nyc/" className="glass-card p-4 card-lift block">
              <span className="text-charcoal font-medium text-[14px]">Mirror Replacement in a NYC Apartment</span>
              <span className="text-warm text-[13px] block mt-1">What a typical mirror replacement looks like — sizing, mounting, timeline.</span>
            </Link>
            <Link href="/projects/crl-geneva-vs-vienna-hinges/" className="glass-card p-4 card-lift block">
              <span className="text-charcoal font-medium text-[14px]">CRL Geneva vs Vienna Hinges</span>
              <span className="text-warm text-[13px] block mt-1">Comparing two popular frameless shower door hinges.</span>
            </Link>
          </div>

          <h2 className="font-serif text-charcoal text-2xl sm:text-3xl mb-4">Brooklyn shower door planning notes</h2>
          <div className="space-y-4 mb-10">
            <div className="glass-card p-5">
              <h3 className="font-semibold text-charcoal text-[15px] mb-2">Brownstone and townhouse bathrooms</h3>
              <p className="text-warm text-[14px] leading-relaxed">Older Brooklyn bathrooms may have non-plumb walls, rebuilt curbs, or tile surfaces that are not perfectly square. The glass layout should follow the real opening, not an assumed stock size.</p>
            </div>
            <div className="glass-card p-5">
              <h3 className="font-semibold text-charcoal text-[15px] mb-2">Condo and new-construction installs</h3>
              <p className="text-warm text-[14px] leading-relaxed">Newer Brooklyn buildings still need coordination around access, elevator timing, protection requirements, and hardware finish choices. A clean install depends on scheduling as much as fabrication.</p>
            </div>
            <div className="glass-card p-5">
              <h3 className="font-semibold text-charcoal text-[15px] mb-2">Repair calls</h3>
              <p className="text-warm text-[14px] leading-relaxed">For repair questions, send photos of the hinge, handle, sweep, leak point, and full door. That lets us separate hardware service from cases where replacement is more practical.</p>
            </div>
          </div>

          <div className="glass-card p-6 sm:p-8 text-center">
            <p className="text-warm text-[15px] mb-2">Brooklyn brownstone, loft, and condo bathrooms often have unique dimensions, so every panel gets measured to the actual finished opening.</p>
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
