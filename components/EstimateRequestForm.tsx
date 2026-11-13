'use client'

import type { ChangeEvent, FormEvent } from 'react'
import { useState, useEffect, useCallback } from 'react'
import { quoteServiceFromId, serviceOptions } from '@/content/service-catalog'
import { splitContact } from '@/lib/contact-details'
import { referralOptions } from '@/lib/lead-attribution'
import EstimateTurnstile from './EstimateTurnstile'

const initialValues = { name: '', contact: '', service: '', message: '', website: '', howHeard: '' }
const inputClassName = 'w-full min-w-0 px-4 py-3 bg-white border border-charcoal/20 rounded-xl text-base text-charcoal placeholder:text-charcoal/50 focus:outline-none focus:ring-2 focus:ring-charcoal/30'
const labelClassName = 'block text-sm font-medium text-charcoal mb-2'

type ProjectContext = { label: string; url: string; scope: string; service: string }
export default function EstimateRequestForm({ projectContext }: { projectContext?: ProjectContext } = {}) {
  const [values, setValues] = useState({ ...initialValues, service: projectContext?.service || '', message: projectContext?.scope || '' })
  const [files, setFiles] = useState<File[]>([])
  const [submitState, setSubmitState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [onlineAvailable, setOnlineAvailable] = useState(false)
  const [checkingAvailability, setCheckingAvailability] = useState(true)
  const [siteKey, setSiteKey] = useState('')
  const [token, setToken] = useState('')
  const [verificationReset, setVerificationReset] = useState(0)
  const [verificationFailed, setVerificationFailed] = useState(false)
  const handleToken = useCallback((value: string) => {
    setToken(value)
    if (value) setVerificationFailed(false)
  }, [])
  const handleVerificationFailure = useCallback(() => {
    setToken('')
    setVerificationFailed(true)
  }, [])
  const [errorMessage, setErrorMessage] = useState('')
  const [fileError, setFileError] = useState('')
  const [reference, setReference] = useState('')

  const handleVerificationUnavailable = useCallback(() => {
    setToken('')
    setOnlineAvailable(false)
  }, [])

  useEffect(() => {
    const selected = quoteServiceFromId(new URLSearchParams(window.location.search).get('service') || '')
    if (selected) setValues((current) => ({ ...current, service: current.service || selected }))
    let active = true
    fetch('/api/contact', { signal: AbortSignal.timeout(5000), cache: 'no-store' })
      .then((response) => response.ok ? response.json() : null)
      .then((status) => {
        if (active && status?.formAvailable && typeof status.turnstileSiteKey === 'string' && status.turnstileSiteKey) {
          setSiteKey(status.turnstileSiteKey)
          setOnlineAvailable(true)
        }
      })
      .catch(() => { /* The draft links remain available. */ })
      .finally(() => { if (active) setCheckingAvailability(false) })
    return () => { active = false }
  }, [])

  function updateField(name: keyof typeof initialValues, value: string) {
    setValues((current) => ({ ...current, [name]: value }))
  }

  const draft = [
    'Hi MetroGlass Pro, I would like an estimate.',
    values.name && `Name: ${values.name}`,
    values.contact && `Contact: ${values.contact}`,
    values.service && `Service: ${values.service}`,
    values.message && `Project: ${values.message}`,
    values.howHeard && `Found you through: ${values.howHeard}`,
    projectContext && `Article: ${projectContext.label}\n${projectContext.url}`,
  ].filter(Boolean).join('\n')
  const emailHref = `mailto:operations@metroglasspro.com?subject=${encodeURIComponent('Glass project estimate')}&body=${encodeURIComponent(draft)}`
  const smsHref = `sms:+13329993846?body=${encodeURIComponent(draft)}`

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (submitState === 'submitting' || !onlineAvailable || !token) return
    if (!splitContact(values.contact)) {
      setErrorMessage('Enter a phone number or a valid email address so we can reply.')
      event.currentTarget.querySelector<HTMLInputElement>('[name="contact"]')?.focus()
      return
    }
    if (fileError) return
    setSubmitState('submitting')
    setErrorMessage('')
    try {
      const formData = new FormData()
      Object.entries(values).forEach(([key, value]) => formData.append(key, key === 'message' && projectContext ? `${value}\n\nArticle: ${projectContext.label}\n${projectContext.url}` : value))
      formData.set('turnstileToken', token)
      files.forEach((file) => formData.append('attachments', file))
      const response = await fetch('/api/contact', { method: 'POST', body: formData, signal: AbortSignal.timeout(20000) })
      const payload = await response.json().catch(() => ({}))
      if (!response.ok || payload.ok !== true || typeof payload.requestId !== 'string' || !payload.requestId) {
        if (payload.code === 'CONTACT_UNAVAILABLE') setOnlineAvailable(false)
        throw new Error(payload.error || 'We could not confirm your request was sent. Please use the email or text option below.')
      }
      setReference(typeof payload.requestId === 'string' ? payload.requestId : '')
      setSubmitState('success')
      setFiles([])
      const pixelWindow = window as Window & { oaiq?: (...args: unknown[]) => void; __mgpAdsMeasurementAllowed?: boolean }
      if (pixelWindow.__mgpAdsMeasurementAllowed && !payload.duplicate) {
        const eventId = typeof payload.requestId === 'string' && payload.requestId ? { event_id: payload.requestId } : undefined
        pixelWindow.oaiq?.('measure', 'lead_created', { type: 'customer_action' }, eventId)
      }
      if (pixelWindow.__mgpAdsMeasurementAllowed && pixelWindow.oaiq && !payload.duplicate) {
        // Give the SDK time to transmit its batched lead event before navigation.
        await new Promise((resolve) => setTimeout(resolve, 500))
      }
      try { sessionStorage.setItem('received-metroglasspro.com', 'received'); sessionStorage.setItem('received-metroglasspro-reference', typeof payload.requestId === 'string' ? payload.requestId : ''); window.location.assign('/thank-you/'); } catch { /* Keep the existing receipt visible. */ }
    } catch (error) {
      setToken('')
      setVerificationReset((current) => current + 1)
      setSubmitState('error')
      setErrorMessage(error instanceof Error && error.name !== 'TimeoutError' && error.name !== 'TypeError' ? error.message : 'We could not confirm your request was sent. Your details are still here. Please email or text us below.')
    }
  }

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const nextFiles = Array.from(event.target.files || [])
    let error = ''
    if (nextFiles.length > 3) error = 'Choose up to 3 files, or text your photos to us.'
    else if (nextFiles.some((file) => file.size > 8 * 1024 * 1024)) error = 'Keep each file under 8MB, or text larger photos to us.'
    else if (nextFiles.reduce((total, file) => total + file.size, 0) > 18 * 1024 * 1024) error = 'Keep files under 18MB combined, or text your photos to us.'
    setFileError(error)
    setFiles(error ? [] : nextFiles)
    if (error) event.target.value = ''
  }

  if (submitState === 'success') return (
    <div className="glass-card p-6 sm:p-8" role="status">
      <h2 className="font-serif text-charcoal text-3xl">Your request is on its way.</h2>
      <p className="mt-4 text-warm">We’ll review your project and contact you with the next step. For urgent help, call <a href="tel:+19297557176" className="underline">(929) 755-7176</a>.</p>
      <p className="mt-4 text-warm">More photos? <a href="sms:+13329993846" className="underline">Text them to us.</a></p>
      {reference && <p className="mt-4 text-xs text-warm break-all">Request reference: {reference}</p>}
      <button type="button" onClick={() => { setValues({ ...initialValues, service: projectContext?.service || '', message: projectContext?.scope || '' }); setReference(''); setToken(''); setVerificationFailed(false); setSubmitState('idle') }} className="btn-pill btn-primary mt-6 px-6 py-3">Start another request</button>
    </div>
  )

  return (
    <div className="glass-card p-5 sm:p-8">
      <h2 className="font-serif text-charcoal text-3xl">Tell us what you need.</h2>
      <p className="mt-2 mb-6 text-warm text-sm">Just the basics. Measurements and building details can come later.</p>
      <noscript><p className="mb-6">Call <a className="underline" href="tel:+19297557176">(929) 755-7176</a>, <a className="underline" href="sms:+13329993846">text us</a>, or <a className="underline" href="mailto:operations@metroglasspro.com">email operations@metroglasspro.com</a> to request an estimate without JavaScript.</p></noscript>
      <form action="/api/contact" method="post" onSubmit={handleSubmit} className="space-y-4" aria-label="Request a MetroGlass Pro estimate" aria-busy={submitState === 'submitting'}>
        <input type="text" name="website" value={values.website} onChange={(event) => updateField('website', event.target.value)} className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className={labelClassName}>Your name</label>
            <input id="name" name="name" autoComplete="name" value={values.name} onChange={(event) => updateField('name', event.target.value)} maxLength={120} required className={inputClassName} />
          </div>
          <div>
            <label htmlFor="contact" className={labelClassName}>Phone or email</label>
            <input id="contact" name="contact" type="text" value={values.contact} onChange={(event) => updateField('contact', event.target.value)} maxLength={160} required className={inputClassName} />
          </div>
        </div>
        <div>
          <label htmlFor="service" className={labelClassName}>Service <span className="font-normal text-warm">(optional)</span></label>
          <select id="service" name="service" value={values.service} onChange={(event) => updateField('service', event.target.value)} className={inputClassName}>
            <option value="">Not sure yet</option>
            {serviceOptions.map((option) => <option key={option} value={option}>{option}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="message" className={labelClassName}>What do you need?</label>
          <textarea id="message" name="message" value={values.message} onChange={(event) => updateField('message', event.target.value)} rows={3} maxLength={1200} required placeholder="For example: a bathroom mirror in Queens, or a broken glass panel in Manhattan." className={inputClassName} />
        </div>
        <details className="border-y border-charcoal/10 py-3">
          <summary className="cursor-pointer text-sm font-medium text-charcoal py-1">Add photos or how you found us (optional)</summary>
          <div className="pt-4 space-y-4">
            {onlineAvailable ? <div>
              <label htmlFor="attachments" className={labelClassName}>Photos or plans</label>
              <input id="attachments" name="attachments" type="file" accept="image/*,.pdf" multiple onChange={handleFileChange} aria-describedby="photo-help" className="block w-full min-w-0 text-sm text-warm file:mr-3 file:rounded-lg file:border-0 file:bg-cream-dark file:px-3 file:py-2 file:text-charcoal" />
              <p id="photo-help" className="mt-2 text-xs text-warm">Up to 3 files, 8MB each, 18MB total. You can also text photos later.</p>
              {fileError && <p role="alert" className="mt-2 text-sm text-charcoal">{fileError}</p>}
            </div> : <p className="text-sm text-warm">You can attach photos when your email or text app opens.</p>}
            <div>
              <label htmlFor="howHeard" className={labelClassName}>How did you find us?</label>
              <select id="howHeard" name="howHeard" value={values.howHeard} onChange={(event) => updateField('howHeard', event.target.value)} className={inputClassName}>
                <option value="">Choose if you’d like</option>
                {referralOptions.map((option) => <option key={option} value={option}>{option}</option>)}
              </select>
            </div>
          </div>
        </details>
        {errorMessage && <p role="alert" className="rounded-xl bg-orange/10 p-4 text-sm text-charcoal">{errorMessage}</p>}
        {checkingAvailability && <p role="status" className="text-sm text-warm">Checking online availability…</p>}
        {onlineAvailable && <EstimateTurnstile siteKey={siteKey} reset={verificationReset} onToken={handleToken} onFailure={handleVerificationFailure} onUnavailable={handleVerificationUnavailable} />}
        {onlineAvailable && !token && !verificationFailed && <p role="status" className="text-sm text-warm">Checking your connection…</p>}
        {verificationFailed && <button type="button" className="text-sm underline" onClick={() => { setVerificationFailed(false); setVerificationReset((value) => value + 1) }}>Retry security check</button>}
        {onlineAvailable && <button type="submit" disabled={submitState === 'submitting' || Boolean(fileError) || !token} className="btn-pill btn-primary w-full px-6 py-3.5 disabled:opacity-60">{submitState === 'submitting' ? 'Sending…' : 'Send request'}</button>}
        {((!onlineAvailable && !checkingAvailability) || submitState === 'error' || verificationFailed) && <div className="space-y-3" role="status">
          <p className="text-sm text-charcoal">{!onlineAvailable ? 'Please send your request by email or text.' : 'You can also send these details directly.'}</p>
          <div className="grid sm:grid-cols-2 gap-3">
            <a href={emailHref} className="btn-pill btn-primary px-4 py-3 text-center text-sm">Open email draft</a>
            <a href={smsHref} className="btn-pill btn-outline px-4 py-3 text-center text-sm">Open text message</a>
          </div>
          <p className="text-xs text-warm">Your app will open with these details. Review the message and press Send. Attach photos in that app.</p>
        </div>}
        <p className="text-xs text-warm">We’ll use your contact details to respond to this project request.</p>
      </form>
    </div>
  )
}
