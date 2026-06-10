import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Low-Iron Glass Enclosure for a Bright Primary Bath',
  description: 'A brighter frameless shower enclosure using low-iron glass to keep tile color accurate and reduce the green cast of standard glass.',
  keywords: [
    'low iron shower glass NYC',
    'frameless shower enclosure',
    'primary bathroom glass',
  ],
  alternates: { canonical: 'https://metroglasspro.com/projects/metroglasspro-project-20260415-072237/' },
  robots: { index: false, follow: true },
  openGraph: {
    title: 'Low-Iron Glass Enclosure for a Bright Primary Bath',
    description: 'A brighter frameless shower enclosure using low-iron glass to keep tile color accurate and reduce the green cast of standard glass.',
    url: 'https://metroglasspro.com/projects/metroglasspro-project-20260415-072237/',
    type: 'article',
    images: ['https://metroglasspro.com/gallery/mgp-20260415-072237-1-56bcf70c-7086-45d9-8eb4-c66daca1820f.png'],
  },
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Low-Iron Glass Enclosure for a Bright Primary Bath',
  description: 'A brighter frameless shower enclosure using low-iron glass to keep tile color accurate and reduce the green cast of standard glass.',
  author: { '@type': 'Organization', name: 'MetroGlass Pro', url: 'https://metroglasspro.com' },
  publisher: { '@type': 'Organization', name: 'MetroGlass Pro', url: 'https://metroglasspro.com' },
  datePublished: '2026-04-15',
  dateModified: '2026-04-15',
  mainEntityOfPage: 'https://metroglasspro.com/projects/metroglasspro-project-20260415-072237/',
  image: 'https://metroglasspro.com/gallery/mgp-20260415-072237-1-56bcf70c-7086-45d9-8eb4-c66daca1820f.png',
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
            <span className="text-[11px] font-medium tracking-wider uppercase text-charcoal/40 bg-charcoal/[0.04] px-2.5 py-1 rounded-full">Low-Iron Shower Glass</span>
            <span className="text-[11px] font-medium tracking-wider uppercase text-charcoal/40 bg-charcoal/[0.04] px-2.5 py-1 rounded-full">NYC</span>
          </div>
          <h1 className="heading-serif text-charcoal text-3xl sm:text-5xl lg:text-6xl">
            Low-Iron Glass Enclosure for a Bright Primary Bath
          </h1>
          <p className="mt-4 text-charcoal/30 text-sm">2026-04-15</p>
        </div>
      </section>

      <section className="bg-cream pb-6 sm:pb-10">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <div className="rounded-lg overflow-hidden img-editorial">
            <img
              src="/gallery/mgp-20260415-072237-1-56bcf70c-7086-45d9-8eb4-c66daca1820f.png"
              alt="Low-iron frameless shower glass enclosure in a bright NYC primary bathroom"
              className="w-full h-auto block"
              loading="eager"
            />
          </div>
        </div>
      </section>

      <section className="bg-cream pb-20 sm:pb-28">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 prose-mgp">
          <p>
            When the tile and stone are a major part of the bathroom design, standard glass can add a green edge that dulls the final look. This enclosure was planned with low-iron glass for a clearer read.
          </p>
          <p>
            The goal was not to overbuild the shower. It was to make the glass disappear enough that the bathroom finishes stayed in focus.
          </p>

          <h2>What We Installed</h2>
          <p>
            Low-iron tempered glass gives the shower a brighter, cleaner appearance, especially against lighter tile. Minimal polished hardware keeps the enclosure crisp without making it feel commercial.
          </p>

          <div className="mt-10 mb-10 grid grid-cols-1 gap-6">
            
          <div className="glass-card overflow-hidden">
            <div className="px-5 pt-5">
              <p className="text-[11px] font-medium tracking-wider uppercase text-charcoal/40">Photo 1</p>
            </div>
            <div className="mt-4 img-editorial">
              <img
                src="/gallery/mgp-20260415-072237-1-56bcf70c-7086-45d9-8eb4-c66daca1820f.png"
                alt="Low-iron frameless shower glass enclosure in a bright NYC primary bathroom"
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
                src="/gallery/mgp-20260415-072237-2-photo-2026-03-19-20-25-23-6.jpg"
                alt="Low-iron frameless shower glass enclosure in a bright NYC primary bathroom"
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
                src="/gallery/mgp-20260415-072237-3-d12c0e51-cb69-41ea-a87e-3366c84afea5.png"
                alt="Low-iron frameless shower glass enclosure in a bright NYC primary bathroom"
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
                src="/gallery/mgp-20260415-072237-4-photo-2026-03-19-20-25-24-7.jpg"
                alt="Low-iron frameless shower glass enclosure in a bright NYC primary bathroom"
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
                src="/gallery/mgp-20260415-072237-5-photo-2026-03-19-20-32-22-8.jpg"
                alt="Low-iron frameless shower glass enclosure in a bright NYC primary bathroom"
                className="w-full h-auto block"
                loading="lazy"
              />
            </div>
          </div>
          </div>

          <h2>Our Process</h2>
          <p>
            We confirm whether low-iron glass is worth the upgrade based on tile color, lighting, and edge visibility. Then we measure the finished opening and detail hardware placement before fabrication.
          </p>

          <div className="mt-10 p-6 bg-charcoal/[0.03] rounded-lg border border-charcoal/[0.06]">
            <p className="text-[13px] text-charcoal/50 font-medium uppercase tracking-wider mb-3">Project Details</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-charcoal/70">
              <div><span className="text-charcoal/40">Glass,</span> Low-iron tempered glass.</div>
              <div><span className="text-charcoal/40">Hardware,</span> Polished chrome hardware.</div>
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
