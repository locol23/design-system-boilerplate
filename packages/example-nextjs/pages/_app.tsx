import type { AppProps } from 'next/app'
import '../node_modules/@locol23/component-library/dist/style.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
