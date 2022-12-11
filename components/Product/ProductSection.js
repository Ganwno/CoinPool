import Image from "next/image";
import React from "react";
import Products from "./Products";
import nextIcon from "../../public/nextproduct.svg";

export default function ProductSection() {
  return (
    <section className="min-h-screen flex justify-around items-center ">
      <Image src={nextIcon} alt="next icon" className=" rotate-180" />
      <Products />
      <Image src={nextIcon} alt="next icon" />
    </section>
  );
}
