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
          <img src="/morfye-logo.webp" alt="Morfye web design agency logo" title="Morfye web design agency logo" className="logo-img" width="61" height="61" />
          <div className="logo">
            {'orfye'.split('').map((letter, i) => (
              <span key={i} style={{ animationDelay: `${(i + 1) * 0.1}s` }}>
                {letter}
              </span>
            ))}
          </div>
        </div>

        <nav>
          <a onClick={() => scrollTo('about')} title="About Morfye web design agency">About</a>
          <a onClick={() => scrollTo('services')} title="Our web design and digital marketing services">Services</a>
          <a onClick={() => scrollTo('work')} title="Our web design portfolio">Our Work</a>
          <a onClick={() => scrollTo('contact')} title="Contact Morfye">Contact</a>
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
        <a onClick={() => scrollTo('about')} title="About Morfye web design agency">About</a>
        <a onClick={() => scrollTo('services')} title="Our web design and digital marketing services">Services</a>
        <a onClick={() => scrollTo('work')} title="Our web design portfolio">Our Work</a>
        <a onClick={() => scrollTo('contact')} title="Contact Morfye">Contact</a>
        <div className="mobile-theme-toggle" onClick={toggleTheme}>
          <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} mobile />
        </div>
      </div>
    </>
  )
}
