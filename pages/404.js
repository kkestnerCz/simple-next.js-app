import Head from 'next/head'
import Link from 'next/link'

// custom components
import Layout from '../components/Layout'

export default function PageWithGoodName() {
  return (
    <>
      <Head>
        <title>Simple Next.js App - custom 404</title>
        <meta name="description" content="custom 404, you never know.." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <h1>custom 404</h1>
        <p>
          I also created custom 404 page. 
          <Link href="/">
            <a><u>Here you can go to homePage..</u></a>
          </Link>
        </p>
      </Layout>
    </>
  )
}
