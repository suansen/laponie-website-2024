"use client"
import React, { createContext, useContext, useState } from "react"

export type LanguageContent = {
  languageSelected: string
  setLanguageSelected: React.Dispatch<React.SetStateAction<string>>
}

const LanguageContext = createContext<LanguageContent>({
  languageSelected: "en", // set a default value
  setLanguageSelected: () => {}
})

export function LanguageContextWrapper({
  children
}: {
  children: React.ReactNode
}) {
  const [languageSelected, setLanguageSelected] = useState<string>("en")

  return (
    <LanguageContext.Provider value={{ languageSelected, setLanguageSelected }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguageContext() {
  return useContext(LanguageContext)
}
