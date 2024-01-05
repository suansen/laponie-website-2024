"use client";

import React from "react";
import HeroRounded from "./page-slices/hero/HeroRounded";
import { useLanguageContext } from "@/app/context/LanguageContext";
import HeaderLeftTextRight from "./page-slices/textonly/HeaderLeftTextRight";
import TeamMembers from "./page-slices/textWithIllustrations/TeamMembers";
import CardsForHighlights from "./page-slices/textWithIllustrations/CardsForHighlights";
import CardsForBrand from "./page-slices/textWithIllustrations/CardsForBrand";
import HeaderSubHeader from "./page-slices/textonly/HeaderSubHeader";
import RoundedImageWithText from "./page-slices/textWithIllustrations/RoundedImageWithText";
import CardsForSupport from "./page-slices/textWithIllustrations/CardsForSupport";
import Form from "./page-slices/form/Form";
// import { PageBuilderType, HeroRoundedType } from "@/typings"

function PageTemplate({ blocks = [] }) {
  const { languageSelected } = useLanguageContext();
  return (
    <>
      {blocks.map((block: any) => (
        <React.Fragment key={block._key}>
          {block._type === "heroRounded" && (
            // heroRounded
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
          )}
          {block._type === "headerLeftTextRight" && (
            // headerLeftTextRight
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
          )}

          {block._type === "teamMembers" && (
            // headerLeftTextRight
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
          )}

          {block._type === "cardsForHighlight" && (
            // headerLeftTextRight
            <CardsForHighlights
              highlights={block.cards}
              languageSelected={languageSelected}
            />
          )}

          {block._type === "cardsForBrand" && (
            // headerLeftTextRight
            <CardsForBrand
              brands={block.cards}
              languageSelected={languageSelected}
              buttonText={block.buttonText}
            />
          )}

          {block._type === "headerSubHeader" && (
            // headerLeftTextRight
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
          )}

          {block._type === "roundedImageWithText" && (
            // headerLeftTextRight
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
          )}

          {block._type === "cardsForSupport" && (
            // headerLeftTextRight
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
          )}
          {block._type === "form" && (
            // headerLeftTextRight
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
          )}
        </React.Fragment>
      ))}
    </>
  );
}

export default PageTemplate;
