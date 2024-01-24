"use client";

import {
  LocaleBlockContent,
  LocaleString,
  Image as ImageType,
  Slug,
} from "@/typings";
import React from "react";
import Image from "next/image";
import { urlFor } from "@/utils/sanity/client";
import { useLanguageContext } from "@/app/context/LanguageContext";
import { PortableText } from "@portabletext/react";
import { components } from "../../blockComponent/component";

type Props = {
  name?: LocaleString;
  description?: LocaleBlockContent;
  treatmentImage?: ImageType;
  // sizes?: string[];
  brand: { name: string; slug?: Slug };
};

const SingleTreatmentDisplay = ({
  name,
  description,
  treatmentImage,
  brand,
}: Props) => {
  const { languageSelected } = useLanguageContext();
  return (
    <section className="my-2 flex w-full flex-col items-center justify-center px-4 md:my-4 md:px-8">
      {/* Main */}
      <div className="relative flex max-w-7xl flex-col gap-16 pt-16 md:flex-row md:items-center">
        {treatmentImage && (
          <Image
            className="col-span-1 w-[320px] rounded-xl object-contain md:sticky md:top-0 md:h-[320px] md:w-[320px] lg:h-[420px] lg:w-[420px]"
            src={urlFor(treatmentImage)
              .width(420)
              .height(420)
              .auto("format")
              .url()}
            alt={`Image of ${brand?.name} ${name?.en}`}
            width={420}
            height={420}
          />
        )}

        <div className=" col-span-2 grow space-y-4">
          <div className=" space-y-4">
            <h1 className="text-h4 leading-tight text-tw-text-black md:text-h3">
              {languageSelected === "en" ? name?.en : name?.cn || name?.en}
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
                      value={description?.cn || description?.en}
                      components={components}
                      // components={/* optional object of custom components to use */}
                    />
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-full max-w-7xl border-b border-tw-primary-dark py-4" /> */}
    </section>
  );
};

export default SingleTreatmentDisplay;
