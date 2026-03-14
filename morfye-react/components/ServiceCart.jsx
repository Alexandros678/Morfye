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
      <p className="services-subtitle">
        From custom web development and responsive design to SEO, GEO, web hosting, and Google Ads — we give small businesses
        in Belgium everything they need to build their online presence and grow their digital marketing. One agency, all the tools, zero guesswork.
      </p>

      {/* Featured GEO Card */}
      <div className="featured-geo-card">
        <div className="geo-card-content">
          <img
            src="https://images.unsplash.com/photo-1740174459730-33a1983b51af?auto=format&fit=crop&w=900&q=80"
            alt="GEO - Generative Engine Optimization illustration showing AI assistants recommending businesses"
            width="900" height="600" loading="lazy"
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
          <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80" alt="Custom website design for small businesses in Belgium" width="900" height="600" loading="lazy" />
          <h3>Custom Website Design</h3>
          <p>Professional web design services tailored to your business. Intuitive user experience, responsive design, and custom web design that turns website visitors into clients.</p>
          <Link href="/website-design" className="learn-more-link">Learn More →</Link>
        </div>

        <div className="service-card">
          <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80" alt="Website hosting and maintenance service for Belgian businesses" width="900" height="600" loading="lazy" />
          <h3>Hosting &amp; Maintenance</h3>
          <p>Secure hosting, regular updates, and ongoing technical support to keep your site running smoothly.</p>
          <Link href="/hosting-maintenance" className="learn-more-link">Learn More →</Link>
        </div>

        <div className="service-card">
          <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80" alt="SEO optimization to rank higher on Google in Belgium" width="900" height="600" loading="lazy" />
          <h3>SEO Optimization</h3>
          <p>Search engine optimization to rank higher on Google, grow website traffic, and help potential customers find your business online.</p>
          <Link href="/seo-optimization" className="learn-more-link">Learn More →</Link>
        </div>

        <div className="service-card">
          <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80" alt="Google Ads SEA campaigns management for businesses in Belgium" width="900" height="600" loading="lazy" />
          <h3>SEA Campaigns</h3>
          <p>Google Ads marketing campaigns to bring instant website traffic, reach your target audience, and grow your business online fast.</p>
          <Link href="/sea-campaigns" className="learn-more-link">Learn More →</Link>
        </div>
      </div>
    </section>
  )
}
