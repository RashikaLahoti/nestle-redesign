import React from "react";
import { Facebook, Instagram, Youtube, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 border-b border-gray-700 pb-10">
          <div className="md:col-span-2">
            <div className="text-2xl font-bold text-white mb-4">
              <img
                className="w-26"
                src="https://companieslogo.com/img/orig/NESN.SW_BIG-55a6f2f9.png?t=1633671404"
                alt=""
              />
            </div>

            <p className="text-sm leading-relaxed mb-6 max-w-sm">
              We unlock the power of food to enhance quality of life for
              everyone, today and for generations to come.
            </p>

            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-500 transition"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-pink-500 transition"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-red-600 transition"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">ABOUT US</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  At a glance
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Research & Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  How we do Business
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Our Leadership team
                </a>
              </li>
              <li className="pt-2 text-white">OUR STORIES</li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Our stories
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">BRANDS</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  AskNestlé
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Nestlé Breakfast Cereals
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Coffee
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Nutrition
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Dairy
                </a>
              </li>
              <li className="pt-2 text-white">NESTLÉ IN SOCIETY</li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Creating Shared Value
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">
              INVESTORS / MEDIA
            </h3>
            <ul className="space-y-2 text-sm mb-8">
              <li>
                <a href="#" className="hover:text-white transition">
                  Investor Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Media Library
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Press Releases
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Media Contacts
                </a>
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-white mb-3">
              SUBSCRIBE NEWSLETTER
            </h3>
            <div className="flex bg-gray-700 rounded-full overflow-hidden">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 bg-transparent text-gray-200 placeholder-gray-400 focus:outline-none"
              />
              <button className="bg-green-600 p-3 hover:bg-green-500 transition duration-200 flex items-center justify-center">
                <ArrowRight size={20} className="text-white" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-6 text-sm">
          <p className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Nestlé. All rights reserved.
          </p>

          <div className="flex items-center space-x-4">
            <span className="text-gray-400">Payment methods:</span>
            <div className="h-5 w-8 bg-gray-500 rounded"></div>
            <div className="h-5 w-8 bg-gray-500 rounded"></div>
            <div className="h-5 w-8 bg-gray-500 rounded"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
