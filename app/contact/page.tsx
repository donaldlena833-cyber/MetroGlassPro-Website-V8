import type { Metadata } from 'next'
import EstimateRequestForm from '@/components/EstimateRequestForm'

export const metadata: Metadata = {
  title: 'Request a Glass Project Estimate',
  description: 'Request an NYC estimate for shower doors, glazing, glass railings, mirrors, partitions, or glass repair. Share photos, plans, location, and building details.',
  alternates: { canonical: 'https://metroglasspro.com/contact/' },
  openGraph: {
    title: 'Request a Glass Project Estimate',
    description: 'Send your neighborhood, building type, and project details for a fast MetroGlass Pro estimate.',
  },
  twitter: { card: 'summary_large_image' },
}

export default function ContactPage() {
  return (
    <>
      <section className="bg-cream pt-20 sm:pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 anim-hero">
          <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Contact</p>
          <h1 className="heading-serif text-charcoal text-5xl sm:text-6xl lg:text-7xl">Request a glass project estimate.</h1>
          <p className="mt-5 text-warm text-lg max-w-2xl">Tell us whether you need shower doors, glazing, glass railings, mirrors, partitions, or glass repair. Add your neighborhood, photos or plans, and whether this is a new installation, replacement, or repair. We review the scope and confirm the next step.</p>
        </div>
      </section>

      <section className="bg-cream pb-28 sm:pb-36">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)] gap-10 lg:gap-12 items-start">
            <div className="min-w-0"><EstimateRequestForm /></div>

            {/* Info */}
            <div className="min-w-0">
              <div className="space-y-8">
                <a href="tel:+13329993846" className="block group">
                  <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-charcoal/25 mb-1">Phone</p>
                  <p className="font-serif text-charcoal text-2xl break-words group-hover:text-orange transition-colors">(332) 999-3846</p>
                </a>
                <a href="sms:+13329993846?body=Hi%20MetroGlass%20Pro%2C%20I%20want%20a%20quote%20and%20can%20send%20project%20photos." className="block group">
                  <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-charcoal/25 mb-1">Text Photos</p>
                  <p className="font-serif text-charcoal text-2xl break-words group-hover:text-orange transition-colors">Send project photos for faster pricing</p>
                </a>
                <a href="mailto:operations@metroglasspro.com" className="block group">
                  <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-charcoal/25 mb-1">Email</p>
                  <p className="font-serif text-charcoal text-2xl break-words group-hover:text-orange transition-colors">operations@metroglasspro.com</p>
                </a>
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-charcoal/25 mb-1">Hours</p>
                  <p className="text-charcoal/70 text-[15px]">Monday to Friday, 8am to 6pm</p>
                  <p className="text-charcoal/70 text-[15px]">Saturday, 9am to 2pm</p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-charcoal/25 mb-1">Service Area</p>
                  <p className="text-charcoal/70 text-[15px]">Manhattan first. Also Brooklyn, Queens, The Bronx, and Staten Island.</p>
                  <p className="text-charcoal/50 text-[14px] mt-1">Select projects in Long Island and Northern New Jersey.</p>
                </div>
              </div>
              <div className="mt-10 glass-card p-6">
                <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-charcoal/25 mb-4">Fastest Way to Quote</p>
                <div className="space-y-3 text-sm text-charcoal/60">
                  <div className="flex items-start gap-3"><span className="text-orange mt-0.5">✓</span><span>Tell us your borough and neighborhood.</span></div>
                  <div className="flex items-start gap-3"><span className="text-orange mt-0.5">✓</span><span>Choose the glass service and tell us if this is an installation, replacement, or repair.</span></div>
                  <div className="flex items-start gap-3"><span className="text-orange mt-0.5">✓</span><span>Let us know if the building needs a COI, freight access, or special coordination.</span></div>
                  <div className="flex items-start gap-3"><span className="text-orange mt-0.5">✓</span><span>Upload photos in the form, or text them after you submit if that is easier.</span></div>
                </div>
              </div>
              <div className="mt-6 glass-card p-6">
                <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-charcoal/25 mb-4">What Happens Next</p>
                <div className="space-y-3 text-sm text-charcoal/60">
                  <div className="flex items-start gap-3"><span className="text-orange mt-0.5">1.</span><span>We review your photos, layout, service type, and building notes.</span></div>
                  <div className="flex items-start gap-3"><span className="text-orange mt-0.5">2.</span><span>We tell you if rough pricing is realistic right away or if a field measure is the better next step.</span></div>
                  <div className="flex items-start gap-3"><span className="text-orange mt-0.5">3.</span><span>For managed buildings, we confirm any COI or scheduling details before install day.</span></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
