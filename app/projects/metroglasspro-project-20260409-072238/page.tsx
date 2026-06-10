import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Door and Notched Panel for a Compact Renovation',
  description: 'A compact bathroom enclosure using a custom notched panel to work around field conditions while keeping the frameless look clean.',
  keywords: [
    'notched shower glass NYC',
    'door and panel shower enclosure',
    'custom frameless glass',
  ],
  alternates: { canonical: 'https://metroglasspro.com/projects/metroglasspro-project-20260409-072238/' },
  robots: { index: false, follow: true },
  openGraph: {
    title: 'Door and Notched Panel for a Compact Renovation',
    description: 'A compact bathroom enclosure using a custom notched panel to work around field conditions while keeping the frameless look clean.',
    url: 'https://metroglasspro.com/projects/metroglasspro-project-20260409-072238/',
    type: 'article',
    images: ['https://metroglasspro.com/gallery/mgp-20260409-072238-1-d8fea6b2-dc36-4f11-b584-2ce5ea25c082.jpg'],
  },
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Door and Notched Panel for a Compact Renovation',
  description: 'A compact bathroom enclosure using a custom notched panel to work around field conditions while keeping the frameless look clean.',
  author: { '@type': 'Organization', name: 'MetroGlass Pro', url: 'https://metroglasspro.com' },
  publisher: { '@type': 'Organization', name: 'MetroGlass Pro', url: 'https://metroglasspro.com' },
  datePublished: '2026-04-09',
  dateModified: '2026-04-09',
  mainEntityOfPage: 'https://metroglasspro.com/projects/metroglasspro-project-20260409-072238/',
  image: 'https://metroglasspro.com/gallery/mgp-20260409-072238-1-d8fea6b2-dc36-4f11-b584-2ce5ea25c082.jpg',
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
            <span className="text-[11px] font-medium tracking-wider uppercase text-charcoal/40 bg-charcoal/[0.04] px-2.5 py-1 rounded-full">Door and Panel Shower Glass</span>
            <span className="text-[11px] font-medium tracking-wider uppercase text-charcoal/40 bg-charcoal/[0.04] px-2.5 py-1 rounded-full">NYC</span>
          </div>
          <h1 className="heading-serif text-charcoal text-3xl sm:text-5xl lg:text-6xl">
            Door and Notched Panel for a Compact Renovation
          </h1>
          <p className="mt-4 text-charcoal/30 text-sm">2026-04-09</p>
        </div>
      </section>

      <section className="bg-cream pb-6 sm:pb-10">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <div className="rounded-lg overflow-hidden img-editorial">
            <img
              src="/gallery/mgp-20260409-072238-1-d8fea6b2-dc36-4f11-b584-2ce5ea25c082.jpg"
              alt="Custom notched shower glass panel with frameless door in a compact NYC renovation"
              className="w-full h-auto block"
              loading="eager"
            />
          </div>
        </div>
      </section>

      <section className="bg-cream pb-20 sm:pb-28">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 prose-mgp">
          <p>
            Some shower openings need more than a standard rectangle. This compact renovation required custom glass planning around the finished tile and nearby surfaces.
          </p>
          <p>
            A notched panel let the enclosure follow the real bathroom conditions while preserving the frameless appearance.
          </p>

          <h2>What We Installed</h2>
          <p>
            The finished enclosure pairs a swing door with a custom fixed panel. The notch is planned into the glass before fabrication, so the result looks intentional rather than patched on site.
          </p>

          <div className="mt-10 mb-10 grid grid-cols-1 gap-6">
            
          <div className="glass-card overflow-hidden">
            <div className="px-5 pt-5">
              <p className="text-[11px] font-medium tracking-wider uppercase text-charcoal/40">Photo 1</p>
            </div>
            <div className="mt-4 img-editorial">
              <img
                src="/gallery/mgp-20260409-072238-1-d8fea6b2-dc36-4f11-b584-2ce5ea25c082.jpg"
                alt="Custom notched shower glass panel with frameless door in a compact NYC renovation"
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
                src="/gallery/mgp-20260409-072238-2-db09389d-990f-4864-bf04-b76dd6f87f08.jpg"
                alt="Custom notched shower glass panel with frameless door in a compact NYC renovation"
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
                src="/gallery/mgp-20260409-072238-3-32107f0d-2b4b-48ce-82dd-85563181befe.jpg"
                alt="Custom notched shower glass panel with frameless door in a compact NYC renovation"
                className="w-full h-auto block"
                loading="lazy"
              />
            </div>
          </div>

          <div className="glass-card overflow-hidden">
            <div className="px-5 pt-5">
              <p className="text-[11px] font-medium tracking-wider uppercase text-charcoal/40">Photo 4</p>
            </div>
            <div className="mt-4 img-editorial">
              <img
                src="/gallery/mgp-20260409-072238-4-5e17867f-4f55-413c-bd1e-9b758586b45b.jpg"
                alt="Custom notched shower glass panel with frameless door in a compact NYC renovation"
                className="w-full h-auto block"
                loading="lazy"
              />
            </div>
          </div>

          <div className="glass-card overflow-hidden">
            <div className="px-5 pt-5">
              <p className="text-[11px] font-medium tracking-wider uppercase text-charcoal/40">Photo 5</p>
            </div>
            <div className="mt-4 img-editorial">
              <img
                src="/gallery/mgp-20260409-072238-5-bd752ebc-ee53-4d0a-96ca-4ec627d207ec.jpg"
                alt="Custom notched shower glass panel with frameless door in a compact NYC renovation"
                className="w-full h-auto block"
                loading="lazy"
              />
            </div>
          </div>
          </div>

          <h2>Our Process</h2>
          <p>
            Custom notches require exact field measurements and clear fabrication drawings. We confirm every return, height, and clearance before the glass is ordered.
          </p>

          <div className="mt-10 p-6 bg-charcoal/[0.03] rounded-lg border border-charcoal/[0.06]">
            <p className="text-[13px] text-charcoal/50 font-medium uppercase tracking-wider mb-3">Project Details</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-charcoal/70">
              <div><span className="text-charcoal/40">Glass,</span> Clear tempered glass.</div>
              <div><span className="text-charcoal/40">Hardware,</span> Chrome clamps, Chrome hinges.</div>
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
