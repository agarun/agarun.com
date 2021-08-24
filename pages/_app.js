import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as gtag from '../lib/gtag';
import GoogleAnalyticsScript from '../components/GoogleAnalyticsScript';
import ThemeProvider from '../components/ThemeProvider';

import '../styles/variables.css';
import '../styles/normalize.css';
import '../styles/global.css';

const isProduction = process.env.NODE_ENV === 'production';
const isGoogleAnalyticsEnabled = isProduction && gtag.GA_TRACKING_ID;

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
      {isGoogleAnalyticsEnabled && <GoogleAnalyticsScript />}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;

export function reportWebVitals({ id, name, label, value }) {
  if (isGoogleAnalyticsEnabled) {
    gtag.event({
      action: name,
      category: label,
      value: Math.round(name === 'CLS' ? value * 1000 : value), // integers only
      label: id, // id unique to current page load
      non_interaction: true, // avoids affecting bounce rate
    });
  }
}
