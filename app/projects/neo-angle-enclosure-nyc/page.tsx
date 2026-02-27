import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Neo-Angle Frameless Shower Enclosure — NYC Guide',
  description: 'Neo-angle enclosures for non-standard and angled shower bases. Why they\'re common in pre-war NYC buildings and how they maximize space.',
  alternates: { canonical: 'https://metroglasspro.com/projects/neo-angle-enclosure-nyc/' },
  openGraph: {
    title: 'Neo-Angle Frameless Shower Enclosure — NYC Guide',
    description: 'Built for odd-shaped showers in pre-war NYC buildings. 3-panel geometry that maximizes space.',
  },
  twitter: { card: 'summary_large_image' },
}

export default function NeoAngleArticle() {
  return (
    <>
      <section className="bg-cream pt-20 sm:pt-32 pb-10 sm:pb-14">
        <div className="max-w-3xl mx-auto px-6 sm:px-10">
          <Link href="/projects/" className="text-orange text-[13px] font-medium hover:opacity-70 transition-opacity mb-6 inline-block">← Back to Projects</Link>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-[11px] font-medium tracking-wider uppercase text-charcoal/40 bg-charcoal/[0.04] px-2.5 py-1 rounded-full">Frameless Shower Doors</span>
            <span className="text-[11px] font-medium tracking-wider uppercase text-charcoal/40 bg-charcoal/[0.04] px-2.5 py-1 rounded-full">Configuration Guide</span>
          </div>
          <h1 className="heading-serif text-charcoal text-3xl sm:text-5xl lg:text-6xl">
            Neo-Angle Enclosure: Solving NYC&apos;s Odd-Shaped Shower Bases
          </h1>
          <p className="mt-4 text-charcoal/30 text-sm">February 2026</p>
        </div>
      </section>

      <section className="bg-cream pb-6 sm:pb-10">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <div className="rounded-lg overflow-hidden img-editorial aspect-[16/9]">
            <img src="/editorial/configurations/neo-angle-enclosure.jpg" alt="Neo-angle frameless glass shower enclosure with five glass panels and brass clamps — overhead view showing pentagonal geometry" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-cream pb-20 sm:pb-28">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 prose-mgp">
          <p>
            Not every shower sits in a neat rectangle. In NYC — especially in pre-war buildings, converted spaces, and apartments with non-standard layouts — you&apos;ll find shower bases that are angled, pentagonal, or otherwise irregular. The neo-angle enclosure is designed specifically for these situations.
          </p>

          <h2>Built for non-standard and angled shower bases</h2>
          <p>
            A neo-angle enclosure typically uses three glass panels arranged in a diamond or pentagon shape across a corner. Instead of two glass walls meeting at 90° (like a standard corner enclosure), the panels are set at angles — usually 135° — which creates a distinct geometric shape.
          </p>
          <p>
            This geometry matches neo-angle shower bases, which have a flat front with angled sides. These bases are manufactured specifically for corner installations where a 90° layout doesn&apos;t fit. The glass follows the angles of the base exactly, creating a tight, custom enclosure.
          </p>
          <p>
            The overhead photo above shows the typical geometry: glass panels connect at multiple angles using precision clamps, with the door at the front. Every angle needs to be measured exactly — there&apos;s no room for error when you&apos;re fabricating glass to fit non-90° angles.
          </p>

          <h2>Common in pre-war NYC buildings</h2>
          <p>
            Pre-war NYC buildings — built between roughly 1900 and 1940 — are full of bathroom layouts that don&apos;t follow modern standards. Walls that aren&apos;t square, corners that aren&apos;t 90°, and shower bases that were installed decades ago in whatever shape fit the available space.
          </p>
          <p>
            We see neo-angle bases frequently in:
          </p>
          <ul>
            <li><strong>Upper West Side and Upper East Side co-ops</strong> where bathrooms were reconfigured during mid-century renovations</li>
            <li><strong>Greenwich Village and West Village</strong> walk-ups with irregular footprints</li>
            <li><strong>Brooklyn brownstones</strong> where bathrooms were added into spaces that weren&apos;t originally designed for them</li>
          </ul>
          <p>
            In these situations, a standard rectangular enclosure won&apos;t work. The neo-angle follows the actual shape of the shower — and because we measure every angle on-site with precision tools, the glass fits exactly.
          </p>

          <h2>How neo-angle maximizes space in small bathrooms</h2>
          <p>
            The angled entry of a neo-angle enclosure cuts across the corner rather than sitting flush against one wall. This has a practical benefit: the doorway faces the bathroom diagonally, which often gives you more clearance for entry and exit compared to a standard corner door.
          </p>
          <p>
            For small NYC bathrooms where every inch matters, this diagonal entry can be the difference between a comfortable shower and one where you&apos;re bumping into the door, the toilet, or the vanity.
          </p>
          <p>
            Neo-angle enclosures also tend to have a smaller total footprint than rectangular enclosures — the angled front wall cuts into what would otherwise be wasted corner space. You get a functional shower in a smaller floor area.
          </p>

          <h2>Cost and complexity</h2>
          <p>
            Neo-angle enclosures are among the more complex configurations we install. Multiple angled glass panels, precision clamps at non-standard angles, and custom fabrication to match irregular bases. Typical range is $2,000–$3,000+ installed in NYC, depending on size and hardware. The measurement process takes longer than a standard enclosure because we need to capture every angle precisely — but the result is a shower that fits your space perfectly.
          </p>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-20 border-t border-charcoal/[0.04]">
        <div className="max-w-3xl mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-charcoal text-[14px] uppercase tracking-wider mb-4">Related Services</h3>
              <div className="space-y-2">
                <Link href="/frameless-shower-doors-nyc/" className="text-orange text-[14px] hover:opacity-70 transition-opacity block">Frameless Shower Doors →</Link>
                <Link href="/shower-door-installation-nyc/" className="text-orange text-[14px] hover:opacity-70 transition-opacity block">Installation Process →</Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-charcoal text-[14px] uppercase tracking-wider mb-4">Other Configurations</h3>
              <div className="space-y-2">
                <Link href="/projects/90-corner-enclosure-nyc/" className="text-orange text-[14px] hover:opacity-70 transition-opacity block">90° Corner Enclosure →</Link>
                <Link href="/projects/single-swing-door-nyc/" className="text-orange text-[14px] hover:opacity-70 transition-opacity block">Single Swing Door →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-20 sm:py-24 text-center">
        <div className="max-w-2xl mx-auto px-6 sm:px-10">
          <h2 className="heading-serif text-white text-3xl sm:text-4xl">Have a non-standard shower base?</h2>
          <p className="mt-3 text-white/40 text-base">We measure every angle and fabricate to fit.</p>
          <Link href="/contact/" className="btn-pill btn-primary px-10 py-3.5 text-sm mt-8 inline-flex">Get a Free Estimate</Link>
        </div>
      </section>
    </>
  )
}
