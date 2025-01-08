"use client"

import { useState } from "react";

type award = {
  desc: string;
  year: string;
  href: string;
};

const awards: award[] = [
  { desc: "MediHacks 2024 Hackathon Winner", year: "2024", href: "https://devpost.com/software/fulfillment" },
  { desc: "Nurturing Gator Unity Hackathon Winner", year: "2024",  href: "https://devpost.com/software/access-for-all-ymhp6n"},
  { desc: "KatyYouthHacks Hackathon Winner", year: "2024",  href: "https://devpost.com/software/chroma-qmc9ti"},
];

export default function Awards() {
  return (
    <div
      className="max-w-[960px] mx-auto py-16 border-b border-gray-200"
      id="awards"
    >
      <p className="text-dull tracking-wider font-medium text-lg ">AWARDS</p>
      <div className="grid grid-cols-6 mt-6 pb-3 border-b border-gray-100">
        <p className="m text-sm text-dull col-span-5">Description</p>
        <p className="m text-sm text-dull col-span-1 flex justify-end">Year</p>
      </div>
      {awards.map((award) => (
        <Award key={award.desc} award={award} />
      ))}
    </div>
  );
}

type AwardProps = {
  award: award;
};

const Award: React.FC<AwardProps> = ({ award }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
    const handleMouseMove = (e: React.MouseEvent) => {
      const rect = e.currentTarget.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    };
  
    return (
      <a 
      href={award.href} target="_blank"
        className="grid grid-cols-6 py-3 border-b border-gray-100 text-sm relative cursor-none hover:bg-gray-100 award-item hover:px-3"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
      >
        {isHovered && (
          <img
            src="/mouse.svg"
            alt=""
            className="absolute w-7 h-7 pointer-events-none"
            style={{
              left: `${mousePos.x}px`,
              top: `${mousePos.y}px`,
              transform: 'translate(-50%, -50%)'
            }}
          />
        )}
        <p className="text-sm col-span-5">{award.desc}</p>
        <p className="text-sm col-span-1 flex justify-end">{award.year}</p>
      </a>
    );
  };