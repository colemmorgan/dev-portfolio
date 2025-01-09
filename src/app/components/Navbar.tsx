"use client";
import { AnimatePresence, easeOut, motion } from "framer-motion";
import React, { useState } from "react";
import { FaMapPin } from "react-icons/fa";
import { FaBars, FaXmark } from "react-icons/fa6";

export default function Navbar() {
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);

  return (
    <>
      <div className="hidden lg:block w-[232px] border-r border-gray-200 h-screen py-6 ">
        <div className="border-b border-gray-200 px-5 pb-6">
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
          <p className="px-3 text-dull text-sm font-medium tracking-wide ">
            SOCIALS/CONTACT
          </p>
          <div className="grid gap-1 pt-2 text-sm">
            <a
              href="mailto:colemmorgann@gmail.com"
              target="_blank"
              className="py-1 px-3 rounded-md hover:bg-gray-200 transition-all"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/cole-morgan-/"
              target="_blank"
              className="py-1 px-3 rounded-md hover:bg-gray-200 transition-all"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/colemmorgan"
              target="_blank"
              className="py-1 px-3 rounded-md hover:bg-gray-200 transition-all"
            >
              GitHub
            </a>
            <a
              href="ColeMorganResume.pdf"
              download={"ColeMorganResume.pdf"}
              className="py-1 px-3 rounded-md hover:bg-gray-200 transition-all"
            >
              Resume
            </a>
          </div>
        </div>
        <div className="px-2 pb-6 pt-6 border-b border-gray-200">
          <p className="px-3 text-dull text-sm font-medium tracking-wide ">
            SECTIONS
          </p>
          <div className="grid gap-1 pt-2 text-sm">
            <a
              href="#home"
              className="py-1 px-3 rounded-md hover:bg-gray-200 transition-all"
            >
              Home
            </a>
            <a
              href="#experience"
              className="py-1 px-3 rounded-md hover:bg-gray-200 transition-all"
            >
              Experience
            </a>
            <a
              href="#work"
              className="py-1 px-3 rounded-md hover:bg-gray-200 transition-all"
            >
              Work
            </a>
            <a
              href="#awards"
              className="py-1 px-3 rounded-md hover:bg-gray-200 transition-all"
            >
              Awards
            </a>
          </div>
        </div>
      </div>
      <div className="lg:hidden fixed z-10 px-6 md:px-8 w-full border-b border-gray-200 py-4 flex items-center justify-between bg-white">
        <figure>
          <img src="/favicon.png" alt="" className="w-9 h-9" />
        </figure>
        <button className="text-2xl" onClick={() => setShowMobileNav(true)}>
          <FaBars />
        </button>
      </div>
      <AnimatePresence>
        {showMobileNav && (
          <motion.div
            className="fixed inset-0 z-20 bg-black bg-opacity-40 backdrop-blur-sm flex justify-end cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setShowMobileNav(false)}
          >
            <motion.div
              initial={{ x: 240, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 240, opacity: 0 }}
              transition={{ duration: 0.25, ease: easeOut }}
              onClick={(e) => e.stopPropagation()}
              className="h-screen bg-white w-60 p-6 relative cursor-default"
            >
              <span
                className="absolute top-6 right-6 text-3xl cursor-pointer"
                onClick={() => setShowMobileNav(false)}
              >
                <FaXmark />
              </span>
              <div className="pt-2">
                <figure>
                  <img
                    src="/me.jpg"
                    alt=""
                    className="w-16 h-16 grayscale rounded-full"
                  />
                </figure>
                <p className="text-lg pt-2">Cole Morgan</p>
                <p className="flex text-dull gap-1 items-center text-xs pt-0.5">
                  <FaMapPin /> University of Florida
                </p>
                <div className="grid mt-4 gap-4 border-y py-4">
                  <a href="mailto:colemmorgann@gmail.com" target="_blank" onClick={() => setShowMobileNav(false)}>
                    Email
                  </a>
                  <a
                    href="https://www.linkedin.com/in/cole-morgan-/"
                    target="_blank"
                    onClick={() => setShowMobileNav(false)}
                  >
                    LinkedIn
                  </a>
                  <a href="https://github.com/colemmorgan" target="_blank" onClick={() => setShowMobileNav(false)}>
                    GitHub
                  </a>
                  <a
                    href="ColeMorganResume.pdf"
                    download={"ColeMorganResume.pdf"}
                    target="_blank"
                    onClick={() => setShowMobileNav(false)}
                  >
                    Resume
                  </a>
                </div>
                <div className="grid gap-4 border-b py-4">
                  <a href="#home" onClick={() => setShowMobileNav(false)}>Home</a>
                  <a href="#experience" onClick={() => setShowMobileNav(false)}>Experience</a>
                  <a href="#work" onClick={() => setShowMobileNav(false)}>Work</a>
                  <a href="#awards" onClick={() => setShowMobileNav(false)}>Awards</a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
