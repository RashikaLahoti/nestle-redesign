import React from "react";

const HeroSection = () => {
  return (
    <div className="h-screen relative bg-amber-50">
      <div className="max-w-7xl mx-auto h-full grid grid-cols-1 lg:grid-cols-12 items-center px-4 sm:px-6 lg:px-8">
        <div className="lg:col-span-7 p-8 md:p-12 z-10">
          <p className="text-xl md:text-2xl text-red-800 font-semibold font-serif italic ">
            Our Legacy
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold text-amber-900 leading-20 mb-4">
            "A Taste That Connects Generations"
          </h1>

          <p className="text-lg text-amber-700 max-w-xl mb-8">
            For over a century, Nestlé has been a part of family stories—from
            morning coffees to sweet celebrations. We blend timeless recipes
            with a modern touch, bringing people together through taste and
            trust.
          </p>

          <button className="inline-block px-10 py-4 bg-amber-800 text-white text-xl font-semibold rounded-full shadow-lg hover:bg-amber-700 hover:scale-105 transition duration-300">
            Discover Our Journey
          </button>
        </div>

        <div className="hidden lg:col-span-5 lg:flex h-full relative items-center justify-center overflow-hidden">
          <div className="absolute w-full h-full bg-amber-100/50 rounded-tl-[300px] rounded-br-[300px] transform -rotate-6"></div>

          <img
            src="/nescafe.png"
            alt="Nescafé Product"
            className="move-to-left absolute z-5 w-68 h-auto object-cover transform rotate-12 top-10 right-6 rounded-lg"
          />
          <img
            src="/kitkatcover.png"
            alt="KitKat Product"
            className="move-to-left absolute w-64 z-1 h-auto object-cover transform -rotate-6 bottom-10 left-24 rounded-lg"
          />
          <img
            src="https://www.nestleprofessional.in/sites/default/files/2022-04/Maggi%20Masala%20Twist%20CUPPA%20Front.png"
            alt="maggie img"
            className="move-to-right absolute w-78 h-auto object-cover transform -rotate-6 top-16 left-12 rounded-lg"
          />
          <img
            src="/cerelac.png"
            alt="cerelac img"
            className="move-to-left absolute z-6 w-60 h-auto object-cover transform rotate-16 top-65 left-70 rounded-lg"
          />
          <img
            src="/milkpowder.png"
            alt="toll house img"
            className="move-to-right absolute w-70 h-auto object-cover transform -rotate-15 bottom-45 left-10 rounded-lg"
          />
          <img
            src="\milkybar.png"
            alt="milkybar img"
            className="absolute z-2 w-88 h-auto object-cover transform -rotate-45 bottom-63 left-23 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
