import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Frameless Shower Door Cost in NYC',
  description: 'A practical NYC buyer guide to frameless shower door cost, from single swing doors to door and panel layouts, corner enclosures, hardware, glass thickness, and building coordination.',
  alternates: { canonical: 'https://metroglasspro.com/projects/frameless-shower-door-cost-nyc/' },
  openGraph: {
    title: 'Frameless Shower Door Cost in NYC',
    description: 'What affects the price of a custom frameless shower door in New York City, and how to compare quotes without getting burned.',
    url: 'https://metroglasspro.com/projects/frameless-shower-door-cost-nyc/',
    type: 'article',
    images: ['https://metroglasspro.com/editorial/shower-door.jpg'],
  },
  twitter: { card: 'summary_large_image', images: ['https://metroglasspro.com/editorial/shower-door.jpg'] },
}

const costDrivers = [
  {
    title: 'Glass layout',
    body: 'A single swing door is usually the simplest. A door plus fixed panel, 90 degree corner, neo-angle enclosure, or sliding bypass layout adds more glass, hardware, labor, and measurement precision.',
  },
  {
    title: 'Glass thickness',
    body: 'Most residential frameless shower doors use 3/8 inch tempered glass. Larger panels or luxury builds may use 1/2 inch glass, which feels heavier and more substantial but raises hardware and labor requirements.',
  },
  {
    title: 'Hardware finish',
    body: 'Chrome and brushed nickel are usually the most straightforward. Matte black, satin brass, polished brass, and specialty finishes can cost more and may take longer depending on availability.',
  },
  {
    title: 'Building conditions',
    body: 'NYC bathrooms are rarely perfectly square. Out-of-plumb walls, uneven curbs, tight elevators, co-op rules, COI paperwork, and freight scheduling can all affect the real project cost.',
  },
]

const ranges = [
  { label: 'Single swing frameless door', range: '$800-$1,600+', note: 'Best for standard openings where one hinged door solves the layout.' },
  { label: 'Door plus fixed panel', range: '$1,400-$2,600+', note: 'Common for wider NYC showers and tub-to-shower renovations.' },
  { label: 'Sliding bypass frameless doors', range: '$1,600-$3,000+', note: 'Useful where there is no room for a swing door.' },
  { label: 'Corner or neo-angle enclosure', range: '$2,200-$4,500+', note: 'More panels, angles, clamps, seals, and field precision.' },
]

const faqs = [
  {
    q: 'Can MetroGlass Pro give a price from photos?',
    a: 'Photos are enough for a rough direction, but final pricing needs measurements. The exact opening width, wall condition, curb slope, tile condition, and hardware layout all matter.',
  },
  {
    q: 'Is the cheapest frameless shower door quote usually the best deal?',
    a: 'Not always. A cheap quote can hide thinner hardware, rushed measurement, poor sealing, weak building coordination, or no clear plan for COI and scheduling.',
  },
  {
    q: 'What is the fastest way to get an accurate estimate?',
    a: 'Send clear photos of the shower opening, the full bathroom, the curb or tub edge, and any existing door. Include your neighborhood, building type, and whether you want swing, sliding, or open-panel glass.',
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Frameless Shower Door Cost in NYC',
  description: 'A practical NYC buyer guide to frameless shower door cost, quote comparisons, glass thickness, hardware, layouts, and building coordination.',
  datePublished: '2026-05-09',
  dateModified: '2026-05-09',
  author: { '@type': 'Organization', name: 'MetroGlass Pro' },
  publisher: {
    '@type': 'Organization',
    name: 'MetroGlass Pro',
    logo: { '@type': 'ImageObject', url: 'https://metroglasspro.com/assets/logo.png' },
  },
  mainEntityOfPage: 'https://metroglasspro.com/projects/frameless-shower-door-cost-nyc/',
  image: 'https://metroglasspro.com/editorial/shower-door.jpg',
}

export default function FramelessShowerDoorCostNYC() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className="bg-cream pt-20 sm:pt-32 pb-14 sm:pb-20">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 anim-hero">
          <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Buyer Guide</p>
          <h1 className="heading-serif text-charcoal text-4xl sm:text-6xl lg:text-7xl">
            Frameless shower door cost in NYC.
          </h1>
          <p className="mt-5 text-warm text-base sm:text-lg max-w-2xl leading-relaxed">
            A custom frameless shower door is not priced like a shelf product. In New York City, the real number depends on layout, glass thickness, hardware, site conditions, and building coordination.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link href="/contact/" className="btn-pill btn-primary px-8 py-3.5 text-sm">
              Get a Shower Door Estimate
            </Link>
            <Link href="/frameless-shower-doors-nyc/" className="btn-pill btn-outline px-8 py-3.5 text-sm">
              See Frameless Options
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-cream pb-20 sm:pb-32">
        <div className="max-w-3xl mx-auto px-6 sm:px-10">
          <div className="glass-card p-6 sm:p-8">
            <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Quick Answer</p>
            <p className="text-charcoal text-xl sm:text-2xl font-serif leading-snug">
              Most custom frameless shower door projects in NYC land somewhere from about $800 to $3,000+, with larger corner enclosures and premium layouts going higher.
            </p>
            <p className="mt-4 text-warm text-[15px] leading-relaxed">
              That range is broad because two bathrooms can look similar in photos but need very different glass, hardware, and installation work once measured.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream-light py-20 sm:py-32">
        <div className="max-w-5xl mx-auto px-6 sm:px-10">
          <div className="max-w-2xl mb-12">
            <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Typical Ranges</p>
            <h2 className="heading-serif text-charcoal text-3xl sm:text-5xl">What different layouts usually cost.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {ranges.map((item) => (
              <div key={item.label} className="glass-card p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                  <h3 className="font-serif text-charcoal text-xl">{item.label}</h3>
                  <span className="text-orange text-sm font-semibold">{item.range}</span>
                </div>
                <p className="text-warm text-[14px] leading-relaxed">{item.note}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-warm text-[14px] leading-relaxed max-w-2xl">
            These are planning ranges, not final quotes. Final price depends on field measurement, glass specification, hardware choice, and install conditions.
          </p>
        </div>
      </section>

      <section className="bg-cream py-20 sm:py-32">
        <div className="max-w-5xl mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-16 items-start">
            <div>
              <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Cost Drivers</p>
              <h2 className="heading-serif text-charcoal text-3xl sm:text-5xl mb-8">
                Why one quote is higher than another.
              </h2>
              <div className="space-y-7">
                {costDrivers.map((item, index) => (
                  <div key={item.title} className="flex gap-5">
                    <span className="text-charcoal/10 font-serif text-4xl leading-none">{String(index + 1).padStart(2, '0')}</span>
                    <div>
                      <h3 className="font-serif text-charcoal text-xl mb-2">{item.title}</h3>
                      <p className="text-warm text-[15px] leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <aside className="glass-card overflow-hidden">
              <img src="/editorial/configurations/door-fixed-panel.jpg" alt="Frameless shower door and fixed panel configuration" className="w-full aspect-[4/3] object-cover mix-blend-multiply bg-cream" loading="lazy" />
              <div className="p-6">
                <h3 className="font-serif text-charcoal text-2xl mb-3">The quote should explain the layout.</h3>
                <p className="text-warm text-[14px] leading-relaxed">
                  A strong estimate should make clear what glass thickness, hardware finish, number of panels, seals, and installation details are included.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-cream-light py-20 sm:py-32">
        <div className="max-w-3xl mx-auto px-6 sm:px-10">
          <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Quote Checklist</p>
          <h2 className="heading-serif text-charcoal text-3xl sm:text-5xl mb-8">How to compare shower door quotes.</h2>
          <div className="space-y-4">
            {[
              'Ask whether the quote includes custom field measurement.',
              'Confirm the glass thickness and whether the glass is tempered safety glass.',
              'Confirm the hardware finish, hinge type, handle style, clamps, seals, and U-channel if used.',
              'Ask how the installer handles out-of-plumb walls, uneven curbs, and water direction.',
              'For co-ops and condos, confirm COI support, elevator scheduling, and building coordination.',
              'Avoid quotes that promise a final number without measurements when the opening is custom.',
            ].map((item) => (
              <div key={item} className="flex gap-3 items-start text-[15px]">
                <span className="text-orange mt-0.5 shrink-0">✓</span>
                <span className="text-warm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 sm:py-32">
        <div className="max-w-2xl mx-auto px-6 sm:px-10">
          <h2 className="heading-serif text-charcoal text-3xl sm:text-5xl text-center mb-12">Cost questions.</h2>
          <div className="space-y-0">
            {faqs.map((faq) => (
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

      <section className="bg-charcoal py-20 sm:py-28 text-center">
        <div className="max-w-2xl mx-auto px-6 sm:px-10">
          <h2 className="heading-serif text-white text-3xl sm:text-5xl">Want a real number for your bathroom?</h2>
          <p className="mt-4 text-white/40 text-base sm:text-lg">
            Send photos of the opening, your neighborhood, and whether you want swing, sliding, or open-panel glass.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link href="/contact/" className="btn-pill btn-primary px-8 sm:px-10 py-3.5 text-sm">Request an Estimate</Link>
            <a href="sms:+13329993846?body=Hi%20MetroGlass%20Pro%2C%20I%20want%20a%20frameless%20shower%20door%20quote%20and%20can%20send%20photos." className="btn-pill btn-outline-light px-8 sm:px-10 py-3.5 text-sm">Text Bathroom Photos</a>
          </div>
        </div>
      </section>
    </>
  )
}
