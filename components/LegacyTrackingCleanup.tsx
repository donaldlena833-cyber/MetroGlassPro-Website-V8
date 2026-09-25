'use client'

import { useEffect } from 'react'

// Retire the previous optional measurement setup for returning visitors.
// This removes old values only; it creates no identifiers or network requests.
export default function LegacyTrackingCleanup() {
  useEffect(() => {
    try { localStorage.removeItem('site-cookie-choice-v1') } catch { /* Storage may be disabled. */ }
    try { sessionStorage.removeItem('mgp-referral-session-v1') } catch { /* Storage may be disabled. */ }
    const parts = location.hostname.split('.')
    const domains = ['', ...parts.map((_, index) => parts.slice(index).join('.'))]
    for (const cookie of document.cookie.split(';')) {
      const name = cookie.split('=')[0].trim()
      if (!/^(_ga(?:_|$)|_gid$|_gat(?:_|$)|_gcl_|_gac_|_fbp$|_fbc$)/.test(name)) continue
      for (const domain of domains) {
        document.cookie = `${name}=; Max-Age=0; path=/;${domain ? ` domain=${domain};` : ''} SameSite=Lax`
      }
    }
  }, [])
  return null
}
