import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Custom Shower Doors Manhattan',
  description: 'Custom shower doors for Manhattan apartments, condos, and brownstones, plus mirrors and related custom glass across NYC. Precise measurements, clean installs, COI ready, fast estimates.',
  alternates: { canonical: 'https://metroglasspro.com/' },
}

const reviews = [
  { name: 'Valeria H.', text: 'From start to finish, the team was professional, reliable, and did an excellent job. Could not be happier.' },
  { name: 'Irini T.', text: 'Amazing job with my shower door at a great price. Fast service, clean install, and way more affordable than other quotes.' },
  { name: 'Tomas M.', text: "MetroGlass Pro replaced my shower door and I'm very impressed with their work. The team was professional, on time, and the result is flawless." },
]

const faqs = [
  { q: 'How long does installation take?', a: 'Most installations take about 2 to 4 hours once the glass is ready. We measure first, custom fabricate, then schedule your install.' },
  { q: 'Do frameless shower doors leak?', a: 'Not when installed correctly. We use professional-grade silicone seals and precision-fit glass to eliminate gaps.' },
  { q: 'How much do frameless doors cost?', a: 'Custom frameless shower doors typically range from about $800 to $3,000 or more depending on glass thickness, hardware finish, and configuration. We provide free estimates.' },
  { q: 'Which areas do you serve?', a: 'Manhattan is our priority, and we also work across Brooklyn, Queens, The Bronx, and Staten Island. We support select projects on Long Island and in Northern New Jersey as well.' },
  { q: 'What glass options are available?', a: 'Clear, frosted, rain, and low-iron tempered glass in 3/8" and 1/2" thickness. Hardware in chrome, brushed nickel, matte black, satin brass, and more.' },
  { q: 'Are you licensed and insured?', a: 'Yes. MetroGlass Pro is fully licensed and insured in New York and complies with all NYC building codes.' },
]

const previewImages = [
  { src: '/gallery/project-shower-1.jpg', alt: 'Frameless shower door installation Manhattan' },
  { src: '/gallery/project-shower-2.jpg', alt: 'Custom glass enclosure Brooklyn' },
  { src: '/gallery/dark-shower-1.jpg', alt: 'Dark glass shower enclosure NYC' },
  { src: '/gallery/install-1.jpeg', alt: 'Shower door installation Queens' },
  { src: '/gallery/project-shower-3.jpg', alt: 'Frameless enclosure NYC apartment' },
  { src: '/gallery/mirror-1.jpg', alt: 'Mirror installation Brooklyn' },
]

const featuredGuides = [
  {
    title: '84 Clinton Shower Door Before and After',
    description: 'A Lower East Side project showing how the right sliding enclosure can finish a compact Manhattan bathroom.',
    href: '/projects/84-clinton-lower-east-side-shower-door-before-after/',
  },
  {
    title: '90° Corner Frameless Enclosure',
    description: 'Why the 90 degree corner layout is still the luxury standard for many built-in NYC showers.',
    href: '/projects/90-corner-enclosure-nyc/',
  },
  {
    title: 'Single Swing Door Guide',
    description: 'A practical guide to the most common frameless shower door configuration in city bathrooms.',
    href: '/projects/single-swing-door-nyc/',
  },
  {
    title: 'Co-op and Condo Installation',
    description: 'What building coordination, COIs, elevator rules, and scheduling really look like in Manhattan jobs.',
    href: '/projects/coop-condo-shower-door-installation-nyc/',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://metroglasspro.com/#business',
  name: 'MetroGlass Pro',
  description: 'Custom shower doors for Manhattan apartments, condos, and brownstones, plus mirrors and related custom glass across NYC.',
  url: 'https://metroglasspro.com',
  telephone: '+1-332-999-3846',
  email: 'operations@metroglasspro.com',
  logo: 'https://metroglasspro.com/assets/logo.png',
  image: 'https://metroglasspro.com/assets/og-default.jpg',
  areaServed: ['Manhattan', 'Brooklyn', 'Queens', 'Bronx', 'Staten Island'],
  priceRange: '$$',
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '09:00', closes: '14:00' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Custom Shower Door and Glass Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Frameless Shower Doors', url: 'https://metroglasspro.com/frameless-shower-doors-nyc/' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Shower Door Installation', url: 'https://metroglasspro.com/shower-door-installation-nyc/' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Shower Door Replacement', url: 'https://metroglasspro.com/shower-door-replacement-nyc/' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Shower Door Repair', url: 'https://metroglasspro.com/shower-door-repair-nyc/' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Mirrors', url: 'https://metroglasspro.com/custom-mirrors-nyc/' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Glass Partitions', url: 'https://metroglasspro.com/glass-partitions-nyc/' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Co-op and Condo Shower Door Installation', url: 'https://metroglasspro.com/projects/coop-condo-shower-door-installation-nyc/' } },
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
            Custom shower doors for Manhattan apartments, condos, and brownstones.
          </h1>
          <p className="mt-6 text-charcoal/60 text-lg sm:text-xl leading-relaxed max-w-xl mx-auto anim-fade-up d2">
            MetroGlass Pro is the premium middle ground for Manhattan buyers who want precise measurements, clean installs, and smooth building coordination without the distance of a large generic glass company.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4 anim-fade-up d3">
            <Link href="/contact/" className="btn-pill btn-primary px-10 py-3.5 text-sm">
              Get Shower Door Estimate
            </Link>
            <a href="sms:+13329993846?body=Hi%20MetroGlass%20Pro%2C%20I%20want%20a%20shower%20door%20quote%20and%20can%20send%20bathroom%20photos." className="btn-pill btn-outline px-10 py-3.5 text-sm">Text Bathroom Photos</a>
          </div>
        </div>
      </section>

      {/* ═══ 2. TRUST STRIP ═══ */}
      <section className="bg-cream-light py-8 border-y border-charcoal/[0.04]">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 flex flex-wrap justify-center gap-x-12 gap-y-3 text-charcoal/40 text-[13px] font-medium tracking-wider uppercase">
          <span>Precise Field Measurements</span>
          <span className="hidden sm:inline">·</span>
          <span>Clean Installs</span>
          <span className="hidden sm:inline">·</span>
          <span>COI Ready</span>
          <span className="hidden sm:inline">·</span>
          <span>Building Coordination</span>
          <span className="hidden sm:inline">·</span>
          <span>Fast Estimates</span>
        </div>
      </section>

      {/* ═══ 3. SERVICES ═══ */}
      <section className="bg-cream py-28 sm:py-36">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <div className="max-w-xl mb-20" data-reveal="fade-up">
            <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Our Services</p>
            <h2 className="heading-serif text-charcoal text-4xl sm:text-5xl">
              Known for shower doors. Trusted for the rest.
            </h2>
            <p className="mt-4 text-warm text-[15px] leading-relaxed">Shower doors are the flagship. Mirrors, partitions, repair work, and select railing projects support the same reputation for precision, cleanliness, and direct communication.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Shower Doors */}
            <Link href="/frameless-shower-doors-nyc/" className="group" data-reveal="fade-up" data-delay="100">
              <div className="aspect-[16/10] rounded-lg img-editorial mb-6">
                <img src="/editorial/shower-door.jpg" alt="Frameless shower door with gold hinges" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <h3 className="font-serif text-charcoal text-2xl mb-2">Frameless Shower Doors</h3>
              <p className="text-warm text-[15px] leading-relaxed">Custom shower doors for Manhattan apartments, co-ops, condos, and brownstones. Swing, sliding, pivot, and fixed panel layouts measured to the real room, not a stock opening.</p>
              <span className="inline-block mt-3 text-orange text-sm font-medium group-hover:opacity-70 transition-opacity">Learn more →</span>
            </Link>

            {/* Mirrors */}
            <Link href="/custom-mirrors-nyc/" className="group" data-reveal="fade-up" data-delay="200">
              <div className="aspect-[16/10] rounded-lg img-editorial mb-6">
                <img src="/editorial/mirror.jpg" alt="Custom beveled wall mirror" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <h3 className="font-serif text-charcoal text-2xl mb-2">Custom Mirrors</h3>
              <p className="text-warm text-[15px] leading-relaxed">Bathroom mirrors, vanity mirrors, and wall mirrors installed with the same careful measurement, clean lines, and detail driven finish work.</p>
              <span className="inline-block mt-3 text-orange text-sm font-medium group-hover:opacity-70 transition-opacity">Learn more →</span>
            </Link>

            {/* Partitions */}
            <Link href="/glass-partitions-nyc/" className="group" data-reveal="fade-up" data-delay="300">
              <div className="aspect-[16/10] rounded-lg img-editorial mb-6">
                <img src="/editorial/railing.jpg" alt="Glass stair railing with gold posts" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <h3 className="font-serif text-charcoal text-2xl mb-2">Glass Partitions</h3>
              <p className="text-warm text-[15px] leading-relaxed">Residential and boutique commercial partitions for projects that need clean lines, reliable coordination, and a polished finished look.</p>
              <span className="inline-block mt-3 text-orange text-sm font-medium group-hover:opacity-70 transition-opacity">Learn more →</span>
            </Link>

            {/* Repair */}
            <Link href="/shower-door-repair-nyc/" className="group" data-reveal="fade-up" data-delay="400">
              <div className="aspect-[16/10] rounded-lg img-editorial mb-6">
                <img src="/editorial/tools.jpg" alt="Premium glass installation tools" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <h3 className="font-serif text-charcoal text-2xl mb-2">Shower Door Repair</h3>
              <p className="text-warm text-[15px] leading-relaxed">Leak fixes, hardware issues, dragging doors, and bad install remediation for buyers who need honest guidance on whether the door should be repaired or replaced.</p>
              <span className="inline-block mt-3 text-orange text-sm font-medium group-hover:opacity-70 transition-opacity">Learn more →</span>
            </Link>
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
              Why Manhattan buyers choose us.
            </h2>
            <p className="mt-4 text-warm text-[15px] leading-relaxed">The best leads in Manhattan are rarely looking for the cheapest option. They want a company that is fast, careful, easy to coordinate with, and precise enough to protect the finished bathroom.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
            {[
              { n: '01', t: 'Precise Fit', d: 'We measure to the actual room, account for out of plumb walls, and build the enclosure around the bathroom you really have.' },
              { n: '02', t: 'Clean Install Standards', d: 'Protection down first, glass in carefully, bathroom left clean. Buyers notice this immediately, and designers remember it.' },
              { n: '03', t: 'Building Fluent', d: 'Co-op and condo rules, COIs, freight elevators, supers, quiet hours. We handle the coordination smaller installers often miss.' },
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

      {/* ═══ 5b. FEATURED GUIDES ═══ */}
      <section className="bg-cream-light py-20 sm:py-24 border-y border-charcoal/[0.04]">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <div className="max-w-2xl mb-12 anim-fade-up">
            <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Buyer Guides</p>
            <h2 className="heading-serif text-charcoal text-3xl sm:text-4xl">
              A few useful pages before you price the job.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {featuredGuides.map((guide, index) => (
              <Link key={guide.href} href={guide.href} className={`glass-card p-6 card-lift block anim-fade-up d${index + 1}`}>
                <h3 className="font-serif text-charcoal text-2xl mb-3">{guide.title}</h3>
                <p className="text-warm text-[15px] leading-relaxed">{guide.description}</p>
                <span className="inline-block mt-4 text-orange text-sm font-medium hover:opacity-70 transition-opacity">Read guide →</span>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center anim-fade-up">
            <Link href="/projects/" className="btn-pill btn-outline px-10 py-3.5 text-sm">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ 5c. FRAMELESS DOORS CTA ═══ */}
      <section className="bg-cream-light py-16 sm:py-20 border-y border-charcoal/[0.04]">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 text-center">
          <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Manhattan First</p>
          <h2 className="heading-serif text-charcoal text-3xl sm:text-4xl mb-4">
            Custom shower doors, building ready.
          </h2>
          <p className="text-warm text-[15px] leading-relaxed max-w-lg mx-auto mb-8">
            We work in co-ops, condos, brownstones, and high rises. That means precise measurements, clean installs, direct communication, and smooth building coordination.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link href="/frameless-shower-doors-nyc/" className="btn-pill btn-primary px-8 sm:px-10 py-3.5 text-sm">
              Explore Shower Doors
            </Link>
            <Link href="/service-areas/manhattan/" className="btn-pill btn-outline px-8 sm:px-10 py-3.5 text-sm">
              See Manhattan Service
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ 6. REVIEWS ═══ */}
      <section className="bg-cream-light py-28 sm:py-36">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <div className="text-center mb-16 anim-fade-up">
            <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Testimonials</p>
            <h2 className="heading-serif text-charcoal text-4xl sm:text-5xl">
              Trusted by homeowners, renovators, and designers across NYC.
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
              Ready to price your shower door?
            </h2>
            <p className="mt-5 text-white/50 text-lg anim-fade-up d2">
              Send bathroom photos or request a fast estimate. Include your neighborhood and building type so we can point you in the right direction faster.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4 anim-fade-up d3">
              <Link href="/contact/" className="btn-pill btn-primary px-10 py-3.5 text-sm">
                Get Shower Door Estimate
              </Link>
              <a href="sms:+13329993846?body=Hi%20MetroGlass%20Pro%2C%20I%20want%20a%20quote%20and%20can%20send%20bathroom%20photos." className="btn-pill btn-outline-light px-10 py-3.5 text-sm">Text Bathroom Photos</a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 9. SERVICE AREAS ═══ */}
      <section className="bg-cream py-12 border-t border-charcoal/[0.04]">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 text-center">
          <p className="text-charcoal/30 text-[13px] font-medium tracking-widest uppercase mb-2">Serving</p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm">
            <Link href="/service-areas/manhattan/" className="text-charcoal/60 hover:text-charcoal transition-colors">Manhattan</Link>
            <span className="text-charcoal/25">·</span>
            <Link href="/service-areas/brooklyn/" className="text-charcoal/60 hover:text-charcoal transition-colors">Brooklyn</Link>
            <span className="text-charcoal/25">·</span>
            <Link href="/service-areas/queens/" className="text-charcoal/60 hover:text-charcoal transition-colors">Queens</Link>
            <span className="text-charcoal/25">·</span>
            <Link href="/service-areas/bronx/" className="text-charcoal/60 hover:text-charcoal transition-colors">The Bronx</Link>
            <span className="text-charcoal/25">·</span>
            <Link href="/service-areas/staten-island/" className="text-charcoal/60 hover:text-charcoal transition-colors">Staten Island</Link>
          </div>
          <p className="text-charcoal/40 text-xs mt-1">Also serving Long Island & Northern New Jersey</p>
          <Link href="/service-areas/" className="inline-flex items-center gap-2 text-orange text-sm font-medium mt-3 hover:opacity-70 transition-opacity">
            Explore Service Areas <span className="text-xs">→</span>
          </Link>
        </div>
      </section>
    </>
  )
}
