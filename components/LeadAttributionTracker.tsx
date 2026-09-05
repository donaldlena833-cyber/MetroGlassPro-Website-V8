'use client'

import { useEffect } from 'react'
import { getLeadAttribution, trackLeadEvent } from '@/lib/lead-attribution'

export default function LeadAttributionTracker() {
  useEffect(() => {
    getLeadAttribution()
    const onClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return
      const link = event.target.closest('a[href]')
      const href = link?.getAttribute('href') || ''
      if (href.startsWith('tel:')) trackLeadEvent('contact_click', 'phone')
      if (href.startsWith('sms:')) trackLeadEvent('contact_click', 'sms')
      if (href.startsWith('mailto:')) trackLeadEvent('contact_click', 'email')
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])
  return null
}
