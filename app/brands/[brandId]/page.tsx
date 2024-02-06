import { PageType } from "@/typings";
import { sanityClient } from "@/utils/sanity/client";
import { groq } from "next-sanity";
import React from "react";
import PageTemplate from "@/app/components/pageTemplate";
// import { Metadata, ResolvingMetadata } from "next";

export const dynamicParams = false;

type Props = { params: { brandId: string } };

export async function generateStaticParams() {
  const paths = await sanityClient.fetch(
    `*[_type == "brand" && defined(slug.current)][].slug.current`,
    {},
    { next: { revalidate: 30 } },
  );

  return paths.map((path: string) => ({
    brandId: path,
  }));
}

// export async function generateMetadata(
//   { params }: Props,
//   parent: ResolvingMetadata,
// ): Promise<Metadata> {
//   // read route params
//   const id = params.brandId;

//   // fetch data
//   const product = await fetch(`https://.../${id}`).then((res) => res.json());

//   // optionally access and extend (rather than replace) parent metadata
//   const previousImages = (await parent).openGraph?.images || [];

//   return {
//     title: product.title,
//     openGraph: {
//       images: ["/some-specific-page-image.jpg", ...previousImages],
//     },
//   };
// }

const BrandDetails = async ({ params: { brandId } }: Props) => {
  const queries = {
    pages: groq`*[_type == "brand" && slug.current == $slug][0]{
_type, name, slug, description,
  pageBuilder[]{...,
    products[]->{ description, productName, productImage, slug, brand->{name, slug} },
    awards[]->{name, mainImage},
    reviews[]->{rating, customerImage, customerReview, name},
    team[]->,
    cards[]->,
    categories[]->{categoryName, mainImage}
  }
}`,
  };

  const pages = await sanityClient.fetch<PageType>(
    queries.pages,
    {
      slug: brandId,
    },
    { next: { revalidate: 30 } },
  );

  return (
    <main className="flex flex-col items-center justify-between overflow-hidden px-4 md:px-16">
      {pages ? <PageTemplate blocks={pages.pageBuilder} /> : null}
    </main>
  );
};

export default BrandDetails;
