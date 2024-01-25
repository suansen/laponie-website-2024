import { motion } from "framer-motion";
import React from "react";
import { Review } from "@/typings";
import SwiperReviewCarousel from "../../carousel/SwiperReviewCarousel";

type Props = {
  heading: string;
  description: string;
  languageSelected: string;
  reviews: Review[];
};

function ReviewCarousel({ heading, description, reviews }: Props) {
  return (
    <section className="relative flex w-full max-w-7xl flex-col items-center justify-center py-4 text-tw-text-black md:py-8">
      {/* <div className="absolute  h-full w-screen  bg-tw-pink/30"></div> */}
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
      {reviews ? <SwiperReviewCarousel reviews={reviews} /> : null}
    </section>
  );
}

export default ReviewCarousel;
