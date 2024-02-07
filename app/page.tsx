// import Image from "next/image"
import { sanityClient } from "@/utils/sanity/client";
import { groq } from "next-sanity";

import { PageType } from "@/typings";
import PageTemplate from "./components/pageTemplate";

const queries = {
  pages: groq`*[_type == "page" && slug.current=="home-page"]{
  title, _type, pageBuilder[]{...,
    awards[]->{name, mainImage},
    reviews[]->{rating, customerImage, customerReview, name},
    team[]->,
    cards[]->,
    categories[]->{categoryName, mainImage}
  }
}[0]`,
};

export default async function Home() {
  const pages = await sanityClient.fetch<PageType>(
    queries.pages,
    {},
    {
      next: { revalidate: 30 },
    },
  );

  return (
    <main className="mt-[1rem] flex flex-col items-center justify-between overflow-hidden px-4 md:mt-[80px] md:px-16">
      <PageTemplate blocks={pages.pageBuilder} />
    </main>
  );
}
