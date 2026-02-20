import { useState, useEffect } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import OurStory from '../components/OurStory'
import WhoWeAre from '../components/WhoWeAre'
import ServiceShowcase from '../components/ServiceShowcase'
import WorkShowcase from '../components/WorkShowcase'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

export default function Home() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    if (localStorage.getItem('theme') === 'light') {
      setDarkMode(false)
    }
  }, [])

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode)
    document.body.classList.toggle('light-mode', !darkMode)
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header')
      if (window.scrollY > 80) header?.classList.add('scrolled')
      else header?.classList.remove('scrolled')
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Head>
        <title>Morfye - Modern Websites for Professionals | Web Design Agency Belgium</title>
        <meta name="description" content="Morfye is a web design agency in Brussels, Belgium. We build modern, high-converting websites for professionals. Expert in SEO, GEO (Generative Engine Optimization), and web development." />
        <meta name="keywords" content="web design Belgium, website development Brussels, SEO Belgium, GEO optimization, Generative Engine Optimization, web agency Belgium, modern websites, professional websites" />
        <link rel="canonical" href="https://morfye.com/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Morfye" />
        <meta property="og:title" content="Morfye - Modern Websites for Professionals" />
        <meta property="og:description" content="Web design agency in Brussels, Belgium. We build modern, high-converting websites for professionals. Expert in SEO and GEO." />
        <meta property="og:url" content="https://morfye.com/" />
        <meta property="og:image" content="https://morfye.com/Untitled-3.png" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Morfye - Modern Websites for Professionals" />
        <meta name="twitter:description" content="Web design agency in Brussels, Belgium. Modern, high-converting websites for professionals." />
        <meta name="twitter:image" content="https://morfye.com/Untitled-3.png" />

        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap" rel="stylesheet" />
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Morfye",
              "url": "https://morfye.com",
              "logo": "https://morfye.com/Untitled-3.png",
              "description": "Morfye is a web design agency in Brussels, Belgium specializing in modern, high-converting websites for professionals. Services include web design, SEO, GEO (Generative Engine Optimization), hosting, and SEA campaigns.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Brussels",
                "addressCountry": "BE"
              },
              "areaServed": {
                "@type": "Country",
                "name": "Belgium"
              },
              "knowsAbout": [
                "Web Design",
                "Web Development",
                "SEO",
                "Generative Engine Optimization",
                "GEO",
                "Search Engine Advertising",
                "Website Hosting"
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Morfye",
              "url": "https://morfye.com"
            },
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Morfye",
              "url": "https://morfye.com",
              "description": "Web design agency building modern, high-converting websites for professionals in Belgium.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Brussels",
                "addressRegion": "Brussels",
                "addressCountry": "BE"
              },
              "areaServed": "Belgium",
              "priceRange": "$$",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Web Services",
                "itemListElement": [
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Design & Development" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEO - Search Engine Optimization" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "GEO - Generative Engine Optimization" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hosting & Maintenance" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEA - Search Engine Advertising" } }
                ]
              }
            }
          ]) }}
        />
      </Head>

      <Header darkMode={darkMode} toggleTheme={() => setDarkMode(!darkMode)} />
      <Hero />
      <OurStory />
      <WhoWeAre />
      <ServiceShowcase />
      <WorkShowcase />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  )
}
