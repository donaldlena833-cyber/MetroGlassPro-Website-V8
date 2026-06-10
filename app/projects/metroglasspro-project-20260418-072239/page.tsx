import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Matte Black Inline Shower Door for a Finished Tile Bathroom',
  description: 'A clean inline frameless shower door planned around finished tile, tight reveals, and matte black hardware for a sharper NYC bathroom renovation.',
  keywords: [
    'matte black shower door NYC',
    'inline frameless shower door',
    'custom shower glass Manhattan',
  ],
  alternates: { canonical: 'https://metroglasspro.com/projects/metroglasspro-project-20260418-072239/' },
  robots: { index: false, follow: true },
  openGraph: {
    title: 'Matte Black Inline Shower Door for a Finished Tile Bathroom',
    description: 'A clean inline frameless shower door planned around finished tile, tight reveals, and matte black hardware for a sharper NYC bathroom renovation.',
    url: 'https://metroglasspro.com/projects/metroglasspro-project-20260418-072239/',
    type: 'article',
    images: ['https://metroglasspro.com/gallery/mgp-20260418-072239-1-823776a3-3e11-43a8-afdd-49d1e25bfb45.png'],
  },
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Matte Black Inline Shower Door for a Finished Tile Bathroom',
  description: 'A clean inline frameless shower door planned around finished tile, tight reveals, and matte black hardware for a sharper NYC bathroom renovation.',
  author: { '@type': 'Organization', name: 'MetroGlass Pro', url: 'https://metroglasspro.com' },
  publisher: { '@type': 'Organization', name: 'MetroGlass Pro', url: 'https://metroglasspro.com' },
  datePublished: '2026-04-18',
  dateModified: '2026-04-18',
  mainEntityOfPage: 'https://metroglasspro.com/projects/metroglasspro-project-20260418-072239/',
  image: 'https://metroglasspro.com/gallery/mgp-20260418-072239-1-823776a3-3e11-43a8-afdd-49d1e25bfb45.png',
}

export default function ProjectPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <section className="bg-cream pt-20 sm:pt-32 pb-10 sm:pb-14">
        <div className="max-w-3xl mx-auto px-6 sm:px-10">
          <Link href="/projects/" className="text-orange text-[13px] font-medium hover:opacity-70 transition-opacity mb-6 inline-block">
            ← Back to Projects
          </Link>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-[11px] font-medium tracking-wider uppercase text-charcoal/40 bg-charcoal/[0.04] px-2.5 py-1 rounded-full">Real Project</span>
            <span className="text-[11px] font-medium tracking-wider uppercase text-charcoal/40 bg-charcoal/[0.04] px-2.5 py-1 rounded-full">Frameless Shower Doors</span>
            <span className="text-[11px] font-medium tracking-wider uppercase text-charcoal/40 bg-charcoal/[0.04] px-2.5 py-1 rounded-full">NYC</span>
          </div>
          <h1 className="heading-serif text-charcoal text-3xl sm:text-5xl lg:text-6xl">
            Matte Black Inline Shower Door for a Finished Tile Bathroom
          </h1>
          <p className="mt-4 text-charcoal/30 text-sm">2026-04-18</p>
        </div>
      </section>

      <section className="bg-cream pb-6 sm:pb-10">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <div className="rounded-lg overflow-hidden img-editorial">
            <img
              src="/gallery/mgp-20260418-072239-1-823776a3-3e11-43a8-afdd-49d1e25bfb45.png"
              alt="Inline frameless shower door with matte black hardware in a finished NYC tile bathroom"
              className="w-full h-auto block"
              loading="eager"
            />
          </div>
        </div>
      </section>

      <section className="bg-cream pb-20 sm:pb-28">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 prose-mgp">
          <p>
            This NYC bathroom needed a clean inline door that would not fight the tile layout or make the shower feel boxed in. The finished opening was measured after tile work, so the glass could follow the real wall conditions instead of a drawing.
          </p>
          <p>
            We kept the hardware minimal and used matte black details to give the opening definition without adding a bulky framed look.
          </p>

          <h2>What We Installed</h2>
          <p>
            The installation uses clear tempered frameless glass, tight door reveals, and matte black hardware selected to match the rest of the bathroom finishes. The result is a simple shower door that looks intentional from the hallway and performs well in daily use.
          </p>

          <div className="mt-10 mb-10 grid grid-cols-1 gap-6">
            
          <div className="glass-card overflow-hidden">
            <div className="px-5 pt-5">
              <p className="text-[11px] font-medium tracking-wider uppercase text-charcoal/40">Photo 1</p>
            </div>
            <div className="mt-4 img-editorial">
              <img
                src="/gallery/mgp-20260418-072239-1-823776a3-3e11-43a8-afdd-49d1e25bfb45.png"
                alt="Inline frameless shower door with matte black hardware in a finished NYC tile bathroom"
                className="w-full h-auto block"
                loading="eager"
              />
            </div>
          </div>

          <div className="glass-card overflow-hidden">
            <div className="px-5 pt-5">
              <p className="text-[11px] font-medium tracking-wider uppercase text-charcoal/40">Photo 2</p>
            </div>
            <div className="mt-4 img-editorial">
              <img
                src="/gallery/mgp-20260418-072239-2-photo-2026-03-19-20-25-26-4.jpg"
                alt="Inline frameless shower door with matte black hardware in a finished NYC tile bathroom"
                className="w-full h-auto block"
                loading="lazy"
              />
            </div>
          </div>

          <div className="glass-card overflow-hidden">
            <div className="px-5 pt-5">
              <p className="text-[11px] font-medium tracking-wider uppercase text-charcoal/40">Photo 3</p>
            </div>
            <div className="mt-4 img-editorial">
              <img
                src="/gallery/mgp-20260418-072239-3-23dde8e8-06fa-462b-868b-fe72c7055d0a.jpg"
                alt="Inline frameless shower door with matte black hardware in a finished NYC tile bathroom"
                className="w-full h-auto block"
                loading="lazy"
              />
            </div>
          </div>
          </div>

          <h2>Our Process</h2>
          <p>
            For finished tile bathrooms, we confirm plumb, curb pitch, swing clearance, and hardware placement on site before fabrication. That keeps the final install clean and avoids forcing standard-size glass into a custom opening.
          </p>

          <div className="mt-10 p-6 bg-charcoal/[0.03] rounded-lg border border-charcoal/[0.06]">
            <p className="text-[13px] text-charcoal/50 font-medium uppercase tracking-wider mb-3">Project Details</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-charcoal/70">
              <div><span className="text-charcoal/40">Glass,</span> 3/8" clear tempered glass.</div>
              <div><span className="text-charcoal/40">Hardware,</span> Matte black hinges, Square pull handle.</div>
              <div><span className="text-charcoal/40">Turnaround,</span> 5 to 7 business days from approval.</div>
              <div><span className="text-charcoal/40">Service area,</span> NYC and tri-state.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-20 sm:py-24 text-center">
        <div className="max-w-2xl mx-auto px-6 sm:px-10">
          <h2 className="heading-serif text-white text-3xl sm:text-4xl">Planning a glass project in NYC?</h2>
          <p className="mt-3 text-white/40 text-base">We install custom frameless shower enclosures, mirrors, and glass partitions across the tri-state area.</p>
          <Link href="/contact/" className="btn-pill btn-primary px-10 py-3.5 text-sm mt-8 inline-flex">Get in Touch</Link>
        </div>
      </section>
    </>
  )
}
