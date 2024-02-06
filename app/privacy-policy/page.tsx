import { PortableText } from "@portabletext/react";
import { groq } from "next-sanity";
import React from "react";
import { components } from "../components/blockComponent/component";
import { sanityClient } from "@/utils/sanity/client";
import { Metadata } from "next";

const queries = {
  pages: groq`*[_type == "privacyPolicy"][0]`,
};

export const metadata: Metadata = {
  title: "Privacy Policy - Laponie",
  description: "Privacy Policy",
};

const PrivacyPolicyPage = async () => {
  const data = await sanityClient.fetch(
    queries.pages,
    {},
    {
      next: { revalidate: 30 },
    },
  );

  return (
    <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
      <h1 className="my-8 pt-4 text-h5 uppercase md:pt-8 md:text-h4">
        Privacy Policy
      </h1>
      <div className=" space-y-4 font-secondary text-sm md:text-base">
        {data?.textBlockContent && (
          <PortableText
            value={data?.textBlockContent}
            components={components}
            // components={/* optional object of custom components to use */}
          />
        )}
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
