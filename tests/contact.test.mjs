import test from 'node:test'
import assert from 'node:assert/strict'
import { onRequestGet, onRequestPost } from '../functions/api/contact.ts'

const env = { RESEND_API_KEY: 'test-key-never-live', CONTACT_TO_EMAIL: 'operations@example.com', CONTACT_FROM_EMAIL: 'website@example.com' }
const lead = { name: 'Test visitor', contact: 'visitor@example.com', message: 'A mirror in Queens.' }
const request = (body) => new Request('https://metroglasspro.com/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })

test('minimal email and phone requests succeed without requiring both contacts or a service', async (t) => {
  const sent = []
  t.mock.method(globalThis, 'fetch', async (_url, options) => {
    sent.push(JSON.parse(options.body))
    return new Response('{"id":"provider-test"}', { status: 200 })
  })
  for (const contact of ['visitor@example.com', '(212) 555-0100']) {
    const before = sent.length
    const response = await onRequestPost({ request: request({ ...lead, contact }), env })
    assert.equal(response.status, 200)
    assert.equal((await response.json()).ok, true)
    assert.equal(sent.length - before, contact.includes('@') ? 2 : 1)
    if (contact.includes('@')) {
      assert.equal(sent[before].reply_to, contact)
      assert.equal(sent[before + 1].reply_to, env.CONTACT_TO_EMAIL)
      assert.ok(!('replyTo' in sent[before]))
    } else assert.ok(!('reply_to' in sent[before]))
    assert.match(sent[before].text, /Service: Not sure yet/)
  }
})

test('invalid contacts, absent project notes and malformed payloads cannot send', async (t) => {
  const fetch = t.mock.method(globalThis, 'fetch', async () => { throw new Error('Must not send') })
  for (const body of [null, [], { ...lead, contact: '' }, { ...lead, contact: 'not-an-email' }, { ...lead, contact: '123' }, { ...lead, message: '' }, { ...lead, name: '' }]) {
    assert.equal((await onRequestPost({ request: request(body), env })).status, 400)
  }
  assert.equal(fetch.mock.callCount(), 0)
})

test('missing mail configuration exposes only availability and offers a usable fallback error', async (t) => {
  const fetch = t.mock.method(globalThis, 'fetch', async () => { throw new Error('Must not send') })
  for (const missing of ['RESEND_API_KEY', 'CONTACT_TO_EMAIL', 'CONTACT_FROM_EMAIL']) {
    const settings = { ...env, [missing]: '' }
    const status = await onRequestGet({ env: settings })
    assert.deepEqual(await status.json(), { formAvailable: false })
    const response = await onRequestPost({ request: request(lead), env: settings })
    assert.equal(response.status, 503)
    const body = await response.json()
    assert.equal(body.code, 'CONTACT_UNAVAILABLE')
    assert.match(body.error, /email or text/)
    assert.ok(!JSON.stringify(body).includes(missing))
  }
  assert.deepEqual(await (await onRequestGet({ env })).json(), { formAvailable: true })
  assert.deepEqual(await (await onRequestGet({ env: { ...env, CONTACT_FROM_EMAIL: 'onboarding@resend.dev' } })).json(), { formAvailable: false })
  assert.equal(fetch.mock.callCount(), 0)
})

test('provider errors, network failures and missing acceptance IDs never report success or leak raw errors', async (t) => {
  const failures = [() => new Response('{"message":"private-recipient@example.com"}', { status: 403 }), () => { throw new Error('private-token') }, () => new Response('{}', { status: 200 })]
  const fetch = t.mock.method(globalThis, 'fetch', async () => failures.shift()())
  const logs = []
  t.mock.method(console, 'info', (message) => logs.push(message))
  t.mock.method(console, 'error', (message) => logs.push(message))
  for (let i = 0; i < 3; i++) {
    const response = await onRequestPost({ request: request(lead), env })
    assert.equal(response.status, 502)
    const body = await response.json()
    assert.ok(body.requestId)
    assert.notEqual(body.ok, true)
    assert.ok(!JSON.stringify(body).includes('private-'))
  }
  assert.equal(fetch.mock.callCount(), 3)
  assert.ok(!logs.join('').includes('@'))
  assert.ok(!logs.join('').includes('private-'))
})

test('a failed customer confirmation never invalidates an accepted operations email', async (t) => {
  let count = 0
  t.mock.method(globalThis, 'fetch', async () => {
    if (++count === 1) return new Response('{"id":"accepted-lead"}', { status: 200 })
    throw new Error('Confirmation network failure')
  })
  const tasks = []
  const response = await onRequestPost({ request: request(lead), env, waitUntil: (promise) => tasks.push(promise) })
  assert.equal(response.status, 200)
  assert.equal((await response.json()).ok, true)
  await Promise.all(tasks)
  assert.equal(count, 2)
})

test('multipart phone-only requests retain optional photos and service scope', async (t) => {
  const sent = []
  t.mock.method(globalThis, 'fetch', async (_url, options) => { sent.push(JSON.parse(options.body)); return new Response('{"id":"multipart-test"}') })
  const form = new FormData()
  Object.entries({ ...lead, contact: '212-555-0100', service: 'Glass Partition' }).forEach(([key, value]) => form.set(key, value))
  form.append('attachments', new File(['test-photo-bytes'], 'test.jpg', { type: 'image/jpeg' }))
  const response = await onRequestPost({ request: new Request('https://metroglasspro.com/api/contact', { method: 'POST', body: form }), env })
  assert.equal(response.status, 200)
  assert.equal(sent.length, 1)
  assert.match(sent[0].text, /Glass Partition/)
  assert.equal(sent[0].attachments[0].filename, 'test.jpg')
  assert.equal(sent[0].attachments[0].content, btoa('test-photo-bytes'))
})
