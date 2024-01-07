import '../styles/global.css';
import Layout from '../components/layout';
import ScrollChange from '../components/ScrollChange';
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
    <ScrollChange >
      {loading ? (
        <Loading />
      ) : 
      (
      <>
      <Head>
        <title>MQuery's - Home</title>
      </Head>
    <Layout>
              <Component {...pageProps} />
    </Layout>
      </>
      )}
  </ScrollChange>
  )
}

export default Main
