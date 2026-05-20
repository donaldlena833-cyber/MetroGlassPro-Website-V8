import { MetadataRoute } from 'next'
import { projects } from '@/content/projects'

export const dynamic = 'force-static'

const base = 'https://metroglasspro.com'
const siteUpdated = new Date('2026-05-15T00:00:00.000Z')

const coreRoutes = [
  { path: '/', changeFrequency: 'monthly' as const, priority: 1.0 },
  { path: '/frameless-shower-doors-nyc/', changeFrequency: 'monthly' as const, priority: 0.95 },
  { path: '/services/', changeFrequency: 'monthly' as const, priority: 0.9 },
  { path: '/shower-door-installation-nyc/', changeFrequency: 'monthly' as const, priority: 0.85 },
  { path: '/shower-door-replacement-nyc/', changeFrequency: 'monthly' as const, priority: 0.85 },
  { path: '/shower-door-repair-nyc/', changeFrequency: 'monthly' as const, priority: 0.85 },
  { path: '/custom-mirrors-nyc/', changeFrequency: 'monthly' as const, priority: 0.75 },
  { path: '/glass-partitions-nyc/', changeFrequency: 'monthly' as const, priority: 0.7 },
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
    path: '/blog/office-glass-partitions-manhattan-planning-guide/',
    lastModified: new Date('2026-05-20T00:00:00.000Z'),
    priority: 0.7,
  },
  {
    path: '/blog/edison-nj-clear-tempered-shower-door-bathroom-renovation/',
    lastModified: new Date('2026-05-19T00:00:00.000Z'),
    priority: 0.72,
  },
  {
    path: '/blog/custom-mirrors-manhattan-apartment-guide/',
    lastModified: new Date('2026-05-14T00:00:00.000Z'),
    priority: 0.7,
  },
  {
    path: '/blog/frameless-shower-doors-manhattan-buyer-guide/',
    lastModified: new Date('2026-05-12T00:00:00.000Z'),
    priority: 0.72,
  },
  {
    path: '/blog/2026-05-10-glass-tariffs-shower-door-prices-nyc',
    lastModified: new Date('2026-05-10T00:00:00.000Z'),
    priority: 0.7,
  },
  {
    path: '/blog/2026-05-09-honest-shower-door-repair-nyc',
    lastModified: new Date('2026-05-09T00:00:00.000Z'),
    priority: 0.65,
  },
  {
    path: '/blog/finished-tile-shower-glass-measurement-manhattan/',
    lastModified: new Date('2026-05-12T00:00:00.000Z'),
    priority: 0.6,
  },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const routeEntries = coreRoutes.map((route) => ({
    url: `${base}${route.path}`,
    lastModified: siteUpdated,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  const projectEntries = projects
    .filter((project) => !project.slug.startsWith('metroglasspro-project-'))
    .map((project) => ({
      url: `${base}/projects/${project.slug}/`,
      lastModified: new Date(`${project.date}T00:00:00.000Z`),
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
