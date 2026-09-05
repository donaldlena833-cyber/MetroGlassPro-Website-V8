import type { Metadata } from 'next'
import Link from 'next/link'
import GuideFaqs from '@/components/GuideFaqs'

const canonical = 'https://metroglasspro.com/blog/frameless-shower-doors-upper-east-side-nyc-planning-guide/'
const heroImage = 'https://metroglasspro.com/editorial/nyc-local/frameless-shower-doors-upper-east-side-hero.jpg'

export const metadata: Metadata = {
  title: 'Frameless Shower Doors on the Upper East Side: NYC Planning Guide',
  description:
    'An Upper East Side frameless shower door guide covering co-op and condo access, finished tile measurements, door swing, hardware, repair decisions, and estimate prep.',
  alternates: { canonical },
  openGraph: {
    title: 'Frameless Shower Doors on the Upper East Side: NYC Planning Guide',
    description:
      'How Upper East Side owners can plan frameless shower doors around building rules, finished tile, door swing, hardware, repair choices, and estimate photos.',
    url: canonical,
    type: 'article',
    images: [heroImage],
  },
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Frameless Shower Doors on the Upper East Side: NYC Planning Guide',
  description:
    'A practical planning guide for Upper East Side frameless shower door projects in apartments, co-ops, condos, renovated bathrooms, and managed buildings.',
  author: { '@type': 'Organization', name: 'MetroGlass Pro', url: 'https://metroglasspro.com' },
  publisher: { '@type': 'Organization', name: 'MetroGlass Pro', url: 'https://metroglasspro.com' },
  datePublished: '2026-06-12',
  dateModified: '2026-09-05',
  mainEntityOfPage: canonical,
  image: heroImage,
  keywords: [
    'frameless shower doors Upper East Side NYC',
    'frameless shower doors contractor Upper East Side',
    'frameless shower doors estimate Upper East Side',
    'NYC glass contractor Upper East Side',
    'apartment glass installation Upper East Side',
  ],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much do frameless shower doors cost on the Upper East Side?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cost depends on the finished opening, glass size, door and panel layout, hardware finish, access requirements, and whether the project is new installation, replacement, or repair review.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can MetroGlass Pro work in Upper East Side co-op and condo buildings?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MetroGlass Pro can review Upper East Side co-op, condo, apartment, and townhouse shower glass projects. Managed buildings may have certificate of insurance, work-hour, elevator, service entrance, or protection requirements.',
      },
    },
    {
      '@type': 'Question',
      name: 'What photos should I send before asking for a frameless shower doors estimate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Send wide room photos, close-ups of the shower opening, finished tile or wall conditions, curb, hinge wall, nearby obstructions, rough measurements, building type, and preferred hardware finish.',
      },
    },
  ],
}

export default function FramelessShowerDoorsUpperEastSideGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className="bg-cream pt-20 sm:pt-32 pb-10 sm:pb-14">
        <div className="max-w-3xl mx-auto px-6 sm:px-10">
          <Link href="/blog/" className="text-orange text-[13px] font-medium hover:opacity-70 transition-opacity mb-6 inline-block">
            Back to Guides
          </Link>
          <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Upper East Side Shower Glass Guide</p>
          <h1 className="heading-serif text-charcoal text-4xl sm:text-6xl lg:text-7xl">
            Frameless shower doors on the Upper East Side need building details early.
          </h1>
          <p className="mt-5 text-warm text-base sm:text-lg max-w-xl leading-relaxed">
            Co-op rules, elevator access, finished tile, door clearance, hardware choices, and repair history all shape the cleanest path from estimate to installation.
          </p>
        </div>
      </section>

      <section className="bg-cream pb-8 sm:pb-12">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <div className="rounded-lg overflow-hidden img-editorial">
            <img
              src="/editorial/nyc-local/frameless-shower-doors-upper-east-side-hero.jpg"
              alt="Frameless shower door and bathroom glass planning for an Upper East Side shower"
              className="w-full h-auto block"
              loading="eager"
            />
          </div>
        </div>
      </section>

      <section className="bg-cream pb-20 sm:pb-28">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 prose-mgp">
          <p>
            Frameless shower doors on the Upper East Side often involve two scopes at once: the bathroom opening itself and the building process around the work. A useful estimate should account for finished surfaces, hinge support, curb conditions, door clearance, elevator or service entrance rules, and whether the opening is ready for accurate field measurement.
          </p>
          <p>
            MetroGlass Pro works on custom shower glass, shower door repair, mirrors, glass partitions, and related architectural glass planning across New York City. This guide helps Upper East Side apartment owners, designers, contractors, and property managers prepare the right details before requesting pricing.
          </p>

          <h2>What Changes On The Upper East Side</h2>
          <p>
            Upper East Side projects commonly involve co-ops, condos, rentals, townhouses, prewar buildings, and renovated apartment bathrooms. Even a focused shower door job may need certificate of insurance paperwork, service elevator scheduling, building protection, superintendent coordination, and restricted work hours.
          </p>
          <p>
            Inside the bathroom, older walls, tight fixture clearances, polished stone or porcelain tile, narrow entries, and nearby vanities or toilets can affect the glass layout. Frameless systems have less tolerance for out-of-plumb surfaces than framed shower doors, so final fabrication should follow the real finished opening.
          </p>

          <h2>Scope Details To Confirm Before Pricing</h2>
          <p>
            A shower glass estimate is stronger when the basic layout is clear before anyone talks about hardware alone. Confirm whether the opening needs a single swing door, door and fixed panel, return panel, tub glass, sliding layout, or walk-in panel.
          </p>
          <ul>
            <li>Send rough finished tile measurements as planning notes, not final fabrication dimensions.</li>
            <li>Confirm whether the hinge side is tile, stone, curb, pony wall, or another finished surface.</li>
            <li>Check the door swing against the toilet, vanity, radiator, towel bar, entry door, and shower controls.</li>
            <li>Choose the preferred hardware finish so hinges, handle, clamps, sweeps, and seals can be reviewed together.</li>
          </ul>

          <h2>Photos To Send Before An Estimate</h2>
          <p>
            Send a wide photo from the bathroom entry, a straight-on photo of the shower opening, and close-ups of each wall, the curb, the hinge side, the shower head side, and any obstruction near the door path. If tile is finished, include photos that show corners, curb pitch, wall alignment, and the top of the curb.
          </p>
          <p>
            For repair or replacement, photograph the existing hinges, handle, bottom sweep, side seals, leaks, gaps, loose screws, glass movement, rubbing points, and any worn hardware. Those details help MetroGlass Pro separate adjustment work from a corrected replacement layout.
          </p>

          <h2>Repair, Replacement, Or New Installation</h2>
          <p>
            Some shower door problems can be reviewed as adjustment, sweep, seal, or hardware issues. Other conditions, such as cracked glass, failing hinges, glass that no longer fits the opening, or a layout that repeatedly leaks, may call for replacement rather than repair.
          </p>
          <p>
            New frameless installation should be measured after finished surfaces are ready. If the bathroom is still under renovation, coordinate the glass conversation with tile completion, curb details, fixture placement, and any remaining finish work around the shower.
          </p>

          <h2>Building Coordination In NYC</h2>
          <p>
            Managed Upper East Side buildings may require COI language, elevator reservations, service entrance rules, floor and hallway protection, work-hour limits, and superintendent sign-off. Those rules do not decide the glass design, but they can decide how smoothly a measured and fabricated shower enclosure gets installed.
          </p>
          <p>
            Ask the building manager or property contact for contractor requirements early. Clear access rules help prevent a finished glass order from being delayed by paperwork or building logistics.
          </p>

          <div className="mt-10 p-6 bg-charcoal/[0.03] rounded-lg border border-charcoal/[0.06]">
            <p className="text-[13px] text-charcoal/50 font-medium uppercase tracking-wider mb-3">Best Next Step</p>
            <p className="text-sm text-charcoal/70 leading-relaxed">
              Send wide photos, close-ups, rough dimensions, building type, Upper East Side cross streets or neighborhood notes, and the preferred hardware finish. MetroGlass Pro can then tell whether the project is ready for pricing, repair review, or field measurement.
            </p>
          </div>
        </div>
      </section>

      <GuideFaqs questions={faqJsonLd.mainEntity} />

      <section className="bg-charcoal py-20 sm:py-24 text-center">
        <div className="max-w-2xl mx-auto px-6 sm:px-10">
          <h2 className="heading-serif text-white text-3xl sm:text-4xl">Planning frameless shower glass on the Upper East Side?</h2>
          <p className="mt-3 text-white/40 text-base">Send photos and building notes so the estimate starts with the right details.</p>
          <Link href="/contact/" className="btn-pill btn-primary px-8 py-3.5 text-sm mt-8 inline-flex">Get a Free Estimate</Link>
        </div>
      </section>
    </>
  )
}
