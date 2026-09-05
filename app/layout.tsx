import type { Metadata } from 'next'
import { Instrument_Serif, Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MobileCtaBar from '@/components/MobileCtaBar'
import ScrollObserver from '@/components/ScrollObserver'
import LeadAttributionTracker from '@/components/LeadAttributionTracker'
import { businessJsonLd } from '@/content/business'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-instrument-serif',
})

const configuredGoogleAnalyticsId = process.env.NEXT_PUBLIC_GA_ID
// This previously configured stream returns HTTP 404 from Google's tag endpoint.
// Keep the working Ads tag; GA4 resumes when the deployment has a valid stream ID.
const googleAnalyticsId = configuredGoogleAnalyticsId === 'G-46MYS2R9QW'
  ? undefined
  : configuredGoogleAnalyticsId
const googleAdsId = 'AW-934489946'
const googleTagId = googleAnalyticsId || googleAdsId

export const metadata: Metadata = {
  metadataBase: new URL('https://metroglasspro.com'),
  title: { default: 'Shower Doors, Mirrors & Custom Glass NYC | MetroGlass Pro', template: '%s | MetroGlass Pro' },
  description: 'Shower doors, glazing, glass railings, custom mirrors, partitions, and glass repair across New York City. Send photos or plans for a project estimate.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'MetroGlass Pro',
    images: [{ url: '/assets/og-default.jpg', width: 1200, height: 630, alt: 'MetroGlass Pro custom shower doors and glass installation' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/assets/og-default.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/assets/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/assets/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/assets/favicon-180x180.png', sizes: '180x180' }],
  },
  other: { 'theme-color': '#1a1a18' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="font-sans pb-[calc(84px+env(safe-area-inset-bottom))] lg:pb-0">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd).replace(/</g, '\\u003c') }} />
        <LeadAttributionTracker />
        <ScrollObserver />
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Header />
        <main id="main-content">{children}</main>
        <MobileCtaBar />
        <Footer />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${googleTagId}`}
          strategy="lazyOnload"
        />
        <Script id="google-tag-config" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            ${googleAnalyticsId ? `gtag('config', '${googleAnalyticsId}');` : ''}
            gtag('config', '${googleAdsId}');
          `}
        </Script>
      </body>
    </html>
  )
}
