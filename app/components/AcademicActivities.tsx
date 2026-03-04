'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { IconUsers, IconUserCheck, IconBook, IconSchool, IconCode, IconTrophy, IconStar } from '@tabler/icons-react';

interface Activity {
    role: string;
    description: string;
    period: string;
}

interface Category {
    title: string;
    icon: React.ReactNode;
    activities: Activity[];
}

export default function AcademicActivities() {
    const categories: Category[] = [
        {
            title: "Member",
            icon: <IconUsers className="w-6 h-6 text-purple-400" />,
            activities: [
                {
                    role: "Scientific Committee Member",
                    description: "1st International Conference on Artificial Intelligence & Society (AiCon) 2026",
                    period: "2026"
                },
                {
                    role: "Technical Program Committee",
                    description: "International Conference on Intelligent Information, Systems Science and Engineering (ISSE) 2026",
                    period: "2026"
                },
                {
                    role: "Technical Program Committee",
                    description: "International Conference on Data, Information and Computing Science (CDICS) 2026",
                    period: "2026"
                },
                {
                    role: "Election Committee Member",
                    description: "IEEE Sri Lanka Section Chapter, Computational Intelligence Society (CIS11)",
                    period: "2 Nov 2025 - 22 Jan 2026"
                },
                {
                    role: "Technical Program Committee",
                    description: "International Conference on Data, Information and Computing Science (CDICS) 2025",
                    period: "2025"
                }
            ]
        },
        {
            title: "Instructor",
            icon: <IconSchool className="w-6 h-6 text-emerald-400" />,
            activities: [
                {
                    role: "Instructor",
                    description: 'Certificate Courses in Computing: "Python Essentials for Problem Solvers" (English medium) - External programme by DCS, UoJ',
                    period: "7 Feb 2026 - Date"
                },
                {
                    role: "Instructor",
                    description: '“AI Tools for NPC Staff” workshop for the Staff of the Northern Provincial Council, Sri Lanka',
                    period: "11 Dec 2025"
                },
                {
                    role: "Instructor",
                    description: '“Intelligent Tools for Everyday Office Work” workshop for the Staff of the Department of Local Government, Northern Province',
                    period: "24 Nov 2025"
                },
                {
                    role: "Instructor",
                    description: '“Smart Tools for Administrative Efficiency” workshop for the Staff of Poonakary Divisional Secretariat, Jaffna',
                    period: "18 Nov 2025"
                },
                {
                    role: "Instructor",
                    description: '“AI Tools for Executive Officers” workshop for the Staff of the Management Development Training Unit, Northern Province',
                    period: "4 Nov 2025"
                },
                {
                    role: "Instructor",
                    description: '“GenAI Tools” workshop for the Staff of the Department of Industries, Northern Province',
                    period: "29–30 Oct 2025"
                },
                {
                    role: "Instructor",
                    description: 'Certificate Courses in Computing: "Advance Web Development" (Tamil medium)',
                    period: "24 Mar 2024 - 23 Jun 2024"
                },
                {
                    role: "Instructor",
                    description: 'Certificate Courses in Computing: "Python for Problem Solving" (Tamil medium)',
                    period: "16 Mar 2024 - 22 Jun 2024"
                }
            ]
        },
        {
            title: "Other Activities",
            icon: <IconStar className="w-6 h-6 text-pink-400" />,
            activities: [
                {
                    role: "Organiser",
                    description: "GeSSoMI-2024: Cybersecurity Bootcamp through the IEEE WIE Student Branch Affinity Group UoJ",
                    period: "6 Jul 2025"
                },
                {
                    role: "Co-organiser",
                    description: '"Global Glow" through the IEEE WIE Affinity Group of Sri Lanka Section',
                    period: "17 Jun 2024"
                },
                {
                    role: "Curriculum Contributor",
                    description: "Revised curriculum and updated course syllabi for the Certificate Course (external programme) at DCS, UoJ",
                    period: "2025"
                },
                {
                    role: "Proctor",
                    description: "Proctor for four teams in IEEEXtreme 24 hours coding competition through IEEE Student Branch UoJ",
                    period: "2023, 2025"
                },
                {
                    role: "Evaluator",
                    description: "Evaluator in Yarl Geek Challenge (YGC) Juniors at Yarl IT Hub",
                    period: "2023"
                }
            ]
        }
    ];

    return (
        <section id="reviewed" className="mb-8 bg-gray-800 bg-opacity-50 p-6 rounded-lg backdrop-blur-sm shadow-lg">
            <h2 className="text-[clamp(1.25rem,4vw,1.5rem)] font-bold mb-8 text-purple-400">Academic & Other Activities</h2>

            <div className="space-y-10">
                {categories.map((category, catIndex) => (
                    <div key={catIndex} className="relative">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 rounded-lg bg-gray-950/40 border border-gray-700/50 shadow-inner">
                                {category.icon}
                            </div>
                            <h3 className="text-[clamp(1.1rem,3vw,1.25rem)] font-bold text-gray-100 tracking-tight">
                                {category.title}
                            </h3>
                            <div className="flex-1 h-[1px] bg-gradient-to-r from-gray-700/50 to-transparent ml-4" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {category.activities.map((activity, actIndex) => (
                                <motion.div
                                    key={actIndex}
                                    className="group relative flex flex-col p-5 rounded-xl bg-gray-950/30 border border-gray-700/30 hover:border-purple-500/30 hover:bg-gray-950/50 transition-all duration-300"
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="text-[10px] font-bold text-purple-400/80 uppercase tracking-widest bg-purple-500/5 px-2 py-0.5 rounded border border-purple-500/10">
                                            {activity.period}
                                        </span>
                                        <div className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-purple-500 transition-colors" />
                                    </div>

                                    <h4 className="text-[15px] font-bold text-gray-200 group-hover:text-white leading-tight mb-2 transition-colors">
                                        {activity.role}
                                    </h4>

                                    <p className="text-[13px] text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                                        {activity.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
