import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Gallery — Our Installations Across NYC',
  description: "Browse MetroGlassPro's portfolio of custom frameless shower doors, mirrors, and glass installations.",
  alternates: { canonical: 'https://metroglasspro.com/gallery/' },
  openGraph: {
    title: 'Gallery — Our Installations Across NYC',
    description: 'Browse our portfolio of frameless shower doors, glass enclosures, and mirrors installed across NYC.',
  },
  twitter: { card: 'summary_large_image' },
}

const images = [
  { src: '/gallery/project-shower-1.jpg', alt: 'Frameless glass shower door with chrome hinges installed in Manhattan apartment bathroom' },
  { src: '/gallery/project-shower-2.jpg', alt: 'Custom frameless glass enclosure installed in Brooklyn brownstone bathroom' },
  { src: '/gallery/project-shower-3.jpg', alt: 'Full frameless shower enclosure with fixed panel in NYC pre-war apartment' },
  { src: '/gallery/project-shower-4.jpg', alt: 'Sliding bypass shower doors on bathtub in Queens home' },
  { src: '/gallery/project-shower-5.jpg', alt: 'Floor-to-ceiling frameless glass shower panel in Manhattan high-rise' },
  { src: '/gallery/project-shower-6.jpg', alt: 'Frameless shower door with polished chrome hardware and towel bar' },
  { src: '/gallery/dark-shower-1.jpg', alt: 'Dark-tinted frameless glass shower enclosure in modern NYC bathroom' },
  { src: '/gallery/dark-shower-2.jpg', alt: 'Smoked glass frameless shower door with matte black hardware' },
  { src: '/gallery/dark-shower-3.jpg', alt: 'Contemporary dark glass shower door installed in renovated NYC bathroom' },
  { src: '/gallery/mirror-1.jpg', alt: 'Custom wall mirror with polished edges installed above vanity in NYC apartment' },
  { src: '/gallery/cabinet-1.jpg', alt: 'Custom glass cabinet doors installed in NYC kitchen' },
  { src: '/gallery/glass-cabinet-1.jpg', alt: 'Frosted glass cabinet insert for NYC apartment' },
  { src: '/gallery/install-1.jpeg', alt: 'MetroGlassPro installer measuring shower opening for frameless glass door' },
  { src: '/gallery/install-2.jpeg', alt: 'Frameless shower door being fitted during installation in Queens bathroom' },
  { src: '/gallery/install-3.jpeg', alt: 'Precision glass measurement for shower enclosure in Brooklyn apartment' },
  { src: '/gallery/install-4.jpeg', alt: 'Heavy tempered glass panel being positioned during Manhattan install' },
  { src: '/gallery/install-5.jpeg', alt: 'Completed frameless shower door installation in Staten Island home' },
  { src: '/gallery/install-6.jpeg', alt: 'Glass enclosure installation during Bronx bathroom renovation' },
  { src: '/gallery/install-7.jpeg', alt: 'Frameless shower door with brushed nickel hinges and handle' },
  { src: '/gallery/install-8.jpeg', alt: 'Bathroom mirror installation with J-channel mounting in Manhattan' },
  { src: '/gallery/install-9.jpeg', alt: 'Frameless shower enclosure installed in Long Island master bathroom' },
  { src: '/gallery/install-10.jpeg', alt: 'Custom frameless shower door installed in New Jersey home' },
  { src: '/gallery/install-11.jpeg', alt: 'Pivot frameless shower door installed in NYC co-op building' },
  { src: '/gallery/install-12.jpeg', alt: 'Neo-angle frameless glass enclosure in Brooklyn corner shower' },
]

export default function GalleryPage() {
  return (
    <>
      <section className="bg-cream pt-20 sm:pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 anim-hero">
          <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Portfolio</p>
          <h1 className="heading-serif text-charcoal text-5xl sm:text-6xl lg:text-7xl">Our work.</h1>
          <p className="mt-5 text-warm text-lg max-w-lg">Custom shower glass, mirrors, and installations across all NYC boroughs.</p>
          <div className="mt-4">
            <Link href="/frameless-shower-doors-nyc/" className="text-orange text-sm font-medium hover:opacity-70 transition-opacity">
              Learn about our frameless shower doors →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-cream pb-28 sm:pb-36">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {images.map((img, i) => (
              <div key={img.src} className={`gallery-item aspect-square bg-cream-dark anim-scale-in d${Math.min(i + 1, 8)}`}>
                <img src={img.src} alt={img.alt} width={500} height={500} loading={i < 4 ? 'eager' : 'lazy'} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-24 text-center">
        <div className="max-w-2xl mx-auto px-6 sm:px-10">
          <h2 className="heading-serif text-white text-4xl sm:text-5xl">Like what you see?</h2>
          <Link href="/contact/" className="btn-pill btn-primary px-10 py-3.5 text-sm mt-10 inline-flex">Request an Estimate</Link>
        </div>
      </section>
    </>
  )
}
