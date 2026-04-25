import { useLanguage } from '../contexts/LanguageContext'

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage()
  return (
    <div className="lang-switcher">
      <button
        className={`lang-btn${lang === 'en' ? ' lang-active' : ''}`}
        onClick={() => setLang('en')}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span className="lang-divider">|</span>
      <button
        className={`lang-btn${lang === 'fr' ? ' lang-active' : ''}`}
        onClick={() => setLang('fr')}
        aria-label="Passer en français"
      >
        FR
      </button>
      <span className="lang-divider">|</span>
      <button
        className={`lang-btn${lang === 'nl' ? ' lang-active' : ''}`}
        onClick={() => setLang('nl')}
        aria-label="Schakel naar Nederlands"
      >
        NL
      </button>
    </div>
  )
}
