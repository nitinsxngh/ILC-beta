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
        At ILC, we are revolutionizing education by prioritizing practical training over theoretical learning. Our platform serves as a lifetime support system for students, guiding them from their first year of education through PhD and beyond. We believe in bridging the gap between academic knowledge and industry expectations, ensuring students gain real-world exposure through internships, professional training, and mentorship opportunities.
        Beyond students, we extend our services to professors, educational institutions, and industry experts, offering a fully integrated support system that includes e-libraries, study abroad assistance, career counseling, HR services, and faculty mobility programs. Whether it is securing an internship, finding the right job, or hiring trained professionals at a lower HR cost, we are here to help!
      </motion.div>
    </div>
  );
};

export default About;
