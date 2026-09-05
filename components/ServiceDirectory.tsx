import Link from 'next/link'
import { glassServices } from '@/content/service-catalog'

export default function ServiceDirectory() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
      {glassServices.map((service, index) => (
        <Link key={service.id} href={service.href} aria-labelledby={`service-${service.id}`} className="group rounded-xl border border-charcoal/15 bg-cream-light p-6 sm:p-7 flex flex-col transition-colors hover:border-orange/50 hover:bg-white">
          <div className="flex justify-between items-center text-sm text-orange mb-5" aria-hidden="true"><span>0{index + 1}</span><span>→</span></div>
          <h3 id={`service-${service.id}`} className="font-serif text-charcoal text-3xl mb-3 group-hover:text-orange transition-colors">{service.name}</h3>
          <p className="text-warm text-[15px] leading-relaxed">{service.summary}</p>
        </Link>
      ))}
    </div>
  )
}
