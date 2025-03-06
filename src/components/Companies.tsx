"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import "locomotive-scroll/dist/locomotive-scroll.css";
import gsap from "gsap";
import Image from "next/image"; // Import the Image component from Next.js

const logos = [
  "/logos/1.svg",
  "/logos/2.svg",
  "/logos/3.svg",
  "/logos/4.svg",
  "/logos/5.svg",
  "/logos/6.svg",
];

export default function InfiniteCompanies() {
  const containerRef = useRef(null);
  const slideRef = useRef<HTMLDivElement | null>(null);
  const lenis = useRef<Lenis | null>(null);

  useEffect(() => {
    lenis.current = new Lenis({
      lerp: 0.1,
    });

    function raf(time: number) {
      lenis.current?.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const slide = slideRef.current;
    if (!slide) return;

    gsap.to(slide, {
      x: "-100%",
      duration: 20, // Slower flow by increasing duration
      ease: "linear",
      repeat: -1,
      repeatDelay: 0,
    });
  }, []);

  // Duplicate the logos array enough times to fill the container
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <div ref={containerRef} className="relative overflow-hidden py-10">
      <div className="w-[200%] flex whitespace-nowrap">
        <motion.div
          ref={slideRef}
          className="flex space-x-10 companies-slide"
          style={{ whiteSpace: "nowrap" }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div key={index} className="px-6 py-4 flex items-center justify-center">
              <Image
                src={logo}
                alt={`Company Logo ${index + 1}`}
                width={200} // Slightly reduced size for better spacing
                height={200}
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
