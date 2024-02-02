import { Review } from "@/typings";
import Image from "next/image";
import React from "react";
import StarIcon from "../icons/starIcon";
import { urlFor } from "@/utils/sanity/client";

type Props = { item: Review };

function ReviewCard({ item }: Props) {
  const getStarRating: any = () => {
    let reviews = [];

    for (let index = 0; index < item.rating; index++) {
      reviews.push(
        <div key={`${index}A`} className=" text-tw-primary-pink">
          <StarIcon size="36" />
        </div>,
      );
    }

    for (let index = 0; index < 5 - item.rating; index++) {
      reviews.push(
        <div key={`${index}B`} className=" text-tw-secondary">
          <StarIcon size="36" />
        </div>,
      );
    }

    return reviews;
  };

  return (
    <div className="mx-auto flex max-w-4xl cursor-grab flex-col items-center gap-4 py-16 md:flex-row">
      <div className="flex flex-col items-center justify-between gap-4">
        {/* image */}
        <div className="group relative hidden h-72 w-44 overflow-hidden rounded-b-full rounded-t-full md:inline-flex">
          {item?.customerImage ? (
            <Image
              className="absolute left-0 top-0 object-cover "
              width={180}
              height={300}
              src={urlFor(item?.customerImage)
                .width(180)
                .height(300)
                .url()}
              alt={`Image of a customer ${item?.name}`}
            />
          ) : null}

          {/* <div className=" md:rounded-t-full rounded-full md:rounded-b-full bg-tw-primary-pink absolute top-0 left-0 w-full h-full transition-all duration-300 ease-out opacity-70 mix-blend-hard-light group-hover:opacity-0 " /> */}
        </div>
        {/* name */}
        <div className="max-w-44 font-secondary text-p">{item?.name}</div>
      </div>
      <div className="flex flex-grow flex-col justify-between pl-4 pr-4 md:pr-0">
        {/* text */}
        <div className=" line-clamp-6 font-secondary text-sm text-tw-primary-dark md:text-p">
          &ldquo;{item?.customerReview}&rdquo;
        </div>
        {/* star */}
        <div className="flex gap-2 pt-8">{getStarRating()}</div>
      </div>
    </div>
  );
}

export default ReviewCard;
