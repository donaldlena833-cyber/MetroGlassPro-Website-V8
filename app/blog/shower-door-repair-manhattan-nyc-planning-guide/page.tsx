import type { Metadata } from 'next'
import Link from 'next/link'

const canonical = 'https://metroglasspro.com/blog/shower-door-repair-manhattan-nyc-planning-guide/'
const heroImage = 'https://metroglasspro.com/editorial/nyc-local/shower-door-repair-manhattan-hero.jpg'

export const metadata: Metadata = {
  title: 'Shower Door Repair in Manhattan: NYC Planning Guide',
  description:
    'A Manhattan shower door repair guide covering hinges, sweeps, leaks, glass movement, repair versus replacement, building access, and estimate prep.',
  alternates: { canonical },
  openGraph: {
    title: 'Shower Door Repair in Manhattan: NYC Planning Guide',
    description:
      'How to plan shower door repair in Manhattan apartments around hardware, leaks, glass movement, building rules, and replacement decisions.',
    url: canonical,
    type: 'article',
    images: [heroImage],
  },
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Shower Door Repair in Manhattan: NYC Planning Guide',
  description:
    'A practical guide to shower door repair planning for Manhattan apartments, co-ops, condos, and townhouses.',
  author: { '@type': 'Organization', name: 'MetroGlass Pro', url: 'https://metroglasspro.com' },
  publisher: { '@type': 'Organization', name: 'MetroGlass Pro', url: 'https://metroglasspro.com' },
  datePublished: '2026-06-05',
  dateModified: '2026-06-05',
  mainEntityOfPage: canonical,
  image: heroImage,
  keywords: [
    'shower door repair Manhattan',
    'shower door repair NYC',
    'Manhattan shower glass repair',
    'shower door leak repair Manhattan',
    'glass shower door adjustment NYC',
  ],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can a leaking shower door in Manhattan be repaired?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sometimes. Leaks caused by sweeps, seals, silicone, hinge alignment, or door position may be repairable. Cracked glass, badly corroded hardware, poor original layout, or major movement may point toward replacement.',
      },
    },
    {
      '@type': 'Question',
      name: 'What photos should I send before asking for shower door repair?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Send wide photos of the shower, close-ups of hinges, handle, sweep, bottom seal, side seals, leak location, and any gap where the door touches or misses the wall, curb, or fixed panel.',
      },
    },
  ],
}

export default function ShowerDoorRepairManhattanGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className="bg-cream pt-20 sm:pt-32 pb-10 sm:pb-14">
        <div className="max-w-3xl mx-auto px-6 sm:px-10">
          <Link href="/blog/" className="text-orange text-[13px] font-medium hover:opacity-70 transition-opacity mb-6 inline-block">
            Back to Guides
          </Link>
          <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Manhattan Repair Guide</p>
          <h1 className="heading-serif text-charcoal text-4xl sm:text-6xl lg:text-7xl">
            Shower door repair in Manhattan starts with the hardware, glass movement, and leak path.
          </h1>
          <p className="mt-5 text-warm text-base sm:text-lg max-w-xl leading-relaxed">
            Hinges, sweeps, seals, curb slope, wall alignment, and apartment building access all shape whether a shower door can be repaired cleanly or should be replaced.
          </p>
        </div>
      </section>

      <section className="bg-cream pb-8 sm:pb-12">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <div className="rounded-lg overflow-hidden img-editorial">
            <img
              src="/editorial/nyc-local/shower-door-repair-manhattan-hero.jpg"
              alt="Shower door repair and glass hardware planning for a Manhattan bathroom"
              className="w-full h-auto block"
              loading="eager"
            />
          </div>
        </div>
      </section>

      <section className="bg-cream pb-20 sm:pb-28">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 prose-mgp">
          <p>
            Shower door repair in Manhattan is usually a small problem with a lot of context around it. A door can leak because the sweep is worn, the hinges have shifted, the panel was installed out of alignment, the curb pitches the wrong way, or the original layout never matched the finished bathroom.
          </p>
          <p>
            MetroGlass Pro handles shower glass planning, repair review, replacement, and custom shower door installation across New York City. For a Manhattan apartment, the best first step is to separate a true repair from a replacement situation before ordering parts or scheduling a field visit.
          </p>

          <h2>Common Shower Door Repair Issues In Manhattan Bathrooms</h2>
          <p>
            The most common repair calls involve water escaping near the bottom sweep, a door rubbing against a fixed panel, loose handles, hinge movement, failed silicone, missing seals, or a door that will not close cleanly. These issues can look similar in photos, but the repair path is different.
          </p>
          <ul>
            <li>Bottom leaks may come from a worn sweep, curb slope, or door alignment.</li>
            <li>Side leaks may come from missing seals, wall gaps, or panel position.</li>
            <li>Rubbing or sagging can point to hinge adjustment, loose fasteners, or glass movement.</li>
            <li>Repeated leaks after prior fixes may mean the original layout needs replacement review.</li>
          </ul>

          <h2>When Repair Makes Sense</h2>
          <p>
            Repair is more realistic when the glass is intact, the hardware is serviceable, the fixed panel is stable, and the problem is limited to adjustment, sweeps, seals, or silicone. In that case, clear photos can often narrow the conversation before a visit.
          </p>
          <p>
            Manhattan co-ops and condos may still require building coordination for access, insurance paperwork, and work-hour limits. Even a modest repair can be slowed down if the building requires approval before a contractor comes upstairs.
          </p>

          <h2>When Replacement Should Be Considered</h2>
          <p>
            Replacement becomes more likely when the glass is chipped or cracked, the hardware is badly corroded, the door opening was measured poorly, the curb or wall conditions fight the layout, or multiple parts have failed together. A repair that leaves the same bad geometry in place can waste money.
          </p>
          <p>
            If the bathroom tile is new or recently renovated, replacement planning should wait until the finished surfaces are stable. Custom shower glass depends on actual wall plumb, curb pitch, panel landings, and door swing clearance.
          </p>

          <h2>Photos To Send Before Asking For A Repair Estimate</h2>
          <p>
            Good photos help MetroGlass Pro understand whether the issue is likely adjustment, parts, sealing, or replacement. Send wide shots of the whole shower, then close-ups of the hinges, handle, sweep, side seals, bottom gap, leak location, and where the door meets the wall or fixed panel.
          </p>
          <p>
            Include the Manhattan neighborhood, building type, whether the bathroom is in a co-op or condo, and whether the glass is framed, semi-frameless, or frameless. If water is leaking, mark where the water exits after a shower.
          </p>

          <h2>Building Access Still Matters</h2>
          <p>
            Many Manhattan buildings ask for a certificate of insurance, service elevator reservation, work-hour compliance, or superintendent coordination. That does not decide whether the door is repairable, but it does affect scheduling and the cleanest path to get the work done.
          </p>

          <div className="mt-10 p-6 bg-charcoal/[0.03] rounded-lg border border-charcoal/[0.06]">
            <p className="text-[13px] text-charcoal/50 font-medium uppercase tracking-wider mb-3">Best Next Step</p>
            <p className="text-sm text-charcoal/70 leading-relaxed">
              Send photos of the door, hinges, sweep, leak point, and full shower opening. MetroGlass Pro can help decide whether the Manhattan shower door looks like a repair, adjustment, reseal, or replacement conversation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-20 sm:py-24 text-center">
        <div className="max-w-2xl mx-auto px-6 sm:px-10">
          <h2 className="heading-serif text-white text-3xl sm:text-4xl">Need a Manhattan shower door checked?</h2>
          <p className="mt-3 text-white/40 text-base">Send photos and the repair symptoms so the next step is clear.</p>
          <Link href="/contact/" className="btn-pill btn-primary px-8 py-3.5 text-sm mt-8 inline-flex">Get a Free Estimate</Link>
        </div>
      </section>
    </>
  )
}
