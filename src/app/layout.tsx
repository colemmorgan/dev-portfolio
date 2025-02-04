import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cole Morgan | Web Developer',
  description: 'Cole Morgan is a frontend-focused full-stack web developer at the University of Florida.',
  creator: 'Cole Morgan',
  publisher: 'Cole Morgan',

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
    other: {
      rel: '/favicon.png',
      url: '/favicon.png',
    },
  },


  openGraph: {
    images: {
      url: '/preview.png',
      width: 1400,
      height: 900,
      alt: 'Cole Morgan - Web Developer'
    },
    type: 'website',
    locale: 'en_US',
    title: 'Cole Morgan | Web Developer',
    description: 'Cole Morgan is a frontend-focused full-stack web developer at the University of Florida.',
  },

  
  twitter: {
    card: 'summary_large_image',
    images: {
      url: '/preview.png',
      width: 1400,
      height: 900,
      alt: 'Cole Morgan - Web Developer'
    },
    title: 'Cole Morgan | Web Developer',
    description: 'Cole Morgan is a frontend-focused full-stack web developer at the University of Florida.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <meta property="og:image" content={`https://colemorgan.me/preview.png`} />
        <meta property="og:image:width" content="1400" />
        <meta property="og:image:height" content="900" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
