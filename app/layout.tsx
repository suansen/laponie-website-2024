import type { Metadata } from "next";
import localFont from "next/font/local";
import { Montserrat, Bellefair } from "next/font/google";
import "./globals.css";
import { LanguageContextWrapper } from "./context/LanguageContext";
import { Providers } from "./providers";
import Navigation from "./components/navigation/navbar/Navigation";
import React, { Suspense } from "react";
import Loading from "./loading";
import { groq } from "next-sanity";
import { sanityClient } from "@/utils/sanity/client";
import Footer from "./components/navigation/footer/Footer";
// import { cn } from "~/lib/utils";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});
const bellefair = Bellefair({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-bellefair",
});

const laponie = localFont({
  src: "../public/fonts/laponie.ttf",
  display: "swap",
  variable: "--font-laponie",
});

const long_cang = localFont({
  src: "../public/fonts/LongCang-Regular.ttf",
  weight: "400",
  display: "swap",
  variable: "--font-long-cang",
});

const tuesday_night = localFont({
  src: "../public/fonts/TuesdayNight-Regular.otf",
  display: "swap",
  variable: "--font-tuesday-night",
});

const queries = {
  navigation: groq`*[_type == "nav"]{
  title,
  _type,
  navBuilder[]{..., brand[]->{slug, name}},

  footerBuilder[]{title, navItem}
}[0]`,
};

export const metadata: Metadata = {
  title: "Laponie",
  description: "Laponie",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navItems = await sanityClient.fetch(queries.navigation, {
    next: { revalidate: 30 },
  });

  return (
    <html
      lang="en"
      className={`light ${montserrat.variable} ${bellefair.variable} ${long_cang.variable}  ${laponie.variable} ${tuesday_night.variable}`}
    >
      <body className=" min-h-screen bg-tw-primary-light">
        <Providers>
          <Suspense fallback={<Loading />}>
            <LanguageContextWrapper>
              <Navigation navItems={navItems.navBuilder} />
              {children}
              <Footer footerBuilder={navItems.footerBuilder} />
            </LanguageContextWrapper>
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
