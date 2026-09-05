import Link from 'next/link'

export default function ShowerDoorQuickAnswers() {
  return (
    <section aria-labelledby="shower-door-answers" className="bg-cream-light py-12 sm:py-16 border-b border-charcoal/10">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <h2 id="shower-door-answers" className="font-serif text-charcoal text-3xl sm:text-4xl mb-8">Planning your shower door.</h2>
        <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-base leading-relaxed">
          <div>
            <dt className="font-semibold text-charcoal mb-2">What we install</dt>
            <dd className="text-warm">Custom swing doors, sliding doors, fixed panels, tub screens, and corner enclosures. We also assess existing doors for <Link className="underline underline-offset-4" href="/shower-door-repair-nyc/">repair</Link> or replacement.</dd>
          </div>
          <div>
            <dt className="font-semibold text-charcoal mb-2">What to budget</dt>
            <dd className="text-warm">Published ranges start at $800–$1,600+ for a single swing door and reach $2,200–$4,500+ for corner enclosures. <Link className="underline underline-offset-4" href="/projects/frameless-shower-door-cost-nyc/">Compare prices by layout</Link>. Final pricing follows measurement.</dd>
          </div>
          <div>
            <dt className="font-semibold text-charcoal mb-2">Where we work</dt>
            <dd className="text-warm">Manhattan, Brooklyn, Queens, the Bronx, and Staten Island. Share co-op or condo requirements early so we can coordinate the COI, elevator, and installation window.</dd>
          </div>
          <div>
            <dt className="font-semibold text-charcoal mb-2">How to get a quote</dt>
            <dd className="text-warm">Send photos, your neighborhood, approximate dimensions if known, and whether this is a new installation, replacement, or repair. <Link className="underline underline-offset-4" href="/contact/">Request a free estimate</Link> or <a className="underline underline-offset-4" href="sms:+13329993846">text (332) 999-3846</a>.</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
