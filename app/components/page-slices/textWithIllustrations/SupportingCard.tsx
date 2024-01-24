import React from "react";
import { motion } from "framer-motion";
import { Support } from "@/typings";
import TextSplit from "@/utils/sanity/TextSplit";
import Image from "next/image";
import { urlFor } from "@/utils/sanity/client";

type Props = { item: Support; languageSelected: string };

const SupportingCard = ({ item, languageSelected }: Props) => {
  const itemAnimate = {
    hidden: { opacity: 0, x: -25 },
    show: { opacity: 1, x: 0 },
  };
  return (
    <motion.div
      variants={itemAnimate}
      className="flex w-full max-w-xs flex-col items-center justify-center gap-4 px-8"
    >
      {item?.image ? (
        <div className="h-16 w-16 overflow-hidden rounded-full  shadow-md md:h-24 md:w-24">
          <Image
            className="h-full w-full rounded-full bg-tw-pink object-contain "
            width={96}
            height={96}
            src={urlFor(item?.image)
              .width(96)
              .height(96)
              .url()}
            alt={`Image of ${
              languageSelected === "en"
                ? item?.title.en
                : item?.title.cn || item?.title.en
            }`}
          />
        </div>
      ) : (
        <div
          className={`h-16 w-16 rounded-full bg-tw-primary-pink shadow-md
          md:h-24 md:w-24 `}
        ></div>
      )}

      <h3 className="text-[1.25rem] md:text-sh1">
        {languageSelected === "en"
          ? item?.title.en
          : item?.title.cn || item?.title.en}
      </h3>
      <div className="hidden p-0 font-secondary text-p-sm text-tw-primary-dark md:inline-block md:text-p">
        {languageSelected === "en" ? (
          <TextSplit text={item?.description.en} />
        ) : (
          <TextSplit text={item?.description.cn} /> || (
            <TextSplit text={item?.description.en} />
          )
        )}
      </div>
    </motion.div>
  );
};

export default SupportingCard;
