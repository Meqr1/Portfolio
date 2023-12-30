import '../styles/global.css';
import Layout from '../components/layout';
import ProfileImage from '../components/profileImage'
import ScrollChange from '../components/ScrollChange';
import Head from 'next/head';

function Main({ Component, pageProps }) {
  return (
    <ScrollChange >
    <Head>
        <title>MQuery's - Home</title>
      </Head>
    <Layout>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet" />
        <div className='Content-Container'>
          <div>
            <ProfileImage />
            <h3 className={`text text-2xl`}>MQuery</h3>
            <p><font style={{fontFamily: 'Roboto Mono'}}>Full Stack developer</font> / <font style={{fontFamily: 'Caveat, cursive'}}>Artist</font></p>
          <hr />
          <br />
          <Component {...pageProps} />
          </div>
        </div>
      </Layout>
      </ScrollChange>
  )
}

export default Main
