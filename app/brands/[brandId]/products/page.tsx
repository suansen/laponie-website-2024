import BreadcrumbsComponent from "@/app/components/breadcrumbs/BreadcrumbsComponent";
import PageTemplate from "@/app/components/pageTemplate";
import { ProductsPageType } from "@/typings";
import { sanityClient } from "@/utils/sanity/client";
import { groq } from "next-sanity";
import React from "react";

type Props = { params: { brandId: string } };

const queries = {
  pages: groq`*[_type == "brand" && slug.current == $slug && !(_id in path("drafts.**"))][0]{
_type, name, slug,
  productsPageBuilder[]{...,
    products[]->{ description, productName, productImage, slug, brand->{name, slug} },
    awards[]->{name, mainImage},
    reviews[]->{rating, customerImage, customerReview, name},
    team[]->,
    cards[]->,
    productCategories[]->{categoryName, description}
  }
}`,
};

const ProductsDetails = async ({ params }: Props) => {
  const pages = await sanityClient.fetch<ProductsPageType>(
    queries.pages,
    {
      slug: params.brandId,
    },
    { next: { revalidate: 30 } },
  );

  return (
    <main className="relative flex flex-col items-center justify-between overflow-hidden px-4 md:px-16">
      <div className="fixed top-[64px] z-10 flex h-10 w-screen items-center justify-center border-y-1 border-tw-primary-dark/70  bg-tw-primary-light/90 backdrop-blur-lg ">
        <BreadcrumbsComponent params={params} type="products" />
      </div>
      <div className="mt-10">
        {pages.productsPageBuilder ? (
          <PageTemplate blocks={pages.productsPageBuilder} />
        ) : null}
      </div>
    </main>
  );
};

export default ProductsDetails;
