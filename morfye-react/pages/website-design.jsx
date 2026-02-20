import { useEffect, useRef } from 'react'
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
  { icon: <MonitorIcon />, title: 'Stunning Visual Design', description: "We create custom, modern designs that capture your brand's unique identity and impress visitors from the first second." },
  { icon: <PhoneIcon />, title: 'Fully Responsive', description: 'Your site will look and work perfectly on all devices — desktops, tablets, and smartphones.' },
  { icon: <CodeIcon />, title: 'SEO-Optimized', description: 'Built from the ground up with SEO best practices to rank high on Google and attract organic traffic.' },
  { icon: <GeoReadyIcon />, title: 'GEO Ready', description: "We optimize your site for AI, ensuring you're recommended by ChatGPT, Gemini, and Claude." },
  { icon: <CartIcon />, title: 'E-Commerce Solutions', description: 'Ready to sell online? We build secure, easy-to-manage online stores that drive sales.' },
  { icon: <GearIcon />, title: 'Easy to Manage', description: 'We provide user-friendly Content Management Systems (CMS) so you can update your site yourself.' }
]

const steps = [
  { title: 'Discovery & Strategy', description: 'We start by learning about your business, goals, and target audience. We define the project scope and create a strategic plan for your website.' },
  { title: 'Design & Prototyping', description: "Our team creates wireframes and visual mockups. You'll see exactly how your site will look and feel before we write a single line of code." },
  { title: 'Development', description: "This is where the magic happens. We build your website using clean, modern code, ensuring it's fast, secure, and perfectly responsive." },
  { title: 'Review & Launch', description: 'We test everything thoroughly on all browsers and devices. After your final approval, we deploy the site live to the world.' },
  { title: 'Training & Support', description: 'We show you how to manage your new site and provide ongoing support to keep it running smoothly.' }
]

const faqs = [
  { question: 'How much does a new website cost?', answer: "It depends! A simple one-page website will be less than a large e-commerce store. We provide a custom, no-obligation quote after our initial discovery call." },
  { question: 'How long will it take to build my website?', answer: 'A typical business website takes 4-8 weeks from start to launch, depending on the complexity and how quickly we receive content and feedback from you.' },
  { question: 'Will I be able to update the website myself?', answer: 'Absolutely! We build on easy-to-use platforms and provide full training so you can manage content, add blog posts, and more.' },
  { question: 'Do you provide website hosting and maintenance?', answer: 'We can. We offer optional monthly care plans that include secure hosting, daily backups, security updates, and technical support.' },
  { question: 'What is the difference between SEO and GEO?', answer: 'SEO helps you rank high on Google search results. GEO helps you get recommended by AI assistants. We build our sites to be experts at both.' }
]

export default function WebsiteDesign() {
  const heroRef = useRef(null)
  const explainerRef = useRef(null)
  const featuresRef = useRef(null)
  const processRef = useRef(null)
  const stepsRef = useRef([])
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

  useEffect(() => {
    const container = processRef.current
    if (!container) return
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: container, start: 'top top', end: `+=${steps.length * 100}%`, pin: true, scrub: 1 }
      })
      stepsRef.current.forEach((step, i) => {
        if (i === 0) return
        const prev = stepsRef.current[i - 1]
        tl.to(prev, { opacity: 0, y: -60, duration: 0.4, ease: 'power2.in' })
        tl.fromTo(step, { opacity: 0, y: 80 }, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' })
      })
      const lastStep = stepsRef.current[steps.length - 1]
      if (lastStep) tl.to(lastStep, { opacity: 0, y: -40, duration: 0.3, ease: 'power2.in' })
      const progressFill = container.querySelector('.geo-process-fill')
      if (progressFill) {
        gsap.to(progressFill, { scaleY: 1, ease: 'none', scrollTrigger: { trigger: container, start: 'top top', end: `+=${steps.length * 100}%`, scrub: true } })
      }
      container.querySelectorAll('.geo-particle').forEach((p) => {
        gsap.to(p, { y: `${-100 - Math.random() * 200}`, x: `${(Math.random() - 0.5) * 100}`, opacity: 0, duration: 4 + Math.random() * 4, repeat: -1, delay: Math.random() * 3, ease: 'power1.out' })
      })
    }, container)
    return () => ctx.revert()
  }, [])

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
              <p>In today&apos;s digital world, your website is your <strong>most important employee</strong>. It works 24/7, greeting every visitor. But is it doing a good job? A slow, confusing, or outdated website doesn&apos;t just look bad — it actively loses you customers.</p>
              <p>At Morfye, we build websites that are more than just digital brochures. We create strategic assets designed to attract, engage, and convert. From sleek one-page sites to complex e-commerce platforms, we build experiences that are fast, beautiful, and responsive.</p>
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
        <section ref={processRef} className="geo-process" id="our-process">
          <div className="geo-process-particles">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="geo-particle" style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, width: `${Math.random() * 4 + 1}px`, height: `${Math.random() * 4 + 1}px` }} />
            ))}
          </div>
          <div className="geo-process-progress">
            <div className="geo-process-fill" />
          </div>
          {steps.map((step, i) => (
            <div key={i} ref={(el) => (stepsRef.current[i] = el)} className="geo-step" style={{ opacity: i === 0 ? 1 : 0 }}>
              <div className="geo-step-counter">{String(i + 1).padStart(2, '0')}</div>
              <h2 className="geo-step-title">{step.title}</h2>
              <p className="geo-step-desc">{step.description}</p>
            </div>
          ))}
          <div className="geo-process-hint">
            <span>Scroll to explore</span>
            <div className="geo-process-scroll-line" />
          </div>
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
            <p>Let&apos;s create a website that works as hard as you do. Contact us for a free, no-obligation consultation.</p>
            <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.95 }}>
              <Link href="/#contact" className="geo-cta-btn">Get Your Free Quote</Link>
            </motion.div>
          </div>
        </section>

      </div>
    </ServicePageLayout>
  )
}
