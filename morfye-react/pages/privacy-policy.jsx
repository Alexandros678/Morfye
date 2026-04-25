import ServicePageLayout from '../components/ServicePageLayout'
import { useLanguage } from '../contexts/LanguageContext'

const EMAIL = 'hello@morfye.com'
const EMAIL_LINK = `<a href="mailto:${EMAIL}">${EMAIL}</a>`

function withEmailLink(text) {
  if (!text || !text.includes(EMAIL)) return text
  return text.replace(EMAIL, EMAIL_LINK)
}

export default function PrivacyPolicy() {
  const { t } = useLanguage()
  const sections = t('privacy.sections')

  return (
    <ServicePageLayout
      title={t('privacy.meta.title')}
      description={t('privacy.meta.description')}
      slug="privacy-policy"
    >
      <section className="privacy-page">
        <div className="privacy-inner">
          <h1>{t('privacy.pageTitle')}</h1>
          <p className="privacy-updated">{t('privacy.updated')}</p>

          {sections.map((sec, i) => (
            <div key={i}>
              <h2>{sec.heading}</h2>

              {sec.content && (
                <p dangerouslySetInnerHTML={{ __html: withEmailLink(sec.content) }} />
              )}

              {sec.intro && <p>{sec.intro}</p>}

              {sec.items && (
                <ul>
                  {sec.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              )}

              {sec.outro && (
                <p dangerouslySetInnerHTML={{ __html: withEmailLink(sec.outro) }} />
              )}
            </div>
          ))}
        </div>
      </section>
    </ServicePageLayout>
  )
}
