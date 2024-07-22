import localFont from 'next/font/local'
import '../styles/globals.css';// Font files can be colocated inside of `pages`
// const denton = localFont({ src: './public/denton.otf' })
// const gilroy = localFont({ src: './public/gilroy.ttf' })


// const denton1 = localFont({ src: './public/font' })
// const gilroy2 = localFont({ src: './public/gilroy.ttf' })

export default function MyApp({ Component, pageProps }: any) {
  return (
    <main  >
      <Component {...pageProps} />
    </main>

  )
}