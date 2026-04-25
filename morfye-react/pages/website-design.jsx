import { useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import ServicePageLayout from '../components/ServicePageLayout'
import FaqItem from '../components/FaqItem'
import { useLanguage } from '../contexts/LanguageContext'

gsap.registerPlugin(ScrollTrigger)

const STEP_COUNT = 5

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

const featureIcons = [<MonitorIcon />, <PhoneIcon />, <CodeIcon />, <GeoReadyIcon />, <CartIcon />, <GearIcon />]

export default function WebsiteDesign() {
  const { t } = useLanguage()
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
    const mobile = window.innerWidth < 768
    const ctx = gsap.context(() => {
      if (!mobile) {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
        tl.from('.geo-hero-label', { opacity: 0, y: 20, duration: 0.6 })
        tl.from('.geo-hero-title', { opacity: 0, y: 40, duration: 0.8 }, '-=0.3')
        tl.from('.geo-hero-subtitle-line', { opacity: 0, y: 30, duration: 0.7, stagger: 0.15 }, '-=0.4')
        tl.from('.geo-hero-scroll', { opacity: 0, duration: 0.5 }, '-=0.2')
        hero.querySelectorAll('.geo-particle').forEach((p) => {
          gsap.to(p, { y: `${-100 - Math.random() * 200}`, x: `${(Math.random() - 0.5) * 100}`, opacity: 0, duration: 3 + Math.random() * 4, repeat: -1, delay: Math.random() * 3, ease: 'power1.out' })
        })
      }
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
    if (progressFill) gsap.to(progressFill, { scaleY: (nextIndex + 1) / STEP_COUNT, duration: 0.5, ease: 'power2.out' })
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
    timerRef.current = setInterval(() => { goTo((currentRef.current + 1) % STEP_COUNT) }, 3500)
  }, [goTo])

  useEffect(() => {
    const container = processRef.current
    if (!container) return
    const mobile = window.innerWidth < 768
    const ctx = gsap.context(() => {
      stepsRef.current.filter(Boolean).forEach((s, i) => gsap.set(s, { opacity: i === 0 ? 1 : 0, y: i === 0 ? 0 : 80 }))
      const progressFill = container.querySelector('.geo-process-fill')
      if (progressFill) gsap.set(progressFill, { scaleY: 1 / STEP_COUNT })
      if (!mobile) {
        container.querySelectorAll('.geo-particle').forEach((p) => {
          gsap.to(p, { y: `${-100 - Math.random() * 200}`, x: `${(Math.random() - 0.5) * 100}`, opacity: 0, duration: 4 + Math.random() * 4, repeat: -1, delay: Math.random() * 3, ease: 'power1.out' })
        })
      }
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

  const handlePrev = () => { goTo((currentRef.current - 1 + STEP_COUNT) % STEP_COUNT); startTimer() }
  const handleNext = () => { goTo((currentRef.current + 1) % STEP_COUNT); startTimer() }

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
      if (window.innerWidth >= 768) {
        section.querySelectorAll('.geo-particle').forEach((p) => {
          gsap.to(p, { y: `${-60 - Math.random() * 100}`, x: `${(Math.random() - 0.5) * 60}`, opacity: 0, duration: 2 + Math.random() * 3, repeat: -1, delay: Math.random() * 2, ease: 'power1.out' })
        })
      }
    }, section)
    return () => ctx.revert()
  }, [])

  const hero = t('webDesign.hero')
  const whatWeDo = t('webDesign.whatWeDo')
  const features = t('webDesign.features')
  const steps = t('webDesign.steps')
  const faqs = t('webDesign.faqs')
  const cta = t('webDesign.cta')

  return (
    <ServicePageLayout
      title={t('webDesign.meta.title')}
      description={t('webDesign.meta.description')}
      navLinks={t('webDesign.navLinks')}
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
            <div className="geo-hero-label">{hero.label}</div>
            <h1 className="geo-hero-title">{hero.title}</h1>
            <p className="geo-hero-subtitle-line">{hero.subtitle}</p>
            <p className="geo-hero-subtitle-line geo-hero-desc">{hero.desc}</p>
          </div>
          <div className="geo-hero-scroll">
            <span>{hero.scroll}</span>
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
              <h2 className="geo-explainer-heading">{whatWeDo.heading}</h2>
              <p dangerouslySetInnerHTML={{ __html: whatWeDo.p1 }} />
              <p dangerouslySetInnerHTML={{ __html: whatWeDo.p2 }} />
              <p dangerouslySetInnerHTML={{ __html: whatWeDo.p3 }} />
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section ref={featuresRef} className="geo-features" id="our-features">
          <h2 className="geo-features-heading">{t('webDesign.featuresHeading')}</h2>
          <div className="geo-features-grid">
            {features.map((f, i) => (
              <motion.div
                key={i}
                className="geo-feature-card"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
                whileHover={{ y: -8 }}
              >
                <div className="geo-feature-icon">{featureIcons[i]}</div>
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
          <h2 className="geo-faq-heading">{t('webDesign.faqHeading')}</h2>
          <div className="geo-faq-container">
            {faqs.map((f, i) => (
              <FaqItem key={i} index={i} {...f} />
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
            <h2>{cta.heading}</h2>
            <p>{cta.text}</p>
            <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.95 }}>
              <Link href="/#contact" className="geo-cta-btn">{cta.btn}</Link>
            </motion.div>
          </div>
        </section>

      </div>
    </ServicePageLayout>
  )
}
