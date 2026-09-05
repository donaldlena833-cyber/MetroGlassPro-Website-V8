import ResponsiveImage from '@/components/ResponsiveImage'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Glass Railings Jersey City: Planning Guide',
  description: 'A Jersey City buyer guide for planning glass railings around layout, safety glass, hardware, stairs, terraces, building access, and estimate prep.',
  alternates: { canonical: 'https://metroglasspro.com/blog/glass-railings-jersey-city-planning-guide/' },
  openGraph: {
    title: 'Glass Railings Jersey City: Planning Guide',
    description: 'How Jersey City homeowners and designers can plan glass railing projects around field conditions, hardware, access, and project-fit review.',
    url: 'https://metroglasspro.com/blog/glass-railings-jersey-city-planning-guide/',
    type: 'article',
    images: [
      {
        url: 'https://metroglasspro.com/editorial/railing.jpg',
        alt: 'Architectural glass railing detail with clean metal posts and transparent panels',
      },
    ],
  },
  twitter: { card: 'summary_large_image' },
}

const faqs = [
  {
    q: 'Does every glass railing project fit MetroGlass Pro?',
    a: 'No. MetroGlass Pro reviews select railing projects by scope, location, access, field conditions, and whether the work fits the team. Send photos or plans before assuming the project is a fit.',
  },
  {
    q: 'What should Jersey City buyers send before asking for a railing estimate?',
    a: 'Send wide photos, close-ups of mounting surfaces, rough dimensions, whether the railing is interior or exterior, building access rules, and any drawings or finish inspiration.',
  },
  {
    q: 'Can railing hardware be chosen only by finish?',
    a: 'Finish matters, but hardware also has to match the mounting condition, glass type, code and safety requirements, exposure, and how the railing will be used.',
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
  headline: 'Glass Railings in Jersey City: Planning Guide',
  description: 'A Jersey City buyer guide for planning glass railings around layout, safety glass, hardware, stairs, terraces, building access, and estimate prep.',
  image: 'https://metroglasspro.com/editorial/railing.jpg',
  datePublished: '2026-05-22',
  dateModified: '2026-05-22',
  author: { '@type': 'Organization', name: 'MetroGlass Pro' },
  publisher: { '@type': 'Organization', name: 'MetroGlass Pro' },
  mainEntityOfPage: 'https://metroglasspro.com/blog/glass-railings-jersey-city-planning-guide/',
}

export default function JerseyCityGlassRailingsGuide() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([articleJsonLd, faqJsonLd]) }} />

      <article>
        <section className="bg-cream pt-20 sm:pt-32 pb-14 sm:pb-20">
          <div className="max-w-3xl mx-auto px-6 sm:px-10 anim-hero">
            <Link href="/blog/" className="text-orange text-[13px] font-medium hover:opacity-70 transition-opacity mb-6 inline-block">
              Back to guides
            </Link>
            <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Jersey City Planning Guide</p>
            <h1 className="heading-serif text-charcoal text-4xl sm:text-6xl lg:text-7xl">
              Glass railings in Jersey City: what to solve before pricing the work.
            </h1>
            <p className="mt-5 text-warm text-base sm:text-lg max-w-2xl leading-relaxed">
              Glass railings look simple after installation, but the planning depends on mounting conditions, panel layout, hardware, stair geometry, exposure, and building access. The clearer those details are up front, the more useful the first estimate can be.
            </p>
          </div>
        </section>

        <section className="bg-cream pb-20 sm:pb-28">
          <div className="max-w-5xl mx-auto px-6 sm:px-10 grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-16 items-start">
            <div className="space-y-10">
              <section>
                <h2 className="font-serif text-charcoal text-3xl sm:text-4xl mb-5">Start with where the glass will mount.</h2>
                <div className="space-y-5 text-warm text-[15px] leading-relaxed">
                  <p>
                    A glass railing estimate should begin with the field condition, not only the desired look. Stairs, landings, terraces, mezzanines, and open edges each change how posts, clamps, shoes, caps, or handrail details are reviewed.
                  </p>
                  <p>
                    Jersey City homes, condos, and mixed-use buildings can add uneven existing surfaces, masonry, steel, wood framing, roof or terrace exposure, and building management rules. Those details decide whether the project is straightforward or needs deeper review.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="font-serif text-charcoal text-3xl sm:text-4xl mb-5">Match the railing style to the real condition.</h2>
                <p className="text-warm text-[15px] leading-relaxed mb-5">
                  The cleanest photo is not always the right specification. Glass railing systems need to be selected around safety glass, attachment points, use, and exposure.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    ['Interior stairs', 'Often driven by stair pitch, post spacing, wall returns, and handrail comfort.'],
                    ['Landings and loft edges', 'Need careful panel sizing, guard height review, and clean termination details.'],
                    ['Terraces or roof areas', 'Exposure, drainage, structure, wind, and building approval can affect the approach.'],
                    ['Commercial interiors', 'Require early coordination around plans, access, schedule, and adjacent trades.'],
                  ].map(([title, body]) => (
                    <div key={title} className="glass-card p-5">
                      <h3 className="font-semibold text-charcoal text-[15px] mb-2">{title}</h3>
                      <p className="text-warm text-[14px] leading-relaxed">{body}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="font-serif text-charcoal text-3xl sm:text-4xl mb-5">Hardware is more than a finish choice.</h2>
                <p className="text-warm text-[15px] leading-relaxed">
                  Brushed stainless, matte black, brass-toned, and other finishes affect the final look, but hardware also has to match the mounting surface, panel sizes, handrail plan, and daily use. A railing that works in a dry interior stair may not be the same answer for an exposed terrace or busy commercial edge.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-charcoal text-3xl sm:text-4xl mb-5">Confirm project fit before assuming installation.</h2>
                <div className="space-y-5 text-warm text-[15px] leading-relaxed">
                  <p>
                    MetroGlass Pro handles select railing work by review. That means the first step is not a generic quote. It is a fit check based on photos, location, access, condition, and whether the requested railing scope belongs with the team.
                  </p>
                  <p>
                    If the project is not a fit, the photos and measurements still help clarify what kind of specialist or engineer-led review may be needed next.
                  </p>
                </div>
              </section>

              <section className="glass-card p-6 sm:p-8">
                <h2 className="font-serif text-charcoal text-3xl mb-5">What to send for a clearer railing review</h2>
                <ul className="space-y-3 text-warm text-[15px] leading-relaxed">
                  <li>Wide photos of the stair, landing, terrace, or open edge from several angles.</li>
                  <li>Close-ups of the floor, wall, stringer, slab, curb, or other mounting surface.</li>
                  <li>Rough total run length, number of steps or landings, and desired railing height if known.</li>
                  <li>Whether the railing is interior, exterior, residential, commercial, or part of a larger renovation.</li>
                  <li>Building rules for COI, elevator access, work hours, loading, and superintendent coordination.</li>
                </ul>
              </section>
            </div>

            <aside className="space-y-6 lg:sticky lg:top-28">
              <div className="rounded-lg overflow-hidden bg-cream-dark">
                <ResponsiveImage src="/editorial/railing.jpg" alt="Architectural glass railing detail with clean metal posts and transparent panels" className="w-full h-auto" />
              </div>
              <div className="glass-card p-6">
                <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Related MetroGlass Pro pages</p>
                <div className="grid gap-3">
                  <Link href="/glass-partitions-nyc/" className="text-charcoal text-sm font-medium hover:text-orange">Glass Partitions NYC</Link>
                  <Link href="/service-areas/" className="text-charcoal text-sm font-medium hover:text-orange">Service Areas</Link>
                  <Link href="/projects/shower-glass-design-consultation-nyc/" className="text-charcoal text-sm font-medium hover:text-orange">Glass Design Consultation</Link>
                  <Link href="/gallery/" className="text-charcoal text-sm font-medium hover:text-orange">Project Gallery</Link>
                  <Link href="/contact/" className="btn-pill btn-primary px-6 py-3 text-center text-sm mt-2">Request a Review</Link>
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
