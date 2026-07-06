import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { useLanguage } from '../contexts/LanguageContext'

export default function ServiceCart() {
  const { t } = useLanguage()
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) section.classList.add('visible') },
      { threshold: 0.2 }
    )
    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  const seoGeo = t('serviceCart.seoGeo')
  const cards = t('serviceCart.cards')
  const cardLinks = ['/website-design', '/hosting-maintenance', '/sea-campaigns']
  const cardTitles = ['Custom website design services in Belgium', 'Website hosting and maintenance services', 'Google Ads SEA campaign management in Belgium']

  return (
    <section ref={sectionRef} className="services" id="services">
      <h2>{t('serviceCart.sectionTitle')}</h2>

      {/* Featured SEO & GEO Card */}
      <div className="featured-geo-card">
        <div className="geo-card-content">
          <img
            src="https://images.unsplash.com/photo-1740174459730-33a1983b51af?auto=format&fit=crop&w=900&q=80"
            alt="SEO and GEO optimization illustration showing AI assistants recommending businesses"
            title="SEO and GEO optimization illustration showing AI assistants recommending businesses"
            width="900" height="600" loading="lazy"
          />
          <div className="geo-text">
            <h3>{seoGeo.title}</h3>
            <p>{seoGeo.text}</p>
            <Link href="/seo-geo-optimization" title="Learn more about SEO and GEO optimization" className="geo-cta">{seoGeo.cta}</Link>
          </div>
        </div>
      </div>

      {/* 3 Service Cards */}
      <div className="service-cards">
        {cards.map((card, i) => (
          <div key={i} className="service-card">
            <img
              src={[
                'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
                'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
                'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80'
              ][i]}
              alt={card.title}
              title={card.title}
              width="900" height="600" loading="lazy"
            />
            <h3>{card.title}</h3>
            <p>{card.text}</p>
            <Link href={cardLinks[i]} title={cardTitles[i]} className="learn-more-link">{card.cta}</Link>
          </div>
        ))}
      </div>
    </section>
  )
}
