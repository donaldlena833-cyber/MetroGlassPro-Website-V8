import type { Metadata } from 'next'
import EstimateRequestForm from '@/components/EstimateRequestForm'

export const metadata: Metadata = {
  title: 'Request a Shower Door Estimate',
  description: 'Request a fast MetroGlass Pro estimate for shower doors, mirrors, and related custom glass in Manhattan and NYC. Share your neighborhood, building type, and project details.',
  alternates: { canonical: 'https://metroglasspro.com/contact/' },
  openGraph: {
    title: 'Request a Shower Door Estimate',
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
          <h1 className="heading-serif text-charcoal text-5xl sm:text-6xl lg:text-7xl">Request a shower door or custom glass estimate.</h1>
          <p className="mt-5 text-warm text-lg max-w-2xl">The fastest quote starts with a few bathroom photos, your neighborhood, and whether this is a new install, replacement, or repair. You can upload photos right in the form, and Manhattan projects move faster when we know the building type and any COI needs up front.</p>
        </div>
      </section>

      <section className="bg-cream pb-28 sm:pb-36">
        <div className="max-w-5xl mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Info */}
            <div className="anim-slide-left">
              <div className="space-y-8">
                <a href="tel:+13329993846" className="block group">
                  <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-charcoal/25 mb-1">Phone</p>
                  <p className="font-serif text-charcoal text-2xl group-hover:text-orange transition-colors">(332) 999-3846</p>
                </a>
                <a href="sms:+13329993846?body=Hi%20MetroGlass%20Pro%2C%20I%20want%20a%20quote%20and%20can%20send%20bathroom%20photos." className="block group">
                  <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-charcoal/25 mb-1">Text Photos</p>
                  <p className="font-serif text-charcoal text-2xl group-hover:text-orange transition-colors">Send bathroom photos for faster pricing</p>
                </a>
                <a href="mailto:operations@metroglasspro.com" className="block group">
                  <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-charcoal/25 mb-1">Email</p>
                  <p className="font-serif text-charcoal text-2xl group-hover:text-orange transition-colors">operations@metroglasspro.com</p>
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
                  <div className="flex items-start gap-3"><span className="text-orange mt-0.5">✓</span><span>Tell us your borough and neighborhood, Manhattan first if that is where the job is.</span></div>
                  <div className="flex items-start gap-3"><span className="text-orange mt-0.5">✓</span><span>Tell us if this is a new shower door, a replacement, or a repair.</span></div>
                  <div className="flex items-start gap-3"><span className="text-orange mt-0.5">✓</span><span>Let us know if the building needs a COI, freight access, or special coordination.</span></div>
                  <div className="flex items-start gap-3"><span className="text-orange mt-0.5">✓</span><span>Upload photos in the form, or text them after you submit if that is easier.</span></div>
                </div>
              </div>
              <div className="mt-6 glass-card p-6">
                <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-charcoal/25 mb-4">What Happens Next</p>
                <div className="space-y-3 text-sm text-charcoal/60">
                  <div className="flex items-start gap-3"><span className="text-orange mt-0.5">1.</span><span>We review your photos, layout, service type, and building notes.</span></div>
                  <div className="flex items-start gap-3"><span className="text-orange mt-0.5">2.</span><span>We tell you if rough pricing is realistic right away or if a field measure is the better next step.</span></div>
                  <div className="flex items-start gap-3"><span className="text-orange mt-0.5">3.</span><span>For Manhattan buildings, we confirm any COI or scheduling details before install day.</span></div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="anim-slide-right">
              <EstimateRequestForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
