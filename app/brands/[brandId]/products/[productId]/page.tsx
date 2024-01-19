import BreadcrumbsComponent from "@/app/components/breadcrumbs/BreadcrumbsComponent";
import SingleProductDisplay from "@/app/components/page-slices/productDisplay/singleProductDisplay";
import SingleProductIngredientsDisplay from "@/app/components/page-slices/productDisplay/singleProductIngredientsDisplay";
import PageTemplate from "@/app/components/pageTemplate";
import { Product } from "@/typings";
import { sanityClient } from "@/utils/sanity/client";
import { groq } from "next-sanity";
import React from "react";

export const dynamicParams = false;

type Props = { params: { brandId: string; productId: string } };

const queries = {
  pages: groq`*[_type == "product" && slug.current == $productId]{
  ...,
  brand -> {name, slug},
  ingredients[] ->{ name, description },
  pageBuilder[]{
    ...,
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
    `*[_type == "product"]{
        brand -> {slug},
        slug
    }`,
  );

  return paths.map(
    (path: {
      brand: { slug: { current: string; _type: "slug" } };
      slug: { current: string; _type: "slug" };
    }) => ({
      brandId: path.brand?.slug.current,
      productId: path.slug?.current,
    }),
  );
}

const ProductDetails = async ({ params }: Props) => {
  // console.log("params", params);

  const product = await sanityClient.fetch<Product>(queries.pages, {
    slug: params.brandId,
    productId: params.productId,
  });

  return (
    <main className="relative flex flex-col items-center justify-between overflow-hidden px-4 md:px-16">
      <div className="fixed top-[64px] z-20 flex h-10 w-screen items-center justify-center border-y-1 border-tw-primary-dark/70  bg-tw-primary-light/90 backdrop-blur-lg ">
        <BreadcrumbsComponent params={params} />
      </div>
      <div className="mt-10">
        {product.pageBuilder ? (
          <PageTemplate blocks={product.pageBuilder} product={product} />
        ) : (
          <>
            <SingleProductDisplay
              description={product.description}
              productName={product?.productName}
              productImage={product?.productImage}
              sizes={product.sizes}
              brand={product.brand}
            />
            {product.ingredients && (
              <SingleProductIngredientsDisplay
                ingredients={product.ingredients}
                heading={{
                  en: "Active Ingredient",
                  _type: "localeString",
                  cn: "原料",
                }}
              />
            )}
          </>
        )}
      </div>
    </main>
  );
};

export default ProductDetails;
