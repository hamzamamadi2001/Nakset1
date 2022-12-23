import '../styles/globals.css'
 import Nav from '../components/nav'
import Fot from '../components/footer'
import { NextUIProvider } from '@nextui-org/react';
import {SessionProvider} from 'next-auth/react'
import Head from 'next/head'
import { Provider } from 'react-redux';
import {persistor,store} from '../store'
import { PersistGate } from 'redux-persist/integration/react';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store ={store}>
      <PersistGate loading={null} persistor={persistor}>
    <SessionProvider session={pageProps.session}>
      <Head >
        <meta charSet="utf-8" />


        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
<Nav></Nav>
           <Component {...pageProps} />


<Fot></Fot>
    </SessionProvider>
      </PersistGate>
            </Provider>)
          }

export default MyApp
