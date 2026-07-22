import React, { useState, useRef } from "react";
import logo from "../../assets/images/logo.png"; 
import topicon from "../../assets/images/topicon.png"; 
import laptop from "../../assets/images/laptop.png"; 
import bgImage2 from "../../assets/images/bgImage2.png";
import icon1 from "../../assets/images/icon1.png";
import icon2 from "../../assets/images/icon2.png";
import icon3 from "../../assets/images/icon3.png";

import {
  FaRocket, FaUsers, FaMapMarkedAlt, FaUserGraduate,
  FaChartLine, FaHeadset, FaCog, FaBriefcase,
} from "react-icons/fa";

const Hero8 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const cardWidth = scrollRef.current.children[0].offsetWidth;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(index);
    }
  };

  return (
    <div
      className="w-full py-10 md:py-16 px-4 md:px-10 text-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage2})` }}
    >
      {/* 1. Header Logo */}
      <div className="flex justify-center mb-4 md:mb-6" data-aos="fade-down">
        <img src={logo} alt="Logo" className="h-8 md:h-14 object-contain" />
      </div>

      {/* 2. Heading Section - Font Weight Reduced to Semibold */}
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-[#1e2a44] mb-3 md:mb-4 tracking-tight" data-aos="fade-up">
        Our Complete Ecosystem for Online Universities
      </h1>
      <p className="text-gray-500 max-w-3xl mx-auto mb-10 md:mb-20 text-sm md:text-lg font-normal leading-relaxed px-4" data-aos="fade-up" data-aos-delay="100">
        A comprehensive, end-to-end solution designed to drive admissions, manage operations, and scale online education.
      </p>

      {/* 3. CENTER SECTION */}
      <div className="relative flex flex-col md:flex-row justify-center items-center gap-6 md:gap-20 mb-10 md:mb-20 max-w-7xl mx-auto">
        
        {/* SVG Arrows Background */}
        <div className="absolute inset-0 hidden md:flex justify-center items-center pointer-events-none">
           <svg width="800" height="400" viewBox="0 0 800 400" fill="none" className="opacity-40">
              <path d="M 220 100 Q 280 50 350 80" stroke="#3b82f6" strokeWidth="2" strokeDasharray="6 6" />
              <path d="M 220 300 Q 280 350 350 320" stroke="#3b82f6" strokeWidth="2" strokeDasharray="6 6" />
              <path d="M 580 100 Q 520 50 450 80" stroke="#3b82f6" strokeWidth="2" strokeDasharray="6 6" />
              <path d="M 580 300 Q 520 350 450 320" stroke="#3b82f6" strokeWidth="2" strokeDasharray="6 6" />
           </svg>
        </div>

        {/* LEFT SIDE - Features */}
        <div className="flex flex-col gap-4 md:gap-10 md:text-right z-20">
          {[
            { icon: <FaRocket />, text: "Lead Generation", color: "bg-[#e11d48]", pos: "md:translate-x-12" },
            { icon: <FaCog />, text: "Operations & Retention", color: "bg-[#3b82f6]", pos: "md:translate-x-0" },
            { icon: <FaBriefcase />, text: "Placement Services", color: "bg-[#0ea5e9]", pos: "md:translate-x-12" },
          ].map((item, i) => (
            <div key={i} className={`flex items-center justify-end gap-4 ${item.pos}`} data-aos="fade-right" data-aos-delay={i * 150 + 200}>
              <span className="text-gray-700 font-medium text-base md:text-lg">{item.text}</span>
              <div className={`w-12 h-12 md:w-14 md:h-14 flex-shrink-0 flex items-center justify-center text-white ${item.color} rounded-full border-4 border-white shadow-lg`}>
                {item.icon}
              </div>
            </div>
          ))}
        </div>

        {/* CENTER - Laptop Circle */}
        <div className="relative z-10 flex justify-center items-center my-4 md:my-0" data-aos="zoom-in" data-aos-delay="300">
          <div className="w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] md:w-[500px] md:h-[500px] rounded-full bg-white shadow-2xl border border-blue-100 flex items-center justify-center p-4 md:p-10 relative z-20">
            
            {/* TopIcon centered on top border */}
            <div className="absolute -top-6 md:-top-16 left-1/2 -translate-x-1/2 z-30">
                <div className="bg-white p-1 md:p-2 rounded-full shadow-lg border-2 border-blue-200">
                  <img src={topicon} alt="College Sangam" className="h-14 sm:h-20 md:h-32 object-contain rounded-full" />
                </div>
            </div>

            <img
              src={laptop}
              alt="laptop"
              className="w-full h-full object-contain drop-shadow-xl"
            />
          </div>
        </div>

        {/* RIGHT SIDE - Features */}
        <div className="flex flex-col gap-4 md:gap-10 md:text-left z-20">
          {[
            { icon: <FaUserGraduate />, text: "Student Enrollment", color: "bg-[#f59e0b]", pos: "md:-translate-x-12" },
            { icon: <FaChartLine />, text: "Academic Management", color: "bg-[#6d28d9]", pos: "md:-translate-x-0" },
            { icon: <FaHeadset />, text: "Student Support", color: "bg-[#06b6d4]", pos: "md:-translate-x-12" },
          ].map((item, i) => (
            <div key={i} className={`flex items-center gap-4 ${item.pos}`} data-aos="fade-left" data-aos-delay={i * 150 + 400}>
              <div className={`w-12 h-12 md:w-14 md:h-14 flex-shrink-0 flex items-center justify-center text-white ${item.color} rounded-full border-4 border-white shadow-lg`}>
                {item.icon}
              </div>
              <span className="text-gray-700 font-medium text-base md:text-lg">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Footer Message */}
      <p className="text-gray-500 mb-12 max-w-4xl mx-auto font-normal px-4 italic" data-aos="fade-up" data-aos-delay="500">
        Powered by our cutting-edge College Sangam platform, we manage the entire student lifecycle.
      </p>

      {/* 5. Stats Cards */}
      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-4 md:gap-6 max-w-6xl mx-auto overflow-x-auto snap-x snap-mandatory pb-6 px-2 md:pb-0 md:px-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        <div className="flex items-center gap-4 text-white px-6 py-4 rounded-xl shadow-lg min-w-[260px] w-[85vw] md:w-auto shrink-0 snap-center bg-red-600" style={{ backgroundImage: `url(${icon1})`, backgroundSize: "cover" }} data-aos="fade-up" data-aos-delay="600">
          <FaRocket size={24} />
          <div className="text-left">
            <h3 className="text-2xl font-bold">100,000+</h3>
            <p className="text-sm font-medium">Leads Generated</p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-white px-6 py-4 rounded-xl shadow-lg min-w-[260px] w-[85vw] md:w-auto shrink-0 snap-center bg-blue-900" style={{ backgroundImage: `url(${icon2})`, backgroundSize: "cover" }} data-aos="fade-up" data-aos-delay="700">
          <FaUsers size={24} />
          <div className="text-left flex items-center gap-4">
             <h3 className="text-2xl font-bold">15+</h3>
             <div className="h-8 w-px bg-white/40"></div>
             <p className="text-sm font-bold leading-tight">University<br/>Partners</p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-white px-6 py-4 rounded-xl shadow-lg min-w-[260px] w-[85vw] md:w-auto shrink-0 snap-center bg-purple-700" style={{ backgroundImage: `url(${icon3})`, backgroundSize: "cover" }} data-aos="fade-up" data-aos-delay="800">
          <FaMapMarkedAlt size={24} />
          <p className="text-xl font-bold">Pan-India Reach</p>
        </div>
      </div>
      {/* Mobile Swipe Indicator Dots */}
      <div className="flex md:hidden justify-center items-center gap-2 mt-4 mb-4">
        {[0, 1, 2].map((idx) => (
          <div 
            key={idx} 
            className={`h-2.5 rounded-full transition-all duration-300 ${activeIndex === idx ? 'w-8 bg-[#1e2a5a]' : 'w-2.5 bg-gray-400 opacity-60'}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Hero8;
