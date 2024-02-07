"use client";

import React from "react";

import {
  Pagination,
  Autoplay,
  Scrollbar,
  Navigation,
  EffectFade,
  Grid,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { motion } from "framer-motion";
import { BrandAward } from "@/typings";
import AwardCard from "./AwardCard";

type Props = { awards: BrandAward[] };

function SwiperCarousel({ awards }: Props) {
  return (
    <>
      {/* Swiper */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.25 }}
        className="mx-auto w-full max-w-7xl cursor-grab overflow-hidden rounded-xl bg-tw-primary py-8"
      >
        <Swiper
          modules={[
            Pagination,
            Autoplay,
            Scrollbar,
            EffectFade,
            Navigation,
            Grid,
          ]}
          slidesPerView={"auto"}
          // centeredSlides={true}
          spaceBetween={30}
          scrollbar={{ draggable: true }}
          // grid={{ rows: 3, fill: "row" }}
          // navigation
          loop={true}
          // loopedSlides={null}
          speed={1000}
          autoplay={{ delay: 3000 }}
          className="h-full w-full"
        >
          {/* Swiper buttons */}

          {awards?.map((item: any, i: number) => (
            // <img src={item.image.url} alt={item.image.alt} />
            <SwiperSlide style={{ width: "200px", height: "200px" }} key={i}>
              <AwardCard item={item} />
            </SwiperSlide>
          ))}

          {/* Swiper =Images */}
        </Swiper>
      </motion.div>
    </>
  );
}

export default SwiperCarousel;
