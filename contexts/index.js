import { SomeCtxProvider } from './someContext'

// here you can add more providers

export default function AppProviders({ children, pageProps }) {
  return (
    <SomeCtxProvider>
        {children}
    </SomeCtxProvider>
  )
}