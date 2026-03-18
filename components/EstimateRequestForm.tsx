'use client'

import type { FormEvent, ReactNode } from 'react'
import { useState } from 'react'

type FormValues = {
  name: string
  phone: string
  email: string
  service: string
  borough: string
  neighborhood: string
  buildingType: string
  projectTimeline: string
  projectType: string
  photosReady: string
  coiNeeded: string
  message: string
  website: string
}

type SubmitState = 'idle' | 'submitting' | 'success' | 'error'

const initialValues: FormValues = {
  name: '',
  phone: '',
  email: '',
  service: '',
  borough: '',
  neighborhood: '',
  buildingType: '',
  projectTimeline: '',
  projectType: '',
  photosReady: '',
  coiNeeded: '',
  message: '',
  website: '',
}

const serviceOptions = [
  'Frameless Shower Door',
  'Sliding Shower Door',
  'Shower Door Replacement',
  'Shower Door Repair or Leak Issue',
  'Framed or Semi Frameless Shower Door',
  'Custom Mirror',
  'Glass Partition or Railing',
  'Commercial or Trade Project',
  'Other',
]

const boroughOptions = [
  'Manhattan',
  'Brooklyn',
  'Queens',
  'The Bronx',
  'Staten Island',
  'Long Island',
  'Northern New Jersey',
]

const buildingOptions = [
  'Condo',
  'Co op',
  'Brownstone or Townhouse',
  'Rental Apartment',
  'Single Family Home',
  'Commercial',
  'Other',
]

const timelineOptions = [
  'ASAP',
  'Within 1 to 2 weeks',
  'This month',
  'Planning and comparing',
]

const projectTypeOptions = [
  'New shower door install',
  'Replacing an existing door',
  'Need repair more than replacement',
  'Not sure yet',
]

const photosOptions = [
  'Yes, I can text photos now',
  'I can send photos after you reply',
  'Not yet',
]

const coordinationOptions = [
  'Yes, COI will be needed',
  'Yes, and the building has delivery or elevator rules',
  'No, COI not needed',
  'Not sure yet',
]

const inputClassName =
  'w-full px-5 py-3.5 bg-white/70 border border-charcoal/[0.08] rounded-2xl text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-charcoal/30 focus:bg-white transition-colors'

function Section({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string
  title: string
  description: string
  children: ReactNode
}) {
  return (
    <section className="rounded-[28px] border border-charcoal/[0.06] bg-white/45 p-5 sm:p-6">
      <p className="text-orange text-[11px] font-semibold tracking-[0.22em] uppercase mb-3">{eyebrow}</p>
      <h3 className="font-serif text-charcoal text-2xl mb-2">{title}</h3>
      <p className="text-warm text-[14px] leading-relaxed mb-5">{description}</p>
      {children}
    </section>
  )
}

export default function EstimateRequestForm() {
  const [values, setValues] = useState<FormValues>(initialValues)
  const [submitState, setSubmitState] = useState<SubmitState>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  function updateField(name: keyof FormValues, value: string) {
    setValues((current) => ({ ...current, [name]: value }))
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitState('submitting')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })

      const payload = await response.json().catch(() => ({}))

      if (!response.ok) {
        throw new Error(payload.error || 'We could not send your request right now. Please call or text us.')
      }

      setSubmitState('success')
      setValues(initialValues)
    } catch (error) {
      setSubmitState('error')
      setErrorMessage(error instanceof Error ? error.message : 'We could not send your request right now. Please call or text us.')
    }
  }

  if (submitState === 'success') {
    return (
      <div className="glass-card overflow-hidden">
        <div className="bg-charcoal px-7 py-6 sm:px-8">
          <p className="text-orange text-[11px] font-semibold tracking-[0.22em] uppercase mb-3">Request Sent</p>
          <h2 className="font-serif text-white text-3xl sm:text-4xl">Your estimate request is on its way.</h2>
        </div>
        <div className="p-7 sm:p-8">
          <p className="text-warm text-[15px] leading-relaxed mb-6">
            We received your project details. For the fastest pricing, text bathroom photos to <a href="sms:+13329993846?body=Hi%20MetroGlass%20Pro%2C%20I%20just%20sent%20an%20estimate%20request%20and%20am%20sending%20photos." className="text-orange hover:opacity-70 transition-opacity">(332) 999-3846</a> so we can review the layout right away.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="rounded-3xl bg-cream-light p-5">
              <p className="text-orange text-[11px] font-semibold tracking-[0.22em] uppercase mb-2">What Happens Next</p>
              <p className="text-warm text-[14px] leading-relaxed">We review the layout, building details, and service type, then reply with the best next step, rough pricing guidance, or a field measure recommendation.</p>
            </div>
            <div className="rounded-3xl bg-cream-light p-5">
              <p className="text-orange text-[11px] font-semibold tracking-[0.22em] uppercase mb-2">Need Faster Help</p>
              <p className="text-warm text-[14px] leading-relaxed">If this is an urgent replacement or repair issue, call <a href="tel:+13329993846" className="text-orange hover:opacity-70 transition-opacity">(332) 999-3846</a>.</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setSubmitState('idle')}
            className="btn-pill btn-primary px-8 py-3 text-sm"
          >
            Send Another Request
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="glass-card relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-r from-orange/12 via-orange/5 to-transparent" />
      <div className="relative p-7 sm:p-8 lg:p-10">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
          <div className="max-w-xl">
            <p className="text-orange text-[11px] font-semibold tracking-[0.22em] uppercase mb-3">MetroGlass Pro Estimate</p>
            <h2 className="font-serif text-charcoal text-3xl sm:text-4xl leading-tight">A better contact form for serious Manhattan buyers.</h2>
            <p className="mt-4 text-warm text-[15px] leading-relaxed">
              This form goes straight to the MetroGlass Pro inbox. Share the basics, tell us about the building, and we can give you a faster, more useful response than a generic home services form ever will.
            </p>
          </div>
          <div className="rounded-[26px] bg-charcoal text-white px-5 py-4 min-w-[220px]">
            <p className="text-white/50 text-[11px] font-semibold tracking-[0.22em] uppercase mb-2">Best For</p>
            <div className="space-y-2 text-[14px] leading-relaxed">
              <p>Custom shower doors</p>
              <p>Replacement and repair leads</p>
              <p>Co op and condo coordination</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2.5 mb-8">
          {['Fast replies', 'Manhattan first', 'Text photos anytime'].map((item) => (
            <span key={item} className="rounded-full border border-charcoal/[0.08] bg-white/70 px-4 py-2 text-[12px] text-charcoal/55">
              {item}
            </span>
          ))}
        </div>

        {submitState === 'error' && (
          <div className="mb-6 rounded-3xl border border-orange/20 bg-orange/[0.06] px-5 py-4 text-[14px] text-charcoal/70" aria-live="polite">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          <input
            type="text"
            name="website"
            value={values.website}
            onChange={(event) => updateField('website', event.target.value)}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          <Section
            eyebrow="Project Basics"
            title="Start with the essentials."
            description="No measurements yet is fine. We can still tell a lot from your service type, timeline, and a few clear notes."
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-[13px] font-medium text-charcoal/50 mb-2">Name</label>
                <input id="name" name="name" value={values.name} onChange={(event) => updateField('name', event.target.value)} required className={inputClassName} />
              </div>
              <div>
                <label htmlFor="phone" className="block text-[13px] font-medium text-charcoal/50 mb-2">Phone</label>
                <input id="phone" name="phone" type="tel" value={values.phone} onChange={(event) => updateField('phone', event.target.value)} required className={inputClassName} />
              </div>
              <div>
                <label htmlFor="email" className="block text-[13px] font-medium text-charcoal/50 mb-2">Email</label>
                <input id="email" name="email" type="email" value={values.email} onChange={(event) => updateField('email', event.target.value)} required className={inputClassName} />
              </div>
              <div>
                <label htmlFor="service" className="block text-[13px] font-medium text-charcoal/50 mb-2">Service</label>
                <select id="service" name="service" value={values.service} onChange={(event) => updateField('service', event.target.value)} required className={inputClassName}>
                  <option value="">Select a service</option>
                  {serviceOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>
          </Section>

          <Section
            eyebrow="Location and Building"
            title="Help us understand the job context."
            description="Manhattan projects move faster when we know the neighborhood, building type, and whether the property has access rules."
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="borough" className="block text-[13px] font-medium text-charcoal/50 mb-2">Borough</label>
                <select id="borough" name="borough" value={values.borough} onChange={(event) => updateField('borough', event.target.value)} required className={inputClassName}>
                  <option value="">Select borough</option>
                  {boroughOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="neighborhood" className="block text-[13px] font-medium text-charcoal/50 mb-2">Neighborhood</label>
                <input
                  id="neighborhood"
                  name="neighborhood"
                  value={values.neighborhood}
                  onChange={(event) => updateField('neighborhood', event.target.value)}
                  placeholder="Tribeca, Upper East Side, Lower East Side"
                  className={inputClassName}
                />
              </div>
              <div>
                <label htmlFor="buildingType" className="block text-[13px] font-medium text-charcoal/50 mb-2">Building Type</label>
                <select id="buildingType" name="buildingType" value={values.buildingType} onChange={(event) => updateField('buildingType', event.target.value)} className={inputClassName}>
                  <option value="">Select building type</option>
                  {buildingOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="coiNeeded" className="block text-[13px] font-medium text-charcoal/50 mb-2">COI or Building Coordination</label>
                <select id="coiNeeded" name="coiNeeded" value={values.coiNeeded} onChange={(event) => updateField('coiNeeded', event.target.value)} className={inputClassName}>
                  <option value="">Select if known</option>
                  {coordinationOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>
          </Section>

          <Section
            eyebrow="Timing"
            title="Tell us where you are in the process."
            description="This helps us respond with the right level of detail, rough pricing, urgent repair guidance, or field measure timing."
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label htmlFor="projectTimeline" className="block text-[13px] font-medium text-charcoal/50 mb-2">Project Timeline</label>
                <select id="projectTimeline" name="projectTimeline" value={values.projectTimeline} onChange={(event) => updateField('projectTimeline', event.target.value)} className={inputClassName}>
                  <option value="">Select timeline</option>
                  {timelineOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="projectType" className="block text-[13px] font-medium text-charcoal/50 mb-2">Project Type</label>
                <select id="projectType" name="projectType" value={values.projectType} onChange={(event) => updateField('projectType', event.target.value)} className={inputClassName}>
                  <option value="">Select project type</option>
                  {projectTypeOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="photosReady" className="block text-[13px] font-medium text-charcoal/50 mb-2">Photos Ready</label>
                <select id="photosReady" name="photosReady" value={values.photosReady} onChange={(event) => updateField('photosReady', event.target.value)} className={inputClassName}>
                  <option value="">Select if known</option>
                  {photosOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>
          </Section>

          <Section
            eyebrow="Project Notes"
            title="Give us the details that matter."
            description="Tell us if you are replacing an old door, dealing with a leak, coordinating with a building, or working with a designer or contractor."
          >
            <div>
              <label htmlFor="message" className="block text-[13px] font-medium text-charcoal/50 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={values.message}
                onChange={(event) => updateField('message', event.target.value)}
                placeholder="Tell us the layout, what style you want, if you are replacing an old door, and anything important about the building or timing."
                className={`${inputClassName} rounded-[24px] resize-vertical`}
              />
            </div>
          </Section>

          <div className="rounded-[28px] border border-charcoal/[0.06] bg-charcoal text-white px-6 py-5">
            <p className="text-white/45 text-[11px] font-semibold tracking-[0.22em] uppercase mb-2">Fastest Pricing Tip</p>
            <p className="text-white/80 text-[14px] leading-relaxed">
              After submitting, text bathroom photos to <a href="sms:+13329993846?body=Hi%20MetroGlass%20Pro%2C%20I%20just%20submitted%20the%20estimate%20form%20and%20am%20sending%20photos." className="text-orange hover:opacity-70 transition-opacity">(332) 999-3846</a>. That usually gives us the clearest first look at the layout.
            </p>
          </div>

          <button
            type="submit"
            disabled={submitState === 'submitting'}
            className="w-full btn-pill btn-primary py-4 text-sm disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {submitState === 'submitting' ? 'Sending Request...' : 'Send Estimate Request'}
          </button>

          <p className="text-[13px] text-charcoal/45" aria-live="polite">
            Your request goes to MetroGlass Pro directly. If the form ever gives you trouble, call <a href="tel:+13329993846" className="text-orange hover:opacity-70 transition-opacity">(332) 999-3846</a> or email <a href="mailto:operations@metroglasspro.com" className="text-orange hover:opacity-70 transition-opacity">operations@metroglasspro.com</a>.
          </p>
        </form>
      </div>
    </div>
  )
}
