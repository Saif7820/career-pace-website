import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 md:px-16 py-6 md:py-16 mt-6 md:mt-20">

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-14">

        {/* Company Info */}
        <div>
          <img src={logo} alt="logo" className="h-14 md:h-16 object-contain mb-6" />
          <p className="text-base leading-7">
            Career PACE Edutech Pvt Ltd is powering the future of online
            universities by building complete growth ecosystems for digital education.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-white text-base md:text-lg font-semibold mb-3 md:mb-6">Quick Links</h2>
          <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/ecosystem" className="hover:text-white">Ecosystem</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-white text-base md:text-lg font-semibold mb-3 md:mb-6">Services</h2>
          <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
            <li>University Partnerships</li>
            <li>Lead Generation</li>
            <li>Inside Sales & Operations</li>
            <li>CRM & Technology</li>
            <li>Marketing & Brand Growth</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-white text-base md:text-lg font-semibold mb-3 md:mb-6">Contact</h2>
          <p className="text-sm md:text-base">📧 info@careerpace.org</p>
          <p className="text-sm md:text-base mt-2 md:mt-3">📞 +91-9616605000</p>
          <p className="text-sm md:text-base mt-2 md:mt-3">📍 Lucknow, Uttar Pradesh, India</p>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-base">

        <p className="text-sm md:text-base mb-4 md:mb-0 text-center md:text-left">© 2025 Career PACE Edutech Pvt Ltd. All rights reserved.</p>

        <div className="flex justify-center md:justify-end gap-6 w-full md:w-auto text-sm md:text-base">
          <span className="hover:text-white cursor-pointer">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer">Terms & Conditions</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;