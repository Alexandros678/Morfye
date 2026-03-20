import { useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import ServicePageLayout from '../components/ServicePageLayout'
import FaqItem from '../components/FaqItem'

gsap.registerPlugin(ScrollTrigger)

const MonitorIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="8" width="40" height="28" rx="3" stroke="currentColor" strokeWidth="2" />
    <line x1="16" y1="40" x2="32" y2="40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="24" y1="36" x2="24" y2="40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="4" y1="30" x2="44" y2="30" stroke="currentColor" strokeWidth="1.5" />
    <rect x="10" y="14" width="14" height="10" rx="1" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
    <line x1="28" y1="16" x2="38" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    <line x1="28" y1="20" x2="35" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
  </svg>
)

const PhoneIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="14" y="4" width="20" height="40" rx="4" stroke="currentColor" strokeWidth="2" />
    <line x1="14" y1="12" x2="34" y2="12" stroke="currentColor" strokeWidth="1.5" />
    <line x1="14" y1="36" x2="34" y2="36" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="24" cy="40" r="1.5" stroke="currentColor" strokeWidth="1.2" />
    <rect x="18" y="16" width="12" height="16" rx="1" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
  </svg>
)

const CodeIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 14L6 24L16 34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M32 14L42 24L32 34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="28" y1="8" x2="20" y2="40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
  </svg>
)

const GeoReadyIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2" />
    <path d="M24 6C24 6 16 14 16 24C16 34 24 42 24 42" stroke="currentColor" strokeWidth="1.5" />
    <path d="M24 6C24 6 32 14 32 24C32 34 24 42 24 42" stroke="currentColor" strokeWidth="1.5" />
    <path d="M30 12L36 16L30 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="6" y1="24" x2="42" y2="24" stroke="currentColor" strokeWidth="1.5" />
  </svg>
)

const CartIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 6H10L14 30H38L42 14H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="18" cy="38" r="3" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="34" cy="38" r="3" stroke="currentColor" strokeWidth="1.5" />
    <line x1="22" y1="20" x2="34" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
  </svg>
)

const GearIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="2" />
    <path d="M24 4V10M24 38V44M4 24H10M38 24H44M9.2 9.2L13.4 13.4M34.6 34.6L38.8 38.8M38.8 9.2L34.6 13.4M13.4 34.6L9.2 38.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M24 4L26 10H22L24 4Z" stroke="currentColor" strokeWidth="1" opacity="0.4" />
  </svg>
)

const navLinks = [
  { id: 'what-we-do', label: 'What We Do' },
  { id: 'our-features', label: 'Features' },
  { id: 'our-process', label: 'Our Process' },
  { id: 'faq', label: 'FAQ' }
]

const features = [
  { icon: <MonitorIcon />, title: 'Stunning Visual Design', description: "We design your beautiful website with fully customizable visuals that capture your brand's unique identity and impress visitors from the first second." },
  { icon: <PhoneIcon />, title: 'Fully Responsive', description: 'Your site will look and work perfectly on all devices — desktops, tablets, and smartphones.' },
  { icon: <CodeIcon />, title: 'SEO-Optimized', description: 'Built from the ground up with SEO best practices to rank high on Google and attract organic traffic.' },
  { icon: <GeoReadyIcon />, title: 'GEO Ready', description: "We optimize your site for AI, ensuring you're recommended by ChatGPT, Gemini, and Claude." },
  { icon: <CartIcon />, title: 'E-Commerce Solutions', description: 'Ready to sell online? We build secure, easy-to-manage online stores that drive sales.' },
  { icon: <GearIcon />, title: 'Easy to Manage', description: 'We provide intuitive, user-friendly CMS platforms with drag-and-drop editing, widgets, and sidebar management — no coding needed.' }
]

const steps = [
  { title: 'Discovery & Strategy', description: 'We start by learning about your business, goals, and target audience. We define the project scope and create a strategic plan for your website.' },
  { title: 'Design & Prototyping', description: "Our team creates wireframes and visual mockups. You'll see exactly how your site will look and feel before we write a single line of code." },
  { title: 'Development', description: "This is where the magic happens. We build your website using clean, modern code, ensuring it's fast, secure, and perfectly responsive." },
  { title: 'Review & Launch', description: 'We test everything thoroughly on all browsers and devices. After your final approval, we deploy the site live to the world.' },
  { title: 'Training & Support', description: 'We show you how to manage your new site and provide ongoing support to keep it running smoothly.' }
]

const faqs = [
  { question: 'How much does a new website cost?', answer: 'It depends on scope. Building a website ranges from a simple personal website or one-page business website to a full e-commerce platform. Creating a website with a professional agency is an investment — but it delivers the best website for your goals. To create your website properly and truly convert visitors, you need more than a generic website template. We build your website from scratch and provide a custom, no-obligation quote after a discovery call.' },
  { question: 'Should I use WordPress, Shopify, Squarespace, or a custom solution?', answer: 'It depends on your goals. WordPress is the most popular content management system (CMS) and is ideal for most business websites — using WordPress, you get a highly customizable platform with thousands of plugins, widgets, and themes, and the WordPress dashboard makes managing content simple. A WordPress website supports blogging, ecommerce, and more; you can install WordPress with one click through providers like Bluehost. Joomla and Drupal are also powerful CMS options worth considering. Site builders like Squarespace, Wix, and Weebly are easy-to-use drag and drop website builders — great for beginners who want to create your own website or build your own website quickly. While you can start a website for free with these tools, a free website builder has real limits. For a truly unique custom website, we recommend custom web design — solutions that rank far better on search engines and create your website with a lasting competitive advantage.' },
  { question: 'What is the difference between a web designer and a web developer?', answer: 'A web designer focuses on the visual and user-experience (UX) side — layout, branding, fonts, colors, call-to-action placement, and how web pages feel. A web developer writes the code that makes it all work. At Morfye, our team covers both: we design and develop your own website end-to-end, from concept to live, mobile-friendly, responsive design.' },
  { question: 'How do I make my website show up on Google?', answer: 'Every website we build includes search engine optimization (SEO) from day one — clean URLs, proper title tags, meta descriptions, fast load times, and mobile-friendly responsive design for all devices. We also help with ongoing SEO services so your web pages rank in search engine results and attract organic traffic without needing to advertise.' },
  { question: 'Will I be able to update the website myself?', answer: 'Yes. We build on intuitive platforms with a user-friendly CMS and provide full training, video tutorials, and documentation so you can manage web pages, add blog posts, update your sidebar, manage widgets, and make your website content changes yourself — no web developer needed for day-to-day updates.' },
  { question: 'Do you build ecommerce websites and online stores?', answer: 'Yes — we build ecommerce websites that sell products, services, and digital downloads. Whether you prefer Shopify or a custom solution, we design the online store, set up payments, and optimize it for mobile devices and search engines. Your ecommerce website will be your best sales tool.' },
  { question: 'What is web hosting and do I need a domain name?', answer: 'Web hosting is the server where your website files live — your web host determines your site\'s speed, uptime, and bandwidth. Domain names and a hosting service are the two essentials you need to set up a website and go live. Your own domain name (like yourbusiness.be) is your address online — you can register a domain or add a new domain to your account. Hosting providers like Bluehost offer one-click WordPress installation and often include a free domain name for the first year along with unlimited bandwidth. We offer managed hosting plans starting from €29/month — every hosting plan includes SSL, daily backups, and 24/7 monitoring. We handle everything to set up your hosting so your site is up-and-running from day one.' },
  { question: 'Do you provide website hosting and maintenance?', answer: 'Yes. We offer monthly hosting and maintenance plans from €29/month that include secure hosting, daily backups, security updates, plugin management, and technical support. We keep your website running so you can focus on your business.' },
  { question: 'Do I need to know HTML and CSS to get a website built?', answer: 'Not at all. You do not need to know HTML and CSS to create a website with us or to manage it after launch. We handle everything — from how to create your site structure to setting up your hosting and writing all the code. After launch, your CMS will be intuitive enough that you can create your own content updates without any technical knowledge. HTML and CSS are the building blocks of every web page, but day-to-day website building and content management requires no coding on your part.' },
  { question: 'What is the difference between SEO and GEO?', answer: 'SEO (search engine optimization) helps you rank on Google and other search engines. GEO (Generative Engine Optimization) helps you get recommended by AI assistants like ChatGPT and Google Gemini. We build every website to be optimized for both.' }
]

export default function WebsiteDesign() {
  const heroRef = useRef(null)
  const explainerRef = useRef(null)
  const featuresRef = useRef(null)
  const processRef = useRef(null)
  const stepsRef = useRef([])
  const currentRef = useRef(0)
  const isAnimating = useRef(false)
  const timerRef = useRef(null)
  const faqRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.from('.geo-hero-label', { opacity: 0, y: 20, duration: 0.6 })
      tl.from('.geo-hero-title', { opacity: 0, y: 40, duration: 0.8 }, '-=0.3')
      tl.from('.geo-hero-subtitle-line', { opacity: 0, y: 30, duration: 0.7, stagger: 0.15 }, '-=0.4')
      tl.from('.geo-hero-scroll', { opacity: 0, duration: 0.5 }, '-=0.2')
      hero.querySelectorAll('.geo-particle').forEach((p) => {
        gsap.to(p, { y: `${-100 - Math.random() * 200}`, x: `${(Math.random() - 0.5) * 100}`, opacity: 0, duration: 3 + Math.random() * 4, repeat: -1, delay: Math.random() * 3, ease: 'power1.out' })
      })
    }, hero)
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    const section = explainerRef.current
    if (!section) return
    const ctx = gsap.context(() => {
      gsap.from('.geo-explainer-number', { scale: 0.5, opacity: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: section, start: 'top 75%', toggleActions: 'play none none none' } })
      gsap.from('.geo-explainer-line', { scaleX: 0, duration: 1, ease: 'power2.out', scrollTrigger: { trigger: section, start: 'top 75%', toggleActions: 'play none none none' } })
      gsap.from('.geo-explainer-heading', { y: 40, opacity: 0, duration: 0.8, scrollTrigger: { trigger: section, start: 'top 75%', toggleActions: 'play none none none' } })
      gsap.from('.geo-explainer-text p', { y: 30, opacity: 0, duration: 0.6, stagger: 0.15, scrollTrigger: { trigger: section, start: 'top 70%', toggleActions: 'play none none none' } })
    }, section)
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    const section = featuresRef.current
    if (!section) return
    const ctx = gsap.context(() => {
      gsap.from('.geo-features-heading', { y: 50, opacity: 0, duration: 0.8, scrollTrigger: { trigger: section, start: 'top 80%', toggleActions: 'play none none none' } })
    }, section)
    return () => ctx.revert()
  }, [])

  const goTo = useCallback((nextIndex) => {
    if (isAnimating.current) return
    const sceneEls = stepsRef.current.filter(Boolean)
    if (!sceneEls.length || nextIndex === currentRef.current) return
    const prev = sceneEls[currentRef.current]
    const next = sceneEls[nextIndex]
    isAnimating.current = true
    currentRef.current = nextIndex
    const progressFill = processRef.current?.querySelector('.geo-process-fill')
    if (progressFill) gsap.to(progressFill, { scaleY: (nextIndex + 1) / steps.length, duration: 0.5, ease: 'power2.out' })
    gsap.to(prev, {
      opacity: 0, y: -60, duration: 0.4, ease: 'power2.in',
      onComplete: () => {
        gsap.set(prev, { y: 80 })
        gsap.fromTo(next, { opacity: 0, y: 80 }, { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out', onComplete: () => { isAnimating.current = false } })
      }
    })
  }, [])

  const startTimer = useCallback(() => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => { goTo((currentRef.current + 1) % steps.length) }, 3500)
  }, [goTo])

  useEffect(() => {
    const container = processRef.current
    if (!container) return
    const ctx = gsap.context(() => {
      stepsRef.current.filter(Boolean).forEach((s, i) => gsap.set(s, { opacity: i === 0 ? 1 : 0, y: i === 0 ? 0 : 80 }))
      const progressFill = container.querySelector('.geo-process-fill')
      if (progressFill) gsap.set(progressFill, { scaleY: 1 / steps.length })
      container.querySelectorAll('.geo-particle').forEach((p) => {
        gsap.to(p, { y: `${-100 - Math.random() * 200}`, x: `${(Math.random() - 0.5) * 100}`, opacity: 0, duration: 4 + Math.random() * 4, repeat: -1, delay: Math.random() * 3, ease: 'power1.out' })
      })
    }, container)
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    const container = processRef.current
    if (!container) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) startTimer()
      else clearInterval(timerRef.current)
    }, { threshold: 0.4 })
    observer.observe(container)
    return () => { observer.disconnect(); clearInterval(timerRef.current) }
  }, [startTimer])

  const handlePrev = () => { goTo((currentRef.current - 1 + steps.length) % steps.length); startTimer() }
  const handleNext = () => { goTo((currentRef.current + 1) % steps.length); startTimer() }

  useEffect(() => {
    const section = faqRef.current
    if (!section) return
    const ctx = gsap.context(() => {
      gsap.from('.geo-faq-heading', { y: 40, opacity: 0, duration: 0.8, scrollTrigger: { trigger: section, start: 'top 80%', toggleActions: 'play none none none' } })
    }, section)
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    const section = ctaRef.current
    if (!section) return
    const ctx = gsap.context(() => {
      gsap.from('.geo-cta-content', { y: 50, opacity: 0, duration: 0.8, scrollTrigger: { trigger: section, start: 'top 80%', toggleActions: 'play none none none' } })
      section.querySelectorAll('.geo-particle').forEach((p) => {
        gsap.to(p, { y: `${-60 - Math.random() * 100}`, x: `${(Math.random() - 0.5) * 60}`, opacity: 0, duration: 2 + Math.random() * 3, repeat: -1, delay: Math.random() * 2, ease: 'power1.out' })
      })
    }, section)
    return () => ctx.revert()
  }, [])

  return (
    <ServicePageLayout
      title="Professional Website Design | Morfye"
      description="Beautiful, Responsive, and AI-Optimized Websites That Grow Your Business. Based in Brussels, Belgium."
      navLinks={navLinks}
      slug="website-design"
      faqs={faqs}
      defaultDark
    >
      <div className="geo-page">

        {/* HERO */}
        <section ref={heroRef} className="geo-hero">
          <div className="geo-hero-particles">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="geo-particle" style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, width: `${Math.random() * 4 + 1}px`, height: `${Math.random() * 4 + 1}px` }} />
            ))}
          </div>
          <div className="geo-hero-content">
            <div className="geo-hero-label">YOUR DIGITAL FOUNDATION</div>
            <h1 className="geo-hero-title">WEB</h1>
            <p className="geo-hero-subtitle-line">Professional Website Design</p>
            <p className="geo-hero-subtitle-line geo-hero-desc">Beautiful, responsive, and AI-optimized websites that grow your business.</p>
          </div>
          <div className="geo-hero-scroll">
            <span>Scroll</span>
            <div className="geo-hero-scroll-line" />
          </div>
        </section>

        {/* WHAT WE DO */}
        <section ref={explainerRef} className="geo-explainer" id="what-we-do">
          <div className="geo-explainer-grid">
            <div className="geo-explainer-side">
              <div className="geo-explainer-number">01</div>
              <div className="geo-explainer-icon"><MonitorIcon /></div>
            </div>
            <div className="geo-explainer-text">
              <div className="geo-explainer-line" />
              <h2 className="geo-explainer-heading">More Than Just a Pretty Website</h2>
              <p>In today&apos;s digital world, your website is your <strong>most important employee</strong> — working 24/7 so customers can find you online. Whether you&apos;re wondering how to create a website, how to build a website, or how to make a website that stands out from the competition, the answer starts with strategy. Building websites is a craft: website creation done right attracts visitors, earns trust, and converts. A slow, confusing, or outdated website doesn&apos;t just look bad — it actively loses you customers.</p>
              <p>At Morfye, our web designers design your website as a beautiful, fully customizable strategic asset designed to attract, engage, and convert. From sleek one-page sites to complex e-commerce platforms, we deliver experiences that are fast, responsive, and built to rank.</p>
              <p>Crucially, our websites are optimized from day one for both traditional <strong>SEO</strong> and the new <strong>GEO (Generative Engine Optimization)</strong>, ensuring you&apos;re recommended by AI assistants like ChatGPT and Gemini.</p>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section ref={featuresRef} className="geo-features" id="our-features">
          <h2 className="geo-features-heading">Our Website Design Features</h2>
          <div className="geo-features-grid">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                className="geo-feature-card"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
                whileHover={{ y: -8 }}
              >
                <div className="geo-feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PROCESS */}
        <section ref={processRef} className="geo-process" id="our-process" onMouseEnter={() => clearInterval(timerRef.current)} onMouseLeave={startTimer}>
          <div className="geo-process-particles">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="geo-particle" style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, width: `${Math.random() * 4 + 1}px`, height: `${Math.random() * 4 + 1}px` }} />
            ))}
          </div>
          <div className="geo-process-progress">
            <div className="geo-process-fill" />
          </div>
          <button className="geo-process-nav-arrow geo-process-nav-prev" onClick={handlePrev} aria-label="Previous step">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 17V5M11 5L5 11M11 5L17 11" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <button className="geo-process-nav-arrow geo-process-nav-next" onClick={handleNext} aria-label="Next step">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 5v12M11 17l6-6M11 17l-6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          {steps.map((step, i) => (
            <div key={i} ref={(el) => (stepsRef.current[i] = el)} className="geo-step">
              <div className="geo-step-counter">{String(i + 1).padStart(2, '0')}</div>
              <h2 className="geo-step-title">{step.title}</h2>
              <p className="geo-step-desc">{step.description}</p>
            </div>
          ))}
        </section>

        {/* FAQ */}
        <section ref={faqRef} className="geo-faq" id="faq">
          <h2 className="geo-faq-heading">Frequently Asked Questions</h2>
          <div className="geo-faq-container">
            {faqs.map((f, i) => (
              <FaqItem key={f.question} index={i} {...f} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <section ref={ctaRef} className="geo-cta-section">
          <div className="geo-cta-particles">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="geo-particle" style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, width: `${Math.random() * 5 + 2}px`, height: `${Math.random() * 5 + 2}px` }} />
            ))}
          </div>
          <div className="geo-cta-content">
            <h2>Ready to Build Your New Website?</h2>
            <p>Ready to build a website that converts? Let&apos;s create something that works as hard as you do. Contact us for a free, no-obligation consultation.</p>
            <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.95 }}>
              <Link href="/#contact" className="geo-cta-btn">Get Your Free Quote</Link>
            </motion.div>
          </div>
        </section>

      </div>
    </ServicePageLayout>
  )
}
