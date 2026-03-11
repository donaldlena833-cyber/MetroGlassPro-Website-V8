import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Shower Glass Design Consultation NYC — We Design Before We Install | MetroGlassPro',
  description: 'MetroGlassPro renders multiple shower enclosure configurations — sliding, fixed panel, swing door — in your client\'s actual bathroom before fabrication begins. A design-first approach for architects and designers.',
  alternates: { canonical: 'https://metroglasspro.com/projects/shower-glass-design-consultation-nyc/' },
  openGraph: {
    title: 'Shower Glass Design Consultation — Configuration Renders Before Install',
    description: 'We don\'t just install glass. We study your bathroom, render multiple configurations with different hardware finishes, and help you choose the right enclosure before a single panel is cut.',
    url: 'https://metroglasspro.com/projects/shower-glass-design-consultation-nyc/',
    type: 'article',
    images: [{ url: 'https://metroglasspro.com/editorial/design-process-sketch.jpg', width: 1200, height: 630, alt: 'Shower glass design sketch showing bathroom configuration renders on tablet' }],
  },
  twitter: { card: 'summary_large_image' },
}

const faqs = [
  {
    q: 'Do you provide configuration renders before installation?',
    a: 'Yes. After the in-home measurement visit, we prepare visual layouts showing how different enclosure types — swing door, door-plus-fixed-panel, sliding bypass, walk-in panel — would look and function in your specific bathroom. We include hardware finish options so you can compare chrome, matte black, satin brass, and brushed nickel side by side.',
  },
  {
    q: 'Can architects or designers send us drawings instead of scheduling a site visit?',
    a: 'Absolutely. If you have floor plans, elevations, or 3D renders with dimensions, we can work from those to prepare a glass specification and configuration recommendation. We still recommend a site visit before fabrication to verify dimensions to 1/16" accuracy, but the design conversation can happen entirely from drawings.',
  },
  {
    q: 'Do you work directly with the design team or only with the homeowner?',
    a: 'Either way. On renovation projects, we often coordinate directly with the architect or interior designer — reviewing tile selections, hardware palettes, and clearance requirements before the homeowner is involved in the glass decision. We\'re comfortable in that workflow and can provide specification sheets, shop drawings, and COIs as needed.',
  },
  {
    q: 'How early in a renovation should we bring in the glass installer?',
    a: 'Ideally before tile is set. Knowing the enclosure type early allows us to advise on wall blocking for heavy glass panels, drain positioning relative to the door swing, and niche placement that won\'t interfere with hinges or clips. Bringing us in after tile is finished works too — we do it regularly — but earlier involvement avoids costly surprises.',
  },
  {
    q: 'What information do you need to prepare a configuration recommendation?',
    a: 'At minimum: the shower opening width and height, the wall and curb conditions (tile, stone, acrylic), whether there\'s a tub or a curbless threshold, and the client\'s aesthetic preference (minimal, traditional, bold hardware). Photos of the current bathroom are extremely helpful. If you have CAD drawings or mood boards, even better.',
  },
  {
    q: 'Is there a charge for the design consultation?',
    a: 'No. The consultation, measurement visit, and configuration review are all part of our standard process. We don\'t charge separately for design guidance — it\'s how we work on every project.',
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

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'We Design Before We Install: Shower Glass Consultation for Architects and Designers',
  description: 'How MetroGlassPro renders multiple shower enclosure configurations in your client\'s actual bathroom before fabrication — a design-first process for architects, interior designers, and renovation professionals.',
  author: { '@type': 'Organization', name: 'MetroGlassPro', url: 'https://metroglasspro.com' },
  publisher: { '@type': 'Organization', name: 'MetroGlassPro', url: 'https://metroglasspro.com' },
  datePublished: '2026-03-11',
  dateModified: '2026-03-11',
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
            <span className="text-[11px] font-medium tracking-wider uppercase text-charcoal/40 bg-charcoal/[0.04] px-2.5 py-1 rounded-full">Design Process</span>
            <span className="text-[11px] font-medium tracking-wider uppercase text-charcoal/40 bg-charcoal/[0.04] px-2.5 py-1 rounded-full">For Architects &amp; Designers</span>
            <span className="text-[11px] font-medium tracking-wider uppercase text-charcoal/40 bg-charcoal/[0.04] px-2.5 py-1 rounded-full">NYC</span>
          </div>
          <h1 className="heading-serif text-charcoal text-3xl sm:text-5xl lg:text-[56px]">
            We Design Before We Install: Shower Glass Consultation for Architects and Designers
          </h1>
          <p className="mt-4 text-charcoal/30 text-sm">March 2026</p>
        </div>
      </section>

      {/* ═══ HERO IMAGE ═══ */}
      <section className="bg-cream pb-6 sm:pb-10">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <div className="rounded-lg overflow-hidden img-editorial aspect-[16/9]">
            <img
              src="/editorial/design-process-sketch.jpg"
              alt="Napkin sketch of a bathroom design with shower enclosure configurations rendered on a tablet — hardware finishes annotated in gold, black, and chrome"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="mt-3 text-charcoal/25 text-xs italic text-center">From concept sketch to fabrication — we render multiple configurations before cutting a single panel.</p>
        </div>
      </section>

      {/* ═══ ARTICLE BODY ═══ */}
      <section className="bg-cream pb-20 sm:pb-28">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 prose-mgp">

          <p>
            Most glass installers show up, measure, and fabricate whatever the homeowner describes over the phone. That works for simple jobs. But if you&apos;re an architect specifying glass for a gut renovation, an interior designer coordinating a hardware palette across an entire bathroom, or a GC managing a high-end condo buildout — you need more than a tape measure and a lead time.
          </p>
          <p>
            You need someone who understands configurations, who can look at a bathroom and tell you why a sliding bypass will create sight-line problems at that vanity angle, or why a door-plus-fixed-panel with a channel mount will read cleaner than a full corner enclosure in a narrow space. Someone who thinks about the glass decision before the tile is grouted, not after.
          </p>
          <p>
            That&apos;s how we work at MetroGlassPro. We consult before we install.
          </p>

          <h2>Your bathroom, multiple configurations</h2>
          <p>
            When we take on a project — whether it comes through the homeowner, the designer, or the contractor — the first thing we do after measuring is study the space. Not just the opening width. The full bathroom: where the vanity sits relative to the shower entry, how the door swing interacts with the toilet clearance, where the showerhead and body sprays land, whether there&apos;s a bench or niche that constrains hinge placement.
          </p>
          <p>
            From there, we prepare multiple enclosure options for the same bathroom. A typical consultation might include three scenarios:
          </p>
          <ul>
            <li><strong>Option A — Single swing door.</strong> The most minimal read. One glass panel, two wall-mount hinges, a single handle. Works beautifully when the opening is 28&quot;–32&quot; and there&apos;s adequate swing clearance outside the shower.</li>
            <li><strong>Option B — Door plus fixed panel.</strong> Better for openings wider than 34&quot;. The fixed panel gives structure and reduces the weight on the hinges. We show how a glass-to-glass clamp versus a U-channel mount affects the visual weight of the connection.</li>
            <li><strong>Option C — Sliding bypass or barn-door track.</strong> Ideal when swing clearance is limited — common in NYC tub-shower combos. We illustrate the track profile and how it reads against the tile format above the opening.</li>
          </ul>
          <p>
            Each option is presented with hardware finish variations. The same enclosure reads completely differently in polished chrome versus satin brass versus matte black. When your client is choosing between a warm and cool material palette, seeing the glass hardware in context — not in a catalog swatch — makes the decision immediate.
          </p>

          <h2>Why this matters for the design team</h2>
          <p>
            If you&apos;ve ever had a client approve a bathroom design and then watched the glass installer show up with hardware that clashes with the faucet finish, you know the problem. Glass is one of the last trades to touch a bathroom, but it&apos;s one of the first things you see when you walk in. A mismatched hinge finish or an awkward panel proportion can undermine months of design work.
          </p>
          <p>
            By involving us early — ideally during schematic design or at latest during the tile selection phase — we can align the glass specification with the rest of the material palette. We&apos;ll tell you which CRL hinge profiles pair well with your plumbing fixtures, whether the glass thickness you&apos;re specifying requires a header bar for structural support, and whether a 90° corner enclosure is actually feasible given the wall conditions behind the tile.
          </p>
          <p>
            We&apos;ve worked with designers who send us their mood boards and fixture schedules. We&apos;ve worked with architects who send CAD elevations. We&apos;ve worked with GCs who call us to the site during rough-in to discuss blocking locations for heavy glass panels. Every one of those conversations prevents a problem that would otherwise surface on install day.
          </p>

          <h2>The details that get missed</h2>
          <p>
            Here are real scenarios we&apos;ve caught during the consultation phase — issues that would have been expensive to fix after fabrication:
          </p>
          <ul>
            <li><strong>Drain position vs. door swing.</strong> The linear drain was centered in the shower, but a swing door opening inward would have landed directly on it, creating a trip hazard at the threshold. We recommended an outward swing with a small fixed panel — same aesthetic, no interference with the drain.</li>
            <li><strong>Niche placement conflicting with hinge location.</strong> A recessed shampoo niche was spec&apos;d at a height that would have put it exactly where the top hinge needed to anchor. Moving the niche up 4&quot; during tile layout solved it. After tile? That&apos;s a demolition conversation.</li>
            <li><strong>Glass weight exceeding wall capacity.</strong> A 1/2&quot; glass panel at 72&quot; tall weighs over 100 lbs. The designer had specified a frameless walk-in panel mounted to a half-wall with no header. The half-wall was standard drywall over metal studs with no blocking. We flagged it during the measurement visit and coordinated with the GC to add plywood blocking behind the tile before the panel was ordered.</li>
            <li><strong>Hardware finish mismatch.</strong> The plumbing fixtures were Waterworks burnished brass. The client had asked a previous installer for &ldquo;gold hardware.&rdquo; Gold and burnished brass are not the same finish. We brought satin brass and polished brass hinge samples to the site so the designer could compare them against the actual faucet in the actual light of the bathroom.</li>
          </ul>
          <p>
            None of these are exotic situations. They happen on standard NYC bathroom renovations, every week. The difference is whether your glass installer catches them or creates them.
          </p>

          <h2>What we provide to the design team</h2>
          <p>
            Depending on the project scope, we can deliver:
          </p>
          <ul>
            <li><strong>Configuration layouts</strong> showing enclosure options overlaid on your bathroom plan or elevation.</li>
            <li><strong>Hardware finish comparison</strong> — physical samples or annotated references matched against your specified plumbing fixtures.</li>
            <li><strong>Glass specification sheets</strong> with thickness, tempering certification, edge treatment, and coating options (clear, low-iron, frosted, rain texture).</li>
            <li><strong>Shop drawings</strong> for review before fabrication, showing exact dimensions, hinge placement, clip locations, and silicone joint details.</li>
            <li><strong>COI and building documentation</strong> for co-op and condo projects — issued within 24 hours, naming your client&apos;s building and management company as additional insured.</li>
          </ul>
          <p>
            All of this is included in our standard process. We don&apos;t charge separately for consultation or specification work. It&apos;s how we operate on every project, because it&apos;s how good glass work gets done.
          </p>

          <h2>A note on timing</h2>
          <p>
            The ideal moment to bring us in is before tile is set — during rough-in or tile layout. That gives us the best opportunity to advise on blocking, drain coordination, and niche placement. But we understand that&apos;s not always how projects unfold.
          </p>
          <p>
            If you&apos;re calling us after tile is finished, that&apos;s fine. We do it constantly. We&apos;ll work with what&apos;s there and flag any constraints honestly. If a configuration won&apos;t work because of existing conditions, we&apos;ll tell you — and we&apos;ll tell you what will.
          </p>
          <p>
            Our fabrication lead time is 5–7 business days after final measurements are confirmed. Total timeline from first call to installed glass is typically two weeks.
          </p>

          <h2>For architects, designers, and contractors</h2>
          <p>
            If you&apos;re working on a residential project in NYC and you want a glass installer who operates as a design collaborator — not just a subcontractor who shows up with a drill — we&apos;d like to work with you.
          </p>
          <p>
            Send us your floor plans, elevations, or just a few photos of the space. We&apos;ll come back with configuration options, hardware recommendations, and a clear specification — before anything is fabricated.
          </p>
        </div>

        {/* CTA */}
        <div className="max-w-3xl mx-auto px-6 sm:px-10 mt-10">
          <div className="glass-card p-6 sm:p-8 text-center">
            <p className="font-serif text-charcoal text-xl sm:text-2xl mb-2">Working on a project?</p>
            <p className="text-warm text-[14px] mb-5">Send us drawings, dimensions, or photos. We&apos;ll prepare configuration options and hardware recommendations — no charge.</p>
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
              <p className="text-warm text-[13px]">Comparing two of the most popular frameless hinge profiles.</p>
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
        <img src="/editorial/water-droplets.jpg" alt="Water on glass surface" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="relative bg-charcoal/70 py-20 sm:py-28">
          <div className="max-w-2xl mx-auto px-6 sm:px-10 text-center">
            <h2 className="heading-serif text-white text-3xl sm:text-5xl">
              Glass is a design decision. Treat it like one.
            </h2>
            <p className="mt-4 text-white/50 text-base sm:text-lg">
              We consult, configure, and install — so the glass works with the design, not against it.
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
