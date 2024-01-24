"use client";

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

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Product } from "@/typings";
import ProductCard from "./ProductCard";

type Props = { languageSelected: string; products: Product[] };

const styles = {
  swiperButton:
    "cursor-pointer text-tw-primary-dark rounded-full hover:border-tw-primary-pink hover:text-tw-primary-pink",
};

function SwiperCarouselWithArrows({ languageSelected, products }: Props) {
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
    <>
      <div className="flex h-12 place-content-end items-center gap-x-4 pr-4">
        <div className={styles.swiperButton} onClick={handleLeftClick}>
          <CaretLeftIcon />
        </div>
        <div className={styles.swiperButton} onClick={handleRightClick}>
          <CaretRightIcon />
        </div>
      </div>
      <Swiper
        onSwiper={setSwiperRef}
        modules={[Pagination, Autoplay, Scrollbar, EffectFade, Navigation]}
        slidesPerView={"auto"}
        centeredSlides={false}
        spaceBetween={32}
        // pagination={{ clickable: true, type: "fraction" }}
        scrollbar={{ draggable: true }}
        // navigation
        loop={true}
        // loopedSlides={null}
        speed={1000}
        // autoplay={{ delay: 3000 }}
        className="h-full w-80 md:w-full"
      >
        {products?.map((item: Product, i: number) => (
          <Fragment key={`${item?.name}${i}`}>
            <SwiperSlide className="flex min-h-[360px] w-full max-w-[320px] cursor-pointer items-center justify-center">
              {/* image */}
              <ProductCard item={item} languageSelected={languageSelected} />
            </SwiperSlide>
          </Fragment>
        ))}
      </Swiper>
    </>
  );
}

export default SwiperCarouselWithArrows;
