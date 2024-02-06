import React from "react";
import { Image as Img } from "@/typings";
import { urlFor } from "@/utils/sanity/client";
import TextSplit from "@/utils/sanity/TextSplit";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  header: string;
  subheader: string;
  text: string;
  image: Img;
  variant: string;
};

const RoundedImageWithText = ({
  header,
  subheader,
  text,
  image,
  variant,
}: Props) => {
  const item = {
    hidden: { opacity: 0, x: 5 },
    show: { opacity: 1, x: 0 },
  };

  const parentItem = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        bounce: 0,
        delay: 0.3,
      },
    },
  };

  return (
    <section
      className={`grid grid-cols-1 place-items-center py-8 text-center lg:grid-cols-2 lg:py-16 lg:text-left`}
    >
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className={`${
          variant === "right"
            ? "lg:order-last lg:rounded-l-full"
            : "lg:rounded-r-full"
        } relative h-full w-full max-w-[380px] overflow-hidden rounded-xl  bg-tw-primary-pink lg:h-[600px] lg:min-h-[600px] lg:max-w-none `}
      >
        <Image
          className="h-full min-h-[300px] w-full object-cover lg:min-h-[600px]"
          src={urlFor(image).height(600).width(800).url()}
          height={600}
          width={800}
          alt={image.alt || "Image"}
        />
        {/* <div className="absolute w-full h-full top-0 bg-tw-pink opacity-50 bg-blend-overlay" /> */}
      </motion.div>
      <motion.div
        variants={parentItem}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-8 max-w-4xl px-4 lg:mt-0 lg:max-w-none lg:px-16 xl:px-32"
      >
        {subheader && (
          <motion.h3
            variants={item}
            className="text-sh1 uppercase leading-tight  text-tw-black/80 lg:pb-4 lg:pt-0 lg:text-h4"
          >
            {subheader}
          </motion.h3>
        )}

        <motion.h2
          variants={item}
          className="pb-2 text-h4 uppercase leading-tight text-tw-text-black lg:pb-4 lg:text-h3"
        >
          {header}
        </motion.h2>
        {text && (
          <motion.div
            variants={item}
            className="max-w-4xl space-y-4 font-secondary text-p-sm leading-relaxed text-tw-primary-dark lg:text-p"
          >
            <TextSplit text={text} />
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default RoundedImageWithText;
