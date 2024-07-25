import localFont from 'next/font/local'
import '../styles/globals.css';// Font files can be colocated inside of `pages`
import { Inter, Playfair_Display, Montserrat } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })
const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

// const denton1 = localFont({ src: './public/font' })
// const gilroy2 = localFont({ src: './public/gilroy.ttf' })

export default function MyApp({ Component, pageProps }: any) {
  return (
    <main className={`${playfairDisplay.variable} ${montserrat.variable}`}>
      <Component {...pageProps} />
    </main>

  )
}