import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Corner Shower Glass With a Fixed Panel Return',
  description: 'A corner shower enclosure with a fixed return panel, built to keep the entry open while controlling splash in a compact NYC bathroom.',
  keywords: [
    'corner shower enclosure NYC',
    'door and fixed panel shower',
    'frameless glass return panel',
  ],
  alternates: { canonical: 'https://metroglasspro.com/projects/metroglasspro-project-20260414-072247/' },
  robots: { index: false, follow: true },
  openGraph: {
    title: 'Corner Shower Glass With a Fixed Panel Return',
    description: 'A corner shower enclosure with a fixed return panel, built to keep the entry open while controlling splash in a compact NYC bathroom.',
    url: 'https://metroglasspro.com/projects/metroglasspro-project-20260414-072247/',
    type: 'article',
    images: ['https://metroglasspro.com/gallery/mgp-20260414-072247-1-06a3cca1-5cb7-4b71-8a42-18ab9d6af8e5.jpg'],
  },
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Corner Shower Glass With a Fixed Panel Return',
  description: 'A corner shower enclosure with a fixed return panel, built to keep the entry open while controlling splash in a compact NYC bathroom.',
  author: { '@type': 'Organization', name: 'MetroGlass Pro', url: 'https://metroglasspro.com' },
  publisher: { '@type': 'Organization', name: 'MetroGlass Pro', url: 'https://metroglasspro.com' },
  datePublished: '2026-04-14',
  dateModified: '2026-04-14',
  mainEntityOfPage: 'https://metroglasspro.com/projects/metroglasspro-project-20260414-072247/',
  image: 'https://metroglasspro.com/gallery/mgp-20260414-072247-1-06a3cca1-5cb7-4b71-8a42-18ab9d6af8e5.jpg',
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
            <span className="text-[11px] font-medium tracking-wider uppercase text-charcoal/40 bg-charcoal/[0.04] px-2.5 py-1 rounded-full">Corner Shower Enclosure</span>
            <span className="text-[11px] font-medium tracking-wider uppercase text-charcoal/40 bg-charcoal/[0.04] px-2.5 py-1 rounded-full">NYC</span>
          </div>
          <h1 className="heading-serif text-charcoal text-3xl sm:text-5xl lg:text-6xl">
            Corner Shower Glass With a Fixed Panel Return
          </h1>
          <p className="mt-4 text-charcoal/30 text-sm">2026-04-14</p>
        </div>
      </section>

      <section className="bg-cream pb-6 sm:pb-10">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <div className="rounded-lg overflow-hidden img-editorial">
            <img
              src="/gallery/mgp-20260414-072247-1-06a3cca1-5cb7-4b71-8a42-18ab9d6af8e5.jpg"
              alt="Corner frameless shower enclosure with door and fixed return panel in NYC"
              className="w-full h-auto block"
              loading="eager"
            />
          </div>
        </div>
      </section>

      <section className="bg-cream pb-20 sm:pb-28">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 prose-mgp">
          <p>
            Corner showers need careful layout because the door, return panel, curb, and nearby fixtures all compete for space. This project used a fixed return panel to keep the enclosure open while still controlling water.
          </p>
          <p>
            The glass was measured to the finished tile so the corner lines stayed clean.
          </p>

          <h2>What We Installed</h2>
          <p>
            The enclosure combines a swing door with a fixed return panel. Clear glass preserves the open feel, and chrome clips keep the fixed panel stable without adding a heavy frame.
          </p>

          <div className="mt-10 mb-10 grid grid-cols-1 gap-6">
            
          <div className="glass-card overflow-hidden">
            <div className="px-5 pt-5">
              <p className="text-[11px] font-medium tracking-wider uppercase text-charcoal/40">Photo 1</p>
            </div>
            <div className="mt-4 img-editorial">
              <img
                src="/gallery/mgp-20260414-072247-1-06a3cca1-5cb7-4b71-8a42-18ab9d6af8e5.jpg"
                alt="Corner frameless shower enclosure with door and fixed return panel in NYC"
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
                src="/gallery/mgp-20260414-072247-2-img-4452.heic"
                alt="Corner frameless shower enclosure with door and fixed return panel in NYC"
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
                src="/gallery/mgp-20260414-072247-3-img-4456.heic"
                alt="Corner frameless shower enclosure with door and fixed return panel in NYC"
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
                src="/gallery/mgp-20260414-072247-4-img-3854.heic"
                alt="Corner frameless shower enclosure with door and fixed return panel in NYC"
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
                src="/gallery/mgp-20260414-072247-5-img-4443.heic"
                alt="Corner frameless shower enclosure with door and fixed return panel in NYC"
                className="w-full h-auto block"
                loading="lazy"
              />
            </div>
          </div>
          </div>

          <h2>Our Process</h2>
          <p>
            Corner layouts require confirming both planes of glass, curb pitch, door swing, and how the return panel meets the wall. Those details are settled before anything is fabricated.
          </p>

          <div className="mt-10 p-6 bg-charcoal/[0.03] rounded-lg border border-charcoal/[0.06]">
            <p className="text-[13px] text-charcoal/50 font-medium uppercase tracking-wider mb-3">Project Details</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-charcoal/70">
              <div><span className="text-charcoal/40">Glass,</span> Clear tempered glass.</div>
              <div><span className="text-charcoal/40">Hardware,</span> Chrome clips, Chrome hinges.</div>
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
