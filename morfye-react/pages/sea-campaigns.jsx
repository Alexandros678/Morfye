import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import ServicePageLayout from '../components/ServicePageLayout'
import FaqItem from '../components/FaqItem'

gsap.registerPlugin(ScrollTrigger)

const CursorIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 6L10 36L20 26L26 42L32 40L26 24L42 24L10 6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
  </svg>
)

const MegaphoneIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 18H16L36 8V40L16 30H8V18Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="M16 30V40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M40 18C42 20 42 28 40 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M44 14C48 18 48 30 44 34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
  </svg>
)

const ShoppingIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 20V14C16 8.5 20 4 24 4C28 4 32 8.5 32 14V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M8 20H40L36 42H12L8 20Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <line x1="16" y1="28" x2="32" y2="28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
  </svg>
)

const LocalIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 4C17.4 4 12 9.4 12 16C12 25 24 40 24 40C24 40 36 25 36 16C36 9.4 30.6 4 24 4Z" stroke="currentColor" strokeWidth="2" />
    <circle cx="24" cy="16" r="5" stroke="currentColor" strokeWidth="1.5" />
    <ellipse cx="24" cy="42" rx="10" ry="3" stroke="currentColor" strokeWidth="1.2" opacity="0.3" />
  </svg>
)

const LoopIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M38 14C34 8 28 4 20 4C11 4 4 11 4 20C4 29 11 36 20 36C27 36 33 32 36.5 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M38 14L44 10M38 14L34 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 34C14 40 20 44 28 44C37 44 44 37 44 28C44 19 37 12 28 12C21 12 15 16 11.5 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
  </svg>
)

const PieIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 6V24H42C42 14 34 6 24 6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="M24 24H42C42 34.5 33 42 22.5 42C12 42 4 34 4 24C4 13.5 12 6 22 6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" opacity="0.6" />
    <line x1="24" y1="24" x2="24" y2="6" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
  </svg>
)

const navLinks = [
  { id: 'what-is-sea', label: 'What is SEA' },
  { id: 'our-services', label: 'Our Services' },
  { id: 'our-process', label: 'How We Work' },
  { id: 'faq', label: 'FAQ' }
]

const features = [
  { icon: <CursorIcon />, title: 'Search Campaigns', description: 'Text ads that appear when people search for keywords related to your business on Google. Perfect for capturing high-intent customers.' },
  { icon: <MegaphoneIcon />, title: 'Display Campaigns', description: 'Visual banner ads shown across millions of websites in the Google Display Network to build brand awareness.' },
  { icon: <ShoppingIcon />, title: 'Shopping Campaigns', description: 'Product ads with images and prices, perfect for e-commerce stores looking to drive online sales directly from search results.' },
  { icon: <LocalIcon />, title: 'Local Campaigns', description: 'Geo-targeted ads that bring customers to your physical location or service area in Belgium.' },
  { icon: <LoopIcon />, title: 'Remarketing', description: "Re-engage visitors who left your site without converting. Show them ads across the web to bring them back." },
  { icon: <PieIcon />, title: 'Performance Tracking', description: "Detailed analytics showing exactly what's working: clicks, conversions, cost-per-lead, and ROI." }
]

const steps = [
  { title: 'Strategy & Goal Setting', description: 'We start by understanding your business goals, target audience, and budget. Are you looking for more leads, sales, or brand awareness? We build a strategy around that.' },
  { title: 'Keyword Research & Targeting', description: 'We identify the most profitable keywords your customers are searching for, analyze competition, and determine optimal bid strategies.' },
  { title: 'Ad Creation & Landing Pages', description: 'We write compelling ad copy that gets clicks and create or optimize landing pages that convert visitors into customers.' },
  { title: 'Campaign Launch & Monitoring', description: 'We launch your campaigns with proper tracking (conversion tracking, call tracking, etc.) and monitor performance daily to catch issues early.' },
  { title: 'Optimization & Reporting', description: 'We continuously test ad copy, adjust bids, refine targeting, and eliminate wasted spend. You get monthly reports showing clear ROI.' }
]

const faqs = [
  { question: 'How much should I budget for Google Ads?', answer: 'It depends on your industry, competition, and goals. We typically recommend starting with at least €500-1,000/month in ad spend, plus our management fee.' },
  { question: 'How quickly will I see results?', answer: 'Unlike SEO, Google Ads deliver instant traffic. You can start getting clicks and leads within hours of launching. However, optimization takes 1-2 months to maximize ROI.' },
  { question: "What's the difference between SEO and SEA?", answer: 'SEO is organic (free clicks) but takes 3-6 months to see results. SEA is paid (you pay per click) but delivers instant traffic. Ideally, use both together for maximum visibility.' },
  { question: 'Do I need to sign a long-term contract?', answer: 'No. We offer month-to-month contracts. However, we recommend at least 3 months to properly optimize campaigns and see the best results.' },
  { question: "What's your management fee?", answer: 'Our management fee is typically 15-20% of your monthly ad spend, with a minimum of €299/month. This covers strategy, setup, optimization, reporting, and ongoing support.' },
  { question: 'Can I run Google Ads myself?', answer: "You can, but it's easy to waste money without expertise. Google makes it simple to spend money but hard to spend it wisely. Most businesses find better ROI by hiring professionals." },
  { question: "What if the campaign doesn't work?", answer: "We provide transparent reporting and work closely with you to optimize performance. If a campaign truly isn't delivering, we pivot strategy or recommend alternative channels." }
]

export default function SeaCampaigns() {
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
      title="SEA Campaigns & Google Ads | Morfye"
      description="Drive Instant Traffic and Leads with Expert Google Ads Management. Get Results Today, Not Months From Now."
      navLinks={navLinks}
      slug="sea-campaigns"
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
            <div className="geo-hero-label">INSTANT RESULTS, MAXIMUM ROI</div>
            <h1 className="geo-hero-title">ADS</h1>
            <p className="geo-hero-subtitle-line">SEA & Google Ads Campaigns</p>
            <p className="geo-hero-subtitle-line geo-hero-desc">Drive instant traffic and leads with expert Google Ads management.</p>
          </div>
          <div className="geo-hero-scroll">
            <span>Scroll</span>
            <div className="geo-hero-scroll-line" />
          </div>
        </section>

        {/* WHAT IS SEA */}
        <section ref={explainerRef} className="geo-explainer" id="what-is-sea">
          <div className="geo-explainer-grid">
            <div className="geo-explainer-side">
              <div className="geo-explainer-number">01</div>
              <div className="geo-explainer-icon"><MegaphoneIcon /></div>
            </div>
            <div className="geo-explainer-text">
              <div className="geo-explainer-line" />
              <h2 className="geo-explainer-heading">What is SEA?</h2>
              <p><strong>SEA (Search Engine Advertising)</strong>, also known as <strong>PPC (Pay-Per-Click)</strong> or <strong>Google Ads</strong>, is paid advertising on search engines. When someone searches for keywords related to your business, your ad appears at the top of Google — above all organic results.</p>
              <p>Unlike SEO, which takes months to build momentum, SEA delivers <strong>instant visibility</strong>. Turn on a campaign today, and you can start getting clicks, calls, and customers within hours.</p>
              <p>The catch? Running successful Google Ads campaigns requires expertise. Poorly managed campaigns waste money on irrelevant clicks. That&apos;s where we come in.</p>
              <p>At Morfye, we design, launch, and optimize Google Ads campaigns that maximize your ROI. Whether you want more website traffic, phone calls, form submissions, or online sales — we create campaigns engineered to deliver results.</p>
            </div>
          </div>
        </section>

        {/* OUR SERVICES */}
        <section ref={featuresRef} className="geo-features" id="our-services">
          <h2 className="geo-features-heading">Our SEA Services</h2>
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
            <h2>Ready to Get Instant Traffic?</h2>
            <p>Stop waiting for SEO. Start getting customers today with expertly managed Google Ads campaigns.</p>
            <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.95 }}>
              <Link href="/#contact" className="geo-cta-btn">Start Your Campaign</Link>
            </motion.div>
          </div>
        </section>

      </div>
    </ServicePageLayout>
  )
}
