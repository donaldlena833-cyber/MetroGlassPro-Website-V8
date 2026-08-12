import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'See Every Shower Door Option First',
  description: 'Compare hinged, sliding, corner, and neo-angle shower door renders in your actual bathroom before fabrication. See the options, then decide.',
  keywords: [
    'custom frameless shower door NYC',
    'shower door options small bathroom',
    'frameless shower enclosure NYC',
    'neo-angle shower door NYC',
    'corner shower enclosure NYC',
    'shower door design consultation NYC',
    'sliding shower door small bathroom NYC',
    'hinged shower door NYC',
    'custom shower glass Manhattan',
    'shower door before and after NYC',
    'visualize shower door options',
    'shower glass installation NYC',
  ],
  alternates: { canonical: 'https://metroglasspro.com/projects/visualize-shower-door-options-nyc/' },
  openGraph: {
    title: 'See Every Shower Door Option First',
    description: 'We render your actual bathroom with 4 different frameless shower door configurations before fabrication begins. NYC custom glass.',
    url: 'https://metroglasspro.com/projects/visualize-shower-door-options-nyc/',
    type: 'article',
    images: ['https://metroglasspro.com/gallery/visualize-feature-neo-angle.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://metroglasspro.com/gallery/visualize-feature-neo-angle.jpg'],
  },
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'See Every Shower Door Option Before You Commit',
  description: 'MetroGlass Pro renders your actual bathroom with multiple frameless shower enclosure configurations before any glass is fabricated, so you choose with confidence.',
  author: { '@type': 'Organization', name: 'MetroGlass Pro', url: 'https://metroglasspro.com' },
  publisher: { '@type': 'Organization', name: 'MetroGlass Pro', url: 'https://metroglasspro.com' },
  datePublished: '2026-04-01',
  dateModified: '2026-04-01',
  mainEntityOfPage: 'https://metroglasspro.com/projects/visualize-shower-door-options-nyc/',
  image: 'https://metroglasspro.com/gallery/visualize-feature-neo-angle.jpg',
}

export default function VisualizeShowerDoorOptionsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <section className="bg-cream pt-20 sm:pt-32 pb-10 sm:pb-14">
        <div className="max-w-3xl mx-auto px-6 sm:px-10">
          <Link href="/projects/" className="text-orange text-[13px] font-medium hover:opacity-70 transition-opacity mb-6 inline-block">
            ← Back to Projects
          </Link>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-[11px] font-medium tracking-wider uppercase text-charcoal/40 bg-charcoal/[0.04] px-2.5 py-1 rounded-full">Real Project</span>
            <span className="text-[11px] font-medium tracking-wider uppercase text-charcoal/40 bg-charcoal/[0.04] px-2.5 py-1 rounded-full">Design Consultation</span>
            <span className="text-[11px] font-medium tracking-wider uppercase text-charcoal/40 bg-charcoal/[0.04] px-2.5 py-1 rounded-full">Frameless Shower Enclosure</span>
          </div>
          <h1 className="heading-serif text-charcoal text-3xl sm:text-5xl lg:text-6xl">
            We Show You Every Option Before Any Glass Gets Cut
          </h1>
          <p className="mt-4 text-charcoal/30 text-sm">April 1, 2026</p>
        </div>
      </section>

      <section className="bg-cream pb-6 sm:pb-10">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <div className="rounded-lg overflow-hidden img-editorial">
            <img
              src="/gallery/visualize-feature-neo-angle.jpg"
              alt="Neo-angle curved frameless shower enclosure with chrome hardware in a compact NYC bathroom with white marble tile"
              className="w-full h-auto block"
              loading="eager"
            />
          </div>
        </div>
      </section>

      <section className="bg-cream pb-20 sm:pb-28">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 prose-mgp">

          <p>
            Most glass companies take your measurements, show you a catalog, and ask you to pick something. You are choosing from a list of descriptions and stock photos that have nothing to do with your actual bathroom. That is how clients end up with an enclosure that looks fine on paper and wrong in person.
          </p>
          <p>
            We do it differently. Before any glass is ordered or fabricated, we generate renders of your real space with multiple frameless shower door configurations so you can see exactly what each option looks like at your dimensions, with your tile, in your bathroom. That process is what we call Visualize.
          </p>

          <h2>The Starting Point</h2>
          <p>
            This bathroom came to us mid-renovation. The tile was already in, white marble panels floor to ceiling, a floating vanity, a built-in niche, and a small mosaic floor in the shower base. The space was tight and the client wanted to make the most of every inch. The shower opening was fully exposed and the client had no strong opinion about which enclosure style to go with. That is exactly where Visualize does its best work.
          </p>

          <div className="mt-10 mb-10">
            <div className="glass-card overflow-hidden">
              <div className="px-5 pt-5">
                <p className="text-[11px] font-medium tracking-wider uppercase text-charcoal/40">The Raw Space</p>
              </div>
              <div className="mt-4 img-editorial">
                <img
                  src="/gallery/visualize-feature-before.jpg"
                  alt="Open shower area before frameless glass installation, white marble tile throughout, floating vanity and built-in niche visible"
                  className="w-full h-auto block"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <p>
                  The bathroom before any glass. Solid tile work, a clean layout, and a shower that reads as unfinished without an enclosure. From this photo we generated four separate configuration renders for the client to compare.
                </p>
              </div>
            </div>
          </div>

          <h2>Option One: Hinged Frameless Enclosure</h2>
          <p>
            The first configuration we presented was a hinged frameless enclosure. A fixed panel sits along one wall and the door swings inward on chrome hinges. This setup works well when the bathroom entry is not directly in line with the shower opening, because a swinging door requires a clear arc to open fully.
          </p>
          <p>
            In a tight NYC bathroom, the swing radius is the main consideration. If there is room between the toilet and the shower entrance, a hinged door gives the space a high-end feel. The glass is thick, typically three-eighths of an inch, and the hardware is minimal. There are no tracks, no rollers, and nothing to collect buildup at the bottom.
          </p>

          <div className="mt-8 mb-10">
            <div className="glass-card overflow-hidden">
              <div className="px-5 pt-5">
                <p className="text-[11px] font-medium tracking-wider uppercase text-charcoal/40">Option 1: Hinged Door</p>
              </div>
              <div className="mt-4 img-editorial">
                <img
                  src="/gallery/visualize-feature-hinged.jpg"
                  alt="Hinged frameless shower enclosure with fixed panel and chrome hardware in white marble tile bathroom NYC"
                  className="w-full h-auto block"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <p>
                  Fixed panel left side, inward swing door right side. Chrome hinges and handle. Clean sight lines and no floor track. Works best when the toilet or vanity is not directly in the swing path.
                </p>
              </div>
            </div>
          </div>

          <h2>Option Two: Sliding Bypass Door</h2>
          <p>
            The second configuration we presented was a sliding bypass door. This is the most practical choice for smaller bathrooms where a swinging door would cut into the circulation space beside the toilet or vanity. The door rides along a top-mounted chrome rail and slides open without requiring any clearance in front of the shower.
          </p>
          <p>
            Sliding frameless shower doors are one of the most requested setups in NYC apartments, and for good reason. The footprint does not change when the door is open. The glass stays visible and clean. And in a bathroom where every inch counts, not fighting with a door arc makes a real difference in daily use.
          </p>

          <div className="mt-8 mb-10">
            <div className="glass-card overflow-hidden">
              <div className="px-5 pt-5">
                <p className="text-[11px] font-medium tracking-wider uppercase text-charcoal/40">Option 2: Sliding Door</p>
              </div>
              <div className="mt-4 img-editorial">
                <img
                  src="/gallery/visualize-feature-slider.jpg"
                  alt="Sliding frameless shower door with top chrome rail in white marble tile compact bathroom NYC"
                  className="w-full h-auto block"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <p>
                  Top-mounted sliding rail, no floor track, chrome finish. The door glides open without requiring any swing clearance. Ideal for tight bathrooms where the toilet sits close to the shower entry.
                </p>
              </div>
            </div>
          </div>

          <h2>Option Three: 90-Degree Corner Enclosure</h2>
          <p>
            The third option was a 90-degree corner enclosure with one fixed panel and one sliding door on a perpendicular axis. This configuration closes off the shower on two sides instead of one, which changes the feel of the bathroom entirely. The shower reads as its own defined space within the room.
          </p>
          <p>
            Corner enclosures are a strong choice when the shower base sits in a corner with tile walls on two sides. At 36 inches by 36 inches, this setup fits a standard corner footprint and maximizes the enclosure surface without taking up additional floor space. The floor plan diagram shows the exact panel and door layout we proposed for this space.
          </p>

          <div className="mt-8 mb-10">
            <div className="glass-card overflow-hidden">
              <div className="px-5 pt-5">
                <p className="text-[11px] font-medium tracking-wider uppercase text-charcoal/40">Option 3: 90-Degree Corner</p>
              </div>
              <div className="mt-4 img-editorial">
                <img
                  src="/gallery/visualize-feature-corner.jpg"
                  alt="90-degree corner frameless shower enclosure with fixed and sliding panels, chrome hardware, white marble tile NYC bathroom"
                  className="w-full h-auto block"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <p>
                  Fixed panel on one wall, sliding panel on the perpendicular wall. The inset diagram shows the exact footprint at 36 and a half inches by 36 and a half inches with a height of 88 and a quarter inches. Full enclosure on two sides.
                </p>
              </div>
            </div>
          </div>

          <h2>Option Four: Neo-Angle Curved Enclosure</h2>
          <p>
            The fourth and final configuration was a neo-angle curved enclosure. Instead of straight glass panels meeting at a 90-degree corner, the curved track follows the shape of a quarter circle. The two panels slide along a curved rail and meet in the center. It is a bolder design choice and one that works especially well in bathrooms where the client wants the shower to feel like a feature rather than a fixture.
          </p>
          <p>
            Neo-angle enclosures require more precision in fabrication because the glass panels are cut to fit the curve radius exactly. There is no standard off-the-shelf version of this setup. Everything is custom to the space. The floor plan included in this render shows the curve radius and panel dimensions specific to this bathroom.
          </p>
          <p>
            This was the configuration the client chose. The curved enclosure fit the footprint cleanly, softened the tight angles of the room, and gave the shower a presence that a flat panel setup would not have achieved.
          </p>

          <div className="mt-8 mb-10">
            <div className="glass-card overflow-hidden">
              <div className="px-5 pt-5">
                <p className="text-[11px] font-medium tracking-wider uppercase text-charcoal/40">Option 4: Neo-Angle Curved (Client Choice)</p>
              </div>
              <div className="mt-4 img-editorial">
                <img
                  src="/gallery/visualize-feature-neo-angle.jpg"
                  alt="Neo-angle curved frameless shower enclosure with chrome sliding hardware in compact NYC bathroom with white marble tile, floor plan diagram inset"
                  className="w-full h-auto block"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <p>
                  Curved track with two sliding panels meeting at center. Chrome hardware throughout. The inset diagram shows the radius dimensions. This was the final selection, fabricated and installed within seven business days of approval.
                </p>
              </div>
            </div>
          </div>

          <h2>Why Seeing It First Changes Everything</h2>
          <p>
            Choosing a shower enclosure without seeing it in your space is a real risk, especially in NYC bathrooms where a few inches in the wrong direction can make an enclosure feel oversized or mismatched. The Visualize process removes that risk entirely.
          </p>
          <p>
            We generate these renders before any glass is ordered. That means no fabrication costs committed, no delivery scheduled, and no installation booked until you have seen every option and made a confident decision. For architects and interior designers, it also means you can present the client with visual options before bringing us on site for measurements, which speeds up the approval process on renovation projects.
          </p>
          <p>
            The renders are generated from the actual photo of the space. Not a stock bathroom. Not a generic floor plan. Your tile, your vanity, your niche, your exact dimensions. That level of specificity is what makes the Visualize process useful rather than cosmetic.
          </p>

          <h2>What Architects and Contractors Should Know</h2>
          <p>
            We work directly with architects, general contractors, and interior designers across Manhattan, Brooklyn, Queens, and the tri-state area. If you have a bathroom in renovation and the shower enclosure is still undecided, send us the space photo and we can turn around a Visualize render set quickly, often within 24 to 48 hours.
          </p>
          <p>
            We do not charge for the initial render set on new projects. It is part of how we work. And once the client approves a configuration, we move fast. Our standard turnaround from field measurements to completed installation is five to seven business days.
          </p>

          <div className="mt-10 p-6 bg-charcoal/[0.03] rounded-lg border border-charcoal/[0.06]">
            <p className="text-[13px] text-charcoal/50 font-medium uppercase tracking-wider mb-3">Project Details</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-charcoal/70">
              <div><span className="text-charcoal/40">Configurations presented,</span> Hinged, Sliding, 90-Degree Corner, Neo-Angle Curved.</div>
              <div><span className="text-charcoal/40">Final selection,</span> Neo-angle curved enclosure.</div>
              <div><span className="text-charcoal/40">Glass,</span> Clear tempered frameless.</div>
              <div><span className="text-charcoal/40">Hardware,</span> Chrome finish throughout.</div>
              <div><span className="text-charcoal/40">Turnaround,</span> Five to seven business days from approval.</div>
              <div><span className="text-charcoal/40">Service area,</span> NYC and tri-state.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-20 border-t border-charcoal/[0.04]">
        <div className="max-w-3xl mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-charcoal text-[14px] uppercase tracking-wider mb-4">Related Services</h3>
              <div className="space-y-2">
                <Link href="/shower-door-installation-nyc/" className="text-orange text-[14px] hover:opacity-70 transition-opacity block">Shower Door Installation →</Link>
                <Link href="/frameless-shower-doors-nyc/" className="text-orange text-[14px] hover:opacity-70 transition-opacity block">Frameless Shower Doors →</Link>
                <Link href="/contact/" className="text-orange text-[14px] hover:opacity-70 transition-opacity block">Request a Visualize Render →</Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-charcoal text-[14px] uppercase tracking-wider mb-4">Related Projects</h3>
              <div className="space-y-2">
                <Link href="/projects/shower-glass-design-consultation-nyc/" className="text-orange text-[14px] hover:opacity-70 transition-opacity block">Design Consultation Process →</Link>
                <Link href="/projects/neo-angle-enclosure-nyc/" className="text-orange text-[14px] hover:opacity-70 transition-opacity block">Neo-Angle Enclosure Project →</Link>
                <Link href="/projects/sliding-bypass-doors-nyc/" className="text-orange text-[14px] hover:opacity-70 transition-opacity block">Sliding Bypass Doors →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-20 sm:py-24 text-center">
        <div className="max-w-2xl mx-auto px-6 sm:px-10">
          <h2 className="heading-serif text-white text-3xl sm:text-4xl">Want to see your bathroom before we build?</h2>
          <p className="mt-3 text-white/40 text-base">Send us a photo and we will render every enclosure option in your actual space.</p>
          <Link href="/contact/" className="btn-pill btn-primary px-10 py-3.5 text-sm mt-8 inline-flex">Get a Free Render</Link>
        </div>
      </section>
    </>
  )
}
