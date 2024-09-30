import '@/styles/globals.css'
import { Open_Sans } from 'next/font/google'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

const open = Open_Sans({
  weight: '400',
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider >
      <main className={open.className}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  )
}
