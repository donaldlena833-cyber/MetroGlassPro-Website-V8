import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '90° Corner Frameless Shower Enclosure — NYC Guide',
  description: 'Two glass walls meeting at 90° — the luxury standard for NYC shower enclosures. Why corners work in tight bathrooms, engineering, and cost.',
  alternates: { canonical: 'https://metroglasspro.com/projects/90-corner-enclosure-nyc/' },
  openGraph: {
    title: '90° Corner Frameless Shower Enclosure — NYC Guide',
    description: 'The luxury standard. Two glass walls at 90° for NYC built-in showers.',
  },
  twitter: { card: 'summary_large_image' },
}

export default function CornerEnclosureArticle() {
  return (
    <>
      <section className="bg-cream pt-20 sm:pt-32 pb-10 sm:pb-14">
        <div className="max-w-3xl mx-auto px-6 sm:px-10">
          <Link href="/projects/" className="text-orange text-[13px] font-medium hover:opacity-70 transition-opacity mb-6 inline-block">← Back to Projects</Link>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-[11px] font-medium tracking-wider uppercase text-charcoal/40 bg-charcoal/[0.04] px-2.5 py-1 rounded-full">Frameless Shower Doors</span>
            <span className="text-[11px] font-medium tracking-wider uppercase text-charcoal/40 bg-charcoal/[0.04] px-2.5 py-1 rounded-full">Configuration Guide</span>
          </div>
          <h1 className="heading-serif text-charcoal text-3xl sm:text-5xl lg:text-6xl">
            90° Corner Enclosure: The Luxury Standard for NYC Showers
          </h1>
          <p className="mt-4 text-charcoal/30 text-sm">February 2026</p>
        </div>
      </section>

      <section className="bg-cream pb-6 sm:pb-10">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <div className="rounded-lg overflow-hidden img-editorial aspect-[16/9]">
            <img src="/editorial/configurations/90-corner-enclosure.jpg" alt="90-degree corner frameless glass shower enclosure with satin brass glass-to-glass hinge connecting two panels at right angle" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-cream pb-20 sm:pb-28">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 prose-mgp">
          <p>
            A 90° corner enclosure is two glass walls meeting at a right angle — typically a door panel on one side and a fixed panel on the other, joined by a glass-to-glass hinge or clamp at the corner. It&apos;s the configuration that looks the most like a &quot;glass room&quot; and it&apos;s what most people picture when they think of a high-end frameless shower.
          </p>

          <h2>Two glass walls at 90° — the luxury standard</h2>
          <p>
            This configuration is what you see in hotel bathrooms, luxury condo model units, and high-end renovation features. The reason it reads as premium is simple: there are no walls hiding behind the glass. Two full sides of the shower are transparent, which floods the bathroom with light and makes the space feel dramatically larger.
          </p>
          <p>
            The 90° corner requires a shower niche — meaning two walls of tile or stone form the back and one side of the shower, and the glass forms the front and the other side. This is the standard layout for built-in showers in NYC bathrooms, which is why this enclosure works so well here.
          </p>
          <p>
            The glass-to-glass connection at the 90° corner is the engineering centerpiece. A precision clamp — like the one shown above in satin brass — holds two panels of heavy tempered glass at exactly 90°, with no frame, no channel, just glass meeting glass. It&apos;s one of the cleanest looks in residential glass work.
          </p>

          <h2>Why corners work in tight NYC bathrooms</h2>
          <p>
            You might think a corner enclosure needs a big bathroom. It doesn&apos;t. In fact, it&apos;s one of the best solutions for NYC&apos;s compact layouts:
          </p>
          <ul>
            <li><strong>It uses the corner efficiently.</strong> Showers in NYC apartments are almost always in a corner. A 90° enclosure follows the natural geometry of the room rather than fighting it.</li>
            <li><strong>The glass disappears visually.</strong> Unlike a shower curtain or framed enclosure, frameless glass doesn&apos;t create a visual barrier. The bathroom looks and feels larger because your eye travels through the glass.</li>
            <li><strong>The door can be sized to the space.</strong> The door panel is typically 24–30&quot; and the fixed panel extends to fill the remaining opening. This flexibility means we can fit corner enclosures in showers as small as 36&quot;×36&quot;.</li>
          </ul>

          <h2>Cost premium — and why it&apos;s worth it</h2>
          <p>
            A 90° corner enclosure typically runs $1,800–$3,000+ installed in NYC. That&apos;s more than a single swing door ($800–$1,500) because you&apos;re getting significantly more glass and more hardware:
          </p>
          <ul>
            <li>Two large panels of tempered glass instead of one</li>
            <li>Glass-to-glass clamps at the 90° joint</li>
            <li>Wall-mount hinges for the door</li>
            <li>Wall clamps or U-channel for the fixed side</li>
            <li>Possibly a support bar for the fixed panel</li>
            <li>Handle and towel bar</li>
          </ul>
          <p>
            The cost premium is real — but so is the visual impact. A 90° corner enclosure transforms a bathroom more than almost any other single upgrade. For NYC co-op and condo owners thinking about resale, it&apos;s also one of the upgrades that buyers notice immediately.
          </p>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-20 border-t border-charcoal/[0.04]">
        <div className="max-w-3xl mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-charcoal text-[14px] uppercase tracking-wider mb-4">Related Services</h3>
              <div className="space-y-2">
                <Link href="/frameless-shower-doors-nyc/" className="text-orange text-[14px] hover:opacity-70 transition-opacity block">Frameless Shower Doors →</Link>
                <Link href="/shower-door-installation-nyc/" className="text-orange text-[14px] hover:opacity-70 transition-opacity block">Installation Process →</Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-charcoal text-[14px] uppercase tracking-wider mb-4">Other Configurations</h3>
              <div className="space-y-2">
                <Link href="/projects/neo-angle-enclosure-nyc/" className="text-orange text-[14px] hover:opacity-70 transition-opacity block">Neo-Angle Enclosure →</Link>
                <Link href="/projects/walk-in-shower-panel-nyc/" className="text-orange text-[14px] hover:opacity-70 transition-opacity block">Walk-In Panel →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-20 sm:py-24 text-center">
        <div className="max-w-2xl mx-auto px-6 sm:px-10">
          <h2 className="heading-serif text-white text-3xl sm:text-4xl">Want the full glass enclosure look?</h2>
          <p className="mt-3 text-white/40 text-base">Free on-site measurement and quote.</p>
          <Link href="/contact/" className="btn-pill btn-primary px-10 py-3.5 text-sm mt-8 inline-flex">Get a Free Estimate</Link>
        </div>
      </section>
    </>
  )
}
