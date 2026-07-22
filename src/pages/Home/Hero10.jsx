import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { FaChartLine, FaCogs, FaUsers, FaChartBar } from 'react-icons/fa';
import bgImage2 from '../../assets/images/bgImage2.png';

const Hero10 = () => {
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

  const scrollToSlide = (index) => {
    if (scrollRef.current && scrollRef.current.children[index]) {
      scrollRef.current.children[index].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  const features = [
    {
      title: "Proven Track Record",
      desc: "Years of experience driving enrollments and student success for online universities.",
      icon: <FaChartLine size={24} />,
      bgColor: "bg-[#b13636]", 
      borderColor: "border-[#f5d6d6]" 
    },
    {
      title: "Comprehensive Solutions",
      desc: "All-in-one platform that handles lead generation, enrollment, student support, and placement.",
      icon: <FaCogs size={24} />,
      bgColor: "bg-[#f39c12]", 
      borderColor: "border-[#fdf2e2]" 
    },
    {
      title: "Dedicated Expertise",
      desc: "A team of edtech veterans with decades of industry experience and a commitment to excellence.",
      icon: <FaUsers size={24} />,
      bgColor: "bg-[#2980b9]", 
      borderColor: "border-[#e1f0f7]" 
    },
    {
      title: "Results-Driven Approach",
      desc: "Focus on measurable outcomes with data-driven strategies that grow enrollment and student retention.",
      icon: <FaChartBar size={24} />,
      bgColor: "bg-[#6c5ce7]", 
      borderColor: "border-[#efedfd]" 
    }
  ];

  return (
    <div className="relative w-full py-10 md:py-20 px-6 font-sans flex flex-col items-center overflow-hidden" style={{ backgroundImage: `url(${bgImage2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-transparent pointer-events-none z-0"></div>

      <div className="relative z-10 text-center mb-12 md:mb-16" data-aos="fade-down">
        <img src={logo} alt="Logo" className="h-14 mx-auto mb-6 md:mb-10 object-contain" />
        <h2 className="text-2xl md:text-4xl font-bold text-[#1e2a5a] mb-3 md:mb-6 tracking-tight" data-aos="fade-up" data-aos-delay="100">
          Why Partner with Us?
        </h2>
        <p className="text-gray-500 text-base md:text-xl max-w-2xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="200">
          Unlock the full potential of your online university programs with Career PACE.
        </p>
      </div>

      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="relative z-10 flex md:grid md:grid-cols-2 gap-6 md:gap-8 w-full max-w-6xl overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-8 md:pb-0 px-2 md:px-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {features.map((item, i) => (
          <div key={i} className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 hover:-translate-y-1 transition-transform duration-300 w-[80vw]  max-w-[340px] md:w-full md:max-w-none md:min-w-0 shrink-0 md:shrink snap-center text-center sm:text-left" data-aos="fade-up" data-aos-delay={i * 150 + 200}>
            
            <div className={`relative flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full border-[4px] md:border-[6px] ${item.borderColor} flex items-center justify-center`}>
              <div className={`${item.bgColor} w-11 h-11 md:w-14 md:h-14 rounded-full flex items-center justify-center text-white shadow-md`}>
                {item.icon}
              </div>
            </div>

            <div>
              <h3 className="text-base sm:text-lg md:text-2xl font-bold text-gray-800 mb-1.5 md:mb-2 break-words">{item.title}</h3>
              <p className="text-gray-500 text-xs sm:text-sm md:text-lg leading-snug">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Mobile Swipe Indicator Dots */}
      <div className="flex md:hidden justify-center items-center gap-2 mt-4 mb-2">
        {[0, 1, 2, 3].map((idx) => (
          <button 
            key={idx} 
            onClick={() => scrollToSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${activeIndex === idx ? 'w-8 bg-[#1e2a5a]' : 'w-2.5 bg-gray-400 opacity-60'}`}
          ></button>
        ))}
      </div>

      <div className="relative z-10 mt-12 md:mt-20 text-center" data-aos="zoom-in" data-aos-delay="500">
        <p className="text-xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8">
          Let's work together to transform higher education!
        </p>
        <Link to="/contact" className="bg-[#b43238] hover:bg-[#9a2a2f] text-white px-6 py-2.5 md:px-8 md:py-3 rounded-full font-bold shadow-lg transition-transform transform hover:scale-105 active:scale-95 text-base md:text-lg inline-block">
          Get in Touch
        </Link>
      </div>
    </div>
  );
};

export default Hero10;
