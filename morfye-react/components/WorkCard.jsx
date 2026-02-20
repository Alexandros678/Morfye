import { motion } from 'framer-motion'

export default function WorkCard({ image, title, description, link, comingSoon, index = 0 }) {
  return (
    <motion.div
      className={`work-card ${comingSoon ? 'coming-soon' : ''}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ scale: 1.06 }}
    >
      {image && <img src={image} alt={title} />}
      <div className="overlay">
        <h3>{title}</h3>
        <p>{description}</p>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="visit-btn">
            View Project
          </a>
        )}
      </div>
    </motion.div>
  )
}
