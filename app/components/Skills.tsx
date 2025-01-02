'use client'
import { useRef, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Brain, ImageIcon, Eye, Binary, Code, Database, Server, Layout, Search, BookOpen, Microscope, GraduationCap } from 'lucide-react'
import React, { useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function Skills(){
  return (
    <div className="">
      <InfiniteMovingCards
        items={skills}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const skills = [
  { quote: "Deep Learning", name: "AI", title: "Deep Learning", icon: <Brain className="w-6 h-6" />, image: "/images/ai.png" },
  { quote: "Medical Image Analysis", name: "AI", title: "Medical Image Analysis", icon: <ImageIcon className="w-6 h-6" />, image: "/images/mi.png" },
  { quote: "Computer Vision", name: "AI", title: "Computer Vision", icon: <Eye className="w-6 h-6" />, image: "/images/CV.png" },
  { quote: "Machine Learning", name: "AI", title: "Machine Learning", icon: <Binary className="w-6 h-6" />, image: "/images/ML.png" },
  { quote: "Python", name: "Programming", title: "Python", icon: <Code className="w-6 h-6" />, image: "/images/python.png" },
  { quote: "TensorFlow", name: "AI", title: "TensorFlow", icon: <Brain className="w-6 h-6" />, image: "/images/tensor.png" },
  { quote: "PyTorch", name: "AI", title: "PyTorch", icon: <Brain className="w-6 h-6" />, image: "/images/pt.png" },
  { quote: "OpenCV", name: "AI", title: "OpenCV", icon: <Eye className="w-6 h-6" />, image: "/images/OCV.png" },
  { quote: "MATLAB", name: "Programming", title: "MATLAB", icon: <Binary className="w-6 h-6" />, image: "/images/matlab2.png" },
  { quote: "Java", name: "Programming", title: "Java", icon: <Code className="w-6 h-6" />, image: "/images/java.png" },
  { quote: "PHP", name: "Programming", title: "PHP", icon: <Server className="w-6 h-6" />, image: "/images/php.png" },
  { quote: "Laravel", name: "Web", title: "Laravel", icon: <Server className="w-6 h-6" />, image: "/images/laravel.png" },
  { quote: "MySQL", name: "Database", title: "MySQL", icon: <Database className="w-6 h-6" />, image: "/images/mysql.png" },
  { quote: "Research", name: "Academic", title: "Research", icon: <Search className="w-6 h-6" />, image: "/images/research.png" },
  { quote: "Teaching", name: "Academic", title: "Teaching", icon: <GraduationCap className="w-6 h-6" />, image: "/images/tech.png" },
  { quote: "Academic Writing", name: "Academic", title: "Academic Writing", icon: <BookOpen className="w-6 h-6" />, image: "/images/academic.png" },
  { quote: "Scientific Analysis", name: "Research", title: "Scientific Analysis", icon: <Microscope className="w-6 h-6" />, image: "/images/sa.png" },
];



