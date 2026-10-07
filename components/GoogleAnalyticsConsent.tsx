'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

const MEASUREMENT_ID = 'G-46MYS2R9QW'
// Google lists this as the installable tag for the dedicated MetroGlass Pro stream.
// The G- ID returns 404 from gtag/js. We route events only to the GA4 destination.
const SCRIPT_ID = 'AW-934489946'
const PIXEL_ID = 'LBnjZbztWd5CAZeRm4zCDV'
const CHOICE_KEY = 'mgp-measurement-consent-v2'
const OLD_CHOICE_KEY = 'mgp-analytics-consent-v1'
const CHOICE_LIFETIME = 180 * 24 * 60 * 60 * 1000
const CAMPAIGN_PARAMETERS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_id', 'utm_content'] as const

type Choice = { analytics: boolean; ads: boolean; expires: number }
type TagWindow = Window & {
  dataLayer?: unknown[]
  gtag?: (...args: unknown[]) => void
  oaiq?: (...args: unknown[]) => void
  __mgpAdsMeasurementAllowed?: boolean
  [key: `ga-disable-${string}`]: boolean
}

function storedChoice(): Choice {
  try {
    const value = JSON.parse(localStorage.getItem(CHOICE_KEY) || 'null') as Choice | null
    if (value && typeof value.analytics === 'boolean' && typeof value.ads === 'boolean' && value.expires > Date.now()) {
      return value
    }
    const old = JSON.parse(localStorage.getItem(OLD_CHOICE_KEY) || 'null') as { allowed?: boolean; expires?: number } | null
    if (old && typeof old.allowed === 'boolean' && typeof old.expires === 'number' && old.expires > Date.now()) {
      // Existing analytics permission never grants permission for a new ad pixel.
      return { analytics: old.allowed, ads: false, expires: old.expires }
    }
  } catch { /* Use the visit default when storage cannot be read. */ }
  return { analytics: true, ads: false, expires: Date.now() + CHOICE_LIFETIME }
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

function analyticsPageLocation(pathname: string) {
  const url = new URL(pathname, location.origin)
  const incoming = new URLSearchParams(location.search)
  // Campaign tags are useful in GA4; arbitrary landing-page parameters may contain private data.
  for (const name of CAMPAIGN_PARAMETERS) {
    const value = incoming.get(name)
    if (value && value.length <= 120 && /^[a-zA-Z0-9._~-]+$/.test(value)) url.searchParams.set(name, value)
  }
  // OpenAI ad clicks may carry oppref without UTM tags. Attribute those visits
  // without sending the opaque click identifier to Google Analytics.
  if (incoming.get('oppref')) {
    if (!url.searchParams.has('utm_source')) url.searchParams.set('utm_source', 'chatgpt')
    if (!url.searchParams.has('utm_medium')) url.searchParams.set('utm_medium', 'cpc')
    if (!url.searchParams.has('utm_campaign')) url.searchParams.set('utm_campaign', 'openai_ads')
  }
  return url.href
}

function analyticsReferrer(previousPage: string | null) {
  if (previousPage) {
    const url = new URL(previousPage)
    return url.origin + url.pathname
  }
  if (!document.referrer) return undefined
  try {
    const url = new URL(document.referrer)
    return url.origin === location.origin ? url.origin + url.pathname : url.origin + '/'
  } catch { return undefined }
}

export default function GoogleAnalyticsConsent() {
  const pathname = usePathname()
  const [choice, setChoice] = useState<Choice | null>(null)
  const [ready, setReady] = useState(false)
  const googleLoaded = useRef(false)
  const pixelLoaded = useRef(false)
  const lastPage = useRef<string | null>(null)
  const lastPixelPage = useRef<string | null>(null)

  useEffect(() => {
    const sync = () => {
      const saved = storedChoice()
      const privacySignal = (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl || navigator.doNotTrack === '1'
      const next = privacySignal ? { ...saved, analytics: false, ads: false } : saved
      if (!next.analytics) clearAnalyticsCookies()
      setChoice(next)
      setReady(true)
    }
    sync()
    const onStorage = (event: StorageEvent) => {
      if (event.key === CHOICE_KEY || event.key === OLD_CHOICE_KEY) location.reload()
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  useEffect(() => {
    if (!ready) return
    const tagWindow = window as unknown as TagWindow
    tagWindow[`ga-disable-${MEASUREMENT_ID}`] = !choice?.analytics
    tagWindow.__mgpAdsMeasurementAllowed = Boolean(choice?.ads)
    if (choice?.ads && !pixelLoaded.current) {
      pixelLoaded.current = true
      // Add one setup script to the document head only after ad measurement consent.
      const script = document.createElement('script')
      script.text = `!function(w,d,s,u){if(w.oaiq)return;var q=function(){q.q.push(arguments)};q.q=[];w.oaiq=q;var j=d.createElement(s);j.async=1;j.src=u;var f=d.getElementsByTagName(s)[0];f.parentNode.insertBefore(j,f)}(window,document,"script","https://bzrcdn.openai.com/sdk/oaiq.min.js");oaiq("consent",false);oaiq("init",{pixelId:"${PIXEL_ID}",debug:true});oaiq("consent",true);`
      document.head.prepend(script)
    }
    tagWindow.gtag?.('consent', 'update', { analytics_storage: choice?.analytics ? 'granted' : 'denied' })
    if (!choice?.analytics || googleLoaded.current) return
    googleLoaded.current = true

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
    if (!choice?.analytics || !googleLoaded.current || !pathname) return
    const pageLocation = analyticsPageLocation(pathname)
    if (lastPage.current === pageLocation) return
    const previousPage = lastPage.current
    lastPage.current = pageLocation
    ;(window as unknown as TagWindow).gtag?.('event', 'page_view', {
      send_to: MEASUREMENT_ID,
      page_location: pageLocation,
      page_referrer: analyticsReferrer(previousPage),
    })
  }, [choice, pathname])

  useEffect(() => {
    if (!choice?.ads || !pixelLoaded.current || !pathname || lastPixelPage.current === pathname) return
    lastPixelPage.current = pathname
    ;(window as unknown as TagWindow).oaiq?.('measure', 'page_viewed', {
      type: 'contents',
      contents: [{ id: pathname, content_type: 'page' }],
    })
  }, [choice, pathname])

  function save(analytics: boolean, ads: boolean) {
    const privacySignal = (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl || navigator.doNotTrack === '1'
    analytics = privacySignal ? false : analytics
    ads = privacySignal ? false : ads
    const next = { analytics, ads, expires: Date.now() + CHOICE_LIFETIME }
    let persisted = false
    try {
      localStorage.setItem(CHOICE_KEY, JSON.stringify(next))
      localStorage.removeItem(OLD_CHOICE_KEY)
      persisted = true
    } catch { /* Apply to this visit. */ }
    if (!analytics) clearAnalyticsCookies()
    if (choice?.ads && !ads) (window as unknown as TagWindow).oaiq?.('consent', false)
    if (!ads) (window as unknown as TagWindow).__mgpAdsMeasurementAllowed = false
    // Reload to stop tags already loaded when either permission is withdrawn.
    if (persisted && ((choice?.analytics && !analytics) || (choice?.ads && !ads))) { location.reload(); return }
    setChoice(next)
  }

  if (!ready || pathname?.replace(/\/$/, '') !== '/privacy-policy') return null
  return <section className="mgp-privacy-controls" aria-label="Website analytics settings">
    <h2>Website analytics</h2>
    <p>Google Analytics is {choice?.analytics ? 'on' : 'off'} in this browser. Ad measurement is {choice?.ads ? 'on' : 'off'}.</p>
    <button type="button" onClick={() => save(!choice?.analytics, Boolean(choice?.ads))}>{choice?.analytics ? 'Turn off analytics' : 'Turn on analytics'}</button>
    <button type="button" onClick={() => save(Boolean(choice?.analytics), !choice?.ads)}>{choice?.ads ? 'Turn off ad measurement' : 'Allow ad measurement'}</button>
  </section>
}
