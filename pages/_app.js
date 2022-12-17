import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { DefaultSeo } from 'next-seo';
import * as gtag from '../lib/gtag';
import ThemeProvider from '../components/ThemeProvider';
import Layout from '../components/Layout';
import { isEnabled } from '../components/GoogleAnalyticsScript';

import '../styles/variables.css';
import '../styles/normalize.css';
import '../styles/global.css';
import '../styles/prism.css';

function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      isEnabled && gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <ThemeProvider>
      <DefaultSeo
        openGraph={{
          type: 'website',
          title: 'Aaron Agarunov',
          site_name: 'Aaron Agarunov',
          description: "Aaron Agarunov's personal site",
          images: [
            {
              url: 'https://i.imgur.com/eKTChaw.png',
              alt: 'generated art image',
            },
          ],
          locale: 'en_US',
          url: 'https://agarun.com',
        }}
        twitter={{
          handle: '@agarune',
          site: '@agarune',
          cardType: 'summary_large_image',
        }}
        canonical={`https://agarun.com${router.asPath}`}
      />

      <Layout>
        <Component {...pageProps} />
      </Layout>
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
