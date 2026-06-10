import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tub Shield and Door Planning for a NYC Apartment',
  description: 'A NYC apartment bath planned around a lighter tub glass solution, balancing splash control, access, and a cleaner finished look.',
  keywords: [
    'tub shield NYC',
    'apartment tub glass',
    'frameless bath screen',
  ],
  alternates: { canonical: 'https://metroglasspro.com/projects/metroglasspro-project-20260404-072241/' },
  robots: { index: false, follow: true },
  openGraph: {
    title: 'Tub Shield and Door Planning for a NYC Apartment',
    description: 'A NYC apartment bath planned around a lighter tub glass solution, balancing splash control, access, and a cleaner finished look.',
    url: 'https://metroglasspro.com/projects/metroglasspro-project-20260404-072241/',
    type: 'article',
    images: ['https://metroglasspro.com/gallery/mgp-20260404-072241-1-photo-2026-03-16-21-38-47.jpg'],
  },
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Tub Shield and Door Planning for a NYC Apartment',
  description: 'A NYC apartment bath planned around a lighter tub glass solution, balancing splash control, access, and a cleaner finished look.',
  author: { '@type': 'Organization', name: 'MetroGlass Pro', url: 'https://metroglasspro.com' },
  publisher: { '@type': 'Organization', name: 'MetroGlass Pro', url: 'https://metroglasspro.com' },
  datePublished: '2026-04-04',
  dateModified: '2026-04-04',
  mainEntityOfPage: 'https://metroglasspro.com/projects/metroglasspro-project-20260404-072241/',
  image: 'https://metroglasspro.com/gallery/mgp-20260404-072241-1-photo-2026-03-16-21-38-47.jpg',
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
            <span className="text-[11px] font-medium tracking-wider uppercase text-charcoal/40 bg-charcoal/[0.04] px-2.5 py-1 rounded-full">Tub Shield</span>
            <span className="text-[11px] font-medium tracking-wider uppercase text-charcoal/40 bg-charcoal/[0.04] px-2.5 py-1 rounded-full">NYC</span>
          </div>
          <h1 className="heading-serif text-charcoal text-3xl sm:text-5xl lg:text-6xl">
            Tub Shield and Door Planning for a NYC Apartment
          </h1>
          <p className="mt-4 text-charcoal/30 text-sm">2026-04-04</p>
        </div>
      </section>

      <section className="bg-cream pb-6 sm:pb-10">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <div className="rounded-lg overflow-hidden img-editorial">
            <img
              src="/gallery/mgp-20260404-072241-1-photo-2026-03-16-21-38-47.jpg"
              alt="Clear tub shield and shower door planning in a NYC apartment bathroom"
              className="w-full h-auto block"
              loading="eager"
            />
          </div>
        </div>
      </section>

      <section className="bg-cream pb-20 sm:pb-28">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 prose-mgp">
          <p>
            This apartment bath needed a lighter approach than a heavy framed tub door. A clear glass solution keeps the room open while still giving the wet area a finished boundary.
          </p>
          <p>
            The planning focused on splash control, access, and how the glass would sit against the completed tile.
          </p>

          <h2>What We Installed</h2>
          <p>
            The glass uses a simple clear tempered layout with chrome hardware. It gives the tub area definition without closing off the bathroom or covering the tile work.
          </p>

          <div className="mt-10 mb-10 grid grid-cols-1 gap-6">
            
          <div className="glass-card overflow-hidden">
            <div className="px-5 pt-5">
              <p className="text-[11px] font-medium tracking-wider uppercase text-charcoal/40">Photo 1</p>
            </div>
            <div className="mt-4 img-editorial">
              <img
                src="/gallery/mgp-20260404-072241-1-photo-2026-03-16-21-38-47.jpg"
                alt="Clear tub shield and shower door planning in a NYC apartment bathroom"
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
                src="/gallery/mgp-20260404-072241-2-photo-2026-03-16-20-23-00.jpg"
                alt="Clear tub shield and shower door planning in a NYC apartment bathroom"
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
                src="/gallery/mgp-20260404-072241-3-photo-2026-03-16-20-21-32.jpg"
                alt="Clear tub shield and shower door planning in a NYC apartment bathroom"
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
                src="/gallery/mgp-20260404-072241-4-photo-2026-03-21-15-03-43.jpg"
                alt="Clear tub shield and shower door planning in a NYC apartment bathroom"
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
                src="/gallery/mgp-20260404-072241-5-photo-2026-03-16-21-39-06.jpg"
                alt="Clear tub shield and shower door planning in a NYC apartment bathroom"
                className="w-full h-auto block"
                loading="lazy"
              />
            </div>
          </div>
          </div>

          <h2>Our Process</h2>
          <p>
            Tub glass planning starts with the tub deck, shower head location, tile face, and how the user enters the bath. We measure those conditions before finalizing the glass.
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
