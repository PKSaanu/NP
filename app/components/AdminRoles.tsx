'use client'

import { motion } from 'framer-motion'
import { IconUsers, IconBriefcase, IconSchool, IconBook } from '@tabler/icons-react'

interface Role {
  title: string
  organization: string
  period: string
  icon: React.ReactNode
}

export default function AdminRoles() {
  const roles: Role[] = [
    // 2026
    {
      title: "Vice Chair",
      organization: "IEEE Women in Engineering Affinity Group, Sri Lanka",
      period: "Feb 2026 - Present",
      icon: <IconUsers className="w-6 h-6" />
    },
    {
      title: "Track Co-Chair",
      organization: "Generative AI in Education, 6th Int. Conf. on Advanced Research in Computing (ICARC) 2026",
      period: "2026",
      icon: <IconBook className="w-6 h-6" />
    },
    {
      title: "Coordinator",
      organization: "Certificate Courses in Computing: Python Essentials for Problem Solvers (Tamil), UoJ",
      period: "7 Feb 2026 - Present",
      icon: <IconSchool className="w-6 h-6" />
    },
    {
      title: "Panellist",
      organization: "Generative AI in Education Track, ICARC 2026",
      period: "19 Feb 2026",
      icon: <IconBook className="w-6 h-6" />
    },

    // 2025
    {
      title: "Programme Chair",
      organization: "SL-SWCS'25, Department of Computer Science, University of Jaffna",
      period: "13 Dec 2025",
      icon: <IconBook className="w-6 h-6" />
    },
    {
      title: "Chair - Membership Development",
      organization: "Committee Member, IEEE Women in Engineering Affinity Group, Sri Lanka",
      period: "22 Jan 2025 - 9 Feb 2026",
      icon: <IconUsers className="w-6 h-6" />
    },
    {
      title: "Coordinator",
      organization: "Certificate Courses in Computing: Python for Problem Solving, UoJ",
      period: "1 Feb 2025 - 19 Apr 2025",
      icon: <IconSchool className="w-6 h-6" />
    },
    {
      title: "Coordinator",
      organization: "Designing Team and Welcome Dance Team, Golden Jubilee Committee, Faculty of Science, UoJ",
      period: "2025",
      icon: <IconUsers className="w-6 h-6" />
    },

    // 2024 / 2023
    {
      title: "Advisor",
      organization: "IEEE Women in Engineering of Student Branch Affinity Group, University of Jaffna",
      period: "Jan 2024 - Feb 2025",
      icon: <IconUsers className="w-6 h-6" />
    },
    {
      title: "Logistics Chair",
      organization: "Google exploreCSR Summer School on Machine Intelligence, University of Jaffna",
      period: "14-16 Jun 2024",
      icon: <IconUsers className="w-6 h-6" />
    },
    {
      title: "Academic Career Guidance Advisor",
      organization: "Faculty of Science, University of Jaffna",
      period: "Jul 2023 - Present",
      icon: <IconSchool className="w-6 h-6" />
    },
    {
      title: "Publicity Chair",
      organization: "SL-SWCS'23, Department of Computer Science, University of Jaffna",
      period: "9 Dec 2023",
      icon: <IconBook className="w-6 h-6" />
    },
    {
      title: "Training Sessions Chair",
      organization: "IEEE Summer School on Computational Intelligence: Theory and Application, UoJ",
      period: "12-14 Jul 2023",
      icon: <IconSchool className="w-6 h-6" />
    },
    {
      title: "Representative",
      organization: "Lecturers (Probationary), Faculty Board of Science, University of Jaffna",
      period: "Feb 2023 - Dec 2024",
      icon: <IconBriefcase className="w-6 h-6" />
    },

    // 2022
    {
      title: "Interim Chair",
      organization: "IEEE Computational Intelligence Society of Student Branch, University of Jaffna",
      period: "Feb 2022 - Mar 2022",
      icon: <IconUsers className="w-6 h-6" />
    },
    {
      title: "Secretary",
      organization: "Section-B (Applied Science), Jaffna Science Association (JSA)",
      period: "Feb 2022 - Mar 2023",
      icon: <IconBook className="w-6 h-6" />
    }
  ]

  return (
    <section id="admin" className="mb-8 bg-gray-800 bg-opacity-50 p-6 rounded-lg backdrop-blur-sm shadow-lg">
      <h2 className="text-[clamp(1.25rem,4vw,1.5rem)] font-bold mb-6 text-purple-400">Administrative Roles</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {roles.map((role, index) => (
          <motion.div
            layout
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="group relative flex items-start gap-5 p-5 rounded-xl border border-gray-700/30 bg-gray-700/50 transition-all duration-500 hover:border-purple-500/40 hover:bg-gray-700/70 hover:shadow-lg hover:shadow-purple-500/5"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-xl" />

            <div className="relative z-10 p-3 rounded-xl bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform duration-500 border border-purple-500/10 group-hover:border-purple-500/30">
              {role.icon}
            </div>

            <div className="relative z-10 flex-1">
              <h3 className="text-[clamp(1rem,2.5vw,1.1rem)] font-bold text-gray-100 group-hover:text-purple-300 transition-colors duration-300 leading-tight">
                {role.title}
              </h3>
              <p className="text-gray-400 text-[clamp(0.85rem,2vw,0.9rem)] mt-1.5 font-medium leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {role.organization}
              </p>
              <div className="mt-3 inline-flex items-center px-2.5 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/10 text-purple-400/90 text-[0.75rem] font-semibold tracking-wide uppercase">
                {role.period}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

