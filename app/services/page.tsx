import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'NYC Shower Door Services | Repair, Installation, Replacement',
  description: 'MetroGlass Pro handles NYC shower door installation, repair, replacement, frameless glass, mirrors, and glass partitions for Manhattan, Brooklyn, Queens, and nearby projects.',
  alternates: { canonical: 'https://metroglasspro.com/services/' },
  openGraph: {
    title: 'NYC Shower Door Services | MetroGlass Pro',
    description: 'Shower door installation, repair, replacement, frameless glass, mirrors, and glass partitions across NYC.',
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
  { title: 'Frameless Shower Doors', img: '/editorial/shower-door.jpg', desc: 'The modern standard. Heavy 3/8" and 1/2" tempered glass, custom measured to 1/16". Swing, sliding, pivot, and neo angle configurations.', points: ['Custom measured to 1/16" precision', 'Heavy tempered safety glass', 'Chrome, brushed nickel, matte black, satin brass', 'Makes any bathroom look larger'], link: '/frameless-shower-doors-nyc/' },
  { title: 'Framed & Semi-Frameless', img: '/editorial/hero.jpg', desc: 'Aluminum frames in chrome, brushed nickel, and matte black. Durable, budget-friendly, ideal for standard bathroom sizes and replacement projects.', points: ['Multiple frame finishes', 'Budget-friendly', 'Quick installation', 'Great replacement option'], link: '/shower-door-replacement-nyc/' },
  { title: 'Custom Mirrors', img: '/editorial/mirror.jpg', desc: 'Vanity mirrors, wall mirrors, and selected mirrored installations measured carefully and installed cleanly.', points: ['Bathroom and vanity mirrors', 'Cut to fit the wall and layout', 'Clean edge and mount details', 'Strong fit for renovation and design work'], link: '/custom-mirrors-nyc/' },
  { title: 'Glass Partitions', img: '/editorial/railing.jpg', desc: 'Interior dividers and boutique commercial partitions for projects that need crisp lines and reliable coordination.', points: ['Residential and boutique commercial', 'Layout review and site coordination', 'Clean sightlines and dependable hardware', 'Select railing work handled through project review'], link: '/glass-partitions-nyc/' },
  { title: 'Shower Door Repair', img: '/editorial/tools.jpg', desc: 'Leak issues, dragging doors, loose hardware, bad install remediation, and honest guidance on repair versus replacement.', points: ['Leak, sweep, and hardware issues', 'Bad install remediation', 'Repair versus replace guidance', 'Fast response for active problems'], link: '/shower-door-repair-nyc/' },
  { title: 'Commercial & Trade Collaboration', img: '/editorial/water-droplets.jpg', desc: 'Support for designers, architects, contractors, hospitality projects, and multi-unit work that needs direct coordination.', points: ['Trade communication that is clear and responsive', 'Finish and hardware coordination', 'Building logistics support', 'Good fit for design driven work'] },
]

const serviceRoutes = [
  { href: '/frameless-shower-doors-nyc/', title: 'Frameless shower doors', desc: 'For custom heavy glass, swing doors, fixed panels, sliders, and premium hardware decisions.' },
  { href: '/shower-door-installation-nyc/', title: 'Shower door installation', desc: 'For finished tile, field measuring, install-day prep, and building access requirements.' },
  { href: '/shower-door-replacement-nyc/', title: 'Shower door replacement', desc: 'For older framed systems, corroded tracks, dated doors, and layouts that need a cleaner long-term answer.' },
  { href: '/shower-door-repair-nyc/', title: 'Shower door repair', desc: 'For leaks, dragging doors, loose handles, sweeps, rollers, silicone, and repair-versus-replace questions.' },
  { href: '/service-areas/manhattan/', title: 'Manhattan service', desc: 'For co-ops, condos, high-rises, brownstones, COIs, elevators, and tight city bathrooms.' },
  { href: '/service-areas/brooklyn/', title: 'Brooklyn service', desc: 'For brownstones, apartments, condos, and renovation projects that need careful access planning.' },
  { href: '/service-areas/queens/', title: 'Queens service', desc: 'For apartments, houses, and multi-family homes where the right layout depends on space and use.' },
]

const routeByProblem = [
  { problem: 'Finished tile shower waiting on glass', href: '/shower-door-installation-nyc/', label: 'Start with installation planning' },
  { problem: 'Old framed door, corroded track, dated layout, or repeated leaks', href: '/shower-door-replacement-nyc/', label: 'Start with replacement' },
  { problem: 'Dragging door, loose handle, leaking sweep, roller, hinge, or bad prior install', href: '/shower-door-repair-nyc/', label: 'Start with repair' },
  { problem: 'Premium custom enclosure, fixed panel, slider, pivot, or heavy glass decision', href: '/frameless-shower-doors-nyc/', label: 'Start with frameless options' },
]

export default function ServicesPage() {
  return (
    <>
      <section className="bg-cream pt-20 sm:pt-32 pb-16 sm:pb-20">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 anim-hero">
          <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Our Services</p>
          <h1 className="heading-serif text-charcoal text-5xl sm:text-6xl lg:text-7xl">
            Shower doors first. Custom glass handled with the same standards.
          </h1>
          <p className="mt-5 text-warm text-base sm:text-lg max-w-2xl leading-relaxed">
            MetroGlass Pro is known first for custom shower doors in Manhattan. Mirrors, partitions, and related repair work follow the same expectations, careful measurements, clean installs, and smooth communication.
          </p>
          <p className="mt-4 text-warm text-base leading-relaxed max-w-2xl">
            If you are not sure which service fits, start with the problem: new bathroom glass after tile, replacing an older enclosure, fixing a leak, comparing frameless layouts, or coordinating work inside a managed NYC building.
          </p>
          <p className="mt-4 text-warm text-base leading-relaxed max-w-2xl">
            The pages below are organized around buyer intent instead of trade jargon, so a homeowner can move from a symptom or renovation stage to the right estimate path.
          </p>
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

      <section className="bg-cream-light py-20 sm:py-24 border-y border-charcoal/[0.04]">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <div className="max-w-2xl mb-10">
            <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Find The Right Starting Point</p>
            <h2 className="heading-serif text-charcoal text-3xl sm:text-4xl">Most quote requests fall into one of these paths.</h2>
            <p className="mt-4 text-warm text-[15px] leading-relaxed">
              A clear starting page helps us price the job faster and helps you compare options before anyone orders glass.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {serviceRoutes.map((item) => (
              <Link key={item.href} href={item.href} className="glass-card p-5 card-lift block">
                <h3 className="font-serif text-charcoal text-xl mb-2">{item.title}</h3>
                <p className="text-warm text-[14px] leading-relaxed">{item.desc}</p>
                <span className="inline-block mt-4 text-orange text-sm font-medium hover:opacity-70 transition-opacity">Open guide →</span>
              </Link>
            ))}
          </div>
          <div className="mt-10 glass-card p-6">
            <h3 className="font-serif text-charcoal text-2xl mb-4">Route the request by the problem</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {routeByProblem.map((item) => (
                <Link key={item.href} href={item.href} className="block border-b border-charcoal/[0.06] pb-4 last:border-b-0 md:border-b-0">
                  <span className="text-warm text-[14px] leading-relaxed block">{item.problem}</span>
                  <span className="inline-block mt-2 text-orange text-sm font-medium hover:opacity-70 transition-opacity">{item.label} →</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FOR DESIGNERS & CONTRACTORS ═══ */}
      <section className="bg-cream-light py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-6 sm:px-10">
          <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">For Designers & Contractors</p>
          <h2 className="heading-serif text-charcoal text-3xl sm:text-4xl mb-6">Working with MetroGlass Pro</h2>
          <p className="text-warm text-[15px] leading-relaxed mb-8">
            We regularly partner with architects, interior designers, and general contractors across NYC. Here&apos;s what we need to get started on your project:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
            {[
              { t: 'To Quote', items: ['Floor plan or bathroom dimensions', 'Glass type preference, such as clear, frosted, or low iron', 'Hardware finish preference', 'Building name and address if a COI may be needed'] },
              { t: 'Our Process', items: ['On site field measure', 'Scope and finish review', 'Fabrication timeline based on layout and hardware', 'Install scheduled around project and building logistics'] },
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
            <Link href="/projects/84-clinton-lower-east-side-shower-door-before-after/" className="glass-card p-4 card-lift block">
              <span className="text-charcoal font-medium text-[14px]">84 Clinton Shower Door Before and After</span>
              <span className="text-warm text-[13px] block mt-1">A compact Lower East Side bathroom showing how the right enclosure changes the room.</span>
            </Link>
            <Link href="/projects/typical-mirror-replacement-nyc/" className="glass-card p-4 card-lift block">
              <span className="text-charcoal font-medium text-[14px]">Mirror Replacement in a NYC Apartment</span>
              <span className="text-warm text-[13px] block mt-1">What a typical mirror replacement looks like from sizing and mounting to finish details.</span>
            </Link>
            <Link href="/projects/interior-design-collaboration-shower-door-nyc/" className="glass-card p-4 card-lift block">
              <span className="text-charcoal font-medium text-[14px]">Fixing a Shower Door Install Gone Wrong</span>
              <span className="text-warm text-[13px] block mt-1">A remediation project that shows why precision and accountability matter.</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-24 sm:py-28 text-center">
        <div className="max-w-2xl mx-auto px-6 sm:px-10">
          <h2 className="heading-serif text-white text-4xl sm:text-5xl">Tell us what you are planning.</h2>
          <p className="mt-4 text-white/40 text-lg">Send photos, your neighborhood, and the service you need. We will help you sort out the best next step.</p>
          <Link href="/contact/" className="btn-pill btn-primary px-10 py-3.5 text-sm mt-10 inline-flex">Request an Estimate</Link>
        </div>
      </section>
    </>
  )
}
