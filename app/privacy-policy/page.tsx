import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How MetroGlass Pro handles estimate requests, contact details, project photos, analytics data, cookies, and customer communications.',
  alternates: { canonical: 'https://metroglasspro.com/privacy-policy/' },
  openGraph: {
    title: 'Privacy Policy',
    description: 'How MetroGlass Pro handles estimate requests, project photos, analytics, cookies, and customer communications.',
  },
  twitter: { card: 'summary_large_image' },
}

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-cream py-20 sm:py-32">
      <div className="max-w-2xl mx-auto px-6 sm:px-10">
        <h1 className="heading-serif text-charcoal text-4xl sm:text-5xl mb-10">Privacy Policy</h1>
        <div className="text-warm text-[15px] leading-relaxed space-y-6">
          <p>MetroGlass Pro (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects your privacy. This policy explains how we collect, use, and protect your information when you visit metroglasspro.com.</p>
          <p><strong className="text-charcoal">Information We Collect.</strong> When you submit a quote request, we collect your name, phone number, email address, and project details. We also use Google Analytics (GA4) to collect usage data including pages viewed, time on site, and general location.</p>
          <p><strong className="text-charcoal">Project Photos and Attachments.</strong> If you send bathroom photos, drawings, PDFs, or other project files, we use them to understand the opening, hardware direction, access conditions, and estimate needs. Photos may show parts of your home, so we keep them limited to project review and customer communication.</p>
          <p><strong className="text-charcoal">How We Use Your Information.</strong> Contact form submissions are used to respond to your inquiry, prepare estimates, coordinate appointments, and follow up on active project questions. Analytics data helps us improve the website experience. We do not sell your personal information.</p>
          <p><strong className="text-charcoal">Service Providers.</strong> We may use trusted tools for website hosting, form delivery, email delivery, analytics, spam prevention, and basic business operations. These providers process information only as needed to run the website, deliver messages, or support customer service.</p>
          <p><strong className="text-charcoal">Referral Information.</strong> We use session storage to remember how you reached the website during the current browser tab session, such as a ChatGPT referral, a campaign source, or another website. We retain the landing page path and referring website hostname, without their query strings or search prompts. If you request an estimate, this information and any optional answer to how you found us accompany your inquiry. We also record contact-link clicks and successful form submissions in analytics, without sending your contact details, project message, or attachments as event parameters.</p>
          <p><strong className="text-charcoal">Cookies.</strong> Google Analytics uses cookies to collect usage data. You can disable cookies in your browser settings at any time.</p>
          <p><strong className="text-charcoal">Retention.</strong> We keep estimate requests and related project details only as long as reasonably useful for customer service, project records, or business administration. If you want us to remove a request or project photo from our active records, contact us and we will review it.</p>
          <p><strong className="text-charcoal">Contact.</strong> Questions about this policy? Email us at operations@metroglasspro.com or call (332) 999-3846. Please include enough detail for us to identify the request or project you are asking about.</p>
          <p className="text-warm/50 text-sm">Last updated: September 5, 2026</p>
        </div>
      </div>
    </section>
  )
}
