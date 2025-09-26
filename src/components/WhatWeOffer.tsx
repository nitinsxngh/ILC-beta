'use client';
import React from 'react';
import { motion } from 'framer-motion';

const WhatWeOffer = () => {
  const services = [
    {
      title: "CV Builder",
      description: "Create professional, ATS-optimized resumes that stand out to employers",
      icon: "📄",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Psychometric Test",
      description: "Discover your true strengths through scientific personality and aptitude assessments",
      icon: "🧠",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Practical Training",
      description: "Hands-on experiential learning with live projects and real-world case studies",
      icon: "🛠️",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Employment Assistance",
      description: "Connect with verified employers and get job-ready through our professional network",
      icon: "💼",
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Publication Support",
      description: "Get your research and work published with our academic publication assistance",
      icon: "📚",
      color: "from-red-500 to-red-600"
    },
    {
      title: "E-Library Access",
      description: "Comprehensive digital library with resources for continuous learning",
      icon: "📖",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            What We <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Offer</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Comprehensive solutions designed to bridge the gap between academic knowledge and industry expectations
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-gray-900 rounded-2xl p-8 h-full border border-gray-800 hover:border-gray-700 transition-all duration-300 group-hover:transform group-hover:scale-105">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {service.description}
                </p>
                <div className="mt-6">
                  <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-6 py-3 rounded-xl font-semibold hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 transform hover:scale-105">
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 border border-gray-700"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of students who have already discovered their true potential with ILC&apos;s comprehensive ecosystem
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 transform hover:scale-105">
              Get Started Now
            </button>
            <button className="border-2 border-yellow-500 text-yellow-500 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-500 hover:text-black transition-all duration-300">
              Download Brochure
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
