import React from "react";

const BottomSlideBar = () => {
  const highlights = [
    "🚛Free Shipping on orders over Rs.1000!",
    "Shipping is handled by logistics partner- delivery timeline may vary due to location, weather, and religional condition.",
    "T&C apply.",
    "🚛Free Shipping on orders over Rs.1000!",
    "Shipping is handled by logistics partner- delivery timeline may vary due to location, weather, and religional condition.",
    "T&C apply.",
  ];
  return (
    <div className="fixed bottom-0 bg-yellow-400 shadow-lg">
      <div className="max-w-8xl mx-auto px-4 overflow-x-auto scrollbar-hide">
        <div className="flex gap-8 min-w-max animate-scroll">
          {highlights.map((elem, i) => {
            return (
              <div
                key={i}
                className="flex items-center gap-3 px-5 py-3 shrink-0"
              >
                <p className="whitespace-nowrap font-bold text-white">{elem}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BottomSlideBar;
