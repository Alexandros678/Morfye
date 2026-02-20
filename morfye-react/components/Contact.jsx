import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const sectionRef = useRef(null)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch('https://formspree.io/f/xyzlgpjd', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
    })

    if (response.ok) {
      alert('Thank you! Your message has been sent.')
      setFormData({ name: '', email: '', message: '' })
    } else {
      alert('Oops! Something went wrong. Please try again.')
    }
  }

  useEffect(() => {
    const section = sectionRef.current
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
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="contact" id="contact" style={{ opacity: 0 }}>
      <div className="contact-inner">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Let&apos;s build something great together
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Tell us about your project. We&apos;ll review it and get back to you within 24 hours.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="form-group">
            <label htmlFor="cf-name">Your Name</label>
            <input type="text" id="cf-name" name="name" placeholder="John Doe" value={formData.name} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="cf-email">Your Email</label>
            <input type="email" id="cf-email" name="email" placeholder="john@example.com" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="cf-message">Project Brief / Message</label>
            <textarea id="cf-message" name="message" rows="4" placeholder="Tell us what you're looking for..." value={formData.message} onChange={handleChange} required />
          </div>

          <motion.button
            type="submit"
            className="btn-primary"
            whileHover={{ scale: 1.08, boxShadow: '0 8px 25px rgba(255, 146, 43, 0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            Book Free Meeting
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}
