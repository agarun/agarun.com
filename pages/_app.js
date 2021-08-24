import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as gtag from '../lib/gtag';
import GoogleAnalyticsScript from '../components/GoogleAnalyticsScript';
import ThemeProvider from '../components/ThemeProvider';

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
    <ThemeProvider>
      {isProduction && gtag.GA_TRACKING_ID && <GoogleAnalyticsScript />}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
