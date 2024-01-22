"use client";

import { useLanguageContext } from "@/app/context/LanguageContext";
import { LocaleString } from "@/typings";
import Link from "next/link";
import React from "react";

type Props = {
  footerBuilder: {
    title: LocaleString;
    navItem: {
      _type: string;
      link: string;
      en: string;
      cn?: string;
      key: string;
    }[];
  }[];
};

const Footer = ({ footerBuilder }: Props) => {
  const { languageSelected } = useLanguageContext();
  return (
    <footer className=" mt-4 flex w-full justify-center bg-tw-primary-dark px-4 py-4 text-white md:mt-8 md:py-8">
      <div className="w-full max-w-7xl">
        <div className="flex flex-col gap-x-4 md:flex-row">
          <div className="pb-6 font-laponie text-h4 text-white">LAPONIE</div>
          <div className=" flex grow flex-col justify-around gap-x-4 md:flex-row">
            {footerBuilder.map((footerItem, i) => (
              <div className="pb-6" key={`${footerItem.title?.en}${i}`}>
                <div className="text-sh2 uppercase  md:text-p">
                  {languageSelected === "en"
                    ? footerItem.title?.en
                    : footerItem.title?.cn || footerItem.title.en}
                </div>
                <div className="flex flex-col gap-y-3 pt-3">
                  {footerItem.navItem.map((item, index) => (
                    <Link
                      className="font-secondary text-white/70 hover:text-white"
                      key={`${item.en}${index}`}
                      href={item.link}
                    >
                      {languageSelected === "en" ? item.en : item.cn || item.en}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="pb-4 text-left">
          © {new Date().getFullYear()} Laponie Pte. Ltd. All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
