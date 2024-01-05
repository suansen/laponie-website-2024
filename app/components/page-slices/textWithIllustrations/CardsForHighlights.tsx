import { Highlight } from "@/typings";
import HighlightCard from "./HighlightCard";
import { motion } from "framer-motion";
import React from "react";

type Props = {
  highlights: Highlight[];
  languageSelected: string;
};

const CardsForHighlights = ({ highlights, languageSelected }: Props) => {
  const highlightsContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        bounce: 0,
      },
    },
  };

  return (
    <section className="mx-auto flex max-w-7xl flex-col justify-center px-4 py-16">
      <div className="mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 100, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
          className={`pb-16 text-center text-h4 text-tw-text-black md:pt-16 md:text-h3 md:first-letter:text-left ${
            languageSelected === "en" ? "font-tuesday" : "font-chinese-cursive"
          }`}
        >
          {languageSelected === "en" ? "Highlights" : "亮点"}
        </motion.h2>
        <motion.div
          variants={highlightsContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          className="flex flex-wrap justify-center gap-4 md:justify-center md:gap-8 xl:gap-12"
        >
          {highlights?.map((item, i) => (
            <HighlightCard
              item={item}
              languageSelected={languageSelected}
              key={i}
            />
          ))}
        </motion.div>
        <div className="flex w-full items-center justify-end px-0 py-8">
          <div className="group flex items-center">
            <div className="w-4 border border-b-tw-primary-dark transition-all duration-100 ease-in group-hover:w-10" />
            {/* <Link className="uppercase text-right pl-2" href="/highlights">
              {languageSelected === "en"
                ? "View all Highlights"
                : "查看所有亮点"}
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardsForHighlights;
