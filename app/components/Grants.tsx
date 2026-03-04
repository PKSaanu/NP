'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { IconGift, IconSparkles, IconCoins } from '@tabler/icons-react';
import { CardSpotlight } from "@/components/ui/card-spotlight";

export default function Grants() {
    const grants = [
        {
            date: "29 April 2024",
            title: 'R10 WIE IEEE DEI Grant 2024',
            organization: "IEEE Women in Engineering Student Branch Affinity Group, University of Jaffna",
            description: "This grant is a testament to the commitment to fostering Diversity, Equity, and Inclusion within the community.",
            amount: "USD 400",
            impact: "This funding will be instrumental in supporting the initiatives aimed at advancing diversity and inclusion in STEM fields.",
            icon: <IconGift className="w-8 h-8 text-emerald-400" />,
        }
    ];

    return (
        <section id="grants" className="mb-8 p-6 bg-gray-800 bg-opacity-30 rounded-lg backdrop-blur-sm shadow-lg scroll-mt-24">
            <div className="flex items-center gap-3 mb-6 border-b border-purple-500/20 pb-4">
                <IconCoins className="w-6 h-6 text-purple-400" />
                <h2 className="text-[clamp(1.15rem,3vw,1.35rem)] font-bold text-purple-400">Grants & Funding</h2>
            </div>

            <div className="space-y-6">
                {grants.map((grant, index) => (
                    <CardSpotlight
                        key={index}
                        className="p-8 md:p-10 flex flex-col lg:flex-row lg:items-center gap-8 min-h-[200px]"
                        radius={200}
                        color="#059669" // Emerald spotlight for grants
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="relative z-20 flex flex-col lg:flex-row lg:items-center gap-8 w-full"
                        >
                            {/* Left Column: Visual Identity */}
                            <div className="flex flex-col items-center justify-center space-y-3 p-6 rounded-2xl bg-gray-900/40 border border-gray-700/50 min-w-[160px]">
                                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                                    {grant.icon}
                                </div>
                                <div className="text-center">
                                    <div className="text-emerald-400 font-bold text-2xl tracking-tight">{grant.amount}</div>
                                    <div className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mt-1">Grant Value</div>
                                </div>
                            </div>

                            {/* Right Column: Content */}
                            <div className="flex-1 space-y-4">
                                <div className="flex flex-wrap items-center gap-3">
                                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-[0.7rem] font-bold uppercase tracking-wider">
                                        {grant.date}
                                    </span>
                                    <span className="text-gray-400 text-sm font-medium">{grant.organization}</span>
                                </div>

                                <h3 className="text-[clamp(1.25rem,3vw,1.75rem)] font-bold text-white leading-tight">
                                    {grant.title}
                                </h3>

                                <p className="text-gray-300 text-base leading-relaxed">
                                    {grant.description}
                                </p>

                                <div className="flex items-start gap-3 pt-2">
                                    <IconSparkles className="w-5 h-5 text-emerald-400/80 mt-1 flex-shrink-0" />
                                    <p className="text-gray-400 text-sm italic leading-relaxed">
                                        {grant.impact}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </CardSpotlight>
                ))}
            </div>
        </section>
    );
}
