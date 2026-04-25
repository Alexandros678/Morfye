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

const featureIcons = [<CursorIcon />, <MegaphoneIcon />, <ShoppingIcon />, <LocalIcon />, <LoopIcon />, <PieIcon />]

export default function SeaCampaigns() {
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
    if (window.innerWidth < 768) return
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
    if (window.innerWidth < 768) return
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
    if (window.innerWidth < 768) return
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
    if (window.innerWidth < 768) return
    const ctx = gsap.context(() => {
      gsap.from('.geo-cta-content', { y: 50, opacity: 0, duration: 0.8, scrollTrigger: { trigger: section, start: 'top 80%', toggleActions: 'play none none none' } })
      section.querySelectorAll('.geo-particle').forEach((p) => {
        gsap.to(p, { y: `${-60 - Math.random() * 100}`, x: `${(Math.random() - 0.5) * 60}`, opacity: 0, duration: 2 + Math.random() * 3, repeat: -1, delay: Math.random() * 2, ease: 'power1.out' })
      })
    }, section)
    return () => ctx.revert()
  }, [])

  const hero = t('sea.hero')
  const whatIsSea = t('sea.whatIsSea')
  const features = t('sea.features')
  const steps = t('sea.steps')
  const faqs = t('sea.faqs')
  const cta = t('sea.cta')

  return (
    <ServicePageLayout
      title={t('sea.meta.title')}
      description={t('sea.meta.description')}
      navLinks={t('sea.navLinks')}
      slug="sea-campaigns"
      faqs={faqs}
      defaultDark
    >
      <div className="geo-page">

        {/* HERO */}
        <section ref={heroRef} className="geo-hero">
          <div className="geo-hero-particles" suppressHydrationWarning>
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="geo-particle" suppressHydrationWarning style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, width: `${Math.random() * 4 + 1}px`, height: `${Math.random() * 4 + 1}px` }} />
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

        {/* WHAT IS SEA */}
        <section ref={explainerRef} className="geo-explainer" id="what-is-sea">
          <div className="geo-explainer-grid">
            <div className="geo-explainer-side">
              <div className="geo-explainer-number">01</div>
              <div className="geo-explainer-icon"><MegaphoneIcon /></div>
            </div>
            <div className="geo-explainer-text">
              <div className="geo-explainer-line" />
              <h2 className="geo-explainer-heading">{whatIsSea.heading}</h2>
              <p dangerouslySetInnerHTML={{ __html: whatIsSea.p1 }} />
              <p dangerouslySetInnerHTML={{ __html: whatIsSea.p2 }} />
              <p dangerouslySetInnerHTML={{ __html: whatIsSea.p3 }} />
              <p dangerouslySetInnerHTML={{ __html: whatIsSea.p4 }} />
            </div>
          </div>
        </section>

        {/* OUR SERVICES */}
        <section ref={featuresRef} className="geo-features" id="our-services">
          <h2 className="geo-features-heading">{t('sea.featuresHeading')}</h2>
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
          <div className="geo-process-particles" suppressHydrationWarning>
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="geo-particle" suppressHydrationWarning style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, width: `${Math.random() * 4 + 1}px`, height: `${Math.random() * 4 + 1}px` }} />
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
          <h2 className="geo-faq-heading">{t('sea.faqHeading')}</h2>
          <div className="geo-faq-container">
            {faqs.map((f, i) => (
              <FaqItem key={i} index={i} {...f} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <section ref={ctaRef} className="geo-cta-section">
          <div className="geo-cta-particles" suppressHydrationWarning>
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="geo-particle" suppressHydrationWarning style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, width: `${Math.random() * 5 + 2}px`, height: `${Math.random() * 5 + 2}px` }} />
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
