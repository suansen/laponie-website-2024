// import Image from "next/image"
import { PageType } from "@/typings";
import { sanityClient } from "@/utils/sanity/client";
import { groq } from "next-sanity";
import PageTemplate from "../components/pageTemplate";
import "mapbox-gl/dist/mapbox-gl.css";
// import MapBoxMap from "../components/page-slices/map/MapBoxMap";

const queries = {
  pages: groq`*[_type == "page" && slug.current=="contact-us"]{
  title, _type, pageBuilder[]{..., team[]->, cards[]->}
}[0]`,
};

export default async function AboutUs() {
  const pages = await sanityClient.fetch<PageType>(queries.pages, {
    cache: "no-store",
  });
  return (
    <>
      <main className="flex min-h-screen flex-col items-center px-4 md:px-0">
        {pages?.pageBuilder && <PageTemplate blocks={pages?.pageBuilder} />}
      </main>
    </>
  );
}
