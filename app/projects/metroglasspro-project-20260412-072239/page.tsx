import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Chrome Frameless Door With Precise Curb Alignment',
  description: 'A frameless shower door aligned to the finished curb and wall conditions for a clean seal, smooth swing, and polished chrome finish.',
  keywords: [
    'chrome frameless shower door',
    'custom shower door NYC',
    'shower curb alignment',
  ],
  alternates: { canonical: 'https://metroglasspro.com/projects/metroglasspro-project-20260412-072239/' },
  robots: { index: false, follow: true },
  openGraph: {
    title: 'Chrome Frameless Door With Precise Curb Alignment',
    description: 'A frameless shower door aligned to the finished curb and wall conditions for a clean seal, smooth swing, and polished chrome finish.',
    url: 'https://metroglasspro.com/projects/metroglasspro-project-20260412-072239/',
    type: 'article',
    images: ['https://metroglasspro.com/gallery/mgp-20260412-072239-1-1bd0dc04-d72d-4d5b-8e98-0236a10419e0.jpg'],
  },
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Chrome Frameless Door With Precise Curb Alignment',
  description: 'A frameless shower door aligned to the finished curb and wall conditions for a clean seal, smooth swing, and polished chrome finish.',
  author: { '@type': 'Organization', name: 'MetroGlass Pro', url: 'https://metroglasspro.com' },
  publisher: { '@type': 'Organization', name: 'MetroGlass Pro', url: 'https://metroglasspro.com' },
  datePublished: '2026-04-12',
  dateModified: '2026-04-12',
  mainEntityOfPage: 'https://metroglasspro.com/projects/metroglasspro-project-20260412-072239/',
  image: 'https://metroglasspro.com/gallery/mgp-20260412-072239-1-1bd0dc04-d72d-4d5b-8e98-0236a10419e0.jpg',
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
            <span className="text-[11px] font-medium tracking-wider uppercase text-charcoal/40 bg-charcoal/[0.04] px-2.5 py-1 rounded-full">Frameless Shower Door</span>
            <span className="text-[11px] font-medium tracking-wider uppercase text-charcoal/40 bg-charcoal/[0.04] px-2.5 py-1 rounded-full">NYC</span>
          </div>
          <h1 className="heading-serif text-charcoal text-3xl sm:text-5xl lg:text-6xl">
            Chrome Frameless Door With Precise Curb Alignment
          </h1>
          <p className="mt-4 text-charcoal/30 text-sm">2026-04-12</p>
        </div>
      </section>

      <section className="bg-cream pb-6 sm:pb-10">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <div className="rounded-lg overflow-hidden img-editorial">
            <img
              src="/gallery/mgp-20260412-072239-1-1bd0dc04-d72d-4d5b-8e98-0236a10419e0.jpg"
              alt="Chrome frameless shower door aligned to a finished shower curb in NYC"
              className="w-full h-auto block"
              loading="eager"
            />
          </div>
        </div>
      </section>

      <section className="bg-cream pb-20 sm:pb-28">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 prose-mgp">
          <p>
            This shower door depended on the details: curb slope, hinge wall plumb, and the relationship between the door edge and tile face. We measured the actual opening after finishes were complete.
          </p>
          <p>
            Chrome hardware gave the bathroom a bright, simple finish that paired well with the tile.
          </p>

          <h2>What We Installed</h2>
          <p>
            The door was fabricated to the finished curb and wall conditions. Clear glass keeps the shower open, while chrome hinges and handle provide a polished, durable hardware package.
          </p>

          <div className="mt-10 mb-10 grid grid-cols-1 gap-6">
            
          <div className="glass-card overflow-hidden">
            <div className="px-5 pt-5">
              <p className="text-[11px] font-medium tracking-wider uppercase text-charcoal/40">Photo 1</p>
            </div>
            <div className="mt-4 img-editorial">
              <img
                src="/gallery/mgp-20260412-072239-1-1bd0dc04-d72d-4d5b-8e98-0236a10419e0.jpg"
                alt="Chrome frameless shower door aligned to a finished shower curb in NYC"
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
                src="/gallery/mgp-20260412-072239-2-img-8404.heic"
                alt="Chrome frameless shower door aligned to a finished shower curb in NYC"
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
                src="/gallery/mgp-20260412-072239-3-img-3848.heic"
                alt="Chrome frameless shower door aligned to a finished shower curb in NYC"
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
                src="/gallery/mgp-20260412-072239-4-img-8402.heic"
                alt="Chrome frameless shower door aligned to a finished shower curb in NYC"
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
                src="/gallery/mgp-20260412-072239-5-img-8403.heic"
                alt="Chrome frameless shower door aligned to a finished shower curb in NYC"
                className="w-full h-auto block"
                loading="lazy"
              />
            </div>
          </div>
          </div>

          <h2>Our Process</h2>
          <p>
            We always check curb pitch and hinge-wall condition before committing to door size. That is what lets the finished door swing correctly and seal cleanly.
          </p>

          <div className="mt-10 p-6 bg-charcoal/[0.03] rounded-lg border border-charcoal/[0.06]">
            <p className="text-[13px] text-charcoal/50 font-medium uppercase tracking-wider mb-3">Project Details</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-charcoal/70">
              <div><span className="text-charcoal/40">Glass,</span> 3/8" clear tempered glass.</div>
              <div><span className="text-charcoal/40">Hardware,</span> Chrome hinges, Chrome handle.</div>
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
