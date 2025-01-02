'use client'

import { useState } from 'react'
import { Book, Award, FileText, Newspaper, ChevronDown, ChevronUp, Trophy, GraduationCap } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { LinkPreview } from "@/components/ui/link-preview";
import { IconAward, IconBooks, IconLink, IconMicroscope, IconNews, IconPresentation, IconSchool } from '@tabler/icons-react';

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
      title: "A Self-Training based Semi-Supervised Active Learning for the Classification of Blood Cells",
      authors: "Thanushika, T., Manivannan, S. and Nirthika, R.",
      journal: "Computers in Biology and Medicine, Elsevier",
      status: "Under Review",
      year: 2024,
      impact: "Q1, Impact Factor: 7.0",
      abstract: "This paper presents a novel approach to blood cell classification using semi-supervised active learning..."
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
      title: "Combined Semi-Supervised Learning and Active Learning (SSL&AL) Framework for the Limited Labeled Data",
      authors: "Thanushika, T. and Nirthika, R.",
      journal: "ComSpective the ICT Technical Magazine",
      year: 2024,
      status: "Accepted",
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
      doi: "http://repo.lib.jfn.ac.lk/ujrr/bitstream/123456789/9041/1/Diabetic%20Retinopathy%20Fundus%20Image%20Grading%20Using%20Deep%20Learning%20Research%20Directions.pdf"
    },
    {
      title: "Best Practices for Professionals",
      authors: "Nirthika, R.",
      journal: "JSA Newsletter - Pirayooka Vingnana Sudar",
      year: 2023,
      volume: "13",
      abstract: "This article shares best practices for professionals in the field of computer science and technology..."
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
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={`border-l-4 border-purple-500 pl-4 py-4 transition-all duration-300 hover:border-pink-500 hover:bg-gray-700 hover:bg-opacity-50 rounded relative overflow-hidden cursor-pointer ${
          isExpanded ? "bg-gray-700 bg-opacity-50" : ""
        }`}
        onClick={() => setExpandedPublication(isExpanded ? null : index + (currentSection * 1000))}
      >
        <div className="flex justify-between items-start gap-4">
          <div className="flex-1">
            <p className="font-semibold text-lg text-gray-100">{pub.title}</p>
            <p className="text-gray-300 mt-2">{pub.authors}</p>
            <p className="text-gray-400 mt-1">{pub.journal}, {pub.year}</p>
            {pub.volume && <p className="text-gray-400">Volume: {pub.volume}</p>}
            {pub.pages && <p className="text-gray-400">Pages: {pub.pages}</p>}
            {pub.impact && <p className="text-sm text-purple-300 mt-2">{pub.impact}</p>}
            {pub.status && <p className="text-sm text-pink-400 mt-1">{pub.status}</p>}
            {pub.award && (
              <motion.p 
                className="inline-flex items-center gap-2 text-yellow-400 mt-2 bg-yellow-900 bg-opacity-20 px-3 py-1 rounded-full"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
               🏆 {pub.award}
              </motion.p>
            )}
          </div>
          <div className="text-gray-400 hover:text-purple-400 transition-colors duration-200" aria-label={isExpanded ? "Collapse" : "Expand"}>
            {isExpanded ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
          </div>
        </div>
        
        <AnimatePresence>
          {isExpanded && pub.abstract && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 pl-4 border-l-2 border-gray-700"
            >
              <h4 className="text-sm font-semibold text-gray-300 mb-2">Abstract</h4>
              <p className="text-gray-400 text-sm">{pub.abstract}</p>
              {pub.doi && (
                <a 
                  href={pub.doi.startsWith("http") ? pub.doi : `https://doi.org/${pub.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-purple-400 hover:text-purple-300 transition-colors duration-200"
                >
                  <IconMicroscope className="w-6 h-6" />
                  View Paper
                </a>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  };
  

  return (
    <section id="publications" className="mb-8 bg-gray-800 bg-opacity-50 p-6 rounded-lg backdrop-blur-sm shadow-lg">
      <h2 className="text-2xl font-bold mb-8 text-purple-400">Publications</h2>
      
      <div className="space-y-8">
        <div>
          <h3 className="flex items-center gap-2 text-xl font-semibold mb-4 text-purple-300">
            <IconBooks className="w-7 h-7" />
            Indexed International Journals
          </h3>
          <div className="space-y-4">
            {journals.map((pub, index) => renderPublication(pub, index, 0))}
          </div>
        </div>

        <div>
          <h3 className="flex items-center gap-2 text-xl font-semibold mb-4 text-purple-300">
            <IconAward className="w-7 h-7" />
            International Conference Full Papers
          </h3>
          <div className="space-y-4">
            {conferences.map((pub, index) => renderPublication(pub, index, 1))}
          </div>
        </div>

        <div>
          <h3 className="flex items-center gap-2 text-xl font-semibold mb-4 text-purple-300">
            <IconPresentation className="w-7 h-7" />
            National Workshop Posters
          </h3>
          <div className="space-y-4">
            {workshops.map((pub, index) => renderPublication(pub, index, 2))}
          </div>
        </div>

        <div>
          <h3 className="flex items-center gap-2 text-xl font-semibold mb-4 text-purple-300">
            <IconNews className="w-7 h-7" />
            Articles in Newsletters
          </h3>
          <div className="space-y-4">
            {newsletters.map((pub, index) => renderPublication(pub, index, 3))}
          </div>
        </div>
        <div>
          <h3 className="flex items-center gap-2 text-xl font-semibold mb-4 text-purple-300">
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

