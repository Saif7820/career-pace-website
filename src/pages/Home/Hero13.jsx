import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import bgImage from "../../assets/images/bgImage.png";
import heroPeople from "../../assets/images/heroPeople.png";

const Hero13 = () => {
  return (
    <div 
      className="relative w-full min-h-[50vh] md:min-h-[85vh] overflow-hidden font-sans"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.8), rgba(240,245,255,0.9)), url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Top Logo Section */}
      <div className="flex justify-center pt-8 mb-6" data-aos="fade-down">
        <img src={logo} alt="Career PACE" className="h-12 md:h-16 object-contain" />
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between py-10 pb-24 md:pb-10">
        
        {/* LEFT SIDE: Text and Checklist */}
        <div className="w-full md:w-1/2 text-left z-10">
          <h1 className="text-2xl md:text-5xl font-bold text-[#1e2a5a] mb-4 leading-tight" data-aos="fade-up">
            Partner with <span className="text-[#3b5998]">Career PACE</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-lg mb-10 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
            Empowering online universities with comprehensive solutions for growth and student success.
          </p>

          {/* Checklist */}
          <div className="space-y-4 mb-12" data-aos="fade-up" data-aos-delay="200">
            {[
              "Increase Enrollments",
              "Boost Retention",
              "Expand Reach"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 flex items-center justify-center bg-[#b43238] rounded-full shadow-md">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-lg md:text-2xl font-semibold text-[#1e2a44]">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE: People Image */}
        <div className="w-full md:w-1/2 relative flex justify-end" data-aos="fade-left" data-aos-delay="300">
           <img 
            src={heroPeople} 
            alt="Students" 
            className="w-full max-w-[550px] object-contain drop-shadow-2xl" 
           />
        </div>

      </div>

      {/* Bottom CTA Section */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full text-center px-4" data-aos="fade-up" data-aos-delay="400">
        <h3 className="text-xl md:text-2xl font-bold text-[#1e2a5a] mb-4">
          Ready to Elevate Your Online Education?
        </h3>
        <Link to="/contact" className="bg-[#b43238] hover:bg-[#9a2a2f] text-white px-6 py-2.5 md:px-8 md:py-3 rounded-full font-bold shadow-lg transition-transform transform hover:scale-105 active:scale-95 text-base md:text-lg inline-block">
          Get in Touch
        </Link>
      </div>
    </div>
  );
};

export default Hero13;
