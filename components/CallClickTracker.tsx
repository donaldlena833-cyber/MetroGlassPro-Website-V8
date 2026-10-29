'use client'

import { useEffect } from 'react'

// Records taps on tel: links in the NexoServe dashboard, so a call that follows a
// website tap is attributed to the website. Not secrets: both values ship to browsers.
const NEXOSERVE_CALL_CLICK_URL = 'https://polite-crocodile-120.convex.site/api/call-click'
const NEXOSERVE_GBP_ID = 'qh7de5bj2c6vwxpbzkghp1nj898h7qek'
// Previews and the Vercel review copy must not add taps to the live dashboard.
const TRACKED_HOSTS = ['metroglasspro.com', 'www.metroglasspro.com']
const VISITOR_ID_KEY = 'nx_visitor_id'
const THROTTLE_MS = 5000

let memoryVisitorId = ''
let lastSentAt = 0

function visitorId() {
  try {
    const stored = localStorage.getItem(VISITOR_ID_KEY)
    if (stored && /^[A-Za-z0-9_-]{8,64}$/.test(stored)) return stored
  } catch {}
  // Safari before 15.4 has no randomUUID.
  memoryVisitorId ||= crypto.randomUUID?.() ?? Date.now().toString(36) + Math.random().toString(36).slice(2, 12)
  try {
    localStorage.setItem(VISITOR_ID_KEY, memoryVisitorId)
  } catch {}
  return memoryVisitorId
}

export default function CallClickTracker() {
  useEffect(() => {
    if (!TRACKED_HOSTS.includes(window.location.hostname)) return
    const onClick = (event: MouseEvent) => {
      const link = event.target instanceof Element ? event.target.closest('a[href^="tel:"]') : null
      if (!link || Date.now() - lastSentAt < THROTTLE_MS) return
      lastSentAt = Date.now()
      // Tracking must never break the tap; keepalive lets the POST finish while the dialer opens.
      try {
        fetch(NEXOSERVE_CALL_CLICK_URL, {
          method: 'POST',
          keepalive: true,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ gbpId: NEXOSERVE_GBP_ID, visitorId: visitorId(), pagePath: window.location.pathname.slice(0, 200), source: 'site' }),
        }).catch(() => {})
      } catch {}
    }
    // Capture phase: a stopPropagation elsewhere cannot hide the tap.
    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [])

  return null
}
