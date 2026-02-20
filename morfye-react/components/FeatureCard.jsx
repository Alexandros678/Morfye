import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'

export default function FeatureCard({ icon, title, description, index = 0 }) {
  const cardRef = useRef(null)
  const glowRef = useRef(null)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    const handleMove = (e) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      if (glowRef.current) {
        glowRef.current.style.left = `${x}px`
        glowRef.current.style.top = `${y}px`
      }
    }

    card.addEventListener('mousemove', handleMove)
    return () => card.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <motion.div
      ref={cardRef}
      className="feature-card-v2"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
      whileHover={{ y: -8 }}
    >
      <div ref={glowRef} className="feature-glow" />
      <div className="feature-card-border" />

      <div className="feature-icon-v2">
        <span>{icon}</span>
      </div>

      <h3>{title}</h3>
      <p>{description}</p>

      <div className="feature-line" />
    </motion.div>
  )
}
