import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  NavbarItem,
} from "@nextui-org/react";
import React, { useState } from "react";

import { ChevronDown } from "./Icons.";
import { LocaleString } from "@/typings";
// import Link from "next/link";

type Props = {
  item: {
    _key: string;
    title: LocaleString;
    _type: "navBrands";
    brand: { slug: { current: string; _type: string }; name: string }[];
  };
  languageSelected: string;
};

const NavigationBrand = ({ languageSelected, item }: Props) => {
  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <Dropdown
      onOpenChange={() => setDropdownOpen(!dropdownOpen)}
      className=" bg-tw-primary-light/80 backdrop-blur-md"
    >
      <NavbarItem>
        <DropdownTrigger>
          <Button
            disableRipple
            className="text-md bg-transparent p-0 uppercase data-[hover=true]:bg-transparent"
            endContent={
              <div
                className={`${
                  dropdownOpen ? "-rotate-180" : null
                }  transition-transform duration-75 ease-in`}
              >
                {icons.chevron}
              </div>
            }
            radius="sm"
            variant="light"
          >
            {languageSelected === "en" ? item.title.en : item.title.cn}
          </Button>
        </DropdownTrigger>
      </NavbarItem>
      <DropdownMenu
        variant="flat"
        color="primary"
        aria-label="Brands"
        className="w-[340px] p-4"
        itemClasses={{
          base: "gap-4",
        }}
      >
        {item.brand.map((brandItem) => (
          <DropdownItem
            // showDivider={true}
            href={`/brands/${brandItem.slug.current}`}
            key={brandItem.name}
            // description="ACME scales apps to meet user demand, automagically, based on load."
            // startContent={icons.scale}
            className="group text-center"
          >
            <div className="h-full w-full py-4  uppercase group-hover:text-black/80">
              {brandItem.name}
            </div>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default NavigationBrand;
