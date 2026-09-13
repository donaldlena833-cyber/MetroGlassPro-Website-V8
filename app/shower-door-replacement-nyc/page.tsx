import ResponsiveImage from '@/components/ResponsiveImage'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Shower Door Replacement NYC',
  description: 'Replace old framed, leaking, cracked, or corroded shower doors in NYC. Explore frameless upgrades and send photos for a Manhattan-first estimate.',
  alternates: { canonical: 'https://metroglasspro.com/shower-door-replacement-nyc/' },
  openGraph: {
    title: 'Shower Door Replacement NYC | MetroGlass Pro',
    description: 'Shower door replacement in NYC for old framed doors, leaking enclosures, cracked glass, corroded tracks, and frameless upgrades.',
  },
  twitter: { card: 'summary_large_image' },
}

const faqs = [
  { q: 'Can I upgrade from framed to frameless?', a: 'A framed-to-frameless change can work when the finished walls and curb, opening, swing clearance, and anchoring points suit the new layout. Old screw holes, adhesive, or marks may remain after removal, so those conditions and any repair scope should be reviewed before work begins.' },
  { q: 'How long does a shower door replacement take?', a: 'Timing depends on the site review, final field measurement, glass and hardware selection, fabrication availability, removal conditions, and any building access rules. Removal and installation may be planned together or separately; the project schedule is confirmed after those details are known.' },
  { q: 'Do you repair shower doors or only replace?', a: 'We assess both paths. A hinge, seal, roller, or alignment problem may be repairable when the glass and supporting parts remain suitable. Cracked glass, a badly corroded frame, incompatible parts, or a requested layout change can point toward replacement.' },
  { q: 'Will replacing my shower door damage the tile?', a: 'Removal is planned to reduce risk, but old anchors, adhesive, concealed damage, or brittle tile can affect the result. Existing holes and marks may need patching, and perfect concealment cannot be guaranteed. We review visible conditions and the removal plan before proceeding.' },
]

const replacementQuoteChecklist = [
  'Photos of the full opening, the current door or tub track, and both wall edges',
  'Approximate opening width and height, even if final field measurements still need to happen',
  'Whether you want the same style again or an upgrade to frameless, sliding, hinged, or fixed-panel glass',
  'Hardware finish preferences, such as chrome, brushed nickel, matte black, or brass',
  'Building details that affect scheduling, including COI, elevator access, protection rules, or work hours',
]

const replacementDecisionItems = [
  {
    title: 'Old framed door to frameless glass',
    description:
      'This is the cleanest visual upgrade when the bathroom still works but the metal frame, track, or glass makes the room feel dated.',
  },
  {
    title: 'Leaking or difficult daily use',
    description:
      'If water is escaping, the door drags, or the slider no longer moves cleanly, replacement can solve the functional problem and improve the look at the same time.',
  },
  {
    title: 'Wrong-size or poorly installed glass',
    description:
      'When the original opening was measured wrong, another repair may only mask the problem. New glass should be based on finished field conditions.',
  },
  {
    title: 'Safety or condition issues',
    description:
      'Cracked glass, chipped edges, corrosion, or failing old hardware should be treated as replacement candidates, not cosmetic annoyances.',
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
  name: 'Shower Door Replacement Manhattan and NYC',
  serviceType: 'Shower door replacement',
  url: 'https://metroglasspro.com/shower-door-replacement-nyc/',
  description:
    'Shower door replacement for Manhattan and NYC bathrooms, including framed-to-frameless upgrades, old door removal, new glass installation, and repair-versus-replacement guidance.',
  provider: { '@id': 'https://metroglasspro.com/#business' },
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Manhattan, NY' },
    { '@type': 'City', name: 'New York, NY' },
  ],
}

export default function ShowerDoorReplacementNYC() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />

      {/* ═══ HERO ═══ */}
      <section className="bg-cream pt-20 sm:pt-32 pb-14 sm:pb-20">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 anim-hero">
          <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Replacement & Upgrade</p>
          <h1 className="heading-serif text-charcoal text-4xl sm:text-6xl lg:text-7xl">
            Shower Door Replacement NYC
          </h1>
          <p className="mt-5 sm:mt-6 text-warm text-base sm:text-lg max-w-xl leading-relaxed">
            Replace an old or damaged enclosure with a framed, semi-frameless, or frameless layout planned around the finished opening, removal conditions, and building access.
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
            <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Replacement Fit</p>
            <h2 className="heading-serif text-charcoal text-3xl sm:text-5xl">
              Replacement is strongest when it solves more than the look.
            </h2>
            <p className="mt-5 text-warm text-[15px] leading-relaxed">
              The best shower door replacement scope fixes the daily problem, removes the weak old system, and gives the bathroom a cleaner layout instead of swapping one frustrating door for another.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {replacementDecisionItems.map((item) => (
              <div key={item.title} className="glass-card p-5 sm:p-6">
                <h3 className="font-serif text-charcoal text-xl mb-2">{item.title}</h3>
                <p className="text-warm text-[14px] sm:text-[15px] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/shower-door-repair-nyc/" className="btn-pill btn-outline px-6 py-3 text-sm">Repair First?</Link>
            <Link href="/frameless-shower-doors-nyc/" className="btn-pill btn-outline px-6 py-3 text-sm">Frameless Upgrade</Link>
            <Link href="/projects/84-clinton-lower-east-side-shower-door-before-after/" className="btn-pill btn-outline px-6 py-3 text-sm">Before & After</Link>
            <Link href="/projects/frameless-shower-door-cost-nyc/" className="btn-pill btn-outline px-6 py-3 text-sm">Cost Factors</Link>
          </div>
        </div>
      </section>

      {/* ═══ SIGNS ═══ */}
      <section className="bg-cream pb-20 sm:pb-32">
        <div className="max-w-3xl mx-auto px-6 sm:px-10">
          <h2 className="heading-serif text-charcoal text-3xl sm:text-4xl mb-10">
            Signs it&apos;s time to replace your shower door.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { t: 'Leaking onto the floor', d: 'Worn seals, warped frames, poor alignment, showerhead direction, or an unsuitable layout can let water escape. The cause should be identified before choosing repair or replacement.' },
              { t: 'Corroded or rusted frame', d: 'Corroded frames and tracks can be difficult to restore, but the surrounding glass, tile, and available replacement parts still need to be assessed before choosing a scope.' },
              { t: 'Foggy or stained glass', d: 'Mineral buildup may be cleanable, while permanently etched or damaged glass may support a replacement decision. Photos help separate a maintenance issue from a glass condition issue.' },
              { t: 'Difficult to open or close', d: 'Rollers, hinges, tracks, alignment, and frame condition all affect operation. Some problems can be repaired; others require a new compatible door or enclosure.' },
              { t: 'A different layout or finish', d: 'A replacement can change the door type, panel layout, or hardware finish when the opening, clearances, and mounting conditions support the new design.' },
              { t: 'Cracked or chipped glass', d: 'Stop using a door with cracked or significantly chipped glass and keep people away from it. Send clear photos so safe next steps and a replacement scope can be discussed.' },
            ].map((item) => (
              <div key={item.t} className="glass-card p-5 sm:p-6">
                <h3 className="font-semibold text-charcoal text-[15px] mb-2">{item.t}</h3>
                <p className="text-warm text-[13px] sm:text-[14px] leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ REPLACEMENT PROCESS ═══ */}
      <section className="bg-cream-light py-20 sm:py-32">
        <div className="max-w-3xl mx-auto px-6 sm:px-10">
          <div className="text-center mb-14 sm:mb-20">
            <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Replacement Process</p>
            <h2 className="heading-serif text-charcoal text-3xl sm:text-5xl">
              How we replace your shower door.
            </h2>
          </div>

          <div className="space-y-0">
            {[
              { n: '01', t: 'Project Review & Field Measure', time: 'Scope First', d: 'We review the current enclosure, the desired layout, finished surfaces, clearances, access, and building requirements. Final field measurements are taken when the opening is ready.' },
              { n: '02', t: 'Quote & Fabrication Plan', time: 'Confirmed After Measure', d: 'The quote and schedule are based on the approved glass layout, hardware, final measurements, supplier availability, and any removal or building coordination required.' },
              { n: '03', t: 'Removal & Installation', time: 'Project-Specific', d: 'Removal and installation are planned around the existing anchors and surfaces, the new enclosure, site access, and the cure guidance for the sealant used.' },
            ].map((s) => (
              <div key={s.n} className="flex gap-5 sm:gap-8 py-8 sm:py-10 border-b border-charcoal/[0.06] last:border-b-0">
                <span className="text-charcoal/10 font-serif text-4xl sm:text-5xl leading-none shrink-0">{s.n}</span>
                <div>
                  <div className="flex flex-wrap items-baseline gap-2 sm:gap-3 mb-2">
                    <h3 className="font-serif text-charcoal text-lg sm:text-xl">{s.t}</h3>
                    <span className="text-orange/60 text-xs font-medium tracking-wide uppercase">{s.time}</span>
                  </div>
                  <p className="text-warm text-[14px] sm:text-[15px] leading-relaxed">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FRAMED → FRAMELESS ═══ */}
      <section className="bg-cream py-20 sm:py-32">
        <div className="max-w-5xl mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Layout Option</p>
              <h2 className="heading-serif text-charcoal text-3xl sm:text-4xl mb-6">
                What changes in a framed-to-frameless replacement.
              </h2>
              <p className="text-warm text-[15px] leading-relaxed mb-6">
                Moving from a framed door to a frameless layout can reduce visible metal and change how the opening feels, but the finished surfaces, support, clearances, and marks left by the old frame all affect what is practical.
              </p>
              <div className="space-y-3">
                {[
                  'Uses less visible framing when the opening supports it',
                  'Requires suitable finished walls, curb, and anchoring points',
                  'May expose old holes, adhesive, or surface differences after removal',
                  'Allows hardware and finish choices that coordinate with the room',
                  'Still needs a layout that manages door swing and normal shower spray',
                ].map((p) => (
                  <div key={p} className="flex gap-3 items-start text-[14px] sm:text-[15px]">
                    <span className="text-orange mt-0.5 shrink-0">✓</span>
                    <span className="text-warm">{p}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/frameless-shower-doors-nyc/" className="text-orange text-sm font-medium hover:opacity-70 transition-opacity">
                  Explore our frameless options →
                </Link>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden bg-cream-dark">
              <ResponsiveImage src="/gallery/project-shower-2.jpg" alt="Frameless shower door replacement Brooklyn" className="w-full h-auto" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream-light py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-start">
          <div>
            <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Quote Readiness</p>
            <h2 className="heading-serif text-charcoal text-4xl sm:text-5xl">What to send before we quote a replacement.</h2>
            <p className="mt-5 text-warm text-[15px] leading-relaxed">
              Replacement pricing depends on the actual opening, glass layout, hardware, removal conditions, and building access. These details help us give a cleaner first answer before the field measure.
            </p>
          </div>
          <div className="glass-card p-6 sm:p-8">
            <h3 className="font-serif text-charcoal text-2xl mb-5">Useful first-message details</h3>
            <div className="space-y-3">
              {replacementQuoteChecklist.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-charcoal/60">
                  <span className="text-orange mt-0.5 shrink-0">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-6 sm:px-10">
          <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-6">Replacement Planning Paths</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/service-areas/manhattan/" className="glass-card p-5 card-lift block">
              <span className="text-charcoal font-medium text-[15px]">Manhattan Replacement Service</span>
              <span className="text-warm text-[14px] leading-relaxed block mt-2">COI, elevator, building access, and compact-bathroom planning for Manhattan replacement calls.</span>
            </Link>
            <Link href="/service-areas/queens/" className="glass-card p-5 card-lift block">
              <span className="text-charcoal font-medium text-[15px]">Queens Replacement Service</span>
              <span className="text-warm text-[14px] leading-relaxed block mt-2">Replacement planning for Queens homes, co-ops, condos, and multi-unit buildings.</span>
            </Link>
            <Link href="/projects/frameless-shower-door-cost-nyc/" className="glass-card p-5 card-lift block">
              <span className="text-charcoal font-medium text-[15px]">Frameless Shower Door Cost in NYC</span>
              <span className="text-warm text-[14px] leading-relaxed block mt-2">Use this guide to compare glass thickness, hardware finish, panel count, and building coordination before replacing.</span>
            </Link>
            <Link href="/projects/crl-geneva-vs-vienna-hinges/" className="glass-card p-5 card-lift block">
              <span className="text-charcoal font-medium text-[15px]">CRL Geneva vs Vienna Hinges</span>
              <span className="text-warm text-[14px] leading-relaxed block mt-2">Hardware comparison for buyers replacing an older enclosure with a cleaner frameless package.</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="bg-cream-light py-20 sm:py-32">
        <div className="max-w-2xl mx-auto px-6 sm:px-10">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-charcoal text-3xl sm:text-5xl">Replacement FAQs.</h2>
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
          <h2 className="heading-serif text-white text-3xl sm:text-5xl">Time for a new shower door?</h2>
          <p className="mt-4 text-white/40 text-base sm:text-lg">Free estimate. We remove the old and install the new.</p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link href="/contact/" className="btn-pill btn-primary px-8 sm:px-10 py-3.5 text-sm">Request an Estimate</Link>
            <Link href="/frameless-shower-doors-nyc/" className="btn-pill btn-outline-light px-8 sm:px-10 py-3.5 text-sm">Explore Frameless Doors</Link>
          </div>
        </div>
      </section>
    </>
  )
}
