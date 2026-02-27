import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'MetroGlassPro — Custom Shower Glass Installation NYC',
  description: 'MetroGlassPro installs custom frameless shower doors and glass enclosures across NYC. Free estimates. Licensed & insured.',
  alternates: { canonical: 'https://metroglasspro.com/' },
}

const reviews = [
  { name: 'Valeria H.', text: 'From start to finish, the team was professional, reliable, and did an excellent job. Could not be happier.' },
  { name: 'Irini T.', text: 'Amazing job with my shower door at a great price. Fast service, clean install, and way more affordable than other quotes.' },
  { name: 'Ledion L.', text: 'Quick, efficient, very clean job. Shower door and mirror done. The price was very reasonable. Highly recommend.' },
]

const faqs = [
  { q: 'How long does installation take?', a: 'Most installations take 2–4 hours once the glass is ready. We measure first, custom-fabricate (5–7 business days), then schedule your install.' },
  { q: 'Do frameless shower doors leak?', a: 'Not when installed correctly. We use professional-grade silicone seals and precision-fit glass to eliminate gaps.' },
  { q: 'How much do frameless doors cost?', a: 'Custom frameless shower doors typically range from $800 to $3,000+ depending on glass thickness, hardware finish, and configuration. We provide free estimates.' },
  { q: 'Which areas do you serve?', a: 'All five NYC boroughs — Manhattan, Brooklyn, Queens, The Bronx, and Staten Island. We also serve parts of Long Island and Northern New Jersey.' },
  { q: 'What glass options are available?', a: 'Clear, frosted, rain, and low-iron tempered glass in 3/8" and 1/2" thickness. Hardware in chrome, brushed nickel, matte black, satin brass, and more.' },
  { q: 'Are you licensed and insured?', a: 'Yes. MetroGlassPro is fully licensed and insured in New York and complies with all NYC building codes.' },
]

const previewImages = [
  { src: '/gallery/project-shower-1.jpg', alt: 'Frameless shower door installation Manhattan' },
  { src: '/gallery/project-shower-2.jpg', alt: 'Custom glass enclosure Brooklyn' },
  { src: '/gallery/dark-shower-1.jpg', alt: 'Dark glass shower enclosure NYC' },
  { src: '/gallery/install-1.jpeg', alt: 'Shower door installation Queens' },
  { src: '/gallery/project-shower-3.jpg', alt: 'Frameless enclosure NYC apartment' },
  { src: '/gallery/mirror-1.jpg', alt: 'Mirror installation Brooklyn' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'MetroGlassPro',
  description: 'Custom frameless shower doors, glass enclosures, mirrors, and glass installations for NYC homes and businesses.',
  url: 'https://metroglasspro.com',
  telephone: '+1-332-999-3846',
  email: 'operations@metroglasspro.com',
  logo: 'https://metroglasspro.com/assets/logo.png',
  image: 'https://metroglasspro.com/assets/og-default.jpg',
  address: { '@type': 'PostalAddress', addressLocality: 'New York', addressRegion: 'NY', addressCountry: 'US' },
  areaServed: [
    { '@type': 'City', name: 'New York', addressRegion: 'NY' },
  ],
  priceRange: '$$',
  openingHours: ['Mo-Fr 08:00-18:00', 'Sa 09:00-14:00'],
  sameAs: [
    'https://www.google.com/maps/place/MetroGlassPro',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Glass Installation Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Frameless Shower Doors', url: 'https://metroglasspro.com/frameless-shower-doors-nyc/' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Shower Door Installation', url: 'https://metroglasspro.com/shower-door-installation-nyc/' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Shower Door Replacement', url: 'https://metroglasspro.com/shower-door-replacement-nyc/' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Mirrors & Glass' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Glass Partitions & Railings' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Glass Repair' } },
    ],
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ═══ 1. HERO ═══ */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/editorial/hero.jpg')" }}
        />
        {/* Blur + cream overlay */}
        <div className="absolute inset-0 backdrop-blur-[2px] bg-cream/40" />

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-10 text-center py-24 sm:py-32">
          <h1 className="heading-serif text-charcoal text-5xl sm:text-7xl lg:text-[88px] anim-hero">
            Experience the finest craftsmanship in architectural glass.
          </h1>
          <p className="mt-6 text-charcoal/60 text-lg sm:text-xl leading-relaxed max-w-xl mx-auto anim-fade-up d2">
            MetroGlass Pro is elevating spaces, delivering bespoke glass installations and premium hardware for New York City.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4 anim-fade-up d3">
            <Link href="/contact/" className="btn-pill btn-primary px-10 py-3.5 text-sm">
              Request an Estimate
            </Link>
            <Link href="/gallery/" className="btn-pill btn-outline px-10 py-3.5 text-sm">
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ 2. TRUST STRIP ═══ */}
      <section className="bg-cream-light py-8 border-y border-charcoal/[0.04]">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 flex flex-wrap justify-center gap-x-12 gap-y-3 text-charcoal/40 text-[13px] font-medium tracking-wider uppercase">
          <span>Licensed & Insured</span>
          <span className="hidden sm:inline">·</span>
          <span>200+ Projects</span>
          <span className="hidden sm:inline">·</span>
          <span>Same-Week Scheduling</span>
          <span className="hidden sm:inline">·</span>
          <span>Free Estimates</span>
        </div>
      </section>

      {/* ═══ 3. SERVICES ═══ */}
      <section className="bg-cream py-28 sm:py-36">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <div className="max-w-xl mb-20" data-reveal="fade-up">
            <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Our Services</p>
            <h2 className="heading-serif text-charcoal text-4xl sm:text-5xl">
              Precision glass for every space.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Shower Doors */}
            <Link href="/frameless-shower-doors-nyc/" className="group" data-reveal="fade-up" data-delay="100">
              <div className="aspect-[16/10] rounded-lg img-editorial mb-6">
                <img src="/editorial/shower-door.jpg" alt="Frameless shower door with gold hinges" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <h3 className="font-serif text-charcoal text-2xl mb-2">Frameless Shower Doors</h3>
              <p className="text-warm text-[15px] leading-relaxed">Custom-measured 3/8″–1/2″ tempered glass. Swing, sliding, pivot, and neo-angle configurations for any bathroom.</p>
              <span className="inline-block mt-3 text-orange text-sm font-medium group-hover:opacity-70 transition-opacity">Learn more →</span>
            </Link>

            {/* Mirrors */}
            <div className="group" data-reveal="fade-up" data-delay="200">
              <div className="aspect-[16/10] rounded-lg img-editorial mb-6">
                <img src="/editorial/mirror.jpg" alt="Custom beveled wall mirror" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <h3 className="font-serif text-charcoal text-2xl mb-2">Custom Mirrors & Glass</h3>
              <p className="text-warm text-[15px] leading-relaxed">Wall mirrors, vanity mirrors, gym mirrors, glass shelving, and backsplashes. Cut to any size and professionally installed.</p>
            </div>

            {/* Railings */}
            <div className="group" data-reveal="fade-up" data-delay="300">
              <div className="aspect-[16/10] rounded-lg img-editorial mb-6">
                <img src="/editorial/railing.jpg" alt="Glass stair railing with gold posts" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <h3 className="font-serif text-charcoal text-2xl mb-2">Glass Partitions & Railings</h3>
              <p className="text-warm text-[15px] leading-relaxed">Interior dividers, office partitions, glass stair railings, and balcony glass. Structural, modern, beautiful.</p>
            </div>

            {/* Repair */}
            <div className="group" data-reveal="fade-up" data-delay="400">
              <div className="aspect-[16/10] rounded-lg img-editorial mb-6">
                <img src="/editorial/tools.jpg" alt="Premium glass installation tools" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <h3 className="font-serif text-charcoal text-2xl mb-2">Glass Repair & Commercial</h3>
              <p className="text-warm text-[15px] leading-relaxed">Broken hinges, cracked panels, failed seals. Plus hotel, apartment building, and contractor partnerships across NYC.</p>
            </div>
          </div>

          <div className="mt-14 text-center anim-fade-up d5">
            <Link href="/services/" className="btn-pill btn-outline px-10 py-3.5 text-sm">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ 4. WHY US ═══ */}
      <section className="bg-cream-light py-28 sm:py-36">
        <div className="max-w-5xl mx-auto px-6 sm:px-10">
          <div className="max-w-xl mb-20" data-reveal="fade-up">
            <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Why MetroGlass Pro</p>
            <h2 className="heading-serif text-charcoal text-4xl sm:text-5xl">
              Built on precision, not promises.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
            {[
              { n: '01', t: 'Precision Measurements', d: 'Every job templated to 1/16 inch. No gaps, no leaks. Every panel custom-fabricated to your exact bathroom dimensions.' },
              { n: '02', t: 'Premium Materials', d: '3/8" and 1/2" tempered safety glass. Hardware in chrome, brushed nickel, matte black, satin brass, and more.' },
              { n: '03', t: 'Clean, Fast Installs', d: 'Most jobs completed in 2–4 hours. We leave your space spotless. Same-week scheduling available.' },
            ].map((item, i) => (
              <div key={item.n} className={`anim-fade-up d${(i + 1) * 2}`}>
                <span className="text-charcoal/10 font-serif text-6xl leading-none">{item.n}</span>
                <h3 className="font-serif text-charcoal text-xl mt-4 mb-3">{item.t}</h3>
                <p className="text-warm text-[15px] leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 5. GALLERY PREVIEW ═══ */}
      <section className="bg-cream py-28 sm:py-36">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="max-w-xl mb-16" data-reveal="fade-up">
            <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Recent Projects</p>
            <h2 className="heading-serif text-charcoal text-4xl sm:text-5xl">
              Our work speaks.
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {previewImages.map((img, i) => (
              <div key={img.src} className={`gallery-item aspect-square bg-cream-dark anim-scale-in d${Math.min(i + 1, 6)}`}>
                <img src={img.src} alt={img.alt} width={600} height={600} loading="lazy" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <div className="mt-12 text-center anim-fade-up">
            <Link href="/gallery/" className="btn-pill btn-outline px-10 py-3.5 text-sm">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ 5b. FRAMELESS DOORS CTA ═══ */}
      <section className="bg-cream-light py-16 sm:py-20 border-y border-charcoal/[0.04]">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 text-center">
          <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Our Specialty</p>
          <h2 className="heading-serif text-charcoal text-3xl sm:text-4xl mb-4">
            Custom frameless shower doors for NYC.
          </h2>
          <p className="text-warm text-[15px] leading-relaxed max-w-lg mx-auto mb-8">
            Learn about glass options, hardware finishes, co-op &amp; condo installation, pricing, and our process.
          </p>
          <Link href="/frameless-shower-doors-nyc/" className="btn-pill btn-primary px-8 sm:px-10 py-3.5 text-sm">
            Explore Frameless Doors
          </Link>
        </div>
      </section>

      {/* ═══ 6. REVIEWS ═══ */}
      <section className="bg-cream-light py-28 sm:py-36">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <div className="text-center mb-16 anim-fade-up">
            <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Testimonials</p>
            <h2 className="heading-serif text-charcoal text-4xl sm:text-5xl">
              Trusted by homeowners across NYC.
            </h2>
          </div>
          <div className="space-y-12">
            {reviews.map((r, i) => (
              <div key={r.name} className={`text-center anim-fade-up d${(i + 1) * 2}`}>
                <p className="font-serif text-charcoal text-2xl sm:text-3xl leading-snug italic max-w-2xl mx-auto">
                  &ldquo;{r.text}&rdquo;
                </p>
                <p className="mt-5 text-warm text-sm font-medium tracking-wide uppercase">{r.name}</p>
                <p className="text-orange/60 text-lg tracking-[4px] mt-1" aria-label="5 out of 5 stars" role="img">★★★★★</p>
              </div>
            ))}
          </div>
          <div className="mt-14 text-center anim-fade-up">
            <Link href="/reviews/" className="btn-pill btn-outline px-10 py-3.5 text-sm">
              Read All Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ 7. FAQ ═══ */}
      <section className="bg-cream py-28 sm:py-36">
        <div className="max-w-2xl mx-auto px-6 sm:px-10">
          <div className="text-center mb-16 anim-fade-up">
            <h2 className="heading-serif text-charcoal text-4xl sm:text-5xl">
              Common questions.
            </h2>
          </div>
          <div className="space-y-0 anim-fade-up d2">
            {faqs.map((faq, i) => (
              <details key={faq.q} className="group border-b border-charcoal/[0.06]">
                <summary className="flex items-center justify-between py-6 cursor-pointer text-charcoal font-medium text-[15px] hover:text-charcoal/70 transition-colors">
                  <span>{faq.q}</span>
                  <span className="ml-4 text-charcoal/20 text-xl transition-transform duration-300 group-open:rotate-45">+</span>
                </summary>
                <p className="pb-6 text-warm text-[15px] leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 8. CTA ═══ */}
      <section className="relative overflow-hidden">
        <img
          src="/editorial/water-droplets.jpg"
          alt="Water droplets on glass surface"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="relative bg-charcoal/70 py-28 sm:py-36">
          <div className="max-w-2xl mx-auto px-6 sm:px-10 text-center">
            <h2 className="heading-serif text-white text-4xl sm:text-5xl anim-fade-up">
              Ready for your new shower?
            </h2>
            <p className="mt-5 text-white/50 text-lg anim-fade-up d2">
              Get a free, no-obligation estimate. Most quotes delivered within hours.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4 anim-fade-up d3">
              <Link href="/contact/" className="btn-pill btn-primary px-10 py-3.5 text-sm">
                Request an Estimate
              </Link>
              <a href="tel:+13329993846" className="btn-pill btn-outline-light px-10 py-3.5 text-sm">
                Call (332) 999-3846
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 9. SERVICE AREAS ═══ */}
      <section className="bg-cream py-12 border-t border-charcoal/[0.04]">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 text-center">
          <p className="text-charcoal/30 text-[13px] font-medium tracking-widest uppercase mb-2">Serving</p>
          <p className="text-charcoal/60 text-sm">
            Manhattan · Brooklyn · Queens · The Bronx · Staten Island
          </p>
          <p className="text-charcoal/40 text-xs mt-1">Also serving Long Island & Northern New Jersey</p>
          <Link href="/service-areas/" className="inline-flex items-center gap-2 text-orange text-sm font-medium mt-3 hover:opacity-70 transition-opacity">
            View All Areas <span className="text-xs">→</span>
          </Link>
        </div>
      </section>
    </>
  )
}
