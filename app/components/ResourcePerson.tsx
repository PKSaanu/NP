'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { IconPresentation, IconCalendar, IconSparkles, IconCpu, IconChevronRight } from '@tabler/icons-react';

export default function ResourcePerson() {
    const experiences = [
        {
            date: "17 Dec 2025",
            title: 'Workshop on "Enhancing Office Work with Digital and AI Tools"',
            description: "University of Jaffna (UoJ) Career Guidance Unit (CGU) for Mannar Divisional Secretariat staff.",
            type: "AI & Digital Tools",
            icon: <IconCpu className="w-5 h-5 text-emerald-400" />
        },
        {
            date: "16 Dec 2025",
            title: 'Workshop on "Digital Literacy for Executive Excellence"',
            description: "CGU, UoJ for Mannar Divisional Secretariat staff.",
            type: "Digital Literacy",
            icon: <IconPresentation className="w-5 h-5 text-blue-400" />
        },
        {
            date: "5 Dec 2025",
            title: 'Workshop on "Simplifying Office Tasks through Modern IT Practices"',
            description: "CGU, UoJ for Ministry of Health, Indigenous Medicine, and Probation & Child Care Services staff.",
            type: "Modern IT",
            icon: <IconCpu className="w-5 h-5 text-purple-400" />
        },
        {
            date: "2 Dec 2025",
            title: 'Workshop on "Empowering Staff with NextGen IT Tools"',
            description: "CGU, UoJ for Nallur Divisional Secretariat staff, Jaffna.",
            type: "NextGen IT",
            icon: <IconPresentation className="w-5 h-5 text-pink-400" />
        },
        {
            date: "12 Nov 2025",
            title: 'Workshop on "AI Essentials for Smart Administrators"',
            description: "CGU, UoJ for Jaffna District Secretariat staff.",
            type: "AI Essentials",
            icon: <IconCpu className="w-5 h-5 text-emerald-400" />
        },
        {
            date: "7 Nov 2025",
            title: 'Workshop on "Practical Generative AI for Office Staff"',
            description: "CGU, UoJ for Nallur Divisional Secretariat staff, Jaffna.",
            type: "Generative AI",
            icon: <IconCpu className="w-5 h-5 text-blue-400" />
        },
        {
            date: "16 Oct 2025",
            title: 'Workshop on "Boosting Productivity with Generative AI"',
            description: "CGU, UoJ for Jaffna Divisional Secretariat staff, Jaffna.",
            type: "Productivity",
            icon: <IconCpu className="w-5 h-5 text-purple-400" />
        },
        {
            date: "19 Jul 2025",
            title: 'Guest Speaker for "Artificial Intelligence and Its Applications in Scientific Research"',
            description: "Chemical Society (ChemSoc), Department of Chemistry, UoJ for Special Degree students.",
            type: "Scientific AI",
            icon: <IconSparkles className="w-5 h-5 text-pink-400" />
        },
        {
            date: "12 Jun 2025",
            title: 'Multimedia Technologies Session: Professional Development Workshop',
            description: "Provincial Dept. of Education, Northern Province & Dept. of Computer Science, UoJ for GIT Teachers.",
            type: "Multimedia",
            icon: <IconPresentation className="w-5 h-5 text-emerald-400" />
        },
        {
            date: "17 Aug 2024",
            title: 'Keynote Speaker: "Mastering Deep Learning with Hands-On"',
            description: "IEEE Computer Society Student Branch Chapter, UoJ. Delivered \"Deep Learning with CNN\".",
            type: "Deep Learning",
            icon: <IconCpu className="w-5 h-5 text-blue-400" />
        }
    ];

    return (
        <section id="resource" className="mb-8 bg-gray-800 bg-opacity-50 p-6 rounded-lg backdrop-blur-sm shadow-lg">
            <h2 className="text-[clamp(1.25rem,4vw,1.5rem)] font-bold mb-6 text-purple-400">Resource Person</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-fr">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        className="group relative flex flex-col p-5 rounded-xl bg-gray-950/30 border border-gray-700/30 hover:border-purple-500/30 hover:bg-gray-950/50 transition-all duration-300"
                    >
                        {/* Minimal Header */}
                        <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-2">
                                <div className="p-2 rounded-lg bg-gray-900/60 border border-gray-700/50 group-hover:border-purple-500/30 transition-colors">
                                    {exp.icon}
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-bold text-purple-400 uppercase tracking-widest leading-none mb-1">
                                        {exp.type}
                                    </span>
                                    <div className="flex items-center gap-1.5 text-[11px] text-gray-500 font-medium">
                                        <IconCalendar className="w-3 h-3" />
                                        {exp.date}
                                    </div>
                                </div>
                            </div>
                            <IconChevronRight className="w-4 h-4 text-gray-600 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                            <h3 className="text-[15px] font-bold text-gray-100 group-hover:text-white leading-snug transition-colors mb-2">
                                {exp.title}
                            </h3>
                            <p className="text-[13px] text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                                {exp.description}
                            </p>
                        </div>

                        {/* Subtle Gradient Backdrop */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
