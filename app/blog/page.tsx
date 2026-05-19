import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Shower Door Guides and Glass Planning Notes',
  description: 'Practical MetroGlass Pro guides for NYC shower door pricing, repair decisions, and shower glass planning in finished bathrooms.',
  alternates: { canonical: 'https://metroglasspro.com/blog/' },
  openGraph: {
    title: 'Shower Door Guides and Glass Planning Notes',
    description: 'Practical MetroGlass Pro guides for NYC shower door pricing, repair decisions, and shower glass planning in finished bathrooms.',
    url: 'https://metroglasspro.com/blog/',
    type: 'website',
  },
}

const posts = [
  {
    href: '/blog/edison-nj-clear-tempered-shower-door-bathroom-renovation/',
    label: 'Project Note',
    title: 'Edison NJ Clear Tempered Shower Door Project',
    excerpt: 'A renovated Edison bathroom finished with clear tempered glass, brushed brass hardware, and a fixed panel plus hinged door configuration.',
    image: '/gallery/edison-nj-clear-tempered-shower-door-hero.jpg',
    imageAlt: 'Clear tempered shower door in an Edison NJ bathroom with brushed brass hardware and warm tile finishes',
    date: 'May 2026',
  },
  {
    href: '/blog/custom-mirrors-manhattan-apartment-guide/',
    label: 'Mirror Guide',
    title: 'Custom Mirrors in Manhattan Apartments: Buyer Planning Guide',
    excerpt: 'How to plan wall condition, vanity sizing, outlets, lighting, edge details, building access, and estimate prep before ordering custom mirror glass.',
    image: '/editorial/mirror.jpg',
    imageAlt: 'Custom mirror with clean trim and refined wall fit',
    date: 'May 2026',
  },
  {
    href: '/blog/frameless-shower-doors-manhattan-buyer-guide/',
    label: 'Manhattan Guide',
    title: 'Frameless Shower Doors in Manhattan: Buyer Planning Guide',
    excerpt: 'How to plan finished tile, layout clearance, hardware, building access, and estimate prep before ordering custom shower glass.',
    image: '/editorial/shower-door.jpg',
    imageAlt: 'Frameless shower door glass and hardware in a finished bathroom',
    date: 'May 2026',
  },
  {
    href: '/blog/2026-05-10-glass-tariffs-shower-door-prices-nyc.html',
    label: 'Market Update',
    title: 'Why Glass Tariffs Are Pushing Shower Door Prices Higher in NYC',
    excerpt: 'How tariff pressure, hardware costs, supplier changes, and construction pricing can reach NYC shower door quotes.',
    image: '/editorial/shower-door.jpg',
    imageAlt: 'Frameless shower door hardware and glass in a finished bathroom',
    date: 'May 2026',
  },
  {
    href: '/blog/2026-05-09-honest-shower-door-repair-nyc.html',
    label: 'Repair Guide',
    title: 'Honest Shower Door Repair in NYC',
    excerpt: 'How to tell when a shower door needs an adjustment, new parts, resealing, or a full replacement.',
    image: '/editorial/tools.jpg',
    imageAlt: 'Shower door hardware and installation tools for repair work',
    date: 'May 2026',
  },
  {
    href: '/blog/finished-tile-shower-glass-measurement-manhattan/',
    label: 'Design Guide',
    title: 'Shower Glass Measurement After Finished Tile in Manhattan',
    excerpt: 'What finished walls, curb slope, hardware clearances, and building rules change before custom shower glass fabrication.',
    image: '/editorial/design-process-sketch.jpg',
    imageAlt: 'Shower glass planning sketch for a Manhattan bathroom opening',
    date: 'April 2026',
  },
]

export default function BlogIndex() {
  return (
    <>
      <section className="bg-cream pt-20 sm:pt-32 pb-14 sm:pb-20">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 anim-hero">
          <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Guides</p>
          <h1 className="heading-serif text-charcoal text-4xl sm:text-6xl lg:text-7xl">
            Shower glass notes from the field.
          </h1>
          <p className="mt-5 text-warm text-base sm:text-lg max-w-lg leading-relaxed">
            Buyer-focused notes on pricing, repair decisions, measurement, and installation planning for NYC bathrooms.
          </p>
        </div>
      </section>

      <section className="bg-cream pb-28 sm:pb-36">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <div className="space-y-8">
            {posts.map((post) => (
              <Link key={post.href} href={post.href} className="group block glass-card overflow-hidden card-lift">
                <div className="grid grid-cols-1 sm:grid-cols-[240px_1fr] lg:grid-cols-[300px_1fr]">
                  <div className="aspect-[16/10] sm:aspect-auto overflow-hidden bg-cream-dark">
                    <img
                      src={post.image}
                      alt={post.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5 sm:p-7">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="text-[11px] font-medium tracking-wider uppercase text-orange/70 bg-orange/[0.08] px-2 py-0.5 rounded-full">{post.label}</span>
                      <span className="text-[11px] font-medium tracking-wider uppercase text-charcoal/40 bg-charcoal/[0.04] px-2 py-0.5 rounded-full">Buyer Guide</span>
                    </div>
                    <h2 className="font-serif text-charcoal text-xl sm:text-2xl mb-2 group-hover:text-charcoal/80 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-warm text-[14px] leading-relaxed mb-3">{post.excerpt}</p>
                    <p className="text-[12px] text-charcoal/30">{post.date}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
