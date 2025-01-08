import React from "react";

export default function Projects() {
  return (
    <div className="max-w-[960px] mx-auto py-16 border-b border-gray-200">
      <h3 className="text-lg text-dull font-medium tracking-wider">PROJECTS</h3>

      <div className="mt-6 grid grid-cols-5 gap-6">
        <figure className="col-span-3">
          <img src="/projects/spcb.webp" alt="" className="w-full rounded-sm" />
        </figure>
        <div className="col-span-2">
          <p className="text-2xl">
            Custom Content Management System + Club Website
          </p>
          <p className="pt-2 text-dull">
            Website I built in a development team for the Society of PC
            Building. Features a CMS that allows admins to update content in
            real time.
          </p>
          <p className="pt-3 text-dull text-sm">
            Tech: Next.js, TypeScipt, React, Firebase, Tailwind.
          </p>
          <p className="pt-5">Coming January 2025</p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-5 gap-6">
        <figure className="col-span-3">
          <img src="/projects/dsc.webp" alt="" className="w-full rounded-sm" />
        </figure>
        <div className="col-span-2">
          <p className="text-2xl">Google DSC Landing Page</p>
          <p className="pt-2 text-dull">
            Developed and designed a modern landing page for a student org with
            micro-interactions using React & Framer Motion.
          </p>
          <p className="pt-3 text-dull text-sm">
            Tech: React, TypeScript, Figma, Tailwind.
          </p>
          <div className="pt-5 flex gap-2">
            <a
              href="https://ufdsc.org/"
              className="bg-black text-white text-sm rounded-full px-4 py-1.5"
              target="_blank"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/colemmorgan/ufdsc"
              className="bg-gray-200 text-black text-sm rounded-full px-4 py-1.5"
              target="_blank"
            >
              Source Code
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-5 gap-6">
        <figure className="col-span-3">
          <img src="/projects/cc.webp" alt="" className="w-full rounded-sm" />
        </figure>
        <div className="col-span-2">
          <p className="text-2xl">Coding Question Platform</p>
          <p className="pt-2 text-dull">
            A coding question platform with real time grading and tracking
            through firebase and containerized code execution.
          </p>
          <p className="pt-3 text-dull text-sm">
            Tech: React, Docker, Firebase, Tailwind
          </p>
          <div className="pt-5 flex gap-2">
            <a
              href="https://code-code-theta.vercel.app/"
              className="bg-black text-white text-sm rounded-full px-4 py-1.5"
              target="_blank"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/colemmorgan/CodeCode"
              className="bg-gray-200 text-black text-sm rounded-full px-4 py-1.5"
              target="_blank"
            >
              Source Code
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-5 gap-6">
        <figure className="col-span-3">
          <img
            src="/projects/fufillment.webp"
            alt=""
            className="w-full rounded-sm"
          />
        </figure>
        <div className="col-span-2">
          <p className="text-2xl">Medical Microcredentialing App</p>
          <p className="pt-2 text-dull">
            A fullstack web app that rewards users for expanding their medical
            knowledege through live trivia, courses, and notecards. Won 3rd
            place and $500 dollars at{" "}
            <a className="underline" href="https://devpost.com/software/fulfillment" target="_blank">MediHacks</a>.
          </p>
          <p className="pt-3 text-dull text-sm">
            Tech: React, TypeScript, Firebase.
          </p>
          <div className="pt-5 flex gap-2">
            <a
              href="https://fufillment-n5cn.vercel.app/"
              className="bg-black text-white text-sm rounded-full px-4 py-1.5"
              target="_blank"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/colemmorgan/Medihacks2024"
              className="bg-gray-200 text-black text-sm rounded-full px-4 py-1.5"
              target="_blank"
            >
              Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
