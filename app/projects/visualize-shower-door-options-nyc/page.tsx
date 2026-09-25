import ResponsiveImage from '@/components/ResponsiveImage'
import type { Metadata } from 'next'
import Link from 'next/link'

const canonical = 'https://metroglasspro.com/projects/visualize-shower-door-options-nyc/'

export const metadata: Metadata = {
  title: 'Compare Shower Door Layouts Before Ordering Glass',
  description: 'Compare illustrated hinged, sliding, corner, and curved shower enclosure ideas. Field measurements and available hardware determine what fits.',
  alternates: { canonical },
  openGraph: {
    title: 'Compare Shower Door Layouts Before Ordering Glass',
    description: 'Illustrated shower glass options and the questions to resolve before field measurement and fabrication.',
    url: canonical,
    type: 'article',
    images: ['https://metroglasspro.com/gallery/visualize-feature-neo-angle.jpg'],
  },
  twitter: { card: 'summary_large_image' },
}

const layouts = [
  {
    title: 'Hinged door and fixed panel',
    image: '/gallery/visualize-feature-hinged.jpg',
    alt: 'Illustration of a hinged shower door and fixed panel in a tiled bathroom',
    question: 'Is there safe swing clearance around the toilet, vanity, and bathroom entry? The hinge wall and panel support also need field review.',
  },
  {
    title: 'Sliding door',
    image: '/gallery/visualize-feature-slider.jpg',
    alt: 'Illustration of a sliding shower door with a top rail in a tiled bathroom',
    question: 'A sliding layout avoids a door arc, but the opening, track, overlap, and access for cleaning all affect the choice.',
  },
  {
    title: 'Corner enclosure',
    image: '/gallery/visualize-feature-corner.jpg',
    alt: 'Illustration of a glass enclosure wrapping a shower corner',
    question: 'A corner layout needs a suitable base, support, entry position, and water-control plan. Rendered dimensions are not fabrication measurements.',
  },
  {
    title: 'Curved or neo-angle concept',
    image: '/gallery/visualize-feature-neo-angle.jpg',
    alt: 'Illustration of a curved neo-angle shower enclosure concept',
    question: 'A curved idea requires a compatible system and supplier review. The illustration alone does not establish that it can be built for a particular opening.',
  },
]

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Compare Shower Door Layouts Before Ordering Glass',
  description: 'Illustrative shower enclosure layouts and the field checks needed before ordering glass.',
  author: { '@type': 'Organization', name: 'MetroGlass Pro', url: 'https://metroglasspro.com' },
  publisher: { '@type': 'Organization', name: 'MetroGlass Pro', url: 'https://metroglasspro.com' },
  datePublished: '2026-04-01',
  dateModified: '2026-09-25',
  mainEntityOfPage: canonical,
}

export default function CompareShowerDoorLayoutsPage() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
    <section className="bg-cream pt-20 sm:pt-32 pb-16 sm:pb-20">
      <div className="max-w-3xl mx-auto px-6 sm:px-10">
        <Link href="/projects/" className="text-orange text-[13px] font-medium mb-6 inline-block">← Projects and planning guides</Link>
        <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Planning guide · Illustrated options</p>
        <h1 className="heading-serif text-charcoal text-4xl sm:text-6xl">Compare shower door layouts before ordering glass.</h1>
        <p className="mt-5 text-warm text-base sm:text-lg leading-relaxed">These four illustrations show layout directions to discuss. Project-specific drawings, when available, are confirmed during the estimate. The finished opening, support, clearances, hardware, and supplier availability decide what can be quoted and built.</p>
      </div>
    </section>
    <section className="bg-cream-light py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        <h2 className="heading-serif text-charcoal text-3xl sm:text-4xl mb-4">Four directions to discuss</h2>
        <p className="text-warm text-base leading-relaxed max-w-3xl mb-10">A drawing can help narrow the conversation, but it cannot replace a field measurement or confirm code, structural support, water control, or fabrication details.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {layouts.map((layout) => <article key={layout.title} className="glass-card overflow-hidden">
            <ResponsiveImage src={layout.image} alt={layout.alt} className="w-full aspect-[4/3] object-cover" loading="lazy" />
            <div className="p-6">
              <h3 className="font-serif text-charcoal text-2xl mb-3">{layout.title}</h3>
              <p className="text-warm text-[15px] leading-relaxed">{layout.question}</p>
            </div>
          </article>)}
        </div>
      </div>
    </section>
    <section className="bg-cream py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-6 sm:px-10">
        <h2 className="heading-serif text-charcoal text-3xl sm:text-4xl mb-5">What to send for a useful layout review</h2>
        <ul className="space-y-3 text-warm text-[15px] leading-relaxed list-disc pl-5">
          <li>A straight-on photo of the full shower opening and one wider room photo.</li>
          <li>Photos of the curb or tub edge, side walls, showerhead, toilet, vanity, and door path.</li>
          <li>Rough opening dimensions, current tile status, hardware finish, and building access requirements.</li>
        </ul>
        <p className="mt-6 text-warm text-[15px] leading-relaxed">We can discuss likely options from photos. A project-specific layout, price, and schedule follow review of the actual site conditions and available components.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/contact/" className="btn-pill btn-primary px-8 py-3 text-sm">Discuss your opening</Link>
          <Link href="/frameless-shower-doors-nyc/" className="btn-pill btn-outline px-8 py-3 text-sm">Frameless shower doors</Link>
          <Link href="/projects/84-clinton-lower-east-side-shower-door-before-after/" className="btn-pill btn-outline px-8 py-3 text-sm">See a photographed project</Link>
        </div>
      </div>
    </section>
  </>
}
