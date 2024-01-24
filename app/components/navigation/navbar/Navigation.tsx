"use client";
import React from "react";
import { usePathname } from "next/navigation";

import LanguageToggler from "./LanguageToggler";
import LaponieLogo from "./LaponieLogo";
import { useLanguageContext } from "@/app/context/LanguageContext";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { LocaleString } from "@/typings";
import NavigationBrand from "./NavigationBrand";

type navItem = {
  _key: string;
  title: LocaleString;
  _type: "navItem";
  link: string;
};

type navBrand = {
  _key: string;
  title: LocaleString;
  _type: "navBrands";
  brand: { slug: { current: string; _type: string }; name: string }[];
};

type Props = {
  navItems: navBrand[] | navItem[];
};

function Navigation({ navItems }: Props) {
  const pathname = usePathname();

  const { languageSelected, setLanguageSelected } = useLanguageContext();
  // const [isOpen, setIsOpen] = useState(false)

  return (
    <Navbar
      maxWidth="xl"
      className={`w-full bg-tw-primary/80`}
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "hover:text-red-500",
          "text-red-500",
          "data-[active=true]:text-red-500",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[4px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-tw-primary-dark",
          "data-[active=true]:after:rounded-r-xl",
          "data-[active=true]:after:rounded-l-xl",
        ],
      }}
    >
      <NavbarContent className="md:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="pr-3 md:hidden" justify="center">
        <NavbarBrand>
          <LaponieLogo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="md:hidden" justify="end"></NavbarContent>

      <NavbarContent
        className="pr-3 md:hidden"
        justify="center"
      ></NavbarContent>

      <NavbarContent className="hidden gap-4 md:flex" justify="end">
        <NavbarBrand>
          <LaponieLogo />
        </NavbarBrand>
        {navItems.map((item, index) => (
          <React.Fragment key={index}>
            {item._type === "navItem" ? (
              <NavbarItem isActive={pathname === item.link}>
                <Link
                  className="font-normal uppercase"
                  color="foreground"
                  href={item.link}
                >
                  {languageSelected === "en" ? item.title.en : item.title.cn}
                </Link>
              </NavbarItem>
            ) : (
              <>
                <NavigationBrand
                  languageSelected={languageSelected}
                  item={item}
                />
              </>
            )}
          </React.Fragment>
        ))}
        <NavbarItem className="hidden sm:flex">
          <LanguageToggler
            languageSelected={languageSelected}
            setLanguageSelected={setLanguageSelected}
          />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="pt-8r bg-tw-primary/80">
        {navItems.map((item, index) => (
          <React.Fragment key={index}>
            {item._type === "navItem" ? (
              <NavbarMenuItem key={`${item.title.en}-${index}`}>
                <Link
                  className="w-full  uppercase text-tw-black"
                  href={item.link}
                  size="lg"
                >
                  {languageSelected === "en"
                    ? item.title.en
                    : item.title.cn || item.title.en}
                </Link>
              </NavbarMenuItem>
            ) : (
              <div>
                <div className="uppercase underline underline-offset-4">
                  {languageSelected === "en"
                    ? item.title.en
                    : item.title.cn || item.title.en}
                </div>
                <div className=" space-y-2 py-2">
                  {item.brand.map((brandItem, index) => (
                    <NavbarMenuItem
                      key={`${brandItem?.name}${index}`}
                      className="pl-4"
                    >
                      <Link
                        href={`/brands/${brandItem.slug.current}`}
                        className="uppercase text-tw-black/80"
                      >
                        {brandItem?.name}
                      </Link>
                    </NavbarMenuItem>
                  ))}
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default Navigation;
