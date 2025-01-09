"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { ReactNode, useState } from "react";
import { FaDocker, FaFigma, FaReact } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiAdobephotoshop,
  SiBlender,
  SiExpress,
  SiGooglecloud,
  SiJest,
  SiPostgresql,
} from "react-icons/si";
import {
  TbBrandMongodb,
  TbBrandThreejs,
  TbBrandTypescript,
} from "react-icons/tb";

export default function Skills() {
  const [activeTab, setActiveTab] = useState<"frontend" | "backend" | "design">(
    "frontend"
  );
  const [isInitialRender, setIsInitialRender] = useState(true);

  const handleTabChange = (tab: "frontend" | "backend" | "design") => {
    setActiveTab(tab);
    setIsInitialRender(false);
  };

  const frontend = [
    { icon: <FaReact />, skill: "React" },
    { icon: <RiNextjsFill />, skill: "Next" },
    { icon: <TbBrandTypescript />, skill: "TypeScript" },
    { icon: <RiTailwindCssFill />, skill: "Tailwind" },
    { icon: <TbBrandThreejs />, skill: "Three.js" },
    { icon: <SiJest />, skill: "Jest" },
  ];

  const backend = [
    { icon: <SiExpress />, skill: "Express.js" },
    { icon: <SiPostgresql />, skill: "PostgreSQL" },
    { icon: <TbBrandMongodb />, skill: "MongoDB" },
    { icon: <FaDocker />, skill: "Docker" },
    { icon: <SiGooglecloud />, skill: "GCP" },
  ];

  const design = [
    { icon: <FaFigma />, skill: "Figma" },
    { icon: <SiBlender />, skill: "Blender" },
    { icon: <SiAdobephotoshop />, skill: "Photoshop" },
  ];

  const tabVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className="max-w-[960px] mx-auto py-16 border-b border-gray-200">
      <p className="text-dull tracking-wider font-medium text-lg">SKILLS</p>
      <div className="flex gap-2 pt-6">
        {["frontend", "backend", "design"].map((tab) => (
          <button
            key={tab}
            className={`px-4 transition-all rounded-full py-1 text-sm ${
              activeTab === tab
                ? "bg-black text-white"
                : "hover:bg-gray-300 bg-gray-200"
            }`}
            onClick={() =>
              handleTabChange(tab as "frontend" | "backend" | "design")
            }
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="mt-6 sm:mt-5 lg:max-h-[42px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="flex flex-wrap gap-3"
            initial={isInitialRender ? false : "initial"}
            animate="animate"
            exit="exit"
            variants={tabVariants}
            transition={{ duration: 0.24 }}
          >
            {(activeTab === "frontend"
              ? frontend
              : activeTab === "backend"
              ? backend
              : design
            ).map((tech) => (
              <Skill key={tech.skill} skill={tech.skill} icon={tech.icon} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

type SkillProps = {
  icon: ReactNode;
  skill: string;
};

const Skill: React.FC<SkillProps> = ({ icon, skill }) => {
  return (
    <div className="bg-white border border-[#EaE8Ec] rounded-md px-4 sm:px-6 py-2 flex items-center gap-2 hover:text-primary transition-all">
      <span className="sm:text-lg">{icon}</span>
      <p className="text-sm">{skill}</p>
    </div>
  );
};
