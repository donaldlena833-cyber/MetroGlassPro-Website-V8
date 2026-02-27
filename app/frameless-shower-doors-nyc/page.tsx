import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Frameless Shower Doors NYC — Custom Glass Installation | MetroGlassPro',
  description: 'Custom frameless shower doors installed across NYC. 3/8" & 1/2" tempered glass, premium hardware finishes, co-op & condo ready. Free estimates. (332) 999-3846.',
  alternates: { canonical: 'https://metroglasspro.com/frameless-shower-doors-nyc/' },
  openGraph: {
    title: 'Frameless Shower Doors NYC — Custom Installation | MetroGlassPro',
    description: 'Custom frameless shower doors installed across all 5 NYC boroughs. Premium glass, expert fitting, free estimates.',
    url: 'https://metroglasspro.com/frameless-shower-doors-nyc/',
    type: 'website',
  },
}

const faqs = [
  {
    q: 'How much do frameless shower doors cost in NYC?',
    a: 'Custom frameless shower doors in NYC typically range from $800 to $3,000+ depending on glass thickness (3/8″ vs 1/2″), hardware finish, number of panels, and configuration. Single door panels start at the lower end; full multi-panel enclosures with premium hardware are at the higher end. We provide free, no-obligation estimates with transparent pricing.',
  },
  {
    q: 'How long does the whole process take from measurement to install?',
    a: 'The typical timeline is about 1.5–2 weeks total. We schedule an in-home measurement visit (about 30 minutes), then custom fabrication takes 5–7 business days. Installation itself is usually 2–4 hours.',
  },
  {
    q: 'Can you install frameless shower doors in NYC co-ops and condos?',
    a: 'Yes — we regularly install in co-ops and condos across Manhattan, Brooklyn, and Queens. We carry full insurance (COI available on request), coordinate with building management for elevator reservations and freight access, and work within building quiet hours.',
  },
  {
    q: 'Do frameless shower doors leak?',
    a: 'Not when installed correctly. We use precision-fit glass templated to 1/16″ accuracy, professional-grade silicone seals along all glass-to-wall and glass-to-tile joints, and proper slope alignment so water drains inward. Gaps and leaks are almost always the result of poor measurement or improper installation.',
  },
  {
    q: 'What glass thickness should I choose — 3/8″ or 1/2″?',
    a: '3/8″ (10mm) tempered glass is the industry standard for most residential shower doors and works well in nearly all NYC bathrooms. 1/2″ (12mm) glass feels more substantial and premium — it\'s a great choice for large panels, heavy frameless enclosures, or luxury renovations where you want maximum solidity.',
  },
  {
    q: 'What hardware finishes do you offer?',
    a: 'We offer chrome, brushed nickel, matte black, satin brass, polished brass, and oil-rubbed bronze. Chrome and brushed nickel are the most popular for NYC apartments; matte black and satin brass are trending in modern renovations.',
  },
  {
    q: 'Which areas in NYC do you serve?',
    a: 'All five boroughs — Manhattan, Brooklyn, Queens, The Bronx, and Staten Island. We also serve parts of Long Island and Northern New Jersey.',
  },
  {
    q: 'Are you licensed and insured?',
    a: 'Yes. MetroGlassPro is fully licensed and insured in New York, and we can provide a Certificate of Insurance (COI) for co-op and condo buildings on request.',
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
  name: 'Frameless Shower Door Installation NYC',
  provider: {
    '@type': 'LocalBusiness',
    name: 'MetroGlassPro',
    telephone: '+1-332-999-3846',
    url: 'https://metroglasspro.com',
    areaServed: [
      { '@type': 'City', name: 'New York', addressRegion: 'NY' },
    ],
  },
  description: 'Custom frameless shower door installation across all 5 NYC boroughs. Precision-measured, custom-fabricated tempered glass with premium hardware.',
  areaServed: 'New York City',
  serviceType: 'Frameless Shower Door Installation',
}

export default function FramelessShowerDoorsNYC() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />

      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/editorial/shower-door.jpg')" }} />
        <div className="absolute inset-0 backdrop-blur-[2px] bg-cream/50" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-10 text-center py-20 sm:py-28">
          <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-5 anim-fade-up">NYC&apos;s Custom Glass Specialists</p>
          <h1 className="heading-serif text-charcoal text-4xl sm:text-6xl lg:text-7xl anim-hero">
            Frameless Shower Doors NYC
          </h1>
          <p className="mt-6 text-charcoal/60 text-base sm:text-lg leading-relaxed max-w-xl mx-auto anim-fade-up d2">
            Custom-measured, precision-fabricated frameless glass doors installed across all five boroughs. Premium hardware, expert fitting, no shortcuts.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 anim-fade-up d3">
            <Link href="/contact/" className="btn-pill btn-primary px-8 sm:px-10 py-3.5 text-sm">
              Get a Free Estimate
            </Link>
            <a href="tel:+13329993846" className="btn-pill btn-outline px-8 sm:px-10 py-3.5 text-sm">
              Call (332) 999-3846
            </a>
          </div>
        </div>
      </section>

      {/* ═══ TRUST STRIP ═══ */}
      <section className="bg-cream-light py-6 sm:py-8 border-y border-charcoal/[0.04]">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 flex flex-wrap justify-center gap-x-8 sm:gap-x-12 gap-y-2 text-charcoal/40 text-[12px] sm:text-[13px] font-medium tracking-wider uppercase">
          <span>200+ NYC Installs</span>
          <span className="hidden sm:inline">·</span>
          <span>Licensed & Insured</span>
          <span className="hidden sm:inline">·</span>
          <span>COI Available</span>
          <span className="hidden sm:inline">·</span>
          <span>Free Estimates</span>
        </div>
      </section>

      {/* ═══ WHAT WE INSTALL ═══ */}
      <section className="bg-cream py-20 sm:py-32">
        <div className="max-w-5xl mx-auto px-6 sm:px-10">
          <div className="max-w-2xl mb-14 sm:mb-20">
            <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">What We Install</p>
            <h2 className="heading-serif text-charcoal text-3xl sm:text-5xl">
              Every configuration, any bathroom.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {[
              { t: 'Single Swing Door', d: 'The most popular configuration. A single tempered glass panel on pivot or continuous hinges. Clean, minimal, opens inward or outward.', img: '/editorial/configurations/single-swing-door.jpg', alt: 'Single swing frameless shower door with satin brass hinges and handle' },
              { t: 'Door + Fixed Panel', d: 'Ideal for wider openings. One swinging door plus a stationary glass panel, connected with a glass-to-glass hinge or U-channel.', img: '/editorial/configurations/door-fixed-panel.jpg', alt: 'Frameless shower door with fixed glass panel and satin brass hardware' },
              { t: 'Sliding Bypass Doors', d: 'Two panels on a track — one slides behind the other. Perfect for tub-shower combos where swing clearance is limited.', img: '/editorial/configurations/sliding-bypass-doors.jpg', alt: 'Sliding bypass frameless shower doors with satin brass barn-door track' },
              { t: 'Neo-Angle Enclosures', d: 'Three glass panels forming a corner entry. Fits non-standard or angled shower bases common in older NYC buildings.', img: '/editorial/configurations/neo-angle-enclosure.jpg', alt: 'Neo-angle frameless glass shower enclosure with brass clamps — top view' },
              { t: '90° Corner Enclosures', d: 'Two glass walls meeting at a right angle with a door panel. A true luxury look for built-in shower niches.', img: '/editorial/configurations/90-corner-enclosure.jpg', alt: '90-degree corner frameless glass enclosure with satin brass glass-to-glass hinge' },
              { t: 'Walk-In / Open Entry', d: 'A single fixed panel with no door — the "wet room" look. Increasingly popular in high-end NYC bathroom renovations.', img: '/editorial/configurations/walk-in-panel.jpg', alt: 'Walk-in frameless glass shower panel with satin brass wall clamps' },
            ].map((item, i) => (
              <div key={item.t} className="glass-card overflow-hidden card-lift">
                <div className="aspect-[16/10] overflow-hidden bg-cream">
                  <img
                    src={item.img}
                    alt={item.alt}
                    className="w-full h-full object-cover mix-blend-multiply"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="font-serif text-charcoal text-lg sm:text-xl mb-2">{item.t}</h3>
                  <p className="text-warm text-[14px] sm:text-[15px] leading-relaxed">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ GLASS & HARDWARE ═══ */}
      <section className="bg-cream-light py-20 sm:py-32">
        <div className="max-w-5xl mx-auto px-6 sm:px-10">
          <div className="max-w-2xl mb-14 sm:mb-20">
            <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Materials</p>
            <h2 className="heading-serif text-charcoal text-3xl sm:text-5xl">
              Glass thickness & hardware finishes.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Glass */}
            <div>
              <h3 className="font-serif text-charcoal text-2xl mb-6">Glass Options</h3>
              <div className="space-y-6">
                <div className="glass-card p-6">
                  <div className="flex items-baseline justify-between mb-2">
                    <h4 className="font-semibold text-charcoal text-[15px]">3/8″ (10mm) Tempered Glass</h4>
                    <span className="text-orange text-xs font-medium tracking-wide uppercase">Standard</span>
                  </div>
                  <p className="text-warm text-[14px] leading-relaxed">The industry standard for residential frameless doors. Strong, safe, and cost-effective. Works well for single-door and door-plus-panel configurations in most NYC bathrooms.</p>
                </div>
                <div className="glass-card p-6">
                  <div className="flex items-baseline justify-between mb-2">
                    <h4 className="font-semibold text-charcoal text-[15px]">1/2″ (12mm) Tempered Glass</h4>
                    <span className="text-orange text-xs font-medium tracking-wide uppercase">Premium</span>
                  </div>
                  <p className="text-warm text-[14px] leading-relaxed">Thicker, heavier, and more substantial. Best for large panels, full enclosures, and luxury renovations where you want maximum weight and presence. Requires heavier-duty hardware.</p>
                </div>
                <div className="mt-4">
                  <p className="text-warm text-[14px] leading-relaxed"><strong className="text-charcoal">Glass types:</strong> Clear, ultra-clear (low-iron), frosted, rain, and acid-etched. All tempered safety glass that meets ANSI Z97.1 standards.</p>
                </div>
              </div>
            </div>

            {/* Hardware */}
            <div>
              <h3 className="font-serif text-charcoal text-2xl mb-6">Hardware Finishes</h3>
              <div className="space-y-4">
                {[
                  { finish: 'Chrome', note: 'Timeless, easy to match. The most popular choice for NYC apartments. Extremely durable.' },
                  { finish: 'Brushed Nickel', note: 'Warm silver tone that hides water spots and fingerprints. Great for busy bathrooms.' },
                  { finish: 'Matte Black', note: 'Bold, modern, trending in NYC renovations. Pairs well with white tile and marble.' },
                  { finish: 'Satin Brass', note: 'Warm gold tone that elevates any bathroom. Growing fast in popularity for luxury builds.' },
                  { finish: 'Polished Brass', note: 'Classic luxury look. Works well in traditional and pre-war styled bathrooms.' },
                  { finish: 'Oil-Rubbed Bronze', note: 'Deep, rich brown with copper undertones. Ideal for rustic or transitional designs.' },
                ].map((h) => (
                  <div key={h.finish} className="flex gap-4 items-start">
                    <span className="text-orange mt-0.5 shrink-0 text-sm">✓</span>
                    <div>
                      <span className="font-medium text-charcoal text-[14px]">{h.finish}</span>
                      <span className="text-warm text-[14px]"> — {h.note}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-warm text-[14px] leading-relaxed">All hardware is commercial-grade with corrosion-resistant coatings. Hinges, clamps, handles, and towel bars are available in matching finishes for a unified look.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CO-OP / CONDO SECTION ═══ */}
      <section className="bg-cream py-20 sm:py-32">
        <div className="max-w-5xl mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="rounded-lg overflow-hidden bg-cream-dark order-2 lg:order-1">
              <img src="/gallery/project-shower-1.jpg" alt="Frameless shower door installed in NYC apartment" className="w-full h-auto" loading="lazy" />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">NYC Building Ready</p>
              <h2 className="heading-serif text-charcoal text-3xl sm:text-4xl mb-6">
                Co-op & condo install realities.
              </h2>
              <p className="text-warm text-[15px] leading-relaxed mb-6">
                Installing glass in a NYC apartment building isn&apos;t the same as a house. We&apos;ve done it over 200 times and handle the logistics that other installers overlook.
              </p>
              <div className="space-y-4">
                {[
                  { t: 'Certificate of Insurance (COI)', d: 'We provide COIs naming your building as additional insured — required by most co-op and condo boards before any work can begin.' },
                  { t: 'Elevator & Freight Coordination', d: 'Large glass panels need freight elevator access. We coordinate with your super or management company to reserve elevator time on install day.' },
                  { t: 'Quiet Hours & Building Rules', d: 'Most NYC buildings restrict work to weekday business hours. We schedule around your building\'s specific rules — no surprises, no complaints.' },
                  { t: 'Doorman & Access Protocols', d: 'We arrive with proper identification, check in with the front desk, and follow all building access procedures. Professional from first impression to last.' },
                ].map((item) => (
                  <div key={item.t} className="glass-card p-4 sm:p-5">
                    <h3 className="font-semibold text-charcoal text-[14px] mb-1">{item.t}</h3>
                    <p className="text-warm text-[13px] sm:text-[14px] leading-relaxed">{item.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TIMELINE ═══ */}
      <section className="bg-cream-light py-20 sm:py-32">
        <div className="max-w-3xl mx-auto px-6 sm:px-10">
          <div className="text-center mb-14 sm:mb-20">
            <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Our Process</p>
            <h2 className="heading-serif text-charcoal text-3xl sm:text-5xl">
              Measure → fabricate → install.
            </h2>
          </div>

          <div className="space-y-0">
            {[
              { step: '01', t: 'Free In-Home Measurement', time: 'Day 1', d: 'We visit your bathroom, take precision measurements with digital templates, discuss glass type and hardware options, and provide a quote — usually on the same visit. Takes about 30 minutes.' },
              { step: '02', t: 'Custom Fabrication', time: '5–7 Business Days', d: 'Your glass is cut to exact specifications at our fabrication partner. Every panel is tempered, polished, and inspected before delivery. No stock sizes — everything is custom.' },
              { step: '03', t: 'Professional Installation', time: '2–4 Hours', d: 'Our team arrives with the glass, hardware, and all tools. We install, seal, align, and test everything. We leave your bathroom spotless and ready to use the same day (silicone needs 24 hours to fully cure).' },
            ].map((s, i) => (
              <div key={s.step} className="flex gap-5 sm:gap-8 py-8 sm:py-10 border-b border-charcoal/[0.06] last:border-b-0">
                <div className="shrink-0">
                  <span className="text-charcoal/10 font-serif text-4xl sm:text-5xl leading-none">{s.step}</span>
                </div>
                <div>
                  <div className="flex flex-wrap items-baseline gap-2 sm:gap-3 mb-2">
                    <h3 className="font-serif text-charcoal text-lg sm:text-xl">{s.t}</h3>
                    <span className="text-orange/60 text-xs font-medium tracking-wide uppercase">{s.time}</span>
                  </div>
                  <p className="text-warm text-[14px] sm:text-[15px] leading-relaxed">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ LEAK PREVENTION ═══ */}
      <section className="bg-cream py-20 sm:py-32">
        <div className="max-w-3xl mx-auto px-6 sm:px-10">
          <div className="max-w-2xl mb-14">
            <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Expert Installation</p>
            <h2 className="heading-serif text-charcoal text-3xl sm:text-5xl">
              How we prevent leaks.
            </h2>
            <p className="mt-5 text-warm text-[15px] leading-relaxed">
              The most common complaint about frameless shower doors is leaking — and it&apos;s almost always caused by poor measurement or improper installation, not the glass itself. Here&apos;s how we eliminate the problem:
            </p>
          </div>

          <div className="space-y-6">
            {[
              { t: 'Precision templating to 1/16″', d: 'We don\'t guess measurements or use "standard" sizes. Every panel is measured with precision tools against your actual tile and walls — accounting for out-of-plumb walls (extremely common in NYC pre-war buildings).' },
              { t: 'Professional-grade silicone sealing', d: 'All glass-to-wall and glass-to-tile joints are sealed with clear, mold-resistant silicone. This creates a watertight barrier without visible bulky gaskets.' },
              { t: 'Proper glass-to-glass seals', d: 'Where panels meet, we use clear vinyl sweeps and drip rails along the bottom edge to redirect water inward, not onto your floor.' },
              { t: 'Slope and drain alignment', d: 'We check that your shower floor slopes correctly toward the drain before installing. If we spot a slope issue, we let you know before proceeding.' },
            ].map((item) => (
              <div key={item.t} className="flex gap-4 items-start">
                <span className="text-orange mt-1 shrink-0 text-sm">✓</span>
                <div>
                  <h3 className="font-medium text-charcoal text-[15px] mb-1">{item.t}</h3>
                  <p className="text-warm text-[14px] leading-relaxed">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PRICING ═══ */}
      <section className="bg-cream-light py-20 sm:py-32">
        <div className="max-w-3xl mx-auto px-6 sm:px-10">
          <div className="mb-14">
            <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Pricing</p>
            <h2 className="heading-serif text-charcoal text-3xl sm:text-5xl">
              Transparent pricing, no surprises.
            </h2>
            <p className="mt-5 text-warm text-[15px] leading-relaxed">
              Every shower is different, so we quote based on your exact measurements and preferences. Here are the main factors that affect your price:
            </p>
          </div>

          <div className="space-y-5">
            {[
              { factor: 'Glass Thickness', detail: '1/2″ glass costs more than 3/8″ — both in material and hardware (heavier glass needs sturdier hinges).' },
              { factor: 'Number of Panels', detail: 'A single door is less than a full 3-panel enclosure. More glass = more material and labor.' },
              { factor: 'Configuration', detail: 'Simple swing doors cost less than neo-angle or 90° corner enclosures that require multiple glass-to-glass connections.' },
              { factor: 'Hardware Finish', detail: 'Chrome and brushed nickel are standard-priced. Matte black, satin brass, and specialty finishes have a modest upcharge.' },
              { factor: 'Glass Type', detail: 'Clear glass is standard. Low-iron (ultra-clear), frosted, rain-textured, and acid-etched options add to the cost.' },
              { factor: 'Building Access', detail: 'Walk-up apartments in most of NYC don\'t add cost. Very high-floor co-ops or buildings with limited freight access may add a small logistics fee.' },
            ].map((item) => (
              <div key={item.factor} className="glass-card p-5 sm:p-6">
                <h3 className="font-semibold text-charcoal text-[14px] sm:text-[15px] mb-1">{item.factor}</h3>
                <p className="text-warm text-[13px] sm:text-[14px] leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 glass-card p-6 sm:p-8 text-center">
            <p className="font-serif text-charcoal text-xl sm:text-2xl mb-2">Typical range: $800 – $3,000+</p>
            <p className="text-warm text-[14px] mb-5">Based on configuration, glass, and hardware. Most NYC apartments fall in the $1,200–$2,000 range.</p>
            <Link href="/contact/" className="btn-pill btn-primary px-8 py-3 text-sm">
              Get Your Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ GALLERY PREVIEW ═══ */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="max-w-xl mb-12 sm:mb-16">
            <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Our Work</p>
            <h2 className="heading-serif text-charcoal text-3xl sm:text-4xl">
              Frameless shower doors we&apos;ve installed in NYC.
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3">
            {[
              { src: '/gallery/project-shower-1.jpg', alt: 'Frameless shower door installation Manhattan' },
              { src: '/gallery/project-shower-2.jpg', alt: 'Custom glass enclosure Brooklyn' },
              { src: '/gallery/dark-shower-1.jpg', alt: 'Dark glass shower enclosure NYC' },
              { src: '/gallery/project-shower-3.jpg', alt: 'Frameless enclosure NYC apartment' },
              { src: '/gallery/project-shower-5.jpg', alt: 'Glass shower panel Manhattan high-rise' },
              { src: '/gallery/project-shower-6.jpg', alt: 'Frameless door chrome hardware NYC' },
            ].map((img) => (
              <div key={img.src} className="gallery-item aspect-square bg-cream-dark">
                <img src={img.src} alt={img.alt} width={500} height={500} loading="lazy" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <div className="mt-8 sm:mt-10 text-center">
            <Link href="/gallery/" className="btn-pill btn-outline px-8 py-3 text-sm">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="bg-cream-light py-20 sm:py-32">
        <div className="max-w-2xl mx-auto px-6 sm:px-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="heading-serif text-charcoal text-3xl sm:text-5xl">
              Frequently asked questions.
            </h2>
          </div>
          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <details key={faq.q} className="group border-b border-charcoal/[0.06]">
                <summary className="flex items-start justify-between py-5 sm:py-6 cursor-pointer text-charcoal font-medium text-[14px] sm:text-[15px] hover:text-charcoal/70 transition-colors">
                  <span className="pr-4">{faq.q}</span>
                  <span className="ml-2 text-charcoal/20 text-xl transition-transform duration-300 group-open:rotate-45 shrink-0 mt-0.5">+</span>
                </summary>
                <p className="pb-5 sm:pb-6 text-warm text-[14px] sm:text-[15px] leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SERVICE AREAS ═══ */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 text-center">
          <p className="text-charcoal/30 text-[13px] font-medium tracking-widest uppercase mb-3">Serving All Five Boroughs</p>
          <p className="text-warm text-[15px] leading-relaxed max-w-xl mx-auto">
            We install frameless shower doors in Manhattan, Brooklyn, Queens, The Bronx, and Staten Island — plus parts of Long Island and Northern New Jersey.
          </p>
          <Link href="/service-areas/" className="inline-flex items-center gap-2 text-orange text-sm font-medium mt-4 hover:opacity-70 transition-opacity">
            View All Service Areas <span className="text-xs">→</span>
          </Link>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="relative overflow-hidden">
        <img src="/editorial/water-droplets.jpg" alt="Water on glass" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="relative bg-charcoal/70 py-20 sm:py-32">
          <div className="max-w-2xl mx-auto px-6 sm:px-10 text-center">
            <h2 className="heading-serif text-white text-3xl sm:text-5xl">
              Ready for frameless shower doors?
            </h2>
            <p className="mt-4 sm:mt-5 text-white/50 text-base sm:text-lg">
              Free estimate. No obligation. Most quotes delivered same day.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Link href="/contact/" className="btn-pill btn-primary px-8 sm:px-10 py-3.5 text-sm">
                Request an Estimate
              </Link>
              <a href="tel:+13329993846" className="btn-pill btn-outline-light px-8 sm:px-10 py-3.5 text-sm">
                Call (332) 999-3846
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
