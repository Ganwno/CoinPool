import React from "react";
import Image from "next/image";
import owl from "../../public/owl.svg";
import heart from "../../public/heart.svg";
import { motion } from "framer-motion";

export default function Navigation() {
  return (
    <div className="bg-Navigation w-[90%] min-h-[8%] rounded-xl fixed bottom-5 right-[5%] flex items-center px-10">
      <nav className="flex justify-between items-center w-full">
        <div className="flex items-center">
          <Image
            src={owl}
            alt="brand logo"
            className="border-r-2 mr-2 border-stone-500"
          />
          <Image src={heart} alt="heart logo" />
        </div>
        <div className="flex items-center">
          <ul className="hidden text-white text-2xl gap-10 sm:block">
            <motion.li whileHover={{ translateY: -4 }}>Home</motion.li>
            <motion.li whileHover={{ translateY: -4 }}>Product</motion.li>
            <motion.li whileHover={{ translateY: -4 }}>Features</motion.li>
            <motion.li whileHover={{ translateY: -4 }}>Graph</motion.li>
          </ul>
        </div>
        <div>
          <button className="bg-white w-40 h-16 rounded-lg text-2xl font-semibold">
            Get Started
          </button>
        </div>
      </nav>
    </div>
  );
}
