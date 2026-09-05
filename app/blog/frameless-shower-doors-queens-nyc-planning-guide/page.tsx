import ResponsiveImage from '@/components/ResponsiveImage'
import type { Metadata } from 'next'
import Link from 'next/link'
import GuideFaqs from '@/components/GuideFaqs'

const canonical = 'https://metroglasspro.com/blog/frameless-shower-doors-queens-nyc-planning-guide/'
const heroImage = 'https://metroglasspro.com/editorial/nyc-local/frameless-shower-doors-queens-hero.jpg'

export const metadata: Metadata = {
  title: 'Frameless Shower Doors in Queens: NYC Planning Guide',
  description:
    'A Queens frameless shower door guide covering finished tile measurements, layout, hardware, building access, repair versus replacement, and estimate prep.',
  alternates: { canonical },
  openGraph: {
    title: 'Frameless Shower Doors in Queens: NYC Planning Guide',
    description:
      'How Queens owners can plan frameless shower doors around apartment conditions, finished tile, door swing, hardware, and building coordination.',
    url: canonical,
    type: 'article',
    images: [heroImage],
  },
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Frameless Shower Doors in Queens: NYC Planning Guide',
  description:
    'A practical planning guide for Queens frameless shower door projects in apartments, co-ops, condos, townhouses, and renovated bathrooms.',
  author: { '@type': 'Organization', name: 'MetroGlass Pro', url: 'https://metroglasspro.com' },
  publisher: { '@type': 'Organization', name: 'MetroGlass Pro', url: 'https://metroglasspro.com' },
  datePublished: '2026-06-09',
  dateModified: '2026-09-05',
  mainEntityOfPage: canonical,
  image: heroImage,
  keywords: [
    'frameless shower doors Queens NYC',
    'frameless shower doors contractor Queens',
    'frameless shower doors estimate Queens',
    'NYC glass contractor Queens',
    'apartment glass installation Queens',
  ],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much do frameless shower doors cost in Queens?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pricing depends on the finished opening, glass size, hardware, panel layout, door swing, access requirements, and whether the job is new installation, replacement, or repair review.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can MetroGlass Pro work in co-op and condo buildings in Queens?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MetroGlass Pro can review Queens co-op and condo shower glass projects. Each building may have its own certificate of insurance, work-hour, elevator, service entrance, and protection requirements.',
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

export default function FramelessShowerDoorsQueensGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className="bg-cream pt-20 sm:pt-32 pb-10 sm:pb-14">
        <div className="max-w-3xl mx-auto px-6 sm:px-10">
          <Link href="/blog/" className="text-orange text-[13px] font-medium hover:opacity-70 transition-opacity mb-6 inline-block">
            Back to Guides
          </Link>
          <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Queens Shower Glass Guide</p>
          <h1 className="heading-serif text-charcoal text-4xl sm:text-6xl lg:text-7xl">
            Frameless shower doors in Queens should be planned around the finished opening.
          </h1>
          <p className="mt-5 text-warm text-base sm:text-lg max-w-xl leading-relaxed">
            Tile readiness, wall alignment, curb pitch, door swing, hardware choices, and building access all shape the cleanest path from estimate to installation.
          </p>
        </div>
      </section>

      <section className="bg-cream pb-8 sm:pb-12">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <div className="rounded-lg overflow-hidden img-editorial">
            <ResponsiveImage
              src="/editorial/nyc-local/frameless-shower-doors-queens-hero.jpg"
              alt="Frameless shower door and bathroom glass planning for a Queens shower"
              className="w-full h-auto block"
              loading="eager"
            />
          </div>
        </div>
      </section>

      <section className="bg-cream pb-20 sm:pb-28">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 prose-mgp">
          <p>
            Frameless shower doors in Queens depend on more than the glass size. A good estimate has to account for finished surfaces, older walls, hinge support, door clearance, building rules, and whether the opening is ready for accurate field measurement.
          </p>
          <p>
            MetroGlass Pro works on custom shower glass, shower door repair, mirrors, glass partitions, and related architectural glass planning across New York City. This guide helps Queens owners, designers, contractors, and property managers prepare the right details before requesting pricing.
          </p>

          <h2>What Changes In Queens</h2>
          <p>
            Queens projects can include co-op apartments, condos, private houses, multifamily buildings, rentals, and compact older bathrooms. Each setting changes access, staging, building coordination, and the amount of tolerance available in the shower opening.
          </p>
          <p>
            Parking, loading, walk-up access, elevator scheduling, hallway protection, and service entrance rules can affect installation day. Inside the bathroom, older tile, out-of-plumb walls, narrow clearances, and existing hardware conditions decide whether the project is a straightforward replacement or a new layout conversation.
          </p>

          <h2>Scope Details To Confirm Before Pricing</h2>
          <p>
            A frameless shower door estimate is strongest when the basic scope is clear. Confirm whether the shower is fully tiled, whether the curb pitches into the shower, where the hinges would mount, and whether the door can swing without hitting nearby fixtures.
          </p>
          <ul>
            <li>Send finished tile measurements as planning notes, not final fabrication dimensions.</li>
            <li>Identify whether the layout is a single swing door, door and fixed panel, corner enclosure, tub glass, or walk-in panel.</li>
            <li>Confirm the preferred hardware finish so hinges, handle, clamps, and seals can be reviewed together.</li>
            <li>Flag benches, niches, radiators, towel bars, toilets, vanities, or entry doors that may affect glass clearance.</li>
          </ul>

          <h2>Photos To Send Before An Estimate</h2>
          <p>
            Send a wide photo from the bathroom entry, a straight-on photo of the shower opening, and close-ups of each wall, the curb, the hinge side, the shower head side, and any obstruction near the door swing. If tile is finished, include photos that show corners, curb slope, and wall alignment.
          </p>
          <p>
            For repair or replacement, photograph the existing hinges, handle, bottom sweep, side seals, leaks, gaps, loose screws, rubbing points, and any glass movement. These details help MetroGlass Pro separate adjustment work from replacement glass or a corrected layout.
          </p>

          <h2>Repair, Replacement, Or New Installation</h2>
          <p>
            Some shower door problems can be reviewed as adjustment, seal, sweep, or hardware issues. Other conditions, such as cracked glass, badly worn hardware, a poor original layout, or glass that no longer fits the opening, may require replacement instead of repair.
          </p>
          <p>
            New frameless installation should be measured after finished surfaces are ready. If the bathroom is still under renovation, coordinate the glass conversation with tile completion, curb details, fixture placement, and any remaining finish work around the shower.
          </p>

          <h2>Building Coordination In NYC</h2>
          <p>
            Queens co-ops, condos, managed rentals, and multifamily buildings may ask for certificate of insurance paperwork, restricted work hours, freight elevator or service entrance scheduling, floor protection, and superintendent coordination. Those requirements do not guarantee building approval, but they should be known before installation day.
          </p>
          <p>
            Ask the building or managing agent for alteration or contractor requirements early. Clear access rules help avoid delays after glass has been fabricated and is ready to install.
          </p>

          <div className="mt-10 p-6 bg-charcoal/[0.03] rounded-lg border border-charcoal/[0.06]">
            <p className="text-[13px] text-charcoal/50 font-medium uppercase tracking-wider mb-3">Best Next Step</p>
            <p className="text-sm text-charcoal/70 leading-relaxed">
              Send wide photos, close-ups, rough dimensions, building type, Queens neighborhood, and the preferred hardware finish. MetroGlass Pro can then tell whether the project is ready for pricing, repair review, or field measurement.
            </p>
          </div>
        </div>
      </section>

      <GuideFaqs questions={faqJsonLd.mainEntity} />

      <section className="bg-charcoal py-20 sm:py-24 text-center">
        <div className="max-w-2xl mx-auto px-6 sm:px-10">
          <h2 className="heading-serif text-white text-3xl sm:text-4xl">Planning frameless shower glass in Queens?</h2>
          <p className="mt-3 text-white/40 text-base">Send photos and scope notes so the estimate starts with the right details.</p>
          <Link href="/contact/" className="btn-pill btn-primary px-8 py-3.5 text-sm mt-8 inline-flex">Get a Free Estimate</Link>
        </div>
      </section>
    </>
  )
}
