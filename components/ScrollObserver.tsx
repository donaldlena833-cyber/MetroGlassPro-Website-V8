'use client'

import { useEffect } from 'react'

/**
 * Global scroll reveal observer.
 * Any element with data-reveal attribute will animate in when scrolled into view.
 * Supports: data-reveal="fade-up" | "fade-in" | "scale-in" | "slide-left" | "slide-right"
 * Optional: data-delay="200" (ms)
 * Respects prefers-reduced-motion.
 */
export default function ScrollObserver() {
  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      // Show everything immediately
      document.querySelectorAll('[data-reveal]').forEach((el) => {
        ;(el as HTMLElement).style.opacity = '1'
      })
      return
    }

    const elements = document.querySelectorAll('[data-reveal]')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            ;(entry.target as HTMLElement).classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  // Re-observe on route changes (SPA navigation)
  useEffect(() => {
    const handleRouteChange = () => {
      setTimeout(() => {
        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        const elements = document.querySelectorAll('[data-reveal]:not(.revealed)')

        if (prefersReduced) {
          elements.forEach((el) => {
            ;(el as HTMLElement).style.opacity = '1'
          })
          return
        }

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                ;(entry.target as HTMLElement).classList.add('revealed')
                observer.unobserve(entry.target)
              }
            })
          },
          { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
        )

        elements.forEach((el) => observer.observe(el))
      }, 100)
    }

    window.addEventListener('popstate', handleRouteChange)
    return () => window.removeEventListener('popstate', handleRouteChange)
  }, [])

  return null
}
