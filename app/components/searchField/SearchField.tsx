import React from "react";
import { SearchIcon } from "../icons/searchIcon";
import { Input } from "@nextui-org/react";

type Props = {
  searchTerm: string;
  // eslint-disable-next-line no-unused-vars
  setSearchTerm: (searchTerm: string) => void;
};

const SearchField = ({ searchTerm, setSearchTerm }: Props) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    // console.log(searchTerm);
  };

  return (
    <>
      <Input
        size="lg"
        className="w-[240px]"
        value={searchTerm}
        onChange={(e) => handleSearchChange(e)}
        placeholder="Type to search..."
        startContent={
          <SearchIcon className="tras pointer-events-none mb-0.5 flex-shrink-0 text-black/50 text-slate-400 dark:text-white/90" />
        }
      ></Input>
    </>
  );
};

export default SearchField;
