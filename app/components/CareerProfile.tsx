"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { Timeline } from "@/components/ui/timeline";
import { IconBriefcase, IconCalendarWeek } from "@tabler/icons-react";

interface CareerItem {
  title: string;
  company: string;
  period: string;
  description?: string;
}

export function CareerProfile() {
  const careerItems: CareerItem[] = [
    {
      title: "Lecturer (Probationary)",
      company: "Department of Computer Science, University of Jaffna, Sri Lanka",
      period: "Dec 2021 – Present",
    },
    {
      title: "Research Assistant",
      company: "Department of Computer Science, University of Jaffna, Sri Lanka",
      period: "Apr 2018 – Apr 2020",
      description:
        "Developed a web-based dengue monitoring and warning system and modelling with dengue risk factors. Key skills: Laravel Framework, PHP and MySQL",
    },
    {
      title: "Associate Software Engineer",
      company: "WSO2, Lanka (Pvt) Ltd.",
      period: "May 2017 – Apr 2018",
      description:
        "Worked on enterprise platform for integrating application programming interfaces, applications, and web services locally and across the Internet. Key skills: XML, JAVA and IntelliJ",
    },
  ];

  const data = careerItems.map((item, index) => ({
    title: item.period,
    content: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="bg-gray-700 bg-opacity-50 p-4 sm:p-5 rounded-lg hover:bg-opacity-70 transition-all duration-300"
      >
        <h3 className="text-lg sm:text-xl font-semibold text-purple-300 flex items-center gap-2">
          <IconBriefcase className="w-5 h-5" />
          {item.title}
        </h3>
        <p className="text-gray-300 mt-2 text-sm sm:text-base">{item.company}</p>
        <p className="text-purple-400 mt-1 text-sm sm:text-base flex items-center gap-2">
          <IconCalendarWeek className="w-4 h-4" />
          {item.period}
        </p>
        {item.description && (
          <motion.p
            className="text-gray-400 mt-4 text-sm sm:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {item.description}
          </motion.p>
        )}
      </motion.div>
    ),
  }));

  return (
    <div id="career" className="mb-8 bg-gray-800 bg-opacity-50 p-4 sm:p-6 rounded-lg backdrop-blur-sm shadow-lg">
      <Timeline data={data} />
    </div>
  );
}

export default CareerProfile;
