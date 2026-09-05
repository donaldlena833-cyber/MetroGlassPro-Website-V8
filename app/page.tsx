import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ServiceDirectory from '@/components/ServiceDirectory'
import ShowerDoorQuickAnswers from '@/components/ShowerDoorQuickAnswers'
import { showerDoorLeakAnswer, showerDoorPriceSummary } from '@/content/shower-door-facts'

export const metadata: Metadata = {
  title: 'Shower Doors, Mirrors & Custom Glass NYC',
  description: 'NYC shower doors, glazing, glass railings, custom mirrors, partitions, and glass repair. MetroGlass Pro serves all five boroughs. Send photos for an estimate.',
  alternates: { canonical: 'https://metroglasspro.com/' },
}

const reviews = [
  { name: 'Valeria H.', text: 'From start to finish, the team was professional, reliable, and did an excellent job. Could not be happier.' },
  { name: 'Irini T.', text: 'Amazing job with my shower door at a great price. Fast service, clean install, and way more affordable than other quotes.' },
  { name: 'Tomas M.', text: "MetroGlass Pro replaced my shower door and I'm very impressed with their work. The team was professional, on time, and the result is flawless." },
]

const faqs = [
  { q: 'What glass services does MetroGlass Pro offer?', a: 'We install shower doors, glazing, glass railings, custom mirrors, and interior glass partitions, and assess glass repair and replacement needs across NYC. Send your project type, location, photos, and any plans for an estimate.' },
  { q: 'How long does shower door installation take?', a: 'Most shower door installations take about 2 to 4 hours once the glass is ready. Other glass projects have schedules based on their scope, fabrication, and site access. We confirm timing after reviewing the project.' },
  { q: 'Do frameless shower doors leak?', a: showerDoorLeakAnswer },
  { q: 'How much do frameless doors cost?', a: showerDoorPriceSummary },
  { q: 'Which areas do you serve?', a: 'Manhattan is our priority, and we also work across Brooklyn, Queens, The Bronx, and Staten Island. We support select projects on Long Island and in Northern New Jersey as well.' },
  { q: 'What glass options are available for shower doors?', a: 'Clear, frosted, rain, and low-iron tempered glass in 3/8" and 1/2" thickness. Hardware in chrome, brushed nickel, matte black, satin brass, and more.' },
  { q: 'Can you provide a COI for my building?', a: 'A certificate of insurance is available on request. Send the building management requirements, certificate holder details, and any elevator or work-hour rules when requesting your estimate.' },
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
  { title: 'Custom Mirrors for Manhattan Apartments', description: 'Plan the wall coverage, fixtures, edge finish, and delivery route.', href: '/blog/custom-mirrors-manhattan-apartment-guide/' },
  { title: 'Office Glass Partition Planning', description: 'Coordinate room layout, privacy, doors, and work in an occupied office.', href: '/blog/office-glass-partitions-manhattan-planning-guide/' },
  {
    title: '84 Clinton Shower Door Before and After',
    description: 'A Lower East Side project showing how the right sliding enclosure can finish a compact Manhattan bathroom.',
    href: '/projects/84-clinton-lower-east-side-shower-door-before-after/',
  },
  {
    title: 'Frameless Shower Door Cost in NYC',
    description: 'The buyer guide for glass thickness, hardware, layout, building coordination, and quote factors.',
    href: '/projects/frameless-shower-door-cost-nyc/',
  },
  {
    title: 'CRL Geneva vs Vienna Hinges',
    description: 'Compare CRL Geneva and Vienna hinges, including mounting style and the hardware details to discuss before ordering glass.',
    href: '/projects/crl-geneva-vs-vienna-hinges/',
  },
  {
    title: 'Co-op and Condo Installation',
    description: 'What building coordination, COIs, elevator rules, and scheduling really look like in Manhattan jobs.',
    href: '/projects/coop-condo-shower-door-installation-nyc/',
  },
]

const buyerPaths = [
  { href: '/frameless-shower-doors-nyc/', title: 'Frameless Shower Doors', desc: 'Glass thickness, hardware finishes, fixed panels, swing doors, sliders, and custom enclosure planning.' },
  { href: '/shower-door-installation-nyc/', title: 'Shower Door Installation', desc: 'What to send before a quote, how field measuring works, and what install day should include.' },
  { href: '/shower-door-replacement-nyc/', title: 'Shower Door Replacement', desc: 'When an older or leaking enclosure is better replaced than patched again.' },
  { href: '/shower-door-repair-nyc/', title: 'Shower Door Repair', desc: 'Leak, drag, sweep, hinge, roller, and bad-install symptoms that need a clear diagnosis.' },
  { href: '/service-areas/manhattan/', title: 'Manhattan Bathrooms', desc: 'Co-op, condo, high-rise, and brownstone logistics for tight apartment bathrooms.' },
  { href: '/service-areas/brooklyn/', title: 'Brooklyn Projects', desc: 'Brownstone, condo, and renovation access planning for shower glass and mirrors.' },
  { href: '/service-areas/queens/', title: 'Queens Projects', desc: 'Layout and access planning for apartments, houses, and multi-family homes.' },
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

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ═══ 1. HERO ═══ */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/editorial/hero.jpg"
          alt="Custom frameless shower door installed in a New York City bathroom"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Blur + white cream overlay with a restrained glass tint */}
        <div className="absolute inset-0 backdrop-blur-[2px] bg-[linear-gradient(120deg,rgba(255,253,248,0.82),rgba(247,242,233,0.68)_58%,rgba(220,233,237,0.32))]" />

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-10 text-center py-24 sm:py-32">
          <h1 className="heading-serif text-charcoal text-5xl sm:text-7xl lg:text-[88px] anim-hero">
            Custom shower doors and glass installation in NYC.
          </h1>
          <p className="mt-6 text-charcoal/60 text-lg sm:text-xl leading-relaxed max-w-xl mx-auto anim-fade-up d2">
            Shower doors, glazing, glass railings, mirrors, partitions, and glass repair. MetroGlass Pro works with homeowners, businesses, designers, and contractors across all five boroughs, with direct estimates and building coordination.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4 anim-fade-up d3">
            <Link href="/contact/" className="btn-pill btn-primary px-10 py-3.5 text-sm">
              Get Glass Project Estimate
            </Link>
            <a href="sms:+13329993846?body=Hi%20MetroGlass%20Pro%2C%20I%20want%20a%20glass%20project%20quote%20and%20can%20send%20project%20photos." className="btn-pill btn-outline px-10 py-3.5 text-sm">Text Project Photos</a>
          </div>
        </div>
      </section>

      {/* ═══ 2. TRUST STRIP ═══ */}
      <section className="bg-cream-light py-8 border-y border-navy/10">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 flex flex-wrap justify-center gap-x-12 gap-y-3 text-navy text-[13px] font-medium tracking-wider uppercase">
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

      <section className="bg-cream py-16 sm:py-24" id="glass-services">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <div className="max-w-2xl mb-10">
            <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Our Services</p>
            <h2 className="heading-serif text-charcoal text-4xl sm:text-5xl">Glass work for the whole project.</h2>
            <p className="mt-5 text-warm text-base leading-relaxed">Choose your service for scope, planning details, and the photos or drawings that help us price the work.</p>
          </div>
          <ServiceDirectory />
        </div>
      </section>

      <ShowerDoorQuickAnswers />

      <section className="bg-cream-light py-20 sm:py-24 border-y border-charcoal/[0.04]">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <div className="max-w-2xl mb-12 anim-fade-up">
            <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Start With The Right Page</p>
            <h2 className="heading-serif text-charcoal text-3xl sm:text-4xl">
              Match your bathroom problem to the right glass guide.
            </h2>
            <p className="mt-4 text-warm text-[15px] leading-relaxed">
              Choose a guide for your project: a new enclosure, an existing door that needs attention, or installation in your borough.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {buyerPaths.map((path) => (
              <Link key={path.href} href={path.href} className="glass-card p-5 card-lift block anim-fade-up">
                <h3 className="font-serif text-charcoal text-xl mb-2">{path.title}</h3>
                <p className="text-warm text-[14px] leading-relaxed">{path.desc}</p>
                <span className="inline-block mt-4 text-orange text-sm font-medium hover:opacity-70 transition-opacity">Open page →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 4. WHY US ═══ */}
      <section className="bg-cream-light py-28 sm:py-36">
        <div className="max-w-5xl mx-auto px-6 sm:px-10">
          <div className="max-w-xl mb-20" data-reveal="fade-up">
            <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Why MetroGlass Pro</p>
            <h2 className="heading-serif text-charcoal text-4xl sm:text-5xl">
              Careful work, from measure to finish.
            </h2>
            <p className="mt-4 text-warm text-[15px] leading-relaxed">Your finished surfaces, fixtures, and building deserve careful handling. We plan the fit, protect the work area, and coordinate access before installation day.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
            {[
              { n: '01', t: 'Precise Fit', d: 'We measure the real opening, review surrounding finishes, and coordinate glass and hardware before ordering.' },
              { n: '02', t: 'Clean Install Standards', d: 'We plan work area protection, glass delivery, and installation access so your home or business is treated with care.' },
              { n: '03', t: 'Building Fluent', d: 'Co-op and condo rules, COIs, freight elevators, supers, quiet hours. We handle the coordination smaller installers often miss.' },
            ].map((item, i) => (
              <div key={item.n} className={`anim-fade-up d${(i + 1) * 2}`}>
                <span className="text-charcoal/60 font-serif text-6xl leading-none">{item.n}</span>
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
                  <span className="ml-4 text-charcoal/60 text-xl transition-transform duration-300 group-open:rotate-45">+</span>
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
        <div className="relative bg-[rgba(72,68,61,0.68)] py-28 sm:py-36">
          <div className="max-w-2xl mx-auto px-6 sm:px-10 text-center">
            <h2 className="heading-serif text-white text-4xl sm:text-5xl anim-fade-up">
              Ready to price your glass project?
            </h2>
            <p className="mt-5 text-white/50 text-lg anim-fade-up d2">
              Send project photos or request an estimate. Include your neighborhood and building type so we can point you in the right direction faster.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4 anim-fade-up d3">
              <Link href="/contact/" className="btn-pill btn-primary px-10 py-3.5 text-sm">
                Get Glass Project Estimate
              </Link>
              <a href="sms:+13329993846?body=Hi%20MetroGlass%20Pro%2C%20I%20want%20a%20quote%20and%20can%20send%20project%20photos." className="btn-pill btn-outline-light px-10 py-3.5 text-sm">Text Project Photos</a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 9. SERVICE AREAS ═══ */}
      <section className="bg-cream py-12 border-t border-charcoal/[0.04]">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 text-center">
          <p className="text-charcoal/60 text-[13px] font-medium tracking-widest uppercase mb-2">Serving</p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm">
            <Link href="/service-areas/manhattan/" className="text-charcoal/60 hover:text-charcoal transition-colors">Manhattan</Link>
            <span className="text-charcoal/60">·</span>
            <Link href="/service-areas/brooklyn/" className="text-charcoal/60 hover:text-charcoal transition-colors">Brooklyn</Link>
            <span className="text-charcoal/60">·</span>
            <Link href="/service-areas/queens/" className="text-charcoal/60 hover:text-charcoal transition-colors">Queens</Link>
            <span className="text-charcoal/60">·</span>
            <Link href="/service-areas/bronx/" className="text-charcoal/60 hover:text-charcoal transition-colors">The Bronx</Link>
            <span className="text-charcoal/60">·</span>
            <Link href="/service-areas/staten-island/" className="text-charcoal/60 hover:text-charcoal transition-colors">Staten Island</Link>
          </div>
          <p className="text-charcoal/60 text-xs mt-1">Also serving Long Island & Northern New Jersey</p>
          <Link href="/service-areas/" className="inline-flex items-center gap-2 text-orange text-sm font-medium mt-3 hover:opacity-70 transition-opacity">
            Explore Service Areas <span className="text-xs">→</span>
          </Link>
        </div>
      </section>
    </>
  )
}
