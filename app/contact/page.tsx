import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact — Free Shower Glass Estimate NYC',
  description: 'Request a free estimate for custom shower glass installation in NYC. Call (332) 999-3846.',
  alternates: { canonical: 'https://metroglasspro.com/contact/' },
  openGraph: {
    title: 'Contact MetroGlassPro — Free Estimates NYC',
    description: 'Get a free estimate for custom shower glass installation in NYC. Call (332) 999-3846.',
  },
  twitter: { card: 'summary_large_image' },
}

export default function ContactPage() {
  const FORM = 'https://formspree.io/f/xkovqdgg'

  return (
    <>
      <section className="bg-cream pt-20 sm:pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 anim-hero">
          <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Contact</p>
          <h1 className="heading-serif text-charcoal text-5xl sm:text-6xl lg:text-7xl">Let&apos;s talk about your project.</h1>
          <p className="mt-5 text-warm text-lg max-w-lg">We typically respond within a few hours. Same-week appointments available.</p>
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
                <a href="mailto:operations@metroglasspro.com" className="block group">
                  <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-charcoal/25 mb-1">Email</p>
                  <p className="font-serif text-charcoal text-2xl group-hover:text-orange transition-colors">operations@metroglasspro.com</p>
                </a>
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-charcoal/25 mb-1">Hours</p>
                  <p className="text-charcoal/70 text-[15px]">Monday – Friday, 8am – 6pm</p>
                  <p className="text-charcoal/70 text-[15px]">Saturday, 9am – 2pm</p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-charcoal/25 mb-1">Service Area</p>
                  <p className="text-charcoal/70 text-[15px]">Manhattan · Brooklyn · Queens · The Bronx · Staten Island</p>
                  <p className="text-charcoal/50 text-[14px] mt-1">Also serving Long Island & Northern NJ</p>
                </div>
              </div>
              <div className="mt-10 flex items-center gap-3 text-sm text-charcoal/50">
                <span className="text-orange">✓</span> Licensed & Insured in New York
              </div>
            </div>

            {/* Form */}
            <div className="anim-slide-right">
              <form method="POST" action={FORM} className="space-y-5">
                <input type="hidden" name="_subject" value="New Quote Request — MetroGlassPro" />
                <div>
                  <label htmlFor="name" className="block text-[13px] font-medium text-charcoal/50 mb-1.5">Name</label>
                  <input type="text" id="name" name="name" required className="w-full px-5 py-3.5 bg-cream-light border border-charcoal/[0.08] rounded-full text-sm focus:outline-none focus:border-charcoal/30 transition-colors" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-[13px] font-medium text-charcoal/50 mb-1.5">Phone</label>
                  <input type="tel" id="phone" name="phone" required className="w-full px-5 py-3.5 bg-cream-light border border-charcoal/[0.08] rounded-full text-sm focus:outline-none focus:border-charcoal/30 transition-colors" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[13px] font-medium text-charcoal/50 mb-1.5">Email</label>
                  <input type="email" id="email" name="email" required className="w-full px-5 py-3.5 bg-cream-light border border-charcoal/[0.08] rounded-full text-sm focus:outline-none focus:border-charcoal/30 transition-colors" />
                </div>
                <div>
                  <label htmlFor="service" className="block text-[13px] font-medium text-charcoal/50 mb-1.5">Service</label>
                  <select id="service" name="service" required className="w-full px-5 py-3.5 bg-cream-light border border-charcoal/[0.08] rounded-full text-sm focus:outline-none focus:border-charcoal/30 transition-colors appearance-none">
                    <option value="">Select a service...</option>
                    <option>Frameless Shower Door</option>
                    <option>Framed / Semi-Frameless</option>
                    <option>Custom Mirror</option>
                    <option>Glass Partition or Railing</option>
                    <option>Glass Repair</option>
                    <option>Commercial Project</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-[13px] font-medium text-charcoal/50 mb-1.5">Message</label>
                  <textarea id="message" name="message" rows={4} placeholder="Tell us about your project..." className="w-full px-5 py-3.5 bg-cream-light border border-charcoal/[0.08] rounded-2xl text-sm focus:outline-none focus:border-charcoal/30 transition-colors resize-vertical" />
                </div>
                <button type="submit" className="w-full btn-pill btn-primary py-3.5 text-sm mt-2">Send Request</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
