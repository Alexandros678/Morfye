import { motion } from 'framer-motion'

export default function ServiceCard({ image, title, description, link, index = 0 }) {
  return (
    <motion.div
      className="service-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        y: -12,
        scale: 1.03,
        boxShadow: '0 12px 30px rgba(255, 146, 43, 0.2)'
      }}
    >
      <motion.img
        src={image}
        alt={title}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} className="learn-more-link">Learn More →</a>
    </motion.div>
  )
}
