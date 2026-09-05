import ResponsiveImage from '@/components/ResponsiveImage'
import type { Metadata } from 'next'
import Link from 'next/link'

const canonical = 'https://metroglasspro.com/blog/edison-nj-clear-tempered-shower-door-bathroom-renovation/'
const heroImage = 'https://metroglasspro.com/gallery/edison-nj-clear-tempered-shower-door-hero.jpg'

export const metadata: Metadata = {
  title: 'Edison NJ Clear Tempered Shower Door Project',
  description: 'A MetroGlass Pro bathroom renovation finish in Edison, NJ with clear tempered glass, brushed brass hardware, and a door plus fixed panel shower configuration.',
  alternates: { canonical },
  openGraph: {
    title: 'Edison NJ Clear Tempered Shower Door Project',
    description: 'A finished Edison, NJ bathroom renovation with clear tempered shower glass and brushed brass hardware selected to match the room finishes.',
    url: canonical,
    type: 'article',
    images: [heroImage],
  },
  twitter: {
    card: 'summary_large_image',
    images: [heroImage],
  },
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Edison NJ Clear Tempered Shower Door Project',
  description: 'A real Edison, NJ bathroom renovation finish with clear tempered shower glass, brushed brass hardware, and a door plus fixed panel configuration.',
  author: { '@type': 'Organization', name: 'MetroGlass Pro', url: 'https://metroglasspro.com' },
  publisher: { '@type': 'Organization', name: 'MetroGlass Pro', url: 'https://metroglasspro.com' },
  datePublished: '2026-05-19',
  dateModified: '2026-09-05',
  mainEntityOfPage: canonical,
  image: heroImage,
}

const projectImages = [
  {
    src: '/gallery/edison-nj-clear-tempered-shower-door-angle.jpg',
    alt: 'Clear tempered shower door and fixed panel in an Edison NJ bathroom with brushed brass hardware and marble-look tile.',
  },
  {
    src: '/gallery/edison-nj-clear-tempered-shower-door-handle.jpg',
    alt: 'Close view of a brushed brass shower door pull on clear glass with warm vertical tile behind it.',
  },
  {
    src: '/gallery/edison-nj-clear-tempered-shower-door-hardware.jpg',
    alt: 'Lower brushed brass shower door hinge, channel, and clear glass edge above a white hex mosaic shower floor.',
  },
]

export default function EdisonNjShowerDoorProjectPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <section className="bg-cream pt-20 sm:pt-32 pb-10 sm:pb-14">
        <div className="max-w-3xl mx-auto px-6 sm:px-10">
          <Link href="/blog/" className="text-orange text-[13px] font-medium hover:opacity-70 transition-opacity mb-6 inline-block">
            Back to Guides
          </Link>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-[11px] font-medium tracking-wider uppercase text-charcoal/40 bg-charcoal/[0.04] px-2.5 py-1 rounded-full">Real Project</span>
            <span className="text-[11px] font-medium tracking-wider uppercase text-charcoal/40 bg-charcoal/[0.04] px-2.5 py-1 rounded-full">Edison NJ</span>
            <span className="text-[11px] font-medium tracking-wider uppercase text-charcoal/40 bg-charcoal/[0.04] px-2.5 py-1 rounded-full">Clear Tempered Glass</span>
          </div>
          <h1 className="heading-serif text-charcoal text-3xl sm:text-5xl lg:text-6xl">
            Edison NJ bathroom renovation finished with a clear tempered shower door.
          </h1>
          <p className="mt-5 text-warm text-base sm:text-lg max-w-xl leading-relaxed">
            The bathroom renovation already had a strong tile and finish palette. This shower door was the final piece that made the room feel complete.
          </p>
          <p className="mt-4 text-charcoal/30 text-sm">May 19, 2026</p>
        </div>
      </section>

      <section className="bg-cream pb-6 sm:pb-10">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <div className="rounded-lg overflow-hidden img-editorial aspect-[4/5] sm:aspect-[60/37]">
            <ResponsiveImage
              src="/gallery/edison-nj-clear-tempered-shower-door-hero.jpg"
              alt="Finished clear tempered shower door in an Edison NJ bathroom with brushed brass hardware, warm vertical tile, and white marble-look wall tile."
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </section>

      <section className="bg-cream pb-20 sm:pb-28">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 prose-mgp">
          <p>
            For this Edison, NJ bathroom project, the client wanted the shower glass to work with the colors and finishes already chosen for the renovation. The room pairs white marble-look wall tile with a warm vertical accent tile, white hex mosaic shower floor tile, and brushed brass fixtures.
          </p>
          <p>
            Clear tempered glass keeps the tile work visible, while the brushed brass hardware connects back to the shower fixtures and warmer finishes. Standard clear glass can have a green tint, especially at exposed edges; it should not be confused with low-iron glass, which reduces that tint.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 mb-10">
            {projectImages.map((image) => (
              <div key={image.src} className="glass-card overflow-hidden">
                <div className="aspect-[3/4] img-editorial">
                  <ResponsiveImage
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>

          <h2>Why this shower door worked with the bathroom finishes</h2>
          <p>
            A renovated bathroom can feel almost finished before the glass goes in, but the enclosure often decides whether the final result feels intentional. In this room, the clear glass lets the warm shower wall stay visible from outside the shower. The brushed brass handle, hinges, clips, and bottom channel match the fixture direction instead of fighting it.
          </p>
          <p>
            The configuration uses a fixed panel and a hinged door. The fixed panel is 1/2-inch clear tempered glass for a more substantial stationary section, while the door is 3/8-inch clear tempered glass for smooth operation and a clean frameless look.
          </p>

          <h2>Project details</h2>
          <p>
            The full shower door configuration was billed at $2,350. That included the clear tempered glass setup, the fixed panel and door layout, and the brushed brass hardware selected to fit the bathroom colors and finishes.
          </p>
          <p>
            For homeowners planning a similar bathroom, this is a good example of why the shower glass decision should happen after the main finishes are known. Hardware color, glass type, panel layout, and door swing all affect how the finished bathroom feels.
          </p>

          <div className="mt-10 p-6 bg-charcoal/[0.03] rounded-lg border border-charcoal/[0.06]">
            <p className="text-[13px] text-charcoal/50 font-medium uppercase tracking-wider mb-3">Specification Snapshot</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-charcoal/70">
              <div><span className="text-charcoal/40">Location,</span> Edison, New Jersey.</div>
              <div><span className="text-charcoal/40">Configuration,</span> Hinged door with fixed panel.</div>
              <div><span className="text-charcoal/40">Glass,</span> Clear tempered glass, not low iron.</div>
              <div><span className="text-charcoal/40">Fixed panel,</span> 1/2-inch glass.</div>
              <div><span className="text-charcoal/40">Door,</span> 3/8-inch glass.</div>
              <div><span className="text-charcoal/40">Hardware,</span> Brushed brass finish.</div>
              <div><span className="text-charcoal/40">Project total,</span> $2,350.</div>
              <div><span className="text-charcoal/40">Project type,</span> Bathroom renovation finish.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-20 border-t border-charcoal/[0.04]">
        <div className="max-w-3xl mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-charcoal text-[14px] uppercase tracking-wider mb-4">Related Services</h3>
              <div className="space-y-2">
                <Link href="/shower-door-installation-nyc/" className="text-orange text-[14px] hover:opacity-70 transition-opacity block">Shower Door Installation</Link>
                <Link href="/frameless-shower-doors-nyc/" className="text-orange text-[14px] hover:opacity-70 transition-opacity block">Frameless Shower Doors</Link>
                <Link href="/projects/door-fixed-panel-nyc/" className="text-orange text-[14px] hover:opacity-70 transition-opacity block">Door and Fixed Panel Layouts</Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-charcoal text-[14px] uppercase tracking-wider mb-4">Planning Notes</h3>
              <div className="space-y-2">
                <Link href="/frameless-shower-doors-nyc/" className="text-orange text-[14px] hover:opacity-70 transition-opacity block">Frameless Shower Door Options</Link>
                <Link href="/blog/finished-tile-shower-glass-measurement-manhattan/" className="text-orange text-[14px] hover:opacity-70 transition-opacity block">Measuring After Finished Tile</Link>
                <Link href="/projects/frameless-shower-door-cost-nyc/" className="text-orange text-[14px] hover:opacity-70 transition-opacity block">Shower Door Cost Guide</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-20 sm:py-24 text-center">
        <div className="max-w-2xl mx-auto px-6 sm:px-10">
          <h2 className="heading-serif text-white text-3xl sm:text-4xl">Planning the final glass for a renovated bathroom?</h2>
          <p className="mt-3 text-white/40 text-base">Send photos of the finished tile, curb, and fixture finishes so we can help match the right glass and hardware setup.</p>
          <Link href="/contact/" className="btn-pill btn-primary px-10 py-3.5 text-sm mt-8 inline-flex">Get a Free Estimate</Link>
        </div>
      </section>
    </>
  )
}
