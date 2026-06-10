import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Satin Brass Shower Glass Detail for a Designer Bathroom',
  description: 'A designer-friendly shower glass installation using satin brass hardware, precise alignment, and clean sightlines against finished tile.',
  keywords: [
    'satin brass shower door NYC',
    'designer shower glass',
    'custom frameless enclosure',
  ],
  alternates: { canonical: 'https://metroglasspro.com/projects/metroglasspro-project-20260408-072238/' },
  robots: { index: false, follow: true },
  openGraph: {
    title: 'Satin Brass Shower Glass Detail for a Designer Bathroom',
    description: 'A designer-friendly shower glass installation using satin brass hardware, precise alignment, and clean sightlines against finished tile.',
    url: 'https://metroglasspro.com/projects/metroglasspro-project-20260408-072238/',
    type: 'article',
    images: ['https://metroglasspro.com/gallery/mgp-20260408-072238-1-da9fa6d1-d76b-4c73-8f3b-ba412c82d072.png'],
  },
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Satin Brass Shower Glass Detail for a Designer Bathroom',
  description: 'A designer-friendly shower glass installation using satin brass hardware, precise alignment, and clean sightlines against finished tile.',
  author: { '@type': 'Organization', name: 'MetroGlass Pro', url: 'https://metroglasspro.com' },
  publisher: { '@type': 'Organization', name: 'MetroGlass Pro', url: 'https://metroglasspro.com' },
  datePublished: '2026-04-08',
  dateModified: '2026-04-08',
  mainEntityOfPage: 'https://metroglasspro.com/projects/metroglasspro-project-20260408-072238/',
  image: 'https://metroglasspro.com/gallery/mgp-20260408-072238-1-da9fa6d1-d76b-4c73-8f3b-ba412c82d072.png',
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
            <span className="text-[11px] font-medium tracking-wider uppercase text-charcoal/40 bg-charcoal/[0.04] px-2.5 py-1 rounded-full">Designer Shower Glass</span>
            <span className="text-[11px] font-medium tracking-wider uppercase text-charcoal/40 bg-charcoal/[0.04] px-2.5 py-1 rounded-full">NYC</span>
          </div>
          <h1 className="heading-serif text-charcoal text-3xl sm:text-5xl lg:text-6xl">
            Satin Brass Shower Glass Detail for a Designer Bathroom
          </h1>
          <p className="mt-4 text-charcoal/30 text-sm">2026-04-08</p>
        </div>
      </section>

      <section className="bg-cream pb-6 sm:pb-10">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <div className="rounded-lg overflow-hidden img-editorial">
            <img
              src="/gallery/mgp-20260408-072238-1-da9fa6d1-d76b-4c73-8f3b-ba412c82d072.png"
              alt="Frameless shower glass with satin brass hardware in a designer NYC bathroom"
              className="w-full h-auto block"
              loading="eager"
            />
          </div>
        </div>
      </section>

      <section className="bg-cream pb-20 sm:pb-28">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 prose-mgp">
          <p>
            When hardware is part of the design language, the glass has to be measured and installed cleanly enough to support it. This bathroom used satin brass details for a warmer finish.
          </p>
          <p>
            The goal was a refined shower enclosure that felt coordinated with the fixtures, not added afterward.
          </p>

          <h2>What We Installed</h2>
          <p>
            Clear tempered glass keeps the tile visible, while satin brass hardware gives the enclosure a more designed finish. The alignment and reveal work are what keep that finish from feeling busy.
          </p>

          <div className="mt-10 mb-10 grid grid-cols-1 gap-6">
            
          <div className="glass-card overflow-hidden">
            <div className="px-5 pt-5">
              <p className="text-[11px] font-medium tracking-wider uppercase text-charcoal/40">Photo 1</p>
            </div>
            <div className="mt-4 img-editorial">
              <img
                src="/gallery/mgp-20260408-072238-1-da9fa6d1-d76b-4c73-8f3b-ba412c82d072.png"
                alt="Frameless shower glass with satin brass hardware in a designer NYC bathroom"
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
                src="/gallery/mgp-20260408-072238-2-img-2202.png"
                alt="Frameless shower glass with satin brass hardware in a designer NYC bathroom"
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
                src="/gallery/mgp-20260408-072238-3-9ea9b630-003d-4ded-8f1e-921fba47b3cf.jpg"
                alt="Frameless shower glass with satin brass hardware in a designer NYC bathroom"
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
                src="/gallery/mgp-20260408-072238-4-119cd470-9482-49b0-a7d9-d2dcdb5b4fa3.jpg"
                alt="Frameless shower glass with satin brass hardware in a designer NYC bathroom"
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
                src="/gallery/mgp-20260408-072238-5-1f5aba9a-fe5a-40ed-8462-f3be78e5f115.jpg"
                alt="Frameless shower glass with satin brass hardware in a designer NYC bathroom"
                className="w-full h-auto block"
                loading="lazy"
              />
            </div>
          </div>
          </div>

          <h2>Our Process</h2>
          <p>
            For designer-driven bathrooms, we confirm finish selections early and measure once the tile is complete. That keeps the hardware, glass, and surrounding fixtures visually aligned.
          </p>

          <div className="mt-10 p-6 bg-charcoal/[0.03] rounded-lg border border-charcoal/[0.06]">
            <p className="text-[13px] text-charcoal/50 font-medium uppercase tracking-wider mb-3">Project Details</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-charcoal/70">
              <div><span className="text-charcoal/40">Glass,</span> Clear tempered glass.</div>
              <div><span className="text-charcoal/40">Hardware,</span> Satin brass hardware.</div>
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
