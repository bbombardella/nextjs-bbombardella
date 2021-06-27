import Head from 'next/head'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Bastien</title>
        <link href="https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap" rel="stylesheet"></link>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
