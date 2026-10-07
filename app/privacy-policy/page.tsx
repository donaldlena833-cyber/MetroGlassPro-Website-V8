import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How MetroGlass Pro handles estimate requests, contact details, project photos, website storage, and customer communications.',
  alternates: { canonical: 'https://metroglasspro.com/privacy-policy/' },
  openGraph: { images: [{ url: '/assets/og-default.jpg', width: 1200, height: 630, alt: 'MetroGlass Pro custom shower doors and glass installation' }],
    title: 'Privacy Policy',
    description: 'How MetroGlass Pro handles estimate requests, project photos, website storage, and customer communications.',
  },
  twitter: { images: ['/assets/og-default.jpg'],  card: 'summary_large_image' },
}

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-cream py-20 sm:py-32">
      <div className="max-w-2xl mx-auto px-6 sm:px-10">
        <h1 className="heading-serif text-charcoal text-4xl sm:text-5xl mb-10">Privacy Policy</h1>
        <div className="text-warm text-[15px] leading-relaxed space-y-6">
          <p>MetroGlass Pro (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects your privacy. This policy explains how we collect, use, and protect your information when you visit metroglasspro.com.</p>
          <p><strong className="text-charcoal">Information We Collect.</strong> When you submit an estimate request, we collect your name, the phone number or email address you provide, project details, and any optional files or discovery-source answer you include. Unless you opt out, Google Analytics measures page visits and technical usage data; we do not send form contents to it. If you allow ad measurement, the OpenAI Pixel records page views and a lead event only after a successful estimate request. We do not pass project notes or attachments to the Pixel. If automatic advanced matching is enabled in Ads Manager, the Pixel may detect supported contact information in the form, hash it in your browser, and include the hash with conversion events.</p>
          <p><strong className="text-charcoal">Project Photos and Attachments.</strong> If you send bathroom photos, drawings, PDFs, or other project files, we use them to understand the opening, hardware direction, access conditions, and estimate needs. Photos may show parts of your home, so we keep them limited to project review and customer communication.</p>
          <p><strong className="text-charcoal">How We Use Your Information.</strong> Contact form submissions are used to respond to your inquiry, prepare estimates, coordinate appointments, and follow up on active project questions. We do not sell your personal information.</p>
          <p><strong className="text-charcoal">Service Providers.</strong> We may use trusted tools for website hosting, form delivery, email delivery, spam prevention, and basic business operations. These providers process information only as needed to run the website, deliver messages, or support customer service.</p>
          <p><strong className="text-charcoal">How You Found Us.</strong> The estimate form includes an optional question about how you discovered MetroGlass Pro. Your answer accompanies your inquiry. With ad measurement permission, the OpenAI Pixel may store the OpenAI ad click reference from your landing page URL for conversion attribution. We do not send your optional answer to the Pixel.</p>
          <p><strong className="text-charcoal">Cookies and Browser Storage.</strong> Google Analytics helps us understand visits and runs automatically unless you opt out below or your browser sends a Global Privacy Control or Do Not Track signal. Existing saved opt-outs are respected. Your saved choice applies in this browser for up to 180 days. Analytics may process device, page, usage, and network information; we do not send inquiry contents to it. Hosting and security services process information needed to deliver and protect the website. Ad measurement stays off unless you separately allow it using the controls below. The OpenAI Pixel then uses first-party attribution cookies. These choices do not enable Google Ads conversion tracking. After you send an estimate request, we use this tab’s session storage to show your confirmation and request reference. Hosting and security services may process technical information needed to deliver and protect the website.</p>
          <p><strong className="text-charcoal">Retention.</strong> We keep estimate requests and related project details only as long as reasonably useful for customer service, project records, or business administration. If you want us to remove a request or project photo from our active records, contact us and we will review it.</p>
          <p><strong className="text-charcoal">Contact.</strong> Questions about this policy? Email us at operations@metroglasspro.com or call (332) 999-3846. Please include enough detail for us to identify the request or project you are asking about.</p>
          <p className="text-warm/70 text-sm">Last updated: October 7, 2026</p>
        </div>
      </div>
    </section>
  )
}
