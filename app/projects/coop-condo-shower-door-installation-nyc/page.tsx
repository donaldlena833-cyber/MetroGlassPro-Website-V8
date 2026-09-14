import ResponsiveImage from '@/components/ResponsiveImage'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Co-op and Condo Shower Door Installation in NYC',
  description: 'Planning a shower door in an NYC co-op or condo? Learn about COIs, building coordination, freight elevators, work hours, and install-day needs.',
  alternates: { canonical: 'https://metroglasspro.com/projects/coop-condo-shower-door-installation-nyc/' },
  openGraph: {
    title: 'Co-op and Condo Shower Door Installation in NYC',
    description: 'Everything NYC co-op and condo owners need to know before installing a frameless shower door: COI, building rules, freight access, and more.',
    url: 'https://metroglasspro.com/projects/coop-condo-shower-door-installation-nyc/',
    type: 'article',
    images: ['https://metroglasspro.com/editorial/shower-door.jpg'],
  },
  twitter: { card: 'summary_large_image', images: ['https://metroglasspro.com/editorial/shower-door.jpg'] },
}

const faqs = [
  {
    q: 'Do I need board approval to install a shower door in my NYC co-op?',
    a: 'Ask your managing agent before scheduling. A building may treat a shower door as minor work, but its board, alteration agreement, insurance, access, and notice rules are specific to that property. Get the written requirements and share them with the installer before fabrication or an installation date is confirmed.',
  },
  {
    q: 'What is a COI and why does my building need one?',
    a: 'A certificate of insurance summarizes specified insurance coverage. If your building requests one, ask management for its exact certificate holder, additional insured, policy limit, and submission instructions. Send those requirements to MetroGlass Pro so current documentation and timing can be confirmed for your project; the building makes the final acceptance decision.',
  },
  {
    q: 'How do you handle freight elevator reservations?',
    a: 'First confirm who must reserve the elevator, the allowed delivery entrance, protection rules, panel-size limits, and the approved arrival window. Share those instructions before installation is scheduled. The installation plan can then account for the building\'s actual access route instead of assuming a passenger or freight elevator is available.',
  },
  {
    q: 'Can you work within my building\'s quiet hours?',
    a: 'Send the building\'s permitted work days and hours, notice period, and any drilling restrictions with the estimate request. On-site work can be planned within an approved window once the installation scope and access requirements are known.',
  },
  {
    q: 'What if my bathroom has old tile — can you still install frameless glass?',
    a: 'It depends on the tile, substrate, proposed hardware, and mounting locations. Loose or cracked tile and uncertain backing can change the layout or require other work before glass installation. Send overall and close-up photos, but expect the mounting conditions to be assessed before fabrication.',
  },
  {
    q: 'How long does the whole process take from first call to installed door?',
    a: 'There is no single timeline for every building or enclosure. Field measurement, final design approval, glass fabrication, insurance review, elevator reservations, permitted work hours, removal work, and sealant cure instructions can all affect the schedule. MetroGlass Pro confirms timing after the glass scope and building requirements are reviewed.',
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
  logo: { '@type': 'ImageObject', url: 'https://metroglasspro.com/assets/logo.png' },
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Co-op & Condo Shower Door Installation NYC — What You Need to Know',
  description: 'A practical guide for NYC co-op and condo owners installing frameless shower doors: building requirements, COI, freight access, quiet hours, and what to expect.',
  author: metroGlassOrganization,
  publisher: metroGlassOrganization,
  datePublished: '2026-03-11',
  dateModified: '2026-09-14',
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
          <p className="mt-4 text-charcoal/30 text-sm">Published March 2026 · Updated September 14, 2026</p>
        </div>
      </section>

      {/* ═══ HERO IMAGE ═══ */}
      <section className="bg-cream pb-6 sm:pb-10">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <div className="rounded-lg overflow-hidden img-editorial aspect-[16/9]">
            <ResponsiveImage src="/editorial/shower-door.jpg" alt="Frameless shower door installed in a NYC co-op apartment bathroom" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* ═══ ARTICLE BODY ═══ */}
      <section className="bg-cream pb-20 sm:pb-28">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 prose-mgp">
          <p>
            A shower door project in a New York City co-op or condo has two scopes: the glass work and the building&apos;s access and documentation process. The useful first step is to get the property&apos;s written requirements before anyone promises a delivery or installation date.
          </p>
          <p>
            The checklist below separates what the resident needs to obtain, what MetroGlass Pro needs to review, and what should be confirmed before custom glass is fabricated.
          </p>

          <h2>Start with the building&apos;s written instructions</h2>
          <p>
            Ask the managing agent or superintendent whether the work needs advance notice, an alteration form, insurance documentation, an approved vendor list, an elevator reservation, hallway protection, or restricted work hours. Requirements vary by property, so a rule from another building is not reliable evidence for yours.
          </p>
          <p>
            Send the actual instructions with the estimate request. If the building uses a portal or a management-company form, confirm who must upload each document and when the building will give written clearance.
          </p>

          <h2>Certificate of insurance and building approval</h2>
          <p>
            If management requests a certificate of insurance, obtain its exact certificate holder, additional insured wording, policy limits, submission address, and lead time. MetroGlass Pro can then confirm whether current documentation can meet that request. A certificate request is not automatically approved; the building or its management company decides whether the submission is acceptable.
          </p>
          <p>
            Do not schedule around a generic promise such as &ldquo;COI available&rdquo; or assume every building uses the same form. Treat written approval and the installation appointment as separate checkpoints.
          </p>

          <h2>Plan the complete access route</h2>
          <p>
            Glass panel size, stair turns, elevator dimensions, loading access, service entrances, and floor protection can affect both the enclosure layout and the installation plan. Ask who reserves the elevator and whether the building limits delivery times or panel sizes.
          </p>
          <p>
            Share photos of the lobby or service entrance only when management allows it. More important, provide the written route and restrictions so the field-measurement and delivery plan use the same assumptions.
          </p>

          <h2>Work hours, drilling, and alteration agreements</h2>
          <p>
            Buildings set their own permitted work days, work hours, notice periods, and drilling rules. Some may treat a shower enclosure as minor work; others may require an alteration package or board review. Ask the building to classify the proposed work instead of relying on a citywide rule of thumb.
          </p>
          <p>
            If the shower door is part of a larger bathroom renovation involving plumbing, walls, waterproofing, structure, or other trades, the project team should separately confirm permit and code responsibilities. The <a href="https://www.nyc.gov/site/buildings/codes/2022-construction-codes.page">NYC Department of Buildings publishes the current construction-code resources</a>; a glass estimate is not a permit determination.
          </p>

          <h2>Tile, substrate, and mounting conditions</h2>
          <p>
            The visible tile does not reveal every condition behind it. Loose tile, cracks, uncertain backing, waterproofing details, out-of-plumb walls, and the proposed hinge or channel locations can change the appropriate enclosure or require other work first.
          </p>
          <p>
            Send straight-on photos of the full opening and close-ups of any damage. Final mounting and glass decisions should follow a site assessment; do not choose anchors or assume the existing finish can support a specific layout from photos alone.
          </p>

          <h2>What to send for a useful first review</h2>
          <ul>
            <li><strong>Opening:</strong> full shower photos, approximate width and height, curb or tub details, and the nearby toilet or vanity.</li>
            <li><strong>Desired layout:</strong> swing door, slider, door with fixed panel, corner enclosure, or an undecided note.</li>
            <li><strong>Existing work:</strong> whether tile is finished, whether an old enclosure must be removed, and any visible cracks or loose finishes.</li>
            <li><strong>Building:</strong> address, building type, floor, permitted work hours, access route, protection rules, and elevator instructions.</li>
            <li><strong>Documents:</strong> the management form, insurance wording, alteration instructions, or design drawings that apply to this unit.</li>
          </ul>

          <h2>A realistic sequence without a blanket deadline</h2>
          <ol>
            <li><strong>Initial review.</strong> Photos, rough dimensions, desired layout, removal needs, and building instructions define the first scope.</li>
            <li><strong>Field measurement.</strong> Finished conditions, hardware locations, swing clearance, and access are checked before custom glass is ordered.</li>
            <li><strong>Scope and approvals.</strong> Confirm the enclosure, price, fabrication basis, required documents, and who is responsible for building clearance.</li>
            <li><strong>Fabrication and scheduling.</strong> Timing is confirmed for the selected glass and hardware after approvals and access windows are known.</li>
            <li><strong>Installation and cure instructions.</strong> Protect the route and work area, install to the agreed scope, and follow the specific sealant cure and shower-use instructions provided after installation.</li>
          </ol>
          <p>
            The duration depends on the enclosure, finished site conditions, material availability, building review, elevator access, removal work, and the permitted installation window. Ask for the project-specific sequence in writing rather than planning around a universal two-week promise.
          </p>

          <h2>Match the building plan to the right shower door page</h2>
          <p>
            If the bathroom is already tiled and ready for glass, read the <Link href="/shower-door-installation-nyc/">installation guide</Link>. If you are removing an older framed or semi-frameless enclosure, compare the <Link href="/shower-door-replacement-nyc/">replacement path</Link>. If the issue is only a leak, sweep, hinge, or alignment problem, start with <Link href="/shower-door-repair-nyc/">repair</Link>. Manhattan and Queens buyers should also use the local service-area pages so access rules, COI needs, and elevator planning are discussed before fabrication.
          </p>

          <h2>Ready to get started?</h2>
          <p>
            Send shower photos, rough dimensions, the building&apos;s written requirements, and your preferred contact method. MetroGlass Pro will review the glass scope and identify the documentation and access details that still need confirmation.
          </p>
        </div>

        {/* CTA */}
        <div className="max-w-3xl mx-auto px-6 sm:px-10 mt-10">
          <div className="glass-card p-6 sm:p-8 text-center">
            <p className="font-serif text-charcoal text-xl sm:text-2xl mb-2">Free estimates for co-op &amp; condo owners</p>
            <p className="text-warm text-[14px] mb-5">Share the building instructions early so documentation, access, and scheduling can be reviewed with the glass scope.</p>
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
            <Link href="/service-areas/queens/" className="glass-card p-5 hover:bg-charcoal/[0.02] transition-colors">
              <h3 className="font-serif text-charcoal text-lg mb-1">Queens Service Area</h3>
              <p className="text-warm text-[13px]">Co-op, condo, and elevator-building planning for Queens shower glass projects.</p>
            </Link>
            <Link href="/projects/frameless-shower-door-cost-nyc/" className="glass-card p-5 hover:bg-charcoal/[0.02] transition-colors">
              <h3 className="font-serif text-charcoal text-lg mb-1">Frameless Shower Door Cost</h3>
              <p className="text-warm text-[13px]">Planning ranges, quote factors, hardware, and building coordination.</p>
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
              Bring the building requirements into the estimate.
            </h2>
            <p className="mt-4 text-white/50 text-base sm:text-lg">
              Send the management instructions, shower photos, and access details so the next step is based on your actual property.
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
