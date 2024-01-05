import React from "react";
import { motion } from "framer-motion";
import { Support } from "@/typings";
import SupportingCard from "./SupportingCard";

type Props = {
  header: string;
  subheader: string;
  cards: Support[];
  languageSelected: string;
};

const CardsForSupport = ({
  header,
  subheader,
  cards,
  languageSelected,
}: Props) => {
  const parentItem = {
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
    <section className="flex flex-col items-center justify-center gap-8 px-4 py-8 text-center md:px-8 md:py-16 ">
      <motion.h2
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-lg text-h4 uppercase leading-tight md:text-h3"
      >
        {header}
      </motion.h2>
      {subheader && (
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.25, ease: "easeOut" }}
          className="pb-2 text-sh2 uppercase text-tw-black/70 md:pb-6 md:text-sh1"
        >
          {subheader}
        </motion.h3>
      )}
      <motion.div
        variants={parentItem}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-2 place-items-start gap-x-2 gap-y-4 md:gap-8 lg:grid-cols-3"
      >
        {cards?.map((item, i) => (
          <SupportingCard
            key={i}
            item={item}
            languageSelected={languageSelected}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default CardsForSupport;
