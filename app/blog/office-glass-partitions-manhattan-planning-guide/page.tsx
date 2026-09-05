import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Office Glass Partitions Manhattan: Planning Guide',
  description:
    'A Manhattan planning guide for office glass partitions, covering layout, clearances, hardware, building access, privacy, and estimate prep.',
  alternates: { canonical: 'https://metroglasspro.com/blog/office-glass-partitions-manhattan-planning-guide/' },
  openGraph: {
    title: 'Office Glass Partitions Manhattan: Planning Guide',
    description:
      'How to plan Manhattan office glass partitions around layout, hardware, building logistics, privacy, and installation coordination.',
    url: 'https://metroglasspro.com/blog/office-glass-partitions-manhattan-planning-guide/',
    type: 'article',
    images: [
      {
        url: 'https://metroglasspro.com/assets/og-default.jpg',
        alt: 'Architectural glass detail with clean metal and glass lines',
      },
    ],
  },
  twitter: { card: 'summary_large_image' },
}

const faqs = [
  {
    q: 'When should a Manhattan office plan for glass partitions?',
    a: 'Plan glass partitions after the room layout, door swings, finished floor levels, ceiling conditions, and nearby walls are understood, but before the project treats glass as a last-minute add-on.',
  },
  {
    q: 'What details affect office glass partition pricing?',
    a: 'Layout, panel size, door type, hardware finish, wall and floor conditions, privacy treatment, building access, and installation timing all affect the estimate.',
  },
  {
    q: 'Can glass partitions work in occupied Manhattan offices?',
    a: 'Often yes, but occupied offices need tighter coordination around work hours, elevator access, protection, noise, dust control, and the path from delivery to installation.',
  },
]

const planningChecks = [
  'Photos of the room from each corner and the doorway or corridor approach.',
  'A rough sketch or marked-up plan showing where the glass should sit.',
  'Ceiling height, opening widths, finished floor condition, and any nearby sprinkler, HVAC, or lighting constraints.',
  'Door swing preference, privacy needs, hardware finish direction, and whether the office will stay occupied during work.',
  'Building requirements for COI, freight elevator, loading dock, work hours, and superintendent coordination.',
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
  headline: 'Office Glass Partitions in Manhattan: Planning Guide',
  description:
    'A Manhattan planning guide for office glass partitions, covering layout, clearances, hardware, building access, privacy, and estimate prep.',
  image: 'https://metroglasspro.com/assets/og-default.jpg',
  datePublished: '2026-05-20',
  dateModified: '2026-09-05',
  author: { '@type': 'Organization', name: 'MetroGlass Pro' },
  publisher: { '@type': 'Organization', name: 'MetroGlass Pro' },
  mainEntityOfPage: 'https://metroglasspro.com/blog/office-glass-partitions-manhattan-planning-guide/',
}

export default function OfficeGlassPartitionsManhattanGuide() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([articleJsonLd, faqJsonLd]) }} />

      <article>
        <section className="bg-cream pt-20 sm:pt-32 pb-14 sm:pb-20">
          <div className="max-w-3xl mx-auto px-6 sm:px-10 anim-hero">
            <Link href="/blog/" className="text-orange text-[13px] font-medium hover:opacity-70 transition-opacity mb-6 inline-block">
              Back to guides
            </Link>
            <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Manhattan Glass Planning</p>
            <h1 className="heading-serif text-charcoal text-4xl sm:text-6xl lg:text-7xl">
              Office glass partitions in Manhattan: what to plan before fabrication.
            </h1>
            <p className="mt-5 text-warm text-base sm:text-lg max-w-2xl leading-relaxed">
              Office partitions look simple after installation, but the finished result depends on layout, hardware, privacy, building access, and coordination with the walls, floors, and ceiling already in the space.
            </p>
          </div>
        </section>

        <section className="bg-cream pb-20 sm:pb-28">
          <div className="max-w-5xl mx-auto px-6 sm:px-10 grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-16 items-start">
            <div className="space-y-10">
              <section>
                <h2 className="font-serif text-charcoal text-3xl sm:text-4xl mb-5">Start with how the room needs to work.</h2>
                <div className="space-y-5 text-warm text-[15px] leading-relaxed">
                  <p>
                    A Manhattan office partition should solve a real layout problem. It may separate a private office, conference room, studio, reception area, or consultation space without making the room feel closed in.
                  </p>
                  <p>
                    Before choosing glass or hardware, confirm the path through the room, the door swing, furniture depth, desk clearances, and how people will move between the partition and existing walls.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="font-serif text-charcoal text-3xl sm:text-4xl mb-5">Treat adjacent finishes as part of the glass plan.</h2>
                <p className="text-warm text-[15px] leading-relaxed mb-5">
                  Glass partitions connect to floors, walls, ceilings, and sometimes millwork. Uneven floors, base trim, finished stone, metal studs, dropped ceilings, and nearby lighting can all affect how cleanly the glass sits.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    ['Floor line', 'Check level changes, thresholds, finished flooring, and any areas that need protection during install.'],
                    ['Wall condition', 'Confirm whether the partition meets drywall, masonry, tile, millwork, or an existing metal opening.'],
                    ['Ceiling condition', 'Know whether the glass relates to a hard ceiling, soffit, exposed ceiling, or nearby mechanical work.'],
                    ['Door clearance', 'Plan swing, handle location, traffic flow, and any adjacent furniture before the door is selected.'],
                  ].map(([title, body]) => (
                    <div key={title} className="glass-card p-5">
                      <h3 className="font-semibold text-charcoal text-[15px] mb-2">{title}</h3>
                      <p className="text-warm text-[14px] leading-relaxed">{body}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="font-serif text-charcoal text-3xl sm:text-4xl mb-5">Decide privacy before the glass is ordered.</h2>
                <p className="text-warm text-[15px] leading-relaxed">
                  Clear glass keeps sightlines open. Frosted or patterned privacy treatments can make a conference room or private office feel more usable. The right answer depends on the room purpose, lighting, client visibility, and whether the goal is openness, privacy, or a balance of both.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-charcoal text-3xl sm:text-4xl mb-5">Manhattan building logistics can change the schedule.</h2>
                <div className="space-y-5 text-warm text-[15px] leading-relaxed">
                  <p>
                    Office glass often needs more coordination than a small residential repair. Managed buildings may ask for a Certificate of Insurance, freight elevator reservation, loading dock timing, hallway protection, and approved work hours.
                  </p>
                  <p>
                    If the office is occupied, planning should also account for noise, dust control, delivery path, furniture movement, and which areas must stay usable while the glass work happens.
                  </p>
                </div>
              </section>

              <section className="glass-card p-6 sm:p-8">
                <h2 className="font-serif text-charcoal text-3xl mb-5">What to send for a clearer partition estimate</h2>
                <ul className="space-y-3 text-warm text-[15px] leading-relaxed">
                  {planningChecks.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            </div>

            <aside className="space-y-6 lg:sticky lg:top-28">
              <div className="rounded-lg overflow-hidden bg-cream-dark">
                <div className="p-6"><h2 className="font-serif text-charcoal text-2xl mb-3">Plan the full room.</h2><p className="text-warm text-base leading-relaxed">Send the floor plan, door positions, floor and ceiling details, and privacy requirements to review your partition project.</p></div>
              </div>
              <div className="glass-card p-6">
                <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Related MetroGlass Pro pages</p>
                <div className="grid gap-3">
                  <Link href="/glass-partitions-nyc/" className="text-charcoal text-sm font-medium hover:text-orange">Glass Partitions NYC</Link>
                  <Link href="/services/" className="text-charcoal text-sm font-medium hover:text-orange">All Glass Services</Link>
                  <Link href="/projects/shower-glass-design-consultation-nyc/" className="text-charcoal text-sm font-medium hover:text-orange">Design Consultation Process</Link>
                  <Link href="/contact/?service=glass-partitions" className="btn-pill btn-primary px-6 py-3 text-center text-sm mt-2">Request an Estimate</Link>
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
