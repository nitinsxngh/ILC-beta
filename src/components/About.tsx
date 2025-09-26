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
        ILC is where education stops being theory and starts becoming your reality—through psychometric insights, verified resumes, and real-world experiences. We empower them with a lifetime ecosystem of growth that starts from their first class to their first job, and far beyond.
        We begin by helping students discover their true strengths through scientific psychometric tests, giving them clarity about their personality, aptitude, and career path. From there, learners step into hands-on experiential learning—live projects, real-world case studies, practical training and E- library designed to bridge the gap between academic knowledge and industry expectations.
        Every learner is equipped with a resume designed and verified through DigiLocker, ensuring authenticity and trust. Through our academic ecosystem and professional networking community, students connect with mentors, peers, and companies on a verified platform.
        For students, it means Verified skills & limitless opportunities.
        For institutions, it means stronger outcomes.
        For companies, it means a reliable pool of job-ready professionals
        ILC isn&apos;t just rethinking education—it&apos;s reimagining the entire journey from classroom to career.
      </motion.div>
    </div>
  );
};

export default About;
