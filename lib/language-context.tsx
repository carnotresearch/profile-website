"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import translations, { type Language, type Translations } from "./translations"

interface LanguageContextType {
  lang: Language
  setLang: (l: Language) => void
  tx: Translations
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("en")

  useEffect(() => {
    const saved = localStorage.getItem("site-lang") as Language | null
    if (saved === "hi" || saved === "en") setLangState(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem("site-lang", lang)
    document.documentElement.setAttribute("lang", lang === "hi" ? "hi" : "en-IN")
    if (lang === "hi") {
      document.documentElement.classList.add("lang-hi")
    } else {
      document.documentElement.classList.remove("lang-hi")
    }
  }, [lang])

  const setLang = (l: Language) => setLangState(l)
  const tx = translations[lang] as Translations

  return (
    <LanguageContext.Provider value={{ lang, setLang, tx }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be inside LanguageProvider")
  return ctx
}
