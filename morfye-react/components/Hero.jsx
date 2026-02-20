import { useState, useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

const MorfyeLogo3D = dynamic(() => import('./MorfyeLogo3D'), { ssr: false })

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const [dynamicText, setDynamicText] = useState('')
  const words = ['attractive', 'high-converting', 'modern']
  const heroRef = useRef(null)
  const boxRef = useRef(null)
  const particlesRef = useRef(null)
  const logoScaleRef = useRef(0.15)

  // Typing effect — delayed until reveal completes
  useEffect(() => {
    let timeout
    let i = 0, j = 0, isDeleting = false

    const type = () => {
      const currentWord = words[i]
      if (!isDeleting) {
        setDynamicText(currentWord.substring(0, j + 1))
        j++
        if (j === currentWord.length) {
          isDeleting = true
          timeout = setTimeout(type, 1000)
          return
        }
      } else {
        setDynamicText(currentWord.substring(0, j - 1))
        j--
        if (j === 0) {
          isDeleting = false
          i = (i + 1) % words.length
        }
      }
      timeout = setTimeout(type, isDeleting ? 80 : 120)
    }

    // Start typing after the reveal animation (2s)
    timeout = setTimeout(type, 2200)
    return () => clearTimeout(timeout)
  }, [])

  // Floating particles (animated by GSAP after mount)
  const [particles] = useState(() =>
    Array.from({ length: 20 }, () => ({
      size: Math.random() * 6 + 2,
      left: Math.random() * 100,
      top: Math.random() * 100
    }))
  )

  useEffect(() => {
    const container = particlesRef.current
    if (!container) return

    const ctx = gsap.context(() => {
      container.querySelectorAll('.hero-particle').forEach((p) => {
        gsap.to(p, {
          y: `${-100 - Math.random() * 200}`,
          x: `${(Math.random() - 0.5) * 100}`,
          opacity: 0,
          duration: 3 + Math.random() * 4,
          repeat: -1,
          delay: 2.5 + Math.random() * 3,
          ease: 'power1.out'
        })
      })
    }, container)

    return () => ctx.revert()
  }, [])

  // LOAD ANIMATION: box grows from small to fullscreen
  useEffect(() => {
    const hero = heroRef.current
    const box = boxRef.current
    if (!hero || !box) return

    // Grab header element directly (it's outside the hero scope)
    const header = document.querySelector('.site-header')
    if (header) gsap.set(header, { opacity: 0, y: -30 })

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } })

      // Phase 1: thin horizontal line appears (0 -> 25vw, 0 -> 5vh)
      tl.fromTo(box, {
        width: '0vw',
        height: '0vh',
        borderRadius: '12px',
        opacity: 1
      }, {
        width: '25vw',
        height: '5vh',
        duration: 0.7,
        ease: 'power2.out'
      })

      // Phase 2: expand to full screen + 3D logo fades in
      .to(box, {
        width: '100vw',
        height: '100vh',
        borderRadius: '0px',
        duration: 1,
        ease: 'power2.inOut'
      })

      // 3D logo reveals — grows from tiny to full size
      tl.to('.logo-3d-container', { opacity: 1, duration: 0.8, ease: 'power2.out' }, '-=0.8')
      tl.to(logoScaleRef, { current: 0.75, duration: 1.4, ease: 'power2.out' }, '-=0.8')

      // Phase 3: header slides in from top
      if (header) {
        tl.to(header, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.5')
      }

      // Phase 4: content fades in staggered
      tl.to('.hero-line-1', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.35')
      tl.to('.hero-line-2', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.35')
      tl.to('.hero-subtitle', { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '-=0.3')
      tl.to('.hero-buttons', { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '-=0.25')
      tl.to('.hero-scroll-down', { opacity: 1, duration: 0.4 }, '-=0.2')

      // SCROLL EXIT: logo grows, text fades, then blur out
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: '+=150%',
          pin: true,
          scrub: true
        }
      })

      // Text fades out
      scrollTl.to('.hero-scroll-down', { opacity: 0, y: 20, duration: 0.1 }, 0)
      scrollTl.to('.hero-line-1', { y: -120, opacity: 0, duration: 0.3 }, 0)
      scrollTl.to('.hero-line-2', { y: -80, opacity: 0, duration: 0.3 }, 0.05)
      scrollTl.to('.hero-subtitle', { y: -50, opacity: 0, duration: 0.25 }, 0.08)
      scrollTl.to('.hero-buttons', { y: 60, opacity: 0, duration: 0.25 }, 0.08)

      // 3D logo scales up as you scroll — becomes the focus
      scrollTl.to(logoScaleRef, { current: 1.5, duration: 0.6, ease: 'none' }, 0)

      // Then fades out
      scrollTl.to('.logo-3d-container', { opacity: 0, duration: 0.35 }, 0.5)
      scrollTl.to('.hero-reveal-box', { filter: 'blur(8px)', duration: 0.4 }, 0.6)

      // After load animation finishes, re-record scroll starting values
      // so they capture opacity:1 instead of the initial opacity:0
      tl.call(() => scrollTl.invalidate())

    }, hero)

    return () => ctx.revert()
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section ref={heroRef} className="hero" id="home">
      {/* The expanding box */}
      <div ref={boxRef} className="hero-reveal-box">
        <div ref={particlesRef} className="hero-particles">
          {particles.map((p, i) => (
            <div
              key={i}
              className="hero-particle"
              style={{
                width: `${p.size}px`,
                height: `${p.size}px`,
                left: `${p.left}%`,
                top: `${p.top}%`
              }}
            />
          ))}
        </div>
      </div>
      <div className="logo-3d-container">
        <MorfyeLogo3D scaleRef={logoScaleRef} />
      </div>

      {/* Content — starts hidden, GSAP reveals after box expand */}
      <div className="hero-content">
        <h1 className="hero-line-1" style={{ opacity: 0, transform: 'translateY(40px)' }}>
          We create <span>{dynamicText}</span>
          <span className="cursor">|</span>
        </h1>

        <h1 className="hero-line-2" style={{ opacity: 0, transform: 'translateY(40px)' }}>
          websites for professionals
        </h1>

        <p className="hero-subtitle" style={{ opacity: 0, transform: 'translateY(30px)' }}>
          Modern, high-converting websites designed to attract, engage, and convert clients.
        </p>

        <div className="hero-buttons" style={{ opacity: 0, transform: 'translateY(30px)' }}>
          <motion.button
            className="primary-btn"
            onClick={() => scrollTo('contact')}
            whileHover={{ scale: 1.08, boxShadow: '0 8px 25px rgba(255, 146, 43, 0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            Book Consultation
          </motion.button>
          <motion.button
            className="secondary-btn black"
            onClick={() => scrollTo('work')}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            See Our Work
          </motion.button>
        </div>
      </div>

      <div className="hero-scroll-down" style={{ opacity: 0 }}>
        <span>Scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  )
}
