import Document, { Html, Head, Main, NextScript } from 'next/document';
import packageInfo from '../package.json';

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
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
