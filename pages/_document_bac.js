import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'
import { ServerStyleSheet } from 'styled-components'
export default class MyDocument extends Document {
  render () {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()
    return (
      <html>
        <Head>
          <title>My page</title>
          {styleTags}
        </Head>

        <body style={{height: '100%'}}>
          <div className='root' id='__next'>
            {main}
          </div>
          <NextScript />
        </body>
      </html>
    )
  }
}
