'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Code, ExternalLink } from 'lucide-react'

interface Project {
  title: string
  description: string
  technologies: string[]
  link?: string
}

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const projects: Project[] = [
    {
      title: "A Web-based Dengue Detection and Prevention System",
      description: "Fully automated reporting and detection process of dengue disease in the Northern regional health services division through an elegant and user-friendly web-based and mobile-based system that can also efficiently assist in controlling the disease.",
      technologies: ["Laravel", "PHP", "MySQL", "Web Development", "Mobile Development"]
    },
    {
      title: "WSO2-ESB Connector for Asana",
      description: "Contributed to writing a connector to REST API for Asana during a rapid development process. This group project was performed during the third year of the study programme.",
      technologies: ["XML", "Java", "REST API"],
      link: "https://github.com/wso2-extensions/esb-connector-asana"
    },
    {
      title: "University Student Management System",
      description: "Web-based application that helps university students, heads of departments and administrative staff. This group project was carried out during the second year of study.",
      technologies: ["HTML", "CSS", "PHP", "MySQL"]
    }
  ]

  return (
    <section id="projects" className="mb-8 bg-gray-800 bg-opacity-50 p-6 rounded-lg backdrop-blur-sm shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-purple-400">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative bg-gradient-to-br from-purple-900 to-indigo-900 rounded-xl overflow-hidden shadow-lg group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <motion.div
              className="relative z-10 p-6"
              animate={{
                rotateY: hoveredIndex === index ? 10 : 0,
                rotateX: hoveredIndex === index ? -10 : 0,
              }}
              transition={{ type: "spring", stiffness: 100, damping: 10 }}
            >
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-purple-500 bg-opacity-20 text-purple-300 px-2 py-1 rounded-full text-xs">
                    {tech}
                  </span>
                ))}
              </div>
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center text-purple-300 hover:text-purple-200 transition-colors duration-200"
                >
                  View Project <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              )}
            </motion.div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-white opacity-5 rounded-tl-full transform translate-x-16 translate-y-16"></div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

