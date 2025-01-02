'use client'

import { TracingBeam } from '@/components/ui/tracing-beam'
import { motion } from 'framer-motion'
import { BookOpen, Code, Terminal, Monitor, Users, Briefcase, Cpu } from 'lucide-react'

interface Course {
  code: string
  name: string
  period: string
  icon: React.ReactNode
}

export default function Teaching() {
  const courses: Course[] = [
    {
      code: "CSC205S2, CSC205G2",
      name: "Software Engineering",
      period: "2023-2024",
      icon: <Code className="w-6 h-6" />
    },
    {
      code: "CSC202S2, CSC202G2",
      name: "Data Structure and Algorithm (Practical)",
      period: "2022-Date",
      icon: <Terminal className="w-6 h-6" />
    },
    {
      code: "CSC107S2, CSC103G2",
      name: "Multimedia Technologies",
      period: "2022-Date",
      icon: <Monitor className="w-6 h-6" />
    },
    {
      code: "CSC301S3, CSC301G3",
      name: "Rapid Application Development",
      period: "2022-Date",
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      code: "CSC203S2, CSC203G2",
      name: "Operating Systems",
      period: "2022–2023",
      icon: <Cpu className="w-6 h-6" /> // Icon representing OS or computer hardware
    },
    {
      code: "CSC212S2",
      name: "Professional Practice",
      period: "2022-Date",
      icon: <Briefcase className="w-6 h-6" /> // Icon representing professional work
    },
    {
      code: "CSC304S3, CSC304G3",
      name: "Coordinator for Team Software Project",
      period: "2022–2023",
      icon: <Users className="w-6 h-6" /> // Icon representing teamwork or coordination
    }
  ];
  

  return (
    <section id="teaching" className="mb-8 bg-gray-800 bg-opacity-50 p-6 rounded-lg backdrop-blur-sm shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-purple-400">Teaching</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative p-6 rounded-lg bg-gradient-to-br from-purple-900 to-indigo-900 overflow-hidden group hover:shadow-lg transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-purple-500 bg-opacity-20 text-purple-300">
                  {course.icon}
                </div>
                <div className="text-sm text-purple-300 font-medium">{course.code}</div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{course.name}</h3>
              <p className="text-purple-200 text-sm">{course.period}</p>
            </div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-white opacity-5 rounded-tl-full transform translate-x-12 translate-y-12"></div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

