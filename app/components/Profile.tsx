'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Brain, Code, Database } from 'lucide-react'

export default function Profile() {
  return (
    <section className="mb-8 bg-gray-800 bg-opacity-50 p-6 rounded-lg backdrop-blur-sm shadow-lg">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text"
      >
        Dr. Nirthika Rajendran
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-2xl font-semibold mb-6 text-purple-300"
      >
        Lecturer (Probationary) at University of Jaffna
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-gray-300 space-y-4"
      >
        <p className="leading-relaxed">
          Enthusiastic academic with over seven years of experience in teaching, research, and industry, specializing
          in deep learning, medical image analysis, and computer vision. Committed to advancing AI research,
          mentoring, and contributing to academia and society.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          <div className="flex items-center gap-3 text-purple-300">
            <GraduationCap className="w-6 h-6" />
            <span>Academic Excellence</span>
          </div>
          <div className="flex items-center gap-3 text-purple-300">
            <Brain className="w-6 h-6" />
            <span>AI Research</span>
          </div>
          <div className="flex items-center gap-3 text-purple-300">
            <Code className="w-6 h-6" />
            <span>Software Development</span>
          </div>
          <div className="flex items-center gap-3 text-purple-300">
            <Database className="w-6 h-6" />
            <span>Data Analysis</span>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

