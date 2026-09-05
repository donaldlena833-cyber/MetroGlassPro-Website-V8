import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ServiceDirectory from '@/components/ServiceDirectory'
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
  { src: '/gallery/mirror-1.jpg', alt: 'Frameless shower enclosure with a fixed panel and hinged door' },
  { src: '/gallery/project-shower-2.jpg', alt: 'Custom glass enclosure Brooklyn' },
  { src: '/gallery/dark-shower-1.jpg', alt: 'Dark glass shower enclosure NYC' },
  { src: '/gallery/install-1.jpeg', alt: 'Shower door installation Queens' },
  { src: '/gallery/project-shower-3.jpg', alt: 'Frameless enclosure NYC apartment' },
  { src: '/gallery/project-shower-1.jpg', alt: 'Work in progress on a mirrored bathroom cabinet door' },
]

const featuredGuides = [
  { title: 'Custom Mirrors for Manhattan Apartments', description: 'Plan the wall coverage, fixtures, edge finish, and delivery route.', href: '/blog/custom-mirrors-manhattan-apartment-guide/' },
  { title: 'Office Glass Partition Planning', description: 'Coordinate room layout, privacy, doors, and work in an occupied office.', href: '/blog/office-glass-partitions-manhattan-planning-guide/' },
  {
    title: 'Frameless Shower Door Cost in NYC',
    description: 'The buyer guide for glass thickness, hardware, layout, building coordination, and quote factors.',
    href: '/projects/frameless-shower-door-cost-nyc/',
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

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className="bg-cream border-b border-charcoal/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-10 sm:py-16 lg:py-20 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <p className="text-orange text-xs font-semibold tracking-widest uppercase mb-5">MetroGlass Pro · New York City</p>
            <h1 className="heading-serif text-charcoal text-[46px] sm:text-6xl lg:text-7xl max-w-xl">
              Shower doors &amp; custom glass, made for NYC.
            </h1>
            <p className="mt-6 text-warm text-lg leading-relaxed max-w-xl">
              Glazing, glass railings, mirrors, partitions, shower doors, and repairs for homes and businesses. Measured to fit, with careful installation and building coordination.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="/contact/" className="btn-pill btn-primary px-7 py-3.5 text-sm">Request an Estimate</Link>
              <a href="sms:+13329993846?body=Hi%20MetroGlass%20Pro%2C%20I%20want%20a%20glass%20project%20quote%20and%20can%20send%20project%20photos." className="btn-pill btn-outline px-7 py-3.5 text-sm">Text Project Photos</a>
            </div>
            <p className="mt-6 text-sm text-warm">All five boroughs · Field measurements · COI on request</p>
          </div>
          <figure>
            <div className="relative aspect-[4/3] sm:aspect-[5/4] lg:aspect-auto lg:h-[560px] overflow-hidden rounded-2xl bg-cream-dark">
              <Image src="/gallery/edison-nj-clear-tempered-shower-door-hero.jpg" alt="Clear tempered shower glass with brass hardware during MetroGlass Pro's Edison installation" fill priority fetchPriority="high" sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover object-center" />
            </div>
            <figcaption className="flex flex-wrap justify-between gap-2 mt-4 text-sm text-warm">
              <span>From our work · Custom shower glass</span>
              <Link href="/blog/edison-nj-clear-tempered-shower-door-bathroom-renovation/" className="text-orange underline underline-offset-4">View the Edison project</Link>
            </figcaption>
          </figure>
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

      {/* ═══ 4. WHY US ═══ */}
      <section className="bg-cream-light py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-6 sm:px-10">
          <div className="max-w-xl mb-10" data-reveal="fade-up">
            <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Why MetroGlass Pro</p>
            <h2 className="heading-serif text-charcoal text-4xl sm:text-5xl">
              A clear process. A careful finish.
            </h2>
            <p className="mt-4 text-warm text-[15px] leading-relaxed">Your finished surfaces, fixtures, and building deserve careful handling. We plan the fit, protect the work area, and coordinate access before installation day.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { n: '01', t: 'Precise Fit', d: 'We measure the real opening, review surrounding finishes, and coordinate glass and hardware before ordering.' },
              { n: '02', t: 'Clean Install Standards', d: 'We plan work area protection, glass delivery, and installation access so your home or business is treated with care.' },
              { n: '03', t: 'Building Coordination', d: 'Co-op and condo rules, COIs, freight elevators, supers, quiet hours. Share building requirements early so they are included in the installation plan.' },
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
      <section className="bg-cream py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="max-w-xl mb-10" data-reveal="fade-up">
            <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Recent Projects</p>
            <h2 className="heading-serif text-charcoal text-4xl sm:text-5xl">
              A closer look at our work.
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
              Helpful reading before you begin.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {featuredGuides.map((guide, index) => (
              <Link key={guide.href} href={guide.href} className={`glass-card p-6 card-lift block anim-fade-up d${index + 1}`}>
                <h3 className="font-serif text-charcoal text-2xl mb-3">{guide.title}</h3>
                <p className="text-warm text-[15px] leading-relaxed">{guide.description}</p>
                <span className="inline-block mt-4 text-orange text-sm font-medium hover:opacity-70 transition-opacity">Read guide →</span>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center anim-fade-up">
            <Link href="/blog/" className="btn-pill btn-outline px-10 py-3.5 text-sm">
              Browse All Guides
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ 6. REVIEWS ═══ */}
      <section className="bg-cream-light py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <div className="text-center mb-10 anim-fade-up">
            <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Testimonials</p>
            <h2 className="heading-serif text-charcoal text-4xl sm:text-5xl">
              What our customers say.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((r, i) => (
              <div key={r.name} className={`border-t border-charcoal/15 pt-6 anim-fade-up d${(i + 1) * 2}`}>
                <p className="font-serif text-charcoal text-xl sm:text-2xl leading-snug max-w-2xl mx-auto">
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
      <section className="bg-cream py-16 sm:py-24">
        <div className="max-w-2xl mx-auto px-6 sm:px-10">
          <div className="text-center mb-10 anim-fade-up">
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
        <div className="relative bg-[rgba(72,68,61,0.68)] py-16 sm:py-24">
          <div className="max-w-2xl mx-auto px-6 sm:px-10 text-center">
            <h2 className="heading-serif text-white text-4xl sm:text-5xl anim-fade-up">
              Ready to price your glass project?
            </h2>
            <p className="mt-5 text-white/85 text-lg anim-fade-up d2">
              Send project photos or request an estimate. Include your neighborhood and building type so we can point you in the right direction faster.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4 anim-fade-up d3">
              <Link href="/contact/" className="btn-pill btn-primary px-10 py-3.5 text-sm">
                Request an Estimate
              </Link>
              <a href="sms:+13329993846?body=Hi%20MetroGlass%20Pro%2C%20I%20want%20a%20quote%20and%20can%20send%20project%20photos." className="btn-pill btn-outline-light px-10 py-3.5 text-sm">Text Project Photos</a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 9. SERVICE AREAS ═══ */}
      <section className="bg-cream py-12 border-t border-charcoal/[0.04]">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 text-center">
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
          <p className="text-charcoal/60 text-xs mt-1">Select projects in Long Island & Northern New Jersey</p>
          <Link href="/service-areas/" className="inline-flex items-center gap-2 text-orange text-sm font-medium mt-3 hover:opacity-70 transition-opacity">
            Explore Service Areas <span className="text-xs">→</span>
          </Link>
        </div>
      </section>
    </>
  )
}
