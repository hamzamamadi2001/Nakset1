import '../styles/globals.css'
 import Nav from '../components/nav'
import Fot from '../components/footer'
import { NextUIProvider } from '@nextui-org/react';
import {SessionProvider} from 'next-auth/react'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Head >
        <meta charSet="utf-8" />


        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
<Nav></Nav>
           <Component {...pageProps} />


<Fot></Fot>
  </SessionProvider>)
          }

export default MyApp
