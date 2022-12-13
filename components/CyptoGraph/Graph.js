import React, { useEffect, useState } from "react";
import CryptoCurrencies from "./CryptoCurrencies";

export default function Graph() {
  const [list, setList] = useState([]);
  const obj = [
    {
      id: 1,
      name: "Bitcoin",
      symbol: "btc",
      price: "17,785",
      changePercent24Hr: "0.24",
      marketCapUsd: "3305530",
      volumeUsd24Hr: "625252",
      maxSupply: "25254",
    },
    {
      id: 2,
      name: "Bitcoin",
      symbol: "btc",
      price: "17,785",
      changePercent24Hr: "0.24",
      marketCapUsd: "3305530",
      volumeUsd24Hr: "625252",
      maxSupply: "25254",
    },
    {
      id: 3,
      name: "Bitcoin",
      symbol: "btc",
      price: "17,785",
      changePercent24Hr: "0.24",
      marketCapUsd: "3305530",
      volumeUsd24Hr: "625252",
      maxSupply: "25254",
    },
    {
      id: 4,
      name: "Bitcoin",
      symbol: "btc",
      price: "17,785",
      changePercent24Hr: "0.24",
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

  return (
    <div className=" h-3/4 w-[90%] flex flex-col items-center text-2xl">
      <div className="w-full flex justify-center items-center ">
        <ul className="flex justify-between w-[90%] mb-10">
          <li>#</li>
          <li>Name</li>
          <li>Price</li>
          <li>24%</li>
          <li>MarketCap</li>
          <li>Volume(24h)</li>
          <li>MaxSupply</li>
          <li>Last 7 Days</li>
        </ul>
      </div>

      {list.map((result, index) => {
        if (index < 7) {
          return (
            <CryptoCurrencies
              key={result.id}
              id={index + 1}
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
