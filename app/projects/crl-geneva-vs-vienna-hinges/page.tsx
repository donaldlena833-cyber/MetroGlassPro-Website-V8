import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'CRL Geneva vs Vienna Hinges: A Comparison | MetroGlassPro',
  description: 'Comparing CRL Geneva and Vienna frameless shower door hinges — design, applications, and when we recommend each.',
  alternates: { canonical: 'https://metroglasspro.com/projects/crl-geneva-vs-vienna-hinges/' },
  openGraph: {
    title: 'CRL Geneva vs Vienna Hinges: A Comparison',
    description: 'Comparing CRL Geneva and Vienna frameless shower door hinges — design, applications, and recommendations.',
  },
  twitter: { card: 'summary_large_image' },
}

export default function CRLGenevaVsVienna() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="bg-cream pt-20 sm:pt-32 pb-10 sm:pb-14">
        <div className="max-w-3xl mx-auto px-6 sm:px-10">
          <Link href="/projects/" className="text-orange text-[13px] font-medium hover:opacity-70 transition-opacity mb-6 inline-block">
            ← Back to Projects
          </Link>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-[11px] font-medium tracking-wider uppercase text-charcoal/40 bg-charcoal/[0.04] px-2.5 py-1 rounded-full">Frameless Shower Doors</span>
            <span className="text-[11px] font-medium tracking-wider uppercase text-charcoal/40 bg-charcoal/[0.04] px-2.5 py-1 rounded-full">Hardware</span>
          </div>
          <h1 className="heading-serif text-charcoal text-3xl sm:text-5xl lg:text-6xl">
            CRL Geneva vs Vienna Hinges: A High-Level Comparison
          </h1>
          <p className="mt-4 text-charcoal/30 text-sm">February 2026</p>
        </div>
      </section>

      {/* ═══ IMAGE ═══ */}
      <section className="bg-cream pb-6 sm:pb-10">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <div className="rounded-lg overflow-hidden bg-cream-dark">
            <img src="/editorial/tools.jpg" alt="Shower door hardware and installation tools" className="w-full h-auto" loading="lazy" />
          </div>
        </div>
      </section>

      {/* ═══ CONTENT ═══ */}
      <section className="bg-cream pb-20 sm:pb-28">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 prose-mgp">
          <p>
            When we install frameless shower doors, one of the most important hardware decisions is the hinge. It carries the full weight of the glass panel and determines how the door swings, how it looks, and how long it lasts. Two of the most popular options we work with are the <strong>CRL Geneva</strong> and the <strong>CRL Vienna</strong> — both made by C.R. Laurence, the industry&apos;s leading glass hardware manufacturer.
          </p>
          <p>
            This is a high-level comparison based on our installation experience. For exact specifications, always refer to the current CRL product catalog.
          </p>

          <h2>CRL Geneva Hinge</h2>
          <p>
            The Geneva is one of CRL&apos;s most widely used frameless shower door hinges. It has a compact, clean profile that works well in both modern and transitional bathroom designs.
          </p>
          <ul>
            <li><strong>Design:</strong> Compact, square-cornered body with a beveled edge. Minimal visual footprint — doesn&apos;t draw attention away from the glass.</li>
            <li><strong>Glass compatibility:</strong> Designed for both 3/8&quot; and 1/2&quot; tempered glass (depending on the specific model).</li>
            <li><strong>Mounting:</strong> Wall-to-glass and glass-to-glass mounting options. Works for both inline and 90° applications.</li>
            <li><strong>Finishes:</strong> Available in all standard CRL finishes — chrome, brushed nickel, matte black, satin brass, oil-rubbed bronze, and more.</li>
            <li><strong>Best for:</strong> Most standard frameless installations. This is our go-to hinge for the majority of NYC apartment shower doors.</li>
          </ul>

          <h2>CRL Vienna Hinge</h2>
          <p>
            The Vienna has a slightly different aesthetic — it&apos;s rounder, smoother, and reads as a more premium piece of hardware compared to the Geneva&apos;s squared-off profile.
          </p>
          <ul>
            <li><strong>Design:</strong> Rounded, slightly elongated body with soft edges. A more &quot;designed&quot; look that complements luxury and contemporary bathrooms.</li>
            <li><strong>Glass compatibility:</strong> Also available for 3/8&quot; and 1/2&quot; glass.</li>
            <li><strong>Mounting:</strong> Same versatility as the Geneva — wall-to-glass and glass-to-glass.</li>
            <li><strong>Finishes:</strong> Same CRL finish range, including the increasingly popular matte black and satin brass.</li>
            <li><strong>Best for:</strong> Higher-end renovations, design-forward bathrooms, or when the client wants hardware that makes a subtle visual statement.</li>
          </ul>

          <h2>When We Recommend Each</h2>
          <p>
            For most NYC apartments, the <strong>Geneva</strong> is our default recommendation. It&apos;s proven, reliable, widely available, and has a clean look that works in virtually any bathroom. It&apos;s also typically the more cost-effective option.
          </p>
          <p>
            We suggest the <strong>Vienna</strong> for clients who are investing in a higher-end renovation, or who have a specific aesthetic direction (particularly modern/contemporary) where the rounder hardware profile fits better. The price difference between the two is modest — usually not a deciding factor.
          </p>
          <p>
            Both hinges are commercial-grade, self-closing capable, and built to last. The choice is primarily aesthetic.
          </p>

          <h2>A Note on Hardware Selection</h2>
          <p>
            The hinge is just one part of the hardware system. Clamps, handles, towel bars, and support bars all need to match in finish and style. When we quote a frameless shower door, we spec the complete hardware package — not just the hinges — so everything coordinates.
          </p>
          <p>
            If you&apos;re curious about hardware options for your project, we&apos;re happy to walk you through the choices during your measurement visit.
          </p>
        </div>
      </section>

      {/* ═══ RELATED ═══ */}
      <section className="bg-cream py-16 sm:py-20 border-t border-charcoal/[0.04]">
        <div className="max-w-3xl mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-charcoal text-[14px] uppercase tracking-wider mb-4">Related Services</h3>
              <div className="space-y-2">
                <Link href="/frameless-shower-doors-nyc/" className="text-orange text-[14px] hover:opacity-70 transition-opacity block">Frameless Shower Doors →</Link>
                <Link href="/shower-door-installation-nyc/" className="text-orange text-[14px] hover:opacity-70 transition-opacity block">Shower Door Installation →</Link>
                <Link href="/shower-door-replacement-nyc/" className="text-orange text-[14px] hover:opacity-70 transition-opacity block">Shower Door Replacement →</Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-charcoal text-[14px] uppercase tracking-wider mb-4">Service Areas</h3>
              <div className="space-y-2">
                <Link href="/service-areas/manhattan/" className="text-orange text-[14px] hover:opacity-70 transition-opacity block">Manhattan →</Link>
                <Link href="/service-areas/brooklyn/" className="text-orange text-[14px] hover:opacity-70 transition-opacity block">Brooklyn →</Link>
                <Link href="/service-areas/" className="text-orange text-[14px] hover:opacity-70 transition-opacity block">All Areas →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream-light py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 text-center">
          <h2 className="heading-serif text-charcoal text-2xl sm:text-3xl mb-3">Want to see these hinges in action?</h2>
          <p className="text-warm text-[15px] mb-6">Browse our gallery or request a free estimate to discuss hardware options.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link href="/frameless-shower-doors-nyc/" className="btn-pill btn-primary px-8 py-3 text-sm">Frameless Doors</Link>
            <Link href="/gallery/" className="btn-pill btn-outline px-8 py-3 text-sm">View Gallery</Link>
          </div>
        </div>
      </section>
    </>
  )
}
