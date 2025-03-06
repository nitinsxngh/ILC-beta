'use client'
import React, { useRef, useEffect, useState } from 'react';
import { motion } from "framer-motion";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current; // Store ref.current in a variable

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true); // Ensure the animation plays only once
        } else if (!entry.isIntersecting && entry.boundingClientRect.top > 0) {
          setIsVisible(false);
          setHasAnimated(false); // Reset the animation when scrolling up
        }
      },
      { threshold: 0.5 }
    );

    // Start observing the element
    if (currentRef) observer.observe(currentRef);

    // Cleanup the observer on unmount or when ref changes
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [hasAnimated]);

  return (
    <div className='relative flex flex-col w-full h-screen p-12 lg:p-24 justify-center items-center bg-black z-10'>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className='flex flex-col text-justify text-base md:text-xl leading-[1.8] max-w-4xl md:leading-[2] text-gray-300'
      >
        Integrated Learning Circle (ILC) is a dynamic startup empowering the legal community through connections and comprehensive resources. We offer online and offline legal training, certified courses, and access to specialized expertise. Our mission is to bridge the gap between academic education and practical application by connecting professionals, companies, universities, and MNCs. Through this integrated approach, we equip individuals with the skills and knowledge to thrive in today’s competitive legal landscape.
      </motion.div>
    </div>
  );
};

export default About;
