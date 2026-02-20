import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="about" id="about" style={{ opacity: 1, transform: 'none' }}>
      <motion.img
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
        alt="About us"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />
      <motion.div
        className="about-text"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
      >
        <h2>Who We Are</h2>
        <p>
          We&apos;re a creative web design team dedicated to helping independent professionals
          — like consultants, advisors, and small businesses — build their online presence.
          We focus on clarity, performance, and storytelling.
        </p>
      </motion.div>
    </section>
  )
}
