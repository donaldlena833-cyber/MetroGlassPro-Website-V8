import { glassServices } from './service-catalog'

export const businessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  legalName: 'MetroGlass Pro LLC',
  '@id': 'https://metroglasspro.com/#business',
  name: 'MetroGlass Pro',
  description: 'Shower doors, glazing, glass railings, custom mirrors, glass partitions, and glass repair for residential and commercial projects across New York City.',
  url: 'https://metroglasspro.com',
  telephone: '+1-332-999-3846',
  email: 'operations@metroglasspro.com',
  logo: 'https://metroglasspro.com/assets/logo.png',
  image: 'https://metroglasspro.com/assets/og-default.jpg',
  areaServed: ['Manhattan', 'Brooklyn', 'Queens', 'Bronx', 'Staten Island'],
  priceRange: '$$',
  address: { '@type': 'PostalAddress', addressLocality: 'New York', addressRegion: 'NY', addressCountry: 'US' },
  contactPoint: { '@type': 'ContactPoint', contactType: 'estimates and customer service', telephone: '+1-332-999-3846', email: 'operations@metroglasspro.com', areaServed: 'New York City' },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '09:00', closes: '14:00' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'NYC Glass Installation and Repair Services',
    itemListElement: glassServices.map((service) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: service.name, description: service.summary, url: `https://metroglasspro.com${service.href}` },
    })),
  },
}
