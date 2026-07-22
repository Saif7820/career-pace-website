import React from "react";
import ReusableCarousel from "../../components/ReusableCarousel";
import logo from "../../assets/images/logo.png";

// 3 Background Images (for Pillars)
import icon1 from "../../assets/images/icon1.png";
import icon2 from "../../assets/images/icon2.png";
import icon5 from "../../assets/images/icon5.png";

// Icons
import { FaUniversity, FaUsers, FaLaptopCode } from "react-icons/fa";

const pillars = [
  {
    id: 1,
    title: "Exclusive University Partnerships",
    description: "Work exclusively with leading universities to develop and expand their online education programs.",
    bgImage: icon1,
    icon: <FaUniversity size={45} />,
  },
  {
    id: 2,
    title: "Edtech Lead Solutions",
    description: "Generate and distribute qualified leads to maximize enrollment and growth potential.",
    bgImage: icon2,
    icon: <FaUsers size={45} />,
  },
  {
    id: 3,
    title: "Technology Platforms",
    subTitle: "POWERED BY College Sangam",
    description: "Leverage our College Sangam platform to optimize operations and student success.",
    bgImage: icon5,
    icon: <FaLaptopCode size={45} />,
  },
];

const Hero3 = () => {
  return (
    <div className="w-full bg-slate-50 py-8 md:py-20 px-3 sm:px-6 md:px-12 font-sans overflow-x-hidden">
      
      {/* LOGO & HEADER */}
      <div className="text-center mb-16">
        <img src={logo} alt="Logo" className="h-14 md:h-16 mx-auto mb-6 object-contain" data-aos="fade-down" />
        <h1 className="text-3xl md:text-4xl font-bold text-[#1e2a5a]" data-aos="fade-up">
          Our Growth Pillars
        </h1>
      </div>

      {/* 3 PILLARS CARDS */}
      <div className="max-w-7xl mx-auto">
        <ReusableCarousel
          items={pillars}
          desktopGridClass="md:grid md:grid-cols-3 gap-6 md:gap-8"
          renderItem={(item, index) => (
            <div key={item.id} data-aos="fade-up" data-aos-delay={index * 150} className="flex flex-col bg-white rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 w-full h-full">
              
              {/* TOP HALF: Background Image with Icon and Title */}
              <div 
                style={{ 
                  backgroundImage: `url(${item.bgImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center top'
                }}
                className="relative h-52 sm:h-64 p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center text-center text-white"
              >
                {/* Overlay to make text pop */}
                <div className="absolute inset-0 bg-black/10"></div>

                {/* Icon inside the image */}
                <div className="relative z-10 mb-4 opacity-90">
                  {item.icon}
                </div>

                {/* Title inside the image */}
                <h3 className="relative z-10 text-lg sm:text-2xl font-bold leading-snug px-2 break-words text-center">
                  {item.title}
                  {item.subTitle && (
                     <span className="block text-[10px] sm:text-xs mt-1.5 opacity-90 font-normal tracking-tight">
                       {item.subTitle}
                     </span>
                  )}
                </h3>

                {/* Bottom Curve Overlay */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
                  <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="relative block w-full h-[30px]">
                    <path d="M0,0 C480,120 960,120 1440,0 L1440,120 L0,120 Z" fill="#ffffff"></path>
                  </svg>
                </div>
              </div>

              {/* BOTTOM HALF: White area for Paragraph */}
              <div className="p-4 sm:p-6 md:p-8 flex items-center justify-center text-center min-h-fit md:min-h-[150px] flex-1">
                <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>

            </div>
          )}
        />
      </div>
    </div>
  );
};

export default Hero3;

