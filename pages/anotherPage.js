import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function anotherPage() {
  return (
    <>
      <Head>
        <title>Simple Next.js App - another page</title>
        <meta name="description" content="some regular page, will be used for another exaples" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <h1>another page</h1>
        <p>Not using any context</p>
        <br/>
        <p>
          <Link href="/">
            <a>back to homepage</a>
          </Link>
        </p>
      </Layout>
    </>
  )
}
