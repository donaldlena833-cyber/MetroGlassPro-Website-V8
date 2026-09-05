import type { Metadata } from 'next'
import EstimateRequestForm from '@/components/EstimateRequestForm'

export const metadata: Metadata = {
  title: 'Request a Glass Project Estimate',
  description: 'Contact MetroGlass Pro for shower doors, glazing, glass railings, mirrors, partitions, or repair. A short project note and one phone number or email gets you started.',
  alternates: { canonical: 'https://metroglasspro.com/contact/' },
  openGraph: {
    title: 'Request a Glass Project Estimate',
    description: 'Tell us what you need and how to reach you. Photos and measurements can come later.',
  },
  twitter: { card: 'summary_large_image' },
}

export default function ContactPage() {
  return (
    <>
      <section className="bg-cream pt-10 sm:pt-16 pb-8 sm:pb-10">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Contact</p>
          <h1 className="heading-serif text-charcoal text-4xl sm:text-5xl lg:text-6xl">Let’s talk about your project.</h1>
          <p className="mt-4 text-warm text-lg max-w-2xl">A quick note is all it takes to get started.</p>
          <p className="mt-4 text-sm text-charcoal">Prefer to talk? <a href="tel:+13329993846" className="underline underline-offset-4">Call</a><span aria-hidden="true"> · </span><a href="sms:+13329993846" className="underline underline-offset-4">Text us</a><span aria-hidden="true"> · </span><a href="mailto:operations@metroglasspro.com" className="underline underline-offset-4">Email us</a></p>
        </div>
      </section>

      <section className="bg-cream pb-16 sm:pb-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)] gap-10 lg:gap-12 items-start">
            <div className="min-w-0"><EstimateRequestForm /></div>

            {/* Info */}
            <div className="min-w-0">
              <div className="space-y-8">
                <a href="tel:+13329993846" className="block group">
                  <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-charcoal/70 mb-1">Phone</p>
                  <p className="font-serif text-charcoal text-2xl break-words group-hover:text-orange transition-colors">(332) 999-3846</p>
                </a>
                <a href="sms:+13329993846?body=Hi%20MetroGlass%20Pro%2C%20I%20want%20a%20quote%20and%20can%20send%20project%20photos." className="block group">
                  <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-charcoal/70 mb-1">Text Photos</p>
                  <p className="font-serif text-charcoal text-2xl break-words group-hover:text-orange transition-colors">Send project photos for faster pricing</p>
                </a>
                <a href="mailto:operations@metroglasspro.com" className="block group">
                  <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-charcoal/70 mb-1">Email</p>
                  <p className="font-serif text-charcoal text-2xl break-words group-hover:text-orange transition-colors">operations@metroglasspro.com</p>
                </a>
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-charcoal/70 mb-1">Hours</p>
                  <p className="text-charcoal/70 text-[15px]">Monday to Friday, 8am to 6pm</p>
                  <p className="text-charcoal/70 text-[15px]">Saturday, 9am to 2pm</p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-charcoal/70 mb-1">Service Area</p>
                  <p className="text-charcoal/70 text-[15px]">Manhattan first. Also Brooklyn, Queens, The Bronx, and Staten Island.</p>
                  <p className="text-charcoal/75 text-[14px] mt-1">Select projects in Long Island and Northern New Jersey.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
