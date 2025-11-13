import React from "react";

const HighlightsBar = () => {
  const highlights = [
    {
      icon: "🥛",
      title: "Pure Dairy Goodness",
    },
    {
      icon: "🍫",
      title: "Irresistible Chocolates",
    },
    {
      icon: "☕",
      title: "Rich Coffee Blends",
    },
    {
      icon: "🌱",
      title: "Sustainable Sourcing",
    },
    {
      icon: "❤",
      title: "Loved by Millions",
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Connecting Generations",
    },
    {
      icon: "🍪",
      title: "Crunchy & Creamy Treats",
    },
    {
      icon: "🥣",
      title: "Nutritious Breakfast Options",
    },
    {
      icon: "🌏",
      title: "Global Quality Standards",
    },
    {
      icon: "🤝",
      title: "Trusted by Families",
    },
  ];
  return (
    <div className="bg-linear-to-b from-amber-800/70 to-amber-800/20 py-8 shadow-lg">
      <div className="max-w-8xl mx-auto px-4 overflow-x-auto scrollbar-hide">
        <div className="flex gap-8 min-w-max animate-scroll">
          {highlights.map((elem, i) => {
            return (
              <div
                key={i}
                className="flex items-center gap-3 px-5 py-3 shrink-0"
              >
                <div className="text-4xl">{elem.icon}</div>
                <p className="whitespace-nowrap font-bold text-4xl text-white/70 font-serif">
                  {elem.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HighlightsBar;
