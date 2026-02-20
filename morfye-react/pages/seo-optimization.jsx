import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import ServicePageLayout from '../components/ServicePageLayout'
import FaqItem from '../components/FaqItem'

gsap.registerPlugin(ScrollTrigger)

const SearchIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="21" cy="21" r="13" stroke="currentColor" strokeWidth="2" />
    <line x1="30" y1="30" x2="42" y2="42" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="21" y1="12" x2="21" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="21" y1="27" x2="21" y2="30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="12" y1="21" x2="15" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="27" y1="21" x2="30" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="21" cy="21" r="4" stroke="currentColor" strokeWidth="1.5" />
  </svg>
)

const PenIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M34 6L42 14L18 38L6 42L10 30L34 6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <line x1="28" y1="12" x2="36" y2="20" stroke="currentColor" strokeWidth="1.5" />
    <line x1="10" y1="30" x2="18" y2="38" stroke="currentColor" strokeWidth="1.5" />
  </svg>
)

const CogIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="7" stroke="currentColor" strokeWidth="2" />
    <path d="M24 6V10M24 38V42M6 24H10M38 24H42M10.1 10.1L12.9 12.9M35.1 35.1L37.9 37.9M37.9 10.1L35.1 12.9M12.9 35.1L10.1 37.9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

const PinIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 4C17.4 4 12 9.4 12 16C12 25 24 44 24 44C24 44 36 25 36 16C36 9.4 30.6 4 24 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <circle cx="24" cy="16" r="5" stroke="currentColor" strokeWidth="1.5" />
  </svg>
)

const LinkIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 28L28 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M26 32L22 36C18.7 39.3 13.3 39.3 10 36C6.7 32.7 6.7 27.3 10 24L14 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M34 28L38 24C41.3 20.7 41.3 15.3 38 12C34.7 8.7 29.3 8.7 26 12L22 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

const BarChartIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="6" y1="42" x2="42" y2="42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="6" y1="6" x2="6" y2="42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <rect x="12" y="26" width="7" height="16" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <rect x="22" y="18" width="7" height="24" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <rect x="32" y="10" width="7" height="32" rx="1" stroke="currentColor" strokeWidth="1.5" />
  </svg>
)

const navLinks = [
  { id: 'what-is-seo', label: 'What is SEO' },
  { id: 'our-services', label: 'Our Services' },
  { id: 'our-process', label: 'Our Process' },
  { id: 'faq', label: 'FAQ' }
]

const features = [
  { icon: <SearchIcon />, title: 'Keyword Research', description: 'We identify the exact terms your customers are searching for and target keywords with high traffic and low competition.' },
  { icon: <PenIcon />, title: 'On-Page SEO', description: 'We optimize your content, meta tags, headers, images, and internal links to make your site irresistible to Google.' },
  { icon: <CogIcon />, title: 'Technical SEO', description: 'We fix site speed, mobile responsiveness, crawl errors, and structured data to ensure Google can properly index your site.' },
  { icon: <PinIcon />, title: 'Local SEO', description: 'Perfect for businesses in Belgium. We optimize your Google Business Profile and local citations to dominate local search results.' },
  { icon: <LinkIcon />, title: 'Link Building', description: 'We build high-quality backlinks from authoritative websites to boost your domain authority and rankings.' },
  { icon: <BarChartIcon />, title: 'SEO Analytics & Reporting', description: "Monthly reports show your ranking improvements, traffic growth, and ROI so you always know what's working." }
]

const steps = [
  { title: 'SEO Audit', description: "We analyze your current website to identify technical issues, content gaps, and opportunities. You'll get a detailed report showing exactly what needs to be fixed." },
  { title: 'Competitor Analysis', description: 'We research your top competitors to see what keywords they rank for, what backlinks they have, and where you can beat them.' },
  { title: 'Strategy Development', description: 'Based on our research, we create a custom SEO strategy with clear goals, target keywords, and an action plan.' },
  { title: 'Implementation', description: "We optimize your website's technical foundation, content, and off-page factors. This includes keyword optimization, speed improvements, and link building." },
  { title: 'Monitoring & Optimization', description: 'SEO is ongoing. We continuously monitor rankings, analyze performance, and make adjustments to keep you ahead of the competition.' }
]

const faqs = [
  { question: 'How long does SEO take to show results?', answer: "SEO is a long-term strategy. You'll typically see initial improvements in 3-6 months, with significant ranking gains after 6-12 months. It's not instant, but the results compound over time." },
  { question: "What's the difference between SEO and paid ads (Google Ads)?", answer: 'Paid ads give instant visibility but stop the moment you stop paying. SEO takes longer but provides lasting, cost-effective results. Ideally, you use both together.' },
  { question: 'Do you guarantee #1 rankings on Google?', answer: "No one can ethically guarantee specific rankings—Google's algorithm is too complex. We focus on data-driven strategies that consistently improve rankings and drive measurable traffic growth." },
  { question: 'Is local SEO different from regular SEO?', answer: 'Yes. Local SEO focuses on ranking in specific geographic areas (like "Brussels" or "Brussels") and includes optimizing your Google Business Profile, local citations, and location-specific content.' },
  { question: 'How much does SEO cost?', answer: 'It varies based on competition, goals, and scope. Basic local SEO starts around €299/month, while comprehensive national SEO campaigns can be €1,000+/month. We provide custom quotes.' },
  { question: 'Can I do SEO myself?', answer: 'You can learn the basics, but professional SEO requires technical expertise, ongoing research, and time. Most business owners find it more effective to hire experts while they focus on their core business.' },
  { question: 'What happens if I stop SEO services?', answer: "Your rankings won't disappear overnight, but competitors will eventually overtake you. SEO requires ongoing maintenance to stay ahead as algorithms and competition evolve." }
]

export default function SeoOptimization() {
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
      title="SEO Optimization Services | Morfye - Rank Higher on Google"
      description="Professional SEO services in Brussels, Belgium. Increase organic traffic, rank higher on Google, and get found by customers."
      keywords="SEO optimization, search engine optimization, Google ranking, local SEO Belgium"
      navLinks={navLinks}
      slug="seo-optimization"
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
            <div className="geo-hero-label">THE SCIENCE OF GOOGLE RANKINGS</div>
            <h1 className="geo-hero-title">SEO</h1>
            <p className="geo-hero-subtitle-line">Search Engine Optimization</p>
            <p className="geo-hero-subtitle-line geo-hero-desc">Rank higher on Google, drive more organic traffic, and grow your business.</p>
          </div>
          <div className="geo-hero-scroll">
            <span>Scroll</span>
            <div className="geo-hero-scroll-line" />
          </div>
        </section>

        {/* WHAT IS SEO */}
        <section ref={explainerRef} className="geo-explainer" id="what-is-seo">
          <div className="geo-explainer-grid">
            <div className="geo-explainer-side">
              <div className="geo-explainer-number">01</div>
              <div className="geo-explainer-icon"><SearchIcon /></div>
            </div>
            <div className="geo-explainer-text">
              <div className="geo-explainer-line" />
              <h2 className="geo-explainer-heading">What is SEO and Why Does It Matter?</h2>
              <p><strong>SEO (Search Engine Optimization)</strong> is the practice of optimizing your website to rank higher in search engine results — primarily Google. When someone searches for services you offer, SEO determines whether your website appears on page 1 or buried on page 10.</p>
              <p>Here&apos;s the harsh truth: <strong>75% of people never scroll past the first page of Google results.</strong> If your website isn&apos;t ranking well, you&apos;re invisible to potential customers actively searching for what you offer.</p>
              <p>Good SEO doesn&apos;t just bring more traffic — it brings <strong>targeted, high-quality traffic</strong> from people ready to buy. It&apos;s one of the most cost-effective marketing strategies because you&apos;re not paying for every click like with ads.</p>
              <p>At Morfye, we combine traditional SEO with modern <strong>GEO (Generative Engine Optimization)</strong> to ensure you&apos;re visible everywhere your customers are looking.</p>
            </div>
          </div>
        </section>

        {/* OUR SERVICES */}
        <section ref={featuresRef} className="geo-features" id="our-services">
          <h2 className="geo-features-heading">Our SEO Services</h2>
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

        {/* OUR PROCESS */}
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
            <h2>Ready to Rank #1 on Google?</h2>
            <p>Stop losing customers to your competitors. Let&apos;s get your website the visibility it deserves.</p>
            <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.95 }}>
              <Link href="/#contact" className="geo-cta-btn">Get Your Free SEO Audit</Link>
            </motion.div>
          </div>
        </section>

      </div>
    </ServicePageLayout>
  )
}
