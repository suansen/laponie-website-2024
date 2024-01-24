"use client";

import React from "react";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";

type Props = {
  params: {
    brandId: string;
    productId?: string;
    treatmentId?: string;
  };
  type: "products" | "treatments";
};

const BreadcrumbsComponent = ({
  params: { brandId, productId, treatmentId },
  type,
}: Props) => {
  return (
    <div className=" z-10 w-full max-w-5xl px-6 text-left capitalize">
      <Breadcrumbs className="">
        <BreadcrumbItem href="/">
          <div className="text-[0.75rem] md:text-p">Home</div>
        </BreadcrumbItem>
        <BreadcrumbItem href={`/brands/${brandId}`}>
          <div className="text-[0.75rem] md:text-p">{brandId}</div>
        </BreadcrumbItem>
        {type === "products" ? (
          <BreadcrumbItem href={`/brands/${brandId}/products`}>
            <div className="text-[0.75rem] md:text-p">Products</div>
          </BreadcrumbItem>
        ) : (
          <BreadcrumbItem href={`/brands/${brandId}/treatments`}>
            <div className="text-[0.75rem] md:text-p">Treatments</div>
          </BreadcrumbItem>
        )}

        {treatmentId && (
          <BreadcrumbItem href={`/brands/${brandId}/treatments/${treatmentId}`}>
            <div className="text-[0.75rem] md:text-p">{treatmentId}</div>
          </BreadcrumbItem>
        )}

        {productId && (
          <BreadcrumbItem href={`/brands/${brandId}/products/${productId}`}>
            <div className="text-[0.75rem] md:text-p">{productId}</div>
          </BreadcrumbItem>
        )}
      </Breadcrumbs>
    </div>
  );
};

export default BreadcrumbsComponent;
