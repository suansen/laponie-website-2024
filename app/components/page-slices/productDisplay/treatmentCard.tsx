import { Treatment } from "@/typings";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import React from "react";
import Image from "next/image";
import { urlFor } from "@/utils/sanity/client";
import Link from "next/link";

type Props = { treatment: Treatment; link: string };

const TreatmentCard = ({ treatment, link }: Props) => {
  return (
    <Link href={link} className="group">
      <Card className="w-fit max-w-sm cursor-pointer bg-tw-white-off py-4 ">
        <CardHeader className="flex-col items-start px-4 pb-0 pt-2">
          <p className="text-tiny font-bold uppercase">
            {treatment.brand.name}
          </p>
          {/* <small className="text-default-500">12 Tracks</small> */}
          <h4 className="text-large">{treatment.name.en}</h4>
        </CardHeader>
        <CardBody className="overflow-hidden py-2">
          <div className="overflow-hidden rounded-xl">
            <Image
              alt="Card background"
              className="object-cover transition duration-150 ease-in group-hover:scale-105"
              src={urlFor(treatment.treatmentImage)
                .width(270)
                .height(270)
                .url()}
              width={270}
              height={270}
            />
          </div>
        </CardBody>
      </Card>
    </Link>
  );
};

export default TreatmentCard;
