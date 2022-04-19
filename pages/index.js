import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bella&apos;s</title>
        <meta name="description" content="info about bella" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        {/* sidebar */}
        {/* feed */}
        {/* widgets */}
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
      </main>
    </div>
  )
}
