"use client";

import { motion } from "framer-motion";

export default function Steps() {
  const steps = [
    { id: 1, title: "Assessment", desc: "Aptitude Test & Interview" },
    { id: 2, title: "Practice", desc: "Hands-on Practice, Scenarios & Test Cases" },
    { id: 3, title: "Soft Skills", desc: "Business Training & Communication" },
    { id: 4, title: "Assessments", desc: "Daily, Weekly & Monthly Tests" },
    { id: 5, title: "Hackathons", desc: "Real-Time Project Challenges" },
    { id: 6, title: "Guidance", desc: "Assessment, Monitoring & Final Evaluation" },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <div className="text-center text-white text-3xl font-bold mb-10">
        <span className="px-6 py-2 rounded-lg shadow-md">How It Works</span>
      </div>

      {/* Steps Container */}
      <div className="flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-8">
        {/* Skill Seeker */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <div className="p-4 rounded-lg shadow-md w-32 h-32 sm:w-28 sm:h-28 flex items-center justify-center">
            <img src="/7.svg" alt="Skill Seeker" className="w-16 h-16 sm:w-14 sm:h-14" />
          </div>
          <p className="text-yellow-400 font-bold mt-2 text-sm sm:text-base">Skill Seeker</p>
        </motion.div>

        {/* Steps */}
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="flex flex-col items-center"
          >
            <div className="border border-yellow-400 p-4 rounded-lg shadow-md w-32 h-32 sm:w-28 sm:h-28 flex flex-col items-center justify-center text-white">
              <h2 className="text-lg sm:text-lg font-bold">Step {step.id}</h2>
              <p className="text-xs sm:text-xs text-center mt-2">{step.desc}</p>
            </div>
          </motion.div>
        ))}

        {/* Skilled */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-col items-center"
        >
          <div className="p-4 rounded-lg shadow-md w-32 h-32 sm:w-28 sm:h-28 flex items-center justify-center">
            <img src="/8.svg" alt="Skilled" className="w-16 h-16 sm:w-14 sm:h-14" />
          </div>
          <p className="text-yellow-400 font-bold mt-2 text-sm sm:text-base">Skilled</p>
        </motion.div>
      </div>
    </div>
  );
}