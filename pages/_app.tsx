import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { IBM_Plex_Sans } from 'next/font/google';
import Script from 'next/script';

const ibmPlexSans = IBM_Plex_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ibm-plex-sans',
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={ibmPlexSans.variable}>
      <Component {...pageProps} />
      <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://queue.simpleanalyticscdn.com/noscript.gif"
          alt=""
          referrerPolicy="no-referrer-when-downgrade"
        />
      </noscript>
    </div>
  );
}

export default MyApp;
