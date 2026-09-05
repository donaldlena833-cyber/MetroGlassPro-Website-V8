import test from 'node:test'
import { glassServices, quoteServiceFromId, serviceCategory, servicePhotoTip } from '../content/service-catalog.ts'
import assert from 'node:assert/strict'
import { onRequest } from '../functions/_middleware.ts'
import { detectAttribution, getLeadAttribution, trackLeadEvent } from '../lib/lead-attribution.ts'
import { onRequestPost } from '../functions/api/contact.ts'

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
  globalThis.window = { location: { href: 'https://metroglasspro.com/?utm_source=chatgpt.com', pathname: '/' }, sessionStorage: { getItem: (key) => stored.get(key), setItem: (key, value) => stored.set(key, value) }, gtag: (...args) => events.push(args) }
  globalThis.document = { referrer: '' }
  assert.equal(getLeadAttribution().detectedSource, 'ChatGPT')
  window.location = { href: 'https://metroglasspro.com/contact/', pathname: '/contact/' }
  assert.equal(getLeadAttribution().detectedSource, 'ChatGPT')
  assert.equal(getLeadAttribution().landingPath, '/')
  trackLeadEvent('contact_click', 'sms')
  trackLeadEvent('generate_lead', 'form', 'ChatGPT', 'Glass Railing')
  assert.deepEqual(events.map((event) => event[1]), ['contact_click', 'generate_lead'])
  assert.equal(events[1][2].reported_source, 'ChatGPT')
  assert.equal(events[1][2].service_type, 'glass-railings')
  assert.ok(!JSON.stringify(events).includes('utm_source='))
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
