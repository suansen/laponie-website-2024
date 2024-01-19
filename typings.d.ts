import { TypedObject } from "@portabletext/react";

interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Ref {
  _ref: string;
  _type: "reference";
}

export interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  crop: any | undefined;
  hotspot: any | undefined;
  alt?: string;
}

interface Slug {
  _type: "slug";
  current: string;
}
interface LocaleString {
  _type: "localeString";
  en: string;
  cn: string;
}

interface LocaleText {
  _type: "localeText";
  en: string;
  cn: string;
}

interface LocaleBlockContent {
  _type: "localeText";
  en: TypedObject[] | TypedObject;
  cn: TypedObject[] | TypedObject;
}

interface ButtonType {
  _type: "button";
  en: string;
  cn: string;
  link: string;
}

// interface PageBuilderType {
//   _type: "page";
//   pageBuilder: TypedObject[] | TypedObject;
// }

export interface HeroRoundedType extends SanityBody {
  title: string;
  tagline1: string;
  tagline2: string;
  img: Image;
}

export interface PageType extends SanityBody {
  title: string;
  _type: "page";
  pageBuilder: TypedObject[] | TypedObject;
}

export interface ProductsPageType extends SanityBody {
  title: string;
  _type: "page";
  pageBuilder: TypedObject[] | TypedObject;
  productsPageBuilder: TypedObject[] | TypedObject;
}
export interface TeamMember extends SanityBody {
  _type: "teamMember";
  teamMemberName: LocaleString;
  title: LocaleString;
  mainImage: Image;
}

export interface Review extends SanityBody {
  _type: "review";
  brand: { name: string; slug: Slug };
  customerImage: Image;
  brand: Ref;
  name: string;
  rating: number;
  customerReview: string;
}

export interface Highlight extends SanityBody {
  _type: "highlight";
  mainImage: Image;
  slug: Slug;
  link: string;
  title: LocaleString;
  description: LocaleText;
}

export interface Brand extends SanityBody {
  _type: "brand";
  mainImage: Image;
  brandPageImage: Image;
  brandPageProductImage: Image;
  brandPagePromotionImage: Image;
  brandPageTreatmentImage: Image;
  websiteLink: string;
  brandQuote: LocaleString;
  slug: Slug;
  name: string;
  description: LocaleText;
  productCategories?: { name: string }[];
}

export interface CardLink extends SanityBody {
  _type: "cardLink";
  image: Image;
  heading: LocaleString;
  description: LocaleString;
  link: ButtonType;
  productCategories?: { name: string }[];
}

// export interface HomePageIntro extends SanityBody {
//   _type: "homePageIntro"
//   mainImage: Image
//   brands: Brand[]
//   experienceDescription: LocaleText
//   experienceTitle: LocaleString
//   experienceTitle2: LocaleString
//   title: string
//   title2: LocaleString
//   year: string
// }

// export interface AboutUsPage extends SanityBody {
//   _type: "aboutUsPage"
//   introImage: Image
//   introSubtitle: LocaleString
//   introTitle: LocaleString
//   introDescription: LocaleText
//   missionDescription: LocaleText
//   missionImage: Image
//   missionSubtitle: LocaleString
//   missionTitle: LocaleString
//   storyDescription: LocaleText
//   storySubtitle: LocaleString
//   storyTitle: LocaleString
// }

export interface Support extends SanityBody {
  _type: "support";
  description: LocaleText;
  title: LocaleString;
  image: Image | undefined;
}

// export interface ContactUsPage extends SanityBody {
//   _type: "contactUsPage"
//   title: LocaleString
//   mainImage: Image
//   addressLine1: string
//   addressLine2: string
//   generalEnquiryEmail: string
//   generalEnquiryNumber: string
//   latitude: number
//   longitude: number
//   postalCode: string
//   salesTitle: LocaleString
//   salesImage: Image
//   brandsTitle: LocaleString
//   brandsImage: Image
// }

// export interface Contact extends SanityBody {
//   _type: "contact"
//   name: LocaleString
//   phoneNumber: string
//   contactType: string
//   designation: LocaleString
//   email: string

//   mainImage: Image | undefined
// }

export interface Ingredient extends SanityBody {
  _type: "ingredient";
  name: string;
  description: string;
}

export interface Product extends SanityBody {
  _type: "product";
  brand: { name: string; slug?: Slug };
  description?: LocaleBlockContent;
  ingredients?: Ingredient[];
  slug?: Slug;
  name: string;
  productName?: LocaleString;
  productImage: Image | undefined;
  productTag: string;
  category: { categoryName: LocaleString; name: string };
  pageBuilder?: TypedObject[] | TypedObject;
  sizes?: string[];
}

export interface BrandAward extends SanityBody {
  _type: "brandAward";
  brand: { name: string; slug: Slug };
  description: string;
  name: string;
  mainImage: Image | undefined;
  year: number;
}

export interface Treatment extends SanityBody {
  _type: "treatment";
  brand: { name: string; slug: Slug };
  description: LocaleText;
  products: Product[];
  slug: Slug;
  name: LocaleString;
  treatmentImage: Image | undefined;
}

// export interface TermsAndConditions extends SanityBody {
//   _type: "termsAndConditions"
//   textBlockContent: TypedObject[] | TypedObject
// }

// export interface PrivacyPolicy extends SanityBody {
//   _type: "privacyPolicy"
//   textBlockContent: TypedObject[] | TypedObject
// }
