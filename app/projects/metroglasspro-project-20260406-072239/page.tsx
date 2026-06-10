import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Clean-Lined Frameless Door After Contractor Tile Prep',
  description: 'A frameless shower door installed after contractor tile prep, with final measurements used to catch the real opening before fabrication.',
  keywords: [
    'contractor shower glass coordination',
    'frameless shower door NYC',
    'post tile measurement',
  ],
  alternates: { canonical: 'https://metroglasspro.com/projects/metroglasspro-project-20260406-072239/' },
  robots: { index: false, follow: true },
  openGraph: {
    title: 'Clean-Lined Frameless Door After Contractor Tile Prep',
    description: 'A frameless shower door installed after contractor tile prep, with final measurements used to catch the real opening before fabrication.',
    url: 'https://metroglasspro.com/projects/metroglasspro-project-20260406-072239/',
    type: 'article',
    images: ['https://metroglasspro.com/gallery/mgp-20260406-072239-1-photo-2026-03-16-20-26-43.jpg'],
  },
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Clean-Lined Frameless Door After Contractor Tile Prep',
  description: 'A frameless shower door installed after contractor tile prep, with final measurements used to catch the real opening before fabrication.',
  author: { '@type': 'Organization', name: 'MetroGlass Pro', url: 'https://metroglasspro.com' },
  publisher: { '@type': 'Organization', name: 'MetroGlass Pro', url: 'https://metroglasspro.com' },
  datePublished: '2026-04-06',
  dateModified: '2026-04-06',
  mainEntityOfPage: 'https://metroglasspro.com/projects/metroglasspro-project-20260406-072239/',
  image: 'https://metroglasspro.com/gallery/mgp-20260406-072239-1-photo-2026-03-16-20-26-43.jpg',
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
            Clean-Lined Frameless Door After Contractor Tile Prep
          </h1>
          <p className="mt-4 text-charcoal/30 text-sm">2026-04-06</p>
        </div>
      </section>

      <section className="bg-cream pb-6 sm:pb-10">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <div className="rounded-lg overflow-hidden img-editorial">
            <img
              src="/gallery/mgp-20260406-072239-1-photo-2026-03-16-20-26-43.jpg"
              alt="Clean-lined frameless shower door installed after contractor tile prep in NYC"
              className="w-full h-auto block"
              loading="eager"
            />
          </div>
        </div>
      </section>

      <section className="bg-cream pb-20 sm:pb-28">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 prose-mgp">
          <p>
            Good shower glass depends on what happens before the glass company arrives. This project followed contractor tile prep, so our job was to measure the finished opening and catch any field issues before fabrication.
          </p>
          <p>
            That keeps the installation straightforward and avoids redesigning the enclosure on site.
          </p>

          <h2>What We Installed</h2>
          <p>
            The finished door uses clear tempered glass and chrome hardware for a clean frameless look. The details were set after tile completion, when the true opening dimensions were visible.
          </p>

          <div className="mt-10 mb-10 grid grid-cols-1 gap-6">
            
          <div className="glass-card overflow-hidden">
            <div className="px-5 pt-5">
              <p className="text-[11px] font-medium tracking-wider uppercase text-charcoal/40">Photo 1</p>
            </div>
            <div className="mt-4 img-editorial">
              <img
                src="/gallery/mgp-20260406-072239-1-photo-2026-03-16-20-26-43.jpg"
                alt="Clean-lined frameless shower door installed after contractor tile prep in NYC"
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
                src="/gallery/mgp-20260406-072239-2-img-2184.png"
                alt="Clean-lined frameless shower door installed after contractor tile prep in NYC"
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
                src="/gallery/mgp-20260406-072239-3-08d60d49-59b0-4c2f-a1cc-2b792c2883e2.jpg"
                alt="Clean-lined frameless shower door installed after contractor tile prep in NYC"
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
                src="/gallery/mgp-20260406-072239-4-img-2183.png"
                alt="Clean-lined frameless shower door installed after contractor tile prep in NYC"
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
                src="/gallery/mgp-20260406-072239-5-img-2185.png"
                alt="Clean-lined frameless shower door installed after contractor tile prep in NYC"
                className="w-full h-auto block"
                loading="lazy"
              />
            </div>
          </div>
          </div>

          <h2>Our Process</h2>
          <p>
            We coordinate best when tile is finished, curbs are pitched, and blocking is known. Final field measurement turns that prep into glass that actually fits.
          </p>

          <div className="mt-10 p-6 bg-charcoal/[0.03] rounded-lg border border-charcoal/[0.06]">
            <p className="text-[13px] text-charcoal/50 font-medium uppercase tracking-wider mb-3">Project Details</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-charcoal/70">
              <div><span className="text-charcoal/40">Glass,</span> Clear tempered glass.</div>
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
