// import React from "react";
// import img1 from "../../assets/images/hero1.png";
// import { FaBolt, FaQuoteLeft } from "react-icons/fa";

// const HeroSection = () => {
//   return (
//     // बैकग्राउंड कलर इमेज के हिसाब से Deep Purple/Indigo सेट किया गया है
//     <div className="w-full relative bg-[#3d1d88] overflow-hidden pt-20 pb-16 lg:pt-28 lg:pb-24">
      
//       {/* Decorative Background Blur - इमेज के जैसे शेप्स */}
//       <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#5a2db3] rounded-full filter blur-[100px] opacity-70 pointer-events-none"></div>
      
//       {/* Main Container */}
//       <div className="max-w-[1400px] mx-auto w-full flex flex-col lg:flex-row items-center px-6 md:px-12 lg:px-20 relative z-10">
        
//         {/* LEFT CONTENT */}
//         <div className="w-full lg:w-[55%] flex flex-col items-start text-left z-10">
          
//           {/* Badge - Light Purple Background */}
//           <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm font-medium mb-8" data-aos="fade-down">
//             <FaBolt className="text-yellow-400" />
//             <span>Empower Your Future with Skill-Based Learning</span>
//           </div>

//           {/* Heading */}
//           <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6" data-aos="fade-up">
//             Learn Skills <br />
//             That Shape Your <br />
//             Future!
//           </h1>

//           {/* Paragraph */}
//           <p className="text-gray-200 text-lg md:text-xl max-w-lg mb-10 leading-relaxed font-medium" data-aos="fade-up" data-aos-delay="100">
//             Explore interactive courses designed for real-world success. Learn, create, and upskill at your own pace.
//           </p>

//           {/* Button - Image के जैसे Bright Orange कलर में */}
//           <button className="bg-[#ff6b35] hover:bg-[#e85a2a] text-white px-10 py-4 rounded-full text-lg font-bold transition-all shadow-lg hover:shadow-orange-500/20 hover:-translate-y-1 mb-16" data-aos="fade-up" data-aos-delay="200">
//             Browse Courses
//           </button>

//           {/* Stats - White text as per image */}
//           <div className="flex flex-wrap items-center gap-8 md:gap-14 w-full border-t border-white/10 pt-8" data-aos="fade-up" data-aos-delay="300">
//             <div>
//               <h3 className="text-3xl md:text-4xl font-bold text-white mb-1">1000+</h3>
//               <p className="text-gray-300 text-xs uppercase tracking-wider">Recorded<br/>video</p>
//             </div>
//             <div>
//               <h3 className="text-3xl md:text-4xl font-bold text-white mb-1">1600+</h3>
//               <p className="text-gray-300 text-xs uppercase tracking-wider">Enrolled<br/>Students</p>
//             </div>
//             <div>
//               <h3 className="text-3xl md:text-4xl font-bold text-white mb-1">200+</h3>
//               <p className="text-gray-300 text-xs uppercase tracking-wider">Total<br/>Courses</p>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT CONTENT (IMAGE) */}
//         <div className="w-full lg:w-[45%] relative flex justify-center items-center mt-20 lg:mt-0 z-10" data-aos="zoom-in" data-aos-delay="400">
          
//           <div className="relative w-full max-w-[550px]">
//             {/* Main Image with rounded bottom right corner like image */}
//             <img
//               src={img1}
//               alt="Hero Visual"
//               className="w-full h-auto object-cover rounded-[20px] rounded-br-[150px] shadow-2xl relative z-10"
//             />

//             {/* Floating Card - Testimonial (White Card) */}
//             <div className="absolute bottom-10 -left-6 md:-left-16 bg-white p-5 rounded-2xl shadow-2xl flex flex-col gap-3 w-[260px] z-20 border border-gray-100">
//               <div className="flex items-center gap-3">
//                 <div className="w-10 h-10 overflow-hidden rounded-full border-2 border-orange-500">
//                   <img src="https://pravatar.cc" alt="Jack" className="w-full h-full object-cover" />
//                 </div>
//                 <div>
//                   <h4 className="text-sm font-bold text-gray-800">Jack Dawson</h4>
//                   <p className="text-[10px] text-gray-500 uppercase tracking-tighter">Student | Batch 25</p>
//                 </div>
//               </div>
//               <p className="text-xs text-gray-600 leading-relaxed font-medium italic">
//                 <FaQuoteLeft className="text-orange-500 inline mr-1 text-[10px]" />
//                 An amazing course that makes super easy to learn! Highly recommended for beginners.
//               </p>
//             </div>

//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default HeroSection;














import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import hero1 from '../../assets/images/hero1.png';
import hero2 from '../../assets/images/hero5.png';
import hero3 from '../../assets/images/hero6.png';
import logo from '../../assets/images/logo.png';

const slides = [
  {
    url: hero1,
    heading: "Architecting Modern Universities",
    subheading: "The Complete Growth Engine for Digital Education",
    description: "Career PACE Edutech Pvt Ltd partners with leading universities to drive admissions, manage operations, and scale online education through a complete end-to-end ecosystem."
  },
  {
    url: hero2,
    heading: "Unlocking Nationwide Enrollments",
    subheading: "Bridging Top Institutions with Aspiring Learners",
    description: "We help institutions reach thousands of aspiring students across India through our specialized digital marketing and enrollment strategies."
  },
  {
    url: hero3,
    heading: "Elevating Academic Operations",
    subheading: "Seamless End-to-End Solutions for Higher Ed",
    description: "From lead generation to academic management, we provide a robust framework for universities to thrive in the digital age."
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const minSwipeDistance = 40;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // Changes every 6 seconds
    return () => clearInterval(timer);
  }, []);

  const handleDragStart = (clientX) => {
    setTouchEnd(null);
    setTouchStart(clientX);
    setIsDragging(true);
  };

  const handleDragMove = (clientX) => {
    if (isDragging) {
      setTouchEnd(clientX);
    }
  };

  const handleDragEnd = () => {
    if (!isDragging || touchStart === null || touchEnd === null) {
      setIsDragging(false);
      return;
    }
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) {
      // Swiped left -> next slide
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    } else if (distance < -minSwipeDistance) {
      // Swiped right -> prev slide
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }
    setIsDragging(false);
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div 
      className="relative bg-white overflow-hidden min-h-[60vh] md:min-h-[85vh] flex items-center select-none cursor-grab active:cursor-grabbing"
      onTouchStart={(e) => handleDragStart(e.targetTouches[0].clientX)}
      onTouchMove={(e) => handleDragMove(e.targetTouches[0].clientX)}
      onTouchEnd={handleDragEnd}
      onMouseDown={(e) => handleDragStart(e.clientX)}
      onMouseMove={(e) => handleDragMove(e.clientX)}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
    >
      
      {/* Background Image Layer (Carousel) */}
      <div className="absolute top-0 right-0 w-full lg:w-[70%] h-full z-0 bg-gray-100">
        <AnimatePresence mode="wait">
          <motion.img 
            key={currentSlide}
            src={slides[currentSlide].url}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            alt={`Carousel slide ${currentSlide + 1}`} 
            className="absolute inset-0 w-full h-full object-cover object-center lg:object-right pointer-events-none"
          />
        </AnimatePresence>
        
        {/* Gradient overlays to blend the image into the white background */}
        {/* On mobile: more vertical gradient to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent lg:via-white/50 z-10 hidden lg:block pointer-events-none"></div>
        <div className="absolute inset-0 bg-white/85 sm:bg-white/70 lg:hidden z-10 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 pointer-events-none"></div>
        
        {/* Carousel Indicators (Dots) */}
        <div className="absolute bottom-[10%] lg:bottom-[25%] right-[5%] lg:right-[15%] flex gap-2 z-30">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-500 cursor-pointer ${currentSlide === idx ? 'bg-[#232d69] w-8' : 'bg-[#232d69]/30 hover:bg-[#232d69]/60'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Main white background for the left side (LG only) */}
      <div className="absolute top-0 left-0 w-full lg:w-[45%] h-full bg-white z-0 hidden lg:block" style={{ maskImage: 'linear-gradient(to right, black 80%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, black 80%, transparent 100%)' }}></div>

      {/* Text Content */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full relative z-20 py-10 md:py-24 lg:py-32">
        <div className="max-w-2xl">
          {/* Logo */}
          <div className="mb-6">
            <img src={logo} alt="Career PACE" className="h-12 md:h-16 object-contain" />
          </div>
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentSlide}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col"
            >
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[4xl] font-bold font-heading text-[#232d69] leading-[1.2] sm:leading-[1.1] mb-3 sm:mb-6 tracking-tight">
                {slides[currentSlide].heading.split(' ').map((word, i) => (
                  <span key={i} className="inline-block mr-[0.2em]">{word}</span>
                ))}
              </h1>
              
              <h2 className="text-lg sm:text-2xl md:text-3xl text-gray-700 mb-4 sm:mb-8 font-medium leading-[1.3]">
                {slides[currentSlide].subheading}
              </h2>
              
              <p className="text-sm sm:text-[17px] text-gray-600 mb-6 sm:mb-10 max-w-[500px] leading-relaxed">
                {slides[currentSlide].description}
              </p>
              
              <div className="flex flex-wrap items-center gap-3 md:gap-4 mt-2">
                <Link to="/partners" className="bg-[#b43238] hover:bg-[#9a2a2f] text-white font-bold py-2.5 px-6 md:px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 active:scale-95 text-sm md:text-base inline-block text-center">
                  Become Our Exclusive Partner
                </Link>
                <Link to="/ecosystem" className="bg-[#483a8e] hover:bg-[#392e71] text-white font-bold py-2.5 px-6 md:px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 active:scale-95 text-sm md:text-base inline-block text-center">
                  Explore Our Ecosystem
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Wave & Chart Graphics - Hidden on very small screens or adjusted */}
      <div className="absolute bottom-0 right-0 w-[140%] lg:w-[70%] h-auto z-10 pointer-events-none transform translate-x-[15%] lg:translate-x-0 opacity-40 lg:opacity-100">
        <svg viewBox="0 0 1440 400" className="w-full h-auto drop-shadow-2xl" preserveAspectRatio="none">
          <path fill="url(#wave-gradient-1)" fillOpacity="0.8" d="M0,300L80,280C160,260,320,220,480,210C640,200,800,220,960,210C1120,200,1280,160,1360,140L1440,120L1440,400L1360,400C1280,400,1120,400,960,400C800,400,640,400,480,400C320,400,160,400,80,400L0,400Z"></path>
          <path fill="url(#wave-gradient-2)" fillOpacity="1" d="M0,400L120,380C240,360,480,320,720,310C960,300,1200,320,1320,330L1440,340L1440,400L1320,400C1200,400,960,400,720,400C480,400,240,400,120,400L0,400Z"></path>
          
          <defs>
            <linearGradient id="wave-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
              <stop offset="40%" stopColor="#651fff" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#1a237e" stopOpacity="0.9" />
            </linearGradient>
            <linearGradient id="wave-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
              <stop offset="50%" stopColor="#6b52b3" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#232d69" stopOpacity="1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Bar Charts overlayed on wave - Desktop only */}
      <div className="absolute bottom-10 right-[5%] lg:right-[15%] hidden md:flex items-end gap-[10px] z-20 h-[100px] lg:h-[140px] pointer-events-none opacity-60 lg:opacity-90">
        <div className="w-[12px] lg:w-6 h-[25%] bg-[#232d69]/20 lg:bg-white/20 rounded-t-sm shadow-[0_0_10px_rgba(255,255,255,0.2)]"></div>
        <div className="w-[12px] lg:w-6 h-[35%] bg-[#232d69]/30 lg:bg-white/30 rounded-t-sm shadow-[0_0_10px_rgba(255,255,255,0.2)]"></div>
        <div className="w-[12px] lg:w-6 h-[50%] bg-[#232d69]/40 lg:bg-white/40 rounded-t-sm shadow-[0_0_10px_rgba(255,255,255,0.2)]"></div>
        <div className="w-[12px] lg:w-6 h-[65%] bg-[#232d69]/50 lg:bg-white/50 rounded-t-sm shadow-[0_0_10px_rgba(255,255,255,0.2)]"></div>
        <div className="w-[12px] lg:w-6 h-[80%] bg-[#232d69]/70 lg:bg-white/70 rounded-t-sm shadow-[0_0_10px_rgba(255,255,255,0.3)]"></div>
        <div className="w-[12px] lg:w-6 h-[100%] bg-[#232d69]/90 lg:bg-white/90 rounded-t-sm shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>
      </div>

      {/* Upward Arrow - Desktop only */}
      <div className="absolute bottom-[40px] lg:bottom-[60px] right-[5%] lg:right-[15%] w-[120px] lg:w-[220px] h-[80px] lg:h-[130px] z-30 pointer-events-none opacity-60 lg:opacity-90 hidden sm:block">
        <svg viewBox="0 0 200 100" fill="none" className="w-full h-full drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]">
          <path d="M10,95 Q100,50 190,15" stroke="currentColor" className="text-[#232d69] lg:text-white/80" strokeWidth="3" strokeLinecap="round" />
          <path d="M175,10 L195,10 L195,30" stroke="currentColor" className="text-[#232d69] lg:text-white/80" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

    </div>
  );
};

export default Hero;