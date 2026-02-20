import { useEffect, useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const WebDesignIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="8" width="40" height="28" rx="3" stroke="currentColor" strokeWidth="2" />
    <line x1="4" y1="16" x2="44" y2="16" stroke="currentColor" strokeWidth="2" />
    <circle cx="8" cy="12" r="1.5" fill="currentColor" />
    <circle cx="13" cy="12" r="1.5" fill="currentColor" />
    <circle cx="18" cy="12" r="1.5" fill="currentColor" />
    <rect x="8" y="20" width="12" height="12" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <line x1="24" y1="20" x2="40" y2="20" stroke="currentColor" strokeWidth="1.5" />
    <line x1="24" y1="25" x2="36" y2="25" stroke="currentColor" strokeWidth="1.5" />
    <line x1="24" y1="30" x2="40" y2="30" stroke="currentColor" strokeWidth="1.5" />
    <line x1="16" y1="40" x2="32" y2="40" stroke="currentColor" strokeWidth="2" />
  </svg>
)

const SeoIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="2" />
    <line x1="30" y1="30" x2="44" y2="44" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <path d="M14 20 L18 24 L26 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const GeoIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2" />
    <path d="M24 4 C24 4 16 16 16 24 C16 32 24 44 24 44" stroke="currentColor" strokeWidth="1.5" />
    <path d="M24 4 C24 4 32 16 32 24 C32 32 24 44 24 44" stroke="currentColor" strokeWidth="1.5" />
    <ellipse cx="24" cy="24" rx="20" ry="8" stroke="currentColor" strokeWidth="1.5" />
    <path d="M16 14 L20 18 L24 15 L28 19 L32 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="24" cy="24" r="3" fill="currentColor" opacity="0.4" />
  </svg>
)

const HostingIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="6" width="32" height="12" rx="3" stroke="currentColor" strokeWidth="2" />
    <rect x="8" y="22" width="32" height="12" rx="3" stroke="currentColor" strokeWidth="2" />
    <circle cx="14" cy="12" r="2" fill="currentColor" />
    <circle cx="14" cy="28" r="2" fill="currentColor" />
    <line x1="20" y1="12" x2="34" y2="12" stroke="currentColor" strokeWidth="1.5" />
    <line x1="20" y1="28" x2="34" y2="28" stroke="currentColor" strokeWidth="1.5" />
    <path d="M20 38 L24 42 L28 38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18 34 L24 34" stroke="currentColor" strokeWidth="2" />
    <path d="M24 34 L30 34" stroke="currentColor" strokeWidth="2" />
  </svg>
)

const SeaIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 36 L16 20 L24 28 L32 12 L40 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="32" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
    <path d="M34 10 L40 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M36 4 L40 4 L40 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="8" y1="42" x2="40" y2="42" stroke="currentColor" strokeWidth="1.5" />
    <rect x="12" y="36" width="4" height="6" fill="currentColor" opacity="0.3" />
    <rect x="20" y="32" width="4" height="10" fill="currentColor" opacity="0.3" />
    <rect x="28" y="28" width="4" height="14" fill="currentColor" opacity="0.3" />
    <rect x="36" y="34" width="4" height="8" fill="currentColor" opacity="0.3" />
  </svg>
)

const icons = [GeoIcon, SeoIcon, WebDesignIcon, HostingIcon, SeaIcon]

const services = [
  {
    number: '01',
    title: 'GEO Optimization',
    desc: 'The future of search. Get recommended by ChatGPT, Claude, and Gemini when people ask for help.',
    link: '/geo-optimization',
    featured: true
  },
  {
    number: '02',
    title: 'SEO Optimization',
    desc: 'Get found on Google. We optimize every page so your ideal customers discover you organically.',
    link: '/seo-optimization'
  },
  {
    number: '03',
    title: 'Website Design',
    desc: 'The foundation. A modern, responsive website that tells your story and converts visitors into clients.',
    link: '/website-design'
  },
  {
    number: '04',
    title: 'Hosting & Maintenance',
    desc: 'Always online, always secure. We handle updates, backups, and speed so you never worry.',
    link: '/hosting-maintenance'
  },
  {
    number: '05',
    title: 'SEA Campaigns',
    desc: 'Instant traffic. Google Ads campaigns engineered for maximum ROI and real leads.',
    link: '/sea-campaigns'
  }
]

export default function ServiceShowcase() {
  const containerRef = useRef(null)
  const slidesRef = useRef([])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const ctx = gsap.context(() => {
      const slides = slidesRef.current.filter(Boolean)
      const totalSlides = slides.length

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: `+=${totalSlides * 100}%`,
          pin: true,
          scrub: 1
        }
      })

      slides.forEach((slide, i) => {
        if (i === 0) return
        const prev = slides[i - 1]

        // Previous exits
        tl.to(prev.querySelector('.ss-big-number'), {
          scale: 1.5, opacity: 0, duration: 0.4, ease: 'power2.in'
        }, `slide${i}`)
        tl.to(prev.querySelector('.ss-slide-content'), {
          y: -80, opacity: 0, duration: 0.35, ease: 'power2.in'
        }, `slide${i}`)
        tl.to(prev.querySelector('.ss-slide-icon'), {
          scale: 0.5, opacity: 0, duration: 0.3, ease: 'power2.in'
        }, `slide${i}`)
        tl.to(prev, { opacity: 0, duration: 0.1 }, `slide${i}+=0.35`)
        tl.set(prev, { pointerEvents: 'none' }, `slide${i}+=0.36`)

        // Current enters
        tl.fromTo(slide,
          { opacity: 0 },
          { opacity: 1, duration: 0.1 },
          `slide${i}+=0.35`
        )
        tl.set(slide, { pointerEvents: 'auto' }, `slide${i}+=0.46`)
        tl.fromTo(slide.querySelector('.ss-big-number'),
          { scale: 0.5, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.5, ease: 'power2.out' },
          `slide${i}+=0.4`
        )
        tl.fromTo(slide.querySelector('.ss-slide-icon'),
          { scale: 0, opacity: 0, rotation: -20 },
          { scale: 1, opacity: 1, rotation: 0, duration: 0.5, ease: 'back.out(1.5)' },
          `slide${i}+=0.42`
        )
        tl.fromTo(slide.querySelector('.ss-slide-content'),
          { y: 80, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.45, ease: 'power2.out' },
          `slide${i}+=0.45`
        )
        tl.fromTo(slide.querySelector('.ss-accent-line'),
          { scaleX: 0 },
          { scaleX: 1, duration: 0.4, ease: 'power2.out' },
          `slide${i}+=0.5`
        )
      })

      // Progress dots
      const dots = container.querySelectorAll('.ss-dot')
      slides.forEach((_, i) => {
        if (i === 0) return
        tl.to(dots[i - 1], { opacity: 0.3, scale: 0.8, duration: 0.2 }, `slide${i}`)
        tl.to(dots[i], { opacity: 1, scale: 1.2, duration: 0.2 }, `slide${i}+=0.4`)
      })

      // Last slide content fades out naturally
      const lastSlide = slides[slides.length - 1]
      if (lastSlide) {
        tl.to(lastSlide.querySelector('.ss-slide-content'), { opacity: 0, y: -40, duration: 0.3 })
        tl.to(lastSlide.querySelector('.ss-big-number'), { opacity: 0, scale: 1.5, duration: 0.3 }, '-=0.25')
      }

      // Floating particles
      container.querySelectorAll('.ss-particle').forEach((p) => {
        gsap.to(p, {
          y: `${-80 - Math.random() * 160}`,
          x: `${(Math.random() - 0.5) * 80}`,
          opacity: 0,
          duration: 5 + Math.random() * 5,
          repeat: -1,
          delay: Math.random() * 4,
          ease: 'power1.out'
        })
      })
    }, container)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="ss-cinematic" id="services">
      <div className="ss-particles">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="ss-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`
            }}
          />
        ))}
      </div>

      <div className="ss-progress-dots">
        {services.map((s, i) => (
          <div
            key={s.number}
            className="ss-dot"
            style={{
              opacity: i === 0 ? 1 : 0.3,
              transform: i === 0 ? 'scale(1.2)' : 'scale(0.8)'
            }}
          />
        ))}
      </div>

      {services.map((s, i) => {
        const IconComponent = icons[i]
        return (
          <div
            key={s.number}
            ref={(el) => (slidesRef.current[i] = el)}
            className={`ss-slide ${s.featured ? 'ss-slide-featured' : ''}`}
            style={{ opacity: i === 0 ? 1 : 0, pointerEvents: i === 0 ? 'auto' : 'none' }}
          >
            <div className="ss-big-number">{s.number}</div>

            <div className="ss-slide-icon">
              <IconComponent />
            </div>

            <div className="ss-slide-content">
              <div className="ss-accent-line" />
              <h3 className="ss-slide-title">{s.title}</h3>
              <p className="ss-slide-desc">{s.desc}</p>
              <Link href={s.link} className="ss-slide-link">
                Explore service →
              </Link>
            </div>

            <div className="ss-counter">
              <span>{s.number}</span>
              <span className="ss-counter-total">/ 05</span>
            </div>
          </div>
        )
      })}

      <div className="ss-scroll-hint">
        <span>Scroll to explore</span>
        <div className="ss-scroll-line" />
      </div>
    </section>
  )
}
