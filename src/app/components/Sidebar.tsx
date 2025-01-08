import React from "react";
import { FaMapPin } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="w-[232px] border-r border-gray-200 h-screen py-6 ">
      <div className="border-b border-gray-200 px-4 pb-6">
        <figure>
          <img
            src="/me.jpg"
            alt=""
            className="w-14 h-14 rounded-full grayscale"
          />
        </figure>
        <p className="pt-2.5 text-lg">Cole Morgan</p>
        <p className="flex text-dull gap-1 items-center text-xs pt-0.5">
          <FaMapPin /> University of Florida
        </p>
      </div>
      <div className="px-2 pb-6 pt-6 border-b border-gray-200">
        <p className="px-2 text-dull text-sm font-medium tracking-wide ">
          SOCIALS/CONTACT
        </p>
        <div className="grid gap-1 pt-2 text-sm">
          <a href="" target="_blank" className="py-1 px-2 rounded-md hover:bg-gray-200 transition-all">
            Email
          </a>
          <a href="https://www.linkedin.com/in/cole-morgan-/" target="_blank" className="py-1 px-2 rounded-md hover:bg-gray-200 transition-all">
            LinkedIn
          </a>
          <a href="https://github.com/colemmorgan" target="_blank" className="py-1 px-2 rounded-md hover:bg-gray-200 transition-all">
            GitHub
          </a>
          <a
          href="ColeMorganResume.pdf"
          download={"ColeMorganResume.pdf"}
          className="py-1 px-2 rounded-md hover:bg-gray-200 transition-all"
        >
          Resume
        </a>
        </div>
      </div>
      <div className="px-2 pb-6 pt-6 border-b border-gray-200">
        <p className="px-2 text-dull text-sm font-medium tracking-wide ">
          SECTIONS
        </p>
        <div className="grid gap-1 pt-2 text-sm">
          <a href="#home" className="py-1 px-2 rounded-md hover:bg-gray-200 transition-all">
            Home
          </a>
          <a href="#experience" className="py-1 px-2 rounded-md hover:bg-gray-200 transition-all">
            Experience
          </a>
          <a href="#work" className="py-1 px-2 rounded-md hover:bg-gray-200 transition-all">
            Work
          </a>
          <a href="#awards" className="py-1 px-2 rounded-md hover:bg-gray-200 transition-all">
            Awards
          </a>
        </div>
      </div>
    </div>
  );
}
