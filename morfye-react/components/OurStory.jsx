import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const scenes = [
  {
    title: 'We saw a problem.',
    text: "Talented professionals with terrible websites. Losing clients — not because they weren't good, but because their online presence didn't show it.",
  },
  {
    title: 'So we built Morfye.',
    text: "A studio in Brussels, Belgium. One mission: make independent professionals look as good online as they are in person. No templates. No shortcuts.",
  },
  {
    title: 'Then AI changed everything.',
    text: "People stopped Googling. They started asking ChatGPT. We became one of the first in Belgium to master GEO — Generative Engine Optimization.",
  }
]

export default function OurStory() {
  const containerRef = useRef(null)
  const scenesRef = useRef([])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: `+=${scenes.length * 100}%`,
          pin: true,
          scrub: 1
        }
      })

      scenesRef.current.forEach((scene, i) => {
        if (i === 0) return
        const prev = scenesRef.current[i - 1]
        tl.to(prev, { opacity: 0, y: -60, duration: 0.4, ease: 'power2.in' })
        tl.fromTo(scene,
          { opacity: 0, y: 80 },
          { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
        )
      })

      // Last scene fades out naturally
      const lastScene = scenesRef.current[scenes.length - 1]
      if (lastScene) {
        tl.to(lastScene, { opacity: 0, y: -40, duration: 0.3, ease: 'power2.in' })
      }

      const progressBar = container.querySelector('.story-progress-fill')
      if (progressBar) {
        gsap.to(progressBar, {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top top',
            end: `+=${scenes.length * 100}%`,
            scrub: true
          }
        })
      }

      container.querySelectorAll('.story-particle').forEach((p) => {
        gsap.to(p, {
          y: `${-100 - Math.random() * 200}`,
          x: `${(Math.random() - 0.5) * 100}`,
          opacity: 0,
          duration: 4 + Math.random() * 4,
          repeat: -1,
          delay: Math.random() * 3,
          ease: 'power1.out'
        })
      })

    }, container)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="our-story" id="story">
      <div className="story-particles">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="story-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`
            }}
          />
        ))}
      </div>

      <div className="story-progress">
        <div className="story-progress-fill" />
      </div>

      {scenes.map((scene, i) => (
        <div
          key={i}
          ref={(el) => (scenesRef.current[i] = el)}
          className="story-scene"
          style={{ opacity: i === 0 ? 1 : 0 }}
        >
          <div className="scene-counter">{String(i + 1).padStart(2, '0')}</div>
          <h2 className="scene-title">{scene.title}</h2>
          <p className="scene-text">{scene.text}</p>
        </div>
      ))}

      <div className="story-scroll-hint">
        <span>Scroll to explore</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}
