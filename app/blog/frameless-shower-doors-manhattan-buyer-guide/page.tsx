import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Frameless Shower Doors Manhattan: Buyer Guide',
  description: 'A Manhattan buyer guide for frameless shower doors, covering tile readiness, glass layouts, hardware, co-op and condo coordination, and estimate prep.',
  alternates: { canonical: 'https://metroglasspro.com/blog/frameless-shower-doors-manhattan-buyer-guide/' },
  openGraph: {
    title: 'Frameless Shower Doors Manhattan: Buyer Guide',
    description: 'A practical Manhattan guide to planning frameless shower doors around finished tile, building access, hardware, and glass layout decisions.',
    url: 'https://metroglasspro.com/blog/frameless-shower-doors-manhattan-buyer-guide/',
    type: 'article',
    images: [
      {
        url: 'https://metroglasspro.com/editorial/shower-door.jpg',
        alt: 'Frameless shower door glass and hardware in a finished bathroom',
      },
    ],
  },
  twitter: { card: 'summary_large_image' },
}

const faqs = [
  {
    q: 'When should a Manhattan shower door be measured?',
    a: 'Custom shower glass should be measured after the tile, curb, walls, and threshold are finished. Finished surfaces determine the exact glass size, hinge placement, sweep clearances, and water-control details.',
  },
  {
    q: 'What frameless shower layout works best in a small Manhattan bathroom?',
    a: 'The best layout depends on the opening width, toilet and vanity clearance, curb slope, and how the door can swing. Compact bathrooms often need a single swing door, door with fixed panel, sliding bypass, or walk-in panel selected around real clearance.',
  },
  {
    q: 'Do Manhattan co-ops and condos need special coordination?',
    a: 'Many buildings require a Certificate of Insurance, approved work hours, elevator or service entrance coordination, and superintendent communication. Buyers should confirm those rules before install day.',
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

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Frameless Shower Doors in Manhattan: Buyer Planning Guide',
  description: 'A Manhattan buyer guide for frameless shower doors, covering tile readiness, glass layouts, hardware, co-op and condo coordination, and estimate prep.',
  image: 'https://metroglasspro.com/editorial/shower-door.jpg',
  datePublished: '2026-05-12',
  dateModified: '2026-05-12',
  author: { '@type': 'Organization', name: 'MetroGlass Pro' },
  publisher: { '@type': 'Organization', name: 'MetroGlass Pro' },
  mainEntityOfPage: 'https://metroglasspro.com/blog/frameless-shower-doors-manhattan-buyer-guide/',
}

export default function ManhattanFramelessShowerDoorGuide() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([articleJsonLd, faqJsonLd]) }} />

      <article>
        <section className="bg-cream pt-20 sm:pt-32 pb-14 sm:pb-20">
          <div className="max-w-3xl mx-auto px-6 sm:px-10 anim-hero">
            <Link href="/blog/" className="text-orange text-[13px] font-medium hover:opacity-70 transition-opacity mb-6 inline-block">
              Back to guides
            </Link>
            <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Manhattan Buyer Guide</p>
            <h1 className="heading-serif text-charcoal text-4xl sm:text-6xl lg:text-7xl">
              Frameless shower doors in Manhattan: what to plan before you order glass.
            </h1>
            <p className="mt-5 text-warm text-base sm:text-lg max-w-2xl leading-relaxed">
              Manhattan bathrooms make the small details matter: finished tile, door swing, curb slope, building access, and hardware finish all affect whether a frameless shower door feels clean or frustrating.
            </p>
          </div>
        </section>

        <section className="bg-cream pb-20 sm:pb-28">
          <div className="max-w-5xl mx-auto px-6 sm:px-10 grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-16 items-start">
            <div className="space-y-10">
              <section>
                <h2 className="font-serif text-charcoal text-3xl sm:text-4xl mb-5">Measure after the tile is finished.</h2>
                <div className="space-y-5 text-warm text-[15px] leading-relaxed">
                  <p>
                    Frameless glass is not a rough-opening product. The final tile plane, curb slope, wall plumb, threshold depth, and shower entry all need to be visible before a custom panel is measured.
                  </p>
                  <p>
                    That matters in Manhattan apartments because many bathrooms are narrow, walls are rarely perfect, and even a small mismatch can affect how the door closes, where water lands, and how the hardware sits on finished tile.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="font-serif text-charcoal text-3xl sm:text-4xl mb-5">Choose the layout around clearance, not just the photo.</h2>
                <p className="text-warm text-[15px] leading-relaxed mb-5">
                  A saved inspiration image is useful, but the right Manhattan shower layout depends on the room. The vanity, toilet, entry door, towel bar, and glass swing all need to work together.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    ['Single swing door', 'Clean and simple when the opening and swing clearance allow it.'],
                    ['Door with fixed panel', 'Useful for wider openings where one large swinging door would feel heavy.'],
                    ['Sliding bypass', 'A practical answer for tub-shower combinations or tight swing clearance.'],
                    ['Walk-in panel', 'Minimal and open, but it needs enough depth and slope to control water.'],
                  ].map(([title, body]) => (
                    <div key={title} className="glass-card p-5">
                      <h3 className="font-semibold text-charcoal text-[15px] mb-2">{title}</h3>
                      <p className="text-warm text-[14px] leading-relaxed">{body}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="font-serif text-charcoal text-3xl sm:text-4xl mb-5">Plan hardware before the estimate feels final.</h2>
                <p className="text-warm text-[15px] leading-relaxed">
                  Chrome, brushed nickel, matte black, satin brass, and other finishes can change the feel of the room. Hardware also affects weight, anchoring, towel-bar placement, and how the enclosure meets the wall. If the bathroom has stone, porcelain slab, niche tile, or a narrow curb, bring that up early.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-charcoal text-3xl sm:text-4xl mb-5">Do not leave building coordination until install day.</h2>
                <div className="space-y-5 text-warm text-[15px] leading-relaxed">
                  <p>
                    Many Manhattan co-ops, condos, and managed buildings ask for a Certificate of Insurance, approved work hours, elevator access, service entrance rules, and superintendent coordination. Those details are not decoration. They decide whether the installation can happen smoothly.
                  </p>
                  <p>
                    Before requesting an estimate, gather photos of the opening, the bathroom layout, the finished tile or current condition, and any building requirements you already have.
                  </p>
                </div>
              </section>

              <section className="glass-card p-6 sm:p-8">
                <h2 className="font-serif text-charcoal text-3xl mb-5">What to send for a clearer estimate</h2>
                <ul className="space-y-3 text-warm text-[15px] leading-relaxed">
                  <li>Photos straight into the shower opening and from both side angles.</li>
                  <li>Rough opening width, shower depth, curb width, and ceiling height if available.</li>
                  <li>Whether tile is finished, in progress, or still being planned.</li>
                  <li>Preferred hardware finish and any glass inspiration photos.</li>
                  <li>Building rules for COI, elevator reservations, and work-hour limits.</li>
                </ul>
              </section>
            </div>

            <aside className="space-y-6 lg:sticky lg:top-28">
              <div className="rounded-lg overflow-hidden bg-cream-dark">
                <img src="/editorial/shower-door.jpg" alt="Frameless shower door glass and hardware in a finished bathroom" className="w-full h-auto" />
              </div>
              <div className="glass-card p-6">
                <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Related MetroGlass Pro pages</p>
                <div className="grid gap-3">
                  <Link href="/frameless-shower-doors-nyc/" className="text-charcoal text-sm font-medium hover:text-orange">Frameless Shower Doors NYC</Link>
                  <Link href="/service-areas/manhattan/" className="text-charcoal text-sm font-medium hover:text-orange">Manhattan Shower Door Company</Link>
                  <Link href="/projects/coop-condo-shower-door-installation-nyc/" className="text-charcoal text-sm font-medium hover:text-orange">Co-op and Condo Installation Guide</Link>
                  <Link href="/projects/84-clinton-lower-east-side-shower-door-before-after/" className="text-charcoal text-sm font-medium hover:text-orange">Lower East Side Before and After</Link>
                  <Link href="/contact/" className="btn-pill btn-primary px-6 py-3 text-center text-sm mt-2">Request an Estimate</Link>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="bg-cream-light py-20 sm:py-28">
          <div className="max-w-3xl mx-auto px-6 sm:px-10">
            <h2 className="heading-serif text-charcoal text-3xl sm:text-5xl text-center mb-10">Common questions.</h2>
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
      </article>
    </>
  )
}
