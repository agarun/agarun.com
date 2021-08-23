import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as gtag from '../lib/gtag';
import ColorModesScript from '../components/ColorModesScript';
import GoogleAnalyticsScript from '../components/GoogleAnalyticsScript';
import '../styles/variables.css';
import '../styles/normalize.css';

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
      <GoogleAnalyticsScript />
      <Component {...pageProps} />
    </>
  );
}

export default App;
