export const turnstileAction = 'estimate_request'

const windowMs = 10 * 60 * 1000
const duplicateMs = 15 * 60 * 1000
const chunkSize = 750_000

type Statement = {
  bind(...values: (string | number)[]): Statement
  first<T>(): Promise<T | null>
  run(): Promise<unknown>
}
export type ContactDatabase = {
  prepare(sql: string): Statement
  batch<T>(statements: Statement[]): Promise<{ results: T[] }[]>
}

async function hash(value: string) {
  const bytes = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(value))
  return Array.from(new Uint8Array(bytes), (byte) => byte.toString(16).padStart(2, '0')).join('')
}

export async function allowContactAttempt(db: ContactDatabase, ip: string, secret: string, now = Date.now()) {
  const expires = (Math.floor(now / windowMs) + 1) * windowMs
  const key = await hash(JSON.stringify([secret, ip, expires]))
  const results = await db.batch<{ attempts: number }>([
    db.prepare('DELETE FROM contact_rate_limits WHERE expires_at <= ?').bind(now),
    db.prepare(`
      INSERT INTO contact_rate_limits (bucket, expires_at, attempts) VALUES (?, ?, 1)
      ON CONFLICT(bucket) DO UPDATE SET attempts = attempts + 1
      WHERE attempts < 12 RETURNING attempts
    `).bind(key, expires),
  ])
  return results[1].results.length === 1
}

export async function verifyContactToken(token: unknown, secret: string, hostname: string, ip: string) {
  if (typeof token !== 'string' || !token || token.length > 2048) return false
  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body: new URLSearchParams({ secret, response: token, ...(ip ? { remoteip: ip } : {}) }),
    signal: AbortSignal.timeout(5000),
  })
  if (!response.ok) throw new Error('Siteverify unavailable')
  const result = await response.json() as { success?: boolean; hostname?: string; action?: string; 'error-codes'?: string[] }
  if (result['error-codes']?.some((code) => ['internal-error', 'invalid-input-secret', 'missing-input-secret'].includes(code))) {
    throw new Error('Siteverify unavailable')
  }
  return result.success === true && result.hostname === hostname && result.action === turnstileAction
}

type SavedAttachment = { filename: string; contentType: string; content: string }

export async function saveContactInquiry(
  db: ContactDatabase,
  id: string,
  token: string,
  identity: string[],
  details: object,
  files: SavedAttachment[],
  now = Date.now(),
) {
  const fileHashes = await Promise.all(files.map(async (file) => [file.filename, await hash(file.content)]))
  const fingerprint = await hash(JSON.stringify([identity, fileHashes]))
  const tokenHash = await hash(token)
  const metadata = files.map(({ filename, contentType }) => ({ filename, contentType }))
  const statements = [
    db.prepare('DELETE FROM contact_used_tokens WHERE expires_at <= ?').bind(now),
    db.prepare(`
      INSERT INTO contact_used_tokens (token_hash, attempt_id, expires_at) VALUES (?, ?, ?)
      ON CONFLICT(token_hash) DO NOTHING RETURNING attempt_id
    `).bind(tokenHash, id, now + 10 * 60 * 1000),
    db.prepare(`
    INSERT INTO contact_inquiries (id, created_at, fingerprint, details)
    SELECT ?, ?, ?, ?
    WHERE EXISTS (SELECT 1 FROM contact_used_tokens WHERE token_hash = ? AND attempt_id = ?)
    AND NOT EXISTS (
      SELECT 1 FROM contact_inquiries WHERE fingerprint = ? AND created_at >= ?
    )
    RETURNING id
  `).bind(id, now, fingerprint, JSON.stringify({ ...details, attachments: metadata }), tokenHash, id, fingerprint, now - duplicateMs)]

  files.forEach(({ content }, attachmentIndex) => {
    for (let offset = 0; offset < content.length; offset += chunkSize) {
      statements.push(db.prepare(`
        INSERT INTO contact_inquiry_attachment_chunks (inquiry_id, attachment_index, chunk_index, content)
        SELECT id, ?, ?, ? FROM contact_inquiries WHERE id = ?
      `).bind(attachmentIndex, offset / chunkSize, content.slice(offset, offset + chunkSize), id))
    }
  })
  const [, claim, insert] = await db.batch<{ id: string }>(statements)
  if (!claim.results.length) return null
  if (insert.results.length) return { id, isNew: true }

  const existing = await db.prepare(`
    SELECT id FROM contact_inquiries WHERE fingerprint = ? AND created_at >= ?
    ORDER BY created_at DESC LIMIT 1
  `).bind(fingerprint, now - duplicateMs).first<{ id: string }>()
  return existing ? { id: existing.id, isNew: false } : null
}

export async function recordContactNotification(db: ContactDatabase, id: string, accepted: boolean) {
  await db.prepare('UPDATE contact_inquiries SET notification_status = ? WHERE id = ?')
    .bind(accepted ? 'provider_accepted' : 'unconfirmed', id).run()
}
