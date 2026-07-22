import React from "react";
import ReusableCarousel from "../../components/ReusableCarousel";
import logo from "../../assets/images/logo.png";
import bgImage from "../../assets/images/bgImage.png";

import icon1 from "../../assets/images/icon1.png"; // Orange
import icon2 from "../../assets/images/icon2.png"; // Blue
import icon3 from "../../assets/images/icon3.png"; // Dark Blue
import icon4 from "../../assets/images/icon4.png"; // Purple

import { FaRocket, FaUsers, FaHandshake, FaMapMarkedAlt } from "react-icons/fa";

const stats = [
  {
    id: 1,
    icon: <FaRocket size={28} className="text-white" />,
    number: "100,000+",
    label: "Leads Generated",
    bgImage: icon2, 
  },
  {
    id: 2,
    icon: <FaUsers size={28} className="text-white" />,
    number: "50,000+",
    label: "Students Enrolled",
    bgImage: icon3, 
  },
  {
    id: 3,
    icon: <FaHandshake size={28} className="text-white" />,
    number: "15+",
    label: "Partners",
    bgImage: icon1, 
  },
  {
    id: 4,
    icon: <FaMapMarkedAlt size={28} className="text-white" />,
    number: "",
    label: "Pan-India Reach",
    bgImage: icon4, 
  },
];

const Hero2 = () => {
  return (
    <div className="w-full relative bg-white font-sans overflow-hidden">
      
      {/* Background Image Container */}
      <div 
        className="relative w-full min-h-fit md:min-h-[90vh] lg:min-h-[850px] pt-12 md:pt-16 pb-10 flex flex-col items-center justify-between px-6"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      >
        {/* Top Content */}
        <div className="max-w-5xl w-full flex flex-col items-center mt-4 md:mt-10 z-10 text-center">
          {/* Transparent Logo */}
          <img 
            src={logo} 
            alt="Logo" 
            className="h-12 md:h-16 object-contain mb-6 opacity-90 mix-blend-multiply" 
            data-aos="fade-down" 
          />
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold font-heading text-[#0A1138] mb-5 tracking-tight drop-shadow-sm" data-aos="fade-up" data-aos-delay="100">
            Who We Are
          </h1>
          
          <p className="text-lg md:text-xl text-gray-800 max-w-2xl mx-auto leading-relaxed font-medium" data-aos="fade-up" data-aos-delay="200">
          Fast-growing edtech company focused on building and managing high-impact online education ecosystems. We specialize in creating scalable, technology-driven platforms that empower universities and institutions to expand their digital presence and reach a wider audience. 
          </p>
        </div>

        {/* STATS CARDS SECTION */}
        <div className="z-10 w-full max-w-6xl mx-auto px-2 md:px-6 mt-24 lg:mt-auto relative pb-6 md:pb-10"> 
          <ReusableCarousel
            items={stats}
            desktopGridClass="md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
            renderItem={(item) => (
              <div
                key={item.id}
                data-aos="zoom-in"
                data-aos-delay={item.id * 100}
                style={{ 
                  backgroundImage: `url(${item.bgImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                className="relative overflow-hidden w-full h-[150px] md:h-[160px] p-5 text-white shadow-xl 
                           hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center rounded-2xl border border-white/20"
              >
                <div className="mb-2">{item.icon}</div>
                <div className="text-center flex flex-col items-center">
                  {item.number && (
                    <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-1">
                      {item.number}
                    </h2>
                  )}
                  <p className={`text-sm md:text-base font-semibold opacity-95 ${!item.number ? 'text-lg md:text-xl font-bold mt-2' : ''}`}>
                    {item.label}
                  </p>
                </div>
              </div>
            )}
          />
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="relative block w-full h-[60px] md:h-[100px]">
          <path d="M0,60 C480,140 960,140 1440,60 L1440,120 L0,120 Z" fill="#ffffff" opacity="0.8"></path>
          <path d="M0,80 C480,160 960,160 1440,80 L1440,120 L0,120 Z" fill="#ffffff"></path>
        </svg>
      </div>
      
    </div>
  );
};

export default Hero2;

