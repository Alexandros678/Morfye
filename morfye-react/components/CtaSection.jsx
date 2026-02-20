import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import gsap from 'gsap'

export default function CtaSection({ title, subtitle, buttons }) {
  const particlesRef = useRef(null)

  const [particles] = useState(() =>
    Array.from({ length: 15 }, () => ({
      size: Math.random() * 5 + 2,
      left: Math.random() * 100,
      top: Math.random() * 100
    }))
  )

  useEffect(() => {
    const container = particlesRef.current
    if (!container) return

    const ctx = gsap.context(() => {
      container.querySelectorAll('.cta-particle').forEach((p) => {
        gsap.to(p, {
          y: `${-60 - Math.random() * 100}`,
          x: `${(Math.random() - 0.5) * 60}`,
          opacity: 0,
          duration: 2 + Math.random() * 3,
          repeat: -1,
          delay: Math.random() * 2,
          ease: 'power1.out'
        })
      })
    }, container)

    return () => ctx.revert()
  }, [])

  return (
    <section className="cta-section-v2">
      <div ref={particlesRef} className="cta-particles">
        {particles.map((p, i) => (
          <div
            key={i}
            className="cta-particle"
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              left: `${p.left}%`,
              top: `${p.top}%`
            }}
          />
        ))}
      </div>

      <motion.div
        className="cta-content"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {subtitle}
        </motion.p>

        <motion.div
          className="cta-buttons-v2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {buttons.map((btn, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={btn.href}
                className={`cta-btn-v2 ${btn.secondary ? 'cta-btn-secondary' : 'cta-btn-primary'}`}
              >
                {btn.label}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
