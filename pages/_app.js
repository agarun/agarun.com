import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as gtag from '../lib/gtag';
import ThemeProvider from '../components/ThemeProvider';
import { isEnabled } from '../components/GoogleAnalyticsScript';

import '../styles/variables.css';
import '../styles/normalize.css';
import '../styles/global.css';

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
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;

// https://github.com/GoogleChrome/web-vitals#using-gtagjs-universal-analytics
export function reportWebVitals({ id, name, label, value }) {
  if (isEnabled) {
    gtag.event({
      action: name,
      category: label,
      value: Math.round(name === 'CLS' ? value * 1000 : value), // integers only
      label: id, // id unique to current page load
      non_interaction: true, // avoids affecting bounce rate
    });
  }
}
