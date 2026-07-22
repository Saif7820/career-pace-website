import React from "react";
import { FaGraduationCap, FaHandshake, FaChartLine } from "react-icons/fa";
import Hero5 from "./Home/Hero5";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero5 />
      {/* Hero Section */}
      <section className="relative py-20 px-6 md:px-12 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50 rounded-l-full blur-3xl opacity-60"></div>
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1e2a5a] leading-tight">
              About <span className="text-[#b43238]">Career PACE</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-lg">
              We help universities scale faster, smarter, and more sustainably. Our holistic approach bridges the gap between students seeking quality education and institutions offering it.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 transform hover:-translate-y-2 transition duration-300">
               <FaGraduationCap className="text-4xl text-[#1e2a5a] mb-4" />
               <h3 className="font-bold text-xl text-gray-900">Mission</h3>
               <p className="text-sm text-gray-600 mt-2">To empower universities with a complete growth ecosystem.</p>
             </div>
             <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 transform hover:-translate-y-2 transition duration-300 mt-8">
               <FaChartLine className="text-4xl text-[#b43238] mb-4" />
               <h3 className="font-bold text-xl text-gray-900">Vision</h3>
               <p className="text-sm text-gray-600 mt-2">To become India's most trusted partner for educational expansion.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "End-to-end ecosystem", desc: "A seamless transition from lead generation to admission.", icon: "🔄" },
              { title: "Proven success", desc: "Trusted by top institutions across the country.", icon: "📈" },
              { title: "Scalable tech", desc: "Built on robust technology that grows with you.", icon: "🚀" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100 text-left">
                <div className="text-4xl mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#1e2a5a] mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;