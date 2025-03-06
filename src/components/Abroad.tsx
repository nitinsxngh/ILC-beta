'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const cards = [
  { id: 1, title: 'Explore Canada', description: 'Study in top universities.', image: '/countries/8.png' },
  { id: 2, title: 'USA Opportunities', description: 'Expand your career horizons.', image: '/countries/5.png' },
  { id: 3, title: 'Study in the UK', description: 'Rich academic heritage.', image: '/countries/6.png' },
  { id: 4, title: 'Australian Education', description: 'World-class institutions.', image: '/countries/7.png' }
];

export default function ScrollableCards() {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row w-full h-auto lg:h-screen items-center p-6 lg:p-10 gap-8">
      {/* Left Content (Stacks on Small Screens) */}
      <div className="w-full lg:w-1/3 space-y-4 text-center lg:text-left">
        <h2 className="text-3xl lg:text-4xl font-bold text-blue-900">ILC Study Abroad</h2>
        <h3 className="text-2xl lg:text-3xl font-bold text-yellow-600">Counselling & Visa Services</h3>
        <div className="border-2 border-yellow-600 p-5 rounded-xl shadow-lg">
          <h4 className="text-lg lg:text-xl font-semibold">Scope of Work</h4>
          <ul className="text-yellow-600 text-sm lg:text-base">
            <li>Student Profiling</li>
            <li>Country & Institution Selection</li>
            <li>Course Selection</li>
            <li>Admission Process Guidance</li>
            <li>Visa Application Support</li>
            <li>Pre-departure Briefings</li>
          </ul>
        </div>
      </div>

      {/* Right Section (Scroll for mobile, Slider for Desktop) */}
      <div className="w-full lg:w-2/3 overflow-hidden relative">
        {/* Desktop Slider Effect - Left to Right */}
        {isDesktop ? (
          <motion.div
            className="flex space-x-6 p-10"
            animate={{
              x: ['-100%', '0%'],
              transition: {
                duration: 10,
                repeat: Infinity,
                ease: 'linear'
              }
            }}
          >
            {[...cards, ...cards].map((card, index) => (
              <motion.div
                key={index}
                className="relative w-80 h-96 rounded-xl overflow-hidden shadow-lg cursor-pointer flex-shrink-0"
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  layout="fill"
                  objectFit="cover"
                  className="absolute top-0 left-0 w-full h-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
                  <h3 className="text-white text-xl font-bold">{card.title}</h3>
                  <p className="text-white text-sm">{card.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          // Mobile Horizontal Scroll
          <div className="flex space-x-4 p-4 overflow-x-auto flex-nowrap snap-x snap-mandatory scrollbar-hide">
            {cards.map((card, index) => (
              <motion.div
                key={card.id}
                className="relative w-64 h-80 rounded-xl overflow-hidden shadow-lg bg-white cursor-pointer flex-shrink-0 snap-start"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  layout="fill"
                  objectFit="cover"
                  className="absolute top-0 left-0 w-full h-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
                  <h3 className="text-white text-lg font-bold">{card.title}</h3>
                  <p className="text-white text-xs">{card.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
