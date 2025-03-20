"use client";

import React from "react";
import { InfiniteMovingCards } from "./InfiniteMovingCard";

export default function ProgLangList() {
  return (
    <div className="w-[calc(50vw)] md:w-[30vw] rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative left-[calc(12vw)] overflow-hidden">
        
      <div className="rotate-45 right-24 relative">
      <InfiniteMovingCards
        items={leftProg}
        direction="left"
        speed="normal"
      />
      </div>
      <div className="rotate-45 left-12 relative">
      <InfiniteMovingCards
        items={rightProg}
        direction="right"
        speed="normal"
      />
      </div>
    </div>
  );
}

const leftProg = [
  {
    id: 20,
    name: "prog1",
    title: "Mechanical",
    img: "",
  },
  {
    id: 21,
    name: "prog2",
    title: "Electrical",
    img: "",
  },
  {
    id: 22,
    name: "Application",
    title: "NextJS",
    img: "",
  },
];

const rightProg = [
    {
      id: 23,
      name: "prog4",
      title: "Software",
      img: "",
    },
    {
      id: 24,
      name: "prog5",
      title: "Database",
      img: "",
    },
    {
      id: 25,
      name: "prog6",
      title: "SEO",
      img: "",
    },
  ];
