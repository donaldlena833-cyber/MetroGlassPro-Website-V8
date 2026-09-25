import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Customer Reviews for NYC Shower Door Installation',
  description: 'Read customer comments about MetroGlass Pro glass installation and shower door work in New York City.',
  alternates: { canonical: 'https://metroglasspro.com/reviews/' },
  openGraph: { images: [{ url: '/assets/og-default.jpg', width: 1200, height: 630, alt: 'MetroGlass Pro custom shower doors and glass installation' }],
    title: 'MetroGlass Pro Reviews | NYC Shower Door Installers',
    description: 'Read customer comments about MetroGlass Pro glass installation and shower door work.',
  },
  twitter: { images: ['/assets/og-default.jpg'],  card: 'summary_large_image' },
}

const reviews = [
  { name: 'Valeria H.', text: "I couldn't be happier with the work done by MetroGlass Pro. From start to finish, the team was professional, reliable, and did an excellent job." },
  { name: 'Erma H.', text: "I recently hired MetroGlass Pro for a full glass renovation project in my home, and I couldn't be more impressed with the results. Highly professional team." },
  { name: 'Merilin L.', text: 'Very happy with the service! The team was professional, quick, and left everything spotless. The new glass looks amazing.' },
  { name: 'Tomas M.', text: "MetroGlass Pro replaced my shower door and I'm very impressed with their work. The team was professional, on time, and the result is flawless." },
  { name: 'Gjergji G.', text: 'Excellent work for a fair price. The guys were very punctual and talented. Good luck!' },
  { name: 'Irini T.', text: 'MetroGlass Pro did an amazing job with my shower door at a great price. Fast service, clean install, and way more affordable than other quotes I got.' },
  { name: 'Ilker O.', text: 'Best experience! Thanks for your services!' },
  { name: 'Kristjan T.', text: 'The team was professional and responsive. Did an excellent job!!' },
]

export default function ReviewsPage() {
  return (
    <>
      <section className="bg-cream pt-20 sm:pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 anim-hero">
          <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Testimonials</p>
          <h1 className="heading-serif text-charcoal text-5xl sm:text-6xl lg:text-7xl">What our customers say.</h1>
          <p className="mt-5 text-warm text-lg max-w-2xl">Customer comments about shower door installations, glass projects, and the care taken in their homes.</p>
        </div>
      </section>

      <section className="bg-cream pb-28 sm:pb-36">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 space-y-16">
          {reviews.map((r, i) => (
            <div key={r.name} className={`anim-fade-up d${Math.min(i + 1, 8)} border-b border-charcoal/[0.06] pb-16 last:border-b-0`}>
              <p className="font-serif text-charcoal text-2xl sm:text-3xl leading-snug italic">
                &ldquo;{r.text}&rdquo;
              </p>
              <p className="mt-5 text-warm text-sm font-medium tracking-wide uppercase">{r.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream-light py-16 text-center">
        <div className="max-w-2xl mx-auto px-6 sm:px-10">
          <h2 className="heading-serif text-charcoal text-3xl sm:text-4xl">See the work behind the words.</h2>
          <p className="mt-4 text-warm">Browse photographed projects and the decisions behind each installation.</p>
          <Link href="/projects/" className="btn-pill btn-outline px-8 py-3 mt-7 inline-flex">View projects</Link>
        </div>
      </section>

      <section className="bg-charcoal py-24 text-center">
        <div className="max-w-2xl mx-auto px-6 sm:px-10">
          <h2 className="heading-serif text-white text-4xl sm:text-5xl">Tell us about your project.</h2>
          <Link href="/contact/" className="btn-pill btn-primary px-10 py-3.5 text-sm mt-10 inline-flex">Request an Estimate</Link>
        </div>
      </section>
    </>
  )
}
