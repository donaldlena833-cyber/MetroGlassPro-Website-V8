import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Custom Glass Installation — MetroGlass Pro NYC',
  description: 'A recent custom frameless shower enclosure installation by MetroGlass Pro in NYC. Precision field measurements, chrome hardware, and a 5 to 7 business day turnaround from approval to install.',
  keywords: [
    'custom frameless shower door NYC',
    'shower door installation Manhattan',
    'frameless glass enclosure NYC',
    'MetroGlass Pro installation',
  ],
  alternates: { canonical: 'https://metroglasspro.com/projects/metroglasspro-project-20260418-072239/' },
  robots: { index: false, follow: true },
  openGraph: {
    title: 'Custom Glass Installation — MetroGlass Pro NYC',
    description: 'A recent custom frameless shower enclosure installation by MetroGlass Pro in NYC. Precision field measurements, chrome hardware, and a 5 to 7 business day turnaround from approval to install.',
    url: 'https://metroglasspro.com/projects/metroglasspro-project-20260418-072239/',
    type: 'article',
    images: ['https://metroglasspro.com/gallery/mgp-20260418-072239-1-823776a3-3e11-43a8-afdd-49d1e25bfb45.png'],
  },
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Custom Glass Installation — MetroGlass Pro NYC',
  description: 'A recent custom frameless shower enclosure installation by MetroGlass Pro in NYC. Precision field measurements, chrome hardware, and a 5 to 7 business day turnaround from approval to install.',
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
            <span className="text-[11px] font-medium tracking-wider uppercase text-charcoal/40 bg-charcoal/[0.04] px-2.5 py-1 rounded-full">Frameless Shower Enclosure</span>
            <span className="text-[11px] font-medium tracking-wider uppercase text-charcoal/40 bg-charcoal/[0.04] px-2.5 py-1 rounded-full">NYC</span>
          </div>
          <h1 className="heading-serif text-charcoal text-3xl sm:text-5xl lg:text-6xl">
            Custom Glass Installation — MetroGlass Pro NYC
          </h1>
          <p className="mt-4 text-charcoal/30 text-sm">2026-04-18</p>
        </div>
      </section>

      <section className="bg-cream pb-6 sm:pb-10">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <div className="rounded-lg overflow-hidden img-editorial">
            <img
              src="/gallery/mgp-20260418-072239-1-823776a3-3e11-43a8-afdd-49d1e25bfb45.png"
              alt="Custom frameless shower enclosure installed by MetroGlass Pro NYC"
              className="w-full h-auto block"
              loading="eager"
            />
          </div>
        </div>
      </section>

      <section className="bg-cream pb-20 sm:pb-28">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 prose-mgp">
          <p>
            Every MetroGlass Pro installation starts with precision field measurements taken on site. We do not estimate or guess dimensions. The glass is fabricated to the exact opening, and we arrive with everything needed to close the job in a single visit.
          </p>
          <p>
            This project is a recent example of the work we do across Manhattan, Brooklyn, Queens, and the tri-state area. Clear tempered frameless glass, chrome hardware, and a clean finished result that holds up to daily use.
          </p>

          <h2>What We Installed</h2>
          <p>
            The enclosure uses thick tempered glass with minimal hardware. No bulky frame, no visible track on the floor. The result is a shower that feels open, reads clean against the tile, and is straightforward to maintain.
          </p>

          <div className="mt-10 mb-10 grid grid-cols-1 gap-6">
            
          <div className="glass-card overflow-hidden">
            <div className="px-5 pt-5">
              <p className="text-[11px] font-medium tracking-wider uppercase text-charcoal/40">Photo 1</p>
            </div>
            <div className="mt-4 img-editorial">
              <img
                src="/gallery/mgp-20260418-072239-1-823776a3-3e11-43a8-afdd-49d1e25bfb45.png"
                alt="MetroGlass Pro custom glass installation NYC"
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
                alt="MetroGlass Pro custom glass installation NYC"
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
                alt="MetroGlass Pro custom glass installation NYC"
                className="w-full h-auto block"
                loading="lazy"
              />
            </div>
          </div>
          </div>

          <h2>Our Process</h2>
          <p>
            We take field measurements on site, fabricate the glass to exact dimensions, and install within 5 to 7 business days of client approval. We carry backup hardware and extra tools on every job so nothing stops us from finishing in one visit.
          </p>

          <div className="mt-10 p-6 bg-charcoal/[0.03] rounded-lg border border-charcoal/[0.06]">
            <p className="text-[13px] text-charcoal/50 font-medium uppercase tracking-wider mb-3">Project Details</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-charcoal/70">
              <div><span className="text-charcoal/40">Glass,</span> Clear tempered frameless.</div>
              <div><span className="text-charcoal/40">Hardware,</span> Chrome finish.</div>
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
