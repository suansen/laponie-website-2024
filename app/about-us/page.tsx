// import Image from "next/image"
import { PageType } from "@/typings";
import { sanityClient } from "@/utils/sanity/client";
import { groq } from "next-sanity";
import PageTemplate from "../components/pageTemplate";
import { Metadata } from "next";

const queries = {
  pages: groq`*[_type == "page" && slug.current=="about-us"]{
  title, _type, pageBuilder[]{..., team[]->, cards[]->}
}[0]`,
};

export const metadata: Metadata = {
  title: "About Us - Laponie",
  description: "About Us",
};

export default async function AboutUs() {
  const pages = await sanityClient.fetch<PageType>(
    queries.pages,
    {},
    {
      next: { revalidate: 30 },
    },
  );

  return (
    <main className="mt-[1rem] flex min-h-screen flex-col items-center overflow-hidden px-4 md:mt-[80px] md:px-0">
      <PageTemplate blocks={pages.pageBuilder} />
    </main>
  );
}
