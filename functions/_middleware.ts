type PagesContext = {
  request: Request
  env: { ASSETS: { fetch(input: Request): Promise<Response> } }
  next(): Promise<Response>
}

type Representation = 'text/html' | 'text/markdown'
type Entry = { mediaType: string; q: number; order: number }

function parseAccept(header: string): Entry[] {
  return header.split(',').map((part, order) => {
    const [mediaType, ...params] = part.trim().toLowerCase().split(';')
    const rawQ = params.find((value) => value.trim().startsWith('q='))?.trim().slice(2)
    const parsed = rawQ === undefined ? 1 : Number(rawQ)
    return { mediaType: mediaType.trim(), q: Number.isFinite(parsed) ? Math.max(0, Math.min(1, parsed)) : 0, order }
  })
}

function specificity(entry: Entry, candidate: Representation) {
  if (entry.mediaType === candidate) return 2
  if (entry.mediaType === `${candidate.split('/')[0]}/*`) return 1
  return entry.mediaType === '*/*' ? 0 : -1
}

function preferredRepresentation(header: string | null, offered: Representation[] = ['text/html', 'text/markdown']): Representation | null {
  if (!header) return 'text/html'
  const entries = parseAccept(header)
  let best: { type: Representation; q: number; order: number; offeredOrder: number } | null = null
  offered.forEach((candidate, offeredOrder) => {
    let chosen: { q: number; order: number; specificity: number } | null = null
    entries.forEach((entry) => {
      const rank = specificity(entry, candidate)
      if (rank < 0) return
      if (!chosen || rank > chosen.specificity || (rank === chosen.specificity && entry.order < chosen.order)) chosen = { q: entry.q, order: entry.order, specificity: rank }
    })
    const selected = chosen as { q: number; order: number; specificity: number } | null
    if (!selected || selected.q <= 0) return
    if (!best || selected.q > best.q || (selected.q === best.q && selected.order < best.order) || (selected.q === best.q && selected.order === best.order && offeredOrder < best.offeredOrder)) best = { type: candidate, q: selected.q, order: selected.order, offeredOrder }
  })
  return (best as { type: Representation } | null)?.type ?? null
}

function varyAccept(headers: Headers) {
  const current = headers.get('Vary')
  if (!current) return headers.set('Vary', 'Accept')
  if (!current.split(',').some((value) => value.trim().toLowerCase() === 'accept')) headers.set('Vary', `${current}, Accept`)
}

function markdownAssetPath(pathname: string) {
  if (pathname === '/') return '/index.md'
  return `${pathname.replace(/\/$/, '')}/index.md`
}

function notFoundMarkdown(pathname: string) {
  return `# Page not found\n\nNo MetroGlass Pro page exists at ${pathname}.\n\n- [Home](https://metroglasspro.com/)\n- [Services](https://metroglasspro.com/services/)\n- [Projects](https://metroglasspro.com/projects/)\n- [Contact](https://metroglasspro.com/contact/)\n- [Sitemap](https://metroglasspro.com/sitemap.xml)\n- [Agent instructions](https://metroglasspro.com/llms.txt)\n`
}

export async function onRequest(context: PagesContext) {
  const { request } = context
  const url = new URL(request.url)
  if (!['GET', 'HEAD'].includes(request.method) || url.pathname.startsWith('/api/') || /\.[^/]+$/.test(url.pathname)) return context.next()

  const htmlResponse = await context.next()
  const htmlWithVary = () => {
    const copy = new Response(request.method === 'HEAD' ? null : htmlResponse.body, htmlResponse)
    varyAccept(copy.headers)
    if (htmlResponse.ok && htmlResponse.headers.get('content-type')?.includes('text/html')) {
      copy.headers.append('Link', `<${url.origin}${markdownAssetPath(url.pathname)}>; rel="alternate"; type="text/markdown"`)
    }
    return copy
  }

  // Existing redirects and error statuses must survive content negotiation.
  if (htmlResponse.status !== 200 && htmlResponse.status !== 404) return htmlWithVary()

  const preferred = preferredRepresentation(request.headers.get('accept'))
  if (htmlResponse.status === 404) {
    if (preferred === 'text/markdown') return new Response(request.method === 'HEAD' ? null : notFoundMarkdown(url.pathname), { status: 404, headers: { 'Content-Type': 'text/markdown; charset=utf-8', Vary: 'Accept' } })
    return htmlWithVary()
  }
  if (preferred === null) return new Response(request.method === 'HEAD' ? null : 'Not Acceptable\n\nAvailable: text/html, text/markdown\n', { status: 406, headers: { 'Content-Type': 'text/plain; charset=utf-8', Vary: 'Accept' } })

  if (preferred === 'text/markdown') {
    const markdownUrl = new URL(request.url)
    markdownUrl.pathname = markdownAssetPath(url.pathname)
    markdownUrl.search = ''
    const headers = new Headers(request.headers)
    headers.set('Accept', 'text/markdown')
    headers.delete('If-None-Match')
    headers.delete('If-Modified-Since')
    const markdownRequest = new Request(markdownUrl, { method: 'GET', headers })
    const asset = await context.env.ASSETS.fetch(markdownRequest)
    if (asset.status === 200 && !asset.headers.get('Content-Type')?.includes('text/html')) {
      const response = new Response(request.method === 'HEAD' ? null : asset.body, asset)
      response.headers.set('Content-Type', 'text/markdown; charset=utf-8')
      response.headers.set('Cache-Control', 'public, max-age=300, stale-while-revalidate=86400')
      response.headers.set('Link', `<${url.origin}${url.pathname}>; rel="canonical"`)
      varyAccept(response.headers)
      return response
    }
    if (preferredRepresentation(request.headers.get('accept'), ['text/html'])) return htmlWithVary()
    return new Response(request.method === 'HEAD' ? null : 'Not Acceptable\n\nA Markdown representation is not available for this page.\n', { status: 406, headers: { 'Content-Type': 'text/plain; charset=utf-8', Vary: 'Accept' } })
  }

  return htmlWithVary()
}
