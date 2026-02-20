import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import ServicePageLayout from '../components/ServicePageLayout'
import FaqItem from '../components/FaqItem'

gsap.registerPlugin(ScrollTrigger)

// SVG Icons (professional, no emoji)
const TargetIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2" />
    <circle cx="24" cy="24" r="13" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="24" cy="24" r="2" fill="currentColor" />
    <line x1="24" y1="2" x2="24" y2="10" stroke="currentColor" strokeWidth="1.5" />
    <line x1="24" y1="38" x2="24" y2="46" stroke="currentColor" strokeWidth="1.5" />
    <line x1="2" y1="24" x2="10" y2="24" stroke="currentColor" strokeWidth="1.5" />
    <line x1="38" y1="24" x2="46" y2="24" stroke="currentColor" strokeWidth="1.5" />
  </svg>
)

const RocketIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 4C24 4 14 14 14 28L20 34L28 34L34 28C34 14 24 4 24 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <circle cx="24" cy="20" r="3" stroke="currentColor" strokeWidth="1.5" />
    <path d="M14 28L8 34L14 34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M34 28L40 34L34 34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20 34L20 40L24 44L28 40L28 34" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
  </svg>
)

const LightbulbIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 32V34C18 37.3 20.7 40 24 40C27.3 40 30 37.3 30 34V32" stroke="currentColor" strokeWidth="2" />
    <path d="M18 32C14.7 29.3 12 25.2 12 20C12 13.4 17.4 8 24 8C30.6 8 36 13.4 36 20C36 25.2 33.3 29.3 30 32" stroke="currentColor" strokeWidth="2" />
    <line x1="20" y1="44" x2="28" y2="44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="24" y1="2" x2="24" y2="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="38" y1="8" x2="36" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="10" y1="8" x2="12" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="44" y1="20" x2="41" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="4" y1="20" x2="7" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

const ChartIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 38L16 26L24 32L36 16L42 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M36 10L42 10L42 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="6" y1="42" x2="42" y2="42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="6" y1="6" x2="6" y2="42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M14 42V36" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.3" />
    <path d="M22 42V32" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.3" />
    <path d="M30 42V28" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.3" />
    <path d="M38 42V22" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.3" />
  </svg>
)

const GlobeIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2" />
    <path d="M24 6C24 6 16 14 16 24C16 34 24 42 24 42" stroke="currentColor" strokeWidth="1.5" />
    <path d="M24 6C24 6 32 14 32 24C32 34 24 42 24 42" stroke="currentColor" strokeWidth="1.5" />
    <ellipse cx="24" cy="24" rx="18" ry="7" stroke="currentColor" strokeWidth="1.5" />
    <line x1="6" y1="24" x2="42" y2="24" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="36" cy="12" r="5" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M36 10V12.5H38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const DiamondIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 4L44 20L24 44L4 20L24 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="M4 20H44" stroke="currentColor" strokeWidth="1.5" />
    <path d="M16 4L12 20L24 44L36 20L32 4" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M24 4L24 44" stroke="currentColor" strokeWidth="1" opacity="0.3" />
  </svg>
)

const navLinks = [
  { id: 'what-is-geo', label: 'What is GEO' },
  { id: 'why-geo', label: 'Why GEO' },
  { id: 'how-it-works', label: 'How It Works' },
  { id: 'faq', label: 'FAQ' }
]

const features = [
  { icon: <TargetIcon />, title: 'Be Found by AI', description: 'When potential clients ask ChatGPT or Claude for recommendations, your business appears first.' },
  { icon: <RocketIcon />, title: 'Stay Ahead of Competition', description: "Most businesses don't know about GEO yet. Get ahead while it's still early." },
  { icon: <LightbulbIcon />, title: 'Future-Proof Your Business', description: 'AI search is growing 10x faster than traditional search. Be ready for tomorrow, today.' },
  { icon: <ChartIcon />, title: 'Increase Trust & Authority', description: 'AI recommendations carry immense weight. Being suggested by AI builds instant credibility.' },
  { icon: <GlobeIcon />, title: 'Local & Global Reach', description: 'Optimize for local AI searches in Belgium while reaching international audiences.' },
  { icon: <DiamondIcon />, title: 'Higher Quality Leads', description: "People who get AI recommendations are ready to buy\u2014they're not just browsing." }
]

const steps = [
  { title: 'AI Audit & Analysis', description: "We test how AI engines currently see your business. We ask ChatGPT, Claude, and Perplexity about your industry and see if you're mentioned. Most businesses? Not even on the radar." },
  { title: 'Content Optimization', description: 'We rewrite your website content in a way AI understands. This includes natural language, clear business information, FAQ sections, and structured data that AI engines love.' },
  { title: 'Schema & Technical Setup', description: "We add special code (schema markup) that tells AI exactly who you are, what you do, where you're located, and why you're the best choice. Think of it as a resume for AI engines." },
  { title: 'Citation Building', description: 'We get your business mentioned on authoritative websites, directories, and platforms that AI engines trust. The more credible sources mention you, the more AI recommends you.' },
  { title: 'Monitoring & Improvement', description: "GEO isn't \"set and forget.\" We continuously monitor how AI engines respond to queries about your industry and adjust your strategy to stay on top." }
]

const faqs = [
  { question: 'How long does GEO take to show results?', answer: 'Initial improvements can be seen in 2-4 weeks. Full optimization typically takes 2-3 months as AI engines index and understand your updated content.' },
  { question: 'Will GEO replace my current SEO efforts?', answer: 'No, GEO complements SEO. You still need traditional SEO for Google rankings. GEO adds a new layer of visibility through AI recommendations.' },
  { question: 'Which AI engines do you optimize for?', answer: 'We optimize for ChatGPT (OpenAI), Claude (Anthropic), Perplexity, Google Gemini, Microsoft Copilot, and other major AI assistants.' },
  { question: 'Is GEO worth it for local businesses?', answer: 'Absolutely! Local GEO is incredibly powerful. When someone asks "best accountant near me" to an AI assistant, you want to be the answer.' },
  { question: 'How much does GEO cost?', answer: 'We offer one-time GEO setup starting at \u20ac499, or monthly GEO management from \u20ac199/month. Custom packages available for larger businesses.' },
  { question: 'Can I do GEO myself?', answer: 'Technically yes, but it requires deep technical knowledge, constant monitoring, and understanding of how AI engines work. Most businesses save time and money by hiring experts.' },
  { question: 'What industries benefit most from GEO?', answer: 'All industries benefit, but especially: consultants, lawyers, accountants, healthcare providers, real estate agents, local services, and B2B businesses.' }
]

export default function GeoOptimization() {
  const heroRef = useRef(null)
  const explainerRef = useRef(null)
  const featuresRef = useRef(null)
  const processRef = useRef(null)
  const stepsRef = useRef([])
  const faqRef = useRef(null)
  const ctaRef = useRef(null)

  // Hero entrance animation
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
        gsap.to(p, {
          y: `${-100 - Math.random() * 200}`,
          x: `${(Math.random() - 0.5) * 100}`,
          opacity: 0,
          duration: 3 + Math.random() * 4,
          repeat: -1,
          delay: Math.random() * 3,
          ease: 'power1.out'
        })
      })
    }, hero)
    return () => ctx.revert()
  }, [])

  // Explainer entrance
  useEffect(() => {
    const section = explainerRef.current
    if (!section) return
    const ctx = gsap.context(() => {
      gsap.from('.geo-explainer-number', {
        scale: 0.5, opacity: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: section, start: 'top 75%', toggleActions: 'play none none none' }
      })
      gsap.from('.geo-explainer-line', {
        scaleX: 0, duration: 1, ease: 'power2.out',
        scrollTrigger: { trigger: section, start: 'top 75%', toggleActions: 'play none none none' }
      })
      gsap.from('.geo-explainer-heading', {
        y: 40, opacity: 0, duration: 0.8,
        scrollTrigger: { trigger: section, start: 'top 75%', toggleActions: 'play none none none' }
      })
      gsap.from('.geo-explainer-text p', {
        y: 30, opacity: 0, duration: 0.6, stagger: 0.15,
        scrollTrigger: { trigger: section, start: 'top 70%', toggleActions: 'play none none none' }
      })
    }, section)
    return () => ctx.revert()
  }, [])

  // Features heading entrance
  useEffect(() => {
    const section = featuresRef.current
    if (!section) return
    const ctx = gsap.context(() => {
      gsap.from('.geo-features-heading', {
        y: 50, opacity: 0, duration: 0.8,
        scrollTrigger: { trigger: section, start: 'top 80%', toggleActions: 'play none none none' }
      })
    }, section)
    return () => ctx.revert()
  }, [])

  // Process pinned steps (OurStory pattern)
  useEffect(() => {
    const container = processRef.current
    if (!container) return
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: `+=${steps.length * 100}%`,
          pin: true,
          scrub: 1
        }
      })

      stepsRef.current.forEach((step, i) => {
        if (i === 0) return
        const prev = stepsRef.current[i - 1]
        tl.to(prev, { opacity: 0, y: -60, duration: 0.4, ease: 'power2.in' })
        tl.fromTo(step,
          { opacity: 0, y: 80 },
          { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
        )
      })

      const lastStep = stepsRef.current[steps.length - 1]
      if (lastStep) {
        tl.to(lastStep, { opacity: 0, y: -40, duration: 0.3, ease: 'power2.in' })
      }

      const progressFill = container.querySelector('.geo-process-fill')
      if (progressFill) {
        gsap.to(progressFill, {
          scaleY: 1, ease: 'none',
          scrollTrigger: {
            trigger: container, start: 'top top',
            end: `+=${steps.length * 100}%`, scrub: true
          }
        })
      }

      container.querySelectorAll('.geo-particle').forEach((p) => {
        gsap.to(p, {
          y: `${-100 - Math.random() * 200}`,
          x: `${(Math.random() - 0.5) * 100}`,
          opacity: 0,
          duration: 4 + Math.random() * 4,
          repeat: -1, delay: Math.random() * 3, ease: 'power1.out'
        })
      })
    }, container)
    return () => ctx.revert()
  }, [])

  // FAQ heading entrance
  useEffect(() => {
    const section = faqRef.current
    if (!section) return
    const ctx = gsap.context(() => {
      gsap.from('.geo-faq-heading', {
        y: 40, opacity: 0, duration: 0.8,
        scrollTrigger: { trigger: section, start: 'top 80%', toggleActions: 'play none none none' }
      })
    }, section)
    return () => ctx.revert()
  }, [])

  // CTA entrance
  useEffect(() => {
    const section = ctaRef.current
    if (!section) return
    const ctx = gsap.context(() => {
      gsap.from('.geo-cta-content', {
        y: 50, opacity: 0, duration: 0.8,
        scrollTrigger: { trigger: section, start: 'top 80%', toggleActions: 'play none none none' }
      })
      section.querySelectorAll('.geo-particle').forEach((p) => {
        gsap.to(p, {
          y: `${-60 - Math.random() * 100}`,
          x: `${(Math.random() - 0.5) * 60}`,
          opacity: 0, duration: 2 + Math.random() * 3,
          repeat: -1, delay: Math.random() * 2, ease: 'power1.out'
        })
      })
    }, section)
    return () => ctx.revert()
  }, [])

  return (
    <ServicePageLayout
      title="GEO - Generative Engine Optimization | Morfye"
      description="Get your business recommended by AI assistants like ChatGPT, Claude, and Google Gemini. Professional GEO services in Belgium."
      keywords="GEO, Generative Engine Optimization, AI optimization, ChatGPT optimization, Claude AI, Google Gemini"
      navLinks={navLinks}
      slug="geo-optimization"
      faqs={faqs}
      defaultDark
    >
      <div className="geo-page">
        {/* === HERO === */}
        <section ref={heroRef} className="geo-hero">
          <div className="geo-hero-particles">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="geo-particle" style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`
              }} />
            ))}
          </div>

          <div className="geo-hero-content">
            <div className="geo-hero-label">THE FUTURE OF ONLINE VISIBILITY</div>
            <h1 className="geo-hero-title">GEO</h1>
            <p className="geo-hero-subtitle-line">
              Generative Engine Optimization
            </p>
            <p className="geo-hero-subtitle-line geo-hero-desc">
              Get your business recommended by AI assistants like ChatGPT, Claude, and Google Gemini.
            </p>
          </div>

          <div className="geo-hero-scroll">
            <span>Scroll</span>
            <div className="geo-hero-scroll-line" />
          </div>
        </section>

        {/* === WHAT IS GEO === */}
        <section ref={explainerRef} className="geo-explainer" id="what-is-geo">
          <div className="geo-explainer-grid">
            <div className="geo-explainer-side">
              <div className="geo-explainer-number">01</div>
              <div className="geo-explainer-icon"><GlobeIcon /></div>
            </div>
            <div className="geo-explainer-text">
              <div className="geo-explainer-line" />
              <h2 className="geo-explainer-heading">What is GEO?</h2>
              <p>Online visibility has changed dramatically — traditional click-through rates have dropped by more than <strong>55% since 2022</strong>. Why? Because people now ask AI assistants instead of clicking search results. Businesses relying only on Google are sinking without even realizing it.</p>
              <p>GEO (Generative Engine Optimization) is the evolution of traditional SEO for the AI era. While SEO helps you rank on Google, GEO ensures AI chatbots like ChatGPT, Claude, Perplexity, and Google Gemini recommend YOUR business when people ask for help.</p>
              <p>Think about it: More people are now asking AI assistants &quot;Who&apos;s the best tax consultant in Brussels?&quot; or &quot;Recommend a web designer in Belgium&quot; instead of Googling. If your website isn&apos;t optimized for AI, you&apos;re invisible to this growing audience.</p>
              <p>GEO is not just the future — it&apos;s happening NOW. Businesses that adapt early will dominate their markets while competitors wonder where their clients went.</p>
            </div>
          </div>
        </section>

        {/* === WHY GEO === */}
        <section ref={featuresRef} className="geo-features" id="why-geo">
          <h2 className="geo-features-heading">Why Your Business Needs GEO</h2>
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

        {/* === HOW IT WORKS (Pinned Steps) === */}
        <section ref={processRef} className="geo-process" id="how-it-works">
          <div className="geo-process-particles">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="geo-particle" style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`
              }} />
            ))}
          </div>

          <div className="geo-process-progress">
            <div className="geo-process-fill" />
          </div>

          {steps.map((step, i) => (
            <div
              key={i}
              ref={(el) => (stepsRef.current[i] = el)}
              className="geo-step"
              style={{ opacity: i === 0 ? 1 : 0 }}
            >
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

        {/* === FAQ === */}
        <section ref={faqRef} className="geo-faq" id="faq">
          <h2 className="geo-faq-heading">Frequently Asked Questions</h2>
          <div className="geo-faq-container">
            {faqs.map((f, i) => (
              <FaqItem key={f.question} index={i} {...f} />
            ))}
          </div>
        </section>

        {/* === CTA === */}
        <section ref={ctaRef} className="geo-cta-section">
          <div className="geo-cta-particles">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="geo-particle" style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 5 + 2}px`,
                height: `${Math.random() * 5 + 2}px`
              }} />
            ))}
          </div>
          <div className="geo-cta-content">
            <h2>Ready to Dominate AI Search?</h2>
            <p>Don&apos;t wait until your competitors figure out GEO. Get ahead now and own your market.</p>
            <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.95 }}>
              <Link href="/#contact" className="geo-cta-btn">
                Schedule a Consultation
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </ServicePageLayout>
  )
}
