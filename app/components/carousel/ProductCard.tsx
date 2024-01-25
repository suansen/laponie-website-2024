import Link from "next/link";
import Image from "next/image";
import React from "react";
import { urlFor } from "@/utils/sanity/client";
import { Product } from "@/typings";

type Props = { item: Product; languageSelected: string };

function ProductCard({ item, languageSelected }: Props) {
  return (
    <Link
      href={`/brands/${item?.brand?.slug?.current}/products/${item?.slug?.current}`}
      className="group w-[280px]"
    >
      <div className="h-[320px] overflow-hidden rounded-lg ">
        <Image
          className="h-[320px] w-full  bg-tw-pink/20 object-contain transition duration-200 ease-in group-hover:scale-105"
          src={urlFor(item.productImage)
            .width(280)
            .fit("max")
            .auto("format")
            .url()}
          width={280}
          height={320}
          alt={item.productImage?.alt || "Product Image"}
        />
      </div>
      {/* text */}
      <div className="my-4  border-t-1 border-tw-primary" />
      <div className=" pb-4 text-center text-sh2 text-tw-black/80">
        {languageSelected === "en"
          ? item.productName?.en
          : item.productName?.cn || item.productName?.en}
      </div>
    </Link>
  );
}

export default ProductCard;
