import Head from 'next/head'
import Hero from './Home'

export default function Home() {
  return (
    <>
      <Head>
        <title>Catherine Mejias</title>
        <meta name="description" content="OS System" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </>
  )
}
