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
      <div className="px-4 pb-6 pt-6 border-b border-gray-200">
        <p className="text-dull text-sm font-medium tracking-wide ">
          SOCIALS/CONTACT
        </p>
        <div className="grid gap-3 pt-4 text-sm">
          <a href="" >
            Email
          </a>
          <a href="" className="">
            LinkedIn
          </a>
          <a href="" className="">
            GitHub
          </a>
          <a href="" className="">
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}
