import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import ServicePageLayout from '../components/ServicePageLayout'
import FaqItem from '../components/FaqItem'

gsap.registerPlugin(ScrollTrigger)

const ServerIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="8" width="36" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
    <rect x="6" y="22" width="36" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
    <rect x="6" y="36" width="36" height="8" rx="2" stroke="currentColor" strokeWidth="2" />
    <circle cx="38" cy="13" r="2" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="38" cy="27" r="2" stroke="currentColor" strokeWidth="1.5" />
    <line x1="12" y1="13" x2="22" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    <line x1="12" y1="27" x2="22" y2="27" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
  </svg>
)

const ShieldIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 4L8 10V22C8 32 16 40 24 44C32 40 40 32 40 22V10L24 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="M17 24L22 29L32 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const DatabaseIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="24" cy="12" rx="16" ry="6" stroke="currentColor" strokeWidth="2" />
    <path d="M8 12V24C8 27.3 15.2 30 24 30C32.8 30 40 27.3 40 24V12" stroke="currentColor" strokeWidth="2" />
    <path d="M8 24V36C8 39.3 15.2 42 24 42C32.8 42 40 39.3 40 36V24" stroke="currentColor" strokeWidth="2" />
    <path d="M30 36L34 32M34 32L38 28M34 32L30 28M34 32L38 36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
  </svg>
)

const WrenchIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M36 6C33 6 30 8 30 11C30 12.5 30.6 14 31.6 15L14 32.4C13 31.4 11.5 30.8 10 30.8C7 30.8 4.8 33 4.8 36C4.8 39 7 41.2 10 41.2C13 41.2 15.2 39 15.2 36C15.2 34.5 14.6 33 13.6 32L31.2 14.4C32.2 15.4 33.7 16 35.2 16C38.2 16 40.4 13.8 40.4 10.8C40.4 10.2 40.3 9.6 40.1 9L36.6 12.5L34.5 10.4L38 6.9C37.4 6.3 36.7 6 36 6Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
  </svg>
)

const EyeIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 24C4 24 10 10 24 10C38 10 44 24 44 24C44 24 38 38 24 38C10 38 4 24 4 24Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="2" />
    <circle cx="24" cy="24" r="2.5" fill="currentColor" />
    <line x1="24" y1="4" x2="24" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    <line x1="24" y1="40" x2="24" y2="44" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
  </svg>
)

const ChatIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 8H34C36.2 8 38 9.8 38 12V28C38 30.2 36.2 32 34 32H16L6 40V12C6 9.8 7.8 8 6 8Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="M6 8C6 8 7.8 8 10 8H34C36.2 8 38 9.8 38 12V28C38 30.2 36.2 32 34 32H16L6 40V12C6 9.8 7.8 8 6 8Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <line x1="14" y1="18" x2="30" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    <line x1="14" y1="24" x2="24" y2="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
  </svg>
)

const navLinks = [
  { id: 'why-hosting', label: 'Why Hosting Matters' },
  { id: 'what-we-offer', label: 'What We Offer' },
  { id: 'our-process', label: 'How It Works' },
  { id: 'faq', label: 'FAQ' }
]

const features = [
  { icon: <ServerIcon />, title: 'Lightning-Fast Performance', description: 'We use premium servers with SSD storage and CDN integration to ensure your site loads in under 2 seconds.' },
  { icon: <ShieldIcon />, title: 'Maximum Security', description: 'Free SSL certificates, firewall protection, malware scanning, and automatic security updates keep hackers out.' },
  { icon: <DatabaseIcon />, title: 'Daily Automatic Backups', description: 'Your site is backed up every day. If anything goes wrong, we can restore it in minutes.' },
  { icon: <WrenchIcon />, title: 'Regular Updates', description: 'We keep your CMS, plugins, and themes up to date, so your site stays secure and compatible.' },
  { icon: <EyeIcon />, title: '24/7 Monitoring', description: "We monitor your site around the clock. If it goes down, we're notified instantly and fix it immediately." },
  { icon: <ChatIcon />, title: 'Priority Support', description: "Need help? Our team responds quickly to fix issues, make updates, or answer your questions." }
]

const steps = [
  { title: 'Easy Migration', description: "Already have a website? We'll migrate it to our secure hosting platform with zero downtime. You won't even notice the switch." },
  { title: 'Secure Setup', description: 'We configure your hosting environment with SSL certificates, firewalls, and performance optimization from day one.' },
  { title: 'Proactive Monitoring', description: 'Our systems monitor your website 24/7. If we detect downtime, security threats, or performance issues, we act immediately.' },
  { title: 'Regular Maintenance', description: 'Every week, we check for updates, run security scans, optimize databases, and ensure everything runs smoothly.' },
  { title: 'Ongoing Support', description: "Need a content update, new feature, or technical help? Just reach out. We're here to support you whenever you need us." }
]

const faqs = [
  { question: "What's the difference between hosting and maintenance?", answer: 'Hosting is the server space where your website files live. Maintenance includes updates, backups, security monitoring, and support to keep your site running optimally.' },
  { question: 'Can I bring my own domain name?', answer: 'Absolutely! You can keep your existing domain and point it to our hosting, or we can help you register a new one.' },
  { question: 'What happens if my website goes down?', answer: 'Our 24/7 monitoring system alerts us immediately. We investigate and resolve the issue as quickly as possible — usually within minutes.' },
  { question: 'Do you offer email hosting too?', answer: 'Yes! We can set up professional email addresses (like you@yourbusiness.com) connected to your domain.' },
  { question: 'Can I cancel anytime?', answer: "Yes. We offer flexible month-to-month plans with no long-term contracts. Cancel anytime with 30 days' notice." },
  { question: 'How much does hosting and maintenance cost?', answer: "Plans start at €29/month for basic hosting and go up based on your site's complexity and traffic. Contact us for a custom quote." },
  { question: 'What if I need changes to my website?', answer: "That's part of maintenance! Minor updates (text changes, new images) are included. Larger changes (new pages, features) can be quoted separately." }
]

export default function HostingMaintenance() {
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
      title="Website Hosting & Maintenance | Morfye"
      description="Reliable, Secure, and Fast Hosting with Expert Maintenance. Keep Your Website Running 24/7."
      navLinks={navLinks}
      slug="hosting-maintenance"
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
            <div className="geo-hero-label">ALWAYS ON, ALWAYS SECURE</div>
            <h1 className="geo-hero-title">HOST</h1>
            <p className="geo-hero-subtitle-line">Hosting & Maintenance</p>
            <p className="geo-hero-subtitle-line geo-hero-desc">Reliable, secure, and fast hosting with expert maintenance. Zero downtime.</p>
          </div>
          <div className="geo-hero-scroll">
            <span>Scroll</span>
            <div className="geo-hero-scroll-line" />
          </div>
        </section>

        {/* WHY HOSTING */}
        <section ref={explainerRef} className="geo-explainer" id="why-hosting">
          <div className="geo-explainer-grid">
            <div className="geo-explainer-side">
              <div className="geo-explainer-number">01</div>
              <div className="geo-explainer-icon"><ServerIcon /></div>
            </div>
            <div className="geo-explainer-text">
              <div className="geo-explainer-line" />
              <h2 className="geo-explainer-heading">Why Professional Hosting & Maintenance Matter</h2>
              <p>Building a website is just the beginning. To stay online, perform well, and remain secure, your website needs <strong>reliable hosting</strong> and <strong>ongoing maintenance</strong>. Think of hosting as the land your digital house sits on — if it&apos;s unstable or unsafe, everything falls apart.</p>
              <p>Many businesses make the mistake of choosing the cheapest hosting option, only to face slow load times, frequent downtime, security breaches, and no support when things go wrong. At Morfye, we provide enterprise-grade hosting combined with proactive maintenance.</p>
              <p>Whether you&apos;re launching a new site or need to migrate from an unreliable host, we&apos;ve got you covered with hosting solutions tailored to your needs.</p>
            </div>
          </div>
        </section>

        {/* WHAT WE OFFER */}
        <section ref={featuresRef} className="geo-features" id="what-we-offer">
          <h2 className="geo-features-heading">What&apos;s Included in Our Hosting & Maintenance</h2>
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
            <h2>Let Us Handle the Technical Stuff</h2>
            <p>Focus on your business while we keep your website fast, secure, and always online.</p>
            <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.95 }}>
              <Link href="/#contact" className="geo-cta-btn">Get Started Today</Link>
            </motion.div>
          </div>
        </section>

      </div>
    </ServicePageLayout>
  )
}
