import Link from 'next/link'
import { glassServices } from '@/content/service-catalog'

export default function ServiceDirectory() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {glassServices.map((service, index) => (
        <article key={service.id} className="glass-card p-6 sm:p-8 flex flex-col">
          <p className="text-orange text-sm mb-5" aria-hidden="true">0{index + 1}</p>
          <h3 className="font-serif text-charcoal text-3xl mb-3"><Link href={service.href} className="hover:text-orange transition-colors">{service.name}</Link></h3>
          <p className="text-warm text-base leading-relaxed mb-6 flex-1">{service.summary}</p>
          <Link href={service.href} className="text-orange text-sm font-medium py-2">Explore {service.name.toLowerCase()} <span aria-hidden="true">→</span></Link>
        </article>
      ))}
    </div>
  )
}
