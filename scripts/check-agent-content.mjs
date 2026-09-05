import assert from 'node:assert/strict'
import { readFile, access } from 'node:fs/promises'
import { parseHTML } from 'linkedom'

const pages = JSON.parse(await readFile('.next/agent-pages.json', 'utf8'))
const directory = await readFile('out/llms.txt', 'utf8')
const titles = new Set()
const normalize = (text) => text.replace(/\s+/g, ' ').trim()
let faqs = 0
for (const page of pages) {
  const pathname = new URL(page.url).pathname
  const html = await readFile(`out${pathname}index.html`, 'utf8')
  const md = await readFile(`out${pathname}index.md`, 'utf8')
  const { document } = parseHTML(html)
  const visibleMain = document.querySelector('main').cloneNode(true)
  visibleMain.querySelectorAll('script, style, [hidden], [aria-hidden="true"]').forEach((node) => node.remove())
  assert.equal(document.querySelectorAll('main h1').length, 1, `${pathname}: one main heading`)
  assert.equal(document.querySelector('link[rel="canonical"]')?.getAttribute('href'), page.url)
  assert.equal(document.querySelector('link[type="text/markdown"]')?.getAttribute('href'), page.markdownUrl)
  const title = document.querySelector('title').textContent
  assert.ok(!titles.has(title), `Duplicate title: ${title}`)
  assert.ok(!/MetroGlass Pro.*MetroGlass Pro/.test(title), `Duplicate brand: ${title}`)
  titles.add(title)
  assert.ok(md.includes(`Source: ${page.url}`))
  assert.ok(directory.includes(page.markdownUrl))
  assert.ok(!md.includes('self.__next_f') && !md.includes('application/ld+json'), `${pathname}: no script payload in Markdown`)
  for (const script of document.querySelectorAll('script[type="application/ld+json"]')) {
    const data = JSON.parse(script.textContent)
    for (const item of Array.isArray(data) ? data : [data]) {
      if (item['@type'] === 'FAQPage') {
        for (const question of item.mainEntity) {
          assert.ok(normalize(visibleMain.textContent).includes(normalize(question.acceptedAnswer.text)), `${pathname}: FAQ answer exists in HTML`)
          faqs++
        }
      }
      if (item['@type'] === 'Service') assert.equal(item.provider['@id'], 'https://metroglasspro.com/#business')
    }
  }
}
for (const pathname of ['/', '/contact/', '/frameless-shower-doors-nyc/', '/shower-door-repair-nyc/', '/projects/frameless-shower-door-cost-nyc/', '/service-areas/manhattan/', '/service-areas/brooklyn/']) {
  assert.ok(pages.some((page) => new URL(page.url).pathname === pathname), `Missing key page: ${pathname}`)
}
const contact = parseHTML(await readFile('out/contact/index.html', 'utf8')).document
assert.ok(contact.querySelector('form input[name="email"][required]'), 'Generation must preserve the real form')
assert.ok(contact.querySelector('select[name="howHeard"]'), 'Referral question must remain in HTML')
assert.ok(!contact.querySelector('form[novalidate]'), 'Browser validation enabled')
const priceMarkdown = await readFile('out/projects/frameless-shower-door-cost-nyc/index.md', 'utf8')
assert.match(priceMarkdown, /\| Layout \| Planning range \| When it fits \|/)
assert.match(priceMarkdown, /\$2,200–\$4,500\+/)
const sitemap = await readFile('out/sitemap.xml', 'utf8')
for (const [, url] of sitemap.matchAll(/<loc>(.*?)<\/loc>/g)) await access(`out${new URL(url).pathname}index.md`)
console.log(`PASS: ${pages.length} canonical pages, ${faqs} visible FAQ answers, metadata, price table, sitemap coverage, and quote form preservation.`)

const services = ['/frameless-shower-doors-nyc/', '/glazing-nyc/', '/glass-railings-nyc/', '/custom-mirrors-nyc/', '/glass-partitions-nyc/', '/glass-repair-nyc/']
for (const entry of ['/', '/services/', '/service-areas/']) {
  const doc = parseHTML(await readFile(`out${entry}index.html`, 'utf8')).document
  for (const service of services) assert.ok(doc.querySelector(`main a[href="${service}"]`), `${entry} links to ${service} in main content`)
}
for (const service of services.slice(1)) {
  const doc = parseHTML(await readFile(`out${service}index.html`, 'utf8')).document
  assert.ok(doc.querySelector('main a[href^="/contact/?service="]'), `${service}: service-specific quote path`)
  assert.ok(doc.querySelector('table th[scope="col"]'), `${service}: semantic planning table`)
  assert.ok(doc.querySelector('nav[aria-label="Breadcrumb"]'), `${service}: navigable breadcrumb`)
  for (const link of doc.querySelectorAll('main a[href^="/"]')) {
    const pathname = new URL(link.getAttribute('href'), 'https://metroglasspro.com').pathname
    await access(`out${pathname}index.html`)
  }
  assert.ok(sitemap.includes(`https://metroglasspro.com${service}`))
}
for (const label of ['Glazing or Glass Replacement', 'Glass Railing', 'Custom Mirror', 'Glass Partition', 'Glass Repair or Broken Glass Replacement']) {
  assert.ok([...contact.querySelectorAll('select[name="service"] option')].some((option) => option.textContent === label), `Quote form choice: ${label}`)
}
console.log('PASS: all six services discoverable, five expanded service pages linked and included in the sitemap, quote paths and distinct form choices preserved.')
