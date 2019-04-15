import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.10.0/antd.css" />
          <meta charSet="utf-8" />
          <link href="https://fonts.googleapis.com/css?family=Fira+Sans:100,200,300,400,500,600,700" rel="stylesheet" />
          <link rel="stylesheet" href="/static/css/global.css" />
          <link rel='stylesheet' type='text/css' href='/static/css/nprogress.css' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}