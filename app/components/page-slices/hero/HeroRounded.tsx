import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// import { Image as Img } from "@/typings"
// import Img from "next/image"
// import { useNextSanityImage } from "next-sanity-image"

// import { urlFor } from "@/utils/sanity/client"

import { Image as ImageType } from "@/typings";
import { urlFor } from "@/utils/sanity/client";
// import { sanityClient, urlFor } from "@/utils/sanity/client"

type Props = {
  title: string;
  subheader1: string;
  subheader2: string;
  img: ImageType;
};

function HeroRounded({ title, subheader1, subheader2, img }: Props) {
  // const imageProps = useNextSanityImage(sanityClient, img)

  return (
    <section className=" flex flex-col items-center justify-center text-tw-text-black">
      {/* min-h-[calc(100vh-80px)] */}
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0, duration: 1 }}
        className="over z-10 pt-10 font-laponie text-h4 uppercase leading-none md:text-[64px]"
      >
        {title}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 1 }}
        className="z-10 text-h5 uppercase md:text-[48px]"
      >
        {subheader1}
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="z-10 text-h5 uppercase md:text-[48px]"
      >
        {subheader2}
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="relative h-[600px] w-96 -translate-y-20 overflow-hidden rounded-b-full rounded-t-full"
      >
        <Image
          className="w-full origin-top object-cover opacity-20"
          src={urlFor(img).width(390).height(610).url()}
          width={390}
          height={610}
          alt={img?.alt || "Hero Image"}
        />
      </motion.div>
    </section>
  );
}

export default HeroRounded;
