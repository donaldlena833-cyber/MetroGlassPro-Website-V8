import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MobileCtaBar from '@/components/MobileCtaBar'
import PageTransition from '@/components/PageTransition'
import ScrollObserver from '@/components/ScrollObserver'

export const metadata: Metadata = {
  metadataBase: new URL('https://metroglasspro.com'),
  title: { default: 'Custom Shower Doors Manhattan and NYC | MGP', template: '%s | MGP' },
  description: 'Custom shower doors for Manhattan apartments, condos, and brownstones, plus mirrors and related custom glass across NYC. Clean installs, precise fit, COI ready, fast estimates.',
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

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://metroglasspro.com/#organization',
  name: 'MetroGlass Pro',
  url: 'https://metroglasspro.com',
  logo: 'https://metroglasspro.com/assets/logo.png',
  email: 'operations@metroglasspro.com',
  telephone: '+1-332-999-3846',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'New York',
    addressRegion: 'NY',
    addressCountry: 'US',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'estimates and customer service',
    email: 'operations@metroglasspro.com',
    telephone: '+1-332-999-3846',
    areaServed: 'New York City',
    availableLanguage: ['English'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${process.env.NEXT_PUBLIC_GA_ID}');`,
              }}
            />
          </>
        )}
        {/* Google Ads (AW-934489946) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-934489946" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','AW-934489946');`,
          }}
        />
      </head>
      <body className="font-sans pb-[84px] lg:pb-0">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd).replace(/</g, '\\u003c') }} />
        <ScrollObserver />
        <Header />
        <main>
          <PageTransition>{children}</PageTransition>
        </main>
        <MobileCtaBar />
        <Footer />
      </body>
    </html>
  )
}
