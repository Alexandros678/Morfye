import { useEffect, useRef } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

export default function Manifesto() {
  const { t } = useLanguage()
  const contentRef = useRef(null)

  useEffect(() => {
    const blocks = contentRef.current?.querySelectorAll('.manifesto-block')
    if (!blocks) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    blocks.forEach((block) => observer.observe(block))
    return () => observer.disconnect()
  }, [])

  const blocks = t('manifesto.blocks')

  return (
    <section className="manifesto">
      <div className="manifesto-inner">
        <h2 className="manifesto-title">{t('manifesto.title')}</h2>
        <details className="manifesto-details">
          <summary className="manifesto-summary">
            <span className="manifesto-toggle">
              <span className="manifesto-toggle-label">{t('manifesto.approachLabel')}</span>
              <span className="manifesto-toggle-icon" aria-hidden="true" />
            </span>
          </summary>

          <div className="manifesto-content" ref={contentRef}>
            {blocks.map((block, i) => (
              <div key={i} className="manifesto-block">
                <h3>{block.title}</h3>
                <p>{block.text}</p>
              </div>
            ))}
          </div>
        </details>
      </div>
    </section>
  )
}
