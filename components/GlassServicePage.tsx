import type { Metadata } from 'next'
import Link from 'next/link'
import GuideFaqs from '@/components/GuideFaqs'
import { glassServices } from '@/content/service-catalog'
import { glassServiceDetails } from '@/content/glass-service-details'

export function glassServiceMetadata(id: string): Metadata {
  const detail = glassServiceDetails[id]
  const service = glassServices.find((item) => item.id === id)!
  return { title: detail.title, description: detail.description, alternates: { canonical: `https://metroglasspro.com${service.href}` }, openGraph: { title: detail.title, description: detail.description, url: `https://metroglasspro.com${service.href}` } }
}

export default function GlassServicePage({ id }: { id: string }) {
  const detail = glassServiceDetails[id]
  const service = glassServices.find((item) => item.id === id)!
  const url = `https://metroglasspro.com${service.href}`
  const quote = `/contact/?service=${id}`
  const questions = detail.faqs.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } }))
  const schema = [
    { '@context': 'https://schema.org', '@type': 'Service', '@id': `${url}#service`, name: detail.title, serviceType: service.name, description: detail.answer, url, provider: { '@id': 'https://metroglasspro.com/#business' }, areaServed: ['Manhattan', 'Brooklyn', 'Queens', 'Bronx', 'Staten Island'] },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: questions },
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://metroglasspro.com/' },
      { '@type': 'ListItem', position: 2, name: 'Glass services', item: 'https://metroglasspro.com/services/' },
      { '@type': 'ListItem', position: 3, name: service.name, item: url },
    ] },
  ]
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
      <section className="bg-cream pt-10 sm:pt-16 pb-16 sm:pb-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <nav aria-label="Breadcrumb" className="text-sm text-warm mb-12"><ol className="flex flex-wrap gap-2"><li><Link href="/" className="underline">Home</Link></li><li aria-hidden="true">/</li><li><Link href="/services/" className="underline">Glass services</Link></li><li aria-hidden="true">/</li><li aria-current="page">{service.name}</li></ol></nav>
          <div className="grid lg:grid-cols-[1.6fr_1fr] gap-10 lg:gap-16 items-start">
            <div>
              <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-5">MetroGlass Pro · New York City</p>
              <h1 className="heading-serif text-charcoal text-5xl sm:text-6xl lg:text-7xl">{detail.title}</h1>
              <p className="mt-6 text-warm text-lg leading-relaxed">{detail.answer}</p>
              <div className="flex flex-wrap gap-3 mt-8"><Link href={quote} className="btn-pill btn-primary px-7 py-3.5 text-sm">Request an estimate</Link><a href="tel:+13329993846" className="btn-pill btn-outline px-7 py-3.5 text-sm">Call (332) 999-3846</a></div>
            </div>
            <aside className="glass-card p-6 sm:p-8">
              <h2 className="font-serif text-charcoal text-3xl mb-4">Start with the right details.</h2>
              <p className="text-warm text-base leading-relaxed mb-5">{service.photoTip}</p>
              <dl className="text-sm space-y-4"><div><dt className="font-semibold text-charcoal">Service area</dt><dd className="mt-1 text-warm">Manhattan, Brooklyn, Queens, the Bronx, and Staten Island.</dd></div><div><dt className="font-semibold text-charcoal">Building coordination</dt><dd className="mt-1 text-warm">Send COI, elevator, delivery, and work-hour requirements with your request.</dd></div><div><dt className="font-semibold text-charcoal">Estimate</dt><dd className="mt-1 text-warm">Photos and rough dimensions start the review. Final scope and timing are confirmed for your project.</dd></div></dl>
            </aside>
          </div>
        </div>
      </section>
      <nav aria-label="On this page" className="bg-cream border-t border-charcoal/10"><div className="max-w-6xl mx-auto px-6 sm:px-10 py-4 flex flex-wrap gap-x-7 gap-y-3 text-sm text-charcoal"><a href="#scope" className="underline underline-offset-4">Project types</a><a href="#cost" className="underline underline-offset-4">Cost and timing</a><a href="#process" className="underline underline-offset-4">Our process</a><a href="#estimate" className="underline underline-offset-4">Estimate checklist</a></div></nav>
      <section id="scope" className="bg-cream-light py-16 sm:py-24 border-y border-charcoal/10">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <h2 className="font-serif text-charcoal text-4xl sm:text-5xl mb-8">Plan around your project.</h2>
          <div className="overflow-x-auto"><table className="w-full text-left text-base border-collapse"><caption className="sr-only">{service.name} project types and planning details</caption><thead><tr className="border-b border-charcoal/20"><th scope="col" className="py-4 pr-6 text-charcoal w-1/3">Project</th><th scope="col" className="py-4 text-charcoal">What to review</th></tr></thead><tbody>{detail.decisions.map((item) => <tr key={item.project} className="border-b border-charcoal/10"><th scope="row" className="py-5 pr-6 text-charcoal align-top font-medium">{item.project}</th><td className="py-5 text-warm leading-relaxed">{item.planning}</td></tr>)}</tbody></table></div>
          <div id="cost" className="grid md:grid-cols-2 gap-10 mt-12"><div><h2 className="font-serif text-charcoal text-3xl mb-4">What affects the cost?</h2><p className="text-warm text-base leading-relaxed">{detail.cost}</p></div><div><h2 className="font-serif text-charcoal text-3xl mb-4">When can work begin?</h2><p className="text-warm text-base leading-relaxed">{detail.timing}</p></div></div>
        </div>
      </section>
      <section id="process" className="bg-cream py-16 sm:py-24"><div className="max-w-6xl mx-auto px-6 sm:px-10"><h2 className="font-serif text-charcoal text-4xl sm:text-5xl mb-10">From first photos to installation.</h2><ol className="grid md:grid-cols-3 gap-8">{detail.process.map((step, index) => <li key={step.title}><p className="text-orange text-sm mb-3">0{index + 1}</p><h3 className="font-serif text-charcoal text-2xl mb-3">{step.title}</h3><p className="text-warm text-base leading-relaxed">{step.text}</p></li>)}</ol></div></section>
      <section id="estimate" className="bg-charcoal text-white py-16 sm:py-20"><div className="max-w-6xl mx-auto px-6 sm:px-10 grid md:grid-cols-2 gap-10"><div><h2 className="font-serif text-4xl sm:text-5xl mb-5">Send these details for your estimate.</h2><p className="text-white/75 text-base leading-relaxed mb-7">Choose {service.name.toLowerCase()} in the quote form and upload photos or a PDF plan. Rough dimensions are useful; exact field measurements come later.</p><Link href={quote} className="btn-pill btn-primary px-7 py-3.5 text-sm">Request an estimate</Link></div><ul className="list-disc pl-5 text-white/85 text-base leading-relaxed space-y-4">{detail.checklist.map((item) => <li key={item}>{item}</li>)}</ul></div></section>
      <GuideFaqs questions={questions} />
      <section className="bg-cream py-16 sm:py-20"><div className="max-w-6xl mx-auto px-6 sm:px-10"><h2 className="font-serif text-charcoal text-3xl mb-6">Useful next steps.</h2><div className="grid md:grid-cols-2 gap-5">{detail.links.map((link) => <div key={link.href} className="glass-card p-6"><a href={link.href} className="text-charcoal font-medium underline underline-offset-4">{link.label}</a><p className="text-warm text-base mt-3">{link.note}</p></div>)}</div><h2 className="font-serif text-charcoal text-3xl mt-12 mb-5">More glass services in NYC.</h2><nav aria-label="Related glass services" className="flex flex-wrap gap-x-6 gap-y-4">{glassServices.filter((item) => item.id !== id).map((item) => <Link key={item.id} href={item.href} className="text-orange underline underline-offset-4">{item.name}</Link>)}</nav></div></section>
    </>
  )
}
