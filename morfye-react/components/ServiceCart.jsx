import { useEffect, useRef } from 'react'
import Link from 'next/link'

export default function ServiceCart() {
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

  return (
    <section ref={sectionRef} className="services" id="services">
      <h2>What We Offer</h2>

      {/* Featured GEO Card */}
      <div className="featured-geo-card">
        <div className="geo-card-content">
          <img
            src="https://images.unsplash.com/photo-1740174459730-33a1983b51af?auto=format&fit=crop&w=900&q=80"
            alt="GEO"
          />
          <div className="geo-text">
            <h3>GEO - Generative Engine Optimization</h3>
            <p>Get your business recommended by AI assistants like ChatGPT, Claude, and Google Gemini. We optimize your website so AI chatbots suggest YOUR business when potential clients ask for recommendations. This is the future of online visibility.</p>
            <Link href="/geo-optimization" className="geo-cta">Learn More About GEO</Link>
          </div>
        </div>
      </div>

      {/* 4 Service Cards */}
      <div className="service-cards">
        <div className="service-card">
          <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80" alt="Design" />
          <h3>Custom Website Design</h3>
          <p>Tailored, mobile-friendly websites built to fit your business and convert visitors into clients.</p>
          <Link href="/website-design" className="learn-more-link">Learn More →</Link>
        </div>

        <div className="service-card">
          <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80" alt="Hosting" />
          <h3>Hosting &amp; Maintenance</h3>
          <p>Secure hosting, regular updates, and ongoing technical support to keep your site running smoothly.</p>
          <Link href="/hosting-maintenance" className="learn-more-link">Learn More →</Link>
        </div>

        <div className="service-card">
          <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80" alt="SEO" />
          <h3>SEO Optimization</h3>
          <p>Traditional search engine optimization to rank higher on Google and drive organic traffic to your website.</p>
          <Link href="/seo-optimization" className="learn-more-link">Learn More →</Link>
        </div>

        <div className="service-card">
          <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80" alt="SEA" />
          <h3>SEA Campaigns</h3>
          <p>Google Ads campaigns designed to bring instant traffic and maximize your online visibility.</p>
          <Link href="/sea-campaigns" className="learn-more-link">Learn More →</Link>
        </div>
      </div>
    </section>
  )
}
