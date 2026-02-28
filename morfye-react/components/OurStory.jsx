import { useEffect, useRef, useCallback } from 'react'
import gsap from 'gsap'

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
  const currentRef = useRef(0)
  const isAnimating = useRef(false)
  const timerRef = useRef(null)

  const goTo = useCallback((nextIndex) => {
    if (isAnimating.current) return
    const sceneEls = scenesRef.current.filter(Boolean)
    if (!sceneEls.length || nextIndex === currentRef.current) return

    const prevIndex = currentRef.current
    const prev = sceneEls[prevIndex]
    const next = sceneEls[nextIndex]

    isAnimating.current = true
    currentRef.current = nextIndex

    // Update progress bar
    const progressFill = containerRef.current?.querySelector('.story-progress-fill')
    if (progressFill) {
      gsap.to(progressFill, {
        scaleY: (nextIndex + 1) / scenes.length,
        duration: 0.5,
        ease: 'power2.out'
      })
    }

    // Prev exits
    gsap.to(prev, {
      opacity: 0, y: -60, duration: 0.4, ease: 'power2.in',
      onComplete: () => {
        gsap.set(prev, { y: 80 })

        // Next enters
        gsap.fromTo(next,
          { opacity: 0, y: 80 },
          { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out', onComplete: () => {
            isAnimating.current = false
          }}
        )
      }
    })
  }, [])

  const startTimer = useCallback(() => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      goTo((currentRef.current + 1) % scenes.length)
    }, 3500)
  }, [goTo])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const ctx = gsap.context(() => {
      // Initialize scenes
      const sceneEls = scenesRef.current.filter(Boolean)
      sceneEls.forEach((scene, i) => {
        gsap.set(scene, { opacity: i === 0 ? 1 : 0, y: i === 0 ? 0 : 80 })
      })

      // Initialize progress bar to first scene
      const progressFill = container.querySelector('.story-progress-fill')
      if (progressFill) {
        gsap.set(progressFill, { scaleY: 1 / scenes.length })
      }

      // Floating particles
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

  // Only run timer when section is visible on screen
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startTimer()
        } else {
          clearInterval(timerRef.current)
        }
      },
      { threshold: 0.4 }
    )

    observer.observe(container)
    return () => {
      observer.disconnect()
      clearInterval(timerRef.current)
    }
  }, [startTimer])

  const handlePrev = () => {
    goTo((currentRef.current - 1 + scenes.length) % scenes.length)
    startTimer()
  }

  const handleNext = () => {
    goTo((currentRef.current + 1) % scenes.length)
    startTimer()
  }

  return (
    <section
      ref={containerRef}
      className="our-story"
      id="story"
      onMouseEnter={() => clearInterval(timerRef.current)}
      onMouseLeave={startTimer}
    >
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

      <button className="story-nav-arrow story-nav-prev" onClick={handlePrev} aria-label="Previous scene">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M11 17V5M11 5L5 11M11 5L17 11" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <button className="story-nav-arrow story-nav-next" onClick={handleNext} aria-label="Next scene">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M11 5v12M11 17l6-6M11 17l-6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {scenes.map((scene, i) => (
        <div
          key={i}
          ref={(el) => (scenesRef.current[i] = el)}
          className="story-scene"
        >
          <div className="scene-counter">{String(i + 1).padStart(2, '0')}</div>
          <h2 className="scene-title">{scene.title}</h2>
          <p className="scene-text">{scene.text}</p>
        </div>
      ))}
    </section>
  )
}
