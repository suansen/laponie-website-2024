// import Image from "next/image"
import { PageType } from "@/typings";
import { sanityClient } from "@/utils/sanity/client";
import { groq } from "next-sanity";
import PageTemplate from "../components/pageTemplate";

const queries = {
  pages: groq`*[_type == "page" && slug.current=="about-us"]{
  title, _type, pageBuilder[]{..., team[]->, cards[]->}
}[0]`,
};

export default async function AboutUs() {
  const pages = await sanityClient.fetch<PageType>(queries.pages);

  return (
    <main className="mt-[80px] flex min-h-screen flex-col items-center px-4 md:px-0">
      <PageTemplate blocks={pages.pageBuilder} />
    </main>
  );
}
