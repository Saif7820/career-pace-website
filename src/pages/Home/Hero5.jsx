import React from "react";
import ReusableCarousel from "../../components/ReusableCarousel";
import bgImage from "../../assets/images/bgImage.png";
import Logo from "../../assets/images/logo.png";
import icon1 from "../../assets/images/icon1.png";
import icon3 from "../../assets/images/icon3.png";
import icon4 from "../../assets/images/icon4.png";

import { FaRegCheckCircle, FaRocket, FaUsers, FaMapMarkedAlt } from "react-icons/fa";

const cardsData = [
  {
    id: 1,
    icon: <FaRocket size={34} className="opacity-95" />,
    content: (
      <div className="flex flex-col justify-center">
        <h3 className="text-xl md:text-2xl font-bold leading-none mb-1 tracking-tight">100,000+</h3>
        <p className="text-xs md:text-sm font-semibold opacity-90">Leads Generated</p>
      </div>
    ),
    bg: icon1,
    delay: 600,
  },
  {
    id: 2,
    icon: <FaUsers size={34} className="opacity-95" />,
    content: (
      <>
        <h3 className="text-xl md:text-2xl font-bold tracking-tight">15+</h3>
        <div className="h-10 w-px bg-white/40 mx-2"></div>
        <div className="flex flex-col justify-center">
          <p className="text-sm font-bold leading-none mb-1 tracking-wide">University</p>
          <p className="text-sm font-bold leading-none tracking-wide">Partners</p>
        </div>
      </>
    ),
    bg: icon3,
    delay: 700,
  },
  {
    id: 3,
    icon: <FaMapMarkedAlt size={34} className="opacity-95" />,
    content: <p className="text-lg md:text-xl font-bold tracking-tight">Pan-India Reach</p>,
    bg: icon4,
    delay: 800,
  },
];

const Hero5 = () => {
  return (
    <div className="relative w-full min-h-fit lg:min-h-screen py-8 lg:py-0 bg-white font-sans overflow-hidden flex flex-col justify-between">
      
      {/* Background Image Layer (Desktop Only) */}
      <div 
        className="hidden lg:block absolute inset-0 z-0"
        style={{
           backgroundImage: `url(${bgImage})`,
           backgroundSize: 'cover',
           backgroundPosition: 'center right',
        }}
      ></div>

         
      {/* Left White Gradient Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 via-[65%] to-transparent w-full lg:w-[85%] pointer-events-none z-0"></div>
      
      {/* Bottom Gradient overlay to ensure bottom text visibility */}
      <div className="absolute bottom-0 left-0 w-full h-56 bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none z-0"></div>

      {/* TOP/LEFT CONTENT AREA */}
      <div className="max-w-[1400px] mx-auto w-full relative z-10 px-6 md:px-12 pt-16 pb-12 flex flex-col justify-start">
        <div className="max-w-2xl flex flex-col items-start">
        
        {/* Logo */}
        <div className="mb-8" data-aos="fade-down">
          <img src={Logo} alt="Career PACE Logo" className="h-12 md:h-16 object-contain mix-blend-multiply opacity-90" />
        </div>

        {/* Heading */}
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-[#1e2a5a] mb-4 tracking-tight" data-aos="fade-right">
          About Career PACE Edutech Pvt Ltd
        </h1>

        {/* Large Paragraph */}
        <p className="text-base md:text-xl text-gray-900 leading-relaxed mb-6 font-medium max-w-2xl" data-aos="fade-right" data-aos-delay="100">
          Career PACE Edutech Pvt Ltd is a pioneering edtech company dedicated
          to transforming higher education for the digital age.
        </p>

        {/* Detailed Points */}
        <div className="space-y-4 max-w-2xl">
          <div className="flex items-start gap-3" data-aos="fade-up" data-aos-delay="200">
            <FaRegCheckCircle className="text-[#b43238] text-xl mt-1 flex-shrink-0" />
            <p className="text-gray-900 text-sm md:text-lg leading-relaxed">
              <span className="font-semibold text-[#1e2a5a]">Empowering Universities:</span> We partner exclusively with top universities to develop, manage, and scale their online education offerings.
            </p>
          </div>

          <div className="flex items-start gap-3" data-aos="fade-up" data-aos-delay="300">
            <FaRegCheckCircle className="text-[#b43238] text-xl mt-1 flex-shrink-0" />
            <p className="text-gray-900 text-sm md:text-lg leading-relaxed">
              <span className="font-semibold text-[#1e2a5a]">Driving Growth:</span> We generate qualified leads, manage the student lifecycle, and provide cutting-edge technology solutions to enhance enrollment and student outcomes.
            </p>
          </div>

          <div className="flex items-start gap-3" data-aos="fade-up" data-aos-delay="400">
            <FaRegCheckCircle className="text-[#b43238] text-xl mt-1 flex-shrink-0" />
            <p className="text-gray-900 text-sm md:text-lg leading-relaxed">
              <span className="font-semibold text-[#1e2a5a]">Expertise & Experience:</span> With a leadership team boasting decades of experience in education and technology, we deliver unmatched expertise and support.
            </p>
          </div>
        </div>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="relative z-20 w-full px-4 pb-12 flex flex-col items-center mt-auto">
        <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#1e2a5a] text-center mb-8 drop-shadow-sm" data-aos="zoom-in" data-aos-delay="500">
          Join us in revolutionizing the future of online education!
        </p>

        {/* CARDS */}
        <div className="w-full max-w-5xl">
          <ReusableCarousel
            items={cardsData}
            desktopGridClass="md:grid md:grid-cols-3 gap-4 lg:gap-6"
            renderItem={(item) => (
              <div 
                key={item.id}
                className="flex items-center gap-3 text-white px-6 py-4 rounded-2xl shadow-xl w-full hover:-translate-y-1 hover:shadow-2xl transition-all border border-white/20"
                style={{ backgroundImage: `url(${item.bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                data-aos="fade-up" data-aos-delay={item.delay}
              >
                {item.icon}
                {item.content}
              </div>
            )}
          />
        </div>
      </div>
      
    </div>
  );
};

export default Hero5;
