// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import './globals.css'
import Script from 'next/script'

const fontHeading = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

const fontBody = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

export default function Layout({ children }: any) {
  return (
    <html lang="en"><head>
     <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.1/gsap.min.js" ></Script>
      <Script type="text/javascript" src="/script.js"></Script>
    </head>
      <body
        className={cn(
          'antialiased',
          fontHeading.variable,
          fontBody.variable
        )}
      >
        {children}

      </body>
    </html>
  )
}