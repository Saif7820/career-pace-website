import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { MdEmail, MdLocationOn } from 'react-icons/md';
import { IoCall } from 'react-icons/io5';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    partnershipType: "",
    message: "",
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Show success popup
    setIsSuccess(true);
    // Reset form after a few seconds or when user closes it
  };

  const closePopup = () => {
    setIsSuccess(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      organization: "",
      partnershipType: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-16 px-6 md:px-12 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Let’s Build Your <span className="text-[#b43238] drop-shadow-sm">Growth Story</span>
          </h1>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Partner with us to scale your online education ecosystem and reach new heights.
          </p>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT SIDE (Content) */}
          <div className="space-y-6 flex flex-col justify-center">
            {/* Email Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center justify-center hover:-translate-y-1 transition-transform duration-300">
              <div className="bg-[#e93e45] w-14 h-14 rounded-full flex items-center justify-center text-white mb-4">
                <MdEmail size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">Email Us</h3>
              <p className="text-gray-500 font-medium">info@careerpace.org</p>
            </div>

            {/* Call Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center justify-center hover:-translate-y-1 transition-transform duration-300 z-10 border border-green-50">
              <div className="bg-[#2ecc71] w-14 h-14 rounded-full flex items-center justify-center text-white mb-4 shadow-lg shadow-green-100">
                <IoCall size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">Call Us</h3>
              <p className="text-[#1e2a5a] text-lg font-bold">+91 9616605000</p>
            </div>

            {/* Location Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center justify-center hover:-translate-y-1 transition-transform duration-300">
              <div className="bg-[#0e766d] w-14 h-14 rounded-full flex items-center justify-center text-white mb-4">
                <MdLocationOn size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">Our Location</h3>
              <p className="text-gray-500 font-medium">Lucknow, Uttar Pradesh, India</p>
            </div>
          </div>

          {/* RIGHT SIDE (Form) */}
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-2xl p-8 md:p-10 rounded-3xl space-y-6 w-full relative z-10 border border-gray-100"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  placeholder="John Doe"
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-200 text-gray-900 p-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1e2a5a] focus:bg-white transition-all"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder="john@example.com"
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-200 text-gray-900 p-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1e2a5a] focus:bg-white transition-all"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  placeholder="+91 98765 43210"
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-200 text-gray-900 p-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1e2a5a] focus:bg-white transition-all"
                />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">Organization</label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  placeholder="Your Company/University"
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-200 text-gray-900 p-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1e2a5a] focus:bg-white transition-all"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">Partnership Type</label>
              <div className="relative">
                <select
                  name="partnershipType"
                  value={formData.partnershipType}
                  onChange={handleChange}
                  className="w-full appearance-none bg-gray-50 border border-gray-200 text-gray-900 p-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1e2a5a] focus:bg-white transition-all"
                >
                  <option value="" disabled>Select Partnership Type</option>
                  <option value="exclusive">Exclusive</option>
                  <option value="leads">Leads</option>
                  <option value="platform">Platform</option>
                  <option value="other">Other</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                value={formData.message}
                placeholder="How can we help you?"
                rows="4"
                onChange={handleChange}
                className="w-full bg-gray-50 border border-gray-200 text-gray-900 p-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1e2a5a] focus:bg-white transition-all resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#b43238] text-white py-4 rounded-xl text-lg font-semibold hover:bg-[#9a2a2f] hover:shadow-lg hover:shadow-red-500/30 transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Success Popup Modal */}
      {isSuccess && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-sm w-full text-center transform transition-all scale-100 animate-fade-in-up">
            <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-100 mb-6">
              <FaCheckCircle className="h-10 w-10 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
            <p className="text-gray-600 mb-8">
              Thank you for reaching out. Our team will get back to you shortly.
            </p>
            <button
              onClick={closePopup}
              className="w-full bg-[#1e2a5a] text-white py-3 px-4 rounded-xl font-medium hover:bg-[#151d3f] transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;