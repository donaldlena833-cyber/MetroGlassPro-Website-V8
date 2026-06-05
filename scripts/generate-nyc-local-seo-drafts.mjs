import { mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const outDir = join(process.cwd(), 'content', 'seo-drafts', 'nyc-local')
const today = '2026-06-05'

const areas = [
  ['manhattan', 'Manhattan'],
  ['brooklyn', 'Brooklyn'],
  ['queens', 'Queens'],
  ['bronx', 'Bronx'],
  ['staten-island', 'Staten Island'],
  ['upper-east-side', 'Upper East Side'],
  ['upper-west-side', 'Upper West Side'],
  ['tribeca', 'Tribeca'],
  ['chelsea', 'Chelsea'],
  ['soho', 'SoHo'],
  ['greenwich-village', 'Greenwich Village'],
  ['lower-east-side', 'Lower East Side'],
  ['williamsburg', 'Williamsburg'],
  ['park-slope', 'Park Slope'],
  ['brooklyn-heights', 'Brooklyn Heights'],
  ['greenpoint', 'Greenpoint'],
  ['astoria', 'Astoria'],
  ['long-island-city', 'Long Island City'],
  ['forest-hills', 'Forest Hills'],
  ['riverdale', 'Riverdale'],
]

const services = [
  ['frameless-shower-doors', 'Frameless Shower Doors', 'frameless shower doors'],
  ['shower-door-repair', 'Shower Door Repair', 'shower door repair'],
  ['custom-mirrors', 'Custom Mirrors', 'custom mirrors'],
]

const serviceNotes = {
  'frameless-shower-doors': [
    'finished tile measurements',
    'door swing and panel layout',
    'hinge wall and curb conditions',
    'hardware finish selection',
  ],
  'shower-door-repair': [
    'hinge adjustment',
    'sweeps and seals',
    'leak points',
    'repair versus replacement decisions',
  ],
  'custom-mirrors': [
    'wall condition',
    'vanity width',
    'outlets and light fixtures',
    'edge detail and access',
  ],
}

const makeDraft = ([areaSlug, area], [serviceSlug, serviceTitle, keyword], index) => {
  const slug = `${serviceSlug}-${areaSlug}-nyc-planning-guide`
  const primaryKeyword = `${keyword} ${area} NYC`
  const notes = serviceNotes[serviceSlug]

  return {
    filename: `${String(index + 1).padStart(2, '0')}-${slug}.md`,
    slug,
    content:
      `---\n` +
      `title: "${serviceTitle} in ${area}: NYC Planning Guide"\n` +
      `slug: "${slug}"\n` +
      `status: draft\n` +
      `site: metroglasspro.com\n` +
      `business: MetroGlass Pro\n` +
      `primary_keyword: "${primaryKeyword}"\n` +
      `secondary_keywords:\n` +
      `  - "${keyword} contractor ${area}"\n` +
      `  - "${keyword} estimate ${area}"\n` +
      `  - "NYC glass contractor ${area}"\n` +
      `  - "apartment glass installation ${area}"\n` +
      `publish_target: "/blog/${slug}/"\n` +
      `created: "${today}"\n` +
      `image_status: "required fresh image from Desktop MetroGlassPro SEO folder before publish"\n` +
      `---\n\n` +
      `# ${serviceTitle} in ${area}: NYC Planning Guide\n\n` +
      `## Local search intent\n\n` +
      `This draft targets buyers searching for ${primaryKeyword}. The page should help NYC apartment owners, designers, contractors, and property managers understand what MetroGlass Pro needs before pricing or scheduling a glass project in ${area}.\n\n` +
      `## Draft intro\n\n` +
      `${serviceTitle} in ${area} depends on more than the glass size. Finished surfaces, building access, elevator rules, certificate of insurance requests, tight bathrooms, older walls, and hardware decisions can all affect the final scope.\n\n` +
      `MetroGlass Pro works on custom shower glass, shower door repair, mirrors, glass partitions, and related architectural glass planning across New York City. This guide should make the estimate conversation clearer before a site visit or field measurement.\n\n` +
      `## H2 outline\n\n` +
      `### What changes in ${area}\n\n` +
      `Cover apartment access, co-op and condo rules, service entrance limits, parking/loading friction, older tile or wall conditions, and local buyer expectations.\n\n` +
      `### Scope details to confirm before pricing\n\n` +
      notes.map((note) => `- ${note}`).join('\n') +
      `\n\n` +
      `### Photos to send before an estimate\n\n` +
      `Ask for wide room photos, close-ups of hardware or wall conditions, finished tile or mirror wall photos, rough measurements, building type, and desired hardware finish.\n\n` +
      `### Repair, replacement, or new installation\n\n` +
      `Separate minor adjustment work from replacement glass, new fabrication, hardware changes, and larger renovation timing.\n\n` +
      `### Building coordination in NYC\n\n` +
      `Mention COI requests, work-hour limits, freight elevator scheduling, service entrance access, and protection requirements without promising building approval.\n\n` +
      `### Best next step\n\n` +
      `Send photos and a short scope to MetroGlass Pro so the team can tell whether the project is ready for pricing, repair review, or field measurement.\n\n` +
      `## FAQ targets\n\n` +
      `1. How much do ${keyword} cost in ${area}?\n` +
      `2. Can MetroGlass Pro work in co-op and condo buildings in ${area}?\n` +
      `3. What photos should I send before asking for a ${keyword} estimate?\n\n` +
      `## Internal links\n\n` +
      `- /frameless-shower-doors-nyc/\n` +
      `- /shower-door-repair-nyc/\n` +
      `- /custom-mirrors-nyc/\n` +
      `- /service-areas/${areaSlug}/\n` +
      `- /contact/\n`,
  }
}

mkdirSync(outDir, { recursive: true })

const drafts = []
for (const service of services) {
  for (const area of areas) {
    drafts.push(makeDraft(area, service, drafts.length))
  }
}

for (const draft of drafts) {
  writeFileSync(join(outDir, draft.filename), draft.content)
}

writeFileSync(
  join(outDir, 'README.md'),
  `# MetroGlassPro NYC Local SEO Draft Queue\n\n` +
    `Generated: ${today}\n\n` +
    `These 60 markdown drafts are unpublished planning files. Before each publish, expand the article, choose a fresh unused image from Donald's Desktop MetroGlassPro SEO folder, record it in content/seo-image-usage.md, and avoid unsupported claims about reviews, guarantees, licenses, awards, or project counts.\n\n` +
    drafts.map((draft) => `- [${draft.slug}](./${draft.filename})`).join('\n') +
    '\n',
)

console.log(`Generated ${drafts.length} MetroGlassPro markdown drafts in ${outDir}`)
