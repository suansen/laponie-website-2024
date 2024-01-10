import React from "react";

type Props = { params: { productId: string } };

const ProductDetails = ({ params }: Props) => {
  return <div>{params.productId}</div>;
};

export default ProductDetails;
