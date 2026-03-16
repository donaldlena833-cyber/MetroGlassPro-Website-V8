import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Glass Partitions Manhattan and NYC',
  description: 'Glass partitions for Manhattan apartments, offices, studios, and selected NYC projects. Clean lines, careful coordination, and precise installation.',
  alternates: { canonical: 'https://metroglasspro.com/glass-partitions-nyc/' },
  openGraph: {
    title: 'Glass Partitions in Manhattan and NYC',
    description: 'Glass partitions for Manhattan apartments, offices, studios, and selected NYC projects.',
  },
  twitter: { card: 'summary_large_image' },
}

const partitionUses = [
  {
    title: 'Apartment Layouts',
    description: 'Partitions that separate space without making the room feel closed off or heavy.',
  },
  {
    title: 'Boutique Commercial',
    description: 'A good fit for offices, studios, showrooms, and hospitality projects that need a more refined look.',
  },
  {
    title: 'Trade Collaboration',
    description: 'Useful when designers and contractors need a glass partner who can coordinate finishes, dimensions, and install logistics clearly.',
  },
]

const details = [
  'Site review and layout confirmation before fabrication.',
  'Hardware and finish coordination so the glass fits the rest of the project.',
  'Clean installation standards for occupied apartments, offices, and active renovations.',
]

export default function GlassPartitionsPage() {
  return (
    <>
      <section className="bg-cream pt-20 sm:pt-32 pb-16 sm:pb-20">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 anim-hero">
          <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Glass Partitions</p>
          <h1 className="heading-serif text-charcoal text-5xl sm:text-6xl lg:text-7xl">Glass partitions for Manhattan homes and boutique commercial spaces.</h1>
          <p className="mt-5 text-warm text-base sm:text-lg max-w-2xl leading-relaxed">
            Partitions work best when the glass feels integrated with the room, not dropped in at the end. MetroGlass Pro handles layout review, finish coordination, and installation with the same standards we bring to shower doors.
          </p>
        </div>
      </section>

      <section className="bg-cream pb-20 sm:pb-28">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="rounded-lg overflow-hidden anim-fade-up">
            <img src="/editorial/railing.jpg" alt="Architectural glass detail showing clean metal and glass lines" className="w-full h-auto" loading="lazy" />
          </div>
          <div className="anim-fade-up d2">
            <h2 className="font-serif text-charcoal text-3xl sm:text-4xl mb-5">The value is in the coordination.</h2>
            <p className="text-warm text-[15px] leading-relaxed mb-6">
              Partition work usually touches more moving parts than a simple glass replacement. Layout, hardware, adjacent finishes, and access rules all need to be aligned early so the final install feels intentional and clean.
            </p>
            <div className="space-y-3">
              {details.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-charcoal/60">
                  <span className="text-orange mt-0.5 shrink-0">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-warm text-[14px] leading-relaxed">
              If your project also includes select railing work, send photos or plans and we can review whether it is a fit.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream-light py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-6 sm:px-10">
          <div className="max-w-2xl mb-12 anim-fade-up">
            <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Where It Fits</p>
            <h2 className="heading-serif text-charcoal text-4xl sm:text-5xl">Useful when a space needs separation without losing light.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {partitionUses.map((item, index) => (
              <div key={item.title} className={`glass-card p-6 anim-fade-up d${index + 1}`}>
                <h3 className="font-serif text-charcoal text-2xl mb-3">{item.title}</h3>
                <p className="text-warm text-[15px] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-6 sm:px-10">
          <h2 className="font-serif text-charcoal text-2xl sm:text-3xl mb-6">Related Insight</h2>
          <Link href="/projects/shower-glass-design-consultation-nyc/" className="glass-card p-5 card-lift block">
            <span className="text-charcoal font-medium text-[15px]">We Design Before We Install</span>
            <span className="text-warm text-[14px] leading-relaxed block mt-2">A look at how MetroGlass Pro works through layout options and finish choices before fabrication starts.</span>
          </Link>
        </div>
      </section>

      <section className="bg-charcoal py-24 text-center">
        <div className="max-w-2xl mx-auto px-6 sm:px-10">
          <h2 className="heading-serif text-white text-4xl sm:text-5xl">Planning a partition or related custom glass project?</h2>
          <p className="mt-4 text-white/40 text-lg">Send photos, your neighborhood, and any layout or finish notes you already have.</p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-3">
            <Link href="/contact/" className="btn-pill btn-primary px-10 py-3.5 text-sm">Request an Estimate</Link>
            <Link href="/services/" className="btn-pill btn-outline-light px-10 py-3.5 text-sm">View All Services</Link>
          </div>
        </div>
      </section>
    </>
  )
}
