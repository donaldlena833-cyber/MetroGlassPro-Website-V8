import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tight Alcove Shower Door With Clean Reveal Lines',
  description: 'A compact alcove shower door measured for even reveals, reliable swing clearance, and a bright frameless look in a NYC apartment bath.',
  keywords: [
    'alcove shower door NYC',
    'compact bathroom glass door',
    'frameless shower door installation',
  ],
  alternates: { canonical: 'https://metroglasspro.com/projects/metroglasspro-project-20260416-072239/' },
  robots: { index: false, follow: true },
  openGraph: {
    title: 'Tight Alcove Shower Door With Clean Reveal Lines',
    description: 'A compact alcove shower door measured for even reveals, reliable swing clearance, and a bright frameless look in a NYC apartment bath.',
    url: 'https://metroglasspro.com/projects/metroglasspro-project-20260416-072239/',
    type: 'article',
    images: ['https://metroglasspro.com/gallery/mgp-20260416-072239-1-photo-2026-03-19-20-32-22-9.jpg'],
  },
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Tight Alcove Shower Door With Clean Reveal Lines',
  description: 'A compact alcove shower door measured for even reveals, reliable swing clearance, and a bright frameless look in a NYC apartment bath.',
  author: { '@type': 'Organization', name: 'MetroGlass Pro', url: 'https://metroglasspro.com' },
  publisher: { '@type': 'Organization', name: 'MetroGlass Pro', url: 'https://metroglasspro.com' },
  datePublished: '2026-04-16',
  dateModified: '2026-04-16',
  mainEntityOfPage: 'https://metroglasspro.com/projects/metroglasspro-project-20260416-072239/',
  image: 'https://metroglasspro.com/gallery/mgp-20260416-072239-1-photo-2026-03-19-20-32-22-9.jpg',
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
            <span className="text-[11px] font-medium tracking-wider uppercase text-charcoal/40 bg-charcoal/[0.04] px-2.5 py-1 rounded-full">Alcove Shower Door</span>
            <span className="text-[11px] font-medium tracking-wider uppercase text-charcoal/40 bg-charcoal/[0.04] px-2.5 py-1 rounded-full">NYC</span>
          </div>
          <h1 className="heading-serif text-charcoal text-3xl sm:text-5xl lg:text-6xl">
            Tight Alcove Shower Door With Clean Reveal Lines
          </h1>
          <p className="mt-4 text-charcoal/30 text-sm">2026-04-16</p>
        </div>
      </section>

      <section className="bg-cream pb-6 sm:pb-10">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <div className="rounded-lg overflow-hidden img-editorial">
            <img
              src="/gallery/mgp-20260416-072239-1-photo-2026-03-19-20-32-22-9.jpg"
              alt="Compact alcove frameless shower door with clean reveal lines in NYC"
              className="w-full h-auto block"
              loading="eager"
            />
          </div>
        </div>
      </section>

      <section className="bg-cream pb-20 sm:pb-28">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 prose-mgp">
          <p>
            Small alcove bathrooms leave very little room for sloppy measurements. This opening needed a door that could swing cleanly, meet the curb correctly, and avoid making the shower feel narrower.
          </p>
          <p>
            We measured after tile completion and built the glass around the finished field conditions.
          </p>

          <h2>What We Installed</h2>
          <p>
            The door uses clear tempered glass and minimal hardware so the alcove stays bright. The important work is in the reveals: the door edges, curb line, and wall-side spacing all need to feel even.
          </p>

          <div className="mt-10 mb-10 grid grid-cols-1 gap-6">
            
          <div className="glass-card overflow-hidden">
            <div className="px-5 pt-5">
              <p className="text-[11px] font-medium tracking-wider uppercase text-charcoal/40">Photo 1</p>
            </div>
            <div className="mt-4 img-editorial">
              <img
                src="/gallery/mgp-20260416-072239-1-photo-2026-03-19-20-32-22-9.jpg"
                alt="Compact alcove frameless shower door with clean reveal lines in NYC"
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
                src="/gallery/mgp-20260416-072239-2-photo-2026-03-19-20-25-25-6.jpg"
                alt="Compact alcove frameless shower door with clean reveal lines in NYC"
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
                src="/gallery/mgp-20260416-072239-3-photo-2026-03-19-20-41-48-6.jpg"
                alt="Compact alcove frameless shower door with clean reveal lines in NYC"
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
                src="/gallery/mgp-20260416-072239-4-photo-2026-03-19-20-25-24-2.jpg"
                alt="Compact alcove frameless shower door with clean reveal lines in NYC"
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
                src="/gallery/mgp-20260416-072239-5-photo-2026-03-19-21-16-56-2.jpg"
                alt="Compact alcove frameless shower door with clean reveal lines in NYC"
                className="w-full h-auto block"
                loading="lazy"
              />
            </div>
          </div>
          </div>

          <h2>Our Process</h2>
          <p>
            For tight alcoves, we verify swing path, ceiling and vanity clearance, wall plumb, and curb slope before fabrication. That prevents field compromises on install day.
          </p>

          <div className="mt-10 p-6 bg-charcoal/[0.03] rounded-lg border border-charcoal/[0.06]">
            <p className="text-[13px] text-charcoal/50 font-medium uppercase tracking-wider mb-3">Project Details</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-charcoal/70">
              <div><span className="text-charcoal/40">Glass,</span> 3/8" clear tempered glass.</div>
              <div><span className="text-charcoal/40">Hardware,</span> Chrome hinges, Wall-mounted handle.</div>
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
