import { GA_TRACKING_ID } from '../lib/gtag';

export const isEnabled =
  GA_TRACKING_ID && process.env.NODE_ENV === 'production';

function GoogleAnalyticsScript() {
  if (!isEnabled) {
    return null;
  }

  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <script
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
