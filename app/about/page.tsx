import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About MetroGlassPro — NYC Custom Glass Specialists',
  description: 'Licensed, insured, and 200+ projects completed across all 5 NYC boroughs.',
  alternates: { canonical: 'https://metroglasspro.com/about/' },
  openGraph: {
    title: 'About MetroGlassPro — NYC Custom Glass Specialists',
    description: 'Licensed, insured, and 200+ projects completed across all 5 NYC boroughs.',
  },
  twitter: { card: 'summary_large_image' },
}

export default function AboutPage() {
  return (
    <>
      <section className="bg-cream pt-20 sm:pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 anim-hero">
          <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">About</p>
          <h1 className="heading-serif text-charcoal text-5xl sm:text-6xl lg:text-7xl">Built on precision and trust.</h1>
        </div>
      </section>

      <section className="bg-cream pb-20 sm:pb-28">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="anim-fade-up">
            <p className="text-warm text-[17px] leading-[1.8] mb-6">
              We built MetroGlassPro around one principle: every customer deserves a spa-quality result, not a rushed install. From the first measurement to the final polish, we handle every step in-house — no subcontractors, no shortcuts.
            </p>
            <p className="text-warm text-[17px] leading-[1.8]">
              Our team has completed over 200 installations across New York City, from Manhattan high-rises to Staten Island homes, and we bring the same care to every single job.
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
            <h2 className="heading-serif text-charcoal text-4xl sm:text-5xl">What we stand for.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
            {[
              { n: '01', t: 'Precision', d: 'Every job is templated to 1/16 inch. We measure twice, fabricate once, and install with zero tolerance for gaps.' },
              { n: '02', t: 'Quality', d: 'Only heavy 3/8" and 1/2" tempered safety glass with premium hardware from trusted manufacturers.' },
              { n: '03', t: 'Reliability', d: 'We show up on time, communicate clearly, and leave your space cleaner than we found it. Every single job.' },
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

      <section className="bg-charcoal py-24 text-center">
        <div className="max-w-2xl mx-auto px-6 sm:px-10">
          <h2 className="heading-serif text-white text-4xl sm:text-5xl">Let&apos;s build something beautiful.</h2>
          <Link href="/contact/" className="btn-pill btn-primary px-10 py-3.5 text-sm mt-10 inline-flex">Get a Free Quote</Link>
        </div>
      </section>
    </>
  )
}
