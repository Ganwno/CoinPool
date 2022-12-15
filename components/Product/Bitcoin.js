import Image from "next/image";
import React from "react";
import BitcoinImg from "../../public/bitcoin.png";
import { motion } from "framer-motion";

export default function Bitcoin() {
  return (
    <div className="bg-black w-[80%] border-[0.5px] text-white h-[63rem] flex items-center justify-center gap-40 product">
      <div className="">
        <h1 className="text-8xl font-semibold mb-16 border-b-4 w-64 text-orange-500">
          Bitcoin
        </h1>
        <p className="text-4xl">
          Bitcoin is a type of digital currency that uses
          <br />
          cryptography for security and is decentralized,
          <br /> meaning that it is not controlled by
          <br /> any single authority or institution.
          <br /> Transactions with bitcoin
        </p>
      </div>
      <Image src={BitcoinImg} alt="Bitcoin" width={450} className="h-[450px]" />
    </div>
  );
}
