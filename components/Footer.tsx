import Link from 'next/link'

const mainLinks = [
  { href: '/services/', label: 'Services' },
  { href: '/frameless-shower-doors-nyc/', label: 'Frameless Doors' },
  { href: '/gallery/', label: 'Gallery' },
  { href: '/projects/', label: 'Projects' },
  { href: '/reviews/', label: 'Reviews' },
]

const companyLinks = [
  { href: '/about/', label: 'About' },
  { href: '/service-areas/', label: 'Service Areas' },
  { href: '/contact/', label: 'Contact' },
  { href: '/privacy-policy/', label: 'Privacy Policy' },
]

export default function Footer() {
  return (
    <footer className="bg-cream-dark/50 border-t border-charcoal/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <img src="/assets/logo.png" alt="MetroGlassPro" width={24} height={24} className="rounded-full" />
              <span className="font-serif text-charcoal text-lg">MetroGlass Pro</span>
            </Link>
            <p className="text-charcoal/40 text-[13px] leading-relaxed max-w-xs">Custom frameless shower doors and glass installations for New York City homes and businesses.</p>
          </div>

          {/* Services */}
          <div>
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-charcoal/25 mb-4">Services</p>
            <nav className="flex flex-col gap-2.5">
              {mainLinks.map((l) => (
                <Link key={l.href} href={l.href} className="text-charcoal/50 text-[13px] hover:text-charcoal transition-colors duration-300">
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Company */}
          <div>
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-charcoal/25 mb-4">Company</p>
            <nav className="flex flex-col gap-2.5">
              {companyLinks.map((l) => (
                <Link key={l.href} href={l.href} className="text-charcoal/50 text-[13px] hover:text-charcoal transition-colors duration-300">
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-charcoal/25 mb-4">Contact</p>
            <div className="space-y-2.5">
              <a href="tel:+13329993846" className="block text-charcoal/50 text-[13px] hover:text-charcoal transition-colors">(332) 999-3846</a>
              <a href="mailto:operations@metroglasspro.com" className="block text-charcoal/50 text-[13px] hover:text-charcoal transition-colors">operations@metroglasspro.com</a>
              <p className="text-charcoal/30 text-[13px]">Mon–Fri 8am–6pm · Sat 9am–2pm</p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-charcoal/[0.04] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-charcoal/25">
          <p>© {new Date().getFullYear()} MetroGlassPro · Licensed & Insured in New York</p>
          <p>Serving Manhattan · Brooklyn · Queens · Bronx · Staten Island</p>
        </div>
      </div>
    </footer>
  )
}
