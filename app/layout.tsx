import type { Metadata } from 'next'
import { Instrument_Serif, Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MobileCtaBar from '@/components/MobileCtaBar'
import ScrollObserver from '@/components/ScrollObserver'

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

const googleAnalyticsId = process.env.NEXT_PUBLIC_GA_ID
const googleAdsId = 'AW-934489946'
const googleTagId = googleAnalyticsId || googleAdsId

export const metadata: Metadata = {
  metadataBase: new URL('https://metroglasspro.com'),
  title: { default: 'Custom Shower Doors NYC & Manhattan | MGP', template: '%s | MGP' },
  description: 'Custom shower doors for NYC apartments, condos, and brownstones. Precise measurements, clean installation, COI support, and fast photo estimates.',
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
      <body className="font-sans pb-[84px] lg:pb-0">
        <ScrollObserver />
        <Header />
        <main>{children}</main>
        <MobileCtaBar />
        <Footer />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${googleTagId}`}
          strategy="afterInteractive"
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
