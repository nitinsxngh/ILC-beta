"use client";

import React from "react";
import { InfiniteMovingCards } from "./InfiniteMovingCard";

export default function WebsiteMockup() {
  
  return (
    <div className="rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    id: 10,
    name: "Works01",
    title: "",
    img: "/works/1.png",
  },
  {
    id: 12,
    name: "Works02",
    title: "",
    img: "/works/2.png",
  },
  {
    id: 13,
    name: "Works03",
    title: "",
    img: "/works/3.png",
  },
  {
    id: 14,
    name: "Works04",
    title: "",
    img: "/works/4.png",
  },
  {
    id: 15,
    name: "Works05",
    title: "",
    img: "/works/5.png",
  },
];
