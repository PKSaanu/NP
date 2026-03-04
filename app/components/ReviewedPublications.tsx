'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { IconBook, IconPresentation, IconFileDescription, IconCircleCheck } from '@tabler/icons-react';

interface ReviewData {
    year: string;
    source: string;
    count: string;
}

interface ReviewCategory {
    title: string;
    icon: React.ReactNode;
    data: ReviewData[];
    accent: string;
}

export default function ReviewedPublications() {
    const categories: ReviewCategory[] = [
        {
            title: "Journals",
            icon: <IconBook className="w-6 h-6" />,
            accent: "text-blue-400",
            data: [
                { year: "2026", source: "Elsevier - Computers and Electrical Engineering", count: "1 Paper" },
                { year: "2024", source: "Wiley - The Scientific World Journal", count: "3 Papers" },
                { year: "2024", source: "Elsevier - Computer Methods and Programs in Biomedicine", count: "1 Paper" },
                { year: "2023", source: "Elsevier - Biomedical Signal Processing and Control", count: "1 Paper" }
            ]
        },
        {
            title: "Conference & Workshop",
            icon: <IconPresentation className="w-6 h-6" />,
            accent: "text-purple-400",
            data: [
                { year: "2026", source: "9th IEEE International Research Conference on Smart Computing and Systems Engineering (SCSE)", count: "2 Papers" },
                { year: "2025", source: "Sri Lanka Student Workshop on Computer Science (SLSWCS)", count: "4 Extended Abstracts" },
                { year: "2025", source: "1st International Conference on Applied Sciences (ICAS)", count: "2 Papers" },
                { year: "2025", source: "Asia Pacific Advanced Network Conference (APANConf)", count: "1 Paper" },
                { year: "2024", source: "2nd International Conference on Data, Information and Computing Science (CDICS)", count: "1 Paper" },
                { year: "2023", source: "Sri Lanka Student Workshop on Computer Science (SLSWCS)", count: "3 Extended Abstracts" },
                { year: "2022", source: "Vingnanam Research Conference (VRC)", count: "2 Papers" }
            ]
        }
    ];

    return (
        <section id="reviewed" className="mb-8 bg-gray-800 bg-opacity-50 p-6 rounded-lg backdrop-blur-sm shadow-lg scroll-mt-24">
            <h2 className="text-[clamp(1.25rem,4vw,1.5rem)] font-bold mb-8 text-purple-400">Reviewed Publications</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {categories.map((category, catIndex) => (
                    <div key={catIndex} className="flex flex-col h-full">
                        <div className="flex items-center gap-3 mb-6">
                            <div className={`p-2.5 rounded-xl bg-gray-950/40 border border-gray-700/50 ${category.accent} shadow-inner`}>
                                {category.icon}
                            </div>
                            <h3 className="text-[clamp(1.1rem,3vw,1.25rem)] font-bold text-gray-100 tracking-tight">
                                {category.title}
                            </h3>
                        </div>

                        <div className="flex-1 space-y-3">
                            {category.data.map((item, itemIndex) => (
                                <motion.div
                                    key={itemIndex}
                                    className="group relative flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-4 rounded-xl bg-gray-950/30 border border-gray-700/30 hover:border-purple-500/30 hover:bg-gray-950/50 transition-all duration-300"
                                >
                                    {/* Mobile Header: Year and Count Row */}
                                    <div className="flex items-center justify-between w-full sm:w-auto gap-4">
                                        <div className="flex flex-col items-center justify-center min-w-[50px] py-1 px-2 rounded-lg bg-gray-900 border border-gray-800 group-hover:border-purple-500/20 transition-colors">
                                            <span className="text-[10px] font-black text-purple-500 uppercase tracking-tighter leading-none mb-1">Year</span>
                                            <span className="text-sm font-bold text-gray-200">{item.year}</span>
                                        </div>

                                        {/* Mobile-only Count Badge */}
                                        <div className="flex sm:hidden items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/5 border border-emerald-500/10 text-emerald-400">
                                            <IconCircleCheck className="w-3.5 h-3.5" />
                                            <span className="text-[11px] font-bold whitespace-nowrap">{item.count}</span>
                                        </div>
                                    </div>

                                    {/* Title / Source */}
                                    <div className="flex-1 min-w-0">
                                        <h4 className="text-[14px] font-semibold text-gray-300 group-hover:text-white transition-colors leading-relaxed">
                                            {item.source}
                                        </h4>
                                    </div>

                                    {/* Desktop-only Count Badge */}
                                    <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/5 border border-emerald-500/10 text-emerald-400">
                                        <IconCircleCheck className="w-3.5 h-3.5" />
                                        <span className="text-[11px] font-bold whitespace-nowrap">{item.count}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
