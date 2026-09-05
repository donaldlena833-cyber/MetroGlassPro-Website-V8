import ResponsiveImage from '@/components/ResponsiveImage'
import type { Metadata } from 'next'
import Link from 'next/link'
import GuideFaqs from '@/components/GuideFaqs'

const canonical = 'https://metroglasspro.com/blog/frameless-shower-doors-staten-island-nyc-planning-guide/'
const heroImage = 'https://metroglasspro.com/editorial/nyc-local/frameless-shower-doors-staten-island-hero.jpg'

export const metadata: Metadata = {
  title: 'Frameless Shower Doors in Staten Island: NYC Planning Guide',
  description:
    'A Staten Island frameless shower door guide covering finished tile measurements, door swing, hardware, access, repair versus replacement, and estimate prep.',
  alternates: { canonical },
  openGraph: {
    title: 'Frameless Shower Doors in Staten Island: NYC Planning Guide',
    description:
      'How Staten Island owners can plan frameless shower doors around finished tile, door swing, hardware, access, repair decisions, and estimate photos.',
    url: canonical,
    type: 'article',
    images: [heroImage],
  },
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Frameless Shower Doors in Staten Island: NYC Planning Guide',
  description:
    'A practical planning guide for Staten Island frameless shower door projects in apartments, condos, multifamily buildings, private homes, and renovated bathrooms.',
  author: { '@type': 'Organization', name: 'MetroGlass Pro', url: 'https://metroglasspro.com' },
  publisher: { '@type': 'Organization', name: 'MetroGlass Pro', url: 'https://metroglasspro.com' },
  datePublished: '2026-06-11',
  dateModified: '2026-09-05',
  mainEntityOfPage: canonical,
  image: heroImage,
  keywords: [
    'frameless shower doors Staten Island NYC',
    'frameless shower doors contractor Staten Island',
    'frameless shower doors estimate Staten Island',
    'NYC glass contractor Staten Island',
    'apartment glass installation Staten Island',
  ],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much do frameless shower doors cost in Staten Island?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pricing depends on the finished opening, glass size, door and panel layout, hardware finish, access requirements, and whether the project is new installation, replacement, or repair review.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can MetroGlass Pro work in condos or managed buildings in Staten Island?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MetroGlass Pro can review Staten Island condo, apartment, multifamily, and private-home shower glass projects. Managed buildings may have certificate of insurance, work-hour, elevator, service entrance, or protection requirements.',
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

export default function FramelessShowerDoorsStatenIslandGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className="bg-cream pt-20 sm:pt-32 pb-10 sm:pb-14">
        <div className="max-w-3xl mx-auto px-6 sm:px-10">
          <Link href="/blog/" className="text-orange text-[13px] font-medium hover:opacity-70 transition-opacity mb-6 inline-block">
            Back to Guides
          </Link>
          <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Staten Island Shower Glass Guide</p>
          <h1 className="heading-serif text-charcoal text-4xl sm:text-6xl lg:text-7xl">
            Frameless shower doors in Staten Island need clear opening details before fabrication.
          </h1>
          <p className="mt-5 text-warm text-base sm:text-lg max-w-xl leading-relaxed">
            Finished tile, curb pitch, hinge support, door clearance, hardware choices, and access details all shape the cleanest path from estimate to installation.
          </p>
        </div>
      </section>

      <section className="bg-cream pb-8 sm:pb-12">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <div className="rounded-lg overflow-hidden img-editorial">
            <ResponsiveImage
              src="/editorial/nyc-local/frameless-shower-doors-staten-island-hero.jpg"
              alt="Frameless shower door and bathroom glass planning for a Staten Island shower"
              className="w-full h-auto block"
              loading="eager"
            />
          </div>
        </div>
      </section>

      <section className="bg-cream pb-20 sm:pb-28">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 prose-mgp">
          <p>
            Frameless shower doors in Staten Island depend on more than the glass size. A useful estimate has to account for finished surfaces, hinge support, curb conditions, door clearance, building or home access, and whether the opening is ready for accurate field measurement.
          </p>
          <p>
            MetroGlass Pro works on custom shower glass, shower door repair, mirrors, glass partitions, and related architectural glass planning across New York City. This guide helps Staten Island owners, designers, contractors, and property managers prepare the right details before requesting pricing.
          </p>

          <h2>What Changes In Staten Island</h2>
          <p>
            Staten Island shower glass projects can involve private homes, condos, apartments, multifamily properties, and renovated bathrooms where the work path may be very different from a Manhattan high-rise. Parking and loading may be easier in some homes, while managed buildings can still require paperwork, work-hour rules, elevator scheduling, and protection requirements.
          </p>
          <p>
            Inside the bathroom, finished tile alignment, old framing, curb pitch, wall plumb, nearby fixtures, and tight door swings matter more than the borough. Frameless glass has less tolerance for uneven openings than framed systems, so the final layout should follow the actual field conditions.
          </p>

          <h2>Scope Details To Confirm Before Pricing</h2>
          <p>
            A frameless shower door estimate is strongest when the basic scope is clear. Confirm whether the shower is fully tiled, where the hinges would mount, whether the curb slopes into the shower, and whether the door can swing without hitting a toilet, vanity, radiator, towel bar, or entry door.
          </p>
          <ul>
            <li>Send finished tile measurements as planning notes, not final fabrication dimensions.</li>
            <li>Identify whether the layout is a single swing door, door and fixed panel, corner enclosure, tub glass, or walk-in panel.</li>
            <li>Confirm the preferred hardware finish so hinges, handle, clamps, and seals can be reviewed together.</li>
            <li>Flag benches, niches, towel bars, toilets, vanities, radiators, or doors that may affect glass clearance.</li>
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
            Some shower door problems can be reviewed as adjustment, seal, sweep, or hardware issues. Other conditions, such as cracked glass, badly worn hardware, glass that no longer fits the opening, or a layout that keeps leaking, may require replacement instead of repair.
          </p>
          <p>
            New frameless installation should be measured after finished surfaces are ready. If the bathroom is still under renovation, coordinate the glass conversation with tile completion, curb details, fixture placement, and any remaining finish work around the shower.
          </p>

          <h2>Building Coordination In NYC</h2>
          <p>
            Staten Island condos, managed apartments, and multifamily buildings may ask for certificate of insurance paperwork, restricted work hours, elevator or service entrance scheduling, floor protection, and superintendent coordination. Private homes may still need clear access, parking, staging space, and protection for finished surfaces.
          </p>
          <p>
            Ask the building or property contact for contractor requirements early. Clear access rules help avoid delays after glass has been fabricated and is ready to install.
          </p>

          <div className="mt-10 p-6 bg-charcoal/[0.03] rounded-lg border border-charcoal/[0.06]">
            <p className="text-[13px] text-charcoal/50 font-medium uppercase tracking-wider mb-3">Best Next Step</p>
            <p className="text-sm text-charcoal/70 leading-relaxed">
              Send wide photos, close-ups, rough dimensions, building type, Staten Island neighborhood, and the preferred hardware finish. MetroGlass Pro can then tell whether the project is ready for pricing, repair review, or field measurement.
            </p>
          </div>
        </div>
      </section>

      <GuideFaqs questions={faqJsonLd.mainEntity} />

      <section className="bg-charcoal py-20 sm:py-24 text-center">
        <div className="max-w-2xl mx-auto px-6 sm:px-10">
          <h2 className="heading-serif text-white text-3xl sm:text-4xl">Planning frameless shower glass in Staten Island?</h2>
          <p className="mt-3 text-white/40 text-base">Send photos and scope notes so the estimate starts with the right details.</p>
          <Link href="/contact/" className="btn-pill btn-primary px-8 py-3.5 text-sm mt-8 inline-flex">Get a Free Estimate</Link>
        </div>
      </section>
    </>
  )
}
