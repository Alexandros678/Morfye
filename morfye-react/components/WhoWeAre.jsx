import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { end: 50, suffix: '+', label: 'Projects Delivered' },
  { end: 98, suffix: '%', label: 'Client Satisfaction' },
  { end: 24, suffix: '/7', label: 'Support Available' }
]

export default function WhoWeAre() {
  const sectionRef = useRef(null)
  const imageColRef = useRef(null)
  const overlayRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const imageCol = imageColRef.current
    const overlay = overlayRef.current
    if (!section) return

    const ctx = gsap.context(() => {
      gsap.fromTo(section, {
        opacity: 0,
        y: 60
      }, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      })

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

    return () => {
      ctx.revert()
      imageCol.removeEventListener('mouseenter', onEnter)
      imageCol.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <section ref={sectionRef} className="who-we-are" id="about">
      <div className="wwa-grid">
        {/* Left - Image */}
        <div className="wwa-image-col" ref={imageColRef}>
          <div className="wwa-image-wrapper">
            <img
              src="/about-us.png"
              alt="Morfye team at work"
            />
            <div className="wwa-image-overlay" ref={overlayRef}>
              <span className="wwa-overlay-names">Alexandros Gkiorgkinis &amp; Iason Moutevelis</span>
            </div>
          </div>
        </div>

        {/* Right - Text content */}
        <div className="wwa-text-col">
          <div className="wwa-label">WHO WE ARE</div>
          <div className="wwa-line" />
          <h2 className="wwa-heading">
            <span>Stop chasing</span>
            <span>clients. Start</span>
            <span><em>attracting</em> them.</span>
          </h2>
          <p className="wwa-desc">
            We&apos;re not just designers — we&apos;re strategists. Every pixel, every
            animation, every line of code serves one purpose: turning visitors
            into clients. Based in Brussels, Belgium, we combine creativity with
            data-driven thinking.
          </p>

          <div className="wwa-stats">
            {stats.map((s) => (
              <div key={s.label} className="wwa-stat">
                <span className="wwa-stat-value">{s.end}{s.suffix}</span>
                <span className="wwa-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
