import Spline from "@splinetool/react-spline";

export default function Bitcoin() {
  return (
    <div className="bg-black sm:w-4/5 w-11/12 sm:border-[0.5px] text-white sm:h-[63rem] flex items-center justify-center sm:justify-between gap-5 sm:gap-40 product flex-col sm:flex-row overflow-hidden">
      <div className="ml-16">
        <h1 className="text-8xl font-semibold mb-16 border-b-4 w-64 text-yellow-300">
          Bitcoin
        </h1>
        <p className="text-4xl hidden sm:block">
          Bitcoin is a type of digital currency that uses
          <br />
          cryptography for security and is decentralized,
          <br /> meaning that it is not controlled by
          <br /> any single authority or institution.
          <br /> Transactions with bitcoin
        </p>
      </div>
      <div className="sm:h-[62rem] sm:w-[50rem]  ">
        <Spline scene="https://prod.spline.design/d3mi0pKlmbMlJtuc/scene.splinecode" />
      </div>
    </div>
  );
}
