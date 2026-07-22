import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 md:px-16 py-8 md:py-14 mt-0">

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">

        {/* Company Info */}
        <div className="col-span-2 md:col-span-1 mb-2 md:mb-0">
          <img src={logo} alt="logo" className="h-10 md:h-14 object-contain mb-3 md:mb-5" />
          <p className="hidden md:block text-sm leading-6 text-gray-400">
            Career PACE Edutech Pvt Ltd is powering the future of online
            universities by building complete growth ecosystems for digital education.
          </p>
        </div>

        {/* Quick Links */}
        <div className="col-span-1">
          <h2 className="text-white text-base md:text-lg font-semibold mb-3 md:mb-5 border-b border-gray-800 md:border-none pb-1 md:pb-0">Quick Links</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="/" className="hover:text-white transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-white transition">About</Link></li>
            <li><Link to="/services" className="hover:text-white transition">Services</Link></li>
            <li><Link to="/ecosystem" className="hover:text-white transition">Ecosystem</Link></li>
            <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="col-span-1">
          <h2 className="text-white text-base md:text-lg font-semibold mb-3 md:mb-5 border-b border-gray-800 md:border-none pb-1 md:pb-0">Services</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="/services" className="hover:text-white transition">University Partnerships</Link></li>
            <li><Link to="/services" className="hover:text-white transition">Lead Generation</Link></li>
            <li><Link to="/services" className="hover:text-white transition">Inside Sales & Operations</Link></li>
            <li><Link to="/services" className="hover:text-white transition">CRM & Technology</Link></li>
            <li><Link to="/services" className="hover:text-white transition">Marketing & Brand Growth</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="col-span-2 md:col-span-1 border-t border-gray-800 pt-4 md:border-none md:pt-0">
          <h2 className="text-white text-base md:text-lg font-semibold mb-3 md:mb-5">Contact</h2>
          <div className="space-y-2 text-sm text-gray-300">
            <p>📧 info@careerpace.org</p>
            <p>📞 +91-9616605000</p>
            <p>📍 Lucknow, Uttar Pradesh, India</p>
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-gray-400">

        <p className="mb-3 md:mb-0 text-center md:text-left">© 2025 Career PACE Edutech Pvt Ltd. All rights reserved.</p>

        <div className="flex gap-6">
          <span className="hover:text-white cursor-pointer transition">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer transition">Terms & Conditions</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;