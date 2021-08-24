import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as gtag from '../lib/gtag';
import ColorModesScript from '../components/ColorModesScript';
import GoogleAnalyticsScript from '../components/GoogleAnalyticsScript';

import '../styles/variables.css';
import '../styles/normalize.css';
import '../styles/global.css';

const isProduction = process.env.NODE_ENV === 'production';

function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <ColorModesScript />
      {isProduction && gtag.GA_TRACKING_ID && <GoogleAnalyticsScript />}
      <Component {...pageProps} />
    </>
  );
}

export default App;
