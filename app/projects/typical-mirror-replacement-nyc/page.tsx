import ResponsiveImage from '@/components/ResponsiveImage'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mirror Replacement in a NYC Apartment',
  description: 'Plan an apartment mirror replacement around wall condition, size, edge finish, mounting, removal, and building access. Request a project-specific estimate.',
  alternates: { canonical: 'https://metroglasspro.com/projects/typical-mirror-replacement-nyc/' },
  openGraph: { images: [{ url: '/assets/og-default.jpg', width: 1200, height: 630, alt: 'MetroGlass Pro custom shower doors and glass installation' }] },
  twitter: { images: ['/assets/og-default.jpg'], card: 'summary_large_image' },
}

const steps = [
  { title: 'Review the existing mirror and wall', text: 'Photos should show the full wall, vanity, lights, outlets, edges, and how the current mirror appears to be attached. Removal can reveal old anchors, adhesive, or damage that changes the scope.' },
  { title: 'Choose size, edge, and mounting', text: 'A flat polished edge, bevel, framed mirror, or custom shape creates different fabrication and support needs. The mounting method depends on the mirror size, wall, and surrounding fixtures.' },
  { title: 'Confirm access and the quote', text: 'A large panel may need a particular carrying route, crew, or building work window. Final dimensions, removal work, fabrication timing, and price belong in a written project-specific estimate.' },
]

export default function MirrorReplacementGuide() {
  return <>
    <section className="bg-cream pt-20 sm:pt-32 pb-16 sm:pb-20">
      <div className="max-w-3xl mx-auto px-6 sm:px-10">
        <Link href="/projects/" className="text-orange text-[13px] font-medium mb-6 inline-block">← Projects and planning guides</Link>
        <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Planning guide · Custom mirrors</p>
        <h1 className="heading-serif text-charcoal text-4xl sm:text-6xl">Mirror replacement in a NYC apartment.</h1>
        <p className="mt-5 text-warm text-base sm:text-lg leading-relaxed">A mirror replacement starts with the existing wall and mounting conditions. Size alone does not determine the work: old adhesive, hidden damage, lights, outlets, edge finish, delivery access, and building rules can all affect the estimate.</p>
      </div>
    </section>
    <section className="bg-cream pb-16 sm:pb-24">
      <div className="max-w-4xl mx-auto px-6 sm:px-10">
        <ResponsiveImage src="/gallery/mirror-cabinet-blue-tape.jpg" alt="Mirror panel held with blue tape while adhesive cures" className="w-full h-auto rounded-lg" loading="eager" />
        <p className="mt-3 text-warm text-[13px]">Tape can temporarily support a mirror during a specific installation method. Mounting and cure instructions depend on the selected products and wall conditions.</p>
      </div>
    </section>
    <section className="bg-cream-light py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-6 sm:px-10">
        <h2 className="heading-serif text-charcoal text-3xl sm:text-4xl mb-8">The decisions before ordering</h2>
        <div className="space-y-5">
          {steps.map((step) => <div key={step.title} className="glass-card p-6">
            <h3 className="font-serif text-charcoal text-2xl mb-3">{step.title}</h3>
            <p className="text-warm text-[15px] leading-relaxed">{step.text}</p>
          </div>)}
        </div>
      </div>
    </section>
    <section className="bg-cream py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-6 sm:px-10">
        <h2 className="heading-serif text-charcoal text-3xl sm:text-4xl mb-5">What to send for an estimate</h2>
        <ul className="list-disc pl-5 space-y-3 text-warm text-[15px] leading-relaxed">
          <li>One wide photo of the mirror wall and vanity, plus close-ups of edges and mounting.</li>
          <li>Rough width and height, preferred shape or edge detail, and any lights or outlets nearby.</li>
          <li>Whether the old mirror must be removed, and any building access or insurance requirements.</li>
        </ul>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/contact/?service=custom-mirrors" className="btn-pill btn-primary px-8 py-3 text-sm">Request a mirror estimate</Link>
          <Link href="/custom-mirrors-nyc/" className="btn-pill btn-outline px-8 py-3 text-sm">Custom mirror service</Link>
        </div>
      </div>
    </section>
  </>
}
