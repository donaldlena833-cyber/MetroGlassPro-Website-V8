import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Custom Shower Doors Queens NY | MetroGlass Pro',
  description: 'Custom shower doors and frameless shower glass for Queens homes, co-ops, condos, and multi-unit buildings. Photo-based estimates, COI support, repair and replacement.',
  alternates: { canonical: 'https://metroglasspro.com/service-areas/queens/' },
  openGraph: {
    title: 'Custom Shower Doors Queens NY',
    description: 'Custom shower doors and frameless shower glass for Queens homes, co-ops, condos, and multi-unit buildings.',
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
            Custom Shower Doors in Queens
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

          <h2 className="font-serif text-charcoal text-2xl sm:text-3xl mb-4">Why Queens shower glass needs its own planning</h2>
          <p className="text-warm text-[15px] leading-relaxed mb-4">
            Queens projects need more specific planning because the borough has a different mix of homes than Manhattan: wider bathrooms, older two-family houses, renovated basements, newer Long Island City condos, and co-op buildings with their own access rules.
          </p>
          <p className="text-warm text-[15px] leading-relaxed mb-10">
            For estimates, the most useful details are the neighborhood, shower type, whether the project is repair or replacement, photos of the full opening, and any building access notes. If the project is in a co-op or condo, mention whether the building asks for insurance paperwork, work-hour windows, or elevator scheduling.
          </p>

          <h2 className="font-serif text-charcoal text-2xl sm:text-3xl mb-4">Queens quote prep for faster answers</h2>
          <div className="space-y-4 mb-10">
            <div className="glass-card p-5">
              <h3 className="font-semibold text-charcoal text-[15px] mb-2">Homes and two-family houses</h3>
              <p className="text-warm text-[14px] leading-relaxed">Many Queens shower door projects start in renovated single-family or two-family bathrooms. Send the finished opening, curb or tub edge, side-wall photos, and whether the door should swing, slide, or stay mostly fixed.</p>
            </div>
            <div className="glass-card p-5">
              <h3 className="font-semibold text-charcoal text-[15px] mb-2">Co-ops, condos, and elevators</h3>
              <p className="text-warm text-[14px] leading-relaxed">Long Island City, Forest Hills, Rego Park, and other elevator buildings may require COI paperwork, protection rules, or delivery windows. Sharing those rules early keeps the glass install from getting delayed after fabrication.</p>
            </div>
            <div className="glass-card p-5">
              <h3 className="font-semibold text-charcoal text-[15px] mb-2">Repair versus replacement</h3>
              <p className="text-warm text-[14px] leading-relaxed">If a Queens shower door is dragging, leaking, or missing hardware, start with photos of the hinge, sweep, handle, and full opening. We can usually tell whether a repair conversation is worth it or whether a clean replacement layout is the better path.</p>
            </div>
          </div>

          <h2 className="font-serif text-charcoal text-2xl sm:text-3xl mb-4">Services available in Queens</h2>
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
            <Link href="/projects/walk-in-shower-panel-nyc/" className="glass-card p-4 card-lift block">
              <span className="text-charcoal font-medium text-[14px]">Walk-In Shower Panel Planning</span>
              <span className="text-warm text-[13px] block mt-1">A useful layout reference for Queens bathrooms where a fixed panel can feel cleaner than a full door system.</span>
            </Link>
            <Link href="/projects/frameless-shower-door-cost-nyc/" className="glass-card p-4 card-lift block">
              <span className="text-charcoal font-medium text-[14px]">Frameless Shower Door Cost in NYC</span>
              <span className="text-warm text-[13px] block mt-1">The quote factors Queens buyers should understand before choosing glass thickness, hardware, and layout.</span>
            </Link>
            <Link href="/projects/84-clinton-lower-east-side-shower-door-before-after/" className="glass-card p-4 card-lift block">
              <span className="text-charcoal font-medium text-[14px]">Compact Bathroom Before and After</span>
              <span className="text-warm text-[13px] block mt-1">A real project example for buyers comparing custom glass options in tighter NYC bathrooms.</span>
            </Link>
            <Link href="/projects/crl-geneva-vs-vienna-hinges/" className="glass-card p-4 card-lift block">
              <span className="text-charcoal font-medium text-[14px]">CRL Geneva vs Vienna Hinges</span>
              <span className="text-warm text-[13px] block mt-1">Comparing two popular frameless shower door hinges.</span>
            </Link>
          </div>

          <h2 className="font-serif text-charcoal text-2xl sm:text-3xl mb-4">Queens buyer questions we answer early</h2>
          <div className="space-y-4 mb-10">
            <div className="glass-card p-5">
              <h3 className="font-semibold text-charcoal text-[15px] mb-2">Can an old framed tub door become frameless?</h3>
              <p className="text-warm text-[14px] leading-relaxed">Often yes, but the curb or tub edge, wall plumb, tile condition, and available overlap decide which layout is realistic. Photos help us tell whether a slider, swing door, or fixed panel is the better first conversation.</p>
            </div>
            <div className="glass-card p-5">
              <h3 className="font-semibold text-charcoal text-[15px] mb-2">Is repair worth it?</h3>
              <p className="text-warm text-[14px] leading-relaxed">A loose handle, worn sweep, minor hinge issue, or alignment problem may be repairable. If the door leaks because of the original layout or the hardware no longer matches the glass, replacement may save time.</p>
            </div>
            <div className="glass-card p-5">
              <h3 className="font-semibold text-charcoal text-[15px] mb-2">What photos should I send?</h3>
              <p className="text-warm text-[14px] leading-relaxed">Send one wide photo of the bathroom, one straight-on photo of the shower, close-ups of both side walls, the curb or tub edge, and the hardware finish you want to match.</p>
            </div>
          </div>

          <div className="glass-card p-6 sm:p-8 text-center">
            <p className="text-warm text-[15px] mb-2">Queens homes often have more space for full glass enclosures, but the right layout still starts with photos, measurements, and the building details.</p>
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
