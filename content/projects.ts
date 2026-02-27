export interface Project {
  slug: string
  title: string
  date: string
  borough?: string
  neighborhood?: string
  services: string[]
  materials?: string[]
  hardware?: string[]
  durationRange?: string
  priceRange?: string
  scenarioType: 'real' | 'typical'
  excerpt: string
  image: string
  imageAlt: string
}

export const projects: Project[] = [
  {
    slug: 'single-swing-door-nyc',
    title: 'Single Swing Frameless Shower Door: NYC\'s Most Popular Configuration',
    date: '2026-02-23',
    services: ['Frameless Shower Doors'],
    hardware: ['Wall-mount hinges', 'Pivot hinges'],
    scenarioType: 'real',
    excerpt: 'Why the single swing door is NYC\'s #1 shower configuration — glass thickness, swing direction, and what makes it ideal for apartments.',
    image: '/editorial/configurations/single-swing-door.jpg',
    imageAlt: 'Single swing frameless shower door with satin brass hinges',
  },
  {
    slug: 'door-fixed-panel-nyc',
    title: 'Door + Fixed Panel: The Go-To for Wider NYC Shower Openings',
    date: '2026-02-23',
    services: ['Frameless Shower Doors'],
    hardware: ['Glass-to-glass clamps', 'U-channel', 'Support bar'],
    scenarioType: 'real',
    excerpt: 'When your opening exceeds 36", you need a fixed panel. NYC tub-to-shower conversions, hardware matching, and sizing guide.',
    image: '/editorial/configurations/door-fixed-panel.jpg',
    imageAlt: 'Frameless door plus fixed glass panel with satin brass hardware',
  },
  {
    slug: 'sliding-bypass-doors-nyc',
    title: 'Sliding Bypass Frameless Doors: When There\'s No Room to Swing',
    date: '2026-02-23',
    services: ['Frameless Shower Doors'],
    hardware: ['Barn-door track', 'Top-hung rollers'],
    scenarioType: 'real',
    excerpt: 'Frameless bypass doors for NYC tub-shower combos. Cost vs framed sliders, maintenance tips, and when this is the right choice.',
    image: '/editorial/configurations/sliding-bypass-doors.jpg',
    imageAlt: 'Frameless sliding bypass shower door with satin brass track hardware',
  },
  {
    slug: '90-corner-enclosure-nyc',
    title: '90° Corner Enclosure: The Luxury Standard for NYC Showers',
    date: '2026-02-23',
    services: ['Frameless Shower Doors'],
    hardware: ['Glass-to-glass 90° clamp', 'Wall-mount hinges'],
    scenarioType: 'real',
    excerpt: 'Two glass walls at 90° — the luxury standard. Why corners work in tight NYC bathrooms and what the cost premium looks like.',
    image: '/editorial/configurations/90-corner-enclosure.jpg',
    imageAlt: '90-degree corner frameless glass enclosure with satin brass hinge',
  },
  {
    slug: 'neo-angle-enclosure-nyc',
    title: 'Neo-Angle Enclosure: Solving NYC\'s Odd-Shaped Shower Bases',
    date: '2026-02-23',
    services: ['Frameless Shower Doors'],
    hardware: ['Angled clamps', 'Multi-point connectors'],
    scenarioType: 'real',
    excerpt: 'Built for non-standard and angled bases common in pre-war NYC buildings. How the 3-panel geometry maximizes space.',
    image: '/editorial/configurations/neo-angle-enclosure.jpg',
    imageAlt: 'Neo-angle frameless glass enclosure overhead view with brass clamps',
  },
  {
    slug: 'walk-in-shower-panel-nyc',
    title: 'Walk-In Shower Panel: The Wet Room Look Taking Over NYC',
    date: '2026-02-23',
    services: ['Frameless Shower Doors'],
    hardware: ['Wall clamps'],
    scenarioType: 'real',
    excerpt: 'No door, just a fixed panel. The most premium shower look in NYC — and what waterproofing it requires.',
    image: '/editorial/configurations/walk-in-panel.jpg',
    imageAlt: 'Walk-in frameless glass shower panel with satin brass wall clamps',
  },
  {
    slug: 'typical-mirror-replacement-nyc',
    title: 'Mirror Replacement in a NYC Apartment: What to Expect',
    date: '2026-02-15',
    services: ['Custom Mirrors', 'Mirror Installation'],
    materials: ['1/4" flat polished mirror', 'J-channel mounting'],
    durationRange: '1–2 hours',
    priceRange: '$200–$800',
    scenarioType: 'typical',
    excerpt: 'A walkthrough of what a typical mirror replacement looks like in a New York City apartment — from measurement to install.',
    image: '/gallery/mirror-cabinet-blue-tape.jpg',
    imageAlt: 'Medicine cabinet mirror with blue tape during silicone curing in NYC apartment',
  },
  {
    slug: 'crl-geneva-vs-vienna-hinges',
    title: 'CRL Geneva vs Vienna Hinges: A High-Level Comparison',
    date: '2026-02-18',
    services: ['Frameless Shower Doors'],
    hardware: ['CRL Geneva hinge', 'CRL Vienna hinge'],
    scenarioType: 'real',
    excerpt: 'Two of the most popular frameless shower door hinges compared — when to use each, and why it matters for your installation.',
    image: '/editorial/tools.jpg',
    imageAlt: 'Shower door hardware and installation tools',
  },
]
