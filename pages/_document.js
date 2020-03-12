import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Orbitron"
            rel="stylesheet"
            key="google-font-Orbitron"
          />
          <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet" />
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>

          <style>{`body { margin: 0 } /* custom! */`}</style>
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;