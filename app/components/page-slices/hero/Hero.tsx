import { Image as ImageType } from "@/typings";
import React from "react";
import Image from "next/image";
import { urlFor } from "@/utils/sanity/client";
import { motion } from "framer-motion";
import { useScreen } from "usehooks-ts";

type Props = {
  buttonText: string;
  image: ImageType;
  heading: string;
  tagline: string;
  buttonLink: string;
  textColor: string;
  variant: "full" | "half" | "quarter";
  marginBottom: boolean;
  parallax: boolean;
};

const Hero = ({
  // buttonText,
  // buttonLink,
  image,
  heading,
  tagline,
  variant = "full",
  textColor = "dark",
  marginBottom = true,
  parallax = false,
}: Props) => {
  const screen = useScreen();
  return (
    <section
      className={`relative ${
        marginBottom ? "mb-4 md:mb-8" : "mb-0"
      } w-screen  ${
        variant === "full"
          ? "h-screen max-h-[calc(100vh-64px)]"
          : variant === "quarter"
            ? "h-[300px]"
            : null
      } `}
    >
      {variant === "full" ? (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0, ease: "easeOut" }}
          className={` h-full w-full ${
            parallax ? "bg-cover bg-fixed bg-center bg-no-repeat" : null
          }`}
          style={{
            backgroundImage: `url(${urlFor(image)
              .width(typeof screen !== "undefined" ? screen?.width : 1920)
              .height(typeof screen !== "undefined" ? screen?.height : 1080)
              .auto("format")
              .url()})`,
          }}
        >
          {parallax ? null : (
            <Image
              className={`h-full w-full origin-top rounded-bl-large rounded-br-large bg-fixed object-cover`}
              src={urlFor(image).width(1920).height(1080).url()}
              width={1920}
              height={1080}
              alt={image?.alt || "Hero Image"}
            />
          )}
        </motion.div>
      ) : variant === "quarter" ? (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0, ease: "easeOut" }}
        >
          <Image
            className={`h-[300px] w-full origin-top rounded-bl-large rounded-br-large object-cover`}
            src={urlFor(image).width(1920).height(540).url()}
            width={1920}
            height={1080}
            alt={image?.alt || "Hero Image"}
          />
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0, ease: "easeOut" }}
        >
          <Image
            className={`h-[540px] w-full origin-top rounded-bl-large rounded-br-large object-cover`}
            src={urlFor(image).width(1920).height(540).url()}
            width={1920}
            height={1080}
            alt={image?.alt || "Hero Image"}
          />
        </motion.div>
      )}

      <div className="absolute left-1/2 top-1/2 m-auto -translate-x-1/2 -translate-y-1/2 text-center">
        {/* <div>{screen?.width}</div>
        <div> {screen?.height}</div> */}

        {heading ? (
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.1, ease: "easeOut" }}
            className={`max-w-4xl text-h3 uppercase leading-tight md:text-h2 ${
              textColor === "dark"
                ? " text-tw-black"
                : " text-white  drop-shadow-lg"
            }`}
          >
            {heading}
          </motion.h2>
        ) : null}

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
