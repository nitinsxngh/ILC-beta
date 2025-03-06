"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Reports() {
  const stats = [
    { id: 1, value: "300+", label: "Mentors" },
    { id: 2, value: "1000+", label: "Students" },
    { id: 3, value: "120+", label: "Proffesionals" },
    { id: 4, value: "60+", label: "Courses" },
  ];

  const refs = useRef<(HTMLParagraphElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });

  useEffect(() => {
    if (isInView) {
      refs.current.forEach((ref, index) => {
        if (ref) {
          gsap.from(ref, {
            textContent: 0,
            duration: 2,
            ease: "power1.out",
            snap: { textContent: 1 },
            stagger: 0.2,
            delay: index * 0.3,
            onUpdate: function () {
              if (ref) {
                ref.textContent = Math.ceil(Number(this.targets()[0].textContent)).toLocaleString();
              }
            },
          });
        }
      });
    }
  }, [isInView]);

  return (
    <div className="h-70vh py-16 w-full px-4 sm:px-6 lg:px-8" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center"
            >
              <p
                ref={(el) => {
                  refs.current[index] = el; // Assign the ref without returning a value
                }}
                className="text-4xl font-bold text-yellow-400"
              >
                {stat.value}
              </p>
              <p className="mt-2 text-lg text-white">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}