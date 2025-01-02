'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, BookOpen, GraduationCap, Brain, Code, Database } from 'lucide-react'
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';

const words = `Enthusiastic academic with over seven years of experience in teaching, research, and industry, specializing in deep learning, medical image analysis, and computer vision. Committed to advancing AI research, mentoring, and contributing to academia and society.
`;

export default function HeaderProfile() {
  return (
    <section id="intro" className="relative w-full mb-8">
      {/* Main container with background */}
      <div className="relative bg-gray-800 bg-opacity-50 rounded-lg backdrop-blur-sm shadow-lg overflow-hidden">
        {/* Background Effect - Positioned absolutely with lower z-index */}
        <div className="absolute inset-0 z-0">
          <BackgroundBeamsWithCollision children />
        </div>

        {/* Content Container - Higher z-index to appear above background */}
        <div className="relative z-20 p-4 md:p-6">
          {/* Profile Section */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Image Column */}
            <div className="flex flex-col items-center md:items-start gap-4 flex-shrink-0">
              {/* Image Container */}
              <div className="relative w-32 h-48 md:w-[200px] md:h-[280px]">
                <Image
                  src="/images/nirthika2-2.png"
                  alt="Dr. Nirthika Rajendran"
                  width={200}
                  height={260}
                  className="rounded-lg border-2 border-purple-500 object-cover w-full h-full"
                  style={{ zIndex: 30 }}
                />
              </div>
            </div>

            {/* Text Content Container */}
            <div className="flex-1 flex flex-col relative z-30">
              <div className="text-center md:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative text-3xl md:text-5xl font-bold mb-1 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text break-words leading-tight min-h-[65px] md:min-h-[60px]"
              >
                Dr. Nirthika Rajendran
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg md:text-2xl font-semibold mb-6 text-purple-300"  // Increased mb here
              >
                Lecturer at University of Jaffna
              </motion.h2>

                {/* Social Links */}
                <motion.nav 
                initial={{ opacity:0, y: 20 }}
                animate={{ opacity: 1, y:0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-4"
                >
                  <ul className="flex justify-center md:justify-start space-x-4">
                    {/* <li>
                      <Link
                        href="mailto:nirthika@univ.jfn.ac.lk"
                        className="text-gray-300 hover:text-purple-400 transition-colors duration-200"
                        aria-label="Email"
                      >
                        <img
                          src="/images/gmail.png"
                          alt="Email"
                          className="w-6 h-6 md:w-12 md:h-12 object-contain"
                        />
                      </Link>
                    </li> */}
                    <li>
                      <Link
                        href="https://lk.linkedin.com/in/nirthika"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-purple-400 transition-colors duration-200"
                        aria-label="LinkedIn"
                      >
                        <img
                          src="/images/linkedin-2.png"
                          alt="LinkedIn"
                          className="w-12 h-12 md:w-12 md:h-12 object-contain"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.researchgate.net/profile/Rajendran-Nirthika"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-purple-400 transition-colors duration-200"
                        aria-label="ResearchGate"
                      >
                        <img
                          src="/images/researchgate.png"
                          alt="ResearchGate"
                          className="w-8 h-12 md:w-8 md:h-12 object-contain"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://scholar.google.com/citations?user=WtrsAqsAAAAJ&hl=en&oi=ao"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-purple-400 transition-colors duration-200"
                        aria-label="Google Scholar"
                      >
                        <img
                          src="/images/scholar.png"
                          alt="Google Scholar"
                          className="w-12 h-12 md:w-12 md:h-12 object-contain"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://github.com/Nirthika"
                        target="_blank"
                        className="text-gray-300 hover:text-purple-400 transition-colors duration-200"
                        aria-label="GitHub"
                      >
                        <img
                          src="/images/github2.png"
                          alt="Github"
                          className="w-12 h-12 md:w-12 md:h-12 object-contain"
                        />
                      </Link>
                    </li>
                  </ul>
                </motion.nav>


                {/* Brief Description */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-gray-300 text-justify mb-4 mt-4 relative z-30 leading-relaxed bg-gray-800 bg-opacity-50 p-2 rounded-lg"
                >
                    <TextGenerateEffect duration={1} words={words} />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Skills Grid - Desktop and Mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 relative z-30"
          >
            {[
              { icon: GraduationCap, text: "Academic Excellence", color: "from-purple-600 to-purple-700" },
              { icon: Brain, text: "AI Research", color: "from-purple-600 to-purple-800" },
              { icon: Code, text: "Software Development", color: "from-purple-500 to-purple-700" },
              { icon: Database, text: "Data Analysis", color: "from-purple-500 to-purple-700" }
            ].map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col items-center p-4 rounded-lg bg-gradient-to-br ${item.color} bg-opacity-50 hover:shadow-xl hover:scale-105 transform transition-all duration-300 animate-gradient`}
              >
                <item.icon className="w-8 h-8 text-white mb-2 opacity-90" />
                <span className="text-white text-sm font-medium text-center">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
