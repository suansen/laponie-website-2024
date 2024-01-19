import { Product } from "@/typings";
import TextSplit from "@/utils/sanity/TextSplit";
import { motion } from "framer-motion";
import React from "react";
import ProductCard from "../../carousel/ProductCard";
import { Button } from "@nextui-org/button";
import Link from "next/link";

type Props = {
  heading: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  languageSelected: string;
  products: Product[];
};

const CardsForProduct = ({
  heading,
  description,
  buttonText,
  buttonLink,
  languageSelected,
  products,
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
            className="whitespace-line text-center font-secondary text-p-sm leading-relaxed text-tw-black/80 md:text-p"
          >
            <TextSplit text={description} />
          </motion.div>
        )}
      </div>
      <div className="hidden w-full flex-wrap justify-center gap-4 md:flex md:gap-8">
        {products.map((product, index) => (
          <ProductCard
            key={`${product.name}${index}`}
            item={product}
            languageSelected={languageSelected}
          />
        ))}
      </div>
      {buttonText ? (
        <Link href={buttonLink} className="pt-4 md:pt-8">
          <Button color="primary" size="lg">
            {buttonText}
          </Button>
        </Link>
      ) : null}
    </section>
  );
};

export default CardsForProduct;
