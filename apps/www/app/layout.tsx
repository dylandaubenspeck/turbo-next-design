import '@repo/ui/globals.css'

import { ThemeProvider } from '@repo/ui/components/theme-provider'
import { cn } from '@repo/ui/lib/utils'
import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import { Inter } from 'next/font/google'
import { Bricolage_Grotesque } from 'next/font/google'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans'
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono'
})

const inter = Inter({ subsets: ['latin'] })
const bricolage = Bricolage_Grotesque({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next.js 15 with Turborepo and shadcn/ui',
  description:
    'A modern web application using Next.js 15, Turborepo, and shadcn/ui',
  robots: 'follow, index',
  openGraph: {
    title: 'Next.js 15 with Turborepo and shadcn/ui',
    description:
      'A modern web application using Next.js 15, Turborepo, and shadcn/ui',
    type: 'website',
    locale: 'en_US',
    countryName: 'Thailand',
    images: [
      {
        url: '/metadata/og-image.png',
        alt: 'Next.js 15 with Turborepo and shadcn/ui'
      }
    ]
  },
  twitter: {
    title: 'Next.js 15 with Turborepo and shadcn/ui',
    description:
      'A modern web application using Next.js 15, Turborepo, and shadcn/ui',
    card: 'summary_large_image',
    images: [
      {
        url: '/metadata/og-image.png',
        alt: 'Next.js 15 with Turborepo and shadcn/ui'
      }
    ]
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover'
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          'from-background to-secondary/20 min-h-screen bg-gradient-to-br font-sans antialiased'
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}
