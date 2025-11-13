import { ArrowRight, ArrowLeft } from "lucide-react";
import React, { useRef } from "react";

const FeaturedStories = () => {
  const NESTLE_STORIES = [
    {
      id: 1,
      title: "The Best 5-Minute Meals for Busy Families",
      tag: "Recipes",
      description:
        "Learn how to use Maggi and other kitchen staples for fast dinners.",
      image:
        "https://thumbs.dreamstime.com/b/bowl-filled-steaming-ramen-noodles-colorful-vegetables-ready-to-be-eaten-using-chopsticks-topped-vibrant-veggies-317441764.jpg",
      link: "#",
    },
    {
      id: 2,
      title: "Planting the Future: Our New Reforestation Pledge",
      tag: "Sustainability",
      description:
        "Discover our global commitment to reducing carbon footprint through nature.",
      image:
        "https://as1.ftcdn.net/v2/jpg/05/12/99/62/1000_F_512996203_b8xRtBzzUd2BRtjhOCrvdBhs9wx89BR5.jpg",
      link: "#",
    },
    {
      id: 3,
      title: "Understanding Your Nutrients: The Truth About Probiotics",
      tag: "Health",
      description:
        "The science behind gut health and how balanced nutrition plays a key role.",
      image:
        "https://thumbs.dreamstime.com/b/greek-yogurt-bowl-berries-plain-whole-milk-yogurt-greek-yogurt-bowl-berries-plain-whole-milk-yogurt-healthy-snack-355060707.jpg",
      link: "#",
    },
    {
      id: 4,
      title: "Mastering the Pour-Over: A Barista Guide",
      tag: "Nescafé",
      description:
        "Elevate your coffee ritual with pro tips for the perfect Nescafé brew.",
      image:
        "https://img.freepik.com/premium-photo/pouring-hot-water-coffee-grounds-turkish-coffee-pot_1170794-421164.jpg",
      link: "#",
    },
    {
      id: 5,
      title: "Water Stewardship: Investing in Local Community Access",
      tag: "Commitment",
      description:
        "See our projects dedicated to conserving water and ensuring clean access for all.",
      image:
        "https://img.freepik.com/premium-photo/group-happy-children-drinking-water-from-tap-park-clean-water-problems-africa_892345-1836.jpg?w=826",
      link: "#",
    },
  ];

  const scrollRef = useRef(null);

  const SCROLL_AMOUNT = 400;

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -SCROLL_AMOUNT,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: SCROLL_AMOUNT,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-8 bg-amber-100 pl-20 relative">
      <h2 className="text-5xl text-yellow-700 font-bold mb-20 pl-5 md:pl-8 tracking-tight">
        <i> Our Latest Stories & Commitments</i>
      </h2>

      <div className="relative">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -mt-16 z-10 bg-white p-3 rounded-full shadow-lg opacity-80 hover:opacity-100 transition duration-300 hidden md:flex items-center justify-center"
        >
          <ArrowLeft size={24} className="text-amber-800" />
        </button>

        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -mt-16 z-10 bg-white p-3 rounded-full shadow-lg opacity-80 hover:opacity-100 transition duration-300 hidden md:flex items-center justify-center"
        >
          <ArrowRight size={24} className="text-amber-800" />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-10 overflow-x-auto space-x-5 pb-5 px-5 md:px-8 thin-scrollbar"
        >
          {NESTLE_STORIES.map((story) => (
            <div
              className="flex-none w-92 bg-amber-50 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300 overflow-hidden"
              key={story.id}
            >
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-68 object-cover object-center"
              />

              <div className="p-4">
                <span className="inline-block bg-red-100 text-red-700 text-xs font-semibold px-2 py-1 rounded-full mb-2">
                  {story.tag}
                </span>
                <h3 className="text-xl font-bold text-amber-800 mb-2">
                  {story.title}
                </h3>
                <p className="text-sm text-amber-700 mb-4">
                  {story.description}
                </p>
                <a
                  href={story.link}
                  className="flex items-center gap-2 text-red-700 font-medium hover:text-red-800 transition duration-150"
                >
                  Read More <ArrowRight size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedStories;
