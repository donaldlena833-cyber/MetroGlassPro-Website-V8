import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Shower Door Repair NYC',
  description: 'NYC shower door repair for leaks, dragging glass, loose hinges, worn sweeps, rollers, and failed installations. Send photos for a fast Manhattan-first estimate.',
  alternates: { canonical: 'https://metroglasspro.com/shower-door-repair-nyc/' },
  openGraph: {
    title: 'Shower Door Repair NYC | MetroGlass Pro',
    description: 'Repair leaking, dragging, or misaligned shower doors in NYC. Send photos for a fast diagnosis and repair-versus-replacement recommendation.',
  },
  twitter: { card: 'summary_large_image' },
}

const issues = [
  {
    title: 'Shower Door Leaking at the Bottom',
    description: 'Water escaping near the curb or door edge is often tied to sweep wear, silicone failure, or a door that was never aligned cleanly in the first place.',
  },
  {
    title: 'Door Dragging, Scraping, or Sagging',
    description: 'Doors that scrape tile, drift out of alignment, or stop closing cleanly usually need hardware review and a closer look at the original fit.',
  },
  {
    title: 'Loose Handle, Hinge, or Roller Problems',
    description: 'Handles, hinges, guides, sweeps, and rollers wear out, especially when the original install was rushed or the hardware was never adjusted correctly.',
  },
  {
    title: 'Bad Install by Another Company',
    description: 'Some problems are not normal wear at all. They come from poor measurements, wrong clips, careless sealing, or an installer who treated the bathroom like a quick stop.',
  },
]

const commonCauses = [
  'Incorrect original measurements that leave the door out of alignment or force the wrong sweep and seal setup.',
  'Worn sweeps, failing silicone, and loose hardware after years of daily use in a wet bathroom.',
  'Bad installation details, like wrong clips, poor anchoring, rushed silicone work, or hardware that was never adjusted correctly.',
  'Older framed systems with corroded parts, failing rollers, or outdated components that are no longer worth chasing.',
]

const repairableCases = [
  'Minor leaking caused by sweeps, silicone, or alignment issues',
  'Loose handles, hinges, guides, or other hardware',
  'Dragging doors that need adjustment or hardware review',
  'Wear issues where the glass is still sound and correctly sized',
]

const replacementCases = [
  'Cracked or chipped glass that creates a real safety concern',
  'Bad original measurements that leave the enclosure fundamentally wrong for the opening',
  'Old framed systems with too many failing parts at once',
  'Installations where the cleaner long term answer is a new enclosure, not another patch',
]

const manhattanScenarios = [
  {
    title: 'Compact Layouts',
    description: 'In smaller Manhattan bathrooms, a little misalignment can create a big usability problem because the shower, vanity, toilet, and entry door all compete for space.',
  },
  {
    title: 'Older Walls and Finished Tile',
    description: 'Older walls, finished stone, and previous renovation work can all affect how a repair needs to be approached and whether the existing system is still worth saving.',
  },
  {
    title: 'Occupied Building Logistics',
    description: 'Even a repair or replacement still has to work within co-op and condo rules, access windows, doorman procedures, and building expectations if the property is occupied.',
  },
]

const quoteReadinessItems = [
  'Photos of the full shower opening, taken straight on and from each side',
  'Close-ups of the leak, sweep, hinge, roller, handle, track, or silicone problem',
  'A short note on when the issue started and whether the door has been repaired before',
  'Approximate opening width, door height, and whether the bathroom is in a co-op, condo, rental, or house',
  'Any building requirements you already know, such as COI, freight elevator, or work-hour rules',
]

const repairDecisionSignals = [
  {
    title: 'Start with the actual failure point',
    description:
      'A leak at the curb, hinge-side drip, loose handle, dragging sweep, or roller problem each points to a different fix. Clear photos help us avoid guessing.',
  },
  {
    title: 'Check whether the glass was ever fit correctly',
    description:
      'If the original measurement was wrong, repeated sweep and silicone fixes may keep failing. That is when repair turns into replacement planning.',
  },
  {
    title: 'Separate worn parts from bad installation',
    description:
      'Worn sweeps and loose hardware are normal repair work. Wrong clips, poor anchoring, and sloppy silicone usually need a more serious remediation conversation.',
  },
  {
    title: 'Use replacement when repair would waste money',
    description:
      'Cracked glass, corroded framed systems, or a door that cannot align cleanly are usually better handled as a new shower door replacement.',
  },
]

const miniCases = [
  {
    eyebrow: 'Repair Pricing Guide',
    title: 'How to avoid overpaying for the wrong shower door fix',
    description: 'A practical repair guide for NYC homeowners who want a clear diagnosis, repair-versus-replacement options, and a fair conversation before approving the work.',
    href: '/blog/2026-05-09-honest-shower-door-repair-nyc',
    cta: 'Read the repair guide',
  },
  {
    eyebrow: 'Remediation Example',
    title: 'Fixing a shower door install that was done wrong the first time',
    description: 'This NYC design collaboration started with the wrong glass clip size, sloppy silicone, and a contractor who stopped responding. It is a useful example of when a shower door issue is really an install quality problem, not simple wear.',
    href: '/projects/interior-design-collaboration-shower-door-nyc/',
    cta: 'See the remediation story',
  },
  {
    eyebrow: 'Compact Manhattan Example',
    title: 'Choosing the cleaner long term answer for a Lower East Side bathroom',
    description: 'At 84 Clinton, the finished sliding enclosure changed both the look and day to day function of a compact bathroom. This is the kind of project that shows when replacement can be the smarter move than forcing one more repair.',
    href: '/projects/84-clinton-lower-east-side-shower-door-before-after/',
    cta: 'See the before and after',
  },
]

const faqs = [
  {
    q: 'Can a leaking shower door usually be repaired?',
    a: 'Sometimes, yes. If the glass is sound and the problem is coming from a worn sweep, failing silicone, or alignment issue, repair can often solve it. If the glass was measured wrong or the original installation was poor, replacement may be the better answer.',
  },
  {
    q: 'When should a shower door be replaced instead of repaired?',
    a: 'Replacement is usually the better choice when the glass is cracked, the system is badly outdated, the frame is corroded, or the original installation was wrong enough that another repair would only buy a little time.',
  },
  {
    q: 'Can you fix a shower door another installer put in?',
    a: 'Yes. We regularly evaluate shower doors installed by others, especially when the problem is bad alignment, poor sealing, wrong hardware, or an install that never felt right from day one.',
  },
  {
    q: 'Do you handle repair work in Manhattan co-ops and condos?',
    a: 'Yes. We work in Manhattan apartments, co-ops, condos, brownstones, and other occupied buildings. If the building needs a COI or scheduling coordination, we plan for that up front.',
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

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Shower Door Repair Manhattan and NYC',
  serviceType: 'Shower door repair',
  url: 'https://metroglasspro.com/shower-door-repair-nyc/',
  description:
    'Shower door repair guidance and repair-versus-replacement evaluation for Manhattan and NYC bathrooms, including leaks, dragging doors, loose hardware, and installation remediation.',
  provider: { '@id': 'https://metroglasspro.com/#business' },
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Manhattan, NY' },
    { '@type': 'City', name: 'New York, NY' },
  ],
}

export default function ShowerDoorRepairPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />

      <section className="bg-cream pt-20 sm:pt-32 pb-16 sm:pb-20">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 anim-hero">
          <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Shower Door Repair</p>
          <h1 className="heading-serif text-charcoal text-5xl sm:text-6xl lg:text-7xl">Repair the shower door problem before it turns into a bigger one.</h1>
          <p className="mt-5 text-warm text-base sm:text-lg max-w-2xl leading-relaxed">
            MetroGlass Pro handles leak issues, dragging doors, failing hardware, and bad install remediation for Manhattan and NYC buyers who want honest guidance on whether a door should be repaired or replaced.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="sms:+13329993846?body=Hi%20MetroGlass%20Pro%2C%20I%20have%20a%20shower%20door%20repair%20issue%20and%20can%20send%20photos." className="btn-pill btn-primary px-8 py-3 text-sm">Text Problem Photos</a>
            <Link href="/shower-door-replacement-nyc/" className="btn-pill btn-outline px-8 py-3 text-sm">Need Replacement Instead?</Link>
          </div>
        </div>
      </section>

      <section className="bg-cream-light py-16 sm:py-20 border-y border-charcoal/[0.04]">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 flex flex-wrap justify-center gap-x-10 gap-y-3 text-charcoal/40 text-[13px] font-medium tracking-wider uppercase">
          <span>Leak Evaluation</span>
          <span className="hidden sm:inline">·</span>
          <span>Hardware Problems</span>
          <span className="hidden sm:inline">·</span>
          <span>Bad Install Remediation</span>
          <span className="hidden sm:inline">·</span>
          <span>Repair or Replace Guidance</span>
        </div>
      </section>

      <section className="bg-cream pb-20 sm:pb-28">
        <div className="max-w-5xl mx-auto px-6 sm:px-10">
          <div className="max-w-2xl mb-12 anim-fade-up">
            <h2 className="heading-serif text-charcoal text-4xl sm:text-5xl">What buyers usually notice first.</h2>
            <p className="mt-5 text-warm text-[15px] leading-relaxed">
              A repair lead usually starts with a symptom, not a diagnosis. These are the problems Manhattan buyers mention most when they call, text photos, or ask whether the enclosure can be saved.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {issues.map((item, index) => (
              <div key={item.title} className={`glass-card p-6 anim-fade-up d${index + 1}`}>
                <h3 className="font-serif text-charcoal text-2xl mb-3">{item.title}</h3>
                <p className="text-warm text-[15px] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-light py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-6 sm:px-10">
          <div className="max-w-2xl mb-12 anim-fade-up">
            <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Common Causes</p>
            <h2 className="heading-serif text-charcoal text-4xl sm:text-5xl">The symptom is not always the real problem.</h2>
            <p className="mt-5 text-warm text-[15px] leading-relaxed">
              A leaking door is not always a simple leak fix. A dragging door is not always a quick adjustment. In Manhattan bathrooms, the real cause often comes back to the original measurement, the way the hardware was chosen, or how carefully the enclosure was installed.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commonCauses.map((item, index) => (
              <div key={item} className={`glass-card p-6 anim-fade-up d${index + 1}`}>
                <p className="text-warm text-[15px] leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-6 sm:px-10">
          <div className="max-w-2xl mb-12 anim-fade-up">
            <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Repair Strategy</p>
            <h2 className="heading-serif text-charcoal text-4xl sm:text-5xl">The right repair starts with deciding what is worth saving.</h2>
            <p className="mt-5 text-warm text-[15px] leading-relaxed">
              Not every shower door problem is a quick adjustment. The useful answer is to sort the issue into repair, remediation, or replacement before money is spent.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {repairDecisionSignals.map((item, index) => (
              <div key={item.title} className={`glass-card p-6 anim-fade-up d${index + 1}`}>
                <h3 className="font-serif text-charcoal text-2xl mb-3">{item.title}</h3>
                <p className="text-warm text-[15px] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-light py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass-card p-6 sm:p-8">
            <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Repair</p>
            <h2 className="font-serif text-charcoal text-3xl sm:text-4xl mb-4">A good repair can buy you time.</h2>
            <p className="text-warm text-[15px] leading-relaxed">
              If the glass is sound and the problem is more about sweeps, sealant, alignment, or hardware, repair can be the right call. We would rather tell you that honestly than push a replacement you do not need yet.
            </p>
          </div>
          <div className="glass-card p-6 sm:p-8">
            <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Replacement</p>
            <h2 className="font-serif text-charcoal text-3xl sm:text-4xl mb-4">Sometimes replacement is the cleaner answer.</h2>
            <p className="text-warm text-[15px] leading-relaxed">
              When the glass is the wrong size, the original install was poor, or the system is simply too dated to be worth chasing, a clean replacement is often the faster and better long term move.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass-card p-6 sm:p-8">
            <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Usually Repairable</p>
            <h2 className="font-serif text-charcoal text-3xl sm:text-4xl mb-5">What we can often fix.</h2>
            <div className="space-y-3">
              {repairableCases.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-charcoal/60">
                  <span className="text-orange mt-0.5 shrink-0">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-card p-6 sm:p-8">
            <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Usually Better to Replace</p>
            <h2 className="font-serif text-charcoal text-3xl sm:text-4xl mb-5">When patching is not the smart move.</h2>
            <div className="space-y-3">
              {replacementCases.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-charcoal/60">
                  <span className="text-orange mt-0.5 shrink-0">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream-light py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-6 sm:px-10">
          <div className="max-w-2xl mb-12 anim-fade-up">
            <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Symptom Checks</p>
            <h2 className="heading-serif text-charcoal text-4xl sm:text-5xl">The kinds of repair calls we sort out every week.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6">
              <h3 className="font-serif text-charcoal text-2xl mb-3">Leaking at the curb or bottom edge</h3>
              <p className="text-warm text-[15px] leading-relaxed">This can come from worn sweeps, old silicone, poor door alignment, or a bad original measurement that leaves the gap working against the bathroom every time the shower runs.</p>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-serif text-charcoal text-2xl mb-3">Door not closing smoothly</h3>
              <p className="text-warm text-[15px] leading-relaxed">If the door drags, scrapes, or feels heavy in the wrong way, we look at hinges, guides, settling, and whether the enclosure was set up correctly for the opening to begin with.</p>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-serif text-charcoal text-2xl mb-3">Loose hardware or sliding issues</h3>
              <p className="text-warm text-[15px] leading-relaxed">Loose handles, noisy rollers, worn guides, and wobble in the hardware can often be corrected if the glass is still sound and the system itself is worth saving.</p>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-serif text-charcoal text-2xl mb-3">An install that never felt right</h3>
              <p className="text-warm text-[15px] leading-relaxed">Some repair inquiries are really remediation jobs. The shower leaked from day one, the clips look wrong, the silicone looks rushed, or the whole enclosure feels off every time you use it.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-start">
          <div>
            <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Quote Readiness</p>
            <h2 className="heading-serif text-charcoal text-4xl sm:text-5xl">What helps us diagnose the repair faster.</h2>
            <p className="mt-5 text-warm text-[15px] leading-relaxed">
              A few clear details can separate a simple sweep or alignment fix from a replacement conversation. Send the problem photos first, then we can tell you what is worth checking on site.
            </p>
          </div>
          <div className="glass-card p-6 sm:p-8">
            <h3 className="font-serif text-charcoal text-2xl mb-5">Before requesting a repair quote</h3>
            <div className="space-y-3">
              {quoteReadinessItems.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-charcoal/60">
                  <span className="text-orange mt-0.5 shrink-0">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream-light py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-6 sm:px-10">
          <div className="max-w-2xl mb-12 anim-fade-up">
            <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Manhattan Specific</p>
            <h2 className="heading-serif text-charcoal text-4xl sm:text-5xl">What repair work looks like in Manhattan bathrooms.</h2>
            <p className="mt-5 text-warm text-[15px] leading-relaxed">
              A repair call in Manhattan is rarely just about the door. Tight clearances, finished tile, older walls, occupied apartments, and building access rules all shape how carefully the next step needs to be handled.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {manhattanScenarios.map((item, index) => (
              <div key={item.title} className={`glass-card p-6 anim-fade-up d${index + 1}`}>
                <h3 className="font-serif text-charcoal text-2xl mb-3">{item.title}</h3>
                <p className="text-warm text-[15px] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-6 sm:px-10">
          <div className="max-w-2xl mb-12">
            <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Field Examples</p>
            <h2 className="font-serif text-charcoal text-3xl sm:text-4xl mb-4">Real repair and replacement proof.</h2>
            <p className="text-warm text-[15px] leading-relaxed">
              We are still building out the full project library, but these examples already show the kind of real world problems that matter when a shower door is leaking, failing, or simply not worth patching again.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {miniCases.map((item) => (
              <Link key={item.href} href={item.href} className="glass-card p-6 card-lift block">
                <p className="text-orange text-[12px] font-semibold tracking-[0.2em] uppercase mb-3">{item.eyebrow}</p>
                <span className="text-charcoal font-serif text-2xl leading-snug block">{item.title}</span>
                <span className="text-warm text-[14px] leading-relaxed block mt-3">{item.description}</span>
                <span className="text-orange text-sm font-medium block mt-5">{item.cta} →</span>
              </Link>
            ))}
          </div>
          <div className="space-y-3">
            <Link href="/shower-door-replacement-nyc/" className="glass-card p-5 card-lift block">
              <span className="text-charcoal font-medium text-[15px]">Shower Door Replacement</span>
              <span className="text-warm text-[14px] leading-relaxed block mt-2">See what a full replacement looks like when the old enclosure is not worth saving or the original fit was wrong from day one.</span>
            </Link>
            <Link href="/service-areas/manhattan/" className="glass-card p-5 card-lift block">
              <span className="text-charcoal font-medium text-[15px]">Manhattan Shower Door Service</span>
              <span className="text-warm text-[14px] leading-relaxed block mt-2">Building access, COI, elevator, and tight-bathroom planning for Manhattan repair and replacement calls.</span>
            </Link>
            <Link href="/service-areas/queens/" className="glass-card p-5 card-lift block">
              <span className="text-charcoal font-medium text-[15px]">Queens Shower Door Service</span>
              <span className="text-warm text-[14px] leading-relaxed block mt-2">Repair and replacement planning for Queens homes, co-ops, condos, and multi-unit buildings.</span>
            </Link>
            <Link href="/projects/frameless-shower-door-cost-nyc/" className="glass-card p-5 card-lift block">
              <span className="text-charcoal font-medium text-[15px]">Frameless Shower Door Cost in NYC</span>
              <span className="text-warm text-[14px] leading-relaxed block mt-2">Use the cost guide when repair is no longer the right long-term answer and a replacement quote makes more sense.</span>
            </Link>
            <Link href="/projects/crl-geneva-vs-vienna-hinges/" className="glass-card p-5 card-lift block">
              <span className="text-charcoal font-medium text-[15px]">CRL Geneva vs Vienna Hinges</span>
              <span className="text-warm text-[14px] leading-relaxed block mt-2">Compare common frameless hinge options when loose or failing hardware points toward a new door package.</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-cream pb-20 sm:pb-28">
        <div className="max-w-3xl mx-auto px-6 sm:px-10">
          <div className="text-center mb-12">
            <h2 className="heading-serif text-charcoal text-4xl sm:text-5xl">Common repair questions.</h2>
          </div>
          <div className="space-y-0">
            {faqs.map((faq) => (
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

      <section className="bg-charcoal py-24 text-center">
        <div className="max-w-2xl mx-auto px-6 sm:px-10">
          <h2 className="heading-serif text-white text-4xl sm:text-5xl">Not sure if it should be repaired or replaced?</h2>
          <p className="mt-4 text-white/40 text-lg">Send a few photos and tell us what the door is doing. We can usually point you in the right direction quickly.</p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-3">
            <Link href="/contact/" className="btn-pill btn-primary px-10 py-3.5 text-sm">Request an Estimate</Link>
            <a href="sms:+13329993846?body=Hi%20MetroGlass%20Pro%2C%20I%20have%20a%20shower%20door%20problem%20and%20can%20send%20photos." className="btn-pill btn-outline-light px-10 py-3.5 text-sm">Text Photos</a>
          </div>
        </div>
      </section>
    </>
  )
}
