"use client";

import { useLanguageContext } from "@/app/context/LanguageContext";
import {
  Image as ImageType,
  LocaleBlockContent,
  LocaleString,
  Slug,
} from "@/typings";
// import Link from "next/link";
import React from "react";
import Image from "next/image";
import { urlFor } from "@/utils/sanity/client";
import { PortableText } from "@portabletext/react";
import { components } from "../../blockComponent/component";

type Props = {
  productName?: LocaleString;
  description?: LocaleBlockContent;
  productImage?: ImageType;
  // sizes?: string[];
  brand: { name: string; slug?: Slug };
};

const SingleProductDisplay = ({
  productName,
  description,
  productImage,
  brand,
  // sizes,
}: Props) => {
  const { languageSelected } = useLanguageContext();
  return (
    <section className="my-2 flex w-full flex-col items-center justify-center px-4 md:my-4 md:px-8">
      {/* Main */}
      <div className="relative grid max-w-7xl grid-cols-1 gap-16 pt-16 md:grid-cols-3">
        {productImage && (
          <Image
            className="col-span-1 w-[320px] object-contain md:sticky md:top-0 md:h-[600px] md:w-[600px]"
            src={urlFor(productImage)
              .fit("max")
              .height(600)
              .auto("format")
              .url()}
            alt={`Image of ${brand?.name} ${productName?.en}`}
            width={600}
            height={600}
          />
        )}

        <div className=" col-span-2 space-y-4">
          <div className=" space-y-4">
            <h1 className="text-h4 leading-tight text-tw-text-black md:text-h3">
              {languageSelected === "en"
                ? productName?.en
                : productName?.cn || productName?.en}
            </h1>
            <div className="font-secondary text-[0.938rem] text-tw-text-black opacity-80 md:text-p">
              {languageSelected === "en" ? (
                <div className="space-y-4">
                  {description && (
                    <PortableText
                      value={description?.en}
                      components={components}
                      // components={/* optional object of custom components to use */}
                    />
                  )}
                </div>
              ) : (
                <div className="space-y-4">
                  {description && (
                    <PortableText
                      value={description?.cn}
                      components={components}
                      // components={/* optional object of custom components to use */}
                    />
                  )}
                </div>
              )}
              {/* <div className="pt-4 font-sans text-2xl md:text-3xl">Sizes</div>
              <div className="flex gap-4 py-4">
                {sizes &&
                  sizes.map((size, index) => (
                    <div
                      className=" min-w-[2rem] rounded-lg bg-tw-pink px-4 py-2 text-tw-black/80"
                      key={`${size}${index}`}
                    >
                      {size}
                    </div>
                  ))}
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-7xl border-b border-tw-primary-dark py-4" />
    </section>
  );
};

export default SingleProductDisplay;
