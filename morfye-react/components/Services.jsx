import { motion } from 'framer-motion'
import ServiceCard from './ServiceCard'
import FeaturedGeoCard from './FeaturedGeoCard'

const services = [
  {
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
    title: 'Custom Website Design',
    description: 'Tailored, mobile-friendly websites built to fit your business and convert visitors into clients.',
    link: '/website-design'
  },
  {
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
    title: 'Hosting & Maintenance',
    description: 'Secure hosting, regular updates, and ongoing technical support to keep your site running smoothly.',
    link: '/hosting-maintenance'
  },
  {
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80',
    title: 'SEO Optimization',
    description: 'Traditional search engine optimization to rank higher on Google and drive organic traffic to your website.',
    link: '/seo-optimization'
  },
  {
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80',
    title: 'SEA Campaigns',
    description: 'Google Ads campaigns designed to bring instant traffic and maximize your online visibility.',
    link: '/sea-campaigns'
  }
]

export default function Services() {
  return (
    <section className="services" id="services" style={{ opacity: 1, transform: 'none' }}>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        What We Offer
      </motion.h2>

      <FeaturedGeoCard />

      <div className="service-cards">
        {services.map((service, i) => (
          <ServiceCard key={service.title} {...service} index={i} />
        ))}
      </div>
    </section>
  )
}
