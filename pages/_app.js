import '../styles/globals.css'
import AppProviders from '../contexts'

function MyApp({ Component, pageProps }) {
  return (
  <AppProviders pageProps={pageProps}>
    <Component {...pageProps} />
  </AppProviders>
  )
}

export default MyApp
