'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const navLinks = [
  { href: '/services/', label: 'Services' },
  { href: '/gallery/', label: 'Gallery' },
  { href: '/projects/', label: 'Projects' },
  { href: '/service-areas/', label: 'Areas' },
  { href: '/reviews/', label: 'Reviews' },
  { href: '/about/', label: 'About' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 ${scrolled ? 'glass shadow-[0_1px_0_rgba(26,26,26,0.06)]' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between h-[70px]">
        <Link href="/" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
          <img src="/assets/logo.png" alt="MetroGlassPro" width={28} height={28} className="rounded-full" />
          <span className="font-serif text-charcoal text-xl tracking-tight">MetroGlass Pro</span>
        </Link>

        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-charcoal/60 text-[13px] font-medium tracking-widest uppercase hover:text-charcoal transition-colors duration-300">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/contact/" className="hidden lg:inline-flex btn-pill btn-outline px-7 py-2.5 text-[13px] tracking-wide">
          Get a Quote
        </Link>

        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-charcoal" aria-label="Menu" aria-expanded={open}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? <path strokeLinecap="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeWidth={1.5} d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      <div className={`lg:hidden overflow-hidden transition-all duration-400 ease-in-out ${open ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-cream px-6 pb-6 border-t border-charcoal/[0.06]">
          <ul className="space-y-1 pt-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={() => setOpen(false)} className="block py-3 text-charcoal/70 text-[15px] font-medium hover:text-charcoal transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/contact/" onClick={() => setOpen(false)} className="mt-4 block text-center btn-pill btn-primary px-8 py-3 text-sm">
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  )
}
