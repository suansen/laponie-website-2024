import { PageType } from "@/typings";
import { sanityClient } from "@/utils/sanity/client";
import { groq } from "next-sanity";
import React from "react";
import PageTemplate from "@/app/components/pageTemplate";

export const dynamicParams = false;

type Props = { params: { brandId: string } };

export async function generateStaticParams() {
  const paths = await sanityClient.fetch(
    `*[_type == "brand" && defined(slug.current)][].slug.current`,
  );

  return paths.map((path: string) => ({
    brandId: path,
  }));
}

const BrandDetails = async ({ params: { brandId } }: Props) => {
  const queries = {
    pages: groq`*[_type == "brand" && slug.current == $slug][0]{
_type, name, slug, description,
  pageBuilder[]{...,
    products[]->{ description, productName, productImage, slug, brand->{name, slug} },
    awards[]->{name, mainImage},
    reviews[]->{rating, customerImage, customerReview, name},
    team[]->,
    cards[]->
  }
}`,
  };

  const pages = await sanityClient.fetch<PageType>(queries.pages, {
    slug: brandId,
  });

  return (
    <main className="flex flex-col items-center justify-between overflow-hidden px-4 md:px-16">
      <PageTemplate blocks={pages.pageBuilder} />
      {/* <div className="w-full max-w-7xl">
        {JSON.stringify(pages.pageBuilder)}
      </div> */}
    </main>
  );
};

export default BrandDetails;