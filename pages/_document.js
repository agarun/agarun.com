import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
import { GA_TRACKING_ID } from '../lib/gtag';
import packageInfo from '../package.json';

function GoogleAnalyticsScript() {
  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
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

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <GoogleAnalyticsScript />

          <meta name="theme-color" content="#000000" />
          <meta name="msapplication-TileColor" content="#000000" />

          <meta name="build version" content={packageInfo.version} />
          <meta name="description" content="Aaron Agarunov's portfolio" />

          <link
            href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
