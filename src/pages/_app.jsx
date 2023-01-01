// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';

import '../styles/globals.css';
import '../components/swiper/swiper.css';

import Layout from '../components/layout/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Neurology & Neuro Rehabilitation</title>

        <meta
          name='Neurology and Neuro Rehabilitation'
          content='Neurology/Sleep/Physical Therapy in Arizona'
        />
        <meta name='author' content='James Wingert' />
      </Head>
      <Layout>
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </>
  );
}

export default MyApp;
