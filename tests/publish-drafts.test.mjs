import test from 'node:test'
import assert from 'node:assert/strict'
import { mkdtempSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync, existsSync } from 'node:fs'
import { tmpdir } from 'node:os'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { spawnSync } from 'node:child_process'

const processor = fileURLToPath(new URL('../scripts/process-drafts.mjs', import.meta.url))

function fixture(t) {
  const root = mkdtempSync(path.join(tmpdir(), 'metroglass-publisher-'))
  t.after(() => rmSync(root, { recursive: true, force: true }))
  const put = (name, text) => {
    mkdirSync(path.dirname(path.join(root, name)), { recursive: true })
    writeFileSync(path.join(root, name), text)
  }
  put('app/blog/page.tsx', 'const posts = [\n]\n')
  put('app/sitemap.ts', 'const blogRoutes = [\n]\n')
  const read = (name) => readFileSync(path.join(root, name), 'utf8')
  const snapshot = () => Object.fromEntries(readdirSync(root, { recursive: true, withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name !== 'github-output')
    .map((entry) => path.join(entry.parentPath, entry.name)).sort()
    .map((name) => [path.relative(root, name), readFileSync(name, 'utf8')]))
  const run = () => {
    put('github-output', '')
    const result = spawnSync(process.execPath, [processor], {
      cwd: root, encoding: 'utf8', timeout: 10000,
      env: { ...process.env, GITHUB_OUTPUT: path.join(root, 'github-output') },
    })
    assert.ifError(result.error)
    return { ...result, output: read('github-output') }
  }
  return { root, put, read, snapshot, run }
}

function draft({ status = 'approved', date = '2000-01-01', slug = 'test-guide', title = 'Test guide', body = 'Reviewed factual article body.' } = {}) {
  return `---\ntitle: ${title}\nslug: ${slug}\n${status === null ? '' : `status: ${status}\n`}${date === null ? '' : `date: ${date}\n`}---\n\n${body}\n`
}

test('missing and empty queues are successful, unchanged no-ops', (t) => {
  const f = fixture(t)
  for (const empty of [false, true]) {
    if (empty) mkdirSync(path.join(f.root, '_drafts'))
    const before = f.snapshot()
    const result = f.run()
    assert.equal(result.status, 0)
    assert.equal(result.output, 'published=false\n')
    assert.deepEqual(f.snapshot(), before)
  }
})

test('unapproved, future, missing-date and impossible-date drafts remain untouched', (t) => {
  const f = fixture(t)
  const variants = [
    { status: null }, { status: 'draft' }, { status: 'Approved' },
    { date: null }, { date: '2999-01-01' }, { date: '2001-02-29' },
    { date: '2000-02-30' }, { date: '2000-13-01' }, { date: 'not-a-date' },
  ]
  variants.forEach((value, i) => f.put(`_drafts/${i}.md`, draft(value)))
  const before = f.snapshot()
  const result = f.run()
  assert.equal(result.status, 0)
  assert.equal(result.output, 'published=false\n')
  assert.deepEqual(f.snapshot(), before)
})

test('selects only one approved due draft, skipping held entries', (t) => {
  const f = fixture(t)
  f.put('_drafts/00-future.md', draft({ date: '2999-01-01', slug: 'future' }))
  f.put('_drafts/01-review.md', draft({ status: 'draft', slug: 'review' }))
  f.put('_drafts/02-ready.md', draft())
  f.put('_drafts/03-ready.md', draft({ slug: 'second-guide' }))
  const result = f.run()
  assert.equal(result.status, 0, result.stderr)
  assert.equal(result.output, 'published=true\n')
  assert.match(f.read('app/blog/test-guide/page.tsx'), /Reviewed factual article body/)
  assert.match(f.read('app/blog/test-guide/page.tsx'), /datePublished: "2000-01-01"/)
  assert.match(f.read('app/blog/page.tsx'), /\/blog\/test-guide\//)
  assert.match(f.read('app/sitemap.ts'), /\/blog\/test-guide\//)
  assert.ok(!existsSync(path.join(f.root, '_drafts/02-ready.md')))
  for (const name of ['00-future.md', '01-review.md', '03-ready.md']) assert.ok(existsSync(path.join(f.root, '_drafts', name)))
  assert.ok(!existsSync(path.join(f.root, 'app/blog/second-guide')))
  assert.doesNotMatch(result.stdout, /Live path:|Published draft:/)
})

test('accepts quoted metadata, leap dates, CRLF and a UTF-8 BOM', (t) => {
  const f = fixture(t)
  f.put('_drafts/ready.md', '\uFEFF' + draft({ status: '"approved"', date: '"2000-02-29"' }).replaceAll('\n', '\r\n'))
  assert.equal(f.run().status, 0)
  assert.match(f.read('app/blog/test-guide/page.tsx'), /datePublished: "2000-02-29"/)
})

test('today is eligible and tomorrow is held using the UTC calendar', (t) => {
  const f = fixture(t)
  const today = new Date().toISOString().slice(0, 10)
  const tomorrow = new Date(Date.now() + 86400000).toISOString().slice(0, 10)
  f.put('_drafts/00-tomorrow.md', draft({ date: tomorrow, slug: 'tomorrow' }))
  f.put('_drafts/01-today.md', draft({ date: today, slug: 'today' }))
  assert.equal(f.run().output, 'published=true\n')
  assert.ok(existsSync(path.join(f.root, 'app/blog/today/page.tsx')))
  assert.ok(existsSync(path.join(f.root, '_drafts/00-tomorrow.md')))
})

test('existing app, legacy, index and sitemap routes cannot be overwritten', async (t) => {
  for (const [name, content] of [
    ['app/blog/test-guide/page.tsx', 'Existing reviewed page'],
    ['public/blog/test-guide.html', 'Existing legacy HTML'],
    ['public/blog/test-guide/index.html', 'Existing directory HTML'],
    ['app/blog/page.tsx', 'const posts = [\n{ href: "/blog/test-guide/" }\n]\n'],
    ['app/blog/page.tsx', "const posts = [\n{ href: '/blog/test-guide' }\n]\n"],
    ['app/sitemap.ts', "const blogRoutes = [\n{ path: '/blog/test-guide/' }\n]\n"],
  ]) {
    await t.test(name + content.slice(-15), (t) => {
      const f = fixture(t)
      f.put(name, content)
      f.put('_drafts/ready.md', draft())
      const before = f.snapshot()
      const result = f.run()
      assert.notEqual(result.status, 0)
      assert.match(result.stderr, /Refusing to overwrite/)
      assert.deepEqual(f.snapshot(), before)
    })
  }
})

test('similar route prefixes are not treated as duplicate articles', (t) => {
  const f = fixture(t)
  f.put('app/blog/page.tsx', 'const posts = [\n{ href: "/blog/test-guide-expanded/" }\n]\n')
  f.put('_drafts/ready.md', draft())
  assert.equal(f.run().output, 'published=true\n')
})

test('missing insertion points fail before any source write or draft deletion', async (t) => {
  for (const name of ['app/blog/page.tsx', 'app/sitemap.ts']) {
    await t.test(name, (t) => {
      const f = fixture(t)
      f.put(name, 'Changed source layout')
      f.put('_drafts/ready.md', draft())
      const before = f.snapshot()
      const result = f.run()
      assert.notEqual(result.status, 0)
      assert.match(result.stderr, /insertion point changed/)
      assert.deepEqual(f.snapshot(), before)
    })
  }
})

test('empty title, slug or body fail without consuming the draft', async (t) => {
  for (const value of [{ title: '' }, { slug: '!!!' }, { body: '' }]) {
    await t.test(JSON.stringify(value), (t) => {
      const f = fixture(t)
      f.put('_drafts/ready.md', draft(value))
      const before = f.snapshot()
      assert.notEqual(f.run().status, 0)
      assert.deepEqual(f.snapshot(), before)
    })
  }
})

test('a repeated processed draft cannot duplicate its route or discovery entries', (t) => {
  const f = fixture(t)
  f.put('_drafts/ready.md', draft())
  assert.equal(f.run().status, 0)
  f.put('_drafts/ready.md', draft())
  const before = f.snapshot()
  assert.notEqual(f.run().status, 0)
  assert.deepEqual(f.snapshot(), before)
})

test('workflow keeps one main-branch lane and checks before the restricted commit', () => {
  const workflow = readFileSync(new URL('../.github/workflows/publish-blog.yml', import.meta.url), 'utf8')
  assert.match(workflow, /cron: '0 11 \* \* \*'/)
  assert.match(workflow, /if: github\.ref == 'refs\/heads\/main'/)
  assert.match(workflow, /group: metroglass-blog-publisher\n  cancel-in-progress: false/)
  const commit = workflow.indexOf('- name: Commit and push')
  for (const check of ['node --test tests/publish-drafts.test.mjs', 'npm ci', 'npm run build', 'npm run check:aeo', 'npm run test:aeo']) {
    assert.ok(workflow.indexOf(check) >= 0 && workflow.indexOf(check) < commit)
  }
  assert.match(workflow.slice(commit), /if: steps\.publish\.outputs\.published == 'true'/)
  assert.match(workflow, /git add -A -- app\/blog app\/sitemap\.ts _drafts public\/gallery/)
  assert.doesNotMatch(workflow, /git push.*--force|continue-on-error/)
})
