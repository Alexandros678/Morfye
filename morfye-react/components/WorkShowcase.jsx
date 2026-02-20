import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    image: '/image.png',
    title: 'Personal Portfolio',
    category: 'Web Design',
    description: 'Creative showcase of technical skills with modern animations and smooth interactions.',
    link: 'https://alexandrosgkiorgkinis.com'
  },
  {
    image: '/avsd.png',
    title: 'AV Signature Detailing',
    category: 'Business Website',
    description: 'Professional car detailing site with online booking system for a Belgian company.',
    link: 'https://avsignaturedetailing.be/'
  },
  {
    title: 'Your Project?',
    category: 'Coming Next',
    description: "We're ready to build something amazing for you. Let's talk.",
    comingSoon: true
  }
]

export default function WorkShowcase() {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const track = trackRef.current
    if (!section || !track) return

    const ctx = gsap.context(() => {
      // Title reveal
      gsap.from('.ws-header h2 span', {
        y: 80,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.ws-header',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      })

      gsap.from('.ws-header p', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.3,
        scrollTrigger: {
          trigger: '.ws-header',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      })

      // Horizontal scroll
      const totalScroll = track.scrollWidth - section.offsetWidth

      gsap.to(track, {
        x: -totalScroll,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${totalScroll}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1
        }
      })

      // Subtle scale on images
      track.querySelectorAll('.ws-card-image img').forEach((img) => {
        gsap.fromTo(img, { scale: 1.08 }, {
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: () => `+=${totalScroll}`,
            scrub: true
          }
        })
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="work-showcase" id="work">
      <div ref={trackRef} className="ws-track">
        {/* Header panel */}
        <div className="ws-panel ws-header">
          <h2>
            <span>Our</span>
            <span>Work</span>
          </h2>
          <p>Creativity meets code. Explore what we&apos;ve built.</p>
        </div>

        {/* Project panels */}
        {projects.map((p) => (
          <div key={p.title} className="ws-panel">
            <div className={`ws-card ${p.comingSoon ? 'ws-coming-soon' : ''}`}>
              {p.image && (
                <div className="ws-card-image">
                  <img src={p.image} alt={p.title} />
                </div>
              )}
              {p.comingSoon && (
                <div className="ws-card-image ws-placeholder">
                  <span>?</span>
                </div>
              )}
              <div className="ws-card-info">
                <span className="ws-category">{p.category}</span>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                {p.link && (
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="ws-visit">
                    Visit Site →
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
