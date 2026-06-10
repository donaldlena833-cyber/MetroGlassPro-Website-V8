import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tub-to-Shower Glass Upgrade With Chrome Hardware',
  description: 'A tub-shower glass upgrade that replaces visual clutter with clear tempered glass, chrome hardware, and a cleaner bathroom sightline.',
  keywords: [
    'tub shower glass NYC',
    'frameless tub door Manhattan',
    'chrome shower door hardware',
  ],
  alternates: { canonical: 'https://metroglasspro.com/projects/metroglasspro-project-20260417-072240/' },
  robots: { index: false, follow: true },
  openGraph: {
    title: 'Tub-to-Shower Glass Upgrade With Chrome Hardware',
    description: 'A tub-shower glass upgrade that replaces visual clutter with clear tempered glass, chrome hardware, and a cleaner bathroom sightline.',
    url: 'https://metroglasspro.com/projects/metroglasspro-project-20260417-072240/',
    type: 'article',
    images: ['https://metroglasspro.com/gallery/mgp-20260417-072240-1-photo-2026-03-19-20-41-48-7.jpg'],
  },
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Tub-to-Shower Glass Upgrade With Chrome Hardware',
  description: 'A tub-shower glass upgrade that replaces visual clutter with clear tempered glass, chrome hardware, and a cleaner bathroom sightline.',
  author: { '@type': 'Organization', name: 'MetroGlass Pro', url: 'https://metroglasspro.com' },
  publisher: { '@type': 'Organization', name: 'MetroGlass Pro', url: 'https://metroglasspro.com' },
  datePublished: '2026-04-17',
  dateModified: '2026-04-17',
  mainEntityOfPage: 'https://metroglasspro.com/projects/metroglasspro-project-20260417-072240/',
  image: 'https://metroglasspro.com/gallery/mgp-20260417-072240-1-photo-2026-03-19-20-41-48-7.jpg',
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
            <span className="text-[11px] font-medium tracking-wider uppercase text-charcoal/40 bg-charcoal/[0.04] px-2.5 py-1 rounded-full">Tub Shower Glass</span>
            <span className="text-[11px] font-medium tracking-wider uppercase text-charcoal/40 bg-charcoal/[0.04] px-2.5 py-1 rounded-full">NYC</span>
          </div>
          <h1 className="heading-serif text-charcoal text-3xl sm:text-5xl lg:text-6xl">
            Tub-to-Shower Glass Upgrade With Chrome Hardware
          </h1>
          <p className="mt-4 text-charcoal/30 text-sm">2026-04-17</p>
        </div>
      </section>

      <section className="bg-cream pb-6 sm:pb-10">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <div className="rounded-lg overflow-hidden img-editorial">
            <img
              src="/gallery/mgp-20260417-072240-1-photo-2026-03-19-20-41-48-7.jpg"
              alt="Frameless tub shower glass with chrome hardware in a renovated NYC bathroom"
              className="w-full h-auto block"
              loading="eager"
            />
          </div>
        </div>
      </section>

      <section className="bg-cream pb-20 sm:pb-28">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 prose-mgp">
          <p>
            This tub-shower opening called for a lighter glass solution that would make the bathroom feel less crowded. Instead of using a heavy framed system, we measured the finished tile and fabricated clear glass to fit the actual opening.
          </p>
          <p>
            Chrome hardware kept the finish familiar and easy to pair with the rest of the fixtures.
          </p>

          <h2>What We Installed</h2>
          <p>
            The final setup gives the tub area a cleaner edge while preserving access for everyday use. Clear tempered glass keeps the tile visible, and the chrome hardware adds structure without dominating the room.
          </p>

          <div className="mt-10 mb-10 grid grid-cols-1 gap-6">
            
          <div className="glass-card overflow-hidden">
            <div className="px-5 pt-5">
              <p className="text-[11px] font-medium tracking-wider uppercase text-charcoal/40">Photo 1</p>
            </div>
            <div className="mt-4 img-editorial">
              <img
                src="/gallery/mgp-20260417-072240-1-photo-2026-03-19-20-41-48-7.jpg"
                alt="Frameless tub shower glass with chrome hardware in a renovated NYC bathroom"
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
                src="/gallery/mgp-20260417-072240-2-67e4158c-9bdd-47e9-98e0-89eca77f72d8.jpg"
                alt="Frameless tub shower glass with chrome hardware in a renovated NYC bathroom"
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
                src="/gallery/mgp-20260417-072240-3-photo-2026-03-19-20-32-25-3.jpg"
                alt="Frameless tub shower glass with chrome hardware in a renovated NYC bathroom"
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
                src="/gallery/mgp-20260417-072240-4-photo-2026-03-19-20-34-04.jpg"
                alt="Frameless tub shower glass with chrome hardware in a renovated NYC bathroom"
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
                src="/gallery/mgp-20260417-072240-5-photo-2026-03-19-20-25-26-5.jpg"
                alt="Frameless tub shower glass with chrome hardware in a renovated NYC bathroom"
                className="w-full h-auto block"
                loading="lazy"
              />
            </div>
          </div>
          </div>

          <h2>Our Process</h2>
          <p>
            On tub projects, the curb and wall conditions matter. We check the tub deck, wall angle, tile face, and handle position before releasing anything to fabrication.
          </p>

          <div className="mt-10 p-6 bg-charcoal/[0.03] rounded-lg border border-charcoal/[0.06]">
            <p className="text-[13px] text-charcoal/50 font-medium uppercase tracking-wider mb-3">Project Details</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-charcoal/70">
              <div><span className="text-charcoal/40">Glass,</span> Clear tempered glass.</div>
              <div><span className="text-charcoal/40">Hardware,</span> Chrome hinges, Chrome pull handle.</div>
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
