import React, { useState, useRef } from "react";
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

const Hero6 = () => {
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
      {/* 1. Top Icon before Heading */}
      <div className="flex justify-center mb-4 md:mb-6" data-aos="fade-down">
        <img src={topicon} alt="Top Icon" className="h-20 md:h-40 object-contain mix-blend-multiply" />
      </div>

      {/* 2. Heading Section */}
      <h1 className="text-2xl md:text-5xl font-semibold text-[#1e2a44] mb-3 md:mb-4 tracking-tight" data-aos="fade-up">
        The Future of Online Higher Education
      </h1>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12 md:mb-20 text-base md:text-lg" data-aos="fade-up" data-aos-delay="100">
        Your one-stop solution to empower and scale online university programs.
      </p>

      {/* 3. CENTER SECTION - Laptop with Circle and Arrows */}
      <div className="relative flex flex-col md:flex-row justify-center items-center gap-6 md:gap-20 mb-10 md:mb-20 max-w-7xl mx-auto">
        
        {/* SVG Arrows Background (Desktop Only) */}
        <div className="absolute inset-0 hidden md:flex justify-center items-center pointer-events-none">
           <svg width="800" height="400" viewBox="0 0 800 400" fill="none" className="opacity-40">
              {/* Left Side Arrows */}
              <path d="M 220 100 Q 280 50 350 80" stroke="#3b82f6" strokeWidth="2" strokeDasharray="6 6" />
              <path d="M 220 300 Q 280 350 350 320" stroke="#3b82f6" strokeWidth="2" strokeDasharray="6 6" />
              {/* Right Side Arrows */}
              <path d="M 580 100 Q 520 50 450 80" stroke="#3b82f6" strokeWidth="2" strokeDasharray="6 6" />
              <path d="M 580 300 Q 520 350 450 320" stroke="#3b82f6" strokeWidth="2" strokeDasharray="6 6" />
           </svg>
        </div>

        {/* LEFT SIDE - Features */}
        <div className="flex flex-col gap-4 md:gap-12 md:text-right z-20">
          {[
            { icon: <FaRocket />, text: "Lead Generation", color: "bg-[#e11d48]", pos: "md:translate-x-12" },
            { icon: <FaCog />, text: "Operations & Retention", color: "bg-[#3b82f6]", pos: "md:translate-x-0" },
            { icon: <FaBriefcase />, text: "Placement Services", color: "bg-[#0ea5e9]", pos: "md:translate-x-12" },
          ].map((item, i) => (
            <div key={i} className={`flex items-center justify-end gap-4 ${item.pos}`} data-aos="fade-right" data-aos-delay={i * 150 + 200}>
              <span className="text-gray-700 font-semibold text-lg">{item.text}</span>
              <div className={`w-14 h-14 flex-shrink-0 flex items-center justify-center text-white ${item.color} rounded-full border-4 border-white shadow-lg`}>
                {item.icon}
              </div>
            </div>
          ))}
        </div>

        {/* CENTER - Laptop inside Circle */}
        <div className="relative z-10 flex justify-center items-center my-4 md:my-0" data-aos="zoom-in" data-aos-delay="300">
          {/* Decorative Glow */}
          <div className="absolute w-[240px] h-[240px] md:w-[550px] md:h-[550px] bg-blue-100/50 rounded-full blur-3xl -z-10"></div>
          
          {/* Circle Container - object-contain ensures no cropping */}
          <div className="w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] md:w-[500px] md:h-[500px] rounded-full bg-white shadow-2xl border-4 border-blue-100 flex items-center justify-center p-4 md:p-12 relative z-20 overflow-hidden">
            <img
              src={laptop}
              alt="laptop"
              className="w-full h-full object-contain drop-shadow-xl"
            />
          </div>
        </div>

        {/* RIGHT SIDE - Features */}
        <div className="flex flex-col gap-4 md:gap-12 md:text-left z-20">
          {[
            { icon: <FaUserGraduate />, text: "Student Enrollment", color: "bg-[#f59e0b]", pos: "md:-translate-x-12" },
            { icon: <FaChartLine />, text: "Academic Management", color: "bg-[#6d28d9]", pos: "md:-translate-x-0" },
            { icon: <FaHeadset />, text: "Student Support", color: "bg-[#06b6d4]", pos: "md:-translate-x-12" },
          ].map((item, i) => (
            <div key={i} className={`flex items-center gap-4 ${item.pos}`} data-aos="fade-left" data-aos-delay={i * 150 + 400}>
              <div className={`w-14 h-14 flex-shrink-0 flex items-center justify-center text-white ${item.color} rounded-full border-4 border-white shadow-lg`}>
                {item.icon}
              </div>
              <span className="text-gray-700 font-semibold text-lg">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Bottom Text */}
      <p className="text-lg md:text-xl text-gray-700 mb-12" data-aos="fade-up" data-aos-delay="500">
        Helping universities generate{" "}
        <span className="font-bold text-black">100,000+ leads</span> and achieve{" "}
        <span className="font-bold text-black">Pan-India reach</span>
      </p>

      {/* 5. Stats Cards (Unchanged as requested) */}
      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-4 md:gap-6 max-w-5xl mx-auto overflow-x-auto snap-x snap-mandatory pb-6 px-2 md:pb-0 md:px-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        <div
          className="flex items-center gap-4 text-white px-6 py-4 rounded-2xl shadow-xl min-w-[260px] w-[85vw] md:w-auto shrink-0 snap-center hover:-translate-y-1 transition-all"
          style={{ backgroundImage: `url(${icon1})`, backgroundSize: "cover" }}
          data-aos="fade-up" data-aos-delay="600"
        >
          <FaRocket size={30} />
          <div className="text-left">
            <h3 className="text-xl font-bold">100,000+</h3>
            <p className="text-sm">Leads Generated</p>
          </div>
        </div>

        <div
          className="flex items-center gap-4 text-white px-6 py-4 rounded-2xl shadow-xl min-w-[260px] w-[85vw] md:w-auto shrink-0 snap-center hover:-translate-y-1 transition-all"
          style={{ backgroundImage: `url(${icon2})`, backgroundSize: "cover" }}
          data-aos="fade-up" data-aos-delay="700"
        >
          <FaUsers size={30} />
          <h3 className="text-xl font-bold">15+</h3>
          <div className="h-8 w-px bg-white/40"></div>
          <div className="text-left">
            <p className="text-sm font-bold">University</p>
            <p className="text-sm font-bold">Partners</p>
          </div>
        </div>

        <div
          className="flex items-center gap-4 text-white px-6 py-4 rounded-2xl shadow-xl min-w-[260px] w-[85vw] md:w-auto shrink-0 snap-center hover:-translate-y-1 transition-all"
          style={{ backgroundImage: `url(${icon3})`, backgroundSize: "cover" }}
          data-aos="fade-up" data-aos-delay="800"
        >
          <FaMapMarkedAlt size={30} />
          <p className="text-lg font-bold">Pan-India Reach</p>
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

export default Hero6;
