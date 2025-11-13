import { ArrowUpRight } from "lucide-react";
import React from "react";

const ScrollProducts = () => {
  return (
    <div className="h-screen max-w-screen mx-auto flex bg-amber-100">
      <div className="h-full w-max flex overflow-x-auto px-50 gap-20 items-center small-scrollbar scrollbar-hide">
        <div className="w-full h-[90%] flex gap-20 items-center">
          <div className="text-3xl text-white hover:text-red-500 font-extrabold flex justify-between items-end p-4 font-mono w-[750px] h-[70%]  shrink-0 rounded-xl rotate-12 bg-cover bg-center bg-[url(https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/news14403.jpg)] hover:bg-[url(https://m.media-amazon.com/images/S/aplus-media-library-service-media/5335fdd4-0d82-43e3-a417-657d3940611e.__CR0,0,970,600_PT0_SX970_V1___.png)] transition-all duration-500 hover:scale-110">
            <h1 className="">“Happiness in 2 minutes.”</h1>
            <p className="bg-gray-300/60 rounded-full p-2">
              <ArrowUpRight size={26} />
            </p>
          </div>

          <div className="flex justify-between items-end p-4 font-mono w-[600px] h-[70%] shrink-0 rounded-xl -rotate-6 bg-center bg-cover bg-[url(https://www.gcrmag.com/wp-content/uploads/2024/01/Nestle-UK.jpg)] hover:bg-[url(https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/762508150368069.62f911cccb417.png)] transition-all duration-500 hover:scale-110">
            <h1 className="text-3xl text-white font-extrabold">
              "Bold aroma, smooth taste"
            </h1>
            <p className="bg-gray-300/60 rounded-full p-2">
              <ArrowUpRight size={26} />
            </p>
          </div>

          <div className="text-3xl text-amber-900 hover:text-white font-bold flex justify-between items-end p-4 font-mono w-[700px] h-[70%]  rounded-xl shrink-0 rotate-3 bg-center bg-cover bg-[url(https://www.businessapac.com/wp-content/uploads/2024/11/05-1.jpg)] hover:bg-[url(https://wallpapercave.com/wp/wp3624947.jpg)] transition-all duration-500 hover:scale-110">
            <h1 className="">"Have a break, have a kitkat"</h1>
            <p className="bg-gray-300/60 rounded-full p-2">
              <ArrowUpRight size={26} />
            </p>
          </div>

          <div className="text-3xl text-blue-800 hover:text-green-700 font-bold flex justify-between items-end p-4 font-mono w-[700px] h-[70%] rounded-xl shrink-0 -rotate-6 bg-center bg-cover bg-[url(https://images.squarespace-cdn.com/content/v1/608daa78982ce821eabdc02c/1632871321055-2OWIX4QF7F0ZMUZ9IBLC/Nestea_GT_KV_2_CMYK.jpg)] hover:bg-[url(https://coffeebrewcafe.com/wp-content/uploads/2024/09/does-nestea-have-caffeine.png)] transition-all duration-500 hover:scale-110">
            <h1>"Sip the chill"</h1>
            <p className="bg-gray-300/60 rounded-full p-2">
              <ArrowUpRight size={26} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollProducts;
