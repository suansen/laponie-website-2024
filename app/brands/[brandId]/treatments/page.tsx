// import { useLanguageContext } from "@/app/context/LanguageContext";
import BreadcrumbsComponent from "@/app/components/breadcrumbs/BreadcrumbsComponent";
import PageTemplate from "@/app/components/pageTemplate";
import { TreatmentsPageType } from "@/typings";
import { sanityClient } from "@/utils/sanity/client";
import { groq } from "next-sanity";
import React from "react";

type Props = { params: { brandId: string } };

const queries = {
  pages: groq`*[_type == "brand" && slug.current == $slug && !(_id in path("drafts.**"))][0]{
_type, name, slug,
  treatmentsPageBuilder[]{...,
    products[]->{ description, productName, productImage, slug, brand->{name, slug} },
    treatments[]->{slug, treatmentImage, brand->{name, slug}, name, description},
    awards[]->{name, mainImage},
    reviews[]->{rating, customerImage, customerReview, name},
    team[]->,
    cards[]->,
    productCategories[]->{categoryName, description}
  }
}`,
};

const TreatmentsPage = async ({ params }: Props) => {
  const pages = await sanityClient.fetch<TreatmentsPageType>(
    queries.pages,
    {
      slug: params.brandId,
    },
    { next: { revalidate: 30 } },
  );

  // const { languageSelected } = useLanguageContext;

  return (
    <>
      <main className="relative flex flex-col items-center justify-between overflow-hidden px-4 md:px-16">
        <div className="fixed top-[64px] z-10 flex h-10 w-screen items-center justify-center border-y-1 border-tw-primary-dark/70  bg-tw-primary-light/90 backdrop-blur-lg ">
          <BreadcrumbsComponent params={params} type="treatments" />
        </div>
        <div className="mt-10">
          {pages?.treatmentsPageBuilder ? (
            <PageTemplate
              blocks={pages.treatmentsPageBuilder}
              params={params}
            />
          ) : null}
        </div>
      </main>
    </>
  );
};

export default TreatmentsPage;
