import { writeFile } from 'node:fs/promises'

let googleAnalyticsId = process.env.NEXT_PUBLIC_GA_ID || null
if (googleAnalyticsId) {
  try {
    const url = new URL('https://www.googletagmanager.com/gtag/js')
    url.searchParams.set('id', googleAnalyticsId)
    const response = await fetch(url, { signal: AbortSignal.timeout(10000) })
    await response.body?.cancel()
    if (response.status === 404) {
      console.warn('The configured GA4 tag returns HTTP 404. Keeping Ads active; GA4 will be checked again on the next build.')
      googleAnalyticsId = null
    }
  } catch {
    // A temporary network failure must not disable an otherwise working tag.
    console.warn('Could not verify the GA4 tag; preserving its configured ID.')
  }
}

await writeFile('lib/analytics-config.json', JSON.stringify({ googleAnalyticsId }) + '\n')
