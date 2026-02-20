import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import '../styles/globals.css'

gsap.registerPlugin(ScrollTrigger)

export default function App({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    // Kill all GSAP ScrollTrigger instances BEFORE React unmounts the page.
    // Without this, ScrollTrigger's pinned spacer divs cause "removeChild" errors
    // during client-side navigation because React's unmount and GSAP's cleanup race.
    const handleRouteChange = () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
    router.events.on('routeChangeStart', handleRouteChange)
    return () => router.events.off('routeChangeStart', handleRouteChange)
  }, [router.events])

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0a0a0f" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
