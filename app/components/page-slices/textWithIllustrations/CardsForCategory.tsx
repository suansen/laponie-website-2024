import { LocaleString, Image as ImageType } from "@/typings";
import TextSplit from "@/utils/sanity/TextSplit";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import CategoryCard from "./CategoryCard";

type Props = {
  heading: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  languageSelected: string;
  categories: { categoryName: LocaleString; mainImage: ImageType }[];
  brand: string;
};

const CardsForCategory = ({
  languageSelected,
  heading,
  description,
  buttonText,
  buttonLink,
  categories,
  brand,
}: Props) => {
  return (
    <section
      className={`flex w-full max-w-7xl flex-col items-center justify-center px-4 py-4 text-center md:py-8`}
    >
      <div className="max-w-lg pb-4 md:pb-8">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0, ease: "easeOut" }}
          className="text-h4 uppercase text-tw-black md:pb-4 md:text-h3 "
        >
          {heading}
        </motion.h2>
        {description && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.5, ease: "easeOut" }}
            className="whitespace-line text-center font-secondary text-p-sm leading-relaxed text-tw-black/50 md:text-p"
          >
            <TextSplit text={description} />
          </motion.div>
        )}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0, ease: "easeOut" }}
        className="hidden w-full flex-wrap justify-center gap-4 md:flex md:gap-8"
      >
        {categories?.map((category, index) => (
          <CategoryCard
            key={`${category?.categoryName.en}${index}`}
            brand={brand}
            item={category}
            languageSelected={languageSelected}
          />
        ))}
      </motion.div>
      {buttonText ? (
        <>
          {buttonLink ? (
            <Link href={buttonLink} className="pt-4 md:pt-8">
              <Button color="primary" size="lg">
                {buttonText}
              </Button>
            </Link>
          ) : null}
        </>
      ) : null}
    </section>
  );
};

export default CardsForCategory;
