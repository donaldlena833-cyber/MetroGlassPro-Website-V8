import ResponsiveImage from '@/components/ResponsiveImage'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Door + Fixed Panel Frameless Shower — NYC Guide',
  description: 'When your shower opening is too wide for a single door, a door + fixed panel is the answer. NYC tub-to-shower conversions, hardware matching, and sizing.',
  alternates: { canonical: 'https://metroglasspro.com/projects/door-fixed-panel-nyc/' },
  openGraph: { images: [{ url: '/assets/og-default.jpg', width: 1200, height: 630, alt: 'MetroGlass Pro custom shower doors and glass installation' }],
    title: 'Door + Fixed Panel Frameless Shower — NYC Guide',
    description: 'For wider openings and tub-to-shower conversions. When and why to choose door + fixed panel.',
  },
  twitter: { images: ['/assets/og-default.jpg'],  card: 'summary_large_image' },
}

export default function DoorFixedPanelArticle() {
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
            Door + Fixed Panel: The Go-To for Wider NYC Shower Openings
          </h1>
          <p className="mt-4 text-charcoal/30 text-sm">February 2026</p>
        </div>
      </section>

      <section className="bg-cream pb-6 sm:pb-10">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <div className="rounded-lg overflow-hidden img-editorial aspect-[16/9]">
            <ResponsiveImage src="/editorial/configurations/door-fixed-panel.jpg" alt="Frameless door plus fixed glass panel with satin brass hardware — side by side configuration" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-cream pb-20 sm:pb-28">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 prose-mgp">
          <p>
            Once your shower opening exceeds about 32–36 inches, a single swing door starts to become impractical — the panel gets too heavy, the swing arc takes up too much bathroom floor, and the glass flexes more than you want. That&apos;s where the door + fixed panel configuration comes in.
          </p>

          <h2>When you need a fixed panel</h2>
          <p>
            A wider opening may benefit from a swinging door paired with a stationary panel; dimensions alone do not determine the layout. The fixed panel is permanently mounted to the wall or a support bar, and the door hinges off either the wall or the fixed panel itself.
          </p>
          <p>
            This is extremely common in NYC bathrooms that have had the bathtub removed and replaced with a walk-in shower. The old tub opening is typically 60&quot; wide — way too wide for a single door. A door + fixed panel fills that space cleanly: usually a 24–28&quot; door plus a 30–34&quot; fixed panel.
          </p>
          <p>
            The fixed panel doesn&apos;t move, so it acts as a structural wall of glass. Combined with the swinging door, you get a full enclosure with the minimal, frameless look — no bulky tracks or frames.
          </p>

          <h2>NYC tub-to-shower conversions</h2>
          <p>
            This is one of the most common renovation projects in NYC apartments. The old bathtub comes out, a new shower base goes in, and the 60&quot; opening needs glass. Door + fixed panel is almost always the right answer here. We do these regularly across all five boroughs.
          </p>
          <p>
            A few things specific to NYC tub-to-shower conversions:
          </p>
          <ul>
            <li><strong>The opening is rarely perfectly level or plumb.</strong> Older NYC buildings settle, tile work varies, and walls are almost never straight. We measure every edge with precision tools and fabricate the glass to match the actual dimensions — not the &quot;should be&quot; dimensions.</li>
            <li><strong>Panel support is project-specific.</strong> For wider configurations, the fabricator should select and confirm an appropriate support method for the panel size and surrounding surfaces.</li>
            <li><strong>COI and building coordination</strong> is the same as any other install — share the requirements early so they can be reviewed before scheduling.</li>
          </ul>

          <h2>Hardware matching: door + panel</h2>
          <p>
            One of the details that separates a premium install from a budget one is hardware coordination. In a door + fixed panel setup, you have multiple pieces of hardware that all need to match:
          </p>
          <ul>
            <li><strong>Hinges</strong> on the swinging door (wall-mount or glass-to-glass)</li>
            <li><strong>U-channel</strong> or wall clamp holding the fixed panel to the wall</li>
            <li><strong>Glass-to-glass clamp</strong> if the door hinges off the fixed panel</li>
            <li><strong>Handle/towel bar</strong> on the swinging door</li>
            <li><strong>Support bar</strong> connecting the top of the fixed panel to the wall</li>
          </ul>
          <p>
            All of these need to be in the same finish — chrome, brushed nickel, matte black, satin brass, or whatever you choose. We spec the complete hardware package as part of the quote so nothing is mismatched. The satin brass hardware in the photo above is a popular choice right now for NYC renovations.
          </p>

          <h2>Typical cost range</h2>
          <p>
            Our published planning range for a door with a fixed panel starts around $1,400–$2,600+. The final quote depends on the measured opening, glass, hardware, access, and installation conditions.
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
                <Link href="/shower-door-replacement-nyc/" className="text-orange text-[14px] hover:opacity-70 transition-opacity block">Replacement Guide →</Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-charcoal text-[14px] uppercase tracking-wider mb-4">Other Configurations</h3>
              <div className="space-y-2">
                <Link href="/projects/single-swing-door-nyc/" className="text-orange text-[14px] hover:opacity-70 transition-opacity block">Single Swing Door →</Link>
                <Link href="/projects/90-corner-enclosure-nyc/" className="text-orange text-[14px] hover:opacity-70 transition-opacity block">90° Corner Enclosure →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-20 sm:py-24 text-center">
        <div className="max-w-2xl mx-auto px-6 sm:px-10">
          <h2 className="heading-serif text-white text-3xl sm:text-4xl">Planning a tub-to-shower conversion?</h2>
          <p className="mt-3 text-white/40 text-base">We&apos;ll measure and quote the full glass package.</p>
          <Link href="/contact/" className="btn-pill btn-primary px-10 py-3.5 text-sm mt-8 inline-flex">Get a Free Estimate</Link>
        </div>
      </section>
    </>
  )
}
