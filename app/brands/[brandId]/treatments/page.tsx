// import { useLanguageContext } from "@/app/context/LanguageContext";
import { Treatment } from "@/typings";
import { sanityClient, urlFor } from "@/utils/sanity/client";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { groq } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = { params: { brandId: string } };

const queries = {
  pages: groq`*[_type == "treatment" && !(_id in path("drafts.**"))]{
      ...,
      brand -> {name, slug},
    }[brand.slug.current == $slug]`,
};

const TreatmentsPage = async ({ params }: Props) => {
  const treatments = await sanityClient.fetch<Treatment[]>(queries.pages, {
    slug: params.brandId,
  });

  // const { languageSelected } = useLanguageContext;

  return (
    <>
      <section className="py-4 md:py-8">
        <h1 className="text-center text-h4 uppercase md:text-h3">Treatments</h1>
      </section>
      <section className=" flex w-full flex-wrap justify-center gap-4 py-4 md:gap-8 md:py-8">
        {/* {JSON.stringify(treatments)} {params.brandId} */}
        {treatments.map((treatment, index) => (
          <Link
            key={`${treatment.name.en}${index}`}
            href={`/brands/${params.brandId}/treatments/${treatment.slug.current}`}
          >
            <Card className=" w-fit max-w-sm cursor-pointer bg-tw-primary-pink/30 py-4 transition duration-150 ease-in hover:scale-105">
              <CardHeader className="flex-col items-start px-4 pb-0 pt-2">
                <p className="text-tiny font-bold uppercase">
                  {treatment.brand.name}
                </p>
                {/* <small className="text-default-500">12 Tracks</small> */}
                <h4 className="text-large">\{treatment.name.en}</h4>
              </CardHeader>
              <CardBody className="overflow-hidden py-2">
                <Image
                  alt="Card background"
                  className="rounded-xl object-cover"
                  src={urlFor(treatment.treatmentImage)
                    .width(270)
                    .height(270)
                    .url()}
                  width={270}
                  height={270}
                />
              </CardBody>
            </Card>
          </Link>
        ))}
      </section>
    </>
  );
};

export default TreatmentsPage;
