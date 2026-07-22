import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Ecosystem", path: "/ecosystem" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Partners", path: "/partners" },
    { name: "Why Us", path: "/why-partner" },
  ];

  return (
    <nav className="w-full shadow-md px-4 sm:px-6 lg:px-12 py-3 flex items-center justify-between bg-white sticky top-0 z-50">

      {/* 🔥 Logo */}
      <NavLink to="/" className="shrink-0">
        <img src={logo} alt="logo" className="h-9 sm:h-10 lg:h-12 object-contain" />
      </NavLink>

      {/* 🔥 Desktop Links */}
      <div className="hidden lg:flex items-center gap-4 xl:gap-8 text-base xl:text-lg font-semibold">
        {navLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-[#1e2a5a] font-bold"
                  : "text-black hover:text-[#1e2a5a]"
              } transition whitespace-nowrap`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>

      {/* 🔥 Desktop Button */}
      <NavLink
        to="/contact"
        className="hidden lg:inline-block bg-[#b43238] text-white px-5 py-2 rounded-xl text-base xl:text-lg font-medium hover:bg-[#9a2a2f] transition whitespace-nowrap shrink-0"
      >
        Contact Us
      </NavLink>

      {/* 🔥 Mobile / Tablet Icon */}
      <div
        className="lg:hidden text-2xl cursor-pointer z-[60] relative p-1"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* 🔥 Mobile / Tablet Menu */}
      <div
        className={`absolute top-0 left-0 w-full bg-white shadow-xl flex flex-col items-center gap-6 py-10 transform transition-all duration-300 ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        } lg:hidden z-50`}
      >
        {navLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `text-lg font-medium ${
                isActive
                  ? "text-[#1e2a5a] font-bold"
                  : "text-gray-800 hover:text-[#1e2a5a]"
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}

        {/* Mobile Button */}
        <NavLink
          to="/contact"
          onClick={() => setIsOpen(false)}
          className="bg-[#b43238] text-white px-8 py-2.5 rounded-xl text-lg font-medium hover:bg-[#9a2a2f] transition mt-2 shadow-md"
        >
          Contact Us
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;