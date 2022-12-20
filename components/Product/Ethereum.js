import React from "react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

export default function Ethereum() {
  return (
    <div className="bg-black w-[80%] border-[0.5px] text-white h-[63rem] flex items-center justify-between gap-60 product">
      <div className="ml-20">
        <h1 className="text-8xl font-semibold mb-16 border-b-4 w-64 text-ether">
          Ethereum
        </h1>
        <p className="text-4xl">
          Ethereum is a decentralized platform
          <br /> that runs smart contracts: applications
          <br /> that run exactly as programmed
          <br /> without any possibility of downtime,
          <br /> censorship, fraud or third-party
          <br /> interference.
        </p>
      </div>
      <div className="h-[62rem] w-[50rem] ">
        <Spline scene="https://prod.spline.design/UX5vApJK6vBk771T/scene.splinecode" />
      </div>
    </div>
  );
}
