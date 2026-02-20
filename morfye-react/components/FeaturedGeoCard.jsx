import { motion } from 'framer-motion'

export default function FeaturedGeoCard() {
  return (
    <motion.div
      className="featured-geo-card"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7 }}
      whileHover={{ y: -8, boxShadow: '0 16px 40px rgba(255, 146, 43, 0.35)' }}
    >
      <div className="geo-card-content">
        <motion.img
          src="https://images.unsplash.com/photo-1740174459730-33a1983b51af?auto=format&fit=crop&w=900&q=80"
          alt="GEO"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
        />
        <div className="geo-text">
          <h3>GEO - Generative Engine Optimization</h3>
          <p>
            Get your business recommended by AI assistants like ChatGPT, Claude, and Google Gemini.
            We optimize your website so AI chatbots suggest YOUR business when potential clients ask
            for recommendations. This is the future of online visibility.
          </p>
          <motion.a
            href="/geo-optimization"
            className="geo-cta"
            whileHover={{ scale: 1.08, boxShadow: '0 8px 25px rgba(255, 146, 43, 0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More About GEO
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}
