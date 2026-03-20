import { useEffect, useRef, useCallback } from 'react'
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
  { icon: <CursorIcon />, title: 'Search Campaigns', description: 'Text search ads that appear when people search for keywords related to your business on Google. Pay-per-click advertising at its most direct — capturing high-intent customers the moment they search. The backbone of any effective search marketing strategy.' },
  { icon: <MegaphoneIcon />, title: 'Display Campaigns', description: 'Visual banner ads shown across millions of websites in the Google Display Network. A key form of online advertising and internet marketing to build brand awareness and reach new audiences at scale.' },
  { icon: <ShoppingIcon />, title: 'Shopping Campaigns', description: 'Product ads with images and prices, perfect for ecommerce stores looking to drive online sales directly from search results. Some of the highest-performing ad campaigns for online retailers.' },
  { icon: <LocalIcon />, title: 'Local Campaigns', description: 'Geo-targeted ads that bring customers to your physical location or service area in Belgium.' },
  { icon: <LoopIcon />, title: 'Remarketing & Retargeting', description: "Re-engage visitors who left your site without converting. Show them targeted retargeting ads across the web — a proven marketing campaign tactic to bring back potential buyers and improve conversion rates." },
  { icon: <PieIcon />, title: 'Performance Tracking', description: "Detailed analytics showing every key metric: clicks, conversion rates, cost-per-lead, and return on investment. See exactly how each stage of your sales funnel performs and where to optimize." }
]

const steps = [
  { title: 'Strategy & Goal Setting', description: 'We start by understanding your business goals, target audience, and budget. Are you looking for more leads, sales, or brand awareness? We define your marketing campaign objectives, plan your advertising campaign structure, and outline the ad campaigns to run — setting up everything for measurable results from day one.' },
  { title: 'Keyword Research & Targeting', description: 'We use the Google Keyword Planner and competitive analysis tools to build a comprehensive keyword list — including profitable long-tail keywords your customers search for. We analyze competitor bids and strategies, review search volume, and define a bid management approach to maximize every euro of your budget.' },
  { title: 'Ad Creation & Landing Pages', description: 'We write compelling ad copy for every PPC ad and ad group — crafting pay-per-click ads designed to get clicked. We also create or optimize landing pages that turn visitors into customers, making your advertising campaign spend work harder.' },
  { title: 'Campaign Launch & Monitoring', description: 'We launch your campaigns with full tracking in place (conversion tracking, call tracking, etc.) and monitor performance daily. We track every time an ad is clicked, measure per click advertising costs against returns, and catch issues before they waste budget.' },
  { title: 'Optimization & Reporting', description: 'We continuously test ad copy, improve bid management, refine targeting, and eliminate wasted spend. PPC management is ongoing — we run tests to lower CPC, raise Quality Score, and maximize ROI. Monthly reports cover every key metric so you always know your return on investment.' }
]

const faqs = [
  { question: 'What is Google AdWords and how does it differ from Google Ads?', answer: 'Google AdWords was the original name for Google\'s paid search advertising platform — it was rebranded to Google Ads in 2018. The platform is the same: advertisers bid on keywords, and ads appear at the top of search engine results when searchers use matching search queries. It\'s the foundation of all paid search and search engine marketing (SEM). An AdWords account lets you create AdWords campaigns targeting specific keywords, locations, devices, and audiences. Whether you call it AdWords, Google Ads, SEA, or PPC — it\'s the same powerful online marketing tool.' },
  { question: 'What is cost-per-click (CPC) and how does bidding work?', answer: 'Cost-per-click (CPC) is the amount an advertiser pays each time someone clicks their ad. Google Ads uses an auction system: advertisers set a maximum bid on keywords, and Google assigns a Quality Score based on ad relevance, landing page quality, and expected click-through rate (CTR). Advertisers with a high Quality Score can win top positions at a lower CPC than competitors who bid higher but have poor relevance. Understanding bidding, CPC, and Quality Score is critical to running profitable PPC campaigns.' },
  { question: 'What is a landing page and why does it matter for PPC?', answer: 'A landing page is the web page searchers arrive at after clicking your ad. A great landing page directly matches what the ad promised, loads fast, has a clear call to action, and is optimized for conversion rate. Poor landing pages kill PPC campaigns — you can pay for clicks but lose customers because the page doesn\'t convert. We create and optimize landing pages as part of every AdWords campaign we manage.' },
  { question: 'Do you manage Bing Ads and display ads too?', answer: 'Yes. Beyond Google Ads, we also manage Microsoft/Bing Ads campaigns for advertisers who want broader search advertising coverage. We also run Google Display Ads campaigns to advertise across millions of websites, and remarketing campaigns to re-engage searchers who visited your site but didn\'t convert. A multi-channel approach to online marketing maximizes your reach.' },
  { question: 'How much should I budget for Google Ads?', answer: 'It depends on your industry, competition, and goals. We typically recommend starting with at least €500–1,000/month in ad spend for a PPC campaign, plus our management fee. In competitive niches, your cost-per-click may be higher, so a bigger budget is needed to gather enough data to optimize.' },
  { question: 'How quickly will I see results?', answer: 'Unlike SEO (organic search), Google Ads and PPC campaigns deliver instant traffic. You can start getting clicks and leads within hours of launching an ad campaign. However, optimizing for the best conversion rate, lowest CPC, and highest Quality Score takes 1–2 months of ongoing testing and refinement.' },
  { question: "What's the difference between SEO and SEA?", answer: 'SEO (organic search) is free per click but takes 3–6 months to see results in search engine results pages (SERPs). SEA/PPC is paid search — you pay per click but get instant visibility. Ideally, use SEA for immediate results while SEO builds your long-term digital marketing foundation. Together, they dominate both paid and organic search engine results.' },
  { question: 'What are negative keywords and why do they matter?', answer: 'Negative keywords tell Google Ads NOT to show your ads for certain search queries. For example, if you sell premium web design services, you might add "free" as a negative keyword to avoid paying for clicks from searchers who only want free tools. Proper negative keyword management is one of the most important PPC campaign tactics for reducing wasted ad spend.' },
  { question: 'Do I need to sign a long-term contract?', answer: 'No. We offer month-to-month contracts with no lock-in. However, we recommend at least 3 months for a PPC campaign to gather enough data to properly optimize bidding, ad copy, and landing pages for maximum ROI.' },
  { question: "What's your management fee?", answer: 'Our management fee is typically 15–20% of your monthly ad spend, with a minimum of €299/month. This covers strategy, setup, ad campaign creation, optimizing bids and copy, reporting, and ongoing support.' },
  { question: 'What types of PPC ads and search ads can I run on Google?', answer: 'Google Ads supports several formats. Search ads are the text ads that appear in Google results when a searcher types a relevant query — these pay-per-click ads are the most common form of PPC advertising and sit at the bottom of the sales funnel where intent is highest. Display ads appear across websites. Shopping ads show product images for ecommerce. Video ads run on YouTube. For most businesses, search ads are the starting point of any paid search marketing strategy, often combined with retargeting and remarketing to guide searchers through the full conversion funnel.' }
]

export default function SeaCampaigns() {
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
    const mobile = window.innerWidth < 768
    const ctx = gsap.context(() => {
      stepsRef.current.filter(Boolean).forEach((s, i) => gsap.set(s, { opacity: i === 0 ? 1 : 0, y: i === 0 ? 0 : 80 }))
      const progressFill = container.querySelector('.geo-process-fill')
      if (progressFill) gsap.set(progressFill, { scaleY: 1 / steps.length })
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

  const handlePrev = () => { goTo((currentRef.current - 1 + steps.length) % steps.length); startTimer() }
  const handleNext = () => { goTo((currentRef.current + 1) % steps.length); startTimer() }

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
      if (window.innerWidth >= 768) {
        section.querySelectorAll('.geo-particle').forEach((p) => {
          gsap.to(p, { y: `${-60 - Math.random() * 100}`, x: `${(Math.random() - 0.5) * 60}`, opacity: 0, duration: 2 + Math.random() * 3, repeat: -1, delay: Math.random() * 2, ease: 'power1.out' })
        })
      }
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
          <div className="geo-hero-particles" suppressHydrationWarning>
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="geo-particle" suppressHydrationWarning style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, width: `${Math.random() * 4 + 1}px`, height: `${Math.random() * 4 + 1}px` }} />
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
              <p><strong>SEA (Search Engine Advertising)</strong> — also called <strong>PPC (pay-per-click) advertising</strong>, PPC marketing, or Google Ads — is paid search marketing on search engines. When someone searches for keywords related to your business, your pay-per-click ads appear at the top of Google, above all organic results.</p>
              <p>Unlike SEO, pay per click marketing delivers <strong>instant visibility</strong>. Launch an online advertising campaign today and start getting clicks, calls, and customers within hours — without waiting months for engine optimization results to build up.</p>
              <p>The catch? Successful ad campaigns require real expertise. Poorly managed PPC advertising wastes money on irrelevant clicks. Every experienced marketer knows that click advertising without proper ad group structure, negative keywords, and conversion tracking burns budget fast. That&apos;s where we come in.</p>
              <p>At Morfye, we design, launch, and optimize Google Ads campaigns for businesses across Belgium. Whether you want more website traffic, phone calls, form submissions, or ecommerce sales — our paid search marketing and internet marketing expertise delivers campaigns engineered to maximize your return on investment.</p>
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
          <h2 className="geo-faq-heading">Frequently Asked Questions</h2>
          <div className="geo-faq-container">
            {faqs.map((f, i) => (
              <FaqItem key={f.question} index={i} {...f} />
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
