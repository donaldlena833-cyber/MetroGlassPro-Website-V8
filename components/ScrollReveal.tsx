'use client'

import { useEffect, useRef, ReactNode } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  /** Animation variant */
  animation?: 'fade-up' | 'fade-in' | 'scale-in' | 'slide-left' | 'slide-right'
  /** Stagger delay in ms (for items in a group) */
  delay?: number
  /** Duration in ms */
  duration?: number
  /** IntersectionObserver threshold */
  threshold?: number
  /** Only animate once */
  once?: boolean
  /** HTML tag to render */
  as?: React.ElementType
}

export default function ScrollReveal({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
  duration = 700,
  threshold = 0.15,
  once = true,
  as,
}: ScrollRevealProps) {
  const Tag = as || 'div'
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Set initial hidden state
    el.style.opacity = '0'
    el.style.transition = `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`

    switch (animation) {
      case 'fade-up':
        el.style.transform = 'translateY(32px)'
        break
      case 'scale-in':
        el.style.transform = 'scale(0.96)'
        break
      case 'slide-left':
        el.style.transform = 'translateX(-32px)'
        break
      case 'slide-right':
        el.style.transform = 'translateX(32px)'
        break
      default:
        break
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1'
          el.style.transform = 'translateY(0) translateX(0) scale(1)'
          if (once) observer.unobserve(el)
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [animation, delay, duration, threshold, once])

  return <Tag ref={ref} className={className}>{children}</Tag>
}
