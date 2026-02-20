import { useState } from 'react'
import ThemeToggle from './ThemeToggle'

export default function Header({ darkMode, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <header className="site-header">
        <div className="logo-container" onClick={scrollToTop}>
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
          <a onClick={() => scrollTo('about')}>About</a>
          <a onClick={() => scrollTo('services')}>Services</a>
          <a onClick={() => scrollTo('work')}>Our Work</a>
          <a onClick={() => scrollTo('contact')}>Contact</a>
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

      {/* Mobile Nav */}
      <div className={`mobile-nav ${menuOpen ? 'show' : ''}`}>
        <a onClick={() => scrollTo('about')}>About</a>
        <a onClick={() => scrollTo('services')}>Services</a>
        <a onClick={() => scrollTo('work')}>Our Work</a>
        <a onClick={() => scrollTo('contact')}>Contact</a>
        <div className="mobile-theme-toggle" onClick={toggleTheme}>
          <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} mobile />
        </div>
      </div>
    </>
  )
}
