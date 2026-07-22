import React, { useState, useRef } from "react";
import logo from "../../assets/images/logo.png";
import bgImage2 from "../../assets/images/bgImage2.png";

// Icons
import { FaRocket, FaUserPlus, FaGraduationCap, FaHeadset, FaBriefcase, FaSyncAlt } from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Lead Generation",
    desc: "Targeted campaigns to generate high-quality leads for your online programs.",
    icon: <FaRocket className="text-white" size={28} />, 
    iconBg: "bg-[#d63336]", // Red background
  },
  {
    id: 2,
    title: "Student Enrollment",
    desc: "Streamlined processes for student admissions and onboarding.",
    icon: <FaUserPlus className="text-white" size={28} />, 
    iconBg: "bg-[#f19e38]", // Orange background
  },
  {
    id: 3,
    title: "Academic Management",
    desc: "Robust tools for course management, scheduling, and faculty support.",
    icon: <FaGraduationCap className="text-white" size={28} />, 
    iconBg: "bg-[#6d4da1]", // Purple background
  },
  {
    id: 4,
    title: "Student Support",
    desc: "24/7 assistance and resources to help students succeed.",
    icon: <FaSyncAlt className="text-white" size={28} />, 
    iconBg: "bg-[#3b82f6]", // Blue background
  },
  {
    id: 5,
    title: "Placement Services",
    desc: "Career guidance and job placement assistance for graduates.",
    icon: <FaBriefcase className="text-white" size={28} />, 
    iconBg: "bg-[#2dd4bf]", // Teal background
  },
  {
    id: 6,
    title: "Operations & Retention",
    desc: "Efficient backend operations and retention strategies to reduce drop-outs.",
    icon: <FaHeadset className="text-white" size={28} />, 
    iconBg: "bg-[#2563eb]", // Dark Blue background
  },
];

const Hero7 = () => {
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
    <div className="relative w-full py-12 md:py-24 px-6 font-sans overflow-hidden" style={{ backgroundImage: `url(${bgImage2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-transparent pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        
        {/* Logo */}
        <div className="mb-6 md:mb-8" data-aos="fade-down">
          <img src={logo} alt="Career PACE" className="h-10 md:h-16 mx-auto object-contain" />
        </div>

        {/* Headings */}
        <h2 className="text-2xl md:text-4xl font-bold text-[#1e2a5a] mb-4 md:mb-6 tracking-tight" data-aos="fade-up">
          Our Online Education Services
        </h2>
        <p className="text-gray-500 text-base md:text-lg max-w-3xl mx-auto mb-6 md:mb-20 leading-relaxed font-medium" data-aos="fade-up" data-aos-delay="100">
          End-to-end solutions to drive admissions, operations, and student <br className="hidden md:block" /> success for online universities.
        </p>

        {/* Services Grid */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-x-8 gap-y-16 md:gap-y-24 mt-4 md:mt-20 pt-12 overflow-x-auto snap-x snap-mandatory pb-8 md:pb-0 px-2 md:px-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {services.map((service, index) => (
            <div 
              key={service.id} 
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white rounded-2xl p-6 pt-12 md:p-8 md:pt-16 shadow-[0_10px_40px_rgba(0,0,0,0.05)] relative border border-gray-100 flex flex-col items-center min-w-[260px] w-[85vw] md:w-auto shrink-0 snap-center"
            >
              {/* Floating Icon Circle WITH Background Color */}
              <div className="absolute -top-10 md:-top-12 left-1/2 -translate-x-1/2">
                {/* Outer White Border Circle */}
                <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full shadow-lg flex items-center justify-center p-1.5 md:p-2">
                   {/* Inner Colored Circle */}
                   <div className={`w-full h-full rounded-full flex items-center justify-center shadow-inner ${service.iconBg}`}>
                      <div className="scale-75 md:scale-100 flex items-center justify-center">{service.icon}</div>
                   </div>
                </div>
              </div>

              {/* Text Content */}
              <h3 className="text-lg md:text-xl font-bold text-[#1e2a5a] mb-3 md:mb-4">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
        {/* Mobile Swipe Indicator Dots */}
        <div className="flex md:hidden justify-center items-center gap-2 mt-4">
          {[0, 1, 2, 3, 4, 5].map((idx) => (
            <div 
              key={idx} 
              className={`h-2.5 rounded-full transition-all duration-300 ${activeIndex === idx ? 'w-8 bg-[#1e2a5a]' : 'w-2.5 bg-gray-400 opacity-60'}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero7;
