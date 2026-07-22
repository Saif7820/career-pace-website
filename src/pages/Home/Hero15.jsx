import React from "react";
import ReusableCarousel from "../../components/ReusableCarousel";
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

        {/* 3. Brand Logos Carousel */}
        <div className="w-full max-w-5xl mb-10">
          <ReusableCarousel
            items={brandLogos}
            desktopGridClass="md:grid md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5"
            renderItem={(brand, i) => (
              <div
                key={i}
                className="bg-white rounded-xl md:rounded-2xl shadow-md md:shadow-lg border border-gray-100 flex items-center justify-center p-4 h-24 md:h-28 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 w-full"
                data-aos="zoom-in"
                data-aos-delay={(i % 5) * 100}
              >
                <img
                  src={brand.src}
                  alt={brand.alt}
                  className="max-h-12 md:max-h-16 w-auto object-contain"
                />
              </div>
            )}
          />
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

