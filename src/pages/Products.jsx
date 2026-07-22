import React from "react";
import { FaSearch, FaHandsHelping, FaCogs, FaPiggyBank } from "react-icons/fa";
import Hero7 from "./Home/Hero7";

const Products = () => {
  const features = [
    { icon: <FaSearch />, title: "Program Discovery", desc: "Easily find and compare programs across various institutions." },
    { icon: <FaHandsHelping />, title: "Admission Support", desc: "Step-by-step guidance through the entire application process." },
    { icon: <FaCogs />, title: "CRM System", desc: "Advanced tools for colleges to manage student pipelines efficiently." },
    { icon: <FaPiggyBank />, title: "Education Loans", desc: "Seamless financial assistance and loan processing for students." },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero7 />
      <div className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2" data-aos="fade-right">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              College <span className="text-[#1e2a5a]">Sangam</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              A revolutionary platform connecting students, colleges, and universities in one seamless digital ecosystem.
            </p>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-l-4 border-l-[#b43238]">
              <p className="text-gray-700 italic">
                "Bridging the gap between aspiration and education through technology."
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6" data-aos="fade-up">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="text-3xl text-[#b43238] mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Products;