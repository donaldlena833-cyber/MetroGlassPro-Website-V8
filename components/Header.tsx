'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { glassServices } from '@/content/service-catalog'

const companyLinks = [
  { href: '/projects/', label: 'Projects' },
  { href: '/service-areas/', label: 'Areas' },
  { href: '/reviews/', label: 'Reviews' },
  { href: '/about/', label: 'About' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 30)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <header className={`sticky top-0 z-50 ${scrolled ? 'glass shadow-sm' : 'bg-cream/95'}`}>
      <nav aria-label="Main navigation" className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between gap-5 h-[70px]">
        <Link href="/" className="font-serif text-charcoal text-xl tracking-tight shrink-0">MetroGlass Pro</Link>
        <ul className="hidden lg:flex items-center gap-6 text-sm text-charcoal/80">
          <li>
            <details className="relative group" onKeyDown={(event) => { if (event.key === 'Escape') { event.currentTarget.open = false; event.currentTarget.querySelector('summary')?.focus() } }}>
              <summary className="cursor-pointer py-3 hover:text-orange">Glass Services</summary>
              <ul className="absolute top-full left-0 w-64 bg-cream-light border border-charcoal/10 rounded-xl shadow-lg p-3">
                {glassServices.map((service) => <li key={service.id}><Link href={service.href} onClick={(event) => event.currentTarget.closest('details')?.removeAttribute('open')} className="block px-3 py-3 rounded-lg hover:bg-charcoal/5">{service.name}</Link></li>)}
                <li><Link href="/services/" onClick={(event) => event.currentTarget.closest('details')?.removeAttribute('open')} className="block px-3 py-3 border-t border-charcoal/10 text-orange">All glass services</Link></li>
              </ul>
            </details>
          </li>
          {companyLinks.map((link) => <li key={link.href}><Link href={link.href} className="py-3 hover:text-orange">{link.label}</Link></li>)}
        </ul>
        <Link href="/contact/" className="hidden lg:inline-flex btn-pill btn-primary px-6 py-3 text-sm">Get Estimate</Link>
        <button onClick={() => setOpen(!open)} className="lg:hidden min-w-11 min-h-11 flex items-center justify-center text-charcoal" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-menu">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">{open ? <path strokeLinecap="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeWidth={1.5} d="M4 7h16M4 12h16M4 17h16" />}</svg>
        </button>
      </nav>
      <nav id="mobile-menu" aria-label="Mobile navigation" hidden={!open} className="lg:hidden max-h-[calc(100dvh-154px-env(safe-area-inset-bottom))] overflow-y-auto bg-cream border-t border-charcoal/10 px-6 pb-6" onKeyDown={(event) => { if (event.key === 'Escape') setOpen(false) }}>
        <ul className="grid grid-cols-2 gap-x-4 pt-3">{glassServices.map((service) => <li key={service.id}><Link href={service.href} onClick={() => setOpen(false)} className="block py-3 text-sm text-charcoal">{service.name}</Link></li>)}<li><Link href="/services/" onClick={() => setOpen(false)} className="block py-3 text-sm text-orange">All services</Link></li>{companyLinks.map((link) => <li key={link.href}><Link href={link.href} onClick={() => setOpen(false)} className="block py-3 text-sm text-charcoal">{link.label}</Link></li>)}</ul>
        <Link href="/contact/" onClick={() => setOpen(false)} className="mt-4 block text-center btn-pill btn-primary px-8 py-3 text-sm">Get Estimate</Link>
      </nav>
    </header>
  )
}
