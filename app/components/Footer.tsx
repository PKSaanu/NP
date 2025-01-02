"use client";
import React from "react";
import { motion } from "framer-motion";
import { LinkPreview } from "@/components/ui/link-preview";

export default function Footer() {
  return (
    <footer className="text-center py-4 bg-gray-800 bg-opacity-50 rounded-lg backdrop-blur-sm">
      <p className="text-gray-400 hover:cursor-default">
        &copy; {new Date().getFullYear()} Dr. Nirthika Rajendran. All rights reserved.
      </p>
      <p className="font-mono text-gray-500 hover:text-indigo-400 cursor-default">
        Designed by{' '}
        <a
          href="https://www.linkedin.com/in/saanusan-karuppaiyah"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:underline decoration-indigo-600 shadow-violet-400"
          style={{ opacity: 0.8 }}
        >
          PKSaanu
        </a>
      </p>
    </footer>
  );
}
