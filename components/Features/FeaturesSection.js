import React from "react";
import { motion } from "framer-motion";
import Features from "./Features";

export default function FeaturesSection() {
  return (
    <section className="min-h-screen flex justify-center gap-32 py-60 text-white">
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
