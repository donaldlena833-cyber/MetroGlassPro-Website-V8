import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Co-op & Condo Shower Door Installation NYC — What You Need to Know | MetroGlassPro',
  description: 'Installing shower doors in a NYC co-op or condo? Learn about COI requirements, building coordination, freight elevator scheduling, quiet hours, and what your management company needs before install day.',
  alternates: { canonical: 'https://metroglasspro.com/projects/coop-condo-shower-door-installation-nyc/' },
  openGraph: {
    title: 'Co-op & Condo Shower Door Installation NYC — Building Requirements Guide',
    description: 'Everything NYC co-op and condo owners need to know before installing a frameless shower door: COI, building rules, freight access, and more.',
    url: 'https://metroglasspro.com/projects/coop-condo-shower-door-installation-nyc/',
    type: 'article',
  },
  twitter: { card: 'summary_large_image' },
}

const faqs = [
  {
    q: 'Do I need board approval to install a shower door in my NYC co-op?',
    a: 'Most co-ops do not require board approval for a shower door replacement — it falls under minor cosmetic work. However, your management company will almost always require a Certificate of Insurance (COI) from the installer and advance notice for freight elevator use. Some stricter co-ops require a signed alteration agreement even for small jobs. Always check with your managing agent first.',
  },
  {
    q: 'What is a COI and why does my building need one?',
    a: 'A Certificate of Insurance (COI) proves your installer carries general liability and workers\' compensation insurance. NYC co-ops and condos require this to protect the building and other residents in case of property damage or injury during the work. MetroGlassPro provides COIs at no charge — we issue them within 24 hours, naming your building and management company as additional insured.',
  },
  {
    q: 'How do you handle freight elevator reservations?',
    a: 'We coordinate directly with your building\'s super or management office. Glass panels are heavy and fragile — they need a freight elevator, not the passenger elevator. We schedule our arrival to match your building\'s reserved freight window and stage materials in the lobby or service area as required.',
  },
  {
    q: 'Can you work within my building\'s quiet hours?',
    a: 'Yes. Most NYC buildings restrict construction noise to weekdays between 8 AM and 5 PM (some allow until 6 PM). Shower door installation is not excessively loud — no demolition or power-cutting — but we always confirm your building\'s specific rules and work within them.',
  },
  {
    q: 'What if my bathroom has old tile — can you still install frameless glass?',
    a: 'In most cases, yes. Frameless doors mount to the wall with clips, hinges, or U-channels that anchor into the tile and substrate behind it. If your tile is loose, cracked, or hollow behind the mounting points, we\'ll let you know before we drill. Occasionally, pre-war tile needs a slightly different anchoring approach, and we plan for that during the measurement visit.',
  },
  {
    q: 'How long does the whole process take from first call to installed door?',
    a: 'Typically 10–14 days. We schedule a measurement visit (about 30 minutes), then custom-fabricate your glass (5–7 business days). Installation day itself is 2–4 hours. Building coordination — COI, freight elevator reservation — happens in parallel and doesn\'t add to the timeline.',
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
  headline: 'Co-op & Condo Shower Door Installation NYC — What You Need to Know',
  description: 'A practical guide for NYC co-op and condo owners installing frameless shower doors: building requirements, COI, freight access, quiet hours, and what to expect.',
  author: { '@type': 'Organization', name: 'MetroGlassPro', url: 'https://metroglasspro.com' },
  publisher: { '@type': 'Organization', name: 'MetroGlassPro', url: 'https://metroglasspro.com' },
  datePublished: '2026-03-11',
  dateModified: '2026-03-11',
  mainEntityOfPage: 'https://metroglasspro.com/projects/coop-condo-shower-door-installation-nyc/',
  image: 'https://metroglasspro.com/editorial/shower-door.jpg',
}

export default function CoopCondoArticle() {
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
            <span className="text-[11px] font-medium tracking-wider uppercase text-charcoal/40 bg-charcoal/[0.04] px-2.5 py-1 rounded-full">Co-op &amp; Condo</span>
            <span className="text-[11px] font-medium tracking-wider uppercase text-charcoal/40 bg-charcoal/[0.04] px-2.5 py-1 rounded-full">Building Guide</span>
            <span className="text-[11px] font-medium tracking-wider uppercase text-charcoal/40 bg-charcoal/[0.04] px-2.5 py-1 rounded-full">NYC</span>
          </div>
          <h1 className="heading-serif text-charcoal text-3xl sm:text-5xl lg:text-6xl">
            Co-op &amp; Condo Shower Door Installation in NYC: What You Need to Know
          </h1>
          <p className="mt-4 text-charcoal/30 text-sm">March 2026</p>
        </div>
      </section>

      {/* ═══ HERO IMAGE ═══ */}
      <section className="bg-cream pb-6 sm:pb-10">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <div className="rounded-lg overflow-hidden img-editorial aspect-[16/9]">
            <img src="/editorial/shower-door.jpg" alt="Frameless shower door installed in a NYC co-op apartment bathroom" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* ═══ ARTICLE BODY ═══ */}
      <section className="bg-cream pb-20 sm:pb-28">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 prose-mgp">
          <p>
            If you own a co-op or condo in New York City and you&apos;re thinking about upgrading your shower door, the glass itself is the easy part. The harder part — the part most installers gloss over — is dealing with your building. COI paperwork, freight elevator scheduling, superintendent coordination, quiet hours, and alteration agreements can turn a straightforward bathroom upgrade into a headache if your installer doesn&apos;t know the drill.
          </p>
          <p>
            We&apos;ve installed frameless shower doors in over 200 NYC buildings — from pre-war co-ops on the Upper West Side to new-construction condos in Williamsburg. Here&apos;s what every co-op and condo owner should know before starting the process.
          </p>

          <h2>The Certificate of Insurance (COI) — your building&apos;s #1 requirement</h2>
          <p>
            Before any work happens in a NYC co-op or condo, your management company will ask for a Certificate of Insurance from the contractor. This document proves the installer carries general liability insurance (typically $1M–$2M) and workers&apos; compensation coverage. The COI needs to name your building&apos;s management company and sometimes the co-op corporation or condo association as &ldquo;additional insured.&rdquo;
          </p>
          <p>
            This is non-negotiable. If your installer can&apos;t provide a COI, your building will not allow them in. Some buildings also require the COI to be on file at least 48 hours before the scheduled work date.
          </p>
          <p>
            At MetroGlassPro, we issue COIs at no extra charge. We send them directly to your management office within 24 hours of your request, customized with your building&apos;s exact naming requirements. We handle this for every co-op and condo job — it&apos;s standard for us, not an afterthought.
          </p>

          <h2>Freight elevator access and material staging</h2>
          <p>
            Glass panels are heavy, fragile, and awkward to carry. A single 3/8&quot; tempered glass panel for a standard shower door weighs roughly 70–90 lbs. It cannot go in a passenger elevator — buildings will not allow it, and it&apos;s a liability risk.
          </p>
          <p>
            Most NYC co-ops and condos have designated freight elevator hours, often in the morning (typically 8–10 AM or 9–11 AM). We coordinate with your building super or management office to reserve the freight elevator on install day. When we arrive, we stage materials in the service entrance or lobby staging area as your building requires, then move everything up in a single freight trip.
          </p>
          <p>
            For walk-up buildings (typically 5 stories or fewer), freight isn&apos;t an issue — but we still need to plan for stairway clearance. Most glass panels fit through standard NYC stairwells, but unusually large panels or tight turns on narrow pre-war staircases occasionally require us to adjust the panel breakdown.
          </p>

          <h2>Quiet hours and building work schedules</h2>
          <p>
            NYC residential buildings almost universally enforce quiet hours for construction work. The typical window is Monday through Friday, 8 AM to 5 PM (some buildings allow until 6 PM). Saturday work is permitted in some condos but rarely in co-ops. Sunday work is almost never allowed.
          </p>
          <p>
            Shower door installation is not a loud job — there&apos;s no jackhammering, no tile demolition, and no power-cutting glass on-site. The noisiest part is drilling anchor holes into tile and wall substrate for hinges and clips, which takes about 10–15 minutes total. Still, we always confirm your building&apos;s specific rules and schedule within them. Most installations are completed well within a single work-hours window.
          </p>

          <h2>Alteration agreements: when do you need one?</h2>
          <p>
            For most co-ops and condos, replacing a shower door counts as minor cosmetic work — not a formal alteration. That means you typically don&apos;t need board approval or an alteration agreement.
          </p>
          <p>
            However, some stricter co-ops (especially older ones on the Upper East Side, Park Avenue, and Central Park West) require a signed minor alteration agreement for any contractor work inside the unit, even for a shower door. This is a simple form — usually one or two pages — that your managing agent provides.
          </p>
          <p>
            If your building requires one, we&apos;ll help you fill out the contractor information section and provide all the documentation (COI, scope of work description) that the agreement calls for.
          </p>

          <h2>Pre-war buildings: tile, plumbing, and anchoring considerations</h2>
          <p>
            Pre-war co-ops (built before ~1940) come with their own quirks. The tile is often original subway tile or hex mosaic set in a thick mortar bed. The walls behind the tile may be plaster over metal lath rather than cement board or drywall.
          </p>
          <p>
            This affects how we anchor the glass hardware. Modern frameless shower doors mount with wall clips, U-channels, or hinges that require drilling into the wall. In pre-war buildings, we use specific anchoring techniques for plaster-and-lath walls — typically sleeve anchors or toggle bolts rather than standard wall plugs — to ensure a rock-solid mount.
          </p>
          <p>
            We identify this during the measurement visit. If we see potential issues (hollow-sounding tile, crumbling grout, or substrate that won&apos;t hold an anchor), we&apos;ll tell you before any work begins. No surprises on install day.
          </p>

          <h2>New construction condos: tempered glass code compliance</h2>
          <p>
            If you&apos;re in a newer condo (built after 2010), your bathroom likely already meets current NYC building code for wet-area glass. All glass in shower enclosures must be tempered safety glass per NYC Building Code and ANSI Z97.1/CPSC 16 CFR 1201 standards — every panel we install meets or exceeds these requirements.
          </p>
          <p>
            New-construction condos also tend to have cement board or Kerdi membrane behind the tile, which makes anchoring hardware straightforward. The biggest variable in new builds is usually the tile format (large-format porcelain requires carbide or diamond-tip bits and a steady hand to avoid cracking).
          </p>

          <h2>What the process actually looks like, step by step</h2>
          <p>
            Here&apos;s how a typical co-op or condo shower door installation works with MetroGlassPro:
          </p>
          <ul>
            <li><strong>Day 1 — Contact and quote.</strong> You reach out with your bathroom dimensions or photos. We give you a ballpark range and schedule a measurement visit.</li>
            <li><strong>Day 2–3 — Measurement visit.</strong> We come to your apartment (30 minutes), template the opening to 1/16&quot; accuracy, discuss glass thickness, hardware finish, and configuration. We also assess wall conditions and any building-specific logistics.</li>
            <li><strong>Day 3 — COI and building coordination.</strong> We send the COI to your management company and work with your super to schedule the freight elevator for install day. This happens in parallel with fabrication.</li>
            <li><strong>Day 3–10 — Custom fabrication.</strong> Your glass is cut, tempered, and polished to your exact measurements. Hardware is matched and prepared.</li>
            <li><strong>Day 10–14 — Installation.</strong> We arrive during your building&apos;s approved work hours, bring everything up via freight, and install in 2–4 hours. We clean up, remove all packaging, and walk you through care instructions.</li>
          </ul>
          <p>
            Total timeline: about two weeks from first call to finished shower. The glass looks incredible. The building paperwork is handled. And you didn&apos;t have to chase your installer for a single document.
          </p>

          <h2>Why building experience matters for your installer</h2>
          <p>
            An installer who&apos;s never worked in a NYC co-op will waste your time and possibly get turned away at the door. We&apos;ve seen it happen — a homeowner books an installer, the installer shows up without a COI, the doorman calls management, and the whole job gets rescheduled two weeks later. Or worse: the installer doesn&apos;t reserve the freight elevator and tries to carry glass through the passenger elevator, scratching the cab walls on the way up.
          </p>
          <p>
            At MetroGlassPro, co-op and condo installations are our core business. We know the protocols because we do them every week. We carry the insurance, we provide the paperwork, and we coordinate with your building so install day goes smoothly.
          </p>

          <h2>Ready to get started?</h2>
          <p>
            If you&apos;re a co-op or condo owner in NYC looking to install or replace a shower door, we&apos;d love to hear from you. Free estimates, COI provided, and we handle all the building coordination.
          </p>
        </div>

        {/* CTA */}
        <div className="max-w-3xl mx-auto px-6 sm:px-10 mt-10">
          <div className="glass-card p-6 sm:p-8 text-center">
            <p className="font-serif text-charcoal text-xl sm:text-2xl mb-2">Free estimates for co-op &amp; condo owners</p>
            <p className="text-warm text-[14px] mb-5">COI provided at no charge. We handle all building coordination.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link href="/contact/" className="btn-pill btn-primary px-8 py-3 text-sm">
                Get a Free Estimate
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
              Co-op &amp; condo FAQ
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
              <p className="text-warm text-[13px]">Glass options, hardware finishes, configurations, and pricing.</p>
            </Link>
            <Link href="/shower-door-installation-nyc/" className="glass-card p-5 hover:bg-charcoal/[0.02] transition-colors">
              <h3 className="font-serif text-charcoal text-lg mb-1">Shower Door Installation NYC</h3>
              <p className="text-warm text-[13px]">Our full installation process from measurement to finished shower.</p>
            </Link>
            <Link href="/service-areas/manhattan/" className="glass-card p-5 hover:bg-charcoal/[0.02] transition-colors">
              <h3 className="font-serif text-charcoal text-lg mb-1">Manhattan Service Area</h3>
              <p className="text-warm text-[13px]">Coverage across all Manhattan neighborhoods and building types.</p>
            </Link>
            <Link href="/projects/single-swing-door-nyc/" className="glass-card p-5 hover:bg-charcoal/[0.02] transition-colors">
              <h3 className="font-serif text-charcoal text-lg mb-1">Single Swing Door Guide</h3>
              <p className="text-warm text-[13px]">NYC&apos;s most popular configuration — what to know.</p>
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
              Your building. Our expertise.
            </h2>
            <p className="mt-4 text-white/50 text-base sm:text-lg">
              We handle COIs, freight coordination, and building protocols — so you don&apos;t have to.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
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
