import React from "react";
import Image from "next/image";
import { Image as ImageType } from "@/typings";
import { urlFor } from "@/utils/sanity/client";
import TextSplit from "@/utils/sanity/TextSplit";
import { motion } from "framer-motion";

type Props = {
  heading: string;
  tagline: string;
  excerpt: string;
  image: ImageType;
};

const TextWithIllustration = ({ heading, tagline, excerpt, image }: Props) => {
  return (
    <section
      className={`mt-4 flex w-full max-w-7xl flex-col items-center justify-center gap-4 px-4 py-4 text-center md:flex-row md:gap-x-8 md:py-8`}
    >
      <div className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0, ease: "easeOut" }}
          className=" overflow-hidden rounded-lg"
        >
          {image ? (
            <Image
              className="h-[320px] w-[320px] bg-tw-pink/20  object-cover transition duration-200 ease-in group-hover:scale-105 md:h-[480px]"
              src={urlFor(image)
                .width(320)
                .height(480)
                .fit("max")
                .auto("format")
                .url()}
              width={320}
              height={480}
              alt={image?.alt || "Category Image"}
            />
          ) : (
            <div className=" h-[480px] bg-tw-pink/20"></div>
          )}
        </motion.div>
        <div className="absolute -left-4 -top-4 text-h3 leading-none text-tw-primary-dark md:-left-8 md:-top-8 md:text-h2">
          {tagline}
        </div>
      </div>

      {/* text */}
      <div className="max-w-md space-y-4 text-left">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.25, ease: "easeOut" }}
          className="text-h4 uppercase leading-tight md:text-h3"
        >
          {heading}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.5, ease: "easeOut" }}
          className="mx-auto font-secondary text-p-sm text-black/50 md:text-base"
        >
          <TextSplit text={excerpt} />
        </motion.div>
      </div>
    </section>
  );
};

export default TextWithIllustration;
