import type { Metadata } from 'next'
import Link from 'next/link'
import ServiceDirectory from '@/components/ServiceDirectory'
import GuideFaqs from '@/components/GuideFaqs'
import { glassServices } from '@/content/service-catalog'

export const metadata: Metadata = {
  title: 'Glass Services NYC: Showers, Glazing, Railings & Mirrors',
  description: 'Explore MetroGlass Pro glass services in NYC: shower doors, glazing, glass railings, custom mirrors, partitions, and repair. Find the right estimate path.',
  alternates: { canonical: 'https://metroglasspro.com/services/' },
}

const questions = [
  { '@type': 'Question', name: 'What glass work does MetroGlass Pro do in NYC?', acceptedAnswer: { '@type': 'Answer', text: 'MetroGlass Pro handles shower doors, residential and commercial glazing, glass railings, custom mirrors, interior glass partitions, and glass repair or replacement assessment across all five NYC boroughs.' } },
  { '@type': 'Question', name: 'Can homeowners, contractors, and property managers request estimates?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Send the service needed, project location, photos or plans, approximate dimensions, and building access requirements. For trade or multi-part projects, include the glass schedule, quantities, and target dates if available.' } },
  { '@type': 'Question', name: 'Which service should I choose for damaged glass?', acceptedAnswer: { '@type': 'Answer', text: 'Choose glass repair if you need damage or hardware assessed. Choose glazing for a defined replacement glass or fitting project. Shower door leaks, hinges, rollers, and enclosure issues also have a dedicated shower door repair page. If unsure, describe the problem in the estimate form.' } },
  { '@type': 'Question', name: 'Can one estimate cover several types of glass work?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Choose Commercial or Trade Project, or your main service, and list the other work in the message. Include a room or opening reference for each item so the scope can be reviewed together.' } },
]
const schema = [
  { '@context': 'https://schema.org', '@type': 'ItemList', name: 'MetroGlass Pro glass services in NYC', itemListElement: glassServices.map((service, index) => ({ '@type': 'ListItem', position: index + 1, name: service.name, url: `https://metroglasspro.com${service.href}` })) },
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: questions },
]

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-cream pt-16 sm:pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-5">Our Services</p>
          <h1 className="heading-serif text-charcoal text-5xl sm:text-6xl lg:text-7xl max-w-3xl">Glass installation and repair across NYC.</h1>
          <p className="mt-6 text-warm text-lg leading-relaxed max-w-3xl">MetroGlass Pro handles shower doors, glazing, glass railings, custom mirrors, partitions, and glass repair for homes and businesses. We work across Manhattan, Brooklyn, Queens, the Bronx, and Staten Island.</p>
          <p className="mt-4 text-warm text-base leading-relaxed max-w-3xl">Choose a service below to see what it covers, what affects the estimate, and which photos or plans help us get started.</p>
        </div>
      </section>
      <section className="bg-cream pb-16 sm:pb-24"><div className="max-w-6xl mx-auto px-6 sm:px-10"><h2 className="font-serif text-charcoal text-3xl mb-6">Find your glass service.</h2><ServiceDirectory /></div></section>
      <section className="bg-cream-light py-16 sm:py-20 border-y border-charcoal/10">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 grid md:grid-cols-2 gap-12">
          <div><h2 className="font-serif text-charcoal text-3xl sm:text-4xl mb-5">Planning a shower door?</h2><p className="text-warm text-base leading-relaxed mb-5">Explore the enclosure layouts or go directly to the stage of your project.</p><nav aria-label="Shower door services" className="flex flex-col gap-4"><Link className="text-orange underline" href="/frameless-shower-doors-nyc/">Frameless shower doors and layouts</Link><Link className="text-orange underline" href="/shower-door-installation-nyc/">New shower door installation</Link><Link className="text-orange underline" href="/shower-door-replacement-nyc/">Shower door replacement</Link><Link className="text-orange underline" href="/shower-door-repair-nyc/">Shower door leaks and hardware repair</Link><Link className="text-orange underline" href="/projects/frameless-shower-door-cost-nyc/">Shower door cost planning guide</Link></nav></div>
          <div><h2 className="font-serif text-charcoal text-3xl sm:text-4xl mb-5">Coordinating a larger project?</h2><p className="text-warm text-base leading-relaxed mb-5">For renovations, commercial interiors, or several glass items in one building, send the plans and identify each opening or room. Include quantities, glass specifications if known, access rules, and your target schedule.</p><p className="text-warm text-base leading-relaxed mb-6">COI instructions, elevator dimensions, finished surfaces, and allowed work hours can affect the installation plan. Include these early so they are part of the scope.</p><Link className="btn-pill btn-outline px-7 py-3.5 text-sm" href="/contact/">Request a project estimate</Link></div>
        </div>
      </section>
      <GuideFaqs questions={questions} />
      <section className="bg-charcoal py-16 sm:py-20"><div className="max-w-3xl mx-auto px-6 sm:px-10 text-center"><h2 className="font-serif text-white text-4xl sm:text-5xl mb-5">Show us the project.</h2><p className="text-white/80 text-lg leading-relaxed mb-8">Send photos, your borough, and what you want installed, replaced, or repaired. We will review the details and confirm the next step.</p><div className="flex flex-wrap justify-center gap-4"><Link href="/contact/" className="btn-pill btn-primary px-8 py-3.5 text-sm">Get a glass estimate</Link><a href="tel:+13329993846" className="btn-pill btn-outline-light px-8 py-3.5 text-sm">Call (332) 999-3846</a></div></div></section>
    </>
  )
}
