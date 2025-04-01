import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Access Mortgages - Private Mortgage Investment Platform',
  description: 'Access Mortgages provides secure private mortgage investment opportunities with competitive returns. Manage your mortgage investments with our easy-to-use platform.',
  keywords: ['mortgage investments', 'private lending', 'real estate investment', 'private mortgages'],
  authors: [{ name: 'Access Mortgages' }],
  openGraph: {
    title: 'Access Mortgages - Private Mortgage Investment Platform',
    description: 'Secure private mortgage investment opportunities with competitive returns',
    url: 'https://accesscapitalmic.com/',
    siteName: 'Access Mortgages',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      }
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Access Mortgages - Private Mortgage Investment Platform',
    description: 'Secure private mortgage investment opportunities with competitive returns',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'icon',
      url: '/favicon-32x32.png',
    },
  },
}