import Script from 'next/script';
import { GA_TRACKING_ID } from '../lib/gtag';

function GoogleAnalyticsScript() {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${GA_TRACKING_ID}', {
  page_path: window.location.pathname,
  });
  `,
        }}
      />
    </>
  );
}

export default GoogleAnalyticsScript;
