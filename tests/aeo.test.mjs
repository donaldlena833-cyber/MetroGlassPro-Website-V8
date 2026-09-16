import test from 'node:test'
import { glassServices, quoteServiceFromId, serviceCategory, servicePhotoTip } from '../content/service-catalog.ts'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { onRequest } from '../functions/_middleware.ts'
import { detectAttribution, getLeadAttribution, trackLeadEvent } from '../lib/lead-attribution.ts'
import { onRequestPost } from '../functions/api/contact.ts'

test('hinge article author and publisher resolve to the logo-bearing business entity', () => {
  const source = readFileSync(new URL('../app/projects/crl-geneva-vs-vienna-hinges/page.tsx', import.meta.url), 'utf8')
  assert.match(source, /const metroGlassOrganization = \{[\s\S]*'@id': 'https:\/\/metroglasspro\.com\/#organization'[\s\S]*logo: \{ '@type': 'ImageObject'/)
  assert.match(source, /author: metroGlassOrganization/)
  assert.match(source, /publisher: metroGlassOrganization/)
})

test('priority repair and installation guides identify a logo-bearing author and publisher', () => {
  const installation = readFileSync(new URL('../app/projects/coop-condo-shower-door-installation-nyc/page.tsx', import.meta.url), 'utf8')
  assert.match(installation, /const metroGlassOrganization = \{[\s\S]*logo: \{ '@type': 'ImageObject'/)
  assert.match(installation, /author: metroGlassOrganization/)
  assert.match(installation, /publisher: metroGlassOrganization/)

  const repair = readFileSync(new URL('../public/blog/2026-05-09-honest-shower-door-repair-nyc.html', import.meta.url), 'utf8')
  const article = JSON.parse(repair.match(/<script type="application\/ld\+json">\s*([\s\S]*?)\s*<\/script>/)?.[1] || '{}')
  for (const organization of [article.author, article.publisher]) {
    assert.equal(organization?.['@id'], 'https://metroglasspro.com/#organization')
    assert.equal(organization?.logo?.url, 'https://metroglasspro.com/assets/logo.png')
  }
})

test('design consultation article identifies a logo-bearing author and publisher', () => {
  const source = readFileSync(new URL('../app/projects/shower-glass-design-consultation-nyc/page.tsx', import.meta.url), 'utf8')
  assert.match(source, /const metroGlassOrganization = \{[\s\S]*'@id': 'https:\/\/metroglasspro\.com\/#organization'[\s\S]*logo: \{[\s\S]*'@type': 'ImageObject'[\s\S]*url: 'https:\/\/metroglasspro\.com\/assets\/logo\.png'/)
  assert.match(source, /author: metroGlassOrganization/)
  assert.match(source, /publisher: metroGlassOrganization/)
  assert.match(source, /dateModified: '2026-09-11'/)
})

test('installation page avoids unsupported timing and availability promises', () => {
  const source = readFileSync(new URL('../app/shower-door-installation-nyc/page.tsx', import.meta.url), 'utf8')
  const homepage = readFileSync(new URL('../app/page.tsx', import.meta.url), 'utf8')
  const combined = `${source}\n${homepage}`
  assert.doesNotMatch(combined, /Most (?:shower door )?installations take about 2 to 4 hours/)
  assert.doesNotMatch(source, /shower is usable the same day/)
  assert.doesNotMatch(source, /Same-week measurement available/)
  assert.doesNotMatch(source, /in-house\. No subcontractors|provide Certificates of Insurance|reserve freight elevators|Most buildings limit construction to weekdays between 8am[–-]5pm|we handle all of it/i)
  assert.match(source, /Cure time depends on the sealant used/)
  assert.match(source, /required cure time for the sealant used/)
  assert.match(source, /Building management makes the final decision on access and documentation/)
  assert.match(source, /Removal and surface cleanup can be included/)
  assert.match(homepage, /sealant-specific cure instructions/)
  assert.match(source, /Send photos and project details to start/)
})

test('frameless service page avoids unsupported trust and turnaround claims', () => {
  const source = readFileSync(new URL('../app/frameless-shower-doors-nyc/page.tsx', import.meta.url), 'utf8')
  const facts = readFileSync(new URL('../content/shower-door-facts.ts', import.meta.url), 'utf8')
  const footer = readFileSync(new URL('../components/Footer.tsx', import.meta.url), 'utf8')
  const combined = `${source}\n${facts}\n${footer}`

  assert.doesNotMatch(combined, /200\+ NYC Installs|over 200 times/)
  assert.doesNotMatch(combined, /Licensed & Insured|fully licensed and insured|Licensed and insured in New York/i)
  assert.doesNotMatch(combined, /ready to use the same day|Most quotes delivered same day/)
  assert.doesNotMatch(combined, /5[–-]7 Business Days|2[–-]4 Hours|1\.5 to 2 weeks/)
  assert.match(source, /Management makes the final acceptance decision/)
  assert.match(source, /follow the exact cure and shower-use instructions/)
  assert.match(source, /Send photos and rough dimensions to start a project-specific estimate/)
  assert.match(footer, /Call or text to confirm current availability/)
})

test('replacement page avoids blanket schedule, popularity, and removal claims', () => {
  const source = readFileSync(new URL('../app/shower-door-replacement-nyc/page.tsx', import.meta.url), 'utf8')

  assert.doesNotMatch(source, /one of our most common jobs|most common replacement we do/i)
  assert.doesNotMatch(source, /single visit|1\.5[–-]2 weeks|5[–-]7 Days|2[–-]4 Hours/)
  assert.doesNotMatch(source, /provide a quote on the spot|damage is unavoidable \(rare\)/i)
  assert.doesNotMatch(source, /single most impactful|Adds real value for co-op and condo resales/i)
  assert.match(source, /Removal and installation may be planned together or separately/)
  assert.match(source, /perfect concealment cannot be guaranteed/)
  assert.match(source, /Stop using a door with cracked or significantly chipped glass/)
})

test('repair page keeps diagnosis, activity, and building logistics project-specific', () => {
  const source = readFileSync(new URL('../app/shower-door-repair-nyc/page.tsx', import.meta.url), 'utf8')

  assert.doesNotMatch(source, /fast Manhattan-first estimate|fast diagnosis|sort out every week|regularly evaluate shower doors installed by others/i)
  assert.doesNotMatch(source, /we work in Manhattan apartments, co-ops, condos, brownstones/i)
  assert.match(source, /Send photos for a Manhattan-first assessment/)
  assert.match(source, /Photos help determine whether an on-site assessment is appropriate/)
  assert.match(source, /requirements before scheduling so they can be reviewed for the specific property/)
})

test('co-op and condo guide keeps approval, insurance, and timing project-specific', () => {
  const source = readFileSync(new URL('../app/projects/coop-condo-shower-door-installation-nyc/page.tsx', import.meta.url), 'utf8')

  assert.doesNotMatch(source, /over 200 NYC buildings|almost always require|provides COIs at no charge|within 24 hours|Typically 10[–-]14 days|5[–-]7 business days|2[–-]4 hours|about two weeks|do them every week/i)
  assert.doesNotMatch(source, /almost universally enforce quiet hours|Monday through Friday, 8 AM to 5 PM|most co-ops do not require board approval/i)
  assert.match(source, /Requirements vary by property/)
  assert.match(source, /the building or its management company decides whether the submission is acceptable/)
  assert.match(source, /a glass estimate is not a permit determination/)
  assert.match(source, /dateModified: '2026-09-14'/)
})

function pageContext(accept, { pathname = '/frameless-shower-doors-nyc/', method = 'GET', htmlStatus = 200, assetStatus = 200 } = {}) {
  return {
    request: new Request(`https://metroglasspro.com${pathname}`, { method, headers: accept ? { Accept: accept } : {} }),
    next: async () => new Response('<h1>Shower doors</h1>', { status: htmlStatus, headers: { 'Content-Type': 'text/html', ...(htmlStatus === 301 ? { Location: '/contact/' } : {}) } }),
    env: { ASSETS: { fetch: async (request) => {
      assert.equal(new URL(request.url).pathname, `${pathname}index.md`)
      assert.equal(request.headers.get('accept'), 'text/markdown')
      return new Response('# Shower doors\n\nPlanning prices and layouts.', { status: assetStatus, headers: { 'Content-Type': 'text/markdown' } })
    } } },
  }
}

test('service page supports Markdown, HEAD and the existing HTML representation', async () => {
  const markdown = await onRequest(pageContext('text/markdown'))
  assert.equal(markdown.status, 200)
  assert.match(markdown.headers.get('content-type'), /text\/markdown/)
  assert.equal(markdown.headers.get('vary'), 'Accept')
  assert.match(markdown.headers.get('link'), /rel="canonical"/)
  assert.match(await markdown.text(), /^# Shower doors/)
  const head = await onRequest(pageContext('text/markdown', { method: 'HEAD' }))
  assert.equal(head.status, 200)
  assert.equal(await head.text(), '')
  for (const accept of [undefined, '*/*', 'text/html,application/xhtml+xml,*/*;q=0.8', 'text/markdown;q=0,text/html;q=1']) {
    const html = await onRequest(pageContext(accept))
    assert.equal(html.status, 200)
    assert.match(html.headers.get('content-type'), /text\/html/)
  }
})

test('missing Markdown falls back only if HTML is acceptable', async () => {
  const fallback = await onRequest(pageContext('text/markdown,text/html;q=0.8', { assetStatus: 404 }))
  assert.equal(fallback.status, 200)
  assert.match(fallback.headers.get('content-type'), /text\/html/)
  for (const accept of ['text/markdown', 'text/markdown,text/html;q=0', 'application/json']) {
    assert.equal((await onRequest(pageContext(accept, { assetStatus: 404 }))).status, 406)
  }
})

test('negotiation preserves redirects, real 404s, API and asset requests', async () => {
  const redirect = await onRequest(pageContext('text/markdown', { htmlStatus: 301 }))
  assert.equal(redirect.status, 301)
  assert.equal(redirect.headers.get('location'), '/contact/')
  const missing = await onRequest(pageContext('text/markdown', { htmlStatus: 404 }))
  assert.equal(missing.status, 404)
  assert.match(await missing.text(), /Page not found/)
  for (const pathname of ['/contact/index.md', '/api/contact', '/robots.txt', '/gallery/photo.jpg']) {
    assert.equal((await onRequest(pageContext('application/json', { pathname }))).status, 200)
  }
})

test('detects known referrals without retaining prompts or query strings', () => {
  assert.deepEqual(detectAttribution('https://metroglasspro.com/frameless-shower-doors-nyc/?utm_source=chatgpt.com&prompt=private#details'), {
    detectedSource: 'ChatGPT', sourceEvidence: 'utm_source', landingPath: '/frameless-shower-doors-nyc/', referrerHost: '',
  })
  assert.equal(detectAttribution('https://metroglasspro.com/', 'https://www.perplexity.ai/search/private').detectedSource, 'Perplexity')
  assert.equal(detectAttribution('https://metroglasspro.com/', 'https://chatgpt.com.evil.example/').detectedSource, 'Other website')
  assert.equal(detectAttribution('https://metroglasspro.com/contact/', 'https://metroglasspro.com/').detectedSource, 'Direct / unknown')
  assert.equal(detectAttribution('https://metroglasspro.com/?utm_source=unknown-private-name').detectedSource, 'Other campaign')
})

test('attribution survives navigation; analytics uses separate click and submission events', () => {
  const stored = new Map()
  const events = []
  const previousStorage = globalThis.localStorage
  globalThis.localStorage = { getItem: (key) => stored.get(key) || null }
  globalThis.window = { location: { href: 'https://metroglasspro.com/?utm_source=chatgpt.com', pathname: '/' }, sessionStorage: { getItem: (key) => stored.get(key), setItem: (key, value) => stored.set(key, value) }, gtag: (...args) => events.push(args) }
  globalThis.document = { referrer: '' }
  assert.equal(getLeadAttribution().detectedSource, 'ChatGPT')
  window.location = { href: 'https://metroglasspro.com/contact/', pathname: '/contact/' }
  assert.equal(getLeadAttribution().detectedSource, 'ChatGPT')
  assert.equal(getLeadAttribution().landingPath, '/')
  trackLeadEvent('contact_click', 'phone')
  assert.equal(events.length, 0, 'No measurement events before consent')
  stored.set('site-cookie-choice-v1', JSON.stringify({ analytics: true, marketing: false, expires: Date.now() + 60000 }))
  trackLeadEvent('contact_click', 'sms')
  trackLeadEvent('generate_lead', 'form', 'ChatGPT', 'Glass Railing')
  assert.deepEqual(events.map((event) => event[1]), ['contact_click', 'generate_lead'])
  assert.equal(events[1][2].reported_source, 'ChatGPT')
  assert.equal(events[1][2].service_type, 'glass-railings')
  assert.ok(!JSON.stringify(events).includes('utm_source='))
  stored.set('site-cookie-choice-v1', JSON.stringify({ analytics: false, marketing: false, expires: Date.now() + 60000 }))
  trackLeadEvent('generate_lead', 'form')
  assert.equal(events.length, 2, 'Revoking consent blocks further events')
  globalThis.localStorage = previousStorage
  delete globalThis.window
  delete globalThis.document
})

test('contact delivery includes source evidence and sanitizes tracking fields; no live emails', async () => {
  const sent = []
  const originalFetch = globalThis.fetch
  globalThis.fetch = async (_url, options) => { sent.push(JSON.parse(options.body)); return new Response('{"id":"test"}', { status: 200 }) }
  try {
    const payload = { name: 'Test visitor', phone: '555-0100', email: 'visitor@example.com', service: 'Frameless Shower Door', borough: 'Manhattan', howHeard: 'ChatGPT', detectedSource: 'ChatGPT', sourceEvidence: 'utm_source', landingPath: '/frameless-shower-doors-nyc/?private=discard', referrerHost: 'chatgpt.com', message: '<script>untrusted</script>' }
    const env = { RESEND_API_KEY: 'test-only', CONTACT_TO_EMAIL: 'inbox@example.com', CONTACT_FROM_EMAIL: 'website@example.com' }
    const response = await onRequestPost({ request: new Request('https://metroglasspro.com/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) }), env })
    assert.equal(response.status, 200)
    assert.equal(sent.length, 2)
    assert.match(sent[0].text, /How They Found Us \(Customer Reported\): ChatGPT/)
    assert.match(sent[0].text, /Source Evidence: utm_source/)
    assert.match(sent[0].text, /First Landing Page: \/frameless-shower-doors-nyc\//)
    assert.ok(!sent[0].text.includes('private=discard'))
    assert.ok(!sent[0].html.includes('<script>'))
    const invalid = await onRequestPost({ request: new Request('https://metroglasspro.com/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...payload, email: 'invalid' }) }), env })
    assert.equal(invalid.status, 400)
    assert.equal(sent.length, 2)
  } finally { globalThis.fetch = originalFetch }
})


test('all service quote paths use known choices and service-specific guidance', () => {
  for (const service of glassServices) {
    assert.equal(quoteServiceFromId(service.id), service.quoteLabel)
    assert.equal(serviceCategory(service.quoteLabel), service.id)
    assert.equal(servicePhotoTip(service.quoteLabel), service.photoTip)
  }
  assert.equal(quoteServiceFromId('<script>unknown</script>'), '')
  assert.equal(serviceCategory('private user message'), 'other')
  assert.equal(serviceCategory('Shower Door Repair or Leak Issue'), 'shower-doors')
})

test('all non-shower service requests retain their scope in delivery; no live emails', async () => {
  const sent = []
  const originalFetch = globalThis.fetch
  globalThis.fetch = async (_url, options) => { sent.push(JSON.parse(options.body)); return new Response('{"id":"test"}', { status: 200 }) }
  try {
    for (const service of glassServices.filter((item) => item.id !== 'shower-doors')) {
      const response = await onRequestPost({ request: new Request('https://metroglasspro.com/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: 'Test visitor', phone: '555-0100', email: 'visitor@example.com', borough: 'Queens', service: service.quoteLabel }) }), env: { RESEND_API_KEY: 'test-only', CONTACT_TO_EMAIL: 'inbox@example.com', CONTACT_FROM_EMAIL: 'website@example.com' } })
      assert.equal(response.status, 200)
      assert.ok(sent.at(-2).text.includes(service.quoteLabel))
      assert.ok(!sent.at(-1).text.includes('bathroom'))
    }
    assert.equal(sent.length, 10)
  } finally { globalThis.fetch = originalFetch }
})
