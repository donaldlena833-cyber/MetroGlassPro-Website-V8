import { readFileSync } from 'node:fs'
import { DatabaseSync } from 'node:sqlite'

export function protectedContactEnv(env) {
  const sqlite = new DatabaseSync(':memory:')
  sqlite.exec(readFileSync(new URL('../migrations/contact.sql', import.meta.url), 'utf8'))
  function prepare(sql, values = []) {
    return {
      bind: (...bound) => prepare(sql, bound),
      first: async () => sqlite.prepare(sql).get(...values) ?? null,
      run: async () => sqlite.prepare(sql).run(...values),
      execute: () => sqlite.prepare(sql).all(...values),
    }
  }
  return {
    ...env,
    CONTACT_TURNSTILE_SITE_KEY: 'fixture-site-key',
    CONTACT_TURNSTILE_SECRET: 'fixture-secret',
    CONTACT_DB: {
      prepare,
      async batch(statements) {
        sqlite.exec('BEGIN')
        try {
          const results = statements.map((statement) => ({ results: statement.execute() }))
          sqlite.exec('COMMIT')
          return results
        } catch (error) {
          sqlite.exec('ROLLBACK')
          throw error
        }
      },
    },
  }
}

export function contactPost(handler, hostname) {
  return async ({ request, env, ...context }) => {
    const options = { method: 'POST', headers: new Headers(request.headers) }
    const contentType = options.headers.get('Content-Type')
    const turnstileToken = crypto.randomUUID()
    if (contentType?.startsWith('application/json')) {
      const payload = await request.json()
      if (payload && !Array.isArray(payload) && typeof payload === 'object') payload.turnstileToken = turnstileToken
      options.body = JSON.stringify(payload)
    } else {
      const body = await request.formData()
      body.set('turnstileToken', turnstileToken)
      options.headers.delete('Content-Type')
      options.body = body
    }
    const fetch = globalThis.fetch
    globalThis.fetch = async (url, opts) => String(url).endsWith('/siteverify')
      ? Response.json({ success: true, hostname: hostname || new URL(request.url).hostname, action: 'estimate_request' })
      : fetch(url, opts)
    try {
      return await handler({ ...context, request: new Request(request.url, options), env })
    } finally {
      globalThis.fetch = fetch
    }
  }
}
