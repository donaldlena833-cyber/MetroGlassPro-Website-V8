import Link from 'next/link'
import { glassServices } from '@/content/service-catalog'

const mainLinks = glassServices.map((service) => ({ href: service.href, label: service.name }))

const companyLinks = [
  { href: '/about/', label: 'About' },
  { href: '/services/', label: 'Services' },
  { href: '/projects/', label: 'Projects' },
  { href: '/reviews/', label: 'Reviews' },
  { href: '/service-areas/', label: 'Service Areas' },
  { href: '/contact/', label: 'Contact' },
  { href: '/privacy-policy/', label: 'Privacy Policy' },
]

const areaLinks = [
  { href: '/service-areas/manhattan/', label: 'Manhattan' },
  { href: '/service-areas/brooklyn/', label: 'Brooklyn' },
  { href: '/service-areas/queens/', label: 'Queens' },
  { href: '/service-areas/bronx/', label: 'The Bronx' },
  { href: '/service-areas/staten-island/', label: 'Staten Island' },
]

export default function Footer() {
  return (
    <footer className="bg-cream-dark/50 border-t border-charcoal/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <span className="font-serif text-charcoal text-lg">MetroGlass Pro</span>
            </Link>
            <p className="text-charcoal/60 text-[13px] leading-relaxed max-w-xs">Shower doors, glazing, railings, mirrors, partitions, and glass repair across NYC. Direct estimates, careful installation, and building coordination.</p>
          </div>

          {/* Services */}
          <div>
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-charcoal/60 mb-4">Services</p>
            <nav aria-label="Footer services" className="flex flex-col gap-2.5">
              {mainLinks.map((l) => (
                <Link key={l.href} href={l.href} className="text-charcoal/70 text-[13px] hover:text-charcoal transition-colors duration-300">
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Company */}
          <div>
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-charcoal/60 mb-4">Company</p>
            <nav className="flex flex-col gap-2.5">
              {companyLinks.map((l) => (
                <Link key={l.href} href={l.href} className="text-charcoal/70 text-[13px] hover:text-charcoal transition-colors duration-300">
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Areas */}
          <div>
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-charcoal/60 mb-4">Areas</p>
            <nav className="flex flex-col gap-2.5">
              {areaLinks.map((l) => (
                <Link key={l.href} href={l.href} className="text-charcoal/70 text-[13px] hover:text-charcoal transition-colors duration-300">
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-charcoal/60 mb-4">Contact</p>
            <div className="space-y-2.5">
              <a href="tel:+13329993846" className="block text-charcoal/70 text-[13px] hover:text-charcoal transition-colors">(332) 999-3846</a>
              <a href="mailto:operations@metroglasspro.com" className="block text-charcoal/70 text-[13px] hover:text-charcoal transition-colors">operations@metroglasspro.com</a>
              <p className="text-charcoal/60 text-[13px]">Monday to Friday, 8am to 6pm. Saturday, 9am to 2pm.</p>
              <p className="text-charcoal/60 text-[13px]">COI ready for co-ops and condos</p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-charcoal/[0.04] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-charcoal/60">
          <p>© {new Date().getFullYear()} MetroGlass Pro. Licensed and insured in New York.</p>
          <p>Manhattan first. Also serving Brooklyn, Queens, The Bronx, and Staten Island.</p>
        </div>
      </div>
    </footer>
  )
}
