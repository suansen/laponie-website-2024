import React from "react";

type Props = {};

const SearchFieldModal = (props: Props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    // console.log(searchTerm);
  };
  return <div>SearchFieldModal</div>;
};

export default SearchFieldModal;

// *[(productName.en match $search || productName.cn match $search || categoryName.en match $search  || categoryName.cn match $search) && (_type == "product" || type == "treatment")]{
//   productName,
//   category->{categoryName},
//   slug
// }
