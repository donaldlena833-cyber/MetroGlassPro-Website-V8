'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function MobileCtaBar() {
  const pathname = usePathname()
  if (pathname === '/' || pathname === '/contact' || pathname === '/contact/') return null
  const articlePath = pathname?.replace(/\/$/, '')
  const hasArticleBrief = [
    '/blog/gowanus-shower-glass-patterned-tile',
    '/blog/financial-district-shower-door-movement',
    '/blog/midtown-west-mirror-shower-glass-coordination',
    '/blog/long-island-city-glass-partition-mounting',
    '/blog/downtown-brooklyn-shower-glass-tile-handoff',
    '/blog/mott-haven-glass-repair-turnover-scope',
  ].includes(articlePath || '')
  const textBody = 'Hi MetroGlass Pro, I want a quote and can send project photos.' + (hasArticleBrief ? `\nArticle: https://metroglasspro.com${articlePath}/` : '')

  return (
    <div className="mobile-contact-bar lg:hidden fixed inset-x-0 bottom-0 z-50 border-t border-charcoal/[0.08] bg-cream/95 backdrop-blur-md">
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2 px-3 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <a
          href="tel:+13329993846"
          className="btn-pill btn-outline px-3 py-3 text-[12px]"
        >
          Call
        </a>
        <a
          href={`sms:+13329993846?body=${encodeURIComponent(textBody)}`}
          className="btn-pill btn-outline px-3 py-3 text-[12px]"
        >
          Text Photos
        </a>
        <Link href={hasArticleBrief ? '#estimate-brief' : '/contact/'} className="btn-pill btn-primary px-3 py-3 text-[12px]">
          Estimate
        </Link>
      </div>
    </div>
  )
}
