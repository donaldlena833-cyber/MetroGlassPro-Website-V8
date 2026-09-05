export const glassServices = [
  { id: 'shower-doors', name: 'Shower Doors', href: '/frameless-shower-doors-nyc/', quoteLabel: 'Frameless Shower Door', summary: 'Custom shower enclosures, swing and sliding doors, fixed panels, replacement, and shower door repair.', photoTip: 'Show the full shower opening, curb, nearby fixtures, and any existing door or hardware.' },
  { id: 'glazing', name: 'Glazing', href: '/glazing-nyc/', quoteLabel: 'Glazing or Glass Replacement', summary: 'Glass fitting and replacement for residential and commercial openings, with frame, specification, and access review.', photoTip: 'Show the full opening, existing frame, glass markings if visible, and any plans or glass schedule.' },
  { id: 'glass-railings', name: 'Glass Railings', href: '/glass-railings-nyc/', quoteLabel: 'Glass Railing', summary: 'Glass railings for stairs, landings, balconies, and terraces, planned around the supporting structure and railing system.', photoTip: 'Send overall stair, landing, or terrace photos, the mounting surface, rough lengths, and available drawings.' },
  { id: 'custom-mirrors', name: 'Custom Mirrors', href: '/custom-mirrors-nyc/', quoteLabel: 'Custom Mirror', summary: 'Mirrors for vanities, full walls, gyms, studios, and commercial interiors, measured and installed to fit.', photoTip: 'Show the full wall, vanity or furniture, outlets and lights, and the route for carrying in the mirror.' },
  { id: 'glass-partitions', name: 'Glass Partitions', href: '/glass-partitions-nyc/', quoteLabel: 'Glass Partition', summary: 'Interior glass walls, office and conference room partitions, and room dividers with coordinated doors and privacy options.', photoTip: 'Send the room layout, floor and ceiling photos, proposed door positions, and privacy or sound requirements.' },
  { id: 'glass-repair', name: 'Glass Repair', href: '/glass-repair-nyc/', quoteLabel: 'Glass Repair or Broken Glass Replacement', summary: 'Assessment of damaged glass, mirrors, panels, and glass door hardware to identify repair or replacement needs.', photoTip: 'From a safe distance, show the entire opening and the damage. Include hardware photos only if safely accessible.' },
] as const

export const serviceOptions = [
  'Frameless Shower Door', 'Sliding Shower Door', 'Shower Door Replacement',
  'Shower Door Repair or Leak Issue', 'Framed or Semi Frameless Shower Door',
  'Glazing or Glass Replacement', 'Glass Railing', 'Custom Mirror',
  'Glass Partition', 'Glass Repair or Broken Glass Replacement', 'Commercial or Trade Project', 'Other',
]

export function quoteServiceFromId(id: string) {
  return glassServices.find((service) => service.id === id)?.quoteLabel || ''
}

export function serviceCategory(value: string) {
  if (serviceOptions.slice(0, 5).includes(value)) return 'shower-doors'
  return glassServices.find((service) => service.quoteLabel === value)?.id || (value === 'Commercial or Trade Project' ? 'commercial-trade' : 'other')
}

export function servicePhotoTip(value: string) {
  return glassServices.find((service) => service.id === serviceCategory(value))?.photoTip || 'Send photos of the project area, rough dimensions if known, and any plans. You do not need exact measurements to get started.'
}
