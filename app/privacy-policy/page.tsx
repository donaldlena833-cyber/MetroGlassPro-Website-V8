import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'MetroGlassPro privacy policy.',
  alternates: { canonical: 'https://metroglasspro.com/privacy-policy/' },
  openGraph: {
    title: 'Privacy Policy',
    description: 'MetroGlassPro privacy policy.',
  },
  twitter: { card: 'summary_large_image' },
}

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-cream py-20 sm:py-32">
      <div className="max-w-2xl mx-auto px-6 sm:px-10">
        <h1 className="heading-serif text-charcoal text-4xl sm:text-5xl mb-10">Privacy Policy</h1>
        <div className="text-warm text-[15px] leading-relaxed space-y-6">
          <p>MetroGlassPro (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects your privacy. This policy explains how we collect, use, and protect your information when you visit metroglasspro.com.</p>
          <p><strong className="text-charcoal">Information We Collect.</strong> When you submit a quote request, we collect your name, phone number, email address, and project details. We also use Google Analytics (GA4) to collect anonymous usage data including pages viewed, time on site, and general location.</p>
          <p><strong className="text-charcoal">How We Use Your Information.</strong> Contact form submissions are used solely to respond to your inquiry and provide estimates. Analytics data helps us improve the website experience. We do not sell or share your personal information with third parties.</p>
          <p><strong className="text-charcoal">Cookies.</strong> Google Analytics uses cookies to collect anonymous usage data. You can disable cookies in your browser settings at any time.</p>
          <p><strong className="text-charcoal">Contact.</strong> Questions about this policy? Email us at operations@metroglasspro.com or call (332) 999-3846.</p>
          <p className="text-warm/50 text-sm">Last updated: February 2026</p>
        </div>
      </div>
    </section>
  )
}
