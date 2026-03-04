'use client'

import { motion } from 'framer-motion'
import { IconCertificate, IconSchool, IconLanguage, IconCalendar } from '@tabler/icons-react'

interface Qualification {
    title: string
    organization: string
    date: string
    description?: string
    icon: React.ReactNode
}

export default function ProfessionalQualifications() {
    const qualifications: Qualification[] = [
        {
            title: "IELTS Academic",
            organization: "British Council Colombo",
            date: "Sep 2024",
            description: "Overall Band Score: 6.0 (Competent User)",
            icon: <IconLanguage className="w-6 h-6" />
        },
        {
            title: "Induction Programme for Academic Staff",
            organization: "University of Jaffna",
            date: "31 Dec 2022",
            description: "Successfully completed the training program",
            icon: <IconSchool className="w-6 h-6" />
        },
        {
            title: "G.C.E. Ordinary Level Second Language Sinhala",
            organization: "Department of Examinations, Sri Lanka",
            date: "2022",
            description: "Received pass grade",
            icon: <IconCertificate className="w-6 h-6" />
        }
    ]

    return (
        <section id="quals" className="mb-8 bg-gray-800 bg-opacity-50 p-6 rounded-lg backdrop-blur-sm shadow-lg">
            <h2 className="text-[clamp(1.25rem,4vw,1.5rem)] font-bold mb-6 text-purple-400">Professional Qualifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {qualifications.map((qual, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative p-6 rounded-xl border border-gray-700/30 bg-gray-700/50 hover:bg-gray-700/70 transition-all duration-300 hover:border-purple-500/40"
                    >
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform duration-300">
                                {qual.icon}
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-start mb-1">
                                    <h3 className="text-[clamp(1rem,2.5vw,1.1rem)] font-bold text-gray-100 group-hover:text-purple-300 transition-colors">
                                        {qual.title}
                                    </h3>
                                </div>
                                <p className="text-gray-400 text-sm font-medium mb-2">{qual.organization}</p>
                                {qual.description && (
                                    <p className="text-gray-300 text-sm mb-3 leading-relaxed">{qual.description}</p>
                                )}
                                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-300 text-xs font-semibold">
                                    <IconCalendar className="w-3.5 h-3.5" />
                                    {qual.date}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
