'use client'

import { motion } from 'framer-motion'
import { Users, Briefcase, GraduationCap, BookOpen } from 'lucide-react'

interface Role {
  title: string
  organization: string
  period: string
  icon: React.ReactNode
}

export default function AdminRoles() {
  const roles: Role[] = [
    {
      title: "Advisor",
      organization: "IEEE Women in Engineering of Student Branch Affinity Group, University of Jaffna",
      period: "Jan 2024 - Present",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Academic Career Guidance Advisor",
      organization: "Faculty of Science, University of Jaffna",
      period: "Jul 2023 - Present",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      title: "Representative",
      organization: "Lecturers (Probationary), Faculty Board of Science, University of Jaffna",
      period: "Feb 2023 - Present",
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      title: "Secretary",
      organization: "Section-B (Applied Science), Jaffna Science Association (JSA)",
      period: "Feb 2022 - Mar 2023",
      icon: <BookOpen className="w-6 h-6" />
    }
  ]

  return (
    <section id="adminroles" className="mb-8 bg-gray-800 bg-opacity-50 p-6 rounded-lg backdrop-blur-sm shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-purple-400">Administrative Roles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {roles.map((role, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative flex items-start gap-4 p-4 rounded-lg bg-gray-700/50 hover:bg-gray-700/70 transition-all duration-300"
          >
            <div className="p-3 rounded-full bg-purple-500/20 text-purple-400">
              {role.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-purple-300">{role.title}</h3>
              <p className="text-gray-300 text-sm mt-1">{role.organization}</p>
              <p className="text-purple-400 text-sm mt-2">{role.period}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

