import React from "react";

type Props = { params: { brandId: string } };

const TreatmentPage = ({ params }: Props) => {
  return <div>Single Treatment Page {params.brandId}</div>;
};

export default TreatmentPage;
