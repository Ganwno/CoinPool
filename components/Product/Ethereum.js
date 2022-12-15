import Image from "next/image";
import React from "react";
import ether from "../../public/ether.png";
import { motion } from "framer-motion";

export default function Ethereum() {
  return (
    <div className="bg-black w-[80%] border-[0.5px] text-white h-[63rem] flex items-center justify-center gap-60 product">
      <div className="">
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
      <Image src={ether} alt="ether" width={350} className="h-[550px]" />
    </div>
  );
}
