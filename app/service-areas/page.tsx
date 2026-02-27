import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Service Areas — Shower Glass Installation NYC | MetroGlassPro',
  description: 'MetroGlassPro installs custom shower glass across all 5 NYC boroughs. Also serving Long Island and Northern NJ.',
  alternates: { canonical: 'https://metroglasspro.com/service-areas/' },
  openGraph: {
    title: 'Service Areas — Shower Glass Installation NYC',
    description: 'MetroGlassPro installs custom shower glass across all 5 NYC boroughs plus Long Island and NJ.',
  },
  twitter: { card: 'summary_large_image' },
}

const boroughs = [
  {
    name: 'Manhattan',
    slug: 'manhattan',
    desc: 'High-rise condos, brownstones, luxury apartments, and pre-war co-ops. We coordinate with building management, provide COIs, and work within all co-op and condo board requirements.',
    neighborhoods: ['Upper East Side', 'Upper West Side', 'Midtown', 'Chelsea', 'Greenwich Village', 'SoHo', 'Tribeca', 'Financial District', 'Harlem', 'East Village', 'Lower East Side', 'Murray Hill', 'Gramercy', 'Hell\'s Kitchen'],
  },
  {
    name: 'Brooklyn',
    slug: 'brooklyn',
    desc: 'Brownstone bathrooms, new construction, renovations, and condo conversions. From classic townhouses to modern high-rises.',
    neighborhoods: ['Park Slope', 'Williamsburg', 'DUMBO', 'Brooklyn Heights', 'Bed-Stuy', 'Cobble Hill', 'Carroll Gardens', 'Greenpoint', 'Bushwick', 'Bay Ridge', 'Sunset Park', 'Crown Heights', 'Prospect Heights', 'Fort Greene'],
  },
  {
    name: 'Queens',
    slug: 'queens',
    desc: 'Single-family homes, multi-unit buildings, and new developments. Full bathroom glass solutions from Astoria to the Rockaways.',
    neighborhoods: ['Astoria', 'Long Island City', 'Flushing', 'Forest Hills', 'Jackson Heights', 'Bayside', 'Rego Park', 'Woodside', 'Sunnyside', 'Jamaica', 'Ridgewood', 'Fresh Meadows'],
  },
  {
    name: 'The Bronx',
    slug: 'bronx',
    desc: 'Residential and commercial glass installations across all Bronx neighborhoods. Single-family, multi-family, and renovations.',
    neighborhoods: ['Riverdale', 'Pelham Bay', 'Throgs Neck', 'Morris Park', 'Kingsbridge', 'Fordham', 'Wakefield', 'Co-op City', 'Mott Haven', 'Hunts Point'],
  },
  {
    name: 'Staten Island',
    slug: 'staten-island',
    desc: 'Single-family homes, townhouses, and new construction. Custom shower doors and mirrors for Staten Island homeowners.',
    neighborhoods: ['St. George', 'Todt Hill', 'Great Kills', 'New Dorp', 'Tottenville', 'Eltingville', 'Annadale', 'Huguenot', 'West Brighton', 'Stapleton'],
  },
]

const secondary = [
  {
    name: 'Long Island',
    desc: 'Nassau and Suffolk County homes. Premium glass installations for suburban master bathrooms and luxury builds.',
  },
  {
    name: 'Northern New Jersey',
    desc: 'Bergen, Essex, Hudson, and Passaic counties. Residential and commercial glass for the NJ metro area.',
  },
]

export default function ServiceAreasPage() {
  return (
    <>
      <section className="bg-cream pt-20 sm:pt-32 pb-14 sm:pb-20">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 anim-hero">
          <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Service Areas</p>
          <h1 className="heading-serif text-charcoal text-4xl sm:text-6xl lg:text-7xl">Serving all five boroughs.</h1>
          <p className="mt-5 text-warm text-base sm:text-lg max-w-lg leading-relaxed">
            Custom shower glass, mirrors, and glass installations across New York City — plus Long Island and Northern New Jersey.
          </p>
        </div>
      </section>

      {/* ═══ NYC BOROUGHS ═══ */}
      <section className="bg-cream pb-20 sm:pb-28">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <div className="space-y-0">
            {boroughs.map((b, i) => (
              <div key={b.name} className={`py-10 sm:py-12 border-b border-charcoal/[0.06] last:border-b-0`}>
                <h2 className="font-serif text-charcoal text-2xl sm:text-3xl mb-3">
                  <Link href={`/service-areas/${b.slug}/`} className="hover:text-charcoal/70 transition-colors">
                    Shower Glass in {b.name} →
                  </Link>
                </h2>
                <p className="text-warm text-[15px] leading-relaxed mb-5">{b.desc}</p>

                <div className="mb-5">
                  <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-charcoal/25 mb-3">Neighborhoods We Serve</p>
                  <div className="flex flex-wrap gap-2">
                    {b.neighborhoods.map((n) => (
                      <span key={n} className="text-[12px] sm:text-[13px] text-charcoal/50 bg-charcoal/[0.04] px-3 py-1.5 rounded-full">
                        {n}
                      </span>
                    ))}
                  </div>
                </div>

                <Link href={`/service-areas/${b.slug}/`} className="text-orange text-sm font-medium hover:opacity-70 transition-opacity">
                  View {b.name} details →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECONDARY AREAS ═══ */}
      <section className="bg-cream-light py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-charcoal/25 mb-8">Also Serving</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {secondary.map((s) => (
              <div key={s.name} className="glass-card p-6">
                <h3 className="font-serif text-charcoal text-xl mb-2">{s.name}</h3>
                <p className="text-warm text-[14px] leading-relaxed mb-4">{s.desc}</p>
                <Link href="/contact/" className="text-orange text-sm font-medium hover:opacity-70 transition-opacity">
                  Get an estimate →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ INTERNAL LINKS ═══ */}
      <section className="bg-cream py-16 sm:py-20 border-t border-charcoal/[0.04]">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 text-center">
          <p className="text-warm text-[15px] mb-5">Looking for a specific service?</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/frameless-shower-doors-nyc/" className="btn-pill btn-outline px-6 py-2.5 text-[13px]">Frameless Doors</Link>
            <Link href="/shower-door-installation-nyc/" className="btn-pill btn-outline px-6 py-2.5 text-[13px]">Installation</Link>
            <Link href="/shower-door-replacement-nyc/" className="btn-pill btn-outline px-6 py-2.5 text-[13px]">Replacement</Link>
            <Link href="/services/" className="btn-pill btn-outline px-6 py-2.5 text-[13px]">All Services</Link>
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-20 sm:py-24 text-center">
        <div className="max-w-2xl mx-auto px-6 sm:px-10">
          <h2 className="heading-serif text-white text-3xl sm:text-5xl">Not sure if we cover your area?</h2>
          <p className="mt-4 text-white/40 text-base sm:text-lg">Reach out — we&apos;re probably closer than you think.</p>
          <Link href="/contact/" className="btn-pill btn-primary px-10 py-3.5 text-sm mt-8 inline-flex">Contact Us</Link>
        </div>
      </section>
    </>
  )
}
