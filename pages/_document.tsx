import Document, { Html, Head, Main, NextScript } from "next/document";

class CustomDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          {/* <link rel='icon' type='image/x-icon' href='/logo_horizon.ico' /> */}
          <link rel="icon" type="image/x-icon" href="/fav.ico" />
          <meta name="description" content="Welcome to Hero Arena" />
          <meta property="og:title" content="Hero Arena NFT" />
          <meta property="og:url" content="https://heroarena.app/" />
          <meta property="og:image" content="/img/banners/banner-1.png" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Hero Arena" />
          <meta property="og:image:alt" content="Visit heroarena.app" />
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
        </Head>
        <body
          data-bs-spy="scroll"
          data-bs-target="#scroll-page"
          data-bs-offset="50"
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
