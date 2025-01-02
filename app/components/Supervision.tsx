"use client";
import React, { useState, useRef, useEffect } from "react";
import { Users, UserCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { PinContainer } from "@/components/ui/3d-pin";
import { motion, AnimatePresence } from "framer-motion";

interface SupervisionCategory {
  title: string;
  count: number;
  icon: React.ReactNode;
}

export default function Supervision() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  
  const categories: SupervisionCategory[] = [
    {
      title: "Undergraduate Team Software Project",
      count: 9,
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Undergraduate Research Project (Co-Supervision)",
      count: 5,
      icon: <UserCheck className="w-6 h-6" />
    },
    {
      title: "Undergraduate Research Project (Main Supervision)",
      count: 4,
      icon: <UserCheck className="w-6 h-6" />
    }
  ];

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextCard();
    } else if (isRightSwipe) {
      prevCard();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 45 : -45
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.5
      }
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 45 : -45,
      transition: {
        duration: 0.5
      }
    })
  };

  const nextCard = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % categories.length);
  };

  const prevCard = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + categories.length) % categories.length);
  };

  return (
    <section id="supervision" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-16 text-purple-400">Supervision</h2>
        
        <div className="relative">
          {/* Mobile View */}
          <div className="md:hidden min-h-[480px] relative">
            <div 
              className="absolute inset-0 flex items-center justify-center px-4"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="w-full max-w-[320px]"
                >
                  <PinContainer title={`${categories[currentIndex].title}`}>
                    <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-full h-[360px]">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-purple-500 bg-opacity-20 p-3 rounded-full">
                          {categories[currentIndex].icon}
                        </div>
                        <h3 className="font-bold text-base text-slate-100">
                          {categories[currentIndex].title}
                        </h3>
                      </div>
                      <div className="text-3xl font-bold text-purple-300 mb-2">
                        {categories[currentIndex].count}
                      </div>
                      <div className="text-sm text-gray-400">
                        Projects/Students
                      </div>
                      <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                    </div>
                  </PinContainer>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Navigation */}
            <div className="absolute left-0 right-0 -bottom-8 flex justify-between items-center px-4 pb-4">
              <button 
                onClick={prevCard}
                className="p-2 rounded-full bg-purple-500 bg-opacity-20 text-white hover:bg-opacity-30 transition-colors"
                aria-label="Previous card"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <div className="flex gap-2">
                {categories.map((_, idx) => (
                  <div
                    key={idx}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      idx === currentIndex ? 'bg-purple-500' : 'bg-purple-500 bg-opacity-20'
                    }`}
                  />
                ))}
              </div>
              <button 
                onClick={nextCard}
                className="p-2 rounded-full bg-purple-500 bg-opacity-20 text-white hover:bg-opacity-30 transition-colors"
                aria-label="Next card"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Desktop View */}
          <div className="hidden md:flex justify-center items-center gap-2">
            {categories.map((category, index) => (
              <PinContainer key={index} title={`${category.title}`}>
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-purple-500 bg-opacity-20 p-3 rounded-full">
                      {category.icon}
                    </div>
                    <h3 className="font-bold text-base text-slate-100">
                      {category.title}
                    </h3>
                  </div>
                  <div className="text-3xl font-bold text-purple-300 mb-2">
                    {category.count}
                  </div>
                  <div className="text-sm text-gray-400">
                    Projects/Students
                  </div>
                  <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                </div>
              </PinContainer>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}