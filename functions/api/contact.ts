interface Env {
  RESEND_API_KEY?: string
  CONTACT_TO_EMAIL?: string
  CONTACT_FROM_EMAIL?: string
  CONTACT_FROM_NAME?: string
}

type PagesContext = {
  request: Request
  env: Env
}

type Submission = {
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

function json(data: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
    },
  })
}

function clean(value: unknown, max = 500) {
  if (typeof value !== 'string') return ''
  return value.trim().replace(/\s+/g, ' ').slice(0, max)
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function buildSubmission(payload: Record<string, unknown>): Submission {
  return {
    name: clean(payload.name, 120),
    phone: clean(payload.phone, 80),
    email: clean(payload.email, 160),
    service: clean(payload.service, 120),
    borough: clean(payload.borough, 80),
    neighborhood: clean(payload.neighborhood, 120),
    buildingType: clean(payload.buildingType, 120),
    projectTimeline: clean(payload.projectTimeline, 120),
    projectType: clean(payload.projectType, 120),
    photosReady: clean(payload.photosReady, 120),
    coiNeeded: clean(payload.coiNeeded, 160),
    message: clean(payload.message, 3000),
    website: clean(payload.website, 120),
  }
}

function buildRows(submission: Submission) {
  return [
    ['Name', submission.name],
    ['Phone', submission.phone],
    ['Email', submission.email],
    ['Service', submission.service],
    ['Borough', submission.borough],
    ['Neighborhood', submission.neighborhood],
    ['Building Type', submission.buildingType],
    ['Project Timeline', submission.projectTimeline],
    ['Project Type', submission.projectType],
    ['Photos Ready', submission.photosReady],
    ['COI or Coordination', submission.coiNeeded],
    ['Message', submission.message],
  ].filter(([, value]) => Boolean(value))
}

function buildHtml(submission: Submission) {
  const rows = buildRows(submission)
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding: 12px 16px; border-bottom: 1px solid #ece7de; color: #7b7468; font-size: 12px; letter-spacing: 0.18em; text-transform: uppercase; vertical-align: top; width: 210px;">${escapeHtml(label)}</td>
          <td style="padding: 12px 16px; border-bottom: 1px solid #ece7de; color: #1f1c17; font-size: 15px; line-height: 1.6;">${escapeHtml(value)}</td>
        </tr>
      `,
    )
    .join('')

  return `
    <div style="background: #f7f3eb; padding: 32px 16px; font-family: Inter, Arial, sans-serif; color: #1f1c17;">
      <div style="max-width: 760px; margin: 0 auto; background: #ffffff; border-radius: 24px; overflow: hidden; border: 1px solid rgba(31, 28, 23, 0.08);">
        <div style="background: #1f1c17; padding: 28px 32px;">
          <div style="color: #d68040; font-size: 11px; font-weight: 700; letter-spacing: 0.24em; text-transform: uppercase; margin-bottom: 10px;">MetroGlass Pro</div>
          <h1 style="color: #ffffff; margin: 0; font-family: Georgia, serif; font-size: 34px; line-height: 1.2;">New estimate request</h1>
          <p style="color: rgba(255,255,255,0.65); margin: 14px 0 0; font-size: 15px; line-height: 1.6;">A new website lead just came in from the MetroGlass Pro contact form.</p>
        </div>
        <div style="padding: 28px 32px 32px;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse: collapse; background: #fffaf3; border-radius: 18px; overflow: hidden;">
            ${rows}
          </table>
        </div>
      </div>
    </div>
  `
}

function buildText(submission: Submission) {
  return buildRows(submission)
    .map(([label, value]) => `${label}: ${value}`)
    .join('\n')
}

export const onRequestOptions = async () =>
  new Response(null, {
    status: 204,
    headers: {
      Allow: 'POST, OPTIONS',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })

export const onRequestPost = async ({ request, env }: PagesContext) => {
  if (!env.RESEND_API_KEY || !env.CONTACT_TO_EMAIL) {
    return json({ error: 'Email delivery is not configured yet. Add the mail secrets in Cloudflare Pages first.' }, 500)
  }

  let rawPayload: Record<string, unknown>

  try {
    rawPayload = (await request.json()) as Record<string, unknown>
  } catch {
    return json({ error: 'We could not read this request. Please try again.' }, 400)
  }

  const submission = buildSubmission(rawPayload)

  if (submission.website) {
    return json({ ok: true })
  }

  if (!submission.name || !submission.phone || !submission.email || !submission.service || !submission.borough) {
    return json({ error: 'Please include your name, phone, email, service, and borough.' }, 400)
  }

  if (!isValidEmail(submission.email)) {
    return json({ error: 'Please enter a valid email address.' }, 400)
  }

  const subject = [
    'New MetroGlass Pro estimate request',
    submission.borough,
    submission.service,
  ]
    .filter(Boolean)
    .join(' | ')

  const fromEmail = env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev'
  const fromName = env.CONTACT_FROM_NAME || 'MetroGlass Pro Website'

  const resendResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: `${fromName} <${fromEmail}>`,
      to: [env.CONTACT_TO_EMAIL],
      subject,
      html: buildHtml(submission),
      text: buildText(submission),
      replyTo: submission.email,
    }),
  })

  if (!resendResponse.ok) {
    const errorText = await resendResponse.text()
    return json({ error: `Email delivery failed. ${errorText || 'Please try again.'}` }, 502)
  }

  return json({ ok: true })
}
