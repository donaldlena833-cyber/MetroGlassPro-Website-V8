import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Custom Shower Doors Manhattan NY | MetroGlass Pro',
  description: 'Custom shower doors, frameless glass, repair, and replacement for Manhattan apartments, co-ops, condos, and brownstones. COI support and photo estimates.',
  alternates: { canonical: 'https://metroglasspro.com/service-areas/manhattan/' },
  openGraph: {
    title: 'Custom Shower Doors Manhattan NY',
    description: 'Custom shower doors and frameless shower glass for Manhattan apartments, co-ops, condos, brownstones, and high-rises.',
  },
  twitter: { card: 'summary_large_image' },
}

export default function ManhattanPage() {
  return (
    <>
      <section className="bg-cream pt-20 sm:pt-32 pb-14 sm:pb-20">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 anim-hero">
          <Link href="/service-areas/" className="text-orange text-[13px] font-medium hover:opacity-70 transition-opacity mb-6 inline-block">
            ← All Service Areas
          </Link>
          <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Manhattan</p>
          <h1 className="heading-serif text-charcoal text-4xl sm:text-6xl">
            Custom Shower Doors in Manhattan
          </h1>
          <p className="mt-5 text-warm text-base sm:text-lg max-w-xl leading-relaxed">
            Manhattan buyers are usually weighing price, speed, cleanliness, and whether the installer can handle the building without drama. MetroGlass Pro is built for that middle ground, careful enough for design work, responsive enough to feel personal, and organized enough for co-ops, condos, brownstones, and high rises.
          </p>
        </div>
      </section>

      <section className="bg-cream pb-16 sm:pb-24">
        <div className="max-w-3xl mx-auto px-6 sm:px-10">
          <h2 className="font-serif text-charcoal text-2xl sm:text-3xl mb-4">What Manhattan clients count on</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            <div className="glass-card p-5">
              <h3 className="font-semibold text-charcoal text-[15px] mb-2">Precision</h3>
              <p className="text-warm text-[14px] leading-relaxed">Tight bathrooms, uneven walls, and finished tile all require careful field measurements and clean planning.</p>
            </div>
            <div className="glass-card p-5">
              <h3 className="font-semibold text-charcoal text-[15px] mb-2">Cleanliness</h3>
              <p className="text-warm text-[14px] leading-relaxed">Install day needs to feel controlled, respectful, and calm, especially in apartments and design driven renovations.</p>
            </div>
            <div className="glass-card p-5">
              <h3 className="font-semibold text-charcoal text-[15px] mb-2">Building Coordination</h3>
              <p className="text-warm text-[14px] leading-relaxed">COIs, freight elevators, supers, and scheduling windows matter as much as the glass when you work in Manhattan.</p>
            </div>
          </div>

          <h2 className="font-serif text-charcoal text-2xl sm:text-3xl mb-4">Where we work in Manhattan</h2>
          <p className="text-warm text-[15px] leading-relaxed mb-10">
            Pre-war co-ops, luxury condos, brownstone townhouses, new construction high-rises, and boutique buildings. Manhattan bathrooms range from compact apartment layouts to larger primary suites, and the work only goes smoothly when the installer understands both the glass and the building.
          </p>

          <h2 className="font-serif text-charcoal text-2xl sm:text-3xl mb-4">What changes the quote in Manhattan</h2>
          <p className="text-warm text-[15px] leading-relaxed mb-4">
            Manhattan shower door quotes usually depend on the finished opening, the glass layout, and how easy the building makes the work. A single swing door in a finished tiled alcove is a different scope from a door-and-panel layout in a condo with freight elevator rules, a certificate of insurance request, and limited work-hour windows.
          </p>
          <p className="text-warm text-[15px] leading-relaxed mb-10">
            The fastest estimate starts with straight-on photos of the shower opening, the curb or tub edge, both side walls, ceiling height if the glass runs tall, and a note about the hardware finish. If the tile is not finished yet, we can talk through timing, but final glass measurements should wait until the finished surfaces are ready.
          </p>

          <h2 className="font-serif text-charcoal text-2xl sm:text-3xl mb-4">Services available in Manhattan</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {[
              { t: 'Frameless Shower Doors', href: '/frameless-shower-doors-nyc/' },
              { t: 'Shower Door Installation', href: '/shower-door-installation-nyc/' },
              { t: 'Shower Door Replacement', href: '/shower-door-replacement-nyc/' },
              { t: 'Shower Door Repair', href: '/shower-door-repair-nyc/' },
              { t: 'Custom Mirrors', href: '/custom-mirrors-nyc/' },
              { t: 'Glass Partitions', href: '/glass-partitions-nyc/' },
            ].map((s) => (
              <Link key={s.t} href={s.href} className="glass-card p-4 card-lift flex items-center gap-3">
                <span className="text-orange shrink-0">→</span>
                <span className="text-charcoal font-medium text-[14px]">{s.t}</span>
              </Link>
            ))}
          </div>

          <h2 className="font-serif text-charcoal text-2xl sm:text-3xl mb-4">Neighborhoods we serve in Manhattan</h2>
          <div className="flex flex-wrap gap-2 mb-10">
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">Upper East Side</span>
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">Upper West Side</span>
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">Midtown East</span>
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">Midtown West</span>
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">Chelsea</span>
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">Greenwich Village</span>
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">West Village</span>
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">SoHo</span>
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">Tribeca</span>
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">Financial District</span>
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">Harlem</span>
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">East Harlem</span>
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">East Village</span>
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">Lower East Side</span>
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">Murray Hill</span>
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">Gramercy</span>
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">Hell's Kitchen</span>
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">NoHo</span>
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">Flatiron</span>
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">Battery Park City</span>
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">Kips Bay</span>
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">Yorkville</span>
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">Morningside Heights</span>
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">Washington Heights</span>
            <span className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">Inwood</span>
          </div>

          <h2 className="font-serif text-charcoal text-2xl sm:text-3xl mb-4">Recent Manhattan projects & insights</h2>
          <div className="space-y-3 mb-10">
            <Link href="/blog/frameless-shower-doors-manhattan-nyc-planning-guide/" className="glass-card p-4 card-lift block">
              <span className="text-charcoal font-medium text-[14px]">Frameless Shower Doors in Manhattan Planning Guide</span>
              <span className="text-warm text-[13px] block mt-1">A Manhattan-specific guide for measuring, building access, COI timing, hardware, and clean install planning.</span>
            </Link>
            <Link href="/blog/shower-door-repair-manhattan-nyc-planning-guide/" className="glass-card p-4 card-lift block">
              <span className="text-charcoal font-medium text-[14px]">Shower Door Repair in Manhattan</span>
              <span className="text-warm text-[13px] block mt-1">A repair-first path for Manhattan buyers deciding between hinge, sweep, leak, alignment, and replacement conversations.</span>
            </Link>
            <Link href="/projects/84-clinton-lower-east-side-shower-door-before-after/" className="glass-card p-4 card-lift block">
              <span className="text-charcoal font-medium text-[14px]">84 Clinton Shower Door Before and After</span>
              <span className="text-warm text-[13px] block mt-1">A real Lower East Side shower door setup showing how the right enclosure finishes a compact Manhattan bathroom.</span>
            </Link>
            <Link href="/projects/coop-condo-shower-door-installation-nyc/" className="glass-card p-4 card-lift block">
              <span className="text-charcoal font-medium text-[14px]">Co-op and Condo Shower Door Installation</span>
              <span className="text-warm text-[13px] block mt-1">The building rules, COI details, elevator coordination, and timing Manhattan buyers should expect.</span>
            </Link>
            <Link href="/projects/frameless-shower-door-cost-nyc/" className="glass-card p-4 card-lift block">
              <span className="text-charcoal font-medium text-[14px]">Frameless Shower Door Cost in NYC</span>
              <span className="text-warm text-[13px] block mt-1">The quote factors behind glass thickness, hardware finish, panel count, and building coordination.</span>
            </Link>
            <Link href="/projects/crl-geneva-vs-vienna-hinges/" className="glass-card p-4 card-lift block">
              <span className="text-charcoal font-medium text-[14px]">CRL Geneva vs Vienna Hinges</span>
              <span className="text-warm text-[13px] block mt-1">A hardware comparison for Manhattan buyers choosing a frameless shower door package.</span>
            </Link>
            <Link href="/projects/interior-design-collaboration-shower-door-nyc/" className="glass-card p-4 card-lift block">
              <span className="text-charcoal font-medium text-[14px]">Fixing a Shower Door Install Gone Wrong</span>
              <span className="text-warm text-[13px] block mt-1">A real remediation story that shows why precision and accountability matter in Manhattan projects.</span>
            </Link>
          </div>

          <h2 className="font-serif text-charcoal text-2xl sm:text-3xl mb-4">Common Manhattan shower glass decisions</h2>
          <div className="space-y-4 mb-10">
            <div className="glass-card p-5">
              <h3 className="font-semibold text-charcoal text-[15px] mb-2">Repair or replacement?</h3>
              <p className="text-warm text-[14px] leading-relaxed">If the glass is secure and the issue is a sweep, hinge, handle, leak path, or alignment, repair may be worth reviewing first. If the door is undersized, the layout leaks by design, or the hardware no longer fits the opening, replacement is usually the cleaner path.</p>
            </div>
            <div className="glass-card p-5">
              <h3 className="font-semibold text-charcoal text-[15px] mb-2">Swing door or slider?</h3>
              <p className="text-warm text-[14px] leading-relaxed">Tight Manhattan bathrooms need clear swing planning around toilets, vanities, towel bars, and entry doors. A slider or fixed-panel layout can make sense when a swing door would fight the room.</p>
            </div>
            <div className="glass-card p-5">
              <h3 className="font-semibold text-charcoal text-[15px] mb-2">When should glass be measured?</h3>
              <p className="text-warm text-[14px] leading-relaxed">Final measurements should happen after tile, curb, saddle, and wall surfaces are finished. Measuring too early can create fit problems after grout, tile buildup, or wall corrections change the opening.</p>
            </div>
          </div>

          <div className="glass-card p-6 sm:p-8 text-center">
            <p className="text-warm text-[15px] mb-2">Manhattan buyers usually care about three things, fit, cleanliness, and building coordination. That is where we spend our attention.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 mt-5">
              <Link href="/contact/" className="btn-pill btn-primary px-8 py-3 text-sm">Get a Fast Estimate</Link>
              <a href="sms:+13329993846?body=Hi%20MetroGlass%20Pro%2C%20I%20have%20a%20Manhattan%20project%20and%20can%20send%20photos." className="btn-pill btn-outline px-8 py-3 text-sm">Text Photos</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
