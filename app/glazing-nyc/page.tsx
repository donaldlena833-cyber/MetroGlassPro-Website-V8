import GlassServicePage, { glassServiceMetadata } from '@/components/GlassServicePage'

export const metadata = glassServiceMetadata('glazing')

export default function Page() {
  return (
    <>
      <GlassServicePage id="glazing" />
      <section aria-labelledby="window-door-scope" className="bg-cream-light py-16 sm:py-20 border-t border-charcoal/10">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <p className="text-orange text-[13px] font-semibold tracking-widest uppercase mb-4">Related window and door work</p>
          <h2 id="window-door-scope" className="font-serif text-charcoal text-3xl sm:text-4xl mb-5">Looking beyond the glazing?</h2>
          <p className="text-warm text-base leading-relaxed max-w-3xl">
            If your project involves repairing or replacing the window or door itself, visit <a href="https://milotiwindows.com" className="text-orange underline underline-offset-4 hover:opacity-70 transition-opacity">Miloti Windows</a>, our sister company. MetroGlass Pro handles the custom glass and glazing scope.
          </p>
        </div>
      </section>
    </>
  )
}
