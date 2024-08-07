// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required
import { Inter,Playfair_Display } from 'next/font/google'
import { cn } from '@/lib/utils'
import './globals.css'
import Script from 'next/script'
import HEAD from 'next/head'

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
 
const fontFairplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

export default function Layout({ children }: any) {
  
  return (
    <html lang="en"><head>
     <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.1/gsap.min.js" ></script>
      <script type="text/javascript" src="/script.js"></script>
    </head>
      <body
        className={cn(
          'antialiased',
          fontHeading.variable,
          fontBody.variable,fontFairplay.variable
        )}
      >
        {children}

      </body>
    </html>
  )
}