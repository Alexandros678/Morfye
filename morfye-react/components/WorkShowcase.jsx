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

const loopedProjects = [...projects, ...projects]

export default function WorkShowcase() {
  const sectionRef = useRef(null)
  const trackRef   = useRef(null)
  const thumbRef   = useRef(null)
  const sbTrackRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const track   = trackRef.current
    const thumb   = thumbRef.current
    const sbTrack = sbTrackRef.current
    if (!section || !track || !thumb || !sbTrack) return

    // Use double-raf so layout is fully settled
    let cleanup = () => {}
    const raf1 = requestAnimationFrame(() => {
      const raf2 = requestAnimationFrame(() => {
        const allCards = Array.from(track.children)
        if (allCards.length < projects.length + 1) return

        // Exact loop width = distance between card[0] and card[N] (its duplicate)
        const r0 = allCards[0].getBoundingClientRect()
        const rN = allCards[projects.length].getBoundingClientRect()
        const halfWidth = rN.left - r0.left

        const sbWidth = sbTrack.getBoundingClientRect().width
        if (halfWidth <= 0 || sbWidth <= 0) return

        // Fixed thumb width — 12% of scrollbar, min 50px, max 120px
        const THUMB_W = Math.min(120, Math.max(50, Math.round(sbWidth * 0.12)))
        const MAX_THUMB_LEFT = sbWidth - THUMB_W
        thumb.style.width = `${THUMB_W}px`
        thumb.style.left  = '0px'

        let x             = 0
        let isUser        = false
        let userTimer     = null
        let skipThumb     = 0   // frames to skip thumb update during reset transition
        let resetTimer    = null
        const SPEED       = 0.9
        const RESET_MS    = 500 // duration of smooth reset animation

        const updateThumb = () => {
          if (skipThumb > 0) { skipThumb--; return }
          const progress = (x % halfWidth) / halfWidth
          const left = Math.round(Math.min(Math.max(0, progress * MAX_THUMB_LEFT), MAX_THUMB_LEFT))
          thumb.style.left = `${left}px`
        }

        const triggerThumbReset = () => {
          // Animate thumb smoothly back to left
          thumb.style.transition = `left ${RESET_MS}ms ease-in-out`
          thumb.style.left = '0px'
          skipThumb = Math.ceil((RESET_MS / 1000) * 60) // skip ~frames for that duration
          clearTimeout(resetTimer)
          resetTimer = setTimeout(() => { thumb.style.transition = '' }, RESET_MS)
        }

        // Auto-scroll ticker
        const tick = () => {
          if (isUser) return
          x += SPEED
          if (x >= halfWidth) {
            x -= halfWidth
            triggerThumbReset()
          }
          gsap.set(track, { x: -x })
          updateThumb()
        }
        gsap.ticker.add(tick)

        const pauseAuto = () => {
          isUser = true
          clearTimeout(userTimer)
          userTimer = setTimeout(() => { isUser = false }, 2000)
        }

        // Thumb drag
        let isDragging  = false
        let dragStartMX = 0
        let dragStartX  = 0

        const onThumbDown = (e) => {
          isDragging  = true
          dragStartMX = e.clientX
          dragStartX  = x
          pauseAuto()
          e.preventDefault()
          e.stopPropagation()
        }

        const onMouseMove = (e) => {
          if (!isDragging) return
          const delta   = e.clientX - dragStartMX
          const ratio   = delta / MAX_THUMB_LEFT
          x = Math.min(Math.max(0, dragStartX + ratio * halfWidth), halfWidth - 1)
          gsap.set(track, { x: -x })
          updateThumb()
        }

        const onMouseUp = () => { isDragging = false }

        // Click on track to jump
        const onSbClick = (e) => {
          if (e.target === thumb) return
          const rect   = sbTrack.getBoundingClientRect()
          const clickX = e.clientX - rect.left - THUMB_W / 2
          const ratio  = Math.min(Math.max(0, clickX / MAX_THUMB_LEFT), 1)
          x = ratio * (halfWidth - 1)
          gsap.set(track, { x: -x })
          updateThumb()
          pauseAuto()
        }

        // Touch drag
        let touchStartX = 0
        let touchBaseX  = 0

        const onTouchStart = (e) => {
          touchStartX = e.touches[0].clientX
          touchBaseX  = x
          pauseAuto()
        }
        const onTouchMove = (e) => {
          const delta = touchStartX - e.touches[0].clientX
          x = Math.min(Math.max(0, touchBaseX + delta), halfWidth - 1)
          gsap.set(track, { x: -x })
          updateThumb()
        }

        // Title entrance
        gsap.from('.ws-title span', {
          y: 60, opacity: 0, stagger: 0.15, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: section, start: 'top 80%', toggleActions: 'play none none none' }
        })

        thumb.addEventListener('mousedown', onThumbDown)
        sbTrack.addEventListener('click', onSbClick)
        window.addEventListener('mousemove', onMouseMove)
        window.addEventListener('mouseup', onMouseUp)
        track.addEventListener('touchstart', onTouchStart, { passive: true })
        track.addEventListener('touchmove',  onTouchMove,  { passive: true })

        cleanup = () => {
          gsap.ticker.remove(tick)
          clearTimeout(userTimer)
          clearTimeout(resetTimer)
          ScrollTrigger.getAll().forEach(st => st.kill())
          thumb.removeEventListener('mousedown', onThumbDown)
          sbTrack.removeEventListener('click', onSbClick)
          window.removeEventListener('mousemove', onMouseMove)
          window.removeEventListener('mouseup', onMouseUp)
          track.removeEventListener('touchstart', onTouchStart)
          track.removeEventListener('touchmove',  onTouchMove)
        }
      })
      return () => cancelAnimationFrame(raf2)
    })

    return () => {
      cancelAnimationFrame(raf1)
      cleanup()
    }
  }, [])

  return (
    <section ref={sectionRef} className="work-showcase" id="work">
      <div className="ws-header">
        <h2 className="ws-title">
          <span>Our </span><span>Work</span>
        </h2>
        <p>Creativity meets code. Explore what we&apos;ve built.</p>
      </div>

      <div className="ws-overflow">
        <div ref={trackRef} className="ws-track">
          {loopedProjects.map((p, i) => (
            <div key={i} className={`ws-card ${p.comingSoon ? 'ws-coming-soon' : ''}`}>
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
          ))}
        </div>
      </div>

      <div className="ws-scrollbar-wrap">
        <div ref={sbTrackRef} className="ws-sb-track">
          <div ref={thumbRef} className="ws-sb-thumb" />
        </div>
      </div>
    </section>
  )
}
