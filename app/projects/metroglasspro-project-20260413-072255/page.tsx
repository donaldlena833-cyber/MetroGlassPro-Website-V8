import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Minimal Walk-In Shower Panel for an Open Layout',
  description: 'A single frameless walk-in panel that keeps the bathroom open while adding splash control and a finished architectural edge.',
  keywords: [
    'walk in shower panel NYC',
    'single glass shower panel',
    'frameless shower screen',
  ],
  alternates: { canonical: 'https://metroglasspro.com/projects/metroglasspro-project-20260413-072255/' },
  robots: { index: false, follow: true },
  openGraph: {
    title: 'Minimal Walk-In Shower Panel for an Open Layout',
    description: 'A single frameless walk-in panel that keeps the bathroom open while adding splash control and a finished architectural edge.',
    url: 'https://metroglasspro.com/projects/metroglasspro-project-20260413-072255/',
    type: 'article',
    images: ['https://metroglasspro.com/gallery/mgp-20260413-072255-1-9617e461-ebcd-4d53-8022-1a21c7eb36d7.jpg'],
  },
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Minimal Walk-In Shower Panel for an Open Layout',
  description: 'A single frameless walk-in panel that keeps the bathroom open while adding splash control and a finished architectural edge.',
  author: { '@type': 'Organization', name: 'MetroGlass Pro', url: 'https://metroglasspro.com' },
  publisher: { '@type': 'Organization', name: 'MetroGlass Pro', url: 'https://metroglasspro.com' },
  datePublished: '2026-04-13',
  dateModified: '2026-04-13',
  mainEntityOfPage: 'https://metroglasspro.com/projects/metroglasspro-project-20260413-072255/',
  image: 'https://metroglasspro.com/gallery/mgp-20260413-072255-1-9617e461-ebcd-4d53-8022-1a21c7eb36d7.jpg',
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
            <span className="text-[11px] font-medium tracking-wider uppercase text-charcoal/40 bg-charcoal/[0.04] px-2.5 py-1 rounded-full">Walk-In Shower Panel</span>
            <span className="text-[11px] font-medium tracking-wider uppercase text-charcoal/40 bg-charcoal/[0.04] px-2.5 py-1 rounded-full">NYC</span>
          </div>
          <h1 className="heading-serif text-charcoal text-3xl sm:text-5xl lg:text-6xl">
            Minimal Walk-In Shower Panel for an Open Layout
          </h1>
          <p className="mt-4 text-charcoal/30 text-sm">2026-04-13</p>
        </div>
      </section>

      <section className="bg-cream pb-6 sm:pb-10">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <div className="rounded-lg overflow-hidden img-editorial">
            <img
              src="/gallery/mgp-20260413-072255-1-9617e461-ebcd-4d53-8022-1a21c7eb36d7.jpg"
              alt="Minimal frameless walk-in shower panel with wall clips in NYC bathroom"
              className="w-full h-auto block"
              loading="eager"
            />
          </div>
        </div>
      </section>

      <section className="bg-cream pb-20 sm:pb-28">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 prose-mgp">
          <p>
            Not every bathroom needs a full enclosure. For this open shower layout, a single fixed panel gave the wet area definition while keeping the entry simple.
          </p>
          <p>
            The key was sizing the panel correctly so it controlled splash without making the room feel blocked.
          </p>

          <h2>What We Installed</h2>
          <p>
            The installation uses one clear tempered glass panel with minimal wall hardware and a stabilizer where needed. It creates a clean boundary for the shower while preserving the open-plan feel.
          </p>

          <div className="mt-10 mb-10 grid grid-cols-1 gap-6">
            
          <div className="glass-card overflow-hidden">
            <div className="px-5 pt-5">
              <p className="text-[11px] font-medium tracking-wider uppercase text-charcoal/40">Photo 1</p>
            </div>
            <div className="mt-4 img-editorial">
              <img
                src="/gallery/mgp-20260413-072255-1-9617e461-ebcd-4d53-8022-1a21c7eb36d7.jpg"
                alt="Minimal frameless walk-in shower panel with wall clips in NYC bathroom"
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
                src="/gallery/mgp-20260413-072255-2-2db15469-d550-4c8f-939f-21e04bf66141.jpg"
                alt="Minimal frameless walk-in shower panel with wall clips in NYC bathroom"
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
                src="/gallery/mgp-20260413-072255-3-img-3852.heic"
                alt="Minimal frameless walk-in shower panel with wall clips in NYC bathroom"
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
                src="/gallery/mgp-20260413-072255-4-11cafe3c-05cf-441a-886c-aa77ee4f2aca.jpg"
                alt="Minimal frameless walk-in shower panel with wall clips in NYC bathroom"
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
                src="/gallery/mgp-20260413-072255-5-img-4457.heic"
                alt="Minimal frameless walk-in shower panel with wall clips in NYC bathroom"
                className="w-full h-auto block"
                loading="lazy"
              />
            </div>
          </div>
          </div>

          <h2>Our Process</h2>
          <p>
            For walk-in panels, we check shower head location, curb or floor pitch, splash path, and panel height before recommending the final glass size.
          </p>

          <div className="mt-10 p-6 bg-charcoal/[0.03] rounded-lg border border-charcoal/[0.06]">
            <p className="text-[13px] text-charcoal/50 font-medium uppercase tracking-wider mb-3">Project Details</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-charcoal/70">
              <div><span className="text-charcoal/40">Glass,</span> Clear tempered glass.</div>
              <div><span className="text-charcoal/40">Hardware,</span> Wall clips, Stabilizer bar.</div>
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
