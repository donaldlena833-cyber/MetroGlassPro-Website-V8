import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About MetroGlass Pro NYC',
  description: 'Meet Donald Lena and Ledion Lico, the co-founders behind MetroGlass Pro and its precise, clean, building-ready shower door installations in NYC.',
  alternates: { canonical: 'https://metroglasspro.com/about/' },
  openGraph: {
    title: 'About',
    description: 'Meet Donald Lena and Ledion Lico, the co founders behind MetroGlass Pro, a Manhattan first shower door and custom glass company focused on precise measurements, clean installs, and building ready coordination.',
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
              MetroGlass Pro was founded by Donald Lena and Ledion Lico for buyers who want the job handled carefully from the first measurement to the final polish. That matters even more in Manhattan, where compact bathrooms, finished tile, and building rules leave very little room for sloppy work.
            </p>
            <p className="text-warm text-[17px] leading-[1.8]">
              The company was built around a simple idea. Clients should not have to choose between a random installer who feels risky and a large glass company that feels distant. Shower doors are the center of our work. Mirrors, partitions, and related custom glass follow the same standards, clear communication, clean installs, and direct coordination with homeowners, designers, architects, and contractors.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden anim-fade-up d3">
            <img src="/editorial/tools.jpg" alt="Premium glass installation tools" className="w-full h-auto" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="bg-cream-light py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-6 sm:px-10">
          <div className="max-w-2xl mb-12 anim-fade-up">
            <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">The Founders</p>
            <h2 className="heading-serif text-charcoal text-4xl sm:text-5xl">Donald Lena and Ledion Lico are the names behind the standards.</h2>
            <p className="mt-5 text-warm text-[15px] leading-relaxed">
              Serious Manhattan buyers usually want to know who is actually behind the company. MetroGlass Pro was built by Donald Lena and Ledion Lico for clients who care about direct accountability, careful field work, and a process that respects the building as much as the finished glass.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-6">
              <p className="text-orange text-[12px] font-semibold tracking-[0.2em] uppercase mb-3">Co Founder</p>
              <h3 className="font-serif text-charcoal text-2xl mb-3">Donald Lena</h3>
              <p className="text-warm text-[15px] leading-relaxed">Donald helped shape MetroGlass Pro around direct communication, organized project flow, and the kind of accountability buyers expect when they are trusting someone with a finished Manhattan bathroom.</p>
            </div>
            <div className="glass-card p-6">
              <p className="text-orange text-[12px] font-semibold tracking-[0.2em] uppercase mb-3">Co Founder</p>
              <h3 className="font-serif text-charcoal text-2xl mb-3">Ledion Lico</h3>
              <p className="text-warm text-[15px] leading-relaxed">Ledion helped shape the field standards behind the work, precise measurements, clean install habits, and the kind of detail checking that compact bathrooms and premium tile leave no room to ignore.</p>
            </div>
            <div className="glass-card p-6">
              <p className="text-orange text-[12px] font-semibold tracking-[0.2em] uppercase mb-3">Shared Standard</p>
              <h3 className="font-serif text-charcoal text-2xl mb-3">The MetroGlass Pro Approach</h3>
              <p className="text-warm text-[15px] leading-relaxed">Together, Donald and Ledion built the company to feel like the premium middle ground, more reliable and precise than a random installer, more personal and responsive than a large generic glass company.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-6 sm:px-10">
          <div className="max-w-2xl mb-12 anim-fade-up">
            <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">How They Work</p>
            <h2 className="heading-serif text-charcoal text-4xl sm:text-5xl">What Donald and Ledion wanted clients to feel.</h2>
            <p className="mt-5 text-warm text-[15px] leading-relaxed">
              The goal was never to sound bigger than everyone else. It was to run projects in a way that feels calm, organized, and trustworthy when the space is tight, the tile is finished, and the building expects professionalism from day one. Those standards were shaped across 200 plus NYC installs, where measurement discipline and clean execution matter every single time.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6">
              <h3 className="font-serif text-charcoal text-2xl mb-3">Personal Accountability Over Hand Offs</h3>
              <p className="text-warm text-[15px] leading-relaxed">Clients should know who they hired. That is a different feeling than being pushed through a generic sales pipeline and then hoping the installer shows up with the right understanding of the job.</p>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-serif text-charcoal text-2xl mb-3">Field Standards Before Sales Language</h3>
              <p className="text-warm text-[15px] leading-relaxed">The company standards come from real install conditions, out of plumb walls, finished tile, hardware clearances, silicone details, and how the bathroom actually needs to function after the crew leaves.</p>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-serif text-charcoal text-2xl mb-3">Building Coordination Is Part of the Job</h3>
              <p className="text-warm text-[15px] leading-relaxed">COIs, supers, freight reservations, access windows, and quiet hours are treated like part of the work because in Manhattan they are. A great shower door install still feels bad if the building coordination is sloppy.</p>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-serif text-charcoal text-2xl mb-3">Cleanliness Matters to Premium Buyers</h3>
              <p className="text-warm text-[15px] leading-relaxed">Protection, careful handling, clean edges, and a tidy final walkthrough are not finishing touches. They are part of why homeowners, designers, and contractors feel comfortable recommending the company again.</p>
            </div>
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

      <section className="bg-cream-light py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-6 sm:px-10">
          <div className="max-w-2xl mb-12 anim-fade-up">
            <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Why Manhattan Is Different</p>
            <h2 className="heading-serif text-charcoal text-4xl sm:text-5xl">The glass is only part of the job.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6">
              <h3 className="font-serif text-charcoal text-2xl mb-3">Tighter Bathrooms</h3>
              <p className="text-warm text-[15px] leading-relaxed">Compact layouts, older walls, and finished tile make measurement discipline more important, especially on premium shower door work.</p>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-serif text-charcoal text-2xl mb-3">More Building Coordination</h3>
              <p className="text-warm text-[15px] leading-relaxed">COIs, quiet hours, freight reservations, and super coordination can shape the schedule just as much as the fabrication timeline.</p>
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
