'use client'

import { useState } from 'react'
import { IconBooks, IconAward, IconFileDescription, IconNews, IconChevronDown, IconChevronUp, IconTrophy, IconSchool, IconMicroscope, IconPresentation } from '@tabler/icons-react'
import { motion, AnimatePresence } from 'framer-motion'
import { LinkPreview } from "@/components/ui/link-preview";

interface Publication {
  title: string
  authors: string
  journal: string
  year: number
  abstract?: string
  doi?: string
  status?: string
  impact?: string
  award?: string
  volume?: string
  pages?: string
}

export default function Publications() {
  const [expandedPublication, setExpandedPublication] = useState<number | null>(null)

  const journals: Publication[] = [
    {
      title: "A lightweight semi-supervised active learning framework for blood cell image classification",
      authors: "Thanushika, T., Manivannan, S. and Nirthika, R.",
      journal: "The Visual Computer, Springer",
      volume: "42",
      pages: "166",
      year: 2026,
      doi: "10.1007/s00371-025-04346-1",
      impact: "Q2, Journal Impact Factor (JIF): 2.9",
      abstract: "This paper presents a novel approach to blood cell classification using a lightweight semi-supervised active learning framework..."
    },
    {
      title: "Siamese Network based Fine Grained Classification for Diabetic Retinopathy Grading",
      authors: "Nirthika, R., Manivannan, S. and Ramanan, A.",
      journal: "Biomedical Signal Processing and Control, Elsevier",
      volume: "78",
      pages: "103874",
      year: 2022,
      doi: "10.1016/j.bspc.2022.103874",
      impact: "Q1, Impact Factor: 5.1",
      abstract: "This paper introduces a Siamese network for fine-grained classification of diabetic retinopathy..."
    },
    {
      title: "Pooling in Convolutional Neural Networks for Medical Image Analysis: A Survey and an Empirical Study",
      authors: "Nirthika, R., Manivannan, S., Ramanan, A. and Wang, R.",
      journal: "Neural Computing and Applications, Springer",
      pages: "1-27",
      year: 2022,
      doi: "10.1007/s00521-022-06953-8",
      impact: "Q1, Impact Factor: 5.1",
      abstract: "This survey paper explores various pooling techniques in CNNs for medical image analysis..."
    }
  ];

  const conferences: Publication[] = [
    {
      title: "An Experimental Study on Convolutional Neural Network-Based Pooling Techniques for the Classification of HEp-2 Cell Images",
      authors: "Nirthika, R., Manivannan, S. and Ramanan, A.",
      journal: "10th IEEE International Conference on Information and Automation for Sustainability (ICIAfS)",
      year: 2021,
      doi: "10.1109/ICIAfS52090.2021.9606157",
      abstract: "This study investigates various pooling techniques in CNNs for medical image classification...",
    },
    {
      title: "Look at Both Eyes: Deep Learning Based Feature Fusion Strategies for the Classification of Diabetic Retinopathy Lesions",
      authors: "Nirthika, R., Manivannan, S. and Ramanan, A.",
      journal: "10th IEEE International Conference on Information and Automation for Sustainability (ICIAfS)",
      year: 2021,
      pages: "263-268",
      doi: "10.1109/ICIAfS52090.2021.9605991",
      abstract: "This paper explores feature fusion strategies for the classification of diabetic retinopathy lesions using deep learning..."
    },
    {
      title: "Loss functions for optimizing Kappa as the evaluation measure for classifying diabetic retinopathy and prostate cancer images",
      authors: "Nirthika, R., Manivannan, S., and Ramanan, A.",
      journal: "IEEE International Conference on Industrial and Information Systems (ICIIS)",
      year: 2020,
      pages: "144-149",
      doi: "10.1109/ICIIS51140.2020.9342711",
      award: "Best Paper Award",
      abstract: "This study focuses on optimizing Kappa as the evaluation measure for classifying diabetic retinopathy and prostate cancer images using loss functions..."
    }
  ];


  const workshops: Publication[] = [
    {
      title: "Deep Learning for Diabetic Retinopathy Grading",
      authors: "Nirthika, R., Manivannan, S. and Ramanan, A.",
      journal: "The Sri Lanka Student Workshop on Computer Science-2021 (SL-SWCS'21)",
      year: 2021,
      award: "Best Presentation Award",
      abstract: "This poster presents a deep learning approach to grade diabetic retinopathy..."
    },
    {
      title: "Is Soft Pooling better than Max and Average Pooling? A comparative study on HEp-2 Cells and Retinal image classification tasks",
      authors: "Nirthika, R., Manivannan, S. and Ramanan, A.",
      journal: "SL-SWCS'19, University of Jaffna",
      year: 2019,
      award: "Best Presentation Award",
      abstract: "This study compares soft pooling with max and average pooling for HEp-2 cell and retinal image classification tasks..."
    },
    {
      title: "A Web-Based Dengue Monitoring and Warning System",
      authors: "Nirthika, R., Ramanan A., and Surendran S.N.",
      journal: "SL-SWCS'19, University of Jaffna",
      year: 2019,
      abstract: "This poster demonstrates a web-based system for monitoring and warning about dengue outbreaks..."
    },
    {
      title: "A Web-Based Dengue Monitoring and Control System",
      authors: "Nirthika, R., Ramanan A., and Gajapathy K.",
      journal: "SL-SWCS'17, University of Jaffna",
      year: 2017,
      abstract: "This work presents a web-based system designed for dengue monitoring and control..."
    }
  ];


  const newsletters: Publication[] = [
    {
      title: "GenAI for Researchers in Computing",
      authors: "Nirthika, R.",
      journal: "Kananiyam Newsletter, by CompSoc, Department of Computer Science, University of Jaffna",
      year: 2025,
      volume: "6",
      doi: "https://tinyurl.com/Kananiyam-Vol-6-2025",
      abstract: "This article discusses the applications and implications of Generative AI for researchers in computing..."
    },
    {
      title: "Combined Semi-Supervised Learning and Active Learning (SSL&AL) Framework for the Limited Labeled Data",
      authors: "Thanushika, T. and Nirthika, R.",
      journal: "ComSpective the ICT Technical Magazine",
      year: 2024,
      doi: "https://tinyurl.com/ComSpective-Vol-4-Issue-2-2024",
      volume: "4",
      abstract: "This article discusses the combination of semi-supervised and active learning approaches..."
    },
    {
      title: "Diabetic Retinopathy Fundus Image Grading Using Deep Learning: Research Directions",
      authors: "Nirthika, R.",
      journal: "CIS ComSpective - the ICT Technical Magazine",
      year: 2022,
      volume: "2",
      pages: "1",
      abstract: "This article explores research directions in deep learning-based grading of diabetic retinopathy fundus images...",
      doi: "https://tinyurl.com/ComSpective-Vol-2-Issue-I-2022"
    },
    {
      title: "Best Practices for Professionals",
      authors: "Nirthika, R.",
      journal: "JSA Newsletter - Pirayooka Vingnana Sudar",
      year: 2023,
      volume: "13",
      abstract: "This article shares best Practices for professionals in the field of computer science and technology..."
    },
    {
      title: "An Introduction to the Role of Loss Functions in Deep Learning",
      authors: "Nirthika, R.",
      journal: "IEEE Sri Lanka Section Newsletter",
      year: 2022,
      abstract: "This article provides an introduction to the role of loss functions in deep learning models and their applications..."
    }
  ];


  const thesis: Publication[] = [
    {
      title: "Deep Learning Based Fine-Grained Diabetic Retinopathy Image Grading",
      authors: "Nirthika, R.",
      journal: "PhD Thesis, University of Jaffna",
      year: 2022,
      abstract: "This thesis explores advanced deep learning techniques for fine-grained grading of diabetic retinopathy images...",
      doi: "https://example.com/thesis-preview"
    }
  ]

  const renderPublication = (pub: Publication, index: number, currentSection: number) => {
    const isExpanded = expandedPublication === index + (currentSection * 1000);

    return (
      <motion.div
        layout
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={`group relative overflow-hidden rounded-2xl border border-gray-700/50 bg-gray-800/30 p-6 backdrop-blur-md transition-all duration-500 hover:border-purple-500/50 hover:bg-gray-800/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] cursor-pointer ${isExpanded ? "border-purple-500/50 bg-gray-800/50 shadow-[0_8px_30px_rgb(0,0,0,0.12)] ring-1 ring-purple-500/20" : ""
          }`}
        onClick={() => setExpandedPublication(isExpanded ? null : index + (currentSection * 1000))}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <motion.div layout="position" className="relative z-10 flex justify-between items-start gap-6">
          <div className="flex-1 space-y-3">
            <h4 className="font-bold text-[clamp(1.1rem,2.5vw,1.25rem)] text-gray-100 group-hover:text-purple-300 transition-colors duration-300 leading-snug">
              {pub.title}
            </h4>
            <p className="text-gray-300 text-[clamp(0.9rem,2vw,1rem)] font-medium">{pub.authors}</p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-gray-400 text-[clamp(0.85rem,2vw,0.95rem)]">
              <span className="flex items-center gap-1.5"><IconBooks className="w-4 h-4 text-purple-400/70" /> {pub.journal} {pub.year && `(${pub.year})`}</span>
              {pub.volume && <span className="flex items-center gap-1.5"><IconFileDescription className="w-4 h-4 text-purple-400/70" /> Vol. {pub.volume}</span>}
              {pub.pages && <span className="flex items-center gap-1.5"><IconFileDescription className="w-4 h-4 text-purple-400/70" /> pp. {pub.pages}</span>}
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              {pub.impact && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium backdrop-blur-sm">
                  <IconAward className="w-4 h-4" />
                  {pub.impact}
                </span>
              )}
              {pub.status && (
                <span className="inline-flex items-center px-3 py-1 rounded-md bg-pink-500/10 border border-pink-500/20 text-pink-400 text-sm font-medium backdrop-blur-sm">
                  {pub.status}
                </span>
              )}
              {pub.award && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-sm font-medium backdrop-blur-sm">
                  🏆 {pub.award}
                </span>
              )}
            </div>
          </div>

          <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-gray-800/80 border border-gray-700/80 text-gray-400 transition-all duration-500 group-hover:border-purple-500/50 group-hover:text-purple-400 group-hover:bg-purple-500/10 ${isExpanded ? "rotate-180 border-purple-500/50 text-purple-400 bg-purple-500/10" : ""}`}>
            <IconChevronDown className="w-5 h-5 transition-transform duration-500" />
          </div>
        </motion.div>

        <AnimatePresence initial={false}>
          {isExpanded && pub.abstract && (
            <motion.div
              layout="position"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
              className="relative z-10 overflow-hidden"
            >
              <div className="pt-6 mt-4 border-t border-gray-700/50">
                <h5 className="flex items-center gap-2 text-[clamp(0.8rem,2vw,0.875rem)] font-semibold text-purple-300 uppercase tracking-wider mb-3">
                  <IconFileDescription className="w-4 h-4" /> Abstract
                </h5>
                <p className="text-gray-300 text-[clamp(0.875rem,2.5vw,1rem)] leading-relaxed text-justify opacity-90">
                  {pub.abstract}
                </p>
                {pub.doi && (
                  <motion.div layout className="mt-6">
                    <a
                      href={pub.doi.startsWith("http") ? pub.doi : `https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-purple-600/90 hover:bg-purple-500 text-white font-medium transition-all duration-300 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 hover:-translate-y-0.5"
                    >
                      <IconMicroscope className="w-5 h-5" />
                      Read Full Paper
                    </a>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  };


  return (
    <section id="publications" className="mb-8 bg-gray-800 bg-opacity-50 p-6 rounded-lg backdrop-blur-sm shadow-lg">
      <h2 className="text-[clamp(1.25rem,4vw,1.5rem)] font-bold mb-8 text-purple-400">Publications</h2>

      <div className="space-y-8">
        <div>
          <h3 className="flex items-center gap-2 text-[clamp(1.1rem,3vw,1.25rem)] font-semibold mb-4 text-purple-300">
            <IconBooks className="w-7 h-7" />
            Indexed International Journals
          </h3>
          <div className="space-y-4">
            {journals.map((pub, index) => renderPublication(pub, index, 0))}
          </div>
        </div>

        <div>
          <h3 className="flex items-center gap-2 text-[clamp(1.1rem,3vw,1.25rem)] font-semibold mb-4 text-purple-300">
            <IconSchool className="w-7 h-7" />
            International Conference Full Papers
          </h3>
          <div className="space-y-4">
            {conferences.map((pub, index) => renderPublication(pub, index, 1))}
          </div>
        </div>

        <div>
          <h3 className="flex items-center gap-2 text-[clamp(1.1rem,3vw,1.25rem)] font-semibold mb-4 text-purple-300">
            <IconPresentation className="w-7 h-7" />
            National Workshop Posters
          </h3>
          <div className="space-y-4">
            {workshops.map((pub, index) => renderPublication(pub, index, 2))}
          </div>
        </div>

        <div>
          <h3 className="flex items-center gap-2 text-[clamp(1.1rem,3vw,1.25rem)] font-semibold mb-4 text-purple-300">
            <IconNews className="w-7 h-7" />
            Articles in Newsletters
          </h3>
          <div className="space-y-4">
            {newsletters.map((pub, index) => renderPublication(pub, index, 3))}
          </div>
        </div>
        <div>
          <h3 className="flex items-center gap-2 text-[clamp(1.1rem,3vw,1.25rem)] font-semibold mb-4 text-purple-300">
            <IconSchool className="w-7 h-7" />
            Thesis
          </h3>
          <div className="space-y-4">
            {thesis.map((pub, index) => renderPublication(pub, index, 4))}
          </div>
        </div>
      </div>
    </section>
  )
}


