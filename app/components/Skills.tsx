'use client'
import { useRef, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { IconBrain, IconPhoto, IconEye, IconBinary, IconCode, IconDatabase, IconServer, IconLayout, IconSearch, IconBook, IconMicroscope, IconSchool } from '@tabler/icons-react'
import React, { useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function Skills() {
  return (
    <section id="skills" className="mb-8">
      <InfiniteMovingCards
        items={skills}
        direction="right"
        speed="slow"
      />
    </section>
  );
}

const skills = [
  { quote: "Deep Learning", name: "AI", title: "Deep Learning", icon: <IconBrain className="w-6 h-6" />, image: "/images/ai.png" },
  { quote: "Medical Image Analysis", name: "AI", title: "Medical Image Analysis", icon: <IconPhoto className="w-6 h-6" />, image: "/images/mi.png" },
  { quote: "Computer Vision", name: "AI", title: "Computer Vision", icon: <IconEye className="w-6 h-6" />, image: "/images/CV.png" },
  { quote: "Machine Learning", name: "AI", title: "Machine Learning", icon: <IconBinary className="w-6 h-6" />, image: "/images/ML.png" },
  { quote: "Python", name: "Programming", title: "Python", icon: <IconCode className="w-6 h-6" />, image: "/images/python.png" },
  { quote: "TensorFlow", name: "AI", title: "TensorFlow", icon: <IconBrain className="w-6 h-6" />, image: "/images/tensor.png" },
  { quote: "PyTorch", name: "AI", title: "PyTorch", icon: <IconBrain className="w-6 h-6" />, image: "/images/pt.png" },
  { quote: "OpenCV", name: "AI", title: "OpenCV", icon: <IconEye className="w-6 h-6" />, image: "/images/OCV.png" },
  { quote: "MATLAB", name: "Programming", title: "MATLAB", icon: <IconBinary className="w-6 h-6" />, image: "/images/matlab2.png" },
  { quote: "Java", name: "Programming", title: "Java", icon: <IconCode className="w-6 h-6" />, image: "/images/java.png" },
  { quote: "PHP", name: "Programming", title: "PHP", icon: <IconServer className="w-6 h-6" />, image: "/images/php.png" },
  { quote: "Laravel", name: "Web", title: "Laravel", icon: <IconServer className="w-6 h-6" />, image: "/images/laravel.png" },
  { quote: "MySQL", name: "Database", title: "MySQL", icon: <IconDatabase className="w-6 h-6" />, image: "/images/mysql.png" },
  { quote: "Research", name: "Academic", title: "Research", icon: <IconSearch className="w-6 h-6" />, image: "/images/research.png" },
  { quote: "Teaching", name: "Academic", title: "Teaching", icon: <IconSchool className="w-6 h-6" />, image: "/images/tech.png" },
  { quote: "Academic Writing", name: "Academic", title: "Academic Writing", icon: <IconBook className="w-6 h-6" />, image: "/images/academic.png" },
  { quote: "Scientific Analysis", name: "Research", title: "Scientific Analysis", icon: <IconMicroscope className="w-6 h-6" />, image: "/images/sa.png" },
];



