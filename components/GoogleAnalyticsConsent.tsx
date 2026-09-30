'use client'

import Link from 'next/link'
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

function storedChoice(): { choice: Choice | null; prompt: boolean } {
  try {
    const value = JSON.parse(localStorage.getItem(CHOICE_KEY) || 'null') as Choice | null
    if (value && typeof value.analytics === 'boolean' && typeof value.ads === 'boolean' && value.expires > Date.now()) {
      return { choice: value, prompt: false }
    }
    const old = JSON.parse(localStorage.getItem(OLD_CHOICE_KEY) || 'null') as { allowed?: boolean; expires?: number } | null
    if (old && typeof old.allowed === 'boolean' && typeof old.expires === 'number' && old.expires > Date.now()) {
      // Existing analytics permission never grants permission for a new ad pixel.
      return { choice: { analytics: old.allowed, ads: false, expires: old.expires }, prompt: true }
    }
  } catch { /* Ask again when storage cannot be read. */ }
  return { choice: null, prompt: true }
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
  const [open, setOpen] = useState(false)
  const googleLoaded = useRef(false)
  const pixelLoaded = useRef(false)
  const lastPage = useRef<string | null>(null)
  const lastPixelPage = useRef<string | null>(null)

  useEffect(() => {
    const saved = storedChoice()
    if (!saved.choice?.analytics) clearAnalyticsCookies()
    try { localStorage.removeItem('site-cookie-choice-v1') } catch { /* Old preference is retired. */ }
    setChoice(saved.choice)
    setOpen(saved.prompt)
    setReady(true)
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
    const next = { analytics, ads, expires: Date.now() + CHOICE_LIFETIME }
    try {
      localStorage.setItem(CHOICE_KEY, JSON.stringify(next))
      localStorage.removeItem(OLD_CHOICE_KEY)
    } catch { /* Apply to this visit. */ }
    if (!analytics) clearAnalyticsCookies()
    if (choice?.ads && !ads) (window as unknown as TagWindow).oaiq?.('consent', false)
    if (!ads) (window as unknown as TagWindow).__mgpAdsMeasurementAllowed = false
    // Reload to stop tags already loaded when either permission is withdrawn.
    if ((choice?.analytics && !analytics) || (choice?.ads && !ads)) { location.reload(); return }
    setChoice(next)
    setOpen(false)
  }

  return <>
    <button className="mgp-cookie-settings" type="button" onClick={() => setOpen(true)}>Cookie settings</button>
    {ready && open && <section className="mgp-consent" aria-label="Cookie preferences">
      <div>
        <strong>Your privacy choices</strong>
        <p>Google Analytics helps us understand visits. With separate permission, the OpenAI Pixel measures ad visits and confirmed estimate requests. The site works without optional cookies. You can change this choice anytime. <Link href="/privacy-policy/">Privacy policy</Link></p>
      </div>
      <div className="mgp-consent-actions">
        <button type="button" onClick={() => save(false, false)}>Reject optional</button>
        <button type="button" onClick={() => save(true, false)}>Analytics only</button>
        <button type="button" onClick={() => save(true, true)}>Allow analytics and ad measurement</button>
        {choice && <button type="button" onClick={() => setOpen(false)}>Close</button>}
      </div>
    </section>}
  </>
}
