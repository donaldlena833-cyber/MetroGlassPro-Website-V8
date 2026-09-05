import ResponsiveImage from '@/components/ResponsiveImage'
import type { Metadata } from 'next'
import Link from 'next/link'
import GuideFaqs from '@/components/GuideFaqs'

const canonical = 'https://metroglasspro.com/blog/frameless-shower-doors-manhattan-nyc-planning-guide/'
const heroImage = 'https://metroglasspro.com/editorial/nyc-local/frameless-shower-doors-manhattan-hero.jpg'

export const metadata: Metadata = {
  title: 'Frameless Shower Doors in Manhattan: NYC Planning Guide',
  description:
    'A Manhattan frameless shower door guide covering finished tile measurements, door swing, hardware, building access, repair versus replacement, and estimate prep.',
  alternates: { canonical },
  openGraph: {
    title: 'Frameless Shower Doors in Manhattan: NYC Planning Guide',
    description:
      'How Manhattan owners can plan frameless shower doors around finished surfaces, layout clearance, building rules, and estimate photos.',
    url: canonical,
    type: 'article',
    images: [heroImage],
  },
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Frameless Shower Doors in Manhattan: NYC Planning Guide',
  description:
    'A practical planning guide for Manhattan frameless shower door projects in apartments, co-ops, condos, and townhouses.',
  author: { '@type': 'Organization', name: 'MetroGlass Pro', url: 'https://metroglasspro.com' },
  publisher: { '@type': 'Organization', name: 'MetroGlass Pro', url: 'https://metroglasspro.com' },
  datePublished: '2026-06-06',
  dateModified: '2026-09-05',
  mainEntityOfPage: canonical,
  image: heroImage,
  keywords: [
    'frameless shower doors Manhattan NYC',
    'frameless shower doors contractor Manhattan',
    'NYC glass contractor Manhattan',
    'apartment shower glass installation Manhattan',
    'custom shower doors Manhattan',
  ],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much do frameless shower doors cost in Manhattan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pricing depends on the finished opening, glass size, hardware, door swing, panel layout, access requirements, and whether the project is new installation, replacement, or repair review.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can MetroGlass Pro work in co-op and condo buildings in Manhattan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MetroGlass Pro can review Manhattan co-op and condo shower glass projects, but each building may have its own insurance paperwork, work-hour rules, elevator scheduling, and access requirements.',
      },
    },
  ],
}

export default function FramelessShowerDoorsManhattanGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className="bg-cream pt-20 sm:pt-32 pb-10 sm:pb-14">
        <div className="max-w-3xl mx-auto px-6 sm:px-10">
          <Link href="/blog/" className="text-orange text-[13px] font-medium hover:opacity-70 transition-opacity mb-6 inline-block">
            Back to Guides
          </Link>
          <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Manhattan Shower Glass Guide</p>
          <h1 className="heading-serif text-charcoal text-4xl sm:text-6xl lg:text-7xl">
            Frameless shower doors in Manhattan depend on finished surfaces, access, and layout.
          </h1>
          <p className="mt-5 text-warm text-base sm:text-lg max-w-xl leading-relaxed">
            Finished tile, wall plumb, curb pitch, door swing, hardware finish, and building rules all shape the cleanest path from estimate to field measurement.
          </p>
        </div>
      </section>

      <section className="bg-cream pb-8 sm:pb-12">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <div className="rounded-lg overflow-hidden img-editorial">
            <ResponsiveImage
              src="/editorial/nyc-local/frameless-shower-doors-manhattan-hero.jpg"
              alt="Frameless shower door glass and hardware planning for a Manhattan bathroom"
              className="w-full h-auto block"
              loading="eager"
            />
          </div>
        </div>
      </section>

      <section className="bg-cream pb-20 sm:pb-28">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 prose-mgp">
          <p>
            Frameless shower doors in Manhattan look simple after installation, but the planning is precise. The final glass has to match finished tile, wall alignment, curb pitch, hinge support, door swing clearance, and the way the bathroom is actually used.
          </p>
          <p>
            MetroGlass Pro works on custom shower glass, shower door repair, mirrors, glass partitions, and related architectural glass planning across New York City. For Manhattan apartments, the most useful estimate conversation starts with the real opening and the building conditions around it.
          </p>

          <h2>What Changes In Manhattan</h2>
          <p>
            Manhattan projects often involve tight bathrooms, older walls, co-op or condo access rules, freight elevator scheduling, limited loading zones, and finished surfaces that cannot be guessed from rough dimensions. A clean frameless layout needs enough room for the door to swing, enough structure for hinges, and enough tolerance for the glass to meet the tile without fighting it.
          </p>
          <p>
            If the shower is part of a larger renovation, the best measurement usually happens after tile is finished. If the request is a replacement, photos of the existing glass and hardware help separate a same-layout replacement from a layout correction.
          </p>

          <h2>Scope Details To Confirm Before Pricing</h2>
          <p>
            Before asking for a frameless shower door estimate, confirm which surfaces are finished, whether the curb is pitched into the shower, which wall will carry hinges, and whether the door can swing without hitting the vanity, toilet, towel bar, radiator, or entry door.
          </p>
          <ul>
            <li>Send finished tile measurements only as a starting point, not as fabrication-ready dimensions.</li>
            <li>Identify whether the layout is a single door, door and fixed panel, return panel, corner enclosure, or tub glass condition.</li>
            <li>Choose the preferred hardware finish early so hinges, handle, clamps, and seals can be reviewed together.</li>
            <li>Flag out-of-plumb walls, uneven curbs, niches, benches, or trim that may affect glass landings.</li>
          </ul>

          <h2>Photos To Send Before An Estimate</h2>
          <p>
            Useful photos include a wide shot from the bathroom entry, a straight-on shot of the shower opening, close-ups of each side wall, the curb, the hinge wall, the shower head side, and any nearby obstruction. If the bathroom is already tiled, include close-ups of the corners and curb slope.
          </p>
          <p>
            For a replacement, photograph the existing hinges, handle, bottom sweep, side seals, gaps, leaks, and any area where the door rubs or misses the wall. Those details help MetroGlass Pro decide whether the job is repair review, glass replacement, or a new layout conversation.
          </p>

          <h2>Repair, Replacement, Or New Installation</h2>
          <p>
            A door that leaks or drags may need adjustment, sweeps, seals, or hardware review. A cracked panel, badly corroded hardware, poor original layout, or glass that no longer fits the opening may require replacement instead of repair.
          </p>
          <p>
            New frameless installation is different from repair. It should be planned around finished wall conditions, hardware support, glass clearances, and the daily use of the bathroom. A narrow Manhattan bathroom may need a different door swing or panel configuration than a larger primary bath.
          </p>

          <h2>Building Coordination In NYC</h2>
          <p>
            Many Manhattan buildings ask contractors for certificate of insurance paperwork, work-hour compliance, freight elevator reservations, service entrance access, and floor or hallway protection. These requirements do not change the glass layout, but they do affect scheduling and preparation.
          </p>
          <p>
            Ask the building or managing agent what is required before installation day. Clear rules help avoid delays after the glass is fabricated and ready to install.
          </p>

          <div className="mt-10 p-6 bg-charcoal/[0.03] rounded-lg border border-charcoal/[0.06]">
            <p className="text-[13px] text-charcoal/50 font-medium uppercase tracking-wider mb-3">Best Next Step</p>
            <p className="text-sm text-charcoal/70 leading-relaxed">
              Send wide photos, close-ups, rough dimensions, building type, Manhattan neighborhood, and the preferred hardware finish. MetroGlass Pro can then tell whether the project is ready for pricing, repair review, or field measurement.
            </p>
          </div>
        </div>
      </section>

      <GuideFaqs questions={faqJsonLd.mainEntity} />

      <section className="bg-charcoal py-20 sm:py-24 text-center">
        <div className="max-w-2xl mx-auto px-6 sm:px-10">
          <h2 className="heading-serif text-white text-3xl sm:text-4xl">Planning frameless shower glass in Manhattan?</h2>
          <p className="mt-3 text-white/40 text-base">Send photos and scope notes so the estimate starts with the right details.</p>
          <Link href="/contact/" className="btn-pill btn-primary px-8 py-3.5 text-sm mt-8 inline-flex">Get a Free Estimate</Link>
        </div>
      </section>
    </>
  )
}
