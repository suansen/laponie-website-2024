"use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
import React, { Fragment, useCallback, useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import CaretLeftIcon from "../icons/carotLeftIcon";
import CaretRightIcon from "../icons/carotRightIcon";
import {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";

import s from "./Review.module.css";

// import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Review } from "@/typings";
// import { urlFor } from "@/utils/sanity/client";
// import { Button } from "@nextui-org/react";
import ReviewCard from "./ReviewCard";

type Props = { reviews: Review[] };

const styles = {
  swiperButton:
    "cursor-pointer border-2 border-tw-primary-dark text-tw-primary-dark rounded-full p-6 hidden md:block hover:border-tw-primary-pink hover:text-tw-primary-pink hidden md:block",
};

function SwiperReviewCarousel({ reviews }: Props) {
  const [swiperRef, setSwiperRef] = useState<SwiperClass>();

  const handleLeftClick = useCallback(() => {
    if (!swiperRef) return;
    swiperRef.slidePrev();
  }, [swiperRef]);

  const handleRightClick = useCallback(() => {
    if (!swiperRef) return;
    swiperRef.slideNext();
  }, [swiperRef]);

  return (
    <div className="w-full">
      <div className={`${s.paginationEl} ml-4 md:ml-0`}>Pagination</div>
      <div className="relative flex  place-content-end items-center gap-x-4 pr-4">
        <div className={styles.swiperButton} onClick={handleLeftClick}>
          <CaretLeftIcon />
        </div>
        <Swiper
          onSwiper={setSwiperRef}
          modules={[Pagination, Autoplay, Scrollbar, EffectFade, Navigation]}
          slidesPerView={"auto"}
          centeredSlides={true}
          spaceBetween={1.5}
          pagination={{
            clickable: true,
            el: `.${s.paginationEl}`,
            bulletClass: s.paginationBtn,
            bulletActiveClass: s.paginationBtnActive,
          }}
          scrollbar={{ draggable: true }}
          // navigation
          loop={true}
          speed={1000}
        >
          {/* Swiper buttons */}

          {reviews?.map((item, i) => (
            // <img src={item.image.url} alt={item.image.alt} />
            <Fragment key={i}>
              {item ? (
                <SwiperSlide style={{}}>
                  <ReviewCard item={item} />
                </SwiperSlide>
              ) : null}
            </Fragment>
          ))}

          {/* Swiper =Images */}
        </Swiper>
        <div className={styles.swiperButton} onClick={handleRightClick}>
          <CaretRightIcon />
        </div>
      </div>
    </div>
  );
}

export default SwiperReviewCarousel;
