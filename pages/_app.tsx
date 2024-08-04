import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Component {...pageProps} />
      <Script src="https://scripts.simpleanalyticscdn.com/latest.js"  />
      <noscript>
        {/* eslint-disable @next/next/no-img-element */}
        <img
          src="https://queue.simpleanalyticscdn.com/noscript.gif"
          alt=""
          referrerPolicy="no-referrer-when-downgrade"
        />
      </noscript>
    </React.Fragment>
  );
}

export default MyApp;
