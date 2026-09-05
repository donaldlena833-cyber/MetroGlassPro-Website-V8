import Link from 'next/link'

export default function MobileCtaBar() {
  return (
    <div className="lg:hidden fixed inset-x-0 bottom-0 z-50 border-t border-charcoal/[0.08] bg-cream/95 backdrop-blur-md">
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2 px-3 py-3">
        <a
          href="tel:+13329993846"
          className="btn-pill btn-outline px-3 py-3 text-[12px]"
        >
          Call
        </a>
        <a
          href="sms:+13329993846?body=Hi%20MetroGlass%20Pro%2C%20I%20want%20a%20quote%20and%20can%20send%20project%20photos."
          className="btn-pill btn-outline px-3 py-3 text-[12px]"
        >
          Text Photos
        </a>
        <Link href="/contact/" className="btn-pill btn-primary px-3 py-3 text-[12px]">
          Estimate
        </Link>
      </div>
    </div>
  )
}
