import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Bronx Shower Doors and Custom Glass',
  description: 'Planning shower door, mirror, or other glass work in the Bronx? Send photos of the opening and building access details for a project-specific review.',
  alternates: { canonical: 'https://metroglasspro.com/service-areas/bronx/' },
  openGraph: { images: [{ url: '/assets/og-default.jpg', width: 1200, height: 630, alt: 'MetroGlass Pro custom shower doors and glass installation' }] },
  twitter: { images: ['/assets/og-default.jpg'], card: 'summary_large_image' },
}

export default function BronxPage() {
  return <>
    <section className="bg-cream pt-20 sm:pt-32 pb-16 sm:pb-20">
      <div className="max-w-3xl mx-auto px-6 sm:px-10">
        <Link href="/service-areas/" className="text-orange text-[13px] font-medium mb-6 inline-block">← All service areas</Link>
        <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">The Bronx</p>
        <h1 className="heading-serif text-charcoal text-4xl sm:text-6xl">Shower doors and custom glass in the Bronx.</h1>
        <p className="mt-5 text-warm text-base sm:text-lg leading-relaxed">MetroGlass Pro reviews Bronx shower door, mirror, and glass project inquiries. Send photos and a short description first so we can confirm the scope, current availability, and whether a field visit is appropriate.</p>
      </div>
    </section>
    <section className="bg-cream-light py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-6 sm:px-10">
        <h2 className="heading-serif text-charcoal text-3xl sm:text-4xl mb-5">What helps us assess your opening</h2>
        <ul className="space-y-3 text-warm text-[15px] leading-relaxed list-disc pl-5">
          <li>Show the full shower opening or mirror wall, then close-ups of tile, curb, hardware, and damaged areas.</li>
          <li>Include rough dimensions and say whether the work is a new installation, replacement, or repair.</li>
          <li>For a managed building, share COI wording, approved work hours, elevator or service-entry rules, and any protection requirements.</li>
        </ul>
        <p className="mt-6 text-warm text-[15px] leading-relaxed">Final glass dimensions and a schedule depend on field conditions, the selected materials, and building approval where required.</p>
      </div>
    </section>
    <section className="bg-cream py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-6 sm:px-10">
        <h2 className="heading-serif text-charcoal text-3xl sm:text-4xl mb-8">Choose the right starting point</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/frameless-shower-doors-nyc/" className="glass-card p-5 card-lift text-charcoal">Plan a new shower door</Link>
          <Link href="/shower-door-repair-nyc/" className="glass-card p-5 card-lift text-charcoal">Review a leak or hardware issue</Link>
          <Link href="/shower-door-replacement-nyc/" className="glass-card p-5 card-lift text-charcoal">Replace an existing door</Link>
          <Link href="/custom-mirrors-nyc/" className="glass-card p-5 card-lift text-charcoal">Plan a custom mirror</Link>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/contact/" className="btn-pill btn-primary px-8 py-3 text-sm">Request an estimate</Link>
          <a href="tel:+13329993846" className="btn-pill btn-outline px-8 py-3 text-sm">Call (332) 999-3846</a>
        </div>
      </div>
    </section>
  </>
}
