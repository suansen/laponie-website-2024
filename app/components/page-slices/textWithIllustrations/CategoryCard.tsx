import Link from "next/link";
import Image from "next/image";
import React from "react";
import { urlFor } from "@/utils/sanity/client";
import { Image as ImageType, LocaleString } from "@/typings";

type Props = {
  item: { categoryName: LocaleString; mainImage: ImageType };
  languageSelected: string;
  brand: string;
};

function CategoryCard({ item, languageSelected, brand }: Props) {
  return (
    <Link
      href={`/brands/${brand}/products?page=1&category=${item.categoryName.en}&search=**`}
      className="group w-[280px]"
    >
      <div className="h-[320px] overflow-hidden rounded-lg ">
        {item.mainImage ? (
          <Image
            className="h-[320px] w-full  bg-tw-pink/20 object-cover transition duration-200 ease-in group-hover:scale-105"
            src={urlFor(item.mainImage)
              .width(280)
              .height(320)
              .fit("max")
              .auto("format")
              .url()}
            width={280}
            height={320}
            alt={item.mainImage?.alt || "Category Image"}
          />
        ) : (
          <div className=" h-[320px] bg-tw-pink/20"></div>
        )}
      </div>
      {/* text */}
      <div className="my-4  border-t-1 border-tw-primary" />
      <div className=" pb-4 text-center text-sh2 text-tw-black/80">
        {languageSelected === "en"
          ? item.categoryName?.en
          : item.categoryName?.cn || item.categoryName?.en}
      </div>
    </Link>
  );
}

export default CategoryCard;
