import React from "react";

export default function Features() {
  return (
    <section className="min-h-screen flex justify-center gap-32 py-28 text-white">
      <div className="flex flex-col justify-between">
        {" "}
        <div className="flex flex-col gap-8">
          <h1 className="text-9xl font-semibold">Buy</h1>
          <p className="text-3xl">
            Purchase a coin for your future
            <br /> and own assets that will provide
            <br />
            generational wealth
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="text-9xl font-semibold">Trade</h1>
          <p className="text-3xl">
            Purchase a coin for your future
            <br /> and own assets that will provide
            <br />
            generational wealth
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="text-9xl font-semibold">Invest</h1>
          <p className="text-3xl">
            Purchase a coin for your future
            <br /> and own assets that will provide
            <br />
            generational wealth
          </p>
        </div>
      </div>
      <div className="h-[100rem] border-l-2 w-0"></div>
      <div className="flex flex-col justify-around">
        {" "}
        <div className="flex flex-col gap-8 items-end">
          <h1 className="text-9xl font-semibold">Sell</h1>
          <p className="text-3xl">
            Purchase a coin for your future
            <br /> and own assets that will provide
            <br />
            generational wealth
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="text-9xl font-semibold items-end">Swap</h1>
          <p className="text-3xl">
            Purchase a coin for your future
            <br /> and own assets that will provide
            <br />
            generational wealth
          </p>
        </div>
      </div>
    </section>
  );
}
