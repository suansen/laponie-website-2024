import { BrandAward } from "@/typings";
import { urlFor } from "@/utils/sanity/client";
import Image from "next/image";
import React from "react";
import { Tooltip } from "@nextui-org/react";

type Props = { item: BrandAward };

function AwardCard({ item }: Props) {
  return (
    <div className="group flex h-full w-full items-center">
      <Tooltip
        // isOpen={isOpen}
        // onOpenChange={(open) => setIsOpen(open)}
        content={item?.name}
      >
        <div className="relative h-40 w-40 overflow-hidden rounded-full">
          {item?.mainImage && (
            <Image
              className="h-full w-full object-cover transition-transform duration-300 ease-out "
              src={urlFor(item?.mainImage)
                .width(160)
                .height(160)
                .url()}
              width={160}
              height={160}
              alt={`Image of ${item?.name}`}
            />
          )}
          {/* <div className="top-0 right-0 absolute h-full w-full bg-tw-pink mix mix-blend-hard-light  group-hover:bg-transparent transition-all duration-300 ease-out" /> */}
        </div>
      </Tooltip>
    </div>
  );
}

export default AwardCard;
