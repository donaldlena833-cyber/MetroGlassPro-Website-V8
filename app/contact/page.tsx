import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Request a Shower Door Estimate',
  description: 'Request a fast MetroGlass Pro estimate for shower doors, mirrors, and related custom glass in Manhattan and NYC. Share your neighborhood, building type, and project details.',
  alternates: { canonical: 'https://metroglasspro.com/contact/' },
  openGraph: {
    title: 'Request a MetroGlass Pro Estimate',
    description: 'Send your neighborhood, building type, and project details for a fast MetroGlass Pro estimate.',
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
          <h1 className="heading-serif text-charcoal text-5xl sm:text-6xl lg:text-7xl">Request a shower door or custom glass estimate.</h1>
          <p className="mt-5 text-warm text-lg max-w-2xl">The fastest quote starts with a few bathroom photos, your neighborhood, and whether this is a new install, replacement, or repair. Manhattan projects move faster when we know the building type and any COI needs up front.</p>
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
                  <div className="flex items-start gap-3"><span className="text-orange mt-0.5">✓</span><span>Text photos after you submit and we can usually price faster.</span></div>
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
              <form method="POST" action={FORM} className="space-y-5">
                <input type="hidden" name="_subject" value="New Quote Request | MetroGlass Pro" />
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
                    <option>Sliding Shower Door</option>
                    <option>Shower Door Replacement</option>
                    <option>Shower Door Repair or Leak Issue</option>
                    <option>Framed or Semi-Frameless Shower Door</option>
                    <option>Custom Mirror</option>
                    <option>Glass Partition or Railing</option>
                    <option>Commercial or Trade Project</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="borough" className="block text-[13px] font-medium text-charcoal/50 mb-1.5">Borough</label>
                    <select id="borough" name="borough" required className="w-full px-5 py-3.5 bg-cream-light border border-charcoal/[0.08] rounded-full text-sm focus:outline-none focus:border-charcoal/30 transition-colors appearance-none">
                      <option value="">Select borough...</option>
                      <option>Manhattan</option>
                      <option>Brooklyn</option>
                      <option>Queens</option>
                      <option>The Bronx</option>
                      <option>Staten Island</option>
                      <option>Long Island</option>
                      <option>Northern New Jersey</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="neighborhood" className="block text-[13px] font-medium text-charcoal/50 mb-1.5">Neighborhood</label>
                    <input type="text" id="neighborhood" name="neighborhood" placeholder="Tribeca, Upper East Side, Lower East Side..." className="w-full px-5 py-3.5 bg-cream-light border border-charcoal/[0.08] rounded-full text-sm focus:outline-none focus:border-charcoal/30 transition-colors" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="building_type" className="block text-[13px] font-medium text-charcoal/50 mb-1.5">Building Type</label>
                    <select id="building_type" name="building_type" className="w-full px-5 py-3.5 bg-cream-light border border-charcoal/[0.08] rounded-full text-sm focus:outline-none focus:border-charcoal/30 transition-colors appearance-none">
                      <option value="">Select building type...</option>
                      <option>Condo</option>
                      <option>Co-op</option>
                      <option>Brownstone or Townhouse</option>
                      <option>Rental Apartment</option>
                      <option>Single Family Home</option>
                      <option>Commercial</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="project_timeline" className="block text-[13px] font-medium text-charcoal/50 mb-1.5">Project Timeline</label>
                    <select id="project_timeline" name="project_timeline" className="w-full px-5 py-3.5 bg-cream-light border border-charcoal/[0.08] rounded-full text-sm focus:outline-none focus:border-charcoal/30 transition-colors appearance-none">
                      <option value="">Select timeline...</option>
                      <option>ASAP</option>
                      <option>Within 1 to 2 weeks</option>
                      <option>This month</option>
                      <option>Planning and comparing</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="project_type" className="block text-[13px] font-medium text-charcoal/50 mb-1.5">Project Type</label>
                    <select id="project_type" name="project_type" className="w-full px-5 py-3.5 bg-cream-light border border-charcoal/[0.08] rounded-full text-sm focus:outline-none focus:border-charcoal/30 transition-colors appearance-none">
                      <option value="">Select project type...</option>
                      <option>New shower door install</option>
                      <option>Replacing an existing door</option>
                      <option>Need repair more than replacement</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="photos_ready" className="block text-[13px] font-medium text-charcoal/50 mb-1.5">Photos Ready</label>
                    <select id="photos_ready" name="photos_ready" className="w-full px-5 py-3.5 bg-cream-light border border-charcoal/[0.08] rounded-full text-sm focus:outline-none focus:border-charcoal/30 transition-colors appearance-none">
                      <option value="">Select if known...</option>
                      <option>Yes, I can text photos now</option>
                      <option>I can send photos after you reply</option>
                      <option>Not yet</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="coi_needed" className="block text-[13px] font-medium text-charcoal/50 mb-1.5">COI or Building Coordination</label>
                  <select id="coi_needed" name="coi_needed" className="w-full px-5 py-3.5 bg-cream-light border border-charcoal/[0.08] rounded-full text-sm focus:outline-none focus:border-charcoal/30 transition-colors appearance-none">
                    <option value="">Select if known...</option>
                    <option>Yes, COI will be needed</option>
                    <option>Yes, and the building has delivery or elevator rules</option>
                    <option>No, COI not needed</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-[13px] font-medium text-charcoal/50 mb-1.5">Message</label>
                  <textarea id="message" name="message" rows={5} placeholder="Tell us the layout, what style you want, if you are replacing an old door, and anything important about the building or timeline..." className="w-full px-5 py-3.5 bg-cream-light border border-charcoal/[0.08] rounded-2xl text-sm focus:outline-none focus:border-charcoal/30 transition-colors resize-vertical" />
                </div>
                <p className="text-[13px] text-charcoal/45">Have photos ready. Text them to <a href="sms:+13329993846?body=Hi%20MetroGlass%20Pro%2C%20I%20just%20submitted%20the%20form%20and%20am%20sending%20photos." className="text-orange hover:opacity-70 transition-opacity">(332) 999-3846</a> after submitting for faster pricing.</p>
                <button type="submit" className="w-full btn-pill btn-primary py-3.5 text-sm mt-2">Request Estimate</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
