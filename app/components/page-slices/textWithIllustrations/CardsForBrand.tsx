import React from "react";
import { urlFor } from "@/utils/sanity/client";
import Image from "next/image";
import TextSplit from "@/utils/sanity/TextSplit";
import { motion } from "framer-motion";
import { Brand } from "@/typings";
import { Button } from "@nextui-org/react";
import Link from "next/link";

type Props = {
  brands: Brand[];
  languageSelected: string;
  buttonText: { en: string; cn?: string };
};

const CardsForBrand = ({ brands, languageSelected, buttonText }: Props) => {
  return (
    <section className="mx-auto my-16 grid w-full max-w-7xl grid-cols-1  overflow-hidden rounded-xl text-tw-text-black md:min-h-[800px] md:grid-cols-2">
      {brands?.map((brand, i) => (
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 100 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.1 * i }}
          key={i}
          className={`group relative flex flex-col items-center gap-8 overflow-hidden px-8 pb-8 md:min-h-[640px] md:pb-0 `}
        >
          <Image
            className={`absolute z-0 h-full max-h-[640px] w-full max-w-[640px] origin-top object-cover `}
            src={urlFor(brand.mainImage).width(640).height(640).url()}
            width={640}
            height={640}
            alt={`${brand?.name}'s brand image`}
          />
          <div
            className={`absolute  ${
              i % 2 == 0
                ? "group-hover:bg-tw-primary-pink/80"
                : "group-hover:bg-tw-primary/80"
            } h-full max-h-[640px]  w-full max-w-[640px] origin-left scale-y-0 transition-all duration-150 ease-in group-hover:scale-x-0 md:origin-top md:group-hover:scale-x-100 md:group-hover:scale-y-100`}
          />

          <h3 className="z-20 pt-20 text-center text-h4 leading-none  text-white drop-shadow-lg transition-all duration-300 ease-in group-hover:translate-y-0 md:translate-y-96 md:pt-20 md:text-h3">
            {brand?.name}
          </h3>
          <div className="z-10 hidden max-w-sm space-y-4 font-secondary text-xs leading-normal transition-all duration-300 ease-in group-hover:translate-y-0 group-hover:opacity-100 md:block md:translate-y-20 md:text-p md:opacity-0">
            {languageSelected === "en" ? (
              <TextSplit text={brand.description.en} />
            ) : (
              <TextSplit text={brand.description.cn} /> || (
                <TextSplit text={brand.description.en} />
              )
            )}
          </div>

          {buttonText && (
            <div className="z-10 transition-all delay-75 duration-300 group-hover:translate-y-0 group-hover:opacity-100 md:translate-y-20 md:opacity-0">
              <Link href={`/brands/${brand.slug?.current}`}>
                <Button
                  size="lg"
                  className={
                    i % 2 == 0 ? "bg-tw-primary" : "bg-tw-primary-pink"
                  }
                >
                  {languageSelected === "en"
                    ? buttonText.en
                    : buttonText.cn || buttonText.en}
                </Button>
              </Link>
            </div>
          )}
        </motion.div>
      ))}
    </section>
  );
};

export default CardsForBrand;
