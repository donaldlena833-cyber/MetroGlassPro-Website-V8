import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Shower Door Repair Manhattan and NYC',
  description: 'Shower door repair for Manhattan and NYC bathrooms, including leak issues, dragging doors, hardware problems, and bad install remediation.',
  alternates: { canonical: 'https://metroglasspro.com/shower-door-repair-nyc/' },
  openGraph: {
    title: 'Shower Door Repair in Manhattan and NYC',
    description: 'Shower door repair for Manhattan and NYC bathrooms, including leak issues, dragging doors, hardware problems, and bad install remediation.',
  },
  twitter: { card: 'summary_large_image' },
}

const issues = [
  {
    title: 'Leaks and Water Escape',
    description: 'Silicone failure, poor alignment, and bad fit can all lead to water where it should not be.',
  },
  {
    title: 'Dragging or Misaligned Doors',
    description: 'Doors that scrape, sag, or stop closing cleanly usually need hardware review and a closer look at the original fit.',
  },
  {
    title: 'Loose Hardware or Old Parts',
    description: 'Handles, hinges, sweeps, and rollers wear out, especially when the original install was rushed.',
  },
  {
    title: 'Bad Install Remediation',
    description: 'Some problems are not normal wear. They come from poor measurements, wrong clips, or careless installation.',
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
    title: 'Older Construction',
    description: 'Pre-war walls, older tile, and previous renovation work can all affect how a repair needs to be approached and whether the existing system is still worth saving.',
  },
  {
    title: 'Building Logistics',
    description: 'Even a repair or replacement still has to work within co-op and condo rules, access windows, and building expectations if the property is occupied.',
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

export default function ShowerDoorRepairPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

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
            <h2 className="heading-serif text-charcoal text-4xl sm:text-5xl">Common reasons buyers call us.</h2>
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
            <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Manhattan Specific</p>
            <h2 className="heading-serif text-charcoal text-4xl sm:text-5xl">What repair work looks like in Manhattan bathrooms.</h2>
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
        <div className="max-w-3xl mx-auto px-6 sm:px-10">
          <h2 className="font-serif text-charcoal text-2xl sm:text-3xl mb-6">Real examples and related proof</h2>
          <div className="space-y-3">
            <Link href="/projects/interior-design-collaboration-shower-door-nyc/" className="glass-card p-5 card-lift block">
              <span className="text-charcoal font-medium text-[15px]">Fixing a Shower Door Install Gone Wrong</span>
              <span className="text-warm text-[14px] leading-relaxed block mt-2">A real remediation story showing what happens when precision and accountability are missing the first time.</span>
            </Link>
            <Link href="/projects/84-clinton-lower-east-side-shower-door-before-after/" className="glass-card p-5 card-lift block">
              <span className="text-charcoal font-medium text-[15px]">84 Clinton Before and After</span>
              <span className="text-warm text-[14px] leading-relaxed block mt-2">A Lower East Side bathroom showing how the right finished enclosure can change the feel and function of a compact space.</span>
            </Link>
            <Link href="/shower-door-replacement-nyc/" className="glass-card p-5 card-lift block">
              <span className="text-charcoal font-medium text-[15px]">Shower Door Replacement</span>
              <span className="text-warm text-[14px] leading-relaxed block mt-2">See what a full replacement looks like when the old enclosure is not worth saving.</span>
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
