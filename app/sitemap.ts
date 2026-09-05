import { MetadataRoute } from 'next'
import { projects } from '@/content/projects'

export const dynamic = 'force-static'

const base = 'https://metroglasspro.com'
const siteUpdated = new Date('2026-08-12T00:00:00.000Z')
const aeoUpdated = new Date('2026-09-05T00:00:00.000Z')
const revisedRoutes = new Set(['/', '/frameless-shower-doors-nyc/', '/service-areas/brooklyn/', '/gallery/', '/about/', '/contact/', '/privacy-policy/', '/services/', '/service-areas/', '/custom-mirrors-nyc/', '/glass-partitions-nyc/', '/glass-railings-nyc/', '/glazing-nyc/', '/glass-repair-nyc/'])

const coreRoutes = [
  { path: '/', changeFrequency: 'monthly' as const, priority: 1.0 },
  { path: '/frameless-shower-doors-nyc/', changeFrequency: 'monthly' as const, priority: 0.95 },
  { path: '/services/', changeFrequency: 'monthly' as const, priority: 0.9 },
  { path: '/shower-door-installation-nyc/', changeFrequency: 'monthly' as const, priority: 0.85 },
  { path: '/shower-door-replacement-nyc/', changeFrequency: 'monthly' as const, priority: 0.85 },
  { path: '/shower-door-repair-nyc/', changeFrequency: 'monthly' as const, priority: 0.85 },
  { path: '/custom-mirrors-nyc/', changeFrequency: 'monthly' as const, priority: 0.75 },
  { path: '/glass-partitions-nyc/', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/glazing-nyc/', changeFrequency: 'monthly' as const, priority: 0.85 },
  { path: '/glass-railings-nyc/', changeFrequency: 'monthly' as const, priority: 0.85 },
  { path: '/glass-repair-nyc/', changeFrequency: 'monthly' as const, priority: 0.85 },
  { path: '/service-areas/', changeFrequency: 'monthly' as const, priority: 0.8 },
  { path: '/service-areas/manhattan/', changeFrequency: 'monthly' as const, priority: 0.75 },
  { path: '/service-areas/brooklyn/', changeFrequency: 'monthly' as const, priority: 0.75 },
  { path: '/service-areas/queens/', changeFrequency: 'monthly' as const, priority: 0.75 },
  { path: '/service-areas/bronx/', changeFrequency: 'monthly' as const, priority: 0.75 },
  { path: '/service-areas/staten-island/', changeFrequency: 'monthly' as const, priority: 0.75 },
  { path: '/gallery/', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/reviews/', changeFrequency: 'monthly' as const, priority: 0.6 },
  { path: '/about/', changeFrequency: 'yearly' as const, priority: 0.5 },
  { path: '/contact/', changeFrequency: 'yearly' as const, priority: 0.8 },
  { path: '/privacy-policy/', changeFrequency: 'yearly' as const, priority: 0.1 },
  { path: '/projects/', changeFrequency: 'weekly' as const, priority: 0.7 },
  { path: '/blog/', changeFrequency: 'monthly' as const, priority: 0.65 },
]

const blogRoutes = [
  {
    path: '/blog/custom-mirrors-manhattan-apartment-guide/',
    lastModified: siteUpdated,
    priority: 0.72,
  },
  {
    path: '/blog/finished-tile-shower-glass-measurement-manhattan/',
    lastModified: aeoUpdated,
    priority: 0.75,
  },
  {
    path: '/blog/office-glass-partitions-manhattan-planning-guide/',
    lastModified: aeoUpdated,
    priority: 0.7,
  },
  {
    path: '/blog/tub-shower-glass-doors-nyc-planning-guide/',
    lastModified: siteUpdated,
    priority: 0.75,
  },
]

const indexTargetProjectSlugs = new Set([
  'frameless-shower-door-cost-nyc',
  '84-clinton-lower-east-side-shower-door-before-after',
  'coop-condo-shower-door-installation-nyc',
  'door-fixed-panel-nyc',
  'interior-design-collaboration-shower-door-nyc',
  'neo-angle-enclosure-nyc',
  '90-corner-enclosure-nyc',
  'shower-glass-design-consultation-nyc',
  'single-swing-door-nyc',
  'sliding-bypass-doors-nyc',
  'typical-mirror-replacement-nyc',
  'visualize-shower-door-options-nyc',
  'walk-in-shower-panel-nyc',
  'crl-geneva-vs-vienna-hinges',
])

export default function sitemap(): MetadataRoute.Sitemap {
  const routeEntries = coreRoutes.map((route) => ({
    url: `${base}${route.path}`,
    lastModified: revisedRoutes.has(route.path) ? aeoUpdated : siteUpdated,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  const projectEntries = projects
    .filter((project) => indexTargetProjectSlugs.has(project.slug))
    .map((project) => ({
      url: `${base}/projects/${project.slug}/`,
      lastModified: project.slug === 'frameless-shower-door-cost-nyc' ? aeoUpdated : new Date(`${project.date}T00:00:00.000Z`),
      changeFrequency: project.scenarioType === 'typical' ? 'yearly' as const : 'monthly' as const,
      priority: project.slug === 'frameless-shower-door-cost-nyc' ? 0.85 : 0.7,
    }))

  const blogEntries = blogRoutes.map((route) => ({
    url: `${base}${route.path}`,
    lastModified: route.lastModified,
    changeFrequency: 'monthly' as const,
    priority: route.priority,
  }))

  return [...routeEntries, ...projectEntries, ...blogEntries]
}
