import { useState } from 'react'
import ThemeToggle from './ThemeToggle'
import LanguageSwitcher from './LanguageSwitcher'
import { useLanguage } from '../contexts/LanguageContext'

export default function Header({ darkMode, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const { t } = useLanguage()

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
        <div className="logo-container" onClick={scrollToTop} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <img src="/morfye-logo.webp" alt="Morfye web design agency logo" title="Morfye web design agency logo" className="logo-img" width="61" height="61" style={{ order: 0, flexShrink: 0 }} />
          <div className="logo" style={{ order: 1 }}>
            {'orfye'.split('').map((letter, i) => (
              <span key={i} style={{ animationDelay: `${(i + 1) * 0.1}s` }}>
                {letter}
              </span>
            ))}
          </div>
        </div>

        <nav>
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('about') }} title="About Morfye web design agency">{t('nav.about')}</a>
          <a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services') }} title="Our web design and digital marketing services">{t('nav.services')}</a>
          <a href="#work" onClick={(e) => { e.preventDefault(); scrollTo('work') }} title="Our web design portfolio">{t('nav.ourWork')}</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact') }} title="Contact Morfye">{t('nav.contact')}</a>
          <LanguageSwitcher />
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
        <a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('about') }} title="About Morfye web design agency">{t('nav.about')}</a>
        <a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services') }} title="Our web design and digital marketing services">{t('nav.services')}</a>
        <a href="#work" onClick={(e) => { e.preventDefault(); scrollTo('work') }} title="Our web design portfolio">{t('nav.ourWork')}</a>
        <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact') }} title="Contact Morfye">{t('nav.contact')}</a>
        <LanguageSwitcher />
        <div className="mobile-theme-toggle" onClick={toggleTheme}>
          <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} mobile />
        </div>
      </div>
    </>
  )
}
