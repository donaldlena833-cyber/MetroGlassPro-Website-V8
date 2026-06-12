import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'MetroGlass Pro Reviews | NYC Shower Door Installers',
  description: 'Read MetroGlass Pro reviews and learn how to evaluate NYC shower door installers for measurement, repair, replacement, building access, and clean installation.',
  alternates: { canonical: 'https://metroglasspro.com/reviews/' },
  openGraph: {
    title: 'MetroGlass Pro Reviews | NYC Shower Door Installers',
    description: 'Read customer reviews and learn how to evaluate shower door installers for fit, repair, replacement, and clean installation.',
  },
  twitter: { card: 'summary_large_image' },
}

const reviews = [
  { name: 'Valeria H.', text: "I couldn't be happier with the work done by MetroGlass Pro. From start to finish, the team was professional, reliable, and did an excellent job." },
  { name: 'Erma H.', text: "I recently hired MetroGlass Pro for a full glass renovation project in my home, and I couldn't be more impressed with the results. Highly professional team." },
  { name: 'Merilin L.', text: 'Very happy with the service! The team was professional, quick, and left everything spotless. The new glass looks amazing.' },
  { name: 'Tomas M.', text: "MetroGlass Pro replaced my shower door and I'm very impressed with their work. The team was professional, on time, and the result is flawless." },
  { name: 'Gjergji G.', text: 'Excellent work for a fair price. The guys were very punctual and talented. Good luck!' },
  { name: 'Irini T.', text: 'MetroGlass Pro did an amazing job with my shower door at a great price. Fast service, clean install, and way more affordable than other quotes I got.' },
  { name: 'Raed P.', text: 'Ledion and his team did a quick and efficient job. They replaced my wall mirror within 3 days of me reaching out. Would definitely recommend.' },
  { name: 'Ilker O.', text: 'Best experience! Thanks for your services!' },
  { name: 'Kristjan T.', text: 'The team was professional and responsive. Did an excellent job!!' },
]

const reviewSignals = [
  {
    title: 'Measurement and fit',
    description: 'Good shower glass reviews should mention whether the finished door feels aligned, closes cleanly, and fits the actual tile opening instead of looking forced.',
    href: '/frameless-shower-doors-nyc/',
    cta: 'Review frameless fit factors',
  },
  {
    title: 'Clean installation',
    description: 'Look for signs that the installer protected the bathroom, handled the glass carefully, sealed the joints cleanly, and left the room usable.',
    href: '/shower-door-installation-nyc/',
    cta: 'See installation expectations',
  },
  {
    title: 'Repair versus replacement honesty',
    description: 'For leaks, dragging doors, loose hardware, or a bad previous install, a useful contractor should explain when repair is enough and when replacement is smarter.',
    href: '/shower-door-repair-nyc/',
    cta: 'Compare repair decisions',
  },
  {
    title: 'Building coordination',
    description: 'In Manhattan, Brooklyn, and Queens, reviews often reveal whether a company understands COIs, elevators, quiet hours, access rules, and occupied-building work.',
    href: '/service-areas/manhattan/',
    cta: 'Plan Manhattan logistics',
  },
]

const comparisonQuestions = [
  'Did the company explain whether the problem needed repair, replacement, or a new layout?',
  'Did they ask for bathroom photos, finished tile details, and access constraints before quoting?',
  'Did the finished door close smoothly, seal properly, and feel aligned with the room?',
  'Did the installer leave the bathroom clean and ready to use?',
]

export default function ReviewsPage() {
  return (
    <>
      <section className="bg-cream pt-20 sm:pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 anim-hero">
          <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Testimonials</p>
          <h1 className="heading-serif text-charcoal text-5xl sm:text-6xl lg:text-7xl">What our customers say.</h1>
          <p className="mt-5 text-warm text-lg max-w-2xl">These reviews reflect the things Manhattan and NYC buyers usually care about most, precise measurements, clean installs, clear communication, and a finished result that feels worth the investment.</p>
          <p className="mt-4 text-warm text-base leading-relaxed max-w-2xl">
            When comparing glass companies, read reviews for the details behind the stars: whether the door stopped leaking, whether the installer showed up prepared, whether the bathroom was protected, and whether the final glass made the space easier to use.
          </p>
          <p className="mt-4 text-warm text-base leading-relaxed max-w-2xl">
            If you are searching for shower door repair, shower door replacement, or frameless shower door installers near me, the most useful reviews are the ones that describe the decision process, not just the finished photo.
          </p>
        </div>
      </section>

      <section className="bg-cream pb-28 sm:pb-36">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 space-y-16">
          {reviews.map((r, i) => (
            <div key={r.name} className={`anim-fade-up d${Math.min(i + 1, 8)} border-b border-charcoal/[0.06] pb-16 last:border-b-0`}>
              <p className="text-orange/50 text-lg tracking-[4px] mb-4" aria-label="5 out of 5 stars" role="img">★★★★★</p>
              <p className="font-serif text-charcoal text-2xl sm:text-3xl leading-snug italic">
                &ldquo;{r.text}&rdquo;
              </p>
              <p className="mt-5 text-warm text-sm font-medium tracking-wide uppercase">{r.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream-light py-20 sm:py-24 border-y border-charcoal/[0.04]">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <div className="max-w-2xl mb-12">
            <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">How To Read Reviews</p>
            <h2 className="heading-serif text-charcoal text-3xl sm:text-4xl">The best review is specific about the job.</h2>
            <p className="mt-4 text-warm text-[15px] leading-relaxed">
              A shower door review is most useful when it connects the result to the problem the buyer had: a finished renovation waiting on glass, an old door leaking, a tight apartment layout, or a building that needed coordination before anyone could work.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {reviewSignals.map((item) => (
              <Link key={item.title} href={item.href} className="glass-card p-6 card-lift block">
                <h3 className="font-serif text-charcoal text-2xl mb-3">{item.title}</h3>
                <p className="text-warm text-[15px] leading-relaxed">{item.description}</p>
                <span className="inline-block mt-4 text-orange text-sm font-medium hover:opacity-70 transition-opacity">{item.cta} →</span>
              </Link>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/service-areas/brooklyn/" className="btn-pill btn-outline px-6 py-3 text-sm">Brooklyn service</Link>
            <Link href="/service-areas/queens/" className="btn-pill btn-outline px-6 py-3 text-sm">Queens service</Link>
            <Link href="/shower-door-replacement-nyc/" className="btn-pill btn-outline px-6 py-3 text-sm">Replacement planning</Link>
          </div>
          <div className="mt-10 glass-card p-6">
            <h3 className="font-serif text-charcoal text-2xl mb-4">Questions reviews should help answer</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {comparisonQuestions.map((item) => (
                <div key={item} className="flex items-start gap-3 text-[14px] text-warm leading-relaxed">
                  <span className="text-orange mt-0.5 shrink-0">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-24 text-center">
        <div className="max-w-2xl mx-auto px-6 sm:px-10">
          <h2 className="heading-serif text-white text-4xl sm:text-5xl">Join our happy customers.</h2>
          <Link href="/contact/" className="btn-pill btn-primary px-10 py-3.5 text-sm mt-10 inline-flex">Request an Estimate</Link>
        </div>
      </section>
    </>
  )
}
