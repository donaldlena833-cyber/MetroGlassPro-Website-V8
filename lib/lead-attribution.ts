import { serviceCategory, glassServices } from '../content/service-catalog.ts'

export type LeadAttribution = {
  detectedSource: string
  sourceEvidence: 'utm_source' | 'referrer' | 'unavailable'
  landingPath: string
  referrerHost: string
}

export const referralOptions = ['ChatGPT', 'Perplexity', 'Claude', 'Gemini', 'Microsoft Copilot', 'Google', 'Bing', 'Other website', 'Friend or contractor', 'Returning customer', 'Other']

const providers: Array<[string, string[]]> = [
  ['ChatGPT', ['chatgpt.com', 'chat.openai.com']],
  ['Perplexity', ['perplexity.ai']],
  ['Claude', ['claude.ai']],
  ['Gemini', ['gemini.google.com']],
  ['Microsoft Copilot', ['copilot.microsoft.com']],
  ['Google', ['google.com']],
  ['Bing', ['bing.com']],
]

const sameHost = (host: string, domain: string) => host === domain || host.endsWith(`.${domain}`)
const ownHost = (host: string) => sameHost(host, 'metroglasspro.com')

function providerName(value: string) {
  const normalized = value.trim().toLowerCase()
  for (const [name, domains] of providers) {
    if (normalized === name.toLowerCase() || domains.some((domain) => sameHost(normalized, domain))) return name
  }
  return ''
}

export function detectAttribution(location: string, referrer = ''): LeadAttribution {
  const url = new URL(location)
  let host = ''
  try { host = referrer ? new URL(referrer).hostname.toLowerCase() : '' } catch { /* Referrer can be absent or malformed. */ }
  const externalHost = host && !ownHost(host) ? host : ''
  const utmSource = url.searchParams.get('utm_source') || ''
  const knownUtm = providerName(utmSource)
  return {
    detectedSource: utmSource ? knownUtm || 'Other campaign' : externalHost ? providerName(externalHost) || 'Other website' : 'Direct / unknown',
    sourceEvidence: utmSource ? 'utm_source' : externalHost ? 'referrer' : 'unavailable',
    // Store no query strings, fragments, search prompts, or visitor identifiers.
    landingPath: url.pathname.slice(0, 300),
    referrerHost: externalHost.slice(0, 200),
  }
}

const storageKey = 'mgp-referral-session-v1'
let currentAttribution: LeadAttribution | undefined

export function getLeadAttribution(): LeadAttribution {
  if (currentAttribution) return currentAttribution
  const detected = detectAttribution(window.location.href, document.referrer)
  try {
    const saved = JSON.parse(window.sessionStorage.getItem(storageKey) || 'null') as LeadAttribution | null
    // Keep the first identified referral while someone browses to the quote form.
    // A new external/campaign visit can replace a previously unknown direct entry.
    const sources = [...referralOptions, 'Other campaign', 'Direct / unknown']
    const valid = saved && sources.includes(saved.detectedSource) && ['utm_source', 'referrer', 'unavailable'].includes(saved.sourceEvidence) && typeof saved.landingPath === 'string' && saved.landingPath.startsWith('/') && !/[?#]/.test(saved.landingPath) && typeof saved.referrerHost === 'string'
    currentAttribution = valid && (saved.sourceEvidence !== 'unavailable' || detected.sourceEvidence === 'unavailable') ? saved : detected
    window.sessionStorage.setItem(storageKey, JSON.stringify(currentAttribution))
  } catch {
    currentAttribution = detected
  }
  return currentAttribution
}

type AnalyticsWindow = Window & { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void }

export function trackLeadEvent(event: 'contact_click' | 'generate_lead', method: 'phone' | 'sms' | 'email' | 'form', reportedSource = '', service = '') {
  try {
    const attribution = getLeadAttribution()
    const params = {
      contact_method: method,
      service_type: service ? serviceCategory(service) : glassServices.find((item) => item.href === window.location.pathname)?.id || (/shower-door/.test(window.location.pathname) ? 'shower-doors' : 'other'),
      lead_source: attribution.detectedSource,
      source_evidence: attribution.sourceEvidence,
      reported_source: referralOptions.includes(reportedSource) ? reportedSource : 'Not provided',
      landing_path: attribution.landingPath,
      page_path: window.location.pathname,
    }
    const analytics = window as AnalyticsWindow
    if (typeof analytics.gtag === 'function') analytics.gtag('event', event, params)
    else {
      analytics.dataLayer = analytics.dataLayer || []
      // Queue in the same Arguments format used by the standard Google tag.
      const queue = function (..._args: unknown[]) { analytics.dataLayer?.push(arguments) }
      queue('event', event, params)
    }
  } catch { /* Analytics must never block a quote request or contact link. */ }
}
