import Image from "next/image";
import React from "react";
import owl from "../../public/owl.svg";

export default function Footer() {
  return (
    <footer className="border-t-[0.5px] flex flex-col justify-center gap-20 items-center h-[32rem] pb-40">
      <div className="flex items-center justify-center mt-10 ">
        <Image src={owl} alt="brand logo" />
        <h1 className=" text-4xl font-semibold text-white">COINPOOL</h1>
      </div>{" "}
      <div className="flex text-2xl gap-10 text-gray-400">
        <h1>Terms of Use</h1>
        <h1>Privacy Policy</h1>
        <h1>Contact</h1>
      </div>
      <p className="text-center text-xl text-gray-400">
        CoinPool Inc. is a financial technology company and is not a bank.
        Banking services provided by Blue Ridge Bank, N.A.; Member FDIC. The
        Capital Software &<br /> Services Inc. Visa® Debit Card is issued by
        Blue Ridge Bank, N.A. pursuant to a license from Visa U.S.A. Inc. and
        may be used everywhere Visa debit cards are
        <br /> accepted.
      </p>
    </footer>
  );
}
