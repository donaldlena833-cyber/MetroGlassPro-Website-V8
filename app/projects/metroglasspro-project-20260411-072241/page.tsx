import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Apartment Shower Door Replacement After Tile Work',
  description: 'A post-tile shower door replacement for an apartment bath, measured around finished surfaces instead of relying on rough opening assumptions.',
  keywords: [
    'shower door replacement NYC',
    'apartment shower glass',
    'frameless door after tile',
  ],
  alternates: { canonical: 'https://metroglasspro.com/projects/metroglasspro-project-20260411-072241/' },
  robots: { index: false, follow: true },
  openGraph: {
    title: 'Apartment Shower Door Replacement After Tile Work',
    description: 'A post-tile shower door replacement for an apartment bath, measured around finished surfaces instead of relying on rough opening assumptions.',
    url: 'https://metroglasspro.com/projects/metroglasspro-project-20260411-072241/',
    type: 'article',
    images: ['https://metroglasspro.com/gallery/mgp-20260411-072241-1-6d0eda8f-bb16-4b51-a973-dd973b61afcf.jpg'],
  },
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Apartment Shower Door Replacement After Tile Work',
  description: 'A post-tile shower door replacement for an apartment bath, measured around finished surfaces instead of relying on rough opening assumptions.',
  author: { '@type': 'Organization', name: 'MetroGlass Pro', url: 'https://metroglasspro.com' },
  publisher: { '@type': 'Organization', name: 'MetroGlass Pro', url: 'https://metroglasspro.com' },
  datePublished: '2026-04-11',
  dateModified: '2026-04-11',
  mainEntityOfPage: 'https://metroglasspro.com/projects/metroglasspro-project-20260411-072241/',
  image: 'https://metroglasspro.com/gallery/mgp-20260411-072241-1-6d0eda8f-bb16-4b51-a973-dd973b61afcf.jpg',
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
            <span className="text-[11px] font-medium tracking-wider uppercase text-charcoal/40 bg-charcoal/[0.04] px-2.5 py-1 rounded-full">Shower Door Replacement</span>
            <span className="text-[11px] font-medium tracking-wider uppercase text-charcoal/40 bg-charcoal/[0.04] px-2.5 py-1 rounded-full">NYC</span>
          </div>
          <h1 className="heading-serif text-charcoal text-3xl sm:text-5xl lg:text-6xl">
            Apartment Shower Door Replacement After Tile Work
          </h1>
          <p className="mt-4 text-charcoal/30 text-sm">2026-04-11</p>
        </div>
      </section>

      <section className="bg-cream pb-6 sm:pb-10">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <div className="rounded-lg overflow-hidden img-editorial">
            <img
              src="/gallery/mgp-20260411-072241-1-6d0eda8f-bb16-4b51-a973-dd973b61afcf.jpg"
              alt="Apartment shower door replacement with clear frameless glass in NYC"
              className="w-full h-auto block"
              loading="eager"
            />
          </div>
        </div>
      </section>

      <section className="bg-cream pb-20 sm:pb-28">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 prose-mgp">
          <p>
            After tile work is complete, the opening is rarely as square as the plan suggested. This replacement was measured from the finished surfaces so the new glass could fit the bathroom as built.
          </p>
          <p>
            That approach matters in apartments, where small deviations become visible quickly.
          </p>

          <h2>What We Installed</h2>
          <p>
            The replacement door uses clear tempered glass and chrome hardware for a cleaner, updated look. The layout keeps the shower practical while removing the bulk of an older door system.
          </p>

          <div className="mt-10 mb-10 grid grid-cols-1 gap-6">
            
          <div className="glass-card overflow-hidden">
            <div className="px-5 pt-5">
              <p className="text-[11px] font-medium tracking-wider uppercase text-charcoal/40">Photo 1</p>
            </div>
            <div className="mt-4 img-editorial">
              <img
                src="/gallery/mgp-20260411-072241-1-6d0eda8f-bb16-4b51-a973-dd973b61afcf.jpg"
                alt="Apartment shower door replacement with clear frameless glass in NYC"
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
                src="/gallery/mgp-20260411-072241-2-571cee7a-50a0-4104-8256-9a2cad49c359.jpg"
                alt="Apartment shower door replacement with clear frameless glass in NYC"
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
                src="/gallery/mgp-20260411-072241-3-ad4556fa-5394-4d80-8293-6148dce0868b.jpg"
                alt="Apartment shower door replacement with clear frameless glass in NYC"
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
                src="/gallery/mgp-20260411-072241-4-d3ba13b6-f680-40fa-be83-3bf1a8b89a58.jpg"
                alt="Apartment shower door replacement with clear frameless glass in NYC"
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
                src="/gallery/mgp-20260411-072241-5-img-3935.jpg"
                alt="Apartment shower door replacement with clear frameless glass in NYC"
                className="w-full h-auto block"
                loading="lazy"
              />
            </div>
          </div>
          </div>

          <h2>Our Process</h2>
          <p>
            For replacements, we inspect existing anchors, tile condition, clearance, and waterproofing concerns before setting the new hardware locations.
          </p>

          <div className="mt-10 p-6 bg-charcoal/[0.03] rounded-lg border border-charcoal/[0.06]">
            <p className="text-[13px] text-charcoal/50 font-medium uppercase tracking-wider mb-3">Project Details</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-charcoal/70">
              <div><span className="text-charcoal/40">Glass,</span> Clear tempered glass.</div>
              <div><span className="text-charcoal/40">Hardware,</span> Chrome hardware.</div>
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
