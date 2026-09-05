import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'NYC Shower Door & Glass Gallery',
  description: 'Compare MetroGlass Pro shower door layouts, frameless glass details, mirrors, and install planning examples for Manhattan, Brooklyn, Queens, and NYC bathrooms.',
  alternates: { canonical: 'https://metroglasspro.com/gallery/' },
  openGraph: {
    title: 'NYC Shower Door Gallery | MetroGlass Pro',
    description: 'Compare shower door layouts, frameless glass details, mirrors, and install planning examples across NYC.',
  },
  twitter: { card: 'summary_large_image' },
}

const images = [
  { src: '/gallery/project-shower-1.jpg', alt: 'Frameless glass shower door with chrome hinges installed in Manhattan apartment bathroom', caption: 'Single-door frameless layout with bright chrome hardware, useful when a finished tile opening has enough swing clearance.' },
  { src: '/gallery/project-shower-2.jpg', alt: 'Custom frameless glass enclosure installed in Brooklyn brownstone bathroom', caption: 'Door-and-panel enclosure for a wider opening where one fixed pane keeps the entry clean and stable.' },
  { src: '/gallery/project-shower-3.jpg', alt: 'Full frameless shower enclosure with fixed panel in NYC pre-war apartment', caption: 'Full-height glass helps a compact bathroom feel more open while still controlling splash at the curb.' },
  { src: '/gallery/project-shower-4.jpg', alt: 'Sliding bypass shower doors on bathtub in Queens home', caption: 'Sliding bypass doors work well where a vanity, toilet, or narrow walkway makes a swinging door awkward.' },
  { src: '/gallery/project-shower-5.jpg', alt: 'Floor-to-ceiling frameless glass shower panel in Manhattan high-rise', caption: 'A tall fixed panel can preserve the open look of a renovation while keeping the wet zone defined.' },
  { src: '/gallery/project-shower-6.jpg', alt: 'Frameless shower door with polished chrome hardware and towel bar', caption: 'Hardware finish, handle placement, and towel-bar clearance should be chosen before fabrication.' },
  { src: '/gallery/dark-shower-1.jpg', alt: 'Dark-tinted frameless glass shower enclosure in modern NYC bathroom', caption: 'Tinted glass can be a strong design choice when the bathroom already has enough light.' },
  { src: '/gallery/dark-shower-2.jpg', alt: 'Smoked glass frameless shower door with matte black hardware', caption: 'Matte black hardware pairs well with smoked glass, but it should match the fixtures and tile tone.' },
  { src: '/gallery/dark-shower-3.jpg', alt: 'Contemporary dark glass shower door installed in renovated NYC bathroom', caption: 'Darker glass needs careful lighting review so the finished shower still feels practical day to day.' },
  { src: '/gallery/mirror-1.jpg', alt: 'Custom wall mirror with polished edges installed above vanity in NYC apartment', caption: 'Mirror sizing should account for lights, outlets, medicine cabinets, and vanity width before ordering.' },
  { src: '/gallery/cabinet-1.jpg', alt: 'Custom glass cabinet doors installed in NYC kitchen', caption: 'Cabinet glass details are measured separately from shower work but need the same clean edge planning.' },
  { src: '/gallery/glass-cabinet-1.jpg', alt: 'Frosted glass cabinet insert for NYC apartment', caption: 'Frosted inserts are useful where the goal is softened visibility instead of a fully clear display.' },
  { src: '/gallery/install-1.jpeg', alt: 'MetroGlass Pro installer measuring shower opening for frameless glass door', caption: 'Field measuring after tile is the step that protects the fit, especially when walls are out of plumb.' },
  { src: '/gallery/install-2.jpeg', alt: 'Frameless shower door being fitted during installation in Queens bathroom', caption: 'Installation fit checks include hinge position, sweep contact, and whether the door clears nearby fixtures.' },
  { src: '/gallery/install-3.jpeg', alt: 'Precision glass measurement for shower enclosure in Brooklyn apartment', caption: 'Photos and rough dimensions help with early pricing, but final glass should follow an on-site measure.' },
  { src: '/gallery/install-4.jpeg', alt: 'Heavy tempered glass panel being positioned during Manhattan install', caption: 'Large panels require access planning for elevators, turns, stairs, and finished surfaces.' },
  { src: '/gallery/install-5.jpeg', alt: 'Completed frameless shower door installation in Staten Island home', caption: 'A clean completed install should look intentional from both inside and outside the shower.' },
  { src: '/gallery/install-6.jpeg', alt: 'Glass enclosure installation during Bronx bathroom renovation', caption: 'Renovation timing matters: the glass quote gets more accurate once tile and curb conditions are final.' },
  { src: '/gallery/install-7.jpeg', alt: 'Frameless shower door with brushed nickel hinges and handle', caption: 'Brushed nickel is a common choice when the bathroom already uses softer silver plumbing fixtures.' },
  { src: '/gallery/install-8.jpeg', alt: 'Bathroom mirror installation with J-channel mounting in Manhattan', caption: 'J-channel mounting can give a vanity mirror a crisp finish when the wall and lights are ready.' },
  { src: '/gallery/install-9.jpeg', alt: 'Frameless shower enclosure installed in Long Island master bathroom', caption: 'Larger bathrooms still need the same fit decisions: panel width, door swing, curb slope, and hardware finish.' },
  { src: '/gallery/install-10.jpeg', alt: 'Custom frameless shower door installed in New Jersey home', caption: 'Suburban layouts often give more room, but the glass still depends on finished tile and opening accuracy.' },
  { src: '/gallery/install-11.jpeg', alt: 'Pivot frameless shower door installed in NYC co-op building', caption: 'Pivot and hinge choices should account for building access, door weight, and the way the bathroom is used.' },
  { src: '/gallery/install-12.jpeg', alt: 'Neo-angle frameless glass enclosure in Brooklyn corner shower', caption: 'Neo-angle enclosures are useful for corner showers where a standard rectangular opening would waste space.' },
]

const planningLinks = [
  { href: '/frameless-shower-doors-nyc/', label: 'Frameless shower doors', desc: 'Compare glass thickness, hardware, and enclosure layouts.' },
  { href: '/shower-door-installation-nyc/', label: 'Installation planning', desc: 'Understand measuring, access, protection, and install-day expectations.' },
  { href: '/shower-door-replacement-nyc/', label: 'Replacement guidance', desc: 'Decide whether an older door should be replaced instead of repaired.' },
  { href: '/shower-door-repair-nyc/', label: 'Repair guidance', desc: 'Use symptoms like leaks, sagging, and hardware failure to choose the next step.' },
  { href: '/service-areas/manhattan/', label: 'Manhattan service', desc: 'Plan for co-op, condo, high-rise, and brownstone bathroom logistics.' },
  { href: '/service-areas/brooklyn/', label: 'Brooklyn service', desc: 'Review brownstone, condo, and renovation access considerations.' },
  { href: '/service-areas/queens/', label: 'Queens service', desc: 'Plan shower door work for apartments, houses, and multi-family homes.' },
]

const decisionChecks = [
  'Is there room for a swing door, or does a slider make more sense?',
  'Does the finished tile opening need a fixed panel, return panel, or full enclosure?',
  'Will the hardware finish match the plumbing, mirror, and cabinet pulls?',
  'Can the building access handle a large panel without risking finished surfaces?',
]

export default function GalleryPage() {
  return (
    <>
      <section className="bg-cream pt-20 sm:pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 anim-hero">
          <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Portfolio</p>
          <h1 className="heading-serif text-charcoal text-5xl sm:text-6xl lg:text-7xl">Our work.</h1>
          <p className="mt-5 text-warm text-lg max-w-lg">Custom shower glass, mirrors, and installations across all NYC boroughs.</p>
          <p className="mt-4 text-warm text-base leading-relaxed max-w-2xl">
            Use this gallery to compare shower door layouts, hardware finishes, mirror installs, and glass panel details before requesting an estimate. Photos help homeowners decide whether a bathroom needs a single swing door, fixed panel, slider, open panel, mirror replacement, or a more custom enclosure.
          </p>
          <p className="mt-4 text-warm text-base leading-relaxed max-w-2xl">
            If you are planning a renovation, the most useful photos to send are the full shower opening, the curb or tub edge, both side walls, the fixture finish, and any nearby vanity or toilet clearance. Those details help us suggest a glass setup that fits the room instead of just filling the opening.
          </p>
          <p className="mt-4 text-warm text-base leading-relaxed max-w-2xl">
            Compare the glass layouts below with your own bathroom. Tile, curb slope, nearby fixtures, and building access help determine which configuration will fit.
          </p>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <Link href="/frameless-shower-doors-nyc/" className="text-orange font-medium hover:opacity-70 transition-opacity">Frameless shower doors →</Link>
            <Link href="/shower-door-installation-nyc/" className="text-orange font-medium hover:opacity-70 transition-opacity">Installation planning →</Link>
            <Link href="/shower-door-repair-nyc/" className="text-orange font-medium hover:opacity-70 transition-opacity">Repair guidance →</Link>
          </div>
        </div>
      </section>

      <section className="bg-cream pb-28 sm:pb-36">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {images.map((img, i) => (
              <figure key={img.src} className={`bg-cream-dark anim-scale-in d${Math.min(i + 1, 8)}`}>
                <div className="gallery-item aspect-square">
                  <img src={img.src} alt={img.alt} width={500} height={500} loading={i < 4 ? 'eager' : 'lazy'} className="w-full h-full object-cover" />
                </div>
                <figcaption className="bg-cream px-3 py-3 text-[12px] leading-relaxed text-warm">{img.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-light py-20 sm:py-24 border-y border-charcoal/[0.04]">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <div className="max-w-2xl mb-10">
            <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Use The Photos</p>
            <h2 className="heading-serif text-charcoal text-3xl sm:text-4xl">Turn a gallery idea into a clearer estimate.</h2>
            <p className="mt-4 text-warm text-[15px] leading-relaxed">
              The fastest way to move from inspiration to pricing is to match the photo you like with the real conditions in your bathroom: opening width, finished tile, door swing, curb shape, nearby fixtures, and building access.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {planningLinks.map((item) => (
              <Link key={item.href} href={item.href} className="glass-card p-5 card-lift block">
                <span className="text-charcoal font-medium text-[15px]">{item.label}</span>
                <span className="text-warm text-[13px] leading-relaxed block mt-2">{item.desc}</span>
              </Link>
            ))}
          </div>
          <div className="mt-10 glass-card p-6">
            <h3 className="font-serif text-charcoal text-2xl mb-4">Before you choose a photo as the model</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {decisionChecks.map((item) => (
                <div key={item} className="flex items-start gap-3 text-[14px] text-warm leading-relaxed">
                  <span className="text-orange mt-0.5 shrink-0">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-24 text-center">
        <div className="max-w-2xl mx-auto px-6 sm:px-10">
          <h2 className="heading-serif text-white text-4xl sm:text-5xl">Like what you see?</h2>
          <p className="mt-4 text-white/45 text-base leading-relaxed">
            Send us a few photos of your opening, tile, curb, and fixtures. We can usually tell from pictures which glass configuration is worth measuring and which options will make the bathroom feel cleaner.
          </p>
          <p className="mt-3 text-white/35 text-sm leading-relaxed">
            For tighter NYC bathrooms, include one wide shot from the doorway and one straight-on shot of the shower. For mirrors, include the vanity, lights, outlets, and wall edges.
          </p>
          <Link href="/contact/" className="btn-pill btn-primary px-10 py-3.5 text-sm mt-10 inline-flex">Request an Estimate</Link>
        </div>
      </section>
    </>
  )
}
