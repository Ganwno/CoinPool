import Image from "next/image";
import React, { useState } from "react";
import graph from "../../public/graph.svg";
import heart from "../../public/heart.svg";

export default function CryptoCurrencies({
  id,
  name,
  symbol,
  price,
  changePercent24Hr,
  marketCapUsd,
  volumeUsd24Hr,
  maxSupply,
  props,
}) {
  const priceFinal = Math.round(price).toLocaleString("en-US", {
    useGrouping: true,
  });
  const changePercent24HrFinal = Math.round(changePercent24Hr * 100) / 100;
  const marketCapUsdFinal = (
    Math.round(marketCapUsd * 100) / 100
  ).toLocaleString("en-US", { useGrouping: true });
  const volumeUsd24HrFinal = Math.round(volumeUsd24Hr).toLocaleString("en-US", {
    useGrouping: true,
  });
  const maxSupplyFinal = Math.round(maxSupply).toLocaleString("en-US", {
    useGrouping: true,
  });
  const nameFinal = name;
  let color = "text-green-500";
  if (changePercent24Hr < 0) {
    color = "text-red-500";
  }
  return (
    <div className="w-full h-32 flex justify-center items-center border-t-[0.5px] ">
      {" "}
      <ul className="flex justify-between w-[90%]">
        <li>{id}</li>
        <li className=" w-40">
          {nameFinal}{" "}
          <span className="text-xl font-semibold text-gray-500"> {symbol}</span>
        </li>
        <li className=" w-20">${priceFinal}</li>
        <li className={` w-28 ${color} `}>
          {color === "text-red-500"
            ? "▼ " + changePercent24HrFinal
            : "▲ " + changePercent24HrFinal}
          %
        </li>
        <li className=" w-32 overflow-hidden">${marketCapUsdFinal}</li>
        <li className=" w-32 overflow-hidden">${volumeUsd24HrFinal}</li>
        <li className=" w-32 overflow-hidden">{maxSupplyFinal}</li>
        <li className="flex items-center justify-center gap-5">
          <Image src={graph} alt="graph" width={100} />
          <Image src={heart} alt="heart logo" width={20} height={20} />
        </li>
      </ul>
    </div>
  );
}
