import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Custom Mirrors Manhattan and NYC',
  description: 'Custom bathroom mirrors and wall mirrors for Manhattan apartments, condos, brownstones, and selected NYC projects. Precise measurements and clean installation.',
  alternates: { canonical: 'https://metroglasspro.com/custom-mirrors-nyc/' },
  openGraph: {
    title: 'Custom Mirrors in Manhattan and NYC',
    description: 'Custom bathroom mirrors and wall mirrors for Manhattan apartments, condos, brownstones, and selected NYC projects.',
  },
  twitter: { card: 'summary_large_image' },
}

const mirrorUses = [
  {
    title: 'Vanity Mirrors',
    description: 'Clean, polished mirrors sized for real vanity layouts, outlets, sconces, and finished tile.',
  },
  {
    title: 'Wall Mirrors',
    description: 'Custom mirrors for bedrooms, entryways, living areas, and other spaces that need a tailored fit.',
  },
  {
    title: 'Renovation and Design Work',
    description: 'A strong fit for remodels and designer led projects where alignment, edge details, and clean installation matter.',
  },
]

const process = [
  'Review the wall, layout, and any outlet or trim conditions.',
  'Confirm size, edge finish, and mounting approach.',
  'Install cleanly and leave the room ready to use.',
]

export default function CustomMirrorsPage() {
  return (
    <>
      <section className="bg-cream pt-20 sm:pt-32 pb-16 sm:pb-20">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 anim-hero">
          <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Custom Mirrors</p>
          <h1 className="heading-serif text-charcoal text-5xl sm:text-6xl lg:text-7xl">Custom mirrors for Manhattan bathrooms and interiors.</h1>
          <p className="mt-5 text-warm text-base sm:text-lg max-w-2xl leading-relaxed">
            MetroGlass Pro measures and installs custom mirrors with the same precision we bring to shower doors. The goal is a clean fit, a polished edge, and an install that feels resolved, not improvised.
          </p>
        </div>
      </section>

      <section className="bg-cream pb-20 sm:pb-28">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="rounded-lg overflow-hidden anim-fade-up">
            <img src="/editorial/mirror.jpg" alt="Custom mirror with clean trim and refined wall fit" className="w-full h-auto" loading="lazy" />
          </div>
          <div className="anim-fade-up d2">
            <h2 className="font-serif text-charcoal text-3xl sm:text-4xl mb-5">Measured for the actual room.</h2>
            <p className="text-warm text-[15px] leading-relaxed mb-6">
              Good mirror work looks simple when it is done well. In reality, the fit depends on accurate measurements, wall conditions, outlet locations, trim details, and whether the mirror needs to land precisely within an existing design.
            </p>
            <div className="space-y-3">
              {process.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-charcoal/60">
                  <span className="text-orange mt-0.5 shrink-0">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream-light py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-6 sm:px-10">
          <div className="max-w-2xl mb-12 anim-fade-up">
            <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Where Mirrors Fit Best</p>
            <h2 className="heading-serif text-charcoal text-4xl sm:text-5xl">A clean upgrade for bathrooms, apartments, and renovation projects.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mirrorUses.map((item, index) => (
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
          <h2 className="font-serif text-charcoal text-2xl sm:text-3xl mb-6">Related Project</h2>
          <Link href="/projects/typical-mirror-replacement-nyc/" className="glass-card p-5 card-lift block">
            <span className="text-charcoal font-medium text-[15px]">Mirror Replacement in a NYC Apartment</span>
            <span className="text-warm text-[14px] leading-relaxed block mt-2">A practical walkthrough of a typical mirror replacement, including sizing, mounting, timeline, and what helps the install go smoothly.</span>
          </Link>
        </div>
      </section>

      <section className="bg-charcoal py-24 text-center">
        <div className="max-w-2xl mx-auto px-6 sm:px-10">
          <h2 className="heading-serif text-white text-4xl sm:text-5xl">Need a mirror measured and installed cleanly?</h2>
          <p className="mt-4 text-white/40 text-lg">Send photos of the wall, your neighborhood, and the approximate size you have in mind.</p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-3">
            <Link href="/contact/" className="btn-pill btn-primary px-10 py-3.5 text-sm">Request an Estimate</Link>
            <Link href="/service-areas/manhattan/" className="btn-pill btn-outline-light px-10 py-3.5 text-sm">See Manhattan Service</Link>
          </div>
        </div>
      </section>
    </>
  )
}
