import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>
      <body suppressHydrationWarning>
        {/* Apply dark/light class before React hydrates to prevent FOUC and LCP delay */}
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('theme');if(!t||t==='dark')document.body.classList.add('dark-mode');else document.body.classList.add('light-mode');}catch(e){document.body.classList.add('dark-mode');}})();` }} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
