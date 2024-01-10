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
// import { PageBuilderType, HeroRoundedType } from "@/typings"

function PageTemplate({ blocks = [] }) {
  const { languageSelected } = useLanguageContext();
  return (
    <>
      {blocks.map((block: any) => (
        <React.Fragment key={block._key}>
          {(() => {
            switch (block._type) {
              case "hero":
                return (
                  <Hero
                    heading={
                      languageSelected === "en"
                        ? block.heading.en
                        : block.heading.cn || block.heading.en
                    }
                    textColor={block.textColor}
                    tagline={
                      languageSelected === "en"
                        ? block.tagline.en
                        : block.tagline.cn || block.tagline.en
                    }
                    buttonText={
                      languageSelected === "en"
                        ? block.button.en
                        : block.button.cn || block.button.en
                    }
                    buttonLink={block.button.link}
                    image={block.image}
                    variant={block.variant}
                  />
                );
              case "heroRounded":
                return (
                  <HeroRounded
                    title={
                      languageSelected === "en"
                        ? block.heading.en
                        : block.heading.cn || block.heading.en
                    }
                    subheader1={
                      languageSelected === "en"
                        ? block.tagline.en
                        : block.tagline.cn || block.tagline.en
                    }
                    subheader2={
                      languageSelected === "en"
                        ? block.tagline2.en
                        : block.tagline2.cn || block.tagline2.en
                    }
                    img={block.image}
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

              // case "won":
              //   return <></>;

              default:
                return null;
            }
          })()}
        </React.Fragment>
      ))}
    </>
  );
}

export default PageTemplate;
