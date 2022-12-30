import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        {/* document에 myportal이라는 div가 생성됨 */}
        <div id="myportal"></div>
        <NextScript />
      </body>
    </Html>
  )
}
