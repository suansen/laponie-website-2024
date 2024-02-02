import { BrandAward } from "@/typings";
import { motion } from "framer-motion";
import React from "react";
import SwiperCarousel from "../../carousel/SwiperCarousel";

type Props = {
  heading: string;
  description: string;
  languageSelected: string;
  awards: BrandAward[];
};

function AwardCarousel({ heading, description, awards }: Props) {
  return (
    <section className="flex w-full max-w-7xl flex-col items-center justify-center py-8 text-tw-text-black md:py-16">
      {/* Text */}
      <div className="pb-4 text-center md:pb-8">
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
            className="max-w-lg text-p text-tw-primary-dark md:pl-2 md:text-sh2"
          >
            {description}
          </motion.p>
        ) : null}
      </div>
      {/* Swiper */}
      {awards ? (
        <div className="w-full max-w-7xl">
          <SwiperCarousel awards={awards} />
        </div>
      ) : null}
    </section>
  );
}

export default AwardCarousel;
