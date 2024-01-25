"use client";

import React from "react";
import { SearchIcon } from "../icons/searchIcon";
import { Button, Input } from "@nextui-org/react";
// import { useRouter } from "next/router";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

type Props = {
  searchTerm: string;
  category: string;
  brandId: string;
  router: AppRouterInstance;
  // eslint-disable-next-line no-unused-vars
  setSearchTerm: (searchTerm: string) => void;
};

const SearchField = ({
  searchTerm,
  setSearchTerm,
  brandId,
  router,
  category,
}: Props) => {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  // const [searchTerm, setSearchTerm] = useState("")

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    // router.replace()
    console.log(searchTerm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      router.replace(
        `/brands/${brandId}/products?page=1&category=${
          category || null
        }&search=*${searchTerm}*`,
      );
      console.log("form submitted");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          size="lg"
          className="w-[240px]"
          value={searchTerm}
          onChange={(e) => handleSearchChange(e)}
          placeholder="Type to search..."
          endContent={
            <Button
              type="submit"
              className="w-4 min-w-[3rem] bg-tw-primary px-0 shadow-sm"
              size="lg"
            >
              <SearchIcon className=" pointer-events-none mb-0.5 flex-shrink-0 text-black/50 text-slate-400 dark:text-white/90" />
            </Button>
          }
        ></Input>
      </form>
    </>
  );
};

export default SearchField;
