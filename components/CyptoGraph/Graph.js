import React, { useEffect, useState } from "react";
import CryptoCurrencies from "./CryptoCurrencies";

export default function Graph() {
  const [list, setList] = useState([]);
  const obj = [
    {
      id: 1,
      name: "Bitcoin",
      symbol: "btc",
      priceUsd: 17785,
      changePercent24Hr: -0.24,
      marketCapUsd: "3305530",
      volumeUsd24Hr: "625252",
      maxSupply: "25254",
    },
    {
      id: 2,
      name: "Bitcoin",
      symbol: "btc",
      priceUsd: 17785,
      changePercent24Hr: 0.24,
      marketCapUsd: "3305530",
      volumeUsd24Hr: "625252",
      maxSupply: "25254",
    },
    {
      id: 3,
      name: "Bitcoin",
      symbol: "btc",
      priceUsd: 17785,
      changePercent24Hr: 0.24,
      marketCapUsd: "3305530",
      volumeUsd24Hr: "625252",
      maxSupply: "25254",
    },
    {
      id: 4,
      name: "Bitcoin",
      symbol: "btc",
      priceUsd: 17785,
      changePercent24Hr: 0.24,
      marketCapUsd: "3305530",
      volumeUsd24Hr: "625252",
      maxSupply: "25254",
    },
  ];
  const fetchData = async () => {
    const response = await fetch("https://api.coincap.io/v2/assets");
    const data = await response.json();
    const cryptoList = data.data;
    setList(cryptoList);
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(list);

  return (
    <div className=" h-3/4 w-[90%] flex flex-col items-center text-2xl">
      <div className="w-full flex justify-center items-center ">
        <ul className="flex justify-between w-[90%] mb-10 text-xl text-[#D7D7D7]">
          <li>#</li>
          <li className="w-16">Name</li>
          <li className="w-16">Price</li>
          <li className="w-16">24%</li>
          <li className="w-28 hidden sm:block">MarketCap</li>
          <li className="w-32 hidden sm:block">Volume(24h)</li>
          <li className="w-28 hidden sm:block">MaxSupply</li>
          <li className="w-28 hidden sm:block">Last 7 Days</li>
        </ul>
      </div>

      {list.map((result, index) => {
        if (index < 7) {
          return (
            <CryptoCurrencies
              key={result.id}
              id={index + 1}
              symbol={result.symbol}
              name={result.name}
              price={result.priceUsd}
              changePercent24Hr={result.changePercent24Hr}
              marketCapUsd={result.marketCapUsd}
              volumeUsd24Hr={result.volumeUsd24Hr}
              maxSupply={result.maxSupply}
            />
          );
        }
      })}
    </div>
  );
}
