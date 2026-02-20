import { motion } from 'framer-motion'
import WorkCard from './WorkCard'

const projects = [
  {
    image: '/image.png',
    title: 'Personal Portfolio',
    description: 'Designed and developed as a showcase of creative and technical skills.',
    link: 'https://alexandrosgkiorgkinis.com'
  },
  {
    image: '/avsd.png',
    title: 'AV Signature Detailing',
    description: 'Professional car detailing website for a Belgian car wash company with online booking system.',
    link: 'https://avsignaturedetailing.be/'
  },
  {
    title: 'More Projects Coming Soon',
    description: "We're crafting something special. Stay tuned.",
    comingSoon: true
  }
]

export default function Work() {
  return (
    <section id="work" className="work-section">
      <div className="work-content">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Work
        </motion.h2>
        <motion.p
          className="intro"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We combine creativity with technical expertise to deliver websites that engage and convert.
          Explore our work to see what we can build for you.
        </motion.p>

        <div className="work-gallery">
          {projects.map((project, i) => (
            <WorkCard key={project.title} {...project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
