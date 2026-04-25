import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Script from 'next/script'
import { Poppins } from 'next/font/google'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import '../styles/globals.css'
import CookieBanner from '../components/CookieBanner'
import { LanguageProvider } from '../contexts/LanguageContext'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'optional',
  variable: '--font-poppins',
})

const GA_ID = 'G-K07QYXSML5'

gsap.registerPlugin(ScrollTrigger)

export default function App({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
    router.events.on('routeChangeStart', handleRouteChange)
    return () => router.events.off('routeChangeStart', handleRouteChange)
  }, [router.events])

  return (
    <LanguageProvider>
      <div className={poppins.variable}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#0a0a0f" />
        </Head>

        <Script id="ga-consent-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            analytics_storage: 'denied',
            ad_storage: 'denied',
            wait_for_update: 500
          });
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { send_page_view: false });
        `}</Script>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />

        <Component {...pageProps} />
        <CookieBanner />
      </div>
    </LanguageProvider>
  )
}
