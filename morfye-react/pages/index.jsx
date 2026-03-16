import { useState, useEffect } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import OurStory from '../components/OurStory'
import WhoWeAre from '../components/WhoWeAre'
import ServiceCart from '../components/ServiceCart'
import WorkShowcase from '../components/WorkShowcase'
import HomeFaq from '../components/HomeFaq'
import Manifesto from '../components/Manifesto'
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
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://morfye.com/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Morfye" />
        <meta property="og:title" content="Morfye - Modern Websites for Professionals" />
        <meta property="og:description" content="Web design agency in Brussels, Belgium. We build modern, high-converting websites for professionals. Expert in SEO and GEO." />
        <meta property="og:url" content="https://morfye.com/" />
        <meta property="og:image" content="https://morfye.com/morfye-logo.webp" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Morfye - Modern Websites for Professionals" />
        <meta name="twitter:description" content="Web design agency in Brussels, Belgium. Modern, high-converting websites for professionals." />
        <meta name="twitter:image" content="https://morfye.com/morfye-logo.webp" />

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
              "logo": "https://morfye.com/morfye-logo.webp",
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

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "How much does a professional website cost for a small business in Belgium?", "acceptedAnswer": { "@type": "Answer", "text": "Every project is different, but a professional website for a small business in Belgium typically starts from a few hundred euros. The price depends on the number of web pages, features like booking systems or e-commerce, and the level of web development and branding required. We always provide a clear quote before starting — no hidden fees." } },
              { "@type": "Question", "name": "How long does it take to build a website?", "acceptedAnswer": { "@type": "Answer", "text": "A standard small business website with responsive design takes 2 to 4 weeks from start to launch. More complex projects with e-commerce, a content management system (CMS), or custom landing pages can take 4 to 8 weeks." } },
              { "@type": "Question", "name": "What is the difference between SEO and Google Ads (PPC)?", "acceptedAnswer": { "@type": "Answer", "text": "SEO grows your organic search visibility over time — it helps potential customers find you on Google without paying per click. Google Ads (PPC or pay-per-click, formerly AdWords) gives instant visibility by placing your business at the top of search engines for a budget. Both are part of a strong digital marketing strategy." } },
              { "@type": "Question", "name": "Do you build e-commerce websites?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — we build custom e-commerce websites for businesses that want to sell online. Whether you need a simple online shop or a full product catalogue with secure payments, we handle the web development from start to finish." } },
              { "@type": "Question", "name": "What is responsive web design and why does it matter?", "acceptedAnswer": { "@type": "Answer", "text": "Responsive design means your website automatically adapts to any screen size — desktop, tablet, or smartphone. Every website we build is fully responsive. Search engines like Google rank mobile-friendly web pages higher in results." } },
              { "@type": "Question", "name": "Do I need web hosting and a domain name?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — every website needs web hosting and a domain name. We offer managed web hosting plans from €29/month including daily backups, SSL, and 24/7 monitoring. We can also help you register your domain name." } },
              { "@type": "Question", "name": "What is GEO and why does my business need it?", "acceptedAnswer": { "@type": "Answer", "text": "GEO stands for Generative Engine Optimization. It means optimizing your business to be recommended by AI assistants like ChatGPT, Google Gemini, and Claude. As more people use AI instead of traditional search engines, GEO is becoming essential for online marketing and web presence. Morfye is one of the first agencies in Belgium to offer this service." } },
              { "@type": "Question", "name": "Will my website rank on Google and attract potential customers?", "acceptedAnswer": { "@type": "Answer", "text": "Every website we build is search-engine optimized from day one. We also offer dedicated SEO and inbound marketing services to grow your organic search rankings, reach your target audience, and bring in potential customers consistently." } },
              { "@type": "Question", "name": "What happens after my website is launched?", "acceptedAnswer": { "@type": "Answer", "text": "We offer hosting and maintenance plans from €29/month including daily backups, security monitoring, SSL certificates, and priority support. We help you grow your web presence with SEO, online marketing, and content updates." } }
            ]
          }) }}
        />
      </Head>

      <Header darkMode={darkMode} toggleTheme={() => setDarkMode(!darkMode)} />
      <Hero />
      <OurStory />
      <WhoWeAre />
      <ServiceCart />
      <WorkShowcase />
      <Manifesto />
      <HomeFaq />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  )
}
