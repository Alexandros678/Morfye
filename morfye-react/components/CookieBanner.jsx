import { useState, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

export default function CookieBanner() {
  const { t } = useLanguage()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent')
    if (consent === 'accepted') {
      // Already accepted on a previous visit — grant GA immediately
      window.gtag?.('consent', 'update', { analytics_storage: 'granted', ad_storage: 'granted' })
      window.gtag?.('event', 'page_view')
      return
    }
    if (consent === 'declined') return
    // No decision yet — show banner after intro animation
    const timer = setTimeout(() => setVisible(true), 2500)
    return () => clearTimeout(timer)
  }, [])

  const accept = () => {
    localStorage.setItem('cookie_consent', 'accepted')
    window.gtag?.('consent', 'update', { analytics_storage: 'granted', ad_storage: 'granted' })
    window.gtag?.('event', 'page_view')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('cookie_consent', 'declined')
    window.gtag?.('consent', 'update', { analytics_storage: 'denied', ad_storage: 'denied' })
    setVisible(false)
  }

  useEffect(() => {
    document.body.classList.toggle('cookie-banner-open', visible)
    return () => document.body.classList.remove('cookie-banner-open')
  }, [visible])

  if (!visible) return null

  return (
    <div className="cookie-banner" role="dialog" aria-label="Cookie consent">
      <div className="cookie-banner-inner">
        <div className="cookie-banner-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z" />
            <circle cx="9" cy="10" r="1" fill="currentColor" stroke="none" />
            <circle cx="14" cy="14" r="1" fill="currentColor" stroke="none" />
            <circle cx="15" cy="8" r="1" fill="currentColor" stroke="none" />
          </svg>
        </div>

        <div className="cookie-banner-text">
          <p className="cookie-banner-title">{t('cookie.title')}</p>
          <p className="cookie-banner-desc">
            {t('cookie.desc')} <strong>{t('cookie.strong')}</strong>{t('cookie.desc2')}{' '}
            <a href="/privacy-policy" className="cookie-banner-link" title="Morfye Privacy Policy">{t('cookie.privacyLink')}</a>
          </p>
        </div>

        <div className="cookie-banner-actions">
          <button className="cookie-btn cookie-btn-decline" onClick={decline}>{t('cookie.declineBtn')}</button>
          <button className="cookie-btn cookie-btn-accept" onClick={accept}>{t('cookie.acceptBtn')}</button>
        </div>
      </div>
    </div>
  )
}
