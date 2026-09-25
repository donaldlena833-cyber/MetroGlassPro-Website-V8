import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Staten Island Shower Doors and Custom Glass',
  description: 'Planning shower door, mirror, or other glass work on Staten Island? Send photos, rough dimensions, and access details for a project-specific review.',
  alternates: { canonical: 'https://metroglasspro.com/service-areas/staten-island/' },
  openGraph: { images: [{ url: '/assets/og-default.jpg', width: 1200, height: 630, alt: 'MetroGlass Pro custom shower doors and glass installation' }] },
  twitter: { images: ['/assets/og-default.jpg'], card: 'summary_large_image' },
}

export default function StatenIslandPage() {
  return <>
    <section className="bg-cream pt-20 sm:pt-32 pb-16 sm:pb-20">
      <div className="max-w-3xl mx-auto px-6 sm:px-10">
        <Link href="/service-areas/" className="text-orange text-[13px] font-medium mb-6 inline-block">← All service areas</Link>
        <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Staten Island</p>
        <h1 className="heading-serif text-charcoal text-4xl sm:text-6xl">Shower doors and custom glass on Staten Island.</h1>
        <p className="mt-5 text-warm text-base sm:text-lg leading-relaxed">MetroGlass Pro reviews Staten Island shower door, mirror, and glass project inquiries. Photos of the space help us identify the right next step before confirming a visit, materials, or timing.</p>
      </div>
    </section>
    <section className="bg-cream-light py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-6 sm:px-10">
        <h2 className="heading-serif text-charcoal text-3xl sm:text-4xl mb-5">Details that shape the quote</h2>
        <ul className="space-y-3 text-warm text-[15px] leading-relaxed list-disc pl-5">
          <li>Show the full opening, finished walls, curb or tub edge, and nearby fixtures that affect door swing.</li>
          <li>Tell us whether the job is in a house or a managed building; include any access, delivery, work-hour, or insurance requirements.</li>
          <li>Share rough dimensions, the current door or mirror condition, and the glass or hardware finish you have in mind.</li>
        </ul>
        <p className="mt-6 text-warm text-[15px] leading-relaxed">A wide opening may need a door and fixed panel; a compact room may call for a different door path. The actual layout follows field measurement and hardware review.</p>
      </div>
    </section>
    <section className="bg-cream py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-6 sm:px-10">
        <h2 className="heading-serif text-charcoal text-3xl sm:text-4xl mb-8">Explore the service you need</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/frameless-shower-doors-nyc/" className="glass-card p-5 card-lift text-charcoal">New shower enclosure</Link>
          <Link href="/shower-door-replacement-nyc/" className="glass-card p-5 card-lift text-charcoal">Door replacement</Link>
          <Link href="/shower-door-repair-nyc/" className="glass-card p-5 card-lift text-charcoal">Repair assessment</Link>
          <Link href="/custom-mirrors-nyc/" className="glass-card p-5 card-lift text-charcoal">Custom mirror</Link>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/contact/" className="btn-pill btn-primary px-8 py-3 text-sm">Request an estimate</Link>
          <a href="tel:+13329993846" className="btn-pill btn-outline px-8 py-3 text-sm">Call (332) 999-3846</a>
        </div>
      </div>
    </section>
  </>
}
