import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sliding Bypass Shower Door for a Narrow NYC Bath',
  description: 'A sliding bypass shower door chosen for a narrow bathroom where a swing door would crowd the vanity and daily circulation.',
  keywords: [
    'sliding shower door NYC',
    'bypass shower doors Manhattan',
    'narrow bathroom shower glass',
  ],
  alternates: { canonical: 'https://metroglasspro.com/projects/metroglasspro-project-20260410-072239/' },
  robots: { index: false, follow: true },
  openGraph: {
    title: 'Sliding Bypass Shower Door for a Narrow NYC Bath',
    description: 'A sliding bypass shower door chosen for a narrow bathroom where a swing door would crowd the vanity and daily circulation.',
    url: 'https://metroglasspro.com/projects/metroglasspro-project-20260410-072239/',
    type: 'article',
    images: ['https://metroglasspro.com/gallery/mgp-20260410-072239-1-4bfdebce-b0ef-4abd-9dc6-77351d23029d.jpg'],
  },
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Sliding Bypass Shower Door for a Narrow NYC Bath',
  description: 'A sliding bypass shower door chosen for a narrow bathroom where a swing door would crowd the vanity and daily circulation.',
  author: { '@type': 'Organization', name: 'MetroGlass Pro', url: 'https://metroglasspro.com' },
  publisher: { '@type': 'Organization', name: 'MetroGlass Pro', url: 'https://metroglasspro.com' },
  datePublished: '2026-04-10',
  dateModified: '2026-04-10',
  mainEntityOfPage: 'https://metroglasspro.com/projects/metroglasspro-project-20260410-072239/',
  image: 'https://metroglasspro.com/gallery/mgp-20260410-072239-1-4bfdebce-b0ef-4abd-9dc6-77351d23029d.jpg',
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
            <span className="text-[11px] font-medium tracking-wider uppercase text-charcoal/40 bg-charcoal/[0.04] px-2.5 py-1 rounded-full">Sliding Shower Doors</span>
            <span className="text-[11px] font-medium tracking-wider uppercase text-charcoal/40 bg-charcoal/[0.04] px-2.5 py-1 rounded-full">NYC</span>
          </div>
          <h1 className="heading-serif text-charcoal text-3xl sm:text-5xl lg:text-6xl">
            Sliding Bypass Shower Door for a Narrow NYC Bath
          </h1>
          <p className="mt-4 text-charcoal/30 text-sm">2026-04-10</p>
        </div>
      </section>

      <section className="bg-cream pb-6 sm:pb-10">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <div className="rounded-lg overflow-hidden img-editorial">
            <img
              src="/gallery/mgp-20260410-072239-1-4bfdebce-b0ef-4abd-9dc6-77351d23029d.jpg"
              alt="Sliding bypass shower door with chrome track in a narrow NYC bathroom"
              className="w-full h-auto block"
              loading="eager"
            />
          </div>
        </div>
      </section>

      <section className="bg-cream pb-20 sm:pb-28">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 prose-mgp">
          <p>
            In narrow bathrooms, a hinged door can create more problems than it solves. This layout needed a sliding bypass system so the shower could stay accessible without stealing floor space.
          </p>
          <p>
            The glass keeps the room brighter while the track handles the practical space constraint.
          </p>

          <h2>What We Installed</h2>
          <p>
            The bypass setup uses clear tempered glass panels with chrome sliding hardware. It gives the bathroom a cleaner look while keeping entry and exit simple in a tight footprint.
          </p>

          <div className="mt-10 mb-10 grid grid-cols-1 gap-6">
            
          <div className="glass-card overflow-hidden">
            <div className="px-5 pt-5">
              <p className="text-[11px] font-medium tracking-wider uppercase text-charcoal/40">Photo 1</p>
            </div>
            <div className="mt-4 img-editorial">
              <img
                src="/gallery/mgp-20260410-072239-1-4bfdebce-b0ef-4abd-9dc6-77351d23029d.jpg"
                alt="Sliding bypass shower door with chrome track in a narrow NYC bathroom"
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
                src="/gallery/mgp-20260410-072239-2-ac85517c-280a-48ba-95af-fb695a07c5f5.jpg"
                alt="Sliding bypass shower door with chrome track in a narrow NYC bathroom"
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
                src="/gallery/mgp-20260410-072239-3-44137b79-c0c1-4f75-8bb6-e3f1c65ad4ae.jpg"
                alt="Sliding bypass shower door with chrome track in a narrow NYC bathroom"
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
                src="/gallery/mgp-20260410-072239-4-245e47cb-dbe1-4e5a-a561-ada717538334.jpg"
                alt="Sliding bypass shower door with chrome track in a narrow NYC bathroom"
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
                src="/gallery/mgp-20260410-072239-5-de5f0674-5431-46a6-ba84-489193874e8f.jpg"
                alt="Sliding bypass shower door with chrome track in a narrow NYC bathroom"
                className="w-full h-auto block"
                loading="lazy"
              />
            </div>
          </div>
          </div>

          <h2>Our Process</h2>
          <p>
            We measure the opening, wall conditions, and usable entry width before choosing a sliding configuration. The goal is a door that fits the room, not just the shower.
          </p>

          <div className="mt-10 p-6 bg-charcoal/[0.03] rounded-lg border border-charcoal/[0.06]">
            <p className="text-[13px] text-charcoal/50 font-medium uppercase tracking-wider mb-3">Project Details</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-charcoal/70">
              <div><span className="text-charcoal/40">Glass,</span> Clear tempered glass.</div>
              <div><span className="text-charcoal/40">Hardware,</span> Chrome bypass track, Towel bar handles.</div>
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
