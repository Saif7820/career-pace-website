import React from "react";
import logo from "../../assets/images/logo.png";
import bgImage from "../../assets/images/bgImage.png"; // आपकी नई बैकग्राउंड इमेज

const Hero9 = () => {
  return (
    <div className="relative w-full min-h-[50vh] md:min-h-[80vh] flex items-center overflow-hidden">
      
      {/* Background Image - पूरी विड्थ में सेट की गई है */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'right center', // इमेज का मुख्य हिस्सा (लोग) दाएं दिखेगा
        }}
      >
        {/* Overlay for better text readability on mobile */}
        <div className="absolute inset-0 bg-white/60 md:bg-transparent md:bg-gradient-to-r md:from-white md:via-white/80 md:to-transparent"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 md:px-12 py-10 md:py-16">
        <div className="max-w-2xl">
          
          {/* Logo */}
          <div className="mb-8" data-aos="fade-down">
            <img
              src={logo}
              alt="Career PACE"
              className="h-12 md:h-16 object-contain mix-blend-multiply" // लोगो को transparent दिखाने के लिए
            />
          </div>

          {/* Heading Section */}
          <div className="space-y-4">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold font-heading text-[#1e2a5a] leading-tight" data-aos="fade-up">
              Powering the Future  <br />
              <span className="text-[#2b3a8c]">Online Universities</span>
            </h1>

            <h2 className="text-lg md:text-2xl text-gray-700 font-semibold max-w-lg" data-aos="fade-up" data-aos-delay="100">
              Building Exclusive Growth Ecosystems for Digital Education
            </h2>

            <p className="text-sm md:text-lg text-gray-600 max-w-xl leading-relaxed" data-aos="fade-up" data-aos-delay="200">
              Career PACE Edutech Pvt Ltd partners with leading universities to drive admissions,
              manage operations, and scale online education through a complete end-to-end ecosystem.
            </p>
          </div>

          {/* Buttons Group */}
          <div className="flex flex-wrap gap-4 mt-8" data-aos="fade-up" data-aos-delay="300">
            <a href="/partners" className="bg-[#b43238] hover:bg-[#9a2a2f] text-white font-bold py-3 px-6 md:px-8 rounded-lg shadow-lg transition-transform hover:scale-105 inline-block">
              Become Our Exclusive Partner
            </a>

            <a href="/ecosystem" className="bg-[#483a8e] hover:bg-[#392e71] text-white font-bold py-3 px-6 md:px-8 rounded-lg shadow-lg transition-transform hover:scale-105 inline-block">
              Explore Our Ecosystem
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero9;
