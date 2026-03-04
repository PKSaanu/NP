"use client";
import React from "react";
import { IconUsers, IconUserCheck, IconSchool } from '@tabler/icons-react';
import { CardSpotlight } from "@/components/ui/card-spotlight";

interface SupervisionCategory {
  title: string;
  count: number;
  icon: React.ReactNode;
  color: string;
}

export default function Supervision() {
  const categories: SupervisionCategory[] = [
    {
      title: "Undergraduate Team Software Project",
      count: 15,
      icon: <IconUsers className="w-10 h-10" />,
      color: "from-blue-400 to-indigo-500"
    },
    {
      title: "Undergraduate Research Project (Co-Supervision)",
      count: 5,
      icon: <IconUserCheck className="w-10 h-10" />,
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "Undergraduate Research Project (Main Supervision)",
      count: 9,
      icon: <IconUserCheck className="w-10 h-10" />,
      color: "from-amber-400 to-orange-500"
    },
    {
      title: "External Degree Software Project (BIT from UCSC)",
      count: 1,
      icon: <IconSchool className="w-10 h-10" />,
      color: "from-emerald-400 to-teal-500"
    }
  ];

  return (
    <section id="supervision" className="mb-8 p-6 bg-gray-800 bg-opacity-30 rounded-lg backdrop-blur-sm shadow-lg">
      <h2 className="text-[clamp(1.15rem,3vw,1.35rem)] font-bold mb-6 text-purple-400 border-b border-purple-500/20 pb-4">Supervision & Mentorship</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl mx-auto">
        {categories.map((category, index) => (
          <CardSpotlight
            key={index}
            className="h-[180px] p-6 flex flex-col justify-between"
            radius={200}
            color="#6b21a8" // Purple spotlight
          >
            <div className="relative z-20 flex justify-between items-start w-full">
              <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} bg-opacity-20 text-white shadow-lg backdrop-blur-sm border border-white/10`}>
                {React.cloneElement(category.icon as React.ReactElement, { className: "w-7 h-7" })}
              </div>
              <div className="text-right">
                <span className={`text-[clamp(2.5rem,5vw,3.5rem)] font-bold bg-gradient-to-br ${category.color} text-transparent bg-clip-text leading-none drop-shadow-sm`}>
                  {category.count}
                </span>
                <div className="text-gray-400 text-[0.7rem] mt-1 uppercase tracking-wider font-semibold">Projects</div>
              </div>
            </div>

            <div className="relative z-20 mt-auto">
              <h3 className="text-[clamp(0.95rem,2vw,1.1rem)] font-medium text-white/90 leading-snug">
                {category.title}
              </h3>
            </div>
          </CardSpotlight>
        ))}
      </div>
    </section>
  );
}