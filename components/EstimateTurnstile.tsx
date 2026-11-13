'use client'

import Script from 'next/script'
import { useEffect, useRef, useState } from 'react'
import { turnstileAction } from '@/lib/contact-protection'

type Turnstile = {
  render(container: HTMLElement, options: {
    sitekey: string
    action: string
    appearance: 'interaction-only'
    'response-field': false
    callback: (token: string) => void
    'expired-callback': () => void
    'error-callback': () => void
    'timeout-callback': () => void
  }): string
  reset(id: string): void
  remove(id: string): void
}

export default function EstimateTurnstile({ siteKey, reset, onToken, onFailure, onUnavailable }: {
  siteKey: string
  reset: number
  onToken: (token: string) => void
  onFailure: () => void
  onUnavailable: () => void
}) {
  const container = useRef<HTMLDivElement>(null)
  const widget = useRef<{ api: Turnstile; id: string } | null>(null)
  const [scriptReady, setScriptReady] = useState(false)

  useEffect(() => {
    if (!scriptReady || !container.current) return
    const api = (window as Window & { turnstile?: Turnstile }).turnstile
    if (!api) { onUnavailable(); return }
    try {
      const id = api.render(container.current, {
        sitekey: siteKey,
        action: turnstileAction,
        appearance: 'interaction-only',
        'response-field': false,
        callback: onToken,
        'expired-callback': () => {
          onToken('')
          if (widget.current) api.reset(widget.current.id)
        },
        'error-callback': onFailure,
        'timeout-callback': onFailure,
      })
      widget.current = { api, id }
      return () => {
        api.remove(id)
        widget.current = null
      }
    } catch {
      onUnavailable()
    }
  }, [scriptReady, siteKey, onToken, onFailure, onUnavailable])

  useEffect(() => {
    if (reset && widget.current) widget.current.api.reset(widget.current.id)
  }, [reset])

  return <>
    <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit" onReady={() => setScriptReady(true)} onError={onUnavailable} />
    <div ref={container} />
  </>
}
