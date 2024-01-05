// import Image from "next/image"
import { sanityClient } from "@/utils/sanity/client";
import { groq } from "next-sanity";

import { PageType } from "@/typings";
import PageTemplate from "./components/pageTemplate";

const queries = {
  pages: groq`*[_type == "page" && slug.current=="home-page"]{
  title, _type, pageBuilder[]{..., team[]->, cards[]->}
}[0]`,
};

export default async function Home() {
  // const brands = await client.fetch<Brand[]>(`*[_type == "brand"]`)
  const pages = await sanityClient.fetch<PageType>(queries.pages);

  return (
    <main className="mt-[80px] flex flex-col items-center justify-between px-4 md:px-16">
      {/* <div className="max-w-screen">{JSON.stringify(pages)}</div> */}
      <PageTemplate blocks={pages.pageBuilder} />
      {/* <div className="group mx-auto flex h-screen w-screen flex-wrap gap-2 transition duration-300 ease-in">
        <div className="h-[400px] w-[400px] bg-red-100 transition duration-300 ease-in group-hover:w-[800px]">
          1
        </div>
        <div className="h-[400px] w-[400px] bg-red-200"></div>
        <div className="h-[400px] w-[400px] bg-red-300"></div>
        <div className="h-[400px] w-[400px] bg-red-400"></div>
        <div className="h-[400px] w-[400px] bg-red-500"></div>
        <div className="h-[400px] w-[400px] bg-red-600"></div>
        <div className="h-[400px] w-[400px] bg-red-700"></div>
        <div className="h-[400px] w-[400px] bg-red-800"></div>
      </div> */}
    </main>
  );
}
