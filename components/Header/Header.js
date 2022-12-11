import Image from "next/image";
import React from "react";
import owl from "../../public/owl.svg";
import ether from "../../public/ether.png";

export default function Header() {
  return (
    <header className="text-white flex flex-col items-center gap-28 h-[85rem] overflow-hidden">
      <div className="flex items-center justify-center mt-10 ">
        <Image src={owl} alt="brand logo" />
        <h1 className=" text-5xl font-semibold">COINPOOL</h1>
      </div>
      <div className="flex flex-col items-center gap-10">
        <h1 className="text-8xl text-center font-bold leading-[70px]">
          Unlock the Power
          <br /> of the future with<br></br>{" "}
          <span className="text"> Cryptocurrency.</span>
        </h1>
        <Image src={ether} alt="ethereum" width={400} height={300} />
      </div>
    </header>
  );
}
