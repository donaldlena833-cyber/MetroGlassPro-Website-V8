'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

const MEASUREMENT_ID = 'G-46MYS2R9QW'
// Google lists this as the installable tag for the dedicated MetroGlass Pro stream.
// The G- ID returns 404 from gtag/js. We route events only to the GA4 destination.
const SCRIPT_ID = 'AW-934489946'
const CHOICE_KEY = 'mgp-analytics-consent-v1'
const CHOICE_LIFETIME = 180 * 24 * 60 * 60 * 1000

type Choice = { allowed: boolean; expires: number }
type TagWindow = Window & {
  dataLayer?: unknown[]
  gtag?: (...args: unknown[]) => void
  [key: `ga-disable-${string}`]: boolean
}

function storedChoice(): Choice | null {
  try {
    const value = JSON.parse(localStorage.getItem(CHOICE_KEY) || 'null') as Choice | null
    return value && typeof value.allowed === 'boolean' && value.expires > Date.now() ? value : null
  } catch {
    return null
  }
}

function clearAnalyticsCookies() {
  const parts = location.hostname.split('.')
  const domains = ['', ...parts.map((_, index) => parts.slice(index).join('.'))]
  for (const cookie of document.cookie.split(';')) {
    const name = cookie.split('=')[0].trim()
    if (!/^(_ga(?:_|$)|_gid$|_gat(?:_|$)|_gcl_|_gac_|_fbp$|_fbc$)/.test(name)) continue
    for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; path=/;${domain ? ` domain=${domain};` : ''} SameSite=Lax`
    }
  }
}

export default function GoogleAnalyticsConsent() {
  const pathname = usePathname()
  const [choice, setChoice] = useState<Choice | null>(null)
  const [ready, setReady] = useState(false)
  const [open, setOpen] = useState(false)
  const loaded = useRef(false)
  const lastPage = useRef<string | null>(null)

  useEffect(() => {
    const saved = storedChoice()
    if (!saved?.allowed) clearAnalyticsCookies()
    try { localStorage.removeItem('site-cookie-choice-v1') } catch { /* Old preference is retired. */ }
    setChoice(saved)
    setOpen(!saved)
    setReady(true)
  }, [])

  useEffect(() => {
    if (!ready) return
    const tagWindow = window as unknown as TagWindow
    tagWindow[`ga-disable-${MEASUREMENT_ID}`] = !choice?.allowed
    if (!choice?.allowed || loaded.current) return
    loaded.current = true

    tagWindow.dataLayer = tagWindow.dataLayer || []
    // eslint-disable-next-line prefer-rest-params
    tagWindow.gtag = tagWindow.gtag || function gtag() { tagWindow.dataLayer?.push(arguments) }
    tagWindow.gtag('consent', 'default', {
      analytics_storage: 'denied', ad_storage: 'denied',
      ad_user_data: 'denied', ad_personalization: 'denied',
    })
    tagWindow.gtag('consent', 'update', { analytics_storage: 'granted' })
    tagWindow.gtag('js', new Date())
    tagWindow.gtag('set', 'allow_google_signals', false)
    tagWindow.gtag('set', 'allow_ad_personalization_signals', false)
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${SCRIPT_ID}`
    document.head.appendChild(script)
  }, [choice, ready])

  useEffect(() => {
    if (!choice?.allowed || !loaded.current || !pathname || lastPage.current === pathname) return
    const previousPage = lastPage.current
    lastPage.current = pathname
    ;(window as unknown as TagWindow).gtag?.('event', 'page_view', {
      send_to: MEASUREMENT_ID,
      page_location: location.origin + pathname,
      page_referrer: previousPage ? location.origin + previousPage : '',
    })
  }, [choice, pathname])

  function save(allowed: boolean) {
    const next = { allowed, expires: Date.now() + CHOICE_LIFETIME }
    try { localStorage.setItem(CHOICE_KEY, JSON.stringify(next)) } catch { /* Apply to this visit. */ }
    if (!allowed) clearAnalyticsCookies()
    // A reload also stops an already loaded tag when permission is withdrawn.
    if (choice?.allowed) { location.reload(); return }
    setChoice(next)
    setOpen(false)
  }

  return <>
    <button className="mgp-cookie-settings" type="button" onClick={() => setOpen(true)}>Cookie settings</button>
    {ready && open && <section className="mgp-consent" aria-label="Cookie preferences">
      <div>
        <strong>Your privacy choices</strong>
        <p>With your permission, Google Analytics helps us understand visits. The site works without optional cookies. You can change this choice anytime. <Link href="/privacy-policy/">Privacy policy</Link></p>
      </div>
      <div className="mgp-consent-actions">
        <button type="button" onClick={() => save(false)}>Reject optional</button>
        <button type="button" onClick={() => save(true)}>Allow analytics</button>
        {choice && <button type="button" onClick={() => setOpen(false)}>Close</button>}
      </div>
    </section>}
  </>
}
