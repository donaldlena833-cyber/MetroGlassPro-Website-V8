import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Shower Door Replacement NYC — Upgrade Your Bathroom Glass | MetroGlassPro',
  description: 'Replace your old shower door with custom frameless glass. We remove old doors and install new — all in one visit. Free estimates across NYC.',
  alternates: { canonical: 'https://metroglasspro.com/shower-door-replacement-nyc/' },
  openGraph: {
    title: 'Shower Door Replacement NYC — Upgrade Your Bathroom Glass',
    description: 'Replace your old shower door with custom frameless glass. We remove old doors and install new.',
  },
  twitter: { card: 'summary_large_image' },
}

const faqs = [
  { q: 'Can I upgrade from framed to frameless?', a: 'Yes — this is one of our most common jobs. We remove the old framed door and all its tracks, fill any holes in the tile or wall, and install a new frameless door. The transformation is dramatic, and it makes any bathroom look larger and more modern.' },
  { q: 'How long does a shower door replacement take?', a: 'The full process from measurement to install is typically 1.5–2 weeks. Removal of the old door and installation of the new one happens in a single visit, usually 2–4 hours.' },
  { q: 'Do you repair shower doors or only replace?', a: 'We do both. For broken hinges, damaged seals, stuck rollers, or cracked hardware, we can often repair what you have. But if the glass is cracked, the frame is corroded, or you want to upgrade, replacement is the better value.' },
  { q: 'Will replacing my shower door damage the tile?', a: 'We take great care during removal to protect your tile. Some old installations leave screw holes or adhesive marks — we patch and clean these as part of the replacement. If tile damage is unavoidable (rare), we let you know before proceeding.' },
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

export default function ShowerDoorReplacementNYC() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ═══ HERO ═══ */}
      <section className="bg-cream pt-20 sm:pt-32 pb-14 sm:pb-20">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 anim-hero">
          <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Replacement & Upgrade</p>
          <h1 className="heading-serif text-charcoal text-4xl sm:text-6xl lg:text-7xl">
            Shower Door Replacement NYC
          </h1>
          <p className="mt-5 sm:mt-6 text-warm text-base sm:text-lg max-w-xl leading-relaxed">
            Old, foggy, or broken shower door? We remove the old and install the new — frameless, framed, or semi-frameless — in a single visit.
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

      {/* ═══ SIGNS ═══ */}
      <section className="bg-cream pb-20 sm:pb-32">
        <div className="max-w-3xl mx-auto px-6 sm:px-10">
          <h2 className="heading-serif text-charcoal text-3xl sm:text-4xl mb-10">
            Signs it&apos;s time to replace your shower door.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { t: 'Leaking onto the floor', d: 'Worn seals, warped frames, or poor original installation let water escape. Constant puddles damage flooring and can cause mold.' },
              { t: 'Corroded or rusted frame', d: 'Metal frames in humid NYC bathrooms eventually corrode — especially cheap aluminum. Once the frame is going, replacement is more cost-effective than repair.' },
              { t: 'Foggy or stained glass', d: 'Hard water deposits, mineral buildup, and etched glass can\'t always be cleaned away. New glass transforms the entire look of your bathroom.' },
              { t: 'Difficult to open/close', d: 'Sticky rollers, misaligned tracks, and bent frames make daily use frustrating. A new door operates smoothly from day one.' },
              { t: 'Outdated style', d: 'Brass-framed doors from the 1990s and early 2000s are the most common replacement we do. The upgrade to frameless is the single biggest visual improvement you can make.' },
              { t: 'Cracked or chipped glass', d: 'Any crack in tempered glass is a safety risk — the entire panel can shatter unexpectedly. This is the one situation where replacement is urgent, not optional.' },
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
              { n: '01', t: 'Assessment & Measurement', time: 'Day 1', d: 'We evaluate your current setup, discuss what you want (frameless upgrade? same style but new?), measure precisely, and provide a quote on the spot.' },
              { n: '02', t: 'Custom Fabrication', time: '5–7 Days', d: 'Your new glass panels are cut and tempered to your exact measurements. Hardware is prepped in your chosen finish.' },
              { n: '03', t: 'Removal & Install', time: '2–4 Hours', d: 'We carefully remove the old door, clean and prep the surfaces, then install the new glass and hardware. Old materials are hauled away.' },
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
              <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Most Popular Upgrade</p>
              <h2 className="heading-serif text-charcoal text-3xl sm:text-4xl mb-6">
                Framed to frameless: the biggest bathroom upgrade.
              </h2>
              <p className="text-warm text-[15px] leading-relaxed mb-6">
                Replacing an old framed shower door with a custom frameless enclosure is the single most impactful visual upgrade you can make to a NYC bathroom — without a full renovation.
              </p>
              <div className="space-y-3">
                {[
                  'Instantly makes your bathroom look larger and brighter',
                  'Removes bulky metal frames that collect mold and grime',
                  'Adds real value for co-op and condo resales',
                  'Modern hardware options (matte black, brass) to match current trends',
                  'Premium glass that\'s easier to keep clean than old framed doors',
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
              <img src="/gallery/project-shower-2.jpg" alt="Frameless shower door replacement Brooklyn" className="w-full h-auto" loading="lazy" />
            </div>
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
