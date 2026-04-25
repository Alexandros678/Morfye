import { useLanguage } from '../contexts/LanguageContext'

export default function HomeFaq() {
  const { t } = useLanguage()
  const faqs = t('homeFaq.items')

  return (
    <section className="home-faq" id="faq">
      <div className="home-faq-inner">
        <div className="home-faq-header">
          <div className="wwa-label">{t('homeFaq.label')}</div>
          <h2>{t('homeFaq.title')}</h2>
          <p>{t('homeFaq.subtitle')}</p>
        </div>
        <div className="home-faq-list">
          {faqs.map((faq, i) => (
            <details key={i} className="home-faq-item">
              <summary className="home-faq-question">
                <span>{faq.question}</span>
                <span className="home-faq-icon" aria-hidden="true" />
              </summary>
              <p className="home-faq-answer">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
