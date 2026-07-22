import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import bgImage2 from "../../assets/images/bgImage2.png";

import one from "../../assets/images/one.png";
import two from "../../assets/images/two.png";
import three from "../../assets/images/three.png";
import four from "../../assets/images/four.png";
import five from "../../assets/images/five.png";
import six from "../../assets/images/six.png";
import seven from "../../assets/images/seven.png";
import eight from "../../assets/images/eight.png";
import nine from "../../assets/images/nine.png";
import ten from "../../assets/images/ten.png";
import eleven from "../../assets/images/eleven.png";
import twelve from "../../assets/images/twelve.png";
import thirteen from "../../assets/images/thirteen.png";

const brandLogos = [
  { src: one, alt: "Amity Online" },
  { src: two, alt: "Manipal Online" },
  { src: three, alt: "UPES Online" },
  { src: four, alt: "Jain Online" },
  { src: five, alt: "USDC" },
  { src: six, alt: "Univo" },
  { src: seven, alt: "uNext" },
  { src: eight, alt: "NMIMS Online" },
  { src: nine, alt: "LPU Online" },
  { src: ten, alt: "Hike Education" },
  { src: eleven, alt: "CTPL" },
  { src: twelve, alt: "Fibe" },
  { src: thirteen, alt: "Simplilearn" },
];

const Hero15 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const scrollWidth = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
      if (scrollWidth > 0) {
        const index = Math.round((scrollLeft / scrollWidth) * 2);
        setActiveIndex(index);
      }
    }
  };

  return (
    <div
      className="relative w-full py-10 md:py-20 px-4 md:px-10 overflow-hidden font-sans"
      style={{
        backgroundImage: `url(${bgImage2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* White Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/50 to-white/70 pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* 1. Logo */}
        <div className="mb-6" data-aos="fade-down">
          <img
            src={logo}
            alt="Career PACE"
            className="h-12 md:h-16 object-contain mx-auto mix-blend-multiply"
          />
        </div>

        {/* 2. Heading */}
        <h1
          className="text-2xl md:text-5xl font-semibold text-[#1e2a5a] mb-8 md:mb-12 tracking-tight"
          data-aos="fade-up"
        >
          Trusted By Leading Brands
        </h1>

        {/* 3. Brand Logos Grid */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="w-full max-w-5xl mb-14 overflow-x-auto pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          <div className="min-w-[600px] md:min-w-full flex flex-col gap-3 md:gap-5">
            {/* Row 1 — 4 logos */}
            <div className="grid grid-cols-4 gap-3 md:gap-5">
            {brandLogos.slice(0, 4).map((brand, i) => (
              <div
                key={i}
                className="bg-white rounded-xl md:rounded-2xl shadow-md md:shadow-lg border border-gray-100 flex items-center justify-center p-3 md:p-5 h-16 md:h-28 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                data-aos="zoom-in"
                data-aos-delay={i * 100}
              >
                <img
                  src={brand.src}
                  alt={brand.alt}
                  className="max-h-10 md:max-h-20 w-auto object-contain"
                />
              </div>
            ))}
            </div>

            {/* Row 2 — 4 logos */}
            <div className="grid grid-cols-4 gap-3 md:gap-5">
            {brandLogos.slice(4, 8).map((brand, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center p-4 md:p-5 h-16 md:h-24 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                data-aos="zoom-in"
                data-aos-delay={i * 100 + 400}
              >
                <img
                  src={brand.src}
                  alt={brand.alt}
                  className="max-h-10 md:max-h-20 w-auto object-contain"
                />
              </div>
            ))}
          </div>

            {/* Row 3 — 5 logos */}
            <div className="grid grid-cols-5 gap-3 md:gap-5">
            {brandLogos.slice(8, 13).map((brand, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center p-4 md:p-5 h-16 md:h-24 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                data-aos="zoom-in"
                data-aos-delay={i * 100 + 800}
              >
                <img
                  src={brand.src}
                  alt={brand.alt}
                  className="max-h-16 md:max-h-20 w-auto object-contain"
                />
              </div>
            ))}
            </div>
          </div>
        </div>
        {/* Mobile Swipe Indicator Dots */}
        <div className="flex md:hidden justify-center items-center gap-2 -mt-6 mb-8 relative z-20">
          {[0, 1, 2].map((idx) => (
            <div 
              key={idx} 
              className={`h-2.5 rounded-full transition-all duration-300 ${activeIndex === idx ? 'w-8 bg-[#1e2a5a]' : 'w-2.5 bg-gray-400 opacity-60'}`}
            ></div>
          ))}
        </div>

        {/* 4. Bottom CTA */}
        <div data-aos="fade-up" data-aos-delay="500">
          <h3 className="text-xl md:text-3xl font-semibold text-[#1e2a5a] mb-6 tracking-tight">
            Ready to Scale Your Online University?
          </h3>
          <Link to="/contact" className="bg-[#b43238] hover:bg-[#9a2a2f] text-white px-6 py-2.5 md:px-8 md:py-3 rounded-full font-bold shadow-lg transition-transform transform hover:scale-105 active:scale-95 text-base md:text-lg inline-block">
            Contact Us Today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero15;
