import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About MetroGlass Pro',
  description: 'MetroGlass Pro is a Manhattan first shower door and custom glass company focused on precise measurements, clean installs, and organized building coordination.',
  alternates: { canonical: 'https://metroglasspro.com/about/' },
  openGraph: {
    title: 'About MetroGlass Pro',
    description: 'MetroGlass Pro is a Manhattan first shower door and custom glass company focused on precise measurements, clean installs, and organized building coordination.',
  },
  twitter: { card: 'summary_large_image' },
}

export default function AboutPage() {
  return (
    <>
      <section className="bg-cream pt-20 sm:pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 anim-hero">
          <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">About</p>
          <h1 className="heading-serif text-charcoal text-5xl sm:text-6xl lg:text-7xl">Built for precise, clean, building ready installs.</h1>
        </div>
      </section>

      <section className="bg-cream pb-20 sm:pb-28">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="anim-fade-up">
            <p className="text-warm text-[17px] leading-[1.8] mb-6">
              MetroGlass Pro was built for buyers who want the job handled carefully from the first measurement to the final polish. That matters even more in Manhattan, where compact bathrooms, finished tile, and building rules leave very little room for sloppy work.
            </p>
            <p className="text-warm text-[17px] leading-[1.8]">
              Shower doors are the center of our work. Mirrors, partitions, and related custom glass follow the same standards, clear communication, clean installs, and direct coordination with homeowners, designers, architects, and contractors.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden anim-fade-up d3">
            <img src="/editorial/tools.jpg" alt="Premium glass installation tools" className="w-full h-auto" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="bg-cream-light py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <div className="max-w-xl mb-16 anim-fade-up">
            <h2 className="heading-serif text-charcoal text-4xl sm:text-5xl">What clients notice when they work with us.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              { n: '01', t: 'Precise Measurement', d: 'We field measure for the real bathroom, not the idealized drawing. That means accounting for walls, tile, hardware clearances, and how the door will actually move.' },
              { n: '02', t: 'Clean Install Day', d: 'We know buyers notice the install day as much as the finished glass. Protection goes down first, the bathroom is left clean, and the details are checked before we leave.' },
              { n: '03', t: 'Building Fluency', d: 'Co-op paperwork, condo access, freight elevator windows, quiet hours, and super coordination are part of the job in Manhattan. We treat them that way.' },
              { n: '04', t: 'Direct Communication', d: 'You should not have to chase your glass company for simple answers. We keep the process clear so homeowners, renovators, and trade partners know what to expect.' },
            ].map((v, i) => (
              <div key={v.n} className={`anim-fade-up d${(i + 1) * 2}`}>
                <span className="text-charcoal/10 font-serif text-6xl">{v.n}</span>
                <h3 className="font-serif text-charcoal text-xl mt-3 mb-3">{v.t}</h3>
                <p className="text-warm text-[15px] leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-6 sm:px-10">
          <div className="max-w-2xl mb-12 anim-fade-up">
            <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Who We Work With</p>
            <h2 className="heading-serif text-charcoal text-4xl sm:text-5xl">A good fit for serious residential and trade work.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-6">
              <h3 className="font-serif text-charcoal text-2xl mb-3">Homeowners</h3>
              <p className="text-warm text-[15px] leading-relaxed">For buyers who want a clean install, clear guidance, and a finished bathroom that feels properly resolved.</p>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-serif text-charcoal text-2xl mb-3">Designers & Architects</h3>
              <p className="text-warm text-[15px] leading-relaxed">For projects where finish choices, sightlines, and dependable coordination matter as much as the glass itself.</p>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-serif text-charcoal text-2xl mb-3">Contractors & Renovators</h3>
              <p className="text-warm text-[15px] leading-relaxed">For teams that need field measurements, clean execution, and a glass partner who protects the schedule instead of complicating it.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-24 text-center">
        <div className="max-w-2xl mx-auto px-6 sm:px-10">
          <h2 className="heading-serif text-white text-4xl sm:text-5xl">Planning a Manhattan shower door or custom glass project?</h2>
          <Link href="/contact/" className="btn-pill btn-primary px-10 py-3.5 text-sm mt-10 inline-flex">Request an Estimate</Link>
        </div>
      </section>
    </>
  )
}
