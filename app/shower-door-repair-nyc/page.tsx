import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Shower Door Repair NYC',
  description: 'NYC shower door repair for leaks, dragging glass, loose hinges, worn sweeps, rollers, and failed installations. Send photos for a Manhattan-first assessment.',
  alternates: { canonical: 'https://metroglasspro.com/shower-door-repair-nyc/' },
  openGraph: { images: [{ url: '/assets/og-default.jpg', width: 1200, height: 630, alt: 'MetroGlass Pro custom shower doors and glass installation' }],
    title: 'Shower Door Repair NYC | MetroGlass Pro',
    description: 'Repair leaking, dragging, or misaligned shower doors in NYC. Send photos for a repair-versus-replacement assessment.',
  },
  twitter: { images: ['/assets/og-default.jpg'],  card: 'summary_large_image' },
}

const faqs = [
  {
    q: 'Can a leaking shower door usually be repaired?',
    a: 'Sometimes, yes. If the glass is sound and the problem is coming from a worn sweep, failing silicone, or alignment issue, repair can often solve it. If the glass was measured wrong or the original installation was poor, replacement may be the better answer.',
  },
  {
    q: 'When should a shower door be replaced instead of repaired?',
    a: 'Replacement is usually the better choice when the glass is cracked, the system is badly outdated, the frame is corroded, or the original installation was wrong enough that another repair would only buy a little time.',
  },
  {
    q: 'Can you fix a shower door another installer put in?',
    a: 'We can evaluate shower doors installed by others, including problems involving alignment, sealing, hardware, or an enclosure that never fit the opening correctly. Photos help determine whether an on-site assessment is appropriate.',
  },
  {
    q: 'Do you handle repair work in Manhattan co-ops and condos?',
    a: 'We can evaluate repair work in Manhattan co-ops, condos, apartments, brownstones, and other occupied buildings. Share any COI, elevator, access, or work-hour requirements before scheduling so they can be reviewed for the specific property.',
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Shower Door Repair Manhattan and NYC',
  serviceType: 'Shower door repair',
  url: 'https://metroglasspro.com/shower-door-repair-nyc/',
  description:
    'Shower door repair guidance and repair-versus-replacement evaluation for Manhattan and NYC bathrooms, including leaks, dragging doors, loose hardware, and installation remediation.',
  provider: { '@id': 'https://metroglasspro.com/#business' },
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Manhattan, NY' },
    { '@type': 'City', name: 'New York, NY' },
  ],
}

export default function ShowerDoorRepairPage() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
    <section className="bg-cream pt-20 sm:pt-32 pb-16 sm:pb-24">
      <div className="max-w-3xl mx-auto px-6 sm:px-10">
        <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Shower door repair</p>
        <h1 className="heading-serif text-charcoal text-5xl sm:text-6xl lg:text-7xl">Shower door repair in NYC.</h1>
        <p className="mt-5 text-warm text-base sm:text-lg max-w-2xl leading-relaxed">A leaking or dragging door may be repairable when the glass is sound and the issue is a sweep, seal, hinge, roller, or alignment. Cracked glass or an enclosure that never fit the opening may call for replacement. Send photos so we can assess the likely next step.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/contact/?service=shower-door-repair" className="btn-pill btn-primary px-8 py-3 text-sm">Request a repair assessment</Link>
          <a href="sms:+13329993846?body=Hi%20MetroGlass%20Pro%2C%20I%20have%20a%20shower%20door%20repair%20issue%20and%20can%20send%20photos." className="btn-pill btn-outline px-8 py-3 text-sm">Text problem photos</a>
        </div>
      </div>
    </section>
    <section className="bg-cream-light py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        <h2 className="heading-serif text-charcoal text-3xl sm:text-4xl mb-4">What is happening with the door?</h2>
        <p className="text-warm text-[15px] leading-relaxed max-w-3xl mb-10">The symptom helps start the diagnosis. Photos of both the problem and the whole enclosure help determine whether a site visit or a replacement discussion makes sense.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            ['Water escaping at the door', 'A worn sweep, sealant gap, alignment issue, or the shape of the curb may be involved. A photo of the full opening and the wet area helps narrow the cause.'],
            ['Dragging or difficult closing', 'Hinges, rollers, guides, and clearances need review. Avoid forcing a door that contacts tile or another hard surface.'],
            ['Loose or worn hardware', 'Handles, hinges, rollers, and guides can loosen or wear. Whether a part can be replaced depends on the door and available hardware.'],
            ['An enclosure that never fit well', 'Repeated leaks or gaps can reflect the original dimensions or installation. Another sweep may not solve a fit problem.'],
          ].map(([title, detail]) => <div key={title} className="glass-card p-6">
            <h3 className="font-serif text-charcoal text-2xl mb-3">{title}</h3>
            <p className="text-warm text-[15px] leading-relaxed">{detail}</p>
          </div>)}
        </div>
      </div>
    </section>
    <section className="bg-cream py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="glass-card p-6 sm:p-8">
          <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Repair may be possible</p>
          <h2 className="font-serif text-charcoal text-3xl mb-4">The glass and fit are sound.</h2>
          <p className="text-warm text-[15px] leading-relaxed">Worn sweeps, sealant, or serviceable hardware may be addressed without replacing the whole enclosure. The condition and available parts determine the scope.</p>
        </div>
        <div className="glass-card p-6 sm:p-8">
          <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Replacement may be safer</p>
          <h2 className="font-serif text-charcoal text-3xl mb-4">The glass or fit is compromised.</h2>
          <p className="text-warm text-[15px] leading-relaxed">Cracked glass, substantial corrosion, unavailable parts, or dimensions that leave the door unable to operate safely can change the recommendation. <Link href="/shower-door-replacement-nyc/" className="text-orange underline underline-offset-4">Explore shower door replacement.</Link></p>
        </div>
      </div>
    </section>
    <section className="bg-cream-light py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-6 sm:px-10">
        <h2 className="heading-serif text-charcoal text-3xl sm:text-4xl mb-5">Send these details for an assessment</h2>
        <ul className="list-disc pl-5 space-y-3 text-warm text-[15px] leading-relaxed">
          <li>A straight-on photo of the whole shower and close-ups of the leak, hardware, or damaged area.</li>
          <li>Approximate opening dimensions and a short note about when the issue began or any previous repair.</li>
          <li>Building access, certificate of insurance, elevator, or work-hour requirements, if applicable.</li>
        </ul>
        <Link href="/contact/?service=shower-door-repair" className="btn-pill btn-primary px-8 py-3 text-sm mt-8 inline-flex">Send a repair request</Link>
      </div>
    </section>
    <section className="bg-cream py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-6 sm:px-10">
        <h2 className="heading-serif text-charcoal text-3xl sm:text-4xl mb-8">Common repair questions</h2>
        {faqs.map((faq) => <details key={faq.q} className="group border-b border-charcoal/[0.06]">
          <summary className="flex items-center justify-between py-6 cursor-pointer text-charcoal font-medium text-[15px]">
            <span>{faq.q}</span><span className="ml-4 text-charcoal/30 text-xl group-open:rotate-45">+</span>
          </summary>
          <p className="pb-6 text-warm text-[15px] leading-relaxed">{faq.a}</p>
        </details>)}
        <div className="mt-10 flex flex-wrap gap-4 text-orange text-[14px] underline underline-offset-4">
          <Link href="/blog/2026-05-09-honest-shower-door-repair-nyc/">Read the repair planning guide</Link>
          <Link href="/service-areas/manhattan/">Manhattan service details</Link>
        </div>
      </div>
    </section>
  </>
}
