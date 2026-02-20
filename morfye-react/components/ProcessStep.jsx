import { motion } from 'framer-motion'

export default function ProcessStep({ number, title, description, index = 0 }) {
  const isEven = index % 2 === 0

  return (
    <motion.div
      className={`timeline-step ${isEven ? 'left' : 'right'}`}
      initial={{ opacity: 0, x: isEven ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: 'easeOut' }}
    >
      <div className="timeline-connector" />

      <motion.div
        className="timeline-number"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.15 + 0.2, type: 'spring', stiffness: 200 }}
      >
        {number}
      </motion.div>

      <div className="timeline-card">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </motion.div>
  )
}
