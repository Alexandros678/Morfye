import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import en from '../locales/en.json'
import fr from '../locales/fr.json'
import nl from '../locales/nl.json'

const translations = { en, fr, nl }

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState('en')

  useEffect(() => {
    const stored = localStorage.getItem('lang')
    if (stored === 'fr' || stored === 'nl') setLangState(stored)
  }, [])

  const setLang = useCallback((newLang) => {
    setLangState(newLang)
    localStorage.setItem('lang', newLang)
    document.documentElement.lang = newLang
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const t = useCallback((key) => {
    const keys = key.split('.')
    let val = translations[lang]
    for (const k of keys) {
      if (val == null) return key
      val = val[k]
    }
    return val ?? key
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
