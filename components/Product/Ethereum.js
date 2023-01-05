import React from "react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

export default function Ethereum() {
  return (
    <div className="bg-black w-[80%] border-[0.5px] text-white h-[80rem] sm:h-[63rem] flex items-center justify-center sm:justify-between gap-0 sm:gap-60 product flex-col sm:flex-row overflow-hidden">
      <div className=" ml-0 sm:ml-20">
        <h1 className="sm:text-8xl text-5xl font-semibold mb-16 border-b-4 w-64 text-ether">
          Ethereum
        </h1>
        <p className="text-4xl hidden sm:block">
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
