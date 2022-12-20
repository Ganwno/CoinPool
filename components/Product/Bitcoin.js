import Spline from "@splinetool/react-spline";

export default function Bitcoin() {
  return (
    <div className="bg-black w-[80%] border-[0.5px] text-white h-[63rem] flex items-center justify-between gap-40 product">
      <div className="ml-16">
        <h1 className="text-8xl font-semibold mb-16 border-b-4 w-64 text-yellow-300">
          Bitcoin
        </h1>
        <p className="text-4xl">
          Bitcoin is a type of digital currency that uses
          <br />
          cryptography for security and is decentralized,
          <br /> meaning that it is not controlled by
          <br /> any single authority or institution.
          <br /> Transactions with bitcoin
        </p>
      </div>
      <div className="h-[62rem] w-[50rem] ">
        <Spline scene="https://prod.spline.design/d3mi0pKlmbMlJtuc/scene.splinecode" />
      </div>
    </div>
  );
}
