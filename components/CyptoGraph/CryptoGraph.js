/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Graph from "./Graph";

export default function CryptoGraph() {
  return (
    <section className="min-h-screen h-[90rem] text-white flex items-center justify-center pb-20 font-Inter">
      <div className="w-full flex flex-col items-center gap-24">
        <h1 className="text-5xl font-semibold text-[#D7D7D7] self-start sm:ml-32 text-center">
          Today's Cryptocurrency Prices by Market Cap
        </h1>
        <Graph />
      </div>
    </section>
  );
}
