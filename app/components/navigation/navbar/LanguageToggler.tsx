import React from "react";

type Props = { languageSelected: string; setLanguageSelected: any };

export default function LanguageToggler({
  languageSelected,
  setLanguageSelected,
}: Props) {
  return (
    <div className="w-18 relative hidden h-8 items-center justify-between rounded-l-full rounded-r-full bg-tw-primary-light px-2 md:flex">
      <div
        className={`absolute left-2 h-7 w-7 rounded-full bg-tw-primary-pink transition-all duration-150 ${
          languageSelected === "en" ? "" : " translate-x-7"
        }`}
      />
      <div
        className={`z-30 h-7 w-7 cursor-pointer rounded-full text-center ${
          languageSelected === "cn" ? "text-tw-text-black" : "text-white"
        }`}
        onClick={() => setLanguageSelected("en")}
      >
        en
      </div>

      <div
        className={`z-30 h-7 w-7 cursor-pointer rounded-full text-center ${
          languageSelected === "en" ? "text-tw-text-black" : "text-white"
        }`}
        onClick={() => setLanguageSelected("cn")}
      >
        cn
      </div>
    </div>
  );
}
