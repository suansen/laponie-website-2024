"use client";

import { Product } from "@/typings";
import React from "react";
import SwiperCarouselWithArrows from "../../carousel/SwiperCarouselWithArrows";
import { motion } from "framer-motion";

type Props = {
  heading: string;
  description: string;
  languageSelected: string;
  products: Product[];
};

const ProductCarousel = ({
  heading,
  description,
  languageSelected,
  products,
}: Props) => {
  return (
    <section className="flex max-w-7xl flex-col items-center justify-center py-4 text-tw-text-black md:py-8">
      {/* Text */}

      <div className=" grid grid-cols-1 gap-4 md:grid-cols-2">
        {heading ? (
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0, ease: "easeOut" }}
            className="text-h4 uppercase md:pr-2 md:text-h3"
          >
            {heading}
          </motion.h2>
        ) : null}
        {description ? (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.25, ease: "easeOut" }}
            className="pt-2 font-secondary text-p-sm leading-snug text-black/50 md:pl-2 md:text-base"
          >
            {description}
          </motion.p>
        ) : null}
      </div>
      {/* Swiper */}
      {products ? (
        <div className="w-full max-w-7xl">
          <SwiperCarouselWithArrows
            products={products}
            languageSelected={languageSelected}
          />
        </div>
      ) : null}
    </section>
  );
};

export default ProductCarousel;
