import ResponsiveImage from '@/components/ResponsiveImage'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Shower Glass Planning for NYC Design Teams',
  description: 'Compare sliding, fixed-panel, and swing-door shower glass layouts in the actual bathroom before fabrication begins with MetroGlass Pro.',
  alternates: { canonical: 'https://metroglasspro.com/projects/shower-glass-design-consultation-nyc/' },
  openGraph: {
    title: 'Shower Glass Planning Before Fabrication',
    description: 'A practical guide to comparing shower glass layouts, hardware, field conditions, and project requirements before fabrication.',
    url: 'https://metroglasspro.com/projects/shower-glass-design-consultation-nyc/',
    type: 'article',
    images: [{ url: 'https://metroglasspro.com/editorial/design-process-sketch.jpg', width: 1200, height: 630, alt: 'Shower glass design sketch showing bathroom configuration renders on tablet' }],
  },
  twitter: { images: ['/assets/og-default.jpg'],  card: 'summary_large_image' },
}

const faqs = [
  {
    q: 'Do you provide configuration renders before installation?',
    a: 'Photos, plans, and field conditions can be used to compare swing-door, fixed-panel, sliding, and walk-in layouts. Confirm in the written estimate whether a project includes rendered layouts, shop drawings, finish samples, or another review format before fabrication.',
  },
  {
    q: 'Can architects or designers send us drawings instead of scheduling a site visit?',
    a: 'Drawings, elevations, and renderings can start the review. Final fabrication dimensions, supporting conditions, and clearances still need to be confirmed for the specific project before glass is ordered.',
  },
  {
    q: 'Do you work directly with the design team or only with the homeowner?',
    a: 'A project can be coordinated with the homeowner, contractor, architect, or interior designer. Identify the decision-maker and send the relevant finish, clearance, drawing, access, and building-document requirements so the needed review and deliverables can be defined.',
  },
  {
    q: 'How early in a renovation should we bring in the glass installer?',
    a: 'Discussing the enclosure before tile is set can help the project team consider backing, curb and wall conditions, door clearance, showerhead direction, and niche placement. Final measurements should be based on the finished conditions required for the selected system.',
  },
  {
    q: 'What information do you need to prepare a configuration recommendation?',
    a: 'At minimum: the shower opening width and height, the wall and curb conditions (tile, stone, acrylic), whether there\'s a tub or a curbless threshold, and the client\'s aesthetic preference (minimal, traditional, bold hardware). Photos of the current bathroom are extremely helpful. If you have CAD drawings or mood boards, even better.',
  },
  {
    q: 'Is there a charge for the design consultation?',
    a: 'The review scope and any fee should be confirmed for the individual project. Send the available photos or drawings first; the written estimate should state whether measurement, layouts, samples, specifications, or shop drawings are included.',
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

const metroGlassOrganization = {
  '@type': 'Organization',
  '@id': 'https://metroglasspro.com/#organization',
  name: 'MetroGlass Pro',
  url: 'https://metroglasspro.com',
  logo: {
    '@type': 'ImageObject',
    url: 'https://metroglasspro.com/assets/logo.png',
  },
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Shower Glass Planning for Architects and Designers',
  description: 'A practical guide to comparing shower enclosure configurations, hardware, field conditions, and project requirements before fabrication.',
  author: metroGlassOrganization,
  publisher: metroGlassOrganization,
  datePublished: '2026-03-11',
  dateModified: '2026-09-25',
  mainEntityOfPage: 'https://metroglasspro.com/projects/shower-glass-design-consultation-nyc/',
  image: 'https://metroglasspro.com/editorial/design-process-sketch.jpg',
}

export default function DesignConsultationArticle() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      {/* ═══ HEADER ═══ */}
      <section className="bg-cream pt-20 sm:pt-32 pb-10 sm:pb-14">
        <div className="max-w-3xl mx-auto px-6 sm:px-10">
          <Link href="/projects/" className="text-orange text-[13px] font-medium hover:opacity-70 transition-opacity mb-6 inline-block">
            ← Back to Projects
          </Link>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-[11px] font-medium tracking-wider uppercase text-charcoal/40 bg-charcoal/[0.04] px-2.5 py-1 rounded-full">Planning Guide</span>
            <span className="text-[11px] font-medium tracking-wider uppercase text-charcoal/40 bg-charcoal/[0.04] px-2.5 py-1 rounded-full">For Architects &amp; Designers</span>
            <span className="text-[11px] font-medium tracking-wider uppercase text-charcoal/40 bg-charcoal/[0.04] px-2.5 py-1 rounded-full">NYC</span>
          </div>
          <h1 className="heading-serif text-charcoal text-3xl sm:text-5xl lg:text-[56px]">
            Shower Glass Planning for Architects and Designers
          </h1>
          <p className="mt-4 text-charcoal/30 text-sm">March 2026</p>
        </div>
      </section>

      {/* ═══ HERO IMAGE ═══ */}
      <section className="bg-cream pb-6 sm:pb-10">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <div className="rounded-lg overflow-hidden img-editorial aspect-[16/9]">
            <ResponsiveImage
              src="/editorial/design-process-sketch.jpg"
              alt="Napkin sketch of a bathroom design with shower enclosure configurations rendered on a tablet — hardware finishes annotated in gold, black, and chrome"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="mt-3 text-charcoal/25 text-xs italic text-center">Use plans, photos, and finish references to compare enclosure options before fabrication.</p>
        </div>
      </section>

      {/* ═══ ARTICLE BODY ═══ */}
      <section className="bg-cream pb-20 sm:pb-28">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 prose-mgp">

          <p>
            A shower enclosure affects door clearance, sight lines, hardware, supporting conditions, and how water is contained. Those decisions are useful before fabrication whether the project is led by a homeowner, architect, interior designer, or general contractor.
          </p>
          <p>
            The first useful step is to compare the layouts that fit the actual room. A sliding system avoids a door arc, while a swing door or door-plus-fixed-panel may provide a different opening and visual balance. The right choice depends on the measured opening, finished surfaces, nearby fixtures, showerhead direction, and the selected hardware system.
          </p>
          <p>
            MetroGlass Pro can review the available photos, plans, and project requirements, then identify what still needs to be confirmed before glass is ordered.
          </p>

          <h2>Your bathroom, multiple configurations</h2>
          <p>
            A useful review covers more than opening width. It should consider where the vanity and toilet sit relative to the shower entry, how a door swing uses the available clearance, where the showerhead directs water, and whether a bench or niche affects panel and hardware placement.
          </p>
          <p>
            Depending on the room and the agreed review scope, the comparison may include these configurations:
          </p>
          <ul>
            <li><strong>Option A — Single swing door.</strong> A door-only layout that requires adequate clearance and suitable finished conditions for the selected hinges.</li>
            <li><strong>Option B — Door plus fixed panel.</strong> A layout for openings where a fixed panel and door create the needed overall span. The connection and support method must match the system and site conditions.</li>
            <li><strong>Option C — Sliding bypass or barn-door track.</strong> A layout that avoids a swing arc but adds track, overlap, handle, and access considerations.</li>
          </ul>
          <p>
            Hardware finish is another decision to record. Polished chrome, brushed finishes, matte black, and brass tones can read differently beside the selected plumbing fixtures and tile. Confirm the exact finish and product availability in the project estimate rather than relying on a generic color name.
          </p>

          <h2>Why this matters for the design team</h2>
          <p>
            If you&apos;ve ever had a client approve a bathroom design and then watched the glass installer show up with hardware that clashes with the faucet finish, you know the problem. Glass is one of the last trades to touch a bathroom, but it&apos;s one of the first things you see when you walk in. A mismatched hinge finish or an awkward panel proportion can undermine months of design work.
          </p>
          <p>
            Discussing the enclosure before tile is set can help the project team consider the material palette, intended hardware, supporting conditions, and whether the proposed corner or multi-panel layout needs additional field verification.
          </p>
          <p>
            Mood boards, fixture schedules, elevations, and site photos can all help define the request. They do not replace final field confirmation where the selected system requires it.
          </p>

          <h2>Questions to resolve before fabrication</h2>
          <p>
            Use these planning questions to surface conflicts while the layout can still be adjusted:
          </p>
          <ul>
            <li><strong>Door clearance and water direction.</strong> Check the proposed swing against the curb, drain, toilet, vanity, and circulation path, and confirm where the showerhead directs water.</li>
            <li><strong>Niches and hardware zones.</strong> Compare the niche, plumbing, and tile layout with the intended hinge, clip, channel, and handle locations.</li>
            <li><strong>Supporting conditions.</strong> The project team should confirm that walls, curbs, half-walls, and ceilings are suitable for the selected glass and hardware system before fabrication.</li>
            <li><strong>Finish matching.</strong> Record the exact hardware finish and compare a current sample or manufacturer reference with the fixtures when a close match matters.</li>
          </ul>
          <p>
            The answers belong in the project record so the estimate, drawings, field measurements, and approved selection describe the same enclosure.
          </p>

          <h2>Define the design deliverables</h2>
          <p>
            Ask the estimate to identify which of these items are included for the project:
          </p>
          <ul>
            <li><strong>Configuration layouts</strong> showing enclosure options overlaid on your bathroom plan or elevation.</li>
            <li><strong>Hardware finish comparison</strong> — physical samples or annotated references matched against your specified plumbing fixtures.</li>
            <li><strong>Glass specification sheets</strong> with thickness, tempering certification, edge treatment, and coating options (clear, low-iron, frosted, rain texture).</li>
            <li><strong>Shop drawings</strong> for review before fabrication, showing exact dimensions, hinge placement, clip locations, and silicone joint details.</li>
            <li><strong>Building documentation review</strong> using the property&apos;s exact certificate holder, additional insured, policy-limit, submission, access, and scheduling requirements. Building management makes the final acceptance decision.</li>
          </ul>
          <p>
            Deliverables, fees, and timing depend on the agreed project scope. Confirm them in writing before relying on a render, sample, specification, shop drawing, or building-document submission.
          </p>

          <h2>A note on timing</h2>
          <p>
            Reviewing the intended enclosure during rough-in or tile layout gives the project team an opportunity to consider backing, drain coordination, niche placement, and door clearance before the finished surfaces limit the options.
          </p>
          <p>
            If tile is already finished, send photos of the opening, curb, side walls, nearby fixtures, and any existing glass or holes. Those conditions narrow the suitable options and help determine whether an on-site assessment is needed.
          </p>
          <p>
            Review, measurement, fabrication, documentation, delivery, and installation timing varies with the selected system, current material availability, site access, and building requirements. Request a project-specific schedule; an estimate or design discussion is not a confirmed installation date.
          </p>

          <h2>For architects, designers, and contractors</h2>
          <p>
            If you&apos;re working on a residential project in NYC and you want a glass installer who operates as a design collaborator — not just a subcontractor who shows up with a drill — we&apos;d like to work with you.
          </p>
          <p>
            Send floor plans, elevations, or clear photos of the space. MetroGlass Pro can review the request and identify the measurements, conditions, selections, and deliverables that need confirmation before fabrication.
          </p>
        </div>

        {/* CTA */}
        <div className="max-w-3xl mx-auto px-6 sm:px-10 mt-10">
          <div className="glass-card p-6 sm:p-8 text-center">
            <p className="font-serif text-charcoal text-xl sm:text-2xl mb-2">Working on a project?</p>
            <p className="text-warm text-[14px] mb-5">Send drawings, dimensions, or photos so the next planning and measurement steps can be defined for your project.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link href="/contact/" className="btn-pill btn-primary px-8 py-3 text-sm">
                Start a Consultation
              </Link>
              <a href="tel:+13329993846" className="btn-pill btn-outline px-8 py-3 text-sm">
                Call (332) 999-3846
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="bg-cream-light py-20 sm:py-32">
        <div className="max-w-2xl mx-auto px-6 sm:px-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="heading-serif text-charcoal text-3xl sm:text-5xl">
              Questions from design teams
            </h2>
          </div>
          <div className="space-y-0">
            {faqs.map((faq) => (
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

      {/* ═══ RELATED CONTENT ═══ */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-6 sm:px-10">
          <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-6">Related Guides</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/frameless-shower-doors-nyc/" className="glass-card p-5 hover:bg-charcoal/[0.02] transition-colors">
              <h3 className="font-serif text-charcoal text-lg mb-1">Frameless Shower Doors NYC</h3>
              <p className="text-warm text-[13px]">Configurations, glass options, hardware finishes, and pricing.</p>
            </Link>
            <Link href="/projects/coop-condo-shower-door-installation-nyc/" className="glass-card p-5 hover:bg-charcoal/[0.02] transition-colors">
              <h3 className="font-serif text-charcoal text-lg mb-1">Co-op &amp; Condo Installation</h3>
              <p className="text-warm text-[13px]">COI, freight access, quiet hours, and building coordination.</p>
            </Link>
            <Link href="/projects/crl-geneva-vs-vienna-hinges/" className="glass-card p-5 hover:bg-charcoal/[0.02] transition-colors">
              <h3 className="font-serif text-charcoal text-lg mb-1">CRL Geneva vs Vienna Hinges</h3>
              <p className="text-warm text-[13px]">Comparing two frameless hinge profiles and their fit requirements.</p>
            </Link>
            <Link href="/services/" className="glass-card p-5 hover:bg-charcoal/[0.02] transition-colors">
              <h3 className="font-serif text-charcoal text-lg mb-1">All Services</h3>
              <p className="text-warm text-[13px]">Shower doors, mirrors, partitions, railings, and glass repair.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="relative overflow-hidden">
        <ResponsiveImage src="/editorial/water-droplets.jpg" alt="Water on glass surface" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="relative bg-charcoal/70 py-20 sm:py-28">
          <div className="max-w-2xl mx-auto px-6 sm:px-10 text-center">
            <h2 className="heading-serif text-white text-3xl sm:text-5xl">
              Glass is a design decision. Treat it like one.
            </h2>
            <p className="mt-4 text-white/50 text-base sm:text-lg">
              Start with the room, the selected finishes, and the project requirements before the glass is ordered.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Link href="/contact/" className="btn-pill btn-primary px-8 sm:px-10 py-3.5 text-sm">
                Start a Project
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
