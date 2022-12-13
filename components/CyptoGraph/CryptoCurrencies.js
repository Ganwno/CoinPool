import Image from "next/image";
import React from "react";
import graph from "../../public/graph.svg";

export default function CryptoCurrencies(props) {
  return (
    <div className="w-full h-32 flex justify-center items-center border-y-[0.5px]">
      {" "}
      <ul className="flex justify-between w-[90%]">
        <li className="">{props.id}</li>
        <li className=" w-32">{props.name}</li>
        <li className=" w-32">${Math.round(props.price)}</li>
        <li className=" w-32">{Math.round(props.changePercent24Hr)}%</li>
        <li className=" w-32">${Math.round(props.marketCapUsd)}</li>
        <li className=" w-32">${Math.round(props.volumeUsd24Hr)}</li>
        <li className=" w-32">{Math.round(props.maxSupply)}</li>
        <li>
          <Image src={graph} alt="graph" width={100} />
        </li>
      </ul>
    </div>
  );
}
