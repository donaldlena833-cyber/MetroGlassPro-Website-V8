import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tub Shower Glass Doors NYC: Planning Guide',
  description: 'A NYC planning guide for bathtub shower glass doors, including sliding bypass doors, fixed panels, swing clearance, tub edges, hardware, and estimate prep.',
  alternates: { canonical: 'https://metroglasspro.com/blog/tub-shower-glass-doors-nyc-planning-guide/' },
  openGraph: {
    title: 'Tub Shower Glass Doors NYC: Planning Guide',
    description: 'How NYC apartment owners can plan bathtub shower glass around tight bathrooms, swing clearance, tub edges, glass layouts, hardware, and building access.',
    url: 'https://metroglasspro.com/blog/tub-shower-glass-doors-nyc-planning-guide/',
    type: 'article',
    images: [
      {
        url: 'https://metroglasspro.com/editorial/configurations/sliding-bypass-doors.jpg',
        alt: 'Frameless sliding bypass shower door hardware for a bathtub shower glass layout',
      },
    ],
  },
  twitter: { card: 'summary_large_image' },
}

const faqs = [
  {
    q: 'What glass door works best for a bathtub shower in a small NYC bathroom?',
    a: 'Sliding bypass glass usually works well when the toilet, vanity, or bathroom door leaves no swing clearance. A fixed panel or hinged door can work when the tub edge, opening, and room layout support it.',
  },
  {
    q: 'Can MetroGlass Pro replace old framed bathtub sliders?',
    a: 'Yes. MetroGlass Pro handles shower door replacement and framed-to-frameless upgrades, including tub-shower layouts when the opening, tile, tub edge, and access conditions are a fit.',
  },
  {
    q: 'What photos help with a bathtub glass estimate?',
    a: 'Send the full tub opening, both side walls, the tub ledge, the showerhead side, the toilet or vanity clearance, current track or frame details, and any building access rules.',
  },
]

const layoutOptions = [
  ['Sliding bypass doors', 'Best when a swinging door would hit the toilet, vanity, radiator, or entry door. The panels slide along the tub opening without needing floor clearance.'],
  ['Fixed tub panel', 'Can create a cleaner open look when splash control, showerhead direction, and the user pattern make sense for the room.'],
  ['Hinged tub door', 'Can work in a larger bathroom, but the swing path needs to be checked carefully before glass is ordered.'],
  ['Framed to frameless replacement', 'A common visual upgrade when the old metal track is stained, loose, corroded, or making the bathroom feel dated.'],
]

const quoteChecklist = [
  'Wide photos of the full bathtub opening and bathroom layout.',
  'Close photos of the tub ledge, old track, side walls, tile edges, and any holes or damage.',
  'Approximate width and height of the opening before the final field measure.',
  'Which side the showerhead is on and where water tends to hit now.',
  'Nearby toilet, vanity, radiator, towel bar, or door clearance that could affect the glass layout.',
  'Building access requirements such as COI, elevator reservation, work hours, or superintendent coordination.',
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
  headline: 'Tub Shower Glass Doors in NYC: Planning Guide',
  description: 'A NYC planning guide for bathtub shower glass doors, including sliding bypass doors, fixed panels, swing clearance, tub edges, hardware, and estimate prep.',
  image: 'https://metroglasspro.com/editorial/configurations/sliding-bypass-doors.jpg',
  datePublished: '2026-05-24',
  dateModified: '2026-05-24',
  author: { '@type': 'Organization', name: 'MetroGlass Pro' },
  publisher: { '@type': 'Organization', name: 'MetroGlass Pro' },
  mainEntityOfPage: 'https://metroglasspro.com/blog/tub-shower-glass-doors-nyc-planning-guide/',
}

export default function TubShowerGlassDoorsGuide() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([articleJsonLd, faqJsonLd]) }} />

      <article>
        <section className="bg-cream pt-20 sm:pt-32 pb-14 sm:pb-20">
          <div className="max-w-3xl mx-auto px-6 sm:px-10 anim-hero">
            <Link href="/blog/" className="text-orange text-[13px] font-medium hover:opacity-70 transition-opacity mb-6 inline-block">
              Back to guides
            </Link>
            <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Tub Shower Planning Guide</p>
            <h1 className="heading-serif text-charcoal text-4xl sm:text-6xl lg:text-7xl">
              Tub shower glass doors in NYC: what to plan before replacing the curtain or old sliders.
            </h1>
            <p className="mt-5 text-warm text-base sm:text-lg max-w-2xl leading-relaxed">
              Many NYC bathrooms still use a bathtub shower combination. Replacing a curtain or old framed slider with glass can make the room feel cleaner, but the best layout depends on swing clearance, tub edges, showerhead direction, tile condition, and building access.
            </p>
          </div>
        </section>

        <section className="bg-cream pb-20 sm:pb-28">
          <div className="max-w-5xl mx-auto px-6 sm:px-10 grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-16 items-start">
            <div className="space-y-10">
              <section>
                <h2 className="font-serif text-charcoal text-3xl sm:text-4xl mb-5">Start with clearance, not only style.</h2>
                <div className="space-y-5 text-warm text-[15px] leading-relaxed">
                  <p>
                    A bathtub glass door has to work in the exact bathroom. In compact Manhattan, Brooklyn, and Queens apartments, the toilet, vanity, radiator, towel bar, and bathroom entry can all sit close to the tub.
                  </p>
                  <p>
                    If a door cannot swing cleanly, a sliding bypass system is usually the first layout to review. If the room has more open floor space, a hinged tub door or fixed glass panel may be worth discussing.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="font-serif text-charcoal text-3xl sm:text-4xl mb-5">Match the glass layout to the tub edge.</h2>
                <p className="text-warm text-[15px] leading-relaxed mb-5">
                  The top of the tub matters. A clean, level, usable ledge gives hardware and seals a better place to land. An uneven tub, damaged tile edge, old track holes, or soft surrounding material needs to be understood before anyone promises a simple replacement.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {layoutOptions.map(([title, body]) => (
                    <div key={title} className="glass-card p-5">
                      <h3 className="font-semibold text-charcoal text-[15px] mb-2">{title}</h3>
                      <p className="text-warm text-[14px] leading-relaxed">{body}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="font-serif text-charcoal text-3xl sm:text-4xl mb-5">Think about water direction before choosing open glass.</h2>
                <div className="space-y-5 text-warm text-[15px] leading-relaxed">
                  <p>
                    A fixed tub panel can look minimal, but it does not close the full bathtub opening. That can be fine when the showerhead, splash pattern, and daily use support it. It can be frustrating when water regularly escapes past the open area.
                  </p>
                  <p>
                    Sliding glass gives more coverage across the tub width. Hinged glass gives a cleaner entry when there is enough room. The useful answer is the layout that works with the actual room, not the one that looks best in a showroom photo.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="font-serif text-charcoal text-3xl sm:text-4xl mb-5">Old framed sliders need a removal plan.</h2>
                <p className="text-warm text-[15px] leading-relaxed">
                  Older framed tub doors often leave screw holes, adhesive, mineral staining, or marks on tile and tub surfaces. A replacement conversation should include what is being removed, what surfaces will remain visible, and whether a frameless upgrade will cover or expose old conditions.
                </p>
              </section>

              <section className="glass-card p-6 sm:p-8">
                <h2 className="font-serif text-charcoal text-3xl mb-5">What to send for a clearer tub glass estimate</h2>
                <ul className="space-y-3 text-warm text-[15px] leading-relaxed">
                  {quoteChecklist.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            </div>

            <aside className="space-y-6 lg:sticky lg:top-28">
              <div className="rounded-lg overflow-hidden bg-cream-dark">
                <img src="/editorial/configurations/sliding-bypass-doors.jpg" alt="Frameless sliding bypass shower door hardware for a bathtub shower glass layout" className="w-full h-auto" />
              </div>
              <div className="glass-card p-6">
                <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Related MetroGlass Pro pages</p>
                <div className="grid gap-3">
                  <Link href="/shower-door-replacement-nyc/" className="text-charcoal text-sm font-medium hover:text-orange">Shower Door Replacement NYC</Link>
                  <Link href="/projects/sliding-bypass-doors-nyc/" className="text-charcoal text-sm font-medium hover:text-orange">Sliding Bypass Doors</Link>
                  <Link href="/frameless-shower-doors-nyc/" className="text-charcoal text-sm font-medium hover:text-orange">Frameless Shower Doors</Link>
                  <Link href="/projects/visualize-shower-door-options-nyc/" className="text-charcoal text-sm font-medium hover:text-orange">Visualize Shower Door Options</Link>
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
