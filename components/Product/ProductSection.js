import Image from "next/image";
import React from "react";
import Ethereum from "./Ethereum";
import nextIcon from "../../public/nextProduct.svg";
import Bitcoin from "./Bitcoin";

export default function ProductSection() {
  return (
    <section className="min-h-screen  flex flex-col justify-around items-center  gap-96 py-40">
      {/* <Image src={nextIcon} alt="next icon" className=" rotate-180" /> */}
      <Ethereum />
      <Bitcoin />
      {/* <Image src={nextIcon} alt="next icon" /> */}
    </section>
  );
}
