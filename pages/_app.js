import '../styles/global.css';
import Layout from '../components/layout';
import Loading from '../components/loading'
import Head from 'next/head';
import { useEffect, useState } from 'react';

function Main({ Component, pageProps }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const isLoaded = sessionStorage.getItem('isLoaded')

    if (isLoaded) {
      setLoading(false)
    } else {
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 3000));
      setLoading(false)
      sessionStorage.setItem('isLoaded', 'true')
    }

    fetchData()
    }
  }, [])
  return (
    <>
      {loading ? (
        <Loading />
      ) : 
      (
      <>
      <Head>
        <title>MQuery's - Home</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
<link href="https://fonts.googleapis.com/css2?family=Noto+Serif+Display:ital,wght@1,100&family=Roboto+Mono&display=swap" rel="stylesheet" />
      </Head>
    <Layout>
              <Component {...pageProps} />
    </Layout>
      </>
      )}
    </>
  )
}

export default Main
