import { useState, useEffect } from 'react'
import Head from 'next/head'
import ServiceHeader from './ServiceHeader'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'

export default function ServicePageLayout({ title, description, keywords, navLinks, slug, faqs, defaultDark = false, children }) {
  const [darkMode, setDarkMode] = useState(defaultDark)

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    if (stored) setDarkMode(stored === 'dark')
  }, [])

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode)
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  const pageUrl = `https://morfye.com/${slug || ''}`

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        {keywords && <meta name="keywords" content={keywords} />}
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Morfye" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content="https://morfye.com/Untitled-3.png" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />

        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />

        {/* Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": title.split(' | ')[0],
            "description": description,
            "url": pageUrl,
            "provider": {
              "@type": "Organization",
              "name": "Morfye",
              "url": "https://morfye.com"
            },
            "areaServed": { "@type": "Country", "name": "Belgium" }
          }) }}
        />

        {/* FAQ Schema */}
        {faqs && faqs.length > 0 && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map(f => ({
                "@type": "Question",
                "name": f.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": f.answer
                }
              }))
            }) }}
          />
        )}
      </Head>

      <ServiceHeader
        darkMode={darkMode}
        toggleTheme={() => setDarkMode(!darkMode)}
        navLinks={navLinks || []}
      />
      {children}
      <Footer />
      <ScrollToTop />
    </>
  )
}
