import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Shower Glass Services NYC | Frameless Doors, Mirrors & Custom Glass',
  description: 'Custom frameless shower doors, glass enclosures, mirrors, partitions, and glass repair throughout NYC.',
  alternates: { canonical: 'https://metroglasspro.com/services/' },
  openGraph: {
    title: 'Services — Custom Glass Installation NYC',
    description: 'Frameless shower doors, mirrors, glass partitions, and repair services across all 5 NYC boroughs.',
  },
  twitter: { card: 'summary_large_image' },
}

interface ServiceItem {
  title: string
  img: string
  desc: string
  points: string[]
  link?: string
}

const services: ServiceItem[] = [
  { title: 'Frameless Shower Doors', img: '/editorial/shower-door.jpg', desc: 'The modern standard. Heavy 3/8"–1/2" tempered glass, custom-measured to 1/16". Swing, sliding, pivot, and neo-angle configurations.', points: ['Custom-measured to 1/16" precision', 'Heavy tempered safety glass', 'Chrome, brushed nickel, matte black, satin brass', 'Makes any bathroom look larger'], link: '/frameless-shower-doors-nyc/' },
  { title: 'Framed & Semi-Frameless', img: '/editorial/hero.jpg', desc: 'Aluminum frames in chrome, brushed nickel, and matte black. Durable, budget-friendly, ideal for standard bathroom sizes.', points: ['Multiple frame finishes', 'Budget-friendly', 'Quick installation', 'Great replacement option'] },
  { title: 'Custom Mirrors & Glass', img: '/editorial/mirror.jpg', desc: 'Wall mirrors, vanity mirrors, gym mirrors, glass shelving. Cut to any size, delivered, and installed.', points: ['Any size or shape', 'Bathroom, vanity, gym, studio', 'Glass shelving & backsplashes', 'Professional installation'] },
  { title: 'Glass Partitions & Railings', img: '/editorial/railing.jpg', desc: 'Interior dividers, office partitions, glass stair railings, balcony glass. Modern, structural, clean.', points: ['Interior dividers & office partitions', 'Stair railings & balcony panels', 'Residential & commercial', 'Structural engineering meets design'] },
  { title: 'Glass Repair', img: '/editorial/tools.jpg', desc: 'Broken hinges, cracked panels, failed seals, hardware replacement. We fix what others installed.', points: ['Hinge, seal, hardware replacement', 'Cracked panel repair', 'We fix other installers\' work', 'Same-week service'] },
  { title: 'Commercial Glass', img: '/editorial/water-droplets.jpg', desc: 'Hotel bathrooms, apartment buildings, contractor partnerships. Licensed for commercial-scale projects across NYC.', points: ['Hotel & hospitality installs', 'Multi-unit apartment buildings', 'Contractor partnerships', 'Licensed for commercial work'] },
]

export default function ServicesPage() {
  return (
    <>
      <section className="bg-cream pt-20 sm:pt-32 pb-16 sm:pb-20">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 anim-hero">
          <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Our Services</p>
          <h1 className="heading-serif text-charcoal text-5xl sm:text-6xl lg:text-7xl">
            Premium glass solutions for every space.
          </h1>
        </div>
      </section>

      <section className="bg-cream pb-28 sm:pb-36">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 space-y-24">
          {services.map((s, i) => (
            <div key={s.title} className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className={`rounded-lg overflow-hidden bg-cream-dark anim-fade-up ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img src={s.img} alt={s.title} className="w-full h-auto" loading="lazy" />
              </div>
              <div className={`anim-fade-up d2 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <h2 className="font-serif text-charcoal text-3xl sm:text-4xl mb-4">{s.title}</h2>
                <p className="text-warm text-[15px] leading-relaxed mb-6">{s.desc}</p>
                <div className="space-y-2.5">
                  {s.points.map((p) => (
                    <div key={p} className="flex items-start gap-3 text-sm text-charcoal/60">
                      <span className="text-orange mt-0.5 shrink-0">✓</span>
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
                {s.link && (
                  <Link href={s.link} className="inline-block mt-5 text-orange text-sm font-medium hover:opacity-70 transition-opacity">
                    Learn more →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ FOR DESIGNERS & CONTRACTORS ═══ */}
      <section className="bg-cream-light py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-6 sm:px-10">
          <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">For Designers & Contractors</p>
          <h2 className="heading-serif text-charcoal text-3xl sm:text-4xl mb-6">Working with MetroGlassPro</h2>
          <p className="text-warm text-[15px] leading-relaxed mb-8">
            We regularly partner with architects, interior designers, and general contractors across NYC. Here&apos;s what we need to get started on your project:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
            {[
              { t: 'To Quote', items: ['Floor plan or bathroom dimensions', 'Glass type preference (clear, frosted, low-iron)', 'Hardware finish preference', 'Building name & address (for COI if needed)'] },
              { t: 'Our Process', items: ['On-site field measure (30 min)', 'Quote within 24 hours', 'Fabrication: 5–7 business days', 'Install: 2–4 hours, single visit'] },
            ].map((col) => (
              <div key={col.t} className="glass-card p-5 sm:p-6">
                <h3 className="font-semibold text-charcoal text-[15px] mb-3">{col.t}</h3>
                <div className="space-y-2">
                  {col.items.map((item) => (
                    <div key={item} className="flex items-start gap-2 text-[14px]">
                      <span className="text-orange mt-0.5 shrink-0">✓</span>
                      <span className="text-warm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="text-warm text-[14px]">
            Questions? Email <a href="mailto:operations@metroglasspro.com" className="text-orange hover:opacity-70 transition-opacity">operations@metroglasspro.com</a> or call <a href="tel:+13329993846" className="text-orange hover:opacity-70 transition-opacity">(332) 999-3846</a>.
          </p>
        </div>
      </section>

      {/* ═══ RELATED PROJECTS ═══ */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-6 sm:px-10">
          <h2 className="font-serif text-charcoal text-2xl sm:text-3xl mb-6">Related Projects & Insights</h2>
          <div className="space-y-3">
            <Link href="/projects/typical-mirror-replacement-nyc/" className="glass-card p-4 card-lift block">
              <span className="text-charcoal font-medium text-[14px]">Mirror Replacement in a NYC Apartment</span>
              <span className="text-warm text-[13px] block mt-1">What a typical mirror replacement looks like — sizing, mounting, timeline, and cost ranges.</span>
            </Link>
            <Link href="/projects/crl-geneva-vs-vienna-hinges/" className="glass-card p-4 card-lift block">
              <span className="text-charcoal font-medium text-[14px]">CRL Geneva vs Vienna Hinges</span>
              <span className="text-warm text-[13px] block mt-1">Two of the most popular frameless shower door hinges compared.</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-24 sm:py-28 text-center">
        <div className="max-w-2xl mx-auto px-6 sm:px-10">
          <h2 className="heading-serif text-white text-4xl sm:text-5xl">Ready to get started?</h2>
          <p className="mt-4 text-white/40 text-lg">Free estimates. Same-week scheduling.</p>
          <Link href="/contact/" className="btn-pill btn-primary px-10 py-3.5 text-sm mt-10 inline-flex">Request an Estimate</Link>
        </div>
      </section>
    </>
  )
}
