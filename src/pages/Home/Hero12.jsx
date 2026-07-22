import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import { IoCall } from 'react-icons/io5';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';
import bgImage2 from '../../assets/images/bgImage2.png';

const Hero12 = () => {
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

  return (
    <div className="relative w-full font-sans py-10 md:py-16 px-6 flex flex-col items-center overflow-hidden" style={{ backgroundImage: `url(${bgImage2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-transparent pointer-events-none z-0"></div>

      {/* 1. Header Section */}
      <div className="relative z-10 flex flex-col items-center text-center mb-12" data-aos="fade-down">
        <img src={logo} alt="Career PACE" className="h-14 md:h-16 mb-6 object-contain" />
        {/* एक हेडिंग हटा दी गई है */}
        <h1 className="text-3xl md:text-5xl font-semibold text-[#1e2a5a] mb-3 md:mb-4" data-aos="fade-up" data-aos-delay="100">Contact Us</h1>
        {/* Contact Us के नीचे नया पैराग्राफ */}
        <p className="text-gray-500 text-lg max-w-xl leading-relaxed" data-aos="fade-up" data-aos-delay="200">
          Let's discuss how we can help you achieve your online education goals.
        </p>
      </div>

      {/* 2. Contact Cards Section */}
      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="relative z-10 flex md:grid md:grid-cols-3 gap-6 md:gap-8 w-full max-w-5xl items-center mb-16 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-8 md:pb-0 px-2 md:px-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        
        {/* Phone Card */}
        <div className="bg-white rounded-3xl shadow-xl p-5 sm:p-8 md:p-10 flex flex-col items-center text-center h-56 sm:h-64 md:h-72 justify-center hover:-translate-y-1 transition-transform duration-300 w-[80vw] min-w-[260px] max-w-[320px] md:w-full md:min-w-0 shrink-0 md:shrink snap-center" data-aos="fade-up" data-aos-delay="400">
          <div className="bg-[#e93e45] w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-white mb-3 md:mb-6">
            <MdEmail size={26} />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1 md:mb-2">Email Us</h3>
          <p className="text-gray-500 text-sm font-medium break-all">info@careerpace.com</p>
        </div>

        {/* Call Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-5 sm:p-8 md:p-12 flex flex-col items-center text-center border-2 border-orange-50 h-60 sm:h-72 md:h-80 justify-center transform md:scale-105 z-10 w-[80vw] min-w-[260px] max-w-[320px] md:w-full md:min-w-0 shrink-0 md:shrink snap-center" data-aos="zoom-in" data-aos-delay="400">
          <div className="bg-[#2ecc71] w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-white mb-3 md:mb-6 shadow-lg shadow-green-100">
            <IoCall size={28} />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1 md:mb-2">Call Us</h3>
          <p className="text-[#1e2a5a] text-lg sm:text-xl font-bold">+91 1234567890</p>
        </div>

        {/* Location Card */}
        <div className="bg-white rounded-3xl shadow-xl p-5 sm:p-8 md:p-10 flex flex-col items-center text-center h-56 sm:h-64 md:h-72 justify-center hover:-translate-y-1 transition-transform duration-300 w-[80vw] min-w-[260px] max-w-[320px] md:w-full md:min-w-0 shrink-0 md:shrink snap-center" data-aos="fade-left" data-aos-delay="500">
          <div className="bg-[#0e766d] w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-white mb-3 md:mb-6">
            <MdLocationOn size={26} />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1 md:mb-2">Our Location</h3>
          <p className="text-gray-500 text-sm font-medium">New Delhi, India</p>
        </div>

      </div>
      {/* Mobile Swipe Indicator Dots */}
      <div className="flex md:hidden justify-center items-center gap-2 -mt-6 mb-8 relative z-20">
        {[0, 1, 2].map((idx) => (
          <button 
            key={idx} 
            onClick={() => scrollToSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${activeIndex === idx ? 'w-8 bg-[#1e2a5a]' : 'w-2.5 bg-gray-400 opacity-60'}`}
          ></button>
        ))}
      </div>

      {/* 3. Follow Us Section */}
      <div className="relative z-10 flex flex-col items-center mb-12" data-aos="fade-up" data-aos-delay="600">
        <span className="text-gray-400 font-bold tracking-widest text-sm mb-6 uppercase">Follow Us</span>
        <div className="flex space-x-6">
          <a href="#" className="bg-white p-3 rounded-full shadow-md text-blue-600 hover:scale-110 transition-transform"><FaFacebookF size={20} /></a>
          <a href="#" className="bg-white p-3 rounded-full shadow-md text-blue-800 hover:scale-110 transition-transform"><FaLinkedinIn size={20} /></a>
          <a href="#" className="bg-white p-3 rounded-full shadow-md text-pink-600 hover:scale-110 transition-transform"><FaInstagram size={20} /></a>
          <a href="#" className="bg-white p-3 rounded-full shadow-md text-red-600 hover:scale-110 transition-transform"><FaYoutube size={20} /></a>
        </div>
      </div>

      {/* 4. Bottom Text and Button */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl" data-aos="zoom-in" data-aos-delay="700">
        <p className="text-2xl md:text-3xl font-bold text-[#1e2a5a] mb-8">
          Let's work together to transform higher education!
        </p>
        <Link to="/contact" className="bg-[#b43238] hover:bg-[#9a2a2f] text-white text-lg md:text-xl font-bold py-3 px-8 md:py-4 md:px-16 rounded-xl shadow-xl transition-all transform hover:scale-105 active:scale-95 inline-block">
          Get In Touch
        </Link>
      </div>

    </div>
  );
};

export default Hero12;
