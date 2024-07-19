import localFont from 'next/font/local'

// Font files can be colocated inside of `pages`
const myFont = localFont({ src: './public/denton.otf' })
const gilroy = localFont({ src: './public/gilroy.ttf' })


export default function MyApp({ Component, pageProps }: any) {
  return (
    <main className={`${myFont.className} ${gilroy.className}`} >
      <Component {...pageProps} />
    </main>

  )
}