import { Treatment } from "@/typings";
import React from "react";
import Image from "next/image";
import { urlFor } from "@/utils/sanity/client";
import Link from "next/link";

type Props = { treatment: Treatment; link: string; languageSelected: string };

const TreatmentCardVar2 = ({ treatment, link, languageSelected }: Props) => {
  return (
    <Link href={link} className="group py-4 2xl:w-[360px]">
      <div className="w-full overflow-hidden rounded-xl ">
        <Image
          alt={`Image of Treatment: ${treatment.name.en}`}
          className="h-full w-full object-cover transition duration-150 ease-in group-hover:scale-105"
          src={urlFor(treatment.treatmentImage).width(345).height(345).url()}
          width={345}
          height={345}
        />
      </div>
      <div className="px-4 py-4 text-center">
        <h3 className="text-p uppercase md:text-sh2">
          {languageSelected === "en"
            ? treatment.name.en
            : treatment.name.cn || treatment.name.en}
        </h3>
      </div>
    </Link>
  );
};

export default TreatmentCardVar2;
360;
