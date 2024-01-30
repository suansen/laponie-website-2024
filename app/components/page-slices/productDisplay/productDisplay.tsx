"use client";

import { Product } from "@/typings";
import { sanityClient } from "@/utils/sanity/client";
import { groq } from "next-sanity";
import React, { Fragment, useEffect, useState } from "react";
import { useParams, useSearchParams, useRouter } from "next/navigation";
import ProductCard from "../../carousel/ProductCard";

import {
  Autocomplete,
  AutocompleteItem,
  Pagination,
  // PaginationItem,
  // PaginationCursor,
} from "@nextui-org/react";
import SearchField from "../../searchField/SearchField";

type Props = {
  // products: Product[];
  languageSelected: string;
  productCategories: {
    categoryName: { _type: "localeString"; en: string; cn?: string };
    description: string;
  }[];
};

const per_page = 12;

const ProductDisplay = ({ languageSelected, productCategories }: Props) => {
  // Ref

  // Categories
  const categories = [
    { label: "All", value: "all", description: "All Products" },
  ];
  categories.push(
    ...productCategories.map((category) => ({
      label: category?.categoryName?.en || "All",
      value: category?.categoryName?.en || "all",
      description: category?.description,
    })),
  );

  // Navigation
  const params = useParams<{ brandId: string }>();
  const searchParams = useSearchParams();
  const router = useRouter();

  // States
  const [pagePosition, setPagePosition] = useState({
    page: searchParams.get("page") === "null" ? "1" : searchParams.get("page"),
    start: 0,
    end: 0,
  });
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("category") || categories[0].value,
  );
  const [searchTerm, setSearchTerm] = useState("");

  const fetchData = async () => {
    let queries = { products: "" };

    if (
      searchParams.get("category") === null ||
      searchParams.get("category") === "null" ||
      searchParams.get("category") === "all"
    ) {
      queries = {
        products: groq`*[_type == "product" && !(_id in path("drafts.**"))]{
      productName,
      productImage,
      brand -> {name, slug},
      category -> {categoryName},
      ingredients[] ->{name},
      slug,
      description
    }[brand.slug.current == $slug && (productName.en match $search || productName.cn match $search || category.categoryName.en match $search || category.categoryName.cn match $search )] | order(category.categoryName.en asc) `,
      };
    } else {
      queries = {
        products: groq`*[_type == "product" && !(_id in path("drafts.**"))]{
      productName,
      productImage,
      brand -> {name, slug},
      category -> {categoryName},
      ingredients[] ->{name},
      slug,
      description
    }[brand.slug.current == $slug && category.categoryName.en == $category && (productName.en match $search || productName.cn match $search || category.categoryName.en match $search || category.categoryName.cn match $search )] | order(category.categoryName.en asc) `,
      };
    }

    const data = await sanityClient.fetch<Product[]>(
      queries.products,
      {
        slug: params.brandId,
        category: searchParams.get("category"),
        search: `*${searchParams.get("search")}*`,
      },
      { next: { revalidate: 30 } },
    );

    setProducts(data);
  };

  useEffect(() => {
    // try {
    fetchData().catch(console.error);

    if (!selectedCategory) {
      router.push(
        `/brands/${params.brandId}/products?page=1&category=all&search=**`,
      );
      setPagePosition((prev) => ({
        ...prev,
        page: searchParams.get("page"),
      }));
    }

    setPagePosition((prev) => ({
      ...prev,
      page: searchParams.get("page"),
    }));
    // } catch (error) {
    // console.log("error", error);
    // }
  }, [searchParams]);

  useEffect(() => {
    if (!pagePosition.page) {
      router.push(
        `/brands/${params.brandId}/products?page=1&category=all&search=**`,
      );
      setPagePosition((prev) => ({
        ...prev,
        page: searchParams.get("page"),
      }));
    }

    setPagePosition((prev) => ({
      ...prev,
      page: searchParams.get("page"),
    }));
  }, [searchParams.get("page")]);

  useEffect(() => {
    setPagePosition((prev) => ({
      ...prev,
      start: (Number(pagePosition.page) - 1) * per_page,
      end: (Number(pagePosition.page) - 1) * per_page + per_page,
    }));
  }, [pagePosition.page]);

  return (
    <section className="mx-auto  max-w-7xl px-4 py-2 md:px-8 md:py-4">
      <div className="flex w-full flex-col-reverse justify-between border-b-1 border-tw-primary pb-4 md:flex-row">
        {/* Filter */}
        <div className="flex flex-col gap-x-4 md:flex-row md:items-center">
          <div>Filter By:</div>
          <div className="flex items-center">
            <Autocomplete
              aria-label="Category"
              // color="primary"
              key={"primary"}
              color="default"
              onSelectionChange={(key: React.Key) => {
                router.replace(
                  `/brands/${params.brandId}/products?page=1&category=${
                    key || "all"
                  }&search=*${searchTerm}*`,
                );
                setPagePosition((prev) => ({ ...prev, page: "1" }));
                setSelectedCategory(key?.toString() || "all");
              }}
              defaultItems={categories}
              placeholder="Select a category"
              className="max-w-xs"
              defaultSelectedKey={"all"}
            >
              {categories.map((item) => (
                <AutocompleteItem key={`${item.value}`}>
                  {item.label}
                </AutocompleteItem>
              ))}
            </Autocomplete>
          </div>
          <div>{products.length} Products found.</div>
        </div>
        {/* Search */}
        <div className="flex items-center justify-center">
          <SearchField
            category={selectedCategory}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            brandId={params.brandId}
            router={router}
          />
        </div>
      </div>
      {/* Products */}
      {products && products.length > 0 ? (
        <div className="mx-auto grid grid-cols-1 gap-4  pt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products
            .slice(pagePosition.start, pagePosition.end)
            .map((product, index) => (
              <Fragment key={`${product.productName?.en}${index}`}>
                <>
                  <ProductCard
                    item={product}
                    languageSelected={languageSelected}
                  />
                </>
              </Fragment>
            ))}
        </div>
      ) : (
        <div>
          <p className="">No results for products.</p>
          <p className=" text-black/50">Try searching for something else.</p>
        </div>
      )}

      <div>
        {Math.ceil(products.length / per_page) <= 1 ? null : (
          <Pagination
            showControls
            total={Math.ceil(products.length / per_page)}
            initialPage={1}
            onChange={(page) => {
              router.replace(
                `/brands/${params.brandId}/products?page=${page}&category=${selectedCategory}&search=*${searchTerm}*`,
              );
            }}
          />
        )}
      </div>
    </section>
  );
};

export default ProductDisplay;
