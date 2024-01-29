import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="h-[calc(100vh-363px)] p-4 text-center text-sh1 md:p-8">
      <h2 className="">Not Found</h2>
      <p className="font-secondary text-p text-black/50">
        Could not find requested resource
      </p>
      <Link
        className="text-[0.9rem] underline underline-offset-4 transition duration-150 ease-in hover:opacity-50"
        href="/"
      >
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;
