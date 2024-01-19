"use client";

import { useLanguageContext } from "@/app/context/LanguageContext";
import { Ingredient, LocaleString } from "@/typings";
import TextSplit from "@/utils/sanity/TextSplit";
import { Accordion, AccordionItem } from "@nextui-org/react";
// import { motion } from "framer-motion";
import React from "react";

type Props = { ingredients: Ingredient[]; heading: LocaleString };

const SingleProductIngredientsDisplay = ({ ingredients, heading }: Props) => {
  const { languageSelected } = useLanguageContext();

  return (
    <section className=" max-w-7xl space-y-4 px-4 py-2 md:py-4">
      {heading ? (
        <h2 className="pb-2 text-sh1 uppercase text-tw-black/70  md:text-h4">
          {languageSelected === "en" ? heading.en : heading.cn || heading.en}
        </h2>
      ) : null}
      <Accordion selectionMode="multiple" className=" px-4" variant="bordered">
        {ingredients?.map((ingredient, i) => (
          <AccordionItem
            key={i}
            aria-label={ingredient?.name}
            title={<div className="text-sh1">{ingredient?.name}</div>}
          >
            {/* <div className="flex h-6 w-6 items-center justify-center rounded-full border border-tw-text-black text-p text-tw-text-black opacity-80">
              <div className="text-sm">{i + 1}</div>
            </div> */}
            {/* <div className="text-p text-tw-text-black opacity-80"> */}
            <div className="font-secondary text-tw-black/70">
              <TextSplit text={ingredient?.description} />
            </div>
            {/* </div> */}
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default SingleProductIngredientsDisplay;
