import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Shower Door Installation NYC',
  description: 'NYC shower door installation for frameless glass, sliders, tub enclosures, and apartment bathrooms. Precise field measurements, clean work, and COI support.',
  alternates: { canonical: 'https://metroglasspro.com/shower-door-installation-nyc/' },
  openGraph: {
    title: 'Shower Door Installation NYC | MetroGlass Pro',
    description: 'Shower door installation in NYC for frameless glass, framed doors, sliders, tub enclosures, and apartment bathrooms.',
  },
  twitter: { card: 'summary_large_image' },
}

const faqs = [
  { q: 'What types of shower doors can you install?', a: 'We install frameless, semi-frameless, and framed shower doors in all configurations, including single swing, sliding bypass, pivot, neo-angle, 90 degree corner, and walk-in panels. We also install bathtub enclosures and shower-over-tub combos.' },
  { q: 'How do you handle installations in NYC apartments?', a: 'We coordinate with your building management, provide Certificates of Insurance (COI), reserve freight elevators, and work within building quiet hours. We regularly install in co-ops, condos, and apartment buildings and plan around those requirements from the start.' },
  { q: 'Do I need to remove my old shower door first?', a: 'No. We handle removal of your existing door or enclosure as part of the installation. We carefully remove old glass, hardware, and any remaining silicone or adhesive, then prep the walls and tile before the new install.' },
  { q: 'How long does installation take?', a: 'Most installations take about 2 to 4 hours. We arrive with everything pre-fabricated and ready to install, with no glass cutting on site. Your shower is usable the same day, though we recommend waiting 24 hours for silicone to fully cure.' },
]

const quotePrepItems = [
  'Straight-on photos of the full shower opening, plus a photo from each side',
  'Approximate opening width and height, even if we still need a field measure before fabrication',
  'The layout you are considering: swing door, sliding bypass, door plus fixed panel, corner, or walk-in panel',
  'Hardware finish preference, such as chrome, brushed nickel, matte black, brass, or still undecided',
  'Building details that affect scheduling, including COI, elevator access, protection rules, or work hours',
]

const installationFitItems = [
  {
    title: 'New glass after finished tile',
    description:
      'Best when the walls, curb, and tile are already complete. We measure the real opening, then fabricate the glass to the final conditions.',
  },
  {
    title: 'Replacing a dated door',
    description:
      'If the old door is leaking, corroded, or difficult to use, the installation scope should include removal, surface cleanup, and a cleaner new layout.',
  },
  {
    title: 'Co-op, condo, or managed building',
    description:
      'Building rules can affect timing, protection, COI paperwork, elevator access, and how glass gets moved through the property.',
  },
  {
    title: 'Choosing a layout before ordering',
    description:
      'Swing clearance, panel width, tub edge, shower curb, vanity position, and toilet location decide whether a hinged door, slider, fixed panel, or walk-in panel makes sense.',
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Shower Door Installation Manhattan and NYC',
  serviceType: 'Shower door installation',
  url: 'https://metroglasspro.com/shower-door-installation-nyc/',
  description:
    'Shower door installation for Manhattan apartments, co-ops, condos, and NYC homes, including frameless, framed, sliding, pivot, neo-angle, and bathtub enclosure layouts.',
  provider: { '@id': 'https://metroglasspro.com/#business' },
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Manhattan, NY' },
    { '@type': 'City', name: 'New York, NY' },
  ],
}

export default function ShowerDoorInstallationNYC() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />

      {/* ═══ HERO ═══ */}
      <section className="bg-cream pt-20 sm:pt-32 pb-14 sm:pb-20">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 anim-hero">
          <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Professional Installation</p>
          <h1 className="heading-serif text-charcoal text-4xl sm:text-6xl lg:text-7xl">
            Shower Door Installation NYC
          </h1>
          <p className="mt-5 sm:mt-6 text-warm text-base sm:text-lg max-w-xl leading-relaxed">
            From measurement to final polish — we handle every step of your shower door installation in-house. No subcontractors, no shortcuts.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link href="/contact/" className="btn-pill btn-primary px-8 py-3.5 text-sm">
              Get a Free Estimate
            </Link>
            <a href="tel:+13329993846" className="btn-pill btn-outline px-8 py-3.5 text-sm">
              (332) 999-3846
            </a>
          </div>
        </div>
      </section>

      <section className="bg-cream-light py-20 sm:py-28 border-y border-charcoal/[0.04]">
        <div className="max-w-5xl mx-auto px-6 sm:px-10">
          <div className="max-w-2xl mb-12">
            <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Installation Fit</p>
            <h2 className="heading-serif text-charcoal text-3xl sm:text-5xl">
              What kind of installation are you actually pricing?
            </h2>
            <p className="mt-5 text-warm text-[15px] leading-relaxed">
              A shower door installation search can mean a brand-new enclosure after tile, a replacement for an old door, or a building-managed apartment project. The quote gets clearer when the install type is clear.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {installationFitItems.map((item) => (
              <div key={item.title} className="glass-card p-5 sm:p-6">
                <h3 className="font-serif text-charcoal text-xl mb-2">{item.title}</h3>
                <p className="text-warm text-[14px] sm:text-[15px] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/shower-door-replacement-nyc/" className="btn-pill btn-outline px-6 py-3 text-sm">Replacement Planning</Link>
            <Link href="/frameless-shower-doors-nyc/" className="btn-pill btn-outline px-6 py-3 text-sm">Frameless Options</Link>
            <Link href="/service-areas/manhattan/" className="btn-pill btn-outline px-6 py-3 text-sm">Manhattan Buildings</Link>
            <Link href="/service-areas/queens/" className="btn-pill btn-outline px-6 py-3 text-sm">Queens Buildings</Link>
            <Link href="/projects/frameless-shower-door-cost-nyc/" className="btn-pill btn-outline px-6 py-3 text-sm">Cost Factors</Link>
          </div>
        </div>
      </section>

      {/* ═══ WHAT WE INSTALL ═══ */}
      <section className="bg-cream pb-20 sm:pb-32">
        <div className="max-w-5xl mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="rounded-lg overflow-hidden bg-cream-dark">
              <img src="/editorial/shower-door.jpg" alt="Frameless shower door being installed in NYC apartment" className="w-full h-auto" loading="lazy" />
            </div>
            <div>
              <h2 className="heading-serif text-charcoal text-3xl sm:text-4xl mb-6">We install every type of shower door.</h2>
              <div className="space-y-4">
                {[
                  { t: 'Frameless Shower Doors', d: 'Our specialty. Custom-measured heavy tempered glass with premium hardware in any finish. The modern, high-end look.' },
                  { t: 'Semi-Frameless Doors', d: 'Glass panels with minimal metal framing along one or two edges. A middle ground between frameless and framed aesthetics.' },
                  { t: 'Framed Shower Doors', d: 'Aluminum-framed doors in chrome, nickel, and black finishes. Durable, budget-friendly, and ideal for standard openings.' },
                  { t: 'Bathtub Enclosures', d: 'Sliding bypass doors, pivot doors, and fixed panels for shower-over-tub combos. We work with all tub configurations.' },
                ].map((item) => (
                  <div key={item.t} className="flex gap-3 items-start">
                    <span className="text-orange mt-0.5 shrink-0 text-sm">✓</span>
                    <div>
                      <span className="font-medium text-charcoal text-[15px]">{item.t}</span>
                      <span className="text-warm text-[14px]"> — {item.d}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/frameless-shower-doors-nyc/" className="text-orange text-sm font-medium hover:opacity-70 transition-opacity">
                  Learn more about our frameless doors →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ OUR PROCESS ═══ */}
      <section className="bg-cream-light py-20 sm:py-32">
        <div className="max-w-3xl mx-auto px-6 sm:px-10">
          <div className="text-center mb-14 sm:mb-20">
            <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Installation Process</p>
            <h2 className="heading-serif text-charcoal text-3xl sm:text-5xl">
              What to expect on install day.
            </h2>
          </div>

          <div className="space-y-0">
            {[
              { n: '01', t: 'Arrival & Prep', d: 'Our team arrives at the scheduled time with all glass panels, hardware, and tools. We lay down protective coverings on your floors and fixtures before starting.' },
              { n: '02', t: 'Old Door Removal', d: 'If you have an existing door or enclosure, we remove it carefully — including old hardware, silicone, and adhesive residue. We prep the surfaces for the new install.' },
              { n: '03', t: 'Hardware Mounting', d: 'We mount hinges, U-channels, wall clamps, and any support brackets using proper anchoring. Every fastener is placed with precision, especially on tile walls.' },
              { n: '04', t: 'Glass Installation', d: 'Panels are lifted into position, connected to hardware, and aligned. We check level and plumb at every step — critical in NYC buildings where walls are rarely perfectly straight.' },
              { n: '05', t: 'Sealing & Finishing', d: 'All glass-to-wall and glass-to-tile joints are sealed with clear, mold-resistant silicone. Handles, towel bars, and sweeps are installed. We test the door operation and adjust as needed.' },
              { n: '06', t: 'Cleanup & Walkthrough', d: 'We clean up all debris, wipe down the glass, and walk you through care instructions. Your bathroom is left spotless and the shower is usable the same day.' },
            ].map((s) => (
              <div key={s.n} className="flex gap-5 sm:gap-8 py-8 border-b border-charcoal/[0.06] last:border-b-0">
                <span className="text-charcoal/10 font-serif text-4xl leading-none shrink-0">{s.n}</span>
                <div>
                  <h3 className="font-serif text-charcoal text-lg sm:text-xl mb-2">{s.t}</h3>
                  <p className="text-warm text-[14px] sm:text-[15px] leading-relaxed">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ NYC-SPECIFIC ═══ */}
      <section className="bg-cream py-20 sm:py-32">
        <div className="max-w-3xl mx-auto px-6 sm:px-10">
          <div className="mb-14">
            <h2 className="heading-serif text-charcoal text-3xl sm:text-5xl">
              Why NYC shower door installation is different.
            </h2>
            <p className="mt-5 text-warm text-[15px] leading-relaxed">
              Installing shower glass in a New York City apartment comes with challenges that suburban installers never deal with. Here&apos;s what we navigate every day.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {[
              { t: 'Small, Irregular Bathrooms', d: 'NYC bathrooms are famously compact and often have walls that aren\'t plumb. Every panel must be custom-measured to fit precisely.' },
              { t: 'Building Access Logistics', d: 'Freight elevators, lobby check-ins, COI requirements, superintendent coordination — we handle all of it.' },
              { t: 'Noise & Hour Restrictions', d: 'Most buildings limit construction to weekdays between 8am–5pm. We schedule accordingly and communicate proactively.' },
              { t: 'Pre-War Plumbing Realities', d: 'Older buildings often have uneven tile, non-standard shower bases, and walls that require special anchoring solutions.' },
            ].map((item) => (
              <div key={item.t} className="glass-card p-5 sm:p-6">
                <h3 className="font-semibold text-charcoal text-[15px] mb-2">{item.t}</h3>
                <p className="text-warm text-[13px] sm:text-[14px] leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ QUOTE PREP ═══ */}
      <section className="bg-cream-light py-20 sm:py-32">
        <div className="max-w-3xl mx-auto px-6 sm:px-10">
          <div className="mb-10">
            <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Before We Quote</p>
            <h2 className="heading-serif text-charcoal text-3xl sm:text-5xl">
              What helps us price the installation faster.
            </h2>
            <p className="mt-5 text-warm text-[15px] leading-relaxed">
              A custom shower door still needs a proper field measure before fabrication. But a few details up front help us understand the layout, flag building logistics, and give you a more useful first conversation.
            </p>
          </div>
          <div className="glass-card p-5 sm:p-7">
            <div className="space-y-3">
              {quotePrepItems.map((item) => (
                <div key={item} className="flex items-start gap-3 text-[14px] sm:text-[15px]">
                  <span className="text-orange mt-0.5 shrink-0">✓</span>
                  <span className="text-warm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-6 sm:px-10">
          <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-6">Installation Planning Paths</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/service-areas/manhattan/" className="glass-card p-5 card-lift block">
              <span className="text-charcoal font-medium text-[15px]">Manhattan Installation Service</span>
              <span className="text-warm text-[14px] leading-relaxed block mt-2">COI, elevator, high-rise, co-op, condo, and compact bathroom planning for Manhattan installs.</span>
            </Link>
            <Link href="/service-areas/queens/" className="glass-card p-5 card-lift block">
              <span className="text-charcoal font-medium text-[15px]">Queens Installation Service</span>
              <span className="text-warm text-[14px] leading-relaxed block mt-2">Installation planning for Queens houses, co-ops, condos, and multi-unit buildings.</span>
            </Link>
            <Link href="/projects/frameless-shower-door-cost-nyc/" className="glass-card p-5 card-lift block">
              <span className="text-charcoal font-medium text-[15px]">Frameless Shower Door Cost in NYC</span>
              <span className="text-warm text-[14px] leading-relaxed block mt-2">Understand glass thickness, hardware, panel count, and building coordination before ordering.</span>
            </Link>
            <Link href="/projects/crl-geneva-vs-vienna-hinges/" className="glass-card p-5 card-lift block">
              <span className="text-charcoal font-medium text-[15px]">CRL Geneva vs Vienna Hinges</span>
              <span className="text-warm text-[14px] leading-relaxed block mt-2">Compare common hinge options before choosing a frameless shower door hardware package.</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="bg-cream py-20 sm:py-32">
        <div className="max-w-2xl mx-auto px-6 sm:px-10">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-charcoal text-3xl sm:text-5xl">Installation FAQs.</h2>
          </div>
          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <details key={faq.q} className="group border-b border-charcoal/[0.06]">
                <summary className="flex items-start justify-between py-5 sm:py-6 cursor-pointer text-charcoal font-medium text-[14px] sm:text-[15px] hover:text-charcoal/70 transition-colors">
                  <span className="pr-4">{faq.q}</span>
                  <span className="ml-2 text-charcoal/20 text-xl transition-transform duration-300 group-open:rotate-45 shrink-0 mt-0.5">+</span>
                </summary>
                <p className="pb-5 sm:pb-6 text-warm text-[14px] sm:text-[15px] leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="bg-charcoal py-20 sm:py-28 text-center">
        <div className="max-w-2xl mx-auto px-6 sm:px-10">
          <h2 className="heading-serif text-white text-3xl sm:text-5xl">Ready to schedule your installation?</h2>
          <p className="mt-4 text-white/40 text-base sm:text-lg">Free estimate. Same-week measurement available.</p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link href="/contact/" className="btn-pill btn-primary px-8 sm:px-10 py-3.5 text-sm">Request an Estimate</Link>
            <Link href="/frameless-shower-doors-nyc/" className="btn-pill btn-outline-light px-8 sm:px-10 py-3.5 text-sm">Learn About Frameless Doors</Link>
          </div>
        </div>
      </section>
    </>
  )
}
