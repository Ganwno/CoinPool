import Image from "next/image";
import React from "react";
import owl from "../../public/owl.svg";
import header from "../../public/header.png";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="text-white flex flex-col items-center gap-20 h-[85rem] overflow-hidden ">
      <div className="flex items-center justify-center mt-10 ">
        <Image src={owl} alt="brand logo" />
        <h1 className=" text-4xl font-semibold">COINPOOL</h1>
      </div>
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-8xl text-center font-bold leading-[70px]">
          Unlock the Power
          <br /> of the future with
          <br /> <span className="text"> Cryptocurrency.</span>
        </h1>
        <Image src={header} alt="ethereum" width={1500} height={500} />
      </div>
    </header>
  );
}
