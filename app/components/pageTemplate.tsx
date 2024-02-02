"use client";

import React from "react";
import HeroRounded from "./page-slices/hero/HeroRounded";
import Hero from "./page-slices/hero/Hero";
import { useLanguageContext } from "@/app/context/LanguageContext";
import HeaderLeftTextRight from "./page-slices/textonly/HeaderLeftTextRight";
import TeamMembers from "./page-slices/textWithIllustrations/TeamMembers";
import CardsForHighlights from "./page-slices/textWithIllustrations/CardsForHighlights";
import CardsForBrand from "./page-slices/textWithIllustrations/CardsForBrand";
import HeaderSubHeader from "./page-slices/textonly/HeaderSubHeader";
import RoundedImageWithText from "./page-slices/textWithIllustrations/RoundedImageWithText";
import CardsForSupport from "./page-slices/textWithIllustrations/CardsForSupport";
import Form from "./page-slices/form/Form";
import MapBox from "./page-slices/map/MapBoxSection";
import ProductCarousel from "./page-slices/carousel/productCarousel";
import AwardCarousel from "./page-slices/carousel/awardCarousel";
import ReviewCarousel from "./page-slices/carousel/reviewCarousel";
import CardsForProduct from "./page-slices/textWithIllustrations/CardsForProduct";
import CardsForLink from "./page-slices/textWithIllustrations/CardsForLink";

import ProductDisplay from "./page-slices/productDisplay/productDisplay";
import SingleProductDisplay from "./page-slices/productDisplay/singleProductDisplay";
import { Product, Treatment } from "@/typings";
import SingleProductIngredientsDisplay from "./page-slices/productDisplay/singleProductIngredientsDisplay";
import TreatmentDisplay from "./page-slices/productDisplay/treatmentDisplay";
import SingleTreatmentDisplay from "./page-slices/productDisplay/singleTreatmentDisplay";
import CardsForCategory from "./page-slices/textWithIllustrations/CardsForCategory";
import TextWithIllustration from "./page-slices/textWithIllustrations/textWithIllustration";
// import { PageBuilderType, HeroRoundedType } from "@/typings"

type Props = {
  product?: Product;
  treatment?: Treatment;
  blocks: any[];
  params?: { brandId: string; productId?: string; treatmentId?: string };
};

function PageTemplate({ blocks = [], product, params, treatment }: Props) {
  const { languageSelected } = useLanguageContext();
  return (
    <>
      {blocks ? (
        blocks.map((block: any) => (
          <React.Fragment key={block._key}>
            {(() => {
              switch (block._type) {
                case "hero":
                  return (
                    <Hero
                      heading={
                        languageSelected === "en"
                          ? block.heading?.en
                          : block.heading?.cn || block.heading?.en
                      }
                      textColor={block.textColor}
                      tagline={
                        languageSelected === "en"
                          ? block.tagline?.en
                          : block.tagline?.cn || block.tagline?.en
                      }
                      buttonText={
                        languageSelected === "en"
                          ? block.button?.en
                          : block.button?.cn || block.button?.en
                      }
                      buttonLink={block.button?.link}
                      image={block.image}
                      variant={block.variant}
                    />
                  );
                case "heroRounded":
                  return (
                    <HeroRounded
                      title={
                        languageSelected === "en"
                          ? block.heading?.en
                          : block.heading?.cn || block.heading?.en
                      }
                      subheader1={
                        languageSelected === "en"
                          ? block.tagline?.en
                          : block.tagline?.cn || block.tagline?.en
                      }
                      subheader2={
                        languageSelected === "en"
                          ? block.tagline2?.en
                          : block.tagline2?.cn || block.tagline2?.en
                      }
                      img={block.image}
                    />
                  );
                // textWithIllustration
                case "textWithIllustration":
                  return (
                    <TextWithIllustration
                      heading={
                        languageSelected === "en"
                          ? block?.heading?.en
                          : block?.heading?.cn || block?.heading?.en
                      }
                      tagline={
                        languageSelected === "en"
                          ? block?.tagline?.en
                          : block?.tagline?.cn || block?.tagline?.en
                      }
                      excerpt={
                        languageSelected === "en"
                          ? block?.excerpt?.en
                          : block?.excerpt?.cn || block?.excerpt?.en
                      }
                      image={block?.image}
                    />
                  );
                case "headerLeftTextRight":
                  return (
                    <HeaderLeftTextRight
                      header={
                        languageSelected === "en"
                          ? block.header.en
                          : block.header.cn || block.header.en
                      }
                      subheader={
                        languageSelected === "en"
                          ? block.subheader.en
                          : block.subheader.cn || block.subheader.en
                      }
                      description={
                        languageSelected === "en"
                          ? block.description?.en
                          : block.description?.cn || block.description?.en
                      }
                    />
                  );
                case "teamMembers":
                  return (
                    <TeamMembers
                      header={
                        languageSelected === "en"
                          ? block.header.en
                          : block.header.cn || block.header.en
                      }
                      subheader={
                        languageSelected === "en"
                          ? block.subheader?.en
                          : block.subheader?.cn || block.subheader?.en
                      }
                      teamMembers={block.team}
                      languageSelected={languageSelected}
                    />
                  );
                case "cardsForHighlight":
                  return (
                    <CardsForHighlights
                      highlights={block.cards}
                      languageSelected={languageSelected}
                    />
                  );
                case "cardsForBrand":
                  return (
                    <CardsForBrand
                      brands={block.cards}
                      languageSelected={languageSelected}
                      buttonText={block.buttonText}
                    />
                  );

                case "headerSubHeader":
                  return (
                    <HeaderSubHeader
                      header={
                        languageSelected === "en"
                          ? block.header.en
                          : block.header.cn || block.header.en
                      }
                      subheader={
                        languageSelected === "en"
                          ? block.subheader?.en
                          : block.subheader?.cn || block.subheader?.en
                      }
                      textAlign={block.textAlign}
                      variant={block.variant}
                      text={
                        languageSelected === "en"
                          ? block.text?.en
                          : block.text?.cn || block.text?.en
                      }
                    />
                  );
                case "roundedImageWithText":
                  return (
                    <RoundedImageWithText
                      header={
                        languageSelected === "en"
                          ? block.header.en
                          : block.header.cn || block.header.en
                      }
                      subheader={
                        languageSelected === "en"
                          ? block.subheader?.en
                          : block.subheader?.cn || block.subheader?.en
                      }
                      variant={block.variant}
                      text={
                        languageSelected === "en"
                          ? block.text?.en
                          : block.text?.cn || block.text?.en
                      }
                      image={block.image}
                    />
                  );
                case "cardsForSupport":
                  return (
                    <CardsForSupport
                      header={
                        languageSelected === "en"
                          ? block.header.en
                          : block.header.cn || block.header.en
                      }
                      subheader={
                        languageSelected === "en"
                          ? block.subheader?.en
                          : block.subheader?.cn || block.subheader?.en
                      }
                      languageSelected={languageSelected}
                      cards={block.cards}
                    />
                  );
                case "cardsForProduct":
                  return (
                    <CardsForProduct
                      heading={
                        languageSelected === "en"
                          ? block.heading.en
                          : block.heading.cn || block.heading.en
                      }
                      description={
                        languageSelected === "en"
                          ? block.description?.en
                          : block.description?.cn || block.description?.en
                      }
                      buttonText={
                        languageSelected === "en"
                          ? block.button?.en
                          : block.button?.cn || block.button?.en
                      }
                      buttonLink={block.button.link}
                      languageSelected={languageSelected}
                      products={block.products}
                    />
                  );
                case "cardsForCategory":
                  return (
                    <>
                      <CardsForCategory
                        heading={
                          languageSelected === "en"
                            ? block.heading.en
                            : block.heading.cn || block.heading.en
                        }
                        description={
                          languageSelected === "en"
                            ? block.description?.en
                            : block.description?.cn || block.description?.en
                        }
                        buttonText={
                          languageSelected === "en"
                            ? block.button?.en
                            : block.button?.cn || block.button?.en
                        }
                        buttonLink={block.button.link}
                        languageSelected={languageSelected}
                        categories={block.categories}
                        brand={block.brand}
                      />
                    </>
                  );
                case "cardsForLink":
                  return (
                    <CardsForLink
                      cards={block.cards}
                      languageSelected={languageSelected}
                    />
                  );
                case "form":
                  return (
                    <Form
                      header={
                        languageSelected === "en"
                          ? block.header.en
                          : block.header.cn || block.header.en
                      }
                      subheader={
                        languageSelected === "en"
                          ? block.subheader?.en
                          : block.subheader?.cn || block.subheader?.en
                      }
                      languageSelected={languageSelected}
                      form={block.form}
                    />
                  );

                case "mapBox":
                  return (
                    <MapBox
                      header={
                        languageSelected === "en"
                          ? block.header.en
                          : block.header.cn || block.header.en
                      }
                      subheader={
                        languageSelected === "en"
                          ? block.subheader?.en
                          : block.subheader?.cn || block.subheader?.en
                      }
                      latitude={block.latitude}
                      longitude={block.longitude}
                      enquiryPhoneNumber={block.enquiryPhoneNumber}
                      enquiryEmail={block.enquiryEmail}
                      enquiryAddressLine1={block.enquiryAddressLine1}
                      enquiryAddressLine2={block.enquiryAddressLine2}
                      enquiryAddressLine3={block.enquiryAddressLine3}
                      languageSelected={languageSelected}
                    />
                  );
                case "productCarousel":
                  return (
                    <ProductCarousel
                      heading={
                        languageSelected === "en"
                          ? block.heading.en
                          : block.heading.cn || block.heading.en
                      }
                      description={
                        languageSelected === "en"
                          ? block.description.en
                          : block.description.cn || block.description.en
                      }
                      languageSelected={languageSelected}
                      products={block.products}
                    />
                  );
                case "awardCarousel":
                  return (
                    <AwardCarousel
                      heading={
                        languageSelected === "en"
                          ? block.heading.en
                          : block.heading.cn || block.heading.en
                      }
                      description={
                        languageSelected === "en"
                          ? block.description.en
                          : block.description.cn || block.description.en
                      }
                      languageSelected={languageSelected}
                      awards={block.awards}
                    />
                  );

                case "reviewCarousel":
                  return (
                    <ReviewCarousel
                      heading={
                        languageSelected === "en"
                          ? block.heading.en
                          : block.heading.cn || block.heading.en
                      }
                      description={
                        languageSelected === "en"
                          ? block.description.en
                          : block.description.cn || block.description.en
                      }
                      languageSelected={languageSelected}
                      reviews={block.reviews}
                    />
                  );
                case "productDisplay":
                  return (
                    <ProductDisplay
                      productCategories={block.productCategories}
                      languageSelected={languageSelected}
                    />
                  );
                case "singleProductDisplay":
                  return (
                    <>
                      {product ? (
                        <SingleProductDisplay
                          description={product?.description}
                          productName={product?.productName}
                          productImage={product?.productImage}
                          // sizes={product?.sizes}
                          brand={product.brand}
                        />
                      ) : null}
                    </>
                  );
                case "singleProductIngredientDisplay":
                  return (
                    <>
                      {product?.ingredients ? (
                        <SingleProductIngredientsDisplay
                          ingredients={product.ingredients}
                          heading={block.heading}
                        />
                      ) : null}
                    </>
                  );
                case "treatmentsDisplay":
                  return (
                    <>
                      <TreatmentDisplay
                        params={params}
                        treatments={block.treatments}
                        languageSelected={languageSelected}
                        heading={
                          languageSelected === "en"
                            ? block.heading?.en
                            : block.heading?.cn || block.heading?.en
                        }
                        subheading={
                          languageSelected === "en"
                            ? block.subheading?.en
                            : block.subheading?.cn || block.subheading?.en
                        }
                      />
                    </>
                  );

                case "singleTreatmentDisplay":
                  return (
                    <>
                      {treatment ? (
                        <SingleTreatmentDisplay
                          name={treatment?.name}
                          description={treatment?.description}
                          treatmentImage={treatment?.treatmentImage}
                          brand={treatment?.brand}
                        />
                      ) : null}
                    </>
                  );

                // case "won":
                //   return <></>;

                default:
                  return null;
              }
            })()}
          </React.Fragment>
        ))
      ) : (
        <div>There are no sections</div>
      )}
    </>
  );
}

export default PageTemplate;
