import Image from "next/image";
import React from "react";
import graph from "../../public/graph.svg";

export default function CryptoCurrencies(props) {
  return (
    <div className="w-full h-32 flex justify-center items-center border-y-[0.5px]">
      {" "}
      <ul className="flex justify-between w-[90%]">
        <li>{props.id}</li>
        <li>{props.name}</li>
        <li>{props.price}</li>
        <li>{props.changePercent24Hr}%</li>
        <li>{props.marketCapUsd}</li>
        <li>{props.volumeUsd24Hr}</li>
        <li>{props.maxSupply}</li>
        <li>
          <Image src={graph} alt="graph" width={100} />
        </li>
      </ul>
    </div>
  );
}
