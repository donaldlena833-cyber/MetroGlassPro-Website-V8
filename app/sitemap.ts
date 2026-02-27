import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://metroglasspro.com'
  const now = new Date()
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/frameless-shower-doors-nyc/`, lastModified: now, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${base}/services/`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/shower-door-installation-nyc/`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/shower-door-replacement-nyc/`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/service-areas/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/service-areas/manhattan/`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/service-areas/brooklyn/`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/service-areas/queens/`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/service-areas/bronx/`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/service-areas/staten-island/`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/gallery/`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/contact/`, lastModified: now, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${base}/projects/`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/projects/single-swing-door-nyc/`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${base}/projects/door-fixed-panel-nyc/`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${base}/projects/sliding-bypass-doors-nyc/`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${base}/projects/90-corner-enclosure-nyc/`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${base}/projects/neo-angle-enclosure-nyc/`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${base}/projects/walk-in-shower-panel-nyc/`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${base}/projects/typical-mirror-replacement-nyc/`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${base}/projects/crl-geneva-vs-vienna-hinges/`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${base}/reviews/`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/about/`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${base}/privacy-policy/`, lastModified: now, changeFrequency: 'yearly', priority: 0.1 },
  ]
}
