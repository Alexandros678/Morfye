import { useEffect, useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    icon: '🤖',
    title: 'GEO Optimization',
    desc: 'Get recommended by AI assistants like ChatGPT, Claude & Gemini.',
    tag: 'MOST POPULAR',
    link: '/geo-optimization'
  },
  {
    icon: '🔍',
    title: 'SEO Optimization',
    desc: 'Rank higher on Google. Drive organic traffic that converts.',
    link: '/seo-optimization'
  },
  {
    icon: '🎨',
    title: 'Website Design',
    desc: 'Modern, responsive websites that tell your story beautifully.',
    link: '/website-design'
  },
  {
    icon: '🛡️',
    title: 'Hosting & Maintenance',
    desc: 'Secure, fast, always-on. We handle the tech so you don\'t have to.',
    link: '/hosting-maintenance'
  },
  {
    icon: '📣',
    title: 'SEA Campaigns',
    desc: 'Google Ads that deliver instant traffic and measurable ROI.',
    link: '/sea-campaigns'
  }
]

export default function ServiceCart() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])
  const cartRef = useRef(null)
  const counterRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const ctx = gsap.context(() => {
      // Pin the section for the full scroll-through
      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: `+=${services.length * 80 + 40}%`,
        pin: true,
        scrub: true
      })

      // Title reveal
      gsap.from('.sc-title-line', {
        y: 60,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: section,
          start: 'top 60%',
          toggleActions: 'play none none none'
        }
      })

      // Each card flies in from the left and "drops" into the cart area on the right
      cardsRef.current.forEach((card, i) => {
        if (!card) return
        const startOffset = (i * 0.8) / (services.length * 0.8 + 0.4)
        const endOffset = ((i * 0.8) + 0.6) / (services.length * 0.8 + 0.4)

        // Card starts offscreen left, slides to center, then shrinks into cart
        const cardTl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: `+=${services.length * 80 + 40}%`,
            scrub: true
          }
        })

        // Wait for this card's turn
        if (i > 0) {
          cardTl.to({}, { duration: startOffset })
        }

        // Fly in from left
        cardTl.fromTo(card, {
          x: '-120%',
          opacity: 0,
          scale: 0.8,
          rotation: -5
        }, {
          x: '0%',
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.3,
          ease: 'power2.out'
        })

        // Hold in center
        cardTl.to(card, { duration: 0.15 })

        // Shrink and fly into cart
        cardTl.to(card, {
          x: '100%',
          y: -20,
          scale: 0.3,
          opacity: 0,
          rotation: 5,
          duration: 0.3,
          ease: 'power2.in'
        })

        // Update cart counter
        const cartItem = section.querySelector(`.cart-item-${i}`)
        if (cartItem) {
          const showTime = startOffset + 0.35 * ((endOffset - startOffset) || 0.15)
          gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: 'top top',
              end: `+=${services.length * 80 + 40}%`,
              scrub: true
            }
          })
          .to({}, { duration: showTime > 0 ? showTime : 0.1 })
          .to(cartItem, {
            opacity: 1,
            x: 0,
            duration: 0.1,
            ease: 'back.out(1.7)'
          })
        }
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="service-cart" id="services">
      {/* Left side - Section title + active card area */}
      <div className="sc-left">
        <div className="sc-header">
          <div className="sc-title-line">What We</div>
          <div className="sc-title-line sc-title-accent">Offer</div>
        </div>

        <div className="sc-card-stage">
          {services.map((s, i) => (
            <div
              key={s.title}
              ref={(el) => (cardsRef.current[i] = el)}
              className="sc-card"
              style={{ opacity: 0 }}
            >
              {s.tag && <div className="sc-tag">{s.tag}</div>}
              <div className="sc-card-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <Link href={s.link} className="sc-card-link">
                Learn more →
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Right side - Cart visualization */}
      <div className="sc-right">
        <div ref={cartRef} className="sc-cart">
          <div className="sc-cart-header">
            <span className="sc-cart-icon">🛒</span>
            <span className="sc-cart-title">Your Growth Stack</span>
            <span ref={counterRef} className="sc-cart-count">{services.length}</span>
          </div>

          <div className="sc-cart-items">
            {services.map((s, i) => (
              <div
                key={s.title}
                className={`sc-cart-item cart-item-${i}`}
                style={{ opacity: 0, transform: 'translateX(30px)' }}
              >
                <span className="sc-ci-icon">{s.icon}</span>
                <span className="sc-ci-name">{s.title}</span>
                <span className="sc-ci-check">✓</span>
              </div>
            ))}
          </div>

          <div className="sc-cart-footer">
            <Link href="/#contact" className="sc-cart-cta">
              Get Your Custom Bundle →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
