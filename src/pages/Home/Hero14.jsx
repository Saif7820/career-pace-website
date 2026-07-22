import React from "react";
import logo from "../../assets/images/logo.png";
import bgImage from "../../assets/images/bgImage.png";

const Hero14 = () => {
  return (
    <div
      className="relative w-full min-h-[50vh] md:min-h-[85vh] overflow-hidden font-sans flex flex-col"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "right center",
      }}
    >
      {/* White Gradient Overlay — stronger for crisp text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-white from-[10%] via-white/95 via-[50%] to-white/30 pointer-events-none z-0"></div>
      {/* Bottom solid fade for CTA area */}
      <div className="absolute bottom-0 left-0 w-full h-56 bg-gradient-to-t from-white via-white to-transparent pointer-events-none z-0"></div>

      {/* Top Logo */}
      <div className="relative z-10 flex justify-center pt-10 mb-6" data-aos="fade-down">
        <img
          src={logo}
          alt="Career PACE"
          className="h-12 md:h-16 object-contain mix-blend-multiply"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 max-w-[1400px] mx-auto w-full px-6 md:px-12 flex flex-col justify-center">
        <div className="max-w-xl">
          {/* Heading */}
          <h1
            className="text-2xl md:text-5xl font-semibold text-[#1e2a5a] mb-4 md:mb-6 leading-snug tracking-tight"
            data-aos="fade-up"
          >
            Partner with <span className="text-[#2b4b8a]">Career PACE</span>
          </h1>

          {/* Subtext */}
          <p
            className="text-gray-700 text-base md:text-lg max-w-md mb-10 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Empowering online universities with comprehensive solutions for
            growth and student success.
          </p>

          {/* Checklist */}
          <div className="space-y-6" data-aos="fade-up" data-aos-delay="200">
            {["Increase Enrollments", "Boost Retention", "Expand Reach"].map(
              (item, index) => (
                <div key={index} className="flex items-center gap-3">
                  {/* Maroon check circle */}
                  <div className="w-7 h-7 flex-shrink-0 flex items-center justify-center bg-[#b43238] rounded-full shadow-md">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-lg md:text-xl font-semibold text-[#1e2a44] tracking-wide">
                    {item}
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div
        className="relative z-10 w-full text-center pb-10 pt-6"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <h3 className="text-xl md:text-3xl font-semibold text-[#1e2a5a] mb-6 tracking-tight">
          Ready to Elevate Your Online Education?
        </h3>
          <a href="/contact" className="bg-[#b43238] hover:bg-[#9a2a2f] text-white px-6 py-2.5 md:px-8 md:py-3 rounded-full font-bold shadow-lg transition-transform transform hover:scale-105 active:scale-95 text-base md:text-lg inline-block">
            Get in Touch
          </a>
      </div>
    </div>
  );
};

export default Hero14;
