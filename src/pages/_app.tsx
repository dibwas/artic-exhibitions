// import { AppProps } from 'next/app';
import React from 'react';
import '@/styles/global.css';
import Layout from '@/components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

export default function MyApp({ Component, pageProps }) {
  console.log(pageProps)
  return (
    <Layout {...pageProps}>
      <Component {...pageProps} />
    </Layout >
  )
}



