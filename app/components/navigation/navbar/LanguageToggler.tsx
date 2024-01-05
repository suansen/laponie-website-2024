import React from "react"

type Props = { languageSelected: string; setLanguageSelected: any }

export default function LanguageToggler({
  languageSelected,
  setLanguageSelected
}: Props) {
  return (
    <div className="hidden md:flex justify-between items-center bg-tw-primary-light rounded-l-full rounded-r-full px-2 h-8 w-18 relative">
      <div
        className={`absolute bg-tw-primary-pink w-7 h-7 rounded-full transition-all duration-150 left-2 ${
          languageSelected === "en" ? "" : " translate-x-7"
        }`}
      />
      <div
        className={`w-7 h-7 cursor-pointer z-30 text-center rounded-full ${
          languageSelected === "cn" ? "text-tw-text-black" : "text-white"
        }`}
        onClick={() => setLanguageSelected("en")}
      >
        en
      </div>

      <div
        className={`w-7 h-7 cursor-pointer z-30 text-center rounded-full ${
          languageSelected === "en" ? "text-tw-text-black" : "text-white"
        }`}
        onClick={() => setLanguageSelected("cn")}
      >
        cn
      </div>
    </div>
  )
}
