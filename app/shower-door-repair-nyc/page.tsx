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

export default function ShowerDoorRepairPage() {
  return (
    <>
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

      <section className="bg-cream py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-6 sm:px-10">
          <h2 className="font-serif text-charcoal text-2xl sm:text-3xl mb-6">Related Proof</h2>
          <div className="space-y-3">
            <Link href="/projects/interior-design-collaboration-shower-door-nyc/" className="glass-card p-5 card-lift block">
              <span className="text-charcoal font-medium text-[15px]">Fixing a Shower Door Install Gone Wrong</span>
              <span className="text-warm text-[14px] leading-relaxed block mt-2">A real remediation story showing what happens when precision and accountability are missing the first time.</span>
            </Link>
            <Link href="/shower-door-replacement-nyc/" className="glass-card p-5 card-lift block">
              <span className="text-charcoal font-medium text-[15px]">Shower Door Replacement</span>
              <span className="text-warm text-[14px] leading-relaxed block mt-2">See what a full replacement looks like when the old enclosure is not worth saving.</span>
            </Link>
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
