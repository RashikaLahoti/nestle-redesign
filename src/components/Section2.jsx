import React from "react";

const Section2 = () => {
  return (
    <div className="flex items-center justify-center bg-gray-200 w-full h-screen">
      <div className="flex w-[90%] h-[80%] shadow-[0_0_10px_rgb(0,0,0,0.2)] ">
        <div className="relative w-[50%]">
          <div className="absolute top-20 z-3 left-25 w-[220px] h-[200px] rounded-md bg-red-500 -rotate-20 overflow-hidden hover:scale-115 transition-all duration-300 hover:z-10">
            <img
              className="w-full h-full"
              src="https://st3.depositphotos.com/7597710/15881/i/450/depositphotos_158816204-stock-photo-cup-of-nescafe-coffee.jpg"
              alt=""
            />
          </div>
          <div className="absolute z-3 top-18 left-80 w-[220px] h-[200px] rounded-md bg-green-500 rotate-25 overflow-hidden hover:scale-115 transition-all duration-300 hover:z-10">
            <img
              className="w-full h-full"
              src="https://img.freepik.com/premium-photo/chocolate-bar-with-chocolate-pieces-falling-splashing-white-background_844516-5613.jpg"
              alt=""
            />
          </div>
          <div className="absolute z-3 top-65 left-55 w-[220px] h-[200px] rounded-md bg-blue-500 -rotate-6 overflow-hidden hover:scale-115 transition-all duration-300">
            <img
              className="w-full h-full"
              src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/9ec00689747753.5dff1ab2b6787.png"
              alt=""
            />
          </div>
        </div>

        <div className="w-[50%] flex flex-col gap-10 items-center justify-center">
          <h1 className="text-6xl text-amber-800/80 font-bold tracking-tight leading-16 text-center">
            <i>"Nourishing Your Everyday"</i>
          </h1>
          <p className="text-xl font-bold text-amber-700">
            "Health Made Easy. Life Made Delicious"
          </p>
          <span className="text-amber-700/60 w-[90%] leading-6 text-lg/loose">
            <p>
              We craft quick, high-quality, and delicious products—from your
              morning coffee to your family dinner—making healthy choices
              simpler for every meal.
            </p>
            <p>
              <i>
                Today, we continue that journey — blending our timeless recipes
                with a modern touch, bringing people together through
                taste and trust.
              </i>
            </p>
          </span>
          <button className="bg-yellow-700/90 rounded-lg hover:bg-yellow-700/80 hover:scale-105 transition-all duration-300 p-3 px-6 text-white text-lg font-semibold">
            Shop Our 5-Minute Meals
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section2;
