"use client"
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

const experience = [
  {
    name: "Software Engineer",
    category: "Society of PC Building @ UF",
    year: "2024",
    desc: `Worked within a development team to create a content management system and club website using Next.js, TypeScript and Firebase. Collaborated with executive 
      and design teams utilizing Agile methodologies, participating in Scrum and weekly standups to create a personalized product.  
    
    `,
    tags: ["Fullstack", "Team", "Next.js", "Firebase"],
    href: "spcb",
  },
  {
    name: "Webmaster",
    category: "Google Developer Student Club",
    year: "2024",
    desc: `Redesigned the club's website as a responsive React application, improving the mobile performance score from 41 to 100. Worked with club officers to create a 
            platform that effectively showcases the organization's mission and activities.
            `,
    tags: ["Frontend", "Individual", "React", "Figma"],
    href: "dsc",
  },
];

type Experience = {
  name: string;
  category: string;
  year: string;
  desc: string;
  tags: string[];
  href: string;
};

export default function Experience() {
  return (
    <div className="max-w-[960px] mx-auto py-16 border-b border-gray-200">
      <p className="text-dull tracking-wider font-medium text-lg">EXPERIENCE</p>
      <div className="text-sm">
        <div className="m mt-6 grid grid-cols-12 border-b border-gray-100 pb-3 text-dull">
          <div className="col-span-4 text-base-300">Position</div>
          <div className="col-span-4 text-base-300">Organization</div>
          <div className="col-span-4 flex justify-end text-base-300">Year</div>
        </div>
        {experience.map((exp, i) => (
          <ExperienceItem exp={exp} key={i} />
        ))}
      </div>
    </div>
  );
}


type ExperienceItemProps = {
    exp: Experience;
  };
  
  const ExperienceItem: React.FC<ExperienceItemProps> = ({ exp }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
  
    return (
      <div>
        <div
          className="grid cursor-pointer grid-cols-12 py-3 experience-item hover:bg-base-600 items-center group hover:bg-gray-100"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <div className="col-span-4 group-hover:pl-3 experience-item">
            {exp.name}
          </div>
          <div className="col-span-4">{exp.category}</div>
          <div className="col-span-4 flex justify-end group-hover:pr-3 experience-item">
            {exp.year}
          </div>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pt-6 pb-3">
                <p className="text-2xl">{exp.desc}</p>
              </div>
              <div className="flex gap-2 pb-6">
                {exp.tags.map((tag) => (
                  <span className="text-black bg-gray-200 py-1 px-4 rounded-full">{tag}</span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="w-full h-px bg-gray-100" />
      </div>
    );
  };
  