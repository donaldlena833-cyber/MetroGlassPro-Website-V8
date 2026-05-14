import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Custom Mirrors in Manhattan Apartments: Buyer Planning Guide',
  description: 'A Manhattan buyer guide for custom mirrors, covering wall conditions, vanity sizing, outlets, edge details, building access, and estimate prep.',
  alternates: { canonical: 'https://metroglasspro.com/blog/custom-mirrors-manhattan-apartment-guide/' },
  openGraph: {
    title: 'Custom Mirrors in Manhattan Apartments: Buyer Planning Guide',
    description: 'How Manhattan homeowners can plan custom bathroom mirrors, vanity mirrors, and wall mirrors around real apartment conditions.',
    url: 'https://metroglasspro.com/blog/custom-mirrors-manhattan-apartment-guide/',
    type: 'article',
    images: [
      {
        url: 'https://metroglasspro.com/editorial/mirror.jpg',
        alt: 'Custom mirror with clean trim and refined wall fit',
      },
    ],
  },
  twitter: { card: 'summary_large_image' },
}

const faqs = [
  {
    q: 'What should be measured before ordering a custom mirror?',
    a: 'Measure the finished wall area, vanity width, ceiling height, outlet locations, light fixture placement, trim, backsplash height, and any medicine cabinet or tile edges that the mirror needs to clear.',
  },
  {
    q: 'Can a custom mirror work in a small Manhattan bathroom?',
    a: 'Yes. A mirror sized to the vanity, light fixtures, and tile edges can make a compact bathroom feel cleaner without forcing a stock size into a tight wall.',
  },
  {
    q: 'What photos help with a mirror estimate?',
    a: 'Send a straight-on wall photo, side-angle photos, rough width and height, close-ups of outlets or sconces, and a note about whether the wall is finished tile, painted drywall, plaster, or another surface.',
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
  headline: 'Custom Mirrors in Manhattan Apartments: Buyer Planning Guide',
  description: 'A Manhattan buyer guide for custom mirrors, covering wall conditions, vanity sizing, outlets, edge details, building access, and estimate prep.',
  image: 'https://metroglasspro.com/editorial/mirror.jpg',
  datePublished: '2026-05-14',
  dateModified: '2026-05-14',
  author: { '@type': 'Organization', name: 'MetroGlass Pro' },
  publisher: { '@type': 'Organization', name: 'MetroGlass Pro' },
  mainEntityOfPage: 'https://metroglasspro.com/blog/custom-mirrors-manhattan-apartment-guide/',
}

const planningPoints = [
  ['Vanity width', 'A mirror can align to the vanity, run wider for visual balance, or stop short to clear sconces and tile edges.'],
  ['Wall condition', 'Old plaster, new drywall, tile, trim, and uneven walls can change the mounting approach.'],
  ['Lighting', 'Sconces, medicine cabinets, outlets, and ceiling light placement affect the mirror size and cut decisions.'],
  ['Access', 'Elevators, service entries, hallway turns, and building rules matter when a large mirror needs to reach the apartment safely.'],
]

export default function CustomMirrorsManhattanApartmentGuide() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([articleJsonLd, faqJsonLd]) }} />

      <article>
        <section className="bg-cream pt-20 sm:pt-32 pb-14 sm:pb-20">
          <div className="max-w-3xl mx-auto px-6 sm:px-10 anim-hero">
            <Link href="/blog/" className="text-orange text-[13px] font-medium hover:opacity-70 transition-opacity mb-6 inline-block">
              Back to guides
            </Link>
            <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Manhattan Mirror Guide</p>
            <h1 className="heading-serif text-charcoal text-4xl sm:text-6xl lg:text-7xl">
              Custom mirrors in Manhattan apartments: what to plan before ordering.
            </h1>
            <p className="mt-5 text-warm text-base sm:text-lg max-w-2xl leading-relaxed">
              A good custom mirror looks simple after installation. The planning is where the result is decided: wall condition, vanity size, lighting, outlets, edge finish, and building access all need to work together.
            </p>
          </div>
        </section>

        <section className="bg-cream pb-20 sm:pb-28">
          <div className="max-w-5xl mx-auto px-6 sm:px-10 grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-16 items-start">
            <div className="space-y-10">
              <section>
                <h2 className="font-serif text-charcoal text-3xl sm:text-4xl mb-5">Start with the actual finished wall.</h2>
                <div className="space-y-5 text-warm text-[15px] leading-relaxed">
                  <p>
                    Custom mirror sizing should be based on the finished wall, not the rough idea of the room. Manhattan apartments often have older plaster, tight bathroom layouts, new tile edges, uneven walls, and lighting that was not placed around a stock mirror size.
                  </p>
                  <p>
                    Before ordering glass, check where the mirror should begin and end, how it relates to the vanity, whether outlets or sconces interrupt the wall, and whether a backsplash or tile border changes the clean line.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="font-serif text-charcoal text-3xl sm:text-4xl mb-5">Decide what the mirror needs to solve.</h2>
                <p className="text-warm text-[15px] leading-relaxed mb-5">
                  A bathroom vanity mirror has different constraints than an entry mirror, bedroom wall mirror, or design feature. The best size is usually the one that makes the room feel intentional while still respecting hardware, edges, and daily use.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {planningPoints.map(([title, body]) => (
                    <div key={title} className="glass-card p-5">
                      <h3 className="font-semibold text-charcoal text-[15px] mb-2">{title}</h3>
                      <p className="text-warm text-[14px] leading-relaxed">{body}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="font-serif text-charcoal text-3xl sm:text-4xl mb-5">Plan the edge and mounting details early.</h2>
                <div className="space-y-5 text-warm text-[15px] leading-relaxed">
                  <p>
                    Edge polish, bevel preference, visible clips, channel mounting, adhesive support, and surrounding trim all affect the final look. These decisions should happen before the mirror is fabricated, especially when the mirror needs to align with sconces, tile, stone, or cabinetry.
                  </p>
                  <p>
                    For larger wall mirrors, access matters too. A piece that works on paper still needs to fit through the building path and be handled safely inside the apartment.
                  </p>
                </div>
              </section>

              <section className="glass-card p-6 sm:p-8">
                <h2 className="font-serif text-charcoal text-3xl mb-5">What to send for a clearer mirror estimate</h2>
                <ul className="space-y-3 text-warm text-[15px] leading-relaxed">
                  <li>A straight-on photo of the wall and two side-angle photos.</li>
                  <li>Approximate width and height of the mirror area.</li>
                  <li>Close-ups of outlets, sconces, tile edges, trim, or backsplash details.</li>
                  <li>Whether the wall is finished, still under renovation, or waiting on tile or paint.</li>
                  <li>Building access notes for elevator, stairs, service entrance, and work-hour rules.</li>
                </ul>
              </section>
            </div>

            <aside className="space-y-6 lg:sticky lg:top-28">
              <div className="rounded-lg overflow-hidden bg-cream-dark">
                <img src="/editorial/mirror.jpg" alt="Custom mirror with clean trim and refined wall fit" className="w-full h-auto" />
              </div>
              <div className="glass-card p-6">
                <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Related MetroGlass Pro pages</p>
                <div className="grid gap-3">
                  <Link href="/custom-mirrors-nyc/" className="text-charcoal text-sm font-medium hover:text-orange">Custom Mirrors NYC</Link>
                  <Link href="/service-areas/manhattan/" className="text-charcoal text-sm font-medium hover:text-orange">Manhattan Glass Service</Link>
                  <Link href="/projects/typical-mirror-replacement-nyc/" className="text-charcoal text-sm font-medium hover:text-orange">Typical Mirror Replacement</Link>
                  <Link href="/services/" className="text-charcoal text-sm font-medium hover:text-orange">Glass and Mirror Services</Link>
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
