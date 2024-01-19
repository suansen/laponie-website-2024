import { CardLink } from "@/typings";
import React from "react";
import Image from "next/image";
import { urlFor } from "@/utils/sanity/client";
import Link from "next/link";
import { Button } from "@nextui-org/react";

type Props = { cards: CardLink[]; languageSelected: string };

const CardsForLink = ({ cards, languageSelected }: Props) => {
  return (
    <section className="flex flex-wrap justify-center gap-8 py-4 md:gap-16 md:py-8 lg:gap-32">
      {cards.map((card, index) => (
        <div key={`${card.heading}${index}`} className="space-y-4 text-center">
          <div
            className={`flex w-full justify-center rounded-lg p-4 ${
              (index + 1) % 2 === 0
                ? "bg-tw-pink/30"
                : (index + 1) % 3 === 0
                  ? "bg-tw-primary-dark/10"
                  : "bg-yellow-100"
            }`}
          >
            <Image
              className=""
              src={urlFor(card.image).width(120).height(120).url()}
              width={120}
              height={120}
              alt={`${card.image.alt || "Image of a card"}`}
            />
          </div>
          <div>
            <div className="text-sh2 text-black/80 md:text-sh1">
              {languageSelected === "en"
                ? card.heading.en
                : card.heading.cn || card.heading.en}
            </div>
            {card.description && (
              <div className="pb-4 text-p text-tw-primary-dark">
                {languageSelected === "en"
                  ? card.description.en
                  : card.description.cn || card.description.en}
              </div>
            )}
            <Link href={card.link.link}>
              <Button color="warning" className="uppercase">
                {languageSelected === "en"
                  ? card.link.en
                  : card.link.cn || card.link.en}
              </Button>
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
};

export default CardsForLink;
