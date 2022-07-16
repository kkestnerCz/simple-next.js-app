import Head from 'next/head'
import Link from 'next/link'

// custom components
import Layout from '../components/Layout'
import SimpleDialog from '../components/SimpleDialog'
import SimpleSnackbar from '../components/SimpleSnackbar'

// MUI components
import { useSomeCtx } from '../contexts/someContext'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'

export default function Index() {
  const data = useSomeCtx()

  return (
    <>
      <Head>
        <title>Simple Next.js App - home page</title>
        <meta name="description" content="homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <h1>main page</h1>
        <p>
          <Link href="/edit">
            <a>Link to edit page</a>
          </Link>
        </p>
        <p>
          <Link href="/anotherPage">
            <a>Link to another page</a>
          </Link>
        </p>
        <p>
          <Link href="/pageWithBadName">
            <a>Link to /pageWithBadName</a>
          </Link>
        </p>
        <p>
          <SimpleDialog/>
        </p>
        <SimpleSnackbar value={data.string}/>
        <br/>
        <Divider>shared by context</Divider>
        <p>{data.string ? 'our value:' : ''}
          <Box component="span" sx={{fontWeight: data.stringFontWeight ? 'bold' : 'normal', fontSize: data.stringFontSize ? data.stringFontSize : '12px'}}>
            {data.string ? data.string : 'please set something in menu > edit'}
          </Box>
        </p>
      </Layout>
    </>
  )
}
