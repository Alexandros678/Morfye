import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useLanguage } from '../contexts/LanguageContext'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { end: 50, suffix: '+' },
  { end: 98, suffix: '%' },
  { end: 24, suffix: '/7' }
]

export default function WhoWeAre() {
  const { t } = useLanguage()
  const sectionRef = useRef(null)
  const imageColRef = useRef(null)
  const overlayRef = useRef(null)
  const particlesRef = useRef(null)

  const [particles] = useState(() =>
    Array.from({ length: 18 }, () => ({
      size: Math.random() * 5 + 2,
      left: Math.random() * 100,
      top: Math.random() * 100
    }))
  )

  useEffect(() => {
    const section = sectionRef.current
    const imageCol = imageColRef.current
    const overlay = overlayRef.current
    if (!section) return

    const ctx = gsap.context(() => {
      gsap.from('.wwa-label', {
        x: -30,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: '.wwa-label',
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      })

      gsap.from('.wwa-heading span', {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.wwa-heading',
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      })

      gsap.from('.wwa-desc', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        delay: 0.4,
        scrollTrigger: {
          trigger: '.wwa-desc',
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      })

      const statEls = section.querySelectorAll('.wwa-stat')
      statEls.forEach((el, i) => {
        const valueEl = el.querySelector('.wwa-stat-value')
        const { end, suffix } = stats[i]

        gsap.from(el, {
          y: 50,
          opacity: 0,
          duration: 0.6,
          delay: i * 0.15,
          scrollTrigger: {
            trigger: '.wwa-stats',
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        })

        const counter = { val: 0 }
        gsap.to(counter, {
          val: end,
          duration: 1.5,
          ease: 'power2.out',
          delay: i * 0.15,
          scrollTrigger: {
            trigger: '.wwa-stats',
            start: 'top 85%',
            toggleActions: 'play none none none'
          },
          onUpdate() {
            valueEl.textContent = Math.round(counter.val) + suffix
          }
        })
      })

      gsap.from('.wwa-line', {
        scaleX: 0,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.wwa-line',
          start: 'top 90%',
          toggleActions: 'play none none none'
        }
      })
    }, section)

    // Hover: overlay fade only, no image movement
    const onEnter = () => {
      gsap.to(overlay, { opacity: 1, duration: 0.4, ease: 'power2.out' })
    }
    const onLeave = () => {
      gsap.to(overlay, { opacity: 0, duration: 0.4, ease: 'power2.out' })
    }

    imageCol.addEventListener('mouseenter', onEnter)
    imageCol.addEventListener('mouseleave', onLeave)

    // Particles
    const pContainer = particlesRef.current
    if (pContainer) {
      pContainer.querySelectorAll('.wwa-particle').forEach((p) => {
        gsap.to(p, {
          y: `${-80 - Math.random() * 160}`,
          x: `${(Math.random() - 0.5) * 80}`,
          opacity: 0,
          duration: 3 + Math.random() * 4,
          repeat: -1,
          delay: Math.random() * 4,
          ease: 'power1.out'
        })
      })
    }

    return () => {
      ctx.revert()
      imageCol.removeEventListener('mouseenter', onEnter)
      imageCol.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  const statLabels = t('whoWeAre.stats')
  const headingSpans = t('whoWeAre.heading')

  return (
    <section ref={sectionRef} className="who-we-are" id="about">
      {/* Section-wide particles */}
      <div ref={particlesRef} className="wwa-particles">
        {particles.map((p, i) => (
          <div
            key={i}
            className="wwa-particle"
            style={{ width: `${p.size}px`, height: `${p.size}px`, left: `${p.left}%`, top: `${p.top}%` }}
          />
        ))}
      </div>

      <div className="wwa-grid">
        {/* Left - Image */}
        <div className="wwa-image-col" ref={imageColRef}>
          <div className="wwa-image-wrapper">
            <img
              src="/morfye-team.webp"
              alt="Alexandros Gkiorgkinis and Iason Moutevelis, founders of Morfye web design agency in Brussels"
              title="Alex &amp; Iason — Morfye"
              width="800" height="800" loading="lazy"
            />
            <div className="wwa-image-overlay" ref={overlayRef}>
              <span className="wwa-overlay-names">Alexandros Gkiorgkinis &amp; Iason Moutevelis</span>
            </div>
          </div>
        </div>

        {/* Right - Text content */}
        <div className="wwa-text-col">
          <div className="wwa-label">{t('whoWeAre.label')}</div>
          <div className="wwa-line" />
          <h2 className="wwa-heading">
            {headingSpans.map((span, i) => (
              i === headingSpans.length - 1
                ? <span key={i}><em>{span}</em></span>
                : <span key={i}>{span}</span>
            ))}
          </h2>
          <p className="wwa-desc">{t('whoWeAre.desc1')}</p>
          <p className="wwa-desc wwa-desc-2">{t('whoWeAre.desc2')}</p>

          <div className="wwa-stats">
            {stats.map((s, i) => (
              <div key={i} className="wwa-stat">
                <span className="wwa-stat-value">{s.end}{s.suffix}</span>
                <span className="wwa-stat-label">{statLabels[i]?.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
