import type { AppProps } from 'next/app';
import {useEffect, useState} from 'react';
import Head from 'next/head';

import  Container from '@root/components/organisms/Container';
import '../i18n/i18n';

import '@styles/globals.css';
import {GlobalStyle} from '@styles/globalStyles';
import '@antd-theme/antd-customized.css';

export default function App({ Component, pageProps }: AppProps) {
  const [rerender, setRerender] = useState(false);
  
  useEffect(() => setRerender(true), []);
  
  if(!rerender) return null;

  return(
    <>
      <Head>
        <title>Svit - Smart Houses</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="React Typescript" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600;800&display=swap" rel="stylesheet" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
      </Head>
      
      <GlobalStyle />
      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  );
};
