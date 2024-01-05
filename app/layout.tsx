import type { Metadata } from "next"
import localFont from "next/font/local"
import { Montserrat, Bellefair } from "next/font/google"
import "./globals.css"
import { LanguageContextWrapper } from "./context/LanguageContext"
import { Providers } from "./providers"
import Navigation from "./components/navigation/navbar/Navigation"
import React, { Suspense } from "react"
import Loading from "./loading"

const montserrat = Montserrat({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat"
})
const bellefair = Bellefair({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-bellefair"
})

const laponie = localFont({
  src: "../public/fonts/laponie.ttf",
  display: "swap",
  variable: "--font-laponie"
})

const long_cang = localFont({
  src: "../public/fonts/LongCang-Regular.ttf",
  weight: "400",
  display: "swap",
  variable: "--font-long-cang"
})

const tuesday_night = localFont({
  src: "../public/fonts/TuesdayNight-Regular.otf",
  display: "swap",
  variable: "--font-tuesday-night"
})

export const metadata: Metadata = {
  title: "Laponie",
  description: "Laponie"
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`light marker:${montserrat.variable} ${bellefair.variable} ${long_cang.variable}  ${laponie.variable} ${tuesday_night.variable}`}
    >
      <body>
        <Providers>
          <Suspense fallback={<Loading />}>
            <LanguageContextWrapper>
              <Navigation />
              {children}
            </LanguageContextWrapper>
          </Suspense>
        </Providers>
      </body>
    </html>
  )
}
