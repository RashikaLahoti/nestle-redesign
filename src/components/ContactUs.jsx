import React from "react";

const ContactUs = () => {
  return (
    <div className="w-full h-screen flex items-center justify-end-safe px-60">
      <div className="relative  w-[40%] h-[60%] flex">
        <div className="absolute -top-20 rotate-10 -right-25 w-[380px] h-[420px] hover:scale-110 hover:z-10 transition-all duration-300">
          <img
            className="move-to-right w-full h-full object-cover"
            src="/maggi.png"
            alt=""
          />
        </div>
        <div className="absolute top-30 z-5 -right-43 rotate-40 w-[450px] h-[110px] hover:scale-110 hover:z-10 transition-all duration-300">
          <img
            className="rotate-90 object-cover w-full h-full"
            src="/munch.png"
            alt=""
          />
        </div>
        <div className="absolute z-9 top-40 -right-55 -rotate-8 w-[350px] h-[350px] hover:scale-110 hover:z-10 transition-all duration-300">
          <img
            className="move-to-left w-full h-full"
            src="/nescafe.png"
            alt=""
          />
        </div>
        <div className="move-to-right absolute z-8 rotate-25 top-56 -left-13 w-[350px] h-[430px] hover:scale-110 hover:z-10 transition-all duration-300">
          <img src="/kitkatcover.png" alt="" />
        </div>
      </div>
      <div className="flex flex-col items-end text-end gap-4 w-[90%] h-[70%] bg-red-600 text-white/80 rounded-4xl p-8 px-14">
        <h1 className="text-4xl font-bold text-white/80 ">
          Contact Us: Nestlé India
        </h1>
        <p className="border-b w-[60%] border-gray-200/40 p-2 ">
          <span className="text-xl font-semibold">Nestlé India Ltd.</span>
          <br />
          Nestlé House, <br /> Jacaranda Marg, <br /> 'M' Block, DLF City, Phase
          II, <br /> Gurgaon, Haryana- 122002 (India)
        </p>
        <p className="border-b w-[60%] border-gray-200/40 p-2 ">
          <span className="font-semibold text-lg">Phone (Head Office)</span>{" "}
          +911242389300 <br />
          <span className="font-semibold text-lg ">
            Email (General Inquires)
          </span>
          communication@in.nestle.com
        </p>
        <p>
          <span className="font-semibold text-lg">
            Consumer Services(WeCare) <br />
          </span>
          Toll-Free Number: 1800 103 1947 <br />
          Email: wecare@in.nestle.com <br />
          WhatsApp: +919717771947
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
