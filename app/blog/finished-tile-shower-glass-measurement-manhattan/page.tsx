import type { Metadata } from 'next'
import Link from 'next/link'

const canonical = 'https://metroglasspro.com/blog/finished-tile-shower-glass-measurement-manhattan/'

export const metadata: Metadata = {
  title: 'Shower Glass Measurement After Tile in NYC',
  description: 'How finished tile, curb slope, wall plumb, hardware clearance, and co-op rules affect custom shower glass measurement in Manhattan bathrooms.',
  alternates: { canonical },
  openGraph: {
    title: 'Shower Glass Measurement After Tile in NYC',
    description: 'How finished tile, curb slope, wall plumb, hardware clearance, and co-op rules affect custom shower glass measurement in Manhattan bathrooms.',
    url: canonical,
    type: 'article',
    images: ['https://metroglasspro.com/editorial/design-process-sketch.jpg'],
  },
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Shower Glass Measurement After Finished Tile in Manhattan',
  description: 'A practical guide to measuring custom shower glass after tile, waterproofing, curbs, and building constraints are finished.',
  author: { '@type': 'Organization', name: 'MetroGlass Pro', url: 'https://metroglasspro.com' },
  publisher: { '@type': 'Organization', name: 'MetroGlass Pro', url: 'https://metroglasspro.com' },
  datePublished: '2026-04-03',
  dateModified: '2026-05-12',
  mainEntityOfPage: canonical,
  image: 'https://metroglasspro.com/editorial/design-process-sketch.jpg',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Should shower glass be measured before or after tile is finished?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Final shower glass measurements should be taken after the finished wall and curb surfaces are in place because small changes in tile thickness, slope, and wall plumb affect the fabricated glass size.',
      },
    },
    {
      '@type': 'Question',
      name: 'What can delay shower glass fabrication in a Manhattan apartment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Common delays include unfinished tile edges, a curb that still needs adjustment, missing hardware decisions, building access rules, freight elevator scheduling, and certificate of insurance requirements.',
      },
    },
  ],
}

export default function FinishedTileGlassMeasurementPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className="bg-cream pt-20 sm:pt-32 pb-10 sm:pb-14">
        <div className="max-w-3xl mx-auto px-6 sm:px-10">
          <Link href="/blog/" className="text-orange text-[13px] font-medium hover:opacity-70 transition-opacity mb-6 inline-block">
            Back to Guides
          </Link>
          <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Measurement Guide</p>
          <h1 className="heading-serif text-charcoal text-4xl sm:text-6xl lg:text-7xl">
            Measure shower glass after the finished tile locks in the opening.
          </h1>
          <p className="mt-5 text-warm text-base sm:text-lg max-w-xl leading-relaxed">
            In Manhattan bathrooms, the glass fit depends on finished tile, wall plumb, curb slope, hardware clearance, and building access rules.
          </p>
        </div>
      </section>

      <section className="bg-cream pb-8 sm:pb-12">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <div className="rounded-lg overflow-hidden img-editorial">
            <img
              src="/editorial/design-process-sketch.jpg"
              alt="Shower glass planning sketch for measuring a finished Manhattan bathroom opening"
              className="w-full h-auto block"
              loading="eager"
            />
          </div>
        </div>
      </section>

      <section className="bg-cream pb-20 sm:pb-28">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 prose-mgp">
          <p>
            Custom shower glass is not measured from the framing plan. It is measured from the finished bathroom. A wall that moves slightly out of plumb, a tile edge that grows the opening, or a curb that pitches toward the drain can change the final glass size.
          </p>

          <h2>What Needs To Be Finished First</h2>
          <p>
            The tile should be complete at the shower walls, curb, bench, niche returns, and any side panel landing points. Silicone and grout should be far enough along that the final finished planes are clear. If the opening is still changing, the glass drawing can be wrong before fabrication starts.
          </p>

          <h2>What We Check During Measurement</h2>
          <p>
            A good field measure checks width at multiple heights, wall plumb, curb level, curb pitch, hinge-side blocking, door swing clearance, handle clearance, and whether a fixed panel needs clips, U-channel, or a support bar. In older Manhattan apartments, those details matter more than the nominal opening size.
          </p>

          <h2>Building Coordination Still Matters</h2>
          <p>
            Co-op and condo buildings may require a certificate of insurance, elevator reservation, service entrance timing, and quiet-hour compliance. That coordination should happen before install day, not after the fabricated glass arrives.
          </p>

          <div className="mt-10 p-6 bg-charcoal/[0.03] rounded-lg border border-charcoal/[0.06]">
            <p className="text-[13px] text-charcoal/50 font-medium uppercase tracking-wider mb-3">Best Next Step</p>
            <p className="text-sm text-charcoal/70 leading-relaxed">
              If the tile is finished or nearly finished, send photos of the opening, curb, hinge wall, and access conditions. MetroGlass Pro can confirm whether the bathroom is ready for field measurement or what needs to be resolved first.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-20 sm:py-24 text-center">
        <div className="max-w-2xl mx-auto px-6 sm:px-10">
          <h2 className="heading-serif text-white text-3xl sm:text-4xl">Ready to measure the opening?</h2>
          <p className="mt-3 text-white/40 text-base">Send the finished shower opening and we will help you plan the glass fit.</p>
          <Link href="/contact/" className="btn-pill btn-primary px-8 py-3.5 text-sm mt-8 inline-flex">Get a Free Estimate</Link>
        </div>
      </section>
    </>
  )
}
