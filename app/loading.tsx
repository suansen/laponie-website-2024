"use client";
import React from "react";

function Loading() {
  return (
    <section className="flex h-[calc(100vh-80px)] w-[calc(100vw-8px)] items-center justify-center">
      <div className="flex flex-col items-center justify-center space-y-4 overflow-visible">
        {/* <div>
          <Spinner size="lg" />
        </div> */}
        <svg viewBox="0 0 800 400" className="w-[20rem]">
          <text
            x="50%"
            y="50%"
            dy=".32em"
            textAnchor="middle"
            style={{ color: "transparent" }}
            className="animate-stroke-text stroke-2
             font-laponie text-[10rem]"
          >
            Laponie
          </text>
        </svg>
        {/* <div className="text-black/80 text-xl uppercase mx-auto animate-pulse">
          Loading...
        </div> */}
      </div>
    </section>
  );
}

export default Loading;
