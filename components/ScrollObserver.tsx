'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollObserver() {
  const pathname = usePathname()
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]')
    const showAll = () => elements.forEach((el) => el.classList.remove('reveal-pending'))
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      showAll()
      return
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('reveal-pending')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0 })
    elements.forEach((el) => {
      observer.observe(el)
      // Only animate below-the-fold content after the observer is ready.
      if (el.getBoundingClientRect().top >= window.innerHeight) el.classList.add('reveal-pending')
    })
    return () => { observer.disconnect(); showAll() }
  }, [pathname])
  return null
}
