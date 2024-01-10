import { Image as ImageType } from "@/typings";
import React from "react";
import Image from "next/image";
import { urlFor } from "@/utils/sanity/client";
import { motion } from "framer-motion";

type Props = {
  buttonText: string;
  image: ImageType;
  heading: string;
  tagline: string;
  buttonLink: string;
  textColor: string;
  variant: "full" | "half";
};

const Hero = ({
  // buttonText,
  // buttonLink,
  image,
  heading,
  tagline,
  variant,
  textColor,
}: Props) => {
  return (
    <section
      className={`relative w-screen pb-4 md:pb-8 ${
        variant === "full" ? "h-screen max-h-[calc(100vh-64px)]" : null
      } `}
    >
      {variant === "full" ? (
        <div className="h-full w-full">
          <Image
            className={`min-w-screen h-full w-full origin-top rounded-bl-large rounded-br-large object-cover ${
              textColor === "dark" ? " brightness-125 " : " brightness-75 "
            }`}
            src={urlFor(image).width(1920).height(1080).url()}
            width={1920}
            height={1080}
            alt={image?.alt || "Hero Image"}
          />
        </div>
      ) : (
        <Image
          className={`h-[540px] w-screen origin-top rounded-bl-large rounded-br-large object-cover ${
            textColor === "dark" ? " brightness-125 " : " brightness-75 "
          }`}
          src={urlFor(image).width(1920).height(540).url()}
          width={1920}
          height={1080}
          alt={image?.alt || "Hero Image"}
        />
      )}

      <div className="absolute left-1/2 top-1/2 m-auto -translate-x-1/2 -translate-y-1/2 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0, ease: "easeOut" }}
          className={`text-h3 uppercase md:text-h2 ${
            textColor === "dark"
              ? " text-tw-black"
              : " text-white shadow-red-500 drop-shadow-lg"
          }`}
        >
          {heading}
        </motion.h2>
        {tagline && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.25, ease: "easeOut" }}
            className={`pb-2 font-secondary text-sh2 uppercase md:pb-6 md:text-h5 ${
              textColor === "dark"
                ? " text-tw-black/70"
                : " text-tw-white-off drop-shadow-lg "
            }`}
          >
            {tagline}
          </motion.div>
        )}

        {/* {text && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.5, ease: "easeOut" }}
            className="whitespace-line text-center font-secondary text-p-sm leading-relaxed text-tw-black/80 md:text-p"
          >
            <TextSplit text={text} />
          </motion.div>
        )} */}
      </div>
    </section>
  );
};

export default Hero;
