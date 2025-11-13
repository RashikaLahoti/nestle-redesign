import React, { useState } from "react";
import { Menu, X, ChevronDown, Search, User, Store } from "lucide-react";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate()
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleDropdown = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  return (
    <nav className="bg-linear-to-b from-amber-900 to-amber-900/20 text-white  w-full z-50 shadow-md">
      <div className="w-full pr-18 py-6 flex items-center justify-end">
        <div className="absolute z-4 left-30 top-3">
          <img
            src="https://companieslogo.com/img/orig/NESN.SW_BIG-55a6f2f9.png?t=1633671404"
            alt="Nestle Logo"
            className=" w-30"
          />
        </div>

        <ul className="hidden md:flex items-center space-x-8 font-semibold relative">
          <li onClick={()=>navigate("/")} className="hover:text-amber-700 transition cursor-pointer text-lg">
            Home
          </li>
          <li
            className="relative group cursor-pointer"
            onMouseEnter={() => toggleDropdown("products")}
            onMouseLeave={() => toggleDropdown(null)}
          >
            <div className="flex items-center space-x-1">
              <span className="text-lg">Our Products</span>
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  dropdownOpen === "products" ? "rotate-180" : ""
                }`}
              />
            </div>

            {dropdownOpen === "products" && (
              <ul className="absolute top-8 left-0 bg-amber-100 text-amber-600 rounded-lg shadow-lg py-2 w-56 z-50">
                <li className="px-4 py-2 hover:bg-red-100 cursor-pointer">
                  Beverages (Nescafé, Milo)
                </li>
                <li className="px-4 py-2 hover:bg-red-100 cursor-pointer">
                  Dairy Products (Milkmaid, Everyday)
                </li>
                <li className="px-4 py-2 hover:bg-red-100 cursor-pointer">
                  Confectionery (KitKat, Munch)
                </li>
                <li className="px-4 py-2 hover:bg-red-100 cursor-pointer">
                  Culinary (Maggi, Sauces)
                </li>
                <li className="px-4 py-2 hover:bg-red-100 cursor-pointer">
                  Nutrition (Cerelac, Lactogen)
                </li>
              </ul>
            )}
          </li>

          <li
            className="relative group cursor-pointer"
            onMouseEnter={() => toggleDropdown("about")}
            onMouseLeave={() => toggleDropdown(null)}
          >
            <div className="flex items-center space-x-1">
              <span className="text-lg">About Us</span>
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  dropdownOpen === "about" ? "rotate-180" : ""
                }`}
              />
            </div>

            {dropdownOpen === "about" && (
              <ul className="absolute top-8 left-0 bg-amber-100 text-amber-600 rounded-md shadow-lg py-2 w-48 z-50">
                <li className="px-4 py-2 hover:bg-red-100 cursor-pointer">
                  Our Story
                </li>
                <li className="px-4 py-2 hover:bg-red-100 cursor-pointer">
                  Sustainability
                </li>
                <li className="px-4 py-2 hover:bg-red-100 cursor-pointer">
                  Careers
                </li>
              </ul>
            )}
          </li>

          <li className="hover:text-gray-700 transition cursor-pointer text-lg">
            Our Impact
          </li>

          <li
            className="relative group cursor-pointer"
            onMouseEnter={() => toggleDropdown("contact")}
            onMouseLeave={() => toggleDropdown(null)}
          >
            <div className="flex items-center space-x-1">
              <span className="text-lg">Contact</span>
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  dropdownOpen === "contact" ? "rotate-180" : ""
                }`}
              />
            </div>

            {dropdownOpen === "contact" && (
              <ul className="absolute top-8 left-0 bg-amber-100 text-amber-600 rounded-md shadow-lg py-2 w-44 z-50">
                <li className="px-4 py-2 hover:bg-red-100 cursor-pointer">
                  Customer Support
                </li>
                <li className="px-4 py-2 hover:bg-red-100 cursor-pointer">
                  Investor Relations
                </li>
                <li className="px-4 py-2 hover:bg-red-100 cursor-pointer">
                  Media Inquiries
                </li>
              </ul>
            )}
          </li>
        </ul>
        <div className="flex gap-7 mx-16">
          <Search size={22} />
          <User onClick={()=>navigate("/auth")} size={22} />
          <Store size={22} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
