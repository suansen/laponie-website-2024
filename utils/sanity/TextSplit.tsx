import React from "react";

type Props = { text?: string };

export default function TextSplit({ text }: Props) {
  const textArray = text?.split("\n");

  return (
    <>
      {textArray?.map((textLine, index) => (
        <div className="mb-4" key={index}>
          {textLine}
        </div>
      ))}
    </>
  );
}
