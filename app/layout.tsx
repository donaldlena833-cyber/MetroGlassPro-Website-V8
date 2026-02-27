import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageTransition from '@/components/PageTransition'
import ScrollObserver from '@/components/ScrollObserver'

export const metadata: Metadata = {
  metadataBase: new URL('https://metroglasspro.com'),
  title: { default: 'MetroGlassPro — Custom Shower Glass NYC', template: '%s | MetroGlassPro' },
  description: 'Custom frameless shower doors and glass installations for NYC homes. Free estimates. Licensed & insured.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'MetroGlassPro',
    images: [{ url: '/assets/og-default.jpg', width: 1200, height: 630, alt: 'MetroGlassPro — Custom Shower Glass NYC' }],
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
      </head>
      <body className="font-sans">
        <ScrollObserver />
        <Header />
        <main>
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  )
}
