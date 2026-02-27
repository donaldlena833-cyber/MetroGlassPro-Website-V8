import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mirror Replacement in a NYC Apartment: What to Expect | MetroGlassPro',
  description: 'What a typical mirror replacement looks like in a New York City apartment — sizing, mounting options, timeline, and cost ranges.',
  alternates: { canonical: 'https://metroglasspro.com/projects/typical-mirror-replacement-nyc/' },
  openGraph: {
    title: 'Mirror Replacement in a NYC Apartment: What to Expect',
    description: 'What a typical mirror replacement looks like in a NYC apartment — sizing, mounting, timeline, and cost ranges.',
  },
  twitter: { card: 'summary_large_image' },
}

export default function TypicalMirrorReplacement() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="bg-cream pt-20 sm:pt-32 pb-10 sm:pb-14">
        <div className="max-w-3xl mx-auto px-6 sm:px-10">
          <Link href="/projects/" className="text-orange text-[13px] font-medium hover:opacity-70 transition-opacity mb-6 inline-block">
            ← Back to Projects
          </Link>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-[11px] font-medium tracking-wider uppercase text-orange/70 bg-orange/[0.08] px-2.5 py-1 rounded-full">Typical Scenario</span>
            <span className="text-[11px] font-medium tracking-wider uppercase text-charcoal/40 bg-charcoal/[0.04] px-2.5 py-1 rounded-full">Custom Mirrors</span>
          </div>
          <h1 className="heading-serif text-charcoal text-3xl sm:text-5xl lg:text-6xl">
            Mirror Replacement in a NYC Apartment: What to Expect
          </h1>
          <p className="mt-4 text-charcoal/30 text-sm">February 2026 · Duration: 1–2 hours · Typical range: $200–$800</p>
        </div>
      </section>

      {/* ═══ IMAGE ═══ */}
      <section className="bg-cream pb-6 sm:pb-10">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <div className="rounded-lg overflow-hidden bg-cream-dark">
            <img src="/gallery/mirror-cabinet-blue-tape.jpg" alt="Medicine cabinet mirror replacement in NYC — mirror taped with blue tape during silicone curing period" className="w-full h-auto" loading="lazy" />
          </div>
          <p className="mt-3 text-charcoal/30 text-[13px] italic">A medicine cabinet mirror taped in place during the silicone curing period — a real photo from one of our NYC installations.</p>
        </div>
      </section>

      {/* ═══ CONTENT ═══ */}
      <section className="bg-cream pb-20 sm:pb-28">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 prose-mgp">
          <p className="text-charcoal/50 text-[14px] bg-cream-light border border-charcoal/[0.06] rounded-lg p-4 mb-8">
            <strong className="text-charcoal/70">Note:</strong> This is a &quot;typical NYC scenario&quot; based on our experience across hundreds of installations. Specific details like location and layout are representative — costs and timelines reflect real ranges we see in the field.
          </p>

          <h2>The Scenario</h2>
          <p>
            A homeowner in a NYC apartment wants to replace an aging bathroom mirror. The existing mirror is a builder-grade plate mirror glued directly to the wall — common in apartments built or renovated in the 1990s and 2000s. It&apos;s developed black spots around the edges (a sign of moisture damage to the mirror backing) and no longer looks clean.
          </p>
          <p>
            The goal: a new, custom-cut mirror that fits the same space, mounted properly, and looks sharp.
          </p>

          {/* Project Specs */}
          <div className="not-prose my-8 glass-card p-5 sm:p-6">
            <h3 className="font-semibold text-charcoal text-[14px] uppercase tracking-wider mb-4">Project Specs (Typical)</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-[14px]">
              <div><span className="text-charcoal/40">Size range:</span> <span className="text-charcoal">24″×30″ to 48″×36″</span></div>
              <div><span className="text-charcoal/40">Mirror type:</span> <span className="text-charcoal">Standard 1/4″ plate mirror</span></div>
              <div><span className="text-charcoal/40">Edge finish:</span> <span className="text-charcoal">Flat polished or beveled</span></div>
              <div><span className="text-charcoal/40">Adhesive:</span> <span className="text-charcoal">Neutral-cure silicone</span></div>
              <div><span className="text-charcoal/40">Curing time:</span> <span className="text-charcoal">24–48 hours</span></div>
              <div><span className="text-charcoal/40">Turnaround:</span> <span className="text-charcoal">5–7 business days (up to 12 during holidays/weather delays)</span></div>
              <div><span className="text-charcoal/40">Price range:</span> <span className="text-charcoal">$200–$800 installed</span></div>
              <div><span className="text-charcoal/40">Install time:</span> <span className="text-charcoal">1–2 hours</span></div>
            </div>
          </div>

          <h2>Measurement & Planning</h2>
          <p>
            We visit the apartment and measure the wall space above the vanity. Typical NYC bathroom mirrors range from 24″×30″ for a small vanity to 48″×36″ or larger for a double vanity. We note any outlets, light fixtures, or medicine cabinets that affect sizing.
          </p>
          <p>
            The homeowner chooses between a few options:
          </p>
          <ul>
            <li><strong>Flat polished mirror</strong> — clean edges, no frame, the most popular choice for modern NYC bathrooms</li>
            <li><strong>Beveled edge mirror</strong> — a subtle angled border around the glass for a more traditional look</li>
            <li><strong>Custom shape</strong> — arched, round, or other non-rectangular cuts (these cost more)</li>
          </ul>

          <h2>Removal of the Old Mirror</h2>
          <p>
            If the old mirror is glued to the wall (very common), removal requires careful prying to avoid damaging the drywall behind it. We use wire saws and putty knives to separate the adhesive. In most cases, the wall needs minor patching and touch-up after removal — we let the homeowner know upfront if this is the case.
          </p>

          <h2>Installation</h2>
          <p>
            The new mirror is mounted using one of two methods depending on the situation:
          </p>
          <ul>
            <li><strong>J-channel (bottom rail) + clips</strong> — a metal channel along the bottom supports the weight, with small clips at the top. The most secure and common method.</li>
            <li><strong>Mirror adhesive (mastic)</strong> — applied directly to the wall for a completely flush, clip-free look. Works best on flat, painted walls.</li>
          </ul>
          <p>
            Installation itself takes about 1–2 hours including setup and cleanup.
          </p>

          <h2>Cost Range</h2>
          <p>
            For a typical NYC bathroom mirror replacement:
          </p>
          <ul>
            <li><strong>Small mirror (24″×30″):</strong> $200–$350 installed</li>
            <li><strong>Standard mirror (36″×30″ to 48″×36″):</strong> $350–$600 installed</li>
            <li><strong>Large or custom mirror (60″+ wide):</strong> $500–$800+ installed</li>
          </ul>
          <p>
            These ranges include measurement, fabrication, old mirror removal (if needed), and installation. Beveled edges and custom shapes add to the cost.
          </p>

          <h2>Key Takeaways</h2>
          <ul>
            <li>Mirror replacement is one of the fastest and most affordable bathroom upgrades</li>
            <li>Removing old glued mirrors can reveal wall damage — factor in potential patching</li>
            <li>Custom-cut mirrors look significantly better than stock sizes from hardware stores</li>
            <li>Proper mounting (J-channel or professional mastic) prevents mirrors from falling — a real safety concern with heavy glass</li>
          </ul>
        </div>
      </section>

      {/* ═══ RELATED ═══ */}
      <section className="bg-cream py-16 sm:py-20 border-t border-charcoal/[0.04]">
        <div className="max-w-3xl mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-charcoal text-[14px] uppercase tracking-wider mb-4">Related Services</h3>
              <div className="space-y-2">
                <Link href="/services/" className="text-orange text-[14px] hover:opacity-70 transition-opacity block">All Services →</Link>
                <Link href="/frameless-shower-doors-nyc/" className="text-orange text-[14px] hover:opacity-70 transition-opacity block">Frameless Shower Doors →</Link>
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
          <h2 className="heading-serif text-charcoal text-2xl sm:text-3xl mb-3">Need a mirror replaced?</h2>
          <p className="text-warm text-[15px] mb-6">We handle everything — measurement, fabrication, removal, and installation.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link href="/contact/" className="btn-pill btn-primary px-8 py-3 text-sm">Get a Free Estimate</Link>
            <Link href="/services/" className="btn-pill btn-outline px-8 py-3 text-sm">View All Services</Link>
          </div>
        </div>
      </section>
    </>
  )
}
