'use client';

import Image from 'next/image';
import React from 'react';
import { WobbleCard } from '@/components/ui/wobble-card';
import { motion } from 'framer-motion';
import { Trophy, Star, AwardIcon, Medal, GraduationCap } from 'lucide-react';

export default function Awards() {
  const awards = [
    {
      year: 2024,
      title: "Emerging Affinity Group Award",
      description: (
        <>
          IEEE Women in Engineering Student Branch Affinity Group of the University of Jaffna
          <br />
          (Team Advisor)
        </>
      ),
      icon: <AwardIcon className="w-8 h-8" />,
      color: "from-blue-500 to-purple-500",
    },
    {
      year: 2021,
      title: "Best Presentation Award",
      description: 'For the poster "Deep Learning for Diabetic Retinopathy Grading" presented in SL-SWCS\'21',
      icon: <Trophy className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
    },
    {
      year: 2020,
      title: "Best Paper Award",
      description: 'For "Loss functions for optimizing Kappa as the evaluation measure" in IEEE ICIIS',
      icon: <Star className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
    },
    {
      year: 2019,
      title: "Best Presentation Award",
      description: 'For the poster "Is Soft Pooling better than Max and Average Pooling?" in SL-SWCS\'19',
      icon: <Medal className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      year: 2017,
      title: "Sabalingam Memorial Prize",
      description: "For the Best Performance in the Special Degree examination in Science, University of Jaffna",
      icon: <GraduationCap className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500",
    }
  ];

  return (
    <section id="awards" className="mb-8 bg-inherit bg-opacity-70 p-6 bg-transparent rounded-lg backdrop-blur-sm shadow-lg">
      <h2 className="text-2xl font-bold mb-8 text-purple-400">Awards & Achievements</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        {awards.map((award, index) => (
          <WobbleCard
            key={index}
            containerClassName={`col-span-1 min-h-[200px] bg-gradient-to-br ${award.color} transform perspective-1000 hover:shadow-xl transition-all duration-300`}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, rotateY: 5 }}
              className="relative p-6"
            >
              <div className="absolute top-0 right-0 p-6 opacity-20">
                {award.icon}
              </div>
              <div className="relative z-5">
                <div className="text-white/80 text-sm font-medium mb-2">{award.year}</div>
                <h3 className="text-white text-2xl font-bold mb-2">{award.title}</h3>
                <p className="text-white/90 text-sm">{award.description}</p>
              </div>
            </motion.div>
          </WobbleCard>
        ))}
      </div>
    </section>
  );
}
