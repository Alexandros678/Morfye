import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'

export default function PageHero({ icon, title, subtitle }) {
  const particlesRef = useRef(null)

  const [particles] = useState(() =>
    Array.from({ length: 30 }, () => ({
      size: Math.random() * 4 + 1,
      left: Math.random() * 100,
      top: Math.random() * 100
    }))
  )

  useEffect(() => {
    const container = particlesRef.current
    if (!container) return

    const ctx = gsap.context(() => {
      container.querySelectorAll('.page-hero-particle').forEach((p) => {
        gsap.to(p, {
          y: `${-80 - Math.random() * 150}`,
          x: `${(Math.random() - 0.5) * 80}`,
          opacity: 0,
          duration: 2.5 + Math.random() * 3,
          repeat: -1,
          delay: Math.random() * 2,
          ease: 'power1.out'
        })
      })
    }, container)

    return () => ctx.revert()
  }, [])

  // Split title into words for staggered animation
  const words = title.split(' ')

  return (
    <section className="page-hero-v2">
      <div ref={particlesRef} className="page-hero-particles">
        {particles.map((p, i) => (
          <div
            key={i}
            className="page-hero-particle"
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              left: `${p.left}%`,
              top: `${p.top}%`
            }}
          />
        ))}
      </div>

      {/* Animated background shapes */}
      <motion.div
        className="hero-shape hero-shape-1"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="hero-shape hero-shape-2"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      />

      <div className="page-hero-content">
        <motion.div
          className="hero-icon-v2"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        >
          <i className={icon}></i>
        </motion.div>

        <h1 className="page-hero-title">
          {words.map((word, i) => (
            <motion.span
              key={i}
              className="hero-word"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
            >
              {word}{' '}
            </motion.span>
          ))}
        </h1>

        <motion.p
          className="page-hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {subtitle}
        </motion.p>

        <motion.div
          className="hero-scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            className="scroll-arrow"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ↓
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
