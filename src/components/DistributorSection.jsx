import React from "react";

const DistributorSection = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen  bg-amber-100">
      <div className="flex bg-amber-800 w-[80%] h-[75%] rounded-tr-full shadow-lg">
        <div className="flex flex-col items-center justify-center w-[50%] h-full text-white/80 text-center p-6">
          <h1 className="w-[80%] text-5xl font-bold my-6">
            <i>Become A Nestlé Partner</i>
          </h1>
          <p className="text-lg">
            Join the Nestlé family and be part of a global legacy in food and
            beverages. Together, let’s bring quality, trust, and taste to every
            household across India and beyond.
          </p>
          <button className="bg-yellow-500 p-3 px-7 text-lg font-semibold rounded-full mt-10 hover:bg-white hover:border-2 hover:text-yellow-600">
            Connect with us
          </button>
        </div>
        <div className="flex items-center justify-end w-[50%] h-full -rotate-12">
          <div className=" w-[89%] h-[50%]">
            <img
              className="w-full h-full hover:scale-110 transition-all duration-300"
              src="/kitkat.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DistributorSection;
