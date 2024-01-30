import BreadcrumbsComponent from "@/app/components/breadcrumbs/BreadcrumbsComponent";
import SingleTreatmentDisplay from "@/app/components/page-slices/productDisplay/singleTreatmentDisplay";
import PageTemplate from "@/app/components/pageTemplate";
import { Treatment } from "@/typings";
import { sanityClient } from "@/utils/sanity/client";
import { groq } from "next-sanity";
import React from "react";

export const dynamicParams = false;

type Props = { params: { brandId: string; treatmentId: string } };

const queries = {
  pages: groq`*[_type == "treatment" && slug.current == $treatmentId && !(_id in path("drafts.**"))]{
    slug,
    name,
    description,
    treatmentImage,
      pageBuilder[]{
    ...,
           treatments[]->{slug, treatmentImage, brand->{name, slug}, name, description},
      products[]->{ description, productName, productImage, slug, brand->{name, slug} },
    awards[]->{name, mainImage},
    reviews[]->{rating, customerImage, customerReview, name},
    team[]->,
    cards[]->,
    productCategories[]->{categoryName, description}
    }
  }[0]`,
};

export async function generateStaticParams() {
  const paths = await sanityClient.fetch(
    `*[_type == "treatment"]{
        brand -> {slug},
        slug
    }`,
    { next: { revalidate: 30 } },
  );
  return paths.map(
    (path: {
      brand: { slug: { current: string; _type: "slug" } };
      slug: { current: string; _type: "slug" };
    }) => ({
      brandId: path.brand?.slug.current,
      treatmentId: path.slug?.current,
    }),
  );
}

const TreatmentPage = async ({ params }: Props) => {
  const treatment = await sanityClient.fetch<Treatment>(
    queries.pages,
    {
      slug: params.brandId,
      treatmentId: params.treatmentId,
    },
    { next: { revalidate: 30 } },
  );

  return (
    <main className="relative flex flex-col items-center justify-between overflow-hidden px-4 md:px-16">
      <div className="fixed top-[64px] z-20 flex h-10 w-screen items-center justify-center border-y-1 border-tw-primary-dark/70  bg-tw-primary-light/90 backdrop-blur-lg ">
        <BreadcrumbsComponent params={params} type="treatments" />
      </div>
      <div className="mt-10">
        {treatment?.pageBuilder && treatment?.pageBuilder?.length > 0 ? (
          <PageTemplate blocks={treatment.pageBuilder} treatment={treatment} />
        ) : (
          <>
            <SingleTreatmentDisplay
              description={treatment?.description}
              name={treatment?.name}
              treatmentImage={treatment?.treatmentImage}
              // sizes={treatment.sizes}
              brand={treatment?.brand}
            />
          </>
        )}
      </div>
    </main>
  );
};

export default TreatmentPage;
