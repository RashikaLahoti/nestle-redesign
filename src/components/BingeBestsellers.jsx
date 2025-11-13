import React from "react";

const BingeBestsellers = () => {
  const bestsellers = [
    {
      name: "KitKat",
      image: "/images/kitkat.png",
      tagline: "Have a break, have a KitKat.",
    },
    {
      name: "Nescafé Classic",
      image: "/images/nescafe.png",
      tagline: "Bold aroma, smooth taste.",
    },
    {
      name: "Milkybar",
      image: "/images/milkybar.png",
      tagline: "White chocolate bliss.",
    },
    {
      name: "Munch",
      image: "/images/munch.png",
      tagline: "Crunchy wafer delight.",
    },
    {
      name: "Nestea",
      image: "/images/nestea.png",
      tagline: "Refreshing iced tea for every mood.",
    },
    {
      name: "Everyday Milk Powder",
      image: "/images/everyday.png",
      tagline: "Rich, creamy, and nutritious.",
    },
  ];
  return (
    <div className="flex w-full h-[200px] items-center pt-28 pb-20 bg-amber-100">
      <div className="w-[50%]">
        <h1 className="text-5xl font-extrabold text-center transition-all duration-300 hover:scale-105 text-amber-900 w-[85%] leading-14">
          <i>
            Binge on Our <br /> BestSellers!🍫
          </i>
        </h1>
      </div>
      <div className="flex flex-col justify-center w-[40%] gap-6">
        <p className="text-lg font-sans font-semibold text-gray-400/90">
          From classic chocolates to refreshing drinks, Nestlé brings you the
          perfect treats for every mood — loved by millions around the world.
        </p>

        <button className="w-[30%]  py-2 px-8 rounded-full bg-red-500 text-white text-lg font-semibold hover:bg-white hover:text-red-500 hover:border transition-all">
          View More
        </button>
      </div>
    </div>
  );
};

export default BingeBestsellers;
