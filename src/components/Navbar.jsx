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
    <nav className="w-full shadow-md px-6 md:px-12 py-2 flex items-center justify-between bg-white sticky top-0 z-50">

      {/* 🔥 Logo */}
      <img src={logo} alt="logo" className="h-10 md:h-12 object-contain" />

      {/* 🔥 Desktop Links */}
      <div className="hidden md:flex items-center gap-10 text-lg font-semibold">
        {navLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-[#1e2a5a] font-bold"
                  : "text-black hover:text-[#1e2a5a]"
              } transition`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>

      {/* 🔥 Desktop Button */}
      <NavLink
        to="/contact"
        className="hidden md:block bg-[#b43238] text-white px-6 py-2 rounded-xl text-lg font-medium hover:bg-[#9a2a2f] transition"
      >
        Contact Us
      </NavLink>

      {/* 🔥 Mobile Menu Icon */}
      <div
        className="md:hidden text-2xl cursor-pointer z-[60] relative"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* 🔥 Mobile Menu */}
      <div
        className={`absolute top-0 left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-10 transform transition-all duration-300 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } md:hidden`}
      >
        {navLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `text-lg ${
                isActive
                  ? "text-[#1e2a5a] font-bold"
                  : "text-black"
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
          className="bg-[#b43238] text-white px-6 py-2 rounded-xl text-lg font-medium hover:bg-[#9a2a2f] transition"
        >
          Contact Us
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;