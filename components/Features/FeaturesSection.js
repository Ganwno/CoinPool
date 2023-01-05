import React from "react";
import { motion } from "framer-motion";
import Features from "./Features";

export default function FeaturesSection() {
  return (
    <section className="min-h-screen flex justify-center gap-10  sm:gap-32 py-10 sm:py-60 text-white overflow-hidden px-5 sm:px-0">
      <div className="flex flex-col justify-between">
        {" "}
        <Features title={"Buy"} />
        <Features title={"Trade"} />
        <Features title={"Invest"} />
      </div>
      <div className="h-[100rem] border-l-2 w-0"></div>
      <div className="flex flex-col justify-around">
        {" "}
        <Features title={"Sell"} />
        <Features title={"Swap"} />
      </div>
    </section>
  );
}
