import { useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function GeoOptimizationRedirect() {
  const router = useRouter()

  useEffect(() => {
    router.replace('/seo-geo-optimization')
  }, [router])

  return (
    <Head>
      <title>SEO & GEO Optimization Services | Morfye</title>
      <meta httpEquiv="refresh" content="0; url=/seo-geo-optimization" />
      <link rel="canonical" href="https://morfye.com/seo-geo-optimization" />
      <meta name="robots" content="noindex, follow" />
    </Head>
  )
}
