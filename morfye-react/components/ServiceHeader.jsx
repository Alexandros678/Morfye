import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import ThemeToggle from './ThemeToggle'

export default function ServiceHeader({ darkMode, toggleTheme, navLinks = [] }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const headerRef = useRef(null)
  const router = useRouter()

  useEffect(() => {
    const header = headerRef.current
    if (!header) return
    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 50)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header ref={headerRef} className="service-header">
        <div className="logo-container" onClick={() => router.push('/')}>
          <img src="/Untitled-3.png" alt="Morfye" className="logo-img" />
          <div className="logo">
            {'orfye'.split('').map((letter, i) => (
              <span key={i} style={{ animationDelay: `${(i + 1) * 0.1}s` }}>
                {letter}
              </span>
            ))}
          </div>
        </div>

        <nav>
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`}>{link.label}</a>
          ))}
          <a href="/#contact">Contact</a>
          <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
        </nav>

        <div
          className={`menu-toggle ${menuOpen ? 'menu-open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </header>

      <div className={`mobile-nav ${menuOpen ? 'show' : ''}`}>
        {navLinks.map((link) => (
          <a key={link.id} href={`#${link.id}`} onClick={() => setMenuOpen(false)}>{link.label}</a>
        ))}
        <a href="/#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        <div className="mobile-theme-toggle" onClick={toggleTheme}>
          <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} mobile />
        </div>
      </div>
    </>
  )
}
