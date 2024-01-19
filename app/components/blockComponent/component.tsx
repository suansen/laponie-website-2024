import { PortableTextComponents } from "@portabletext/react";

export const components: PortableTextComponents = {
  marks: {
    // Ex. 1: custom renderer for the em / italics decorator
    strong: ({ children }) => (
      <strong className=" font-semibold text-tw-primary-dark">
        {children}
      </strong>
    ),
  },
  block: {
    // Ex. 1: customizing common block types
    h1: ({ children }) => (
      <h1 className="font-sans text-3xl md:text-4xl">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="font-sans text-2xl md:text-3xl">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-sans text-lg md:text-2xl">{children}</h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-purple-500">{children}</blockquote>
    ),
  },
  listItem: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => <li className="ml-8 list-disc">{children}</li>,

    // Ex. 2: rendering custom list items
    checkmarks: ({ children }) => <li>✅ {children}</li>,
  },
};
