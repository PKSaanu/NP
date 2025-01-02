"use client";

import { useEffect, useState } from 'react';
import { Users, Cpu, Briefcase } from 'lucide-react';
import { CardSpotlight } from '@/components/ui/card-spotlight';

interface Membership {
  organization: string;
  role: string;
  period: string;
  icon: React.ReactNode;
}

export default function ProfessionalMemberships() {
  const memberships: Membership[] = [
    {
      organization: "IEEE Computer Society Technical Committee on Intelligent Informatics",
      role: "Member",
      period: "Since January 2025",
      icon: <Cpu className="w-6 h-6" />
    },
    {
      organization: "IEEE Computer Society Technical Committee on Pattern Analysis and Machine Intelligence",
      role: "Member",
      period: "Since January 2025",
      icon: <Cpu className="w-6 h-6" />
    },
    {
      organization: "IEEE Computer Society",
      role: "Member",
      period: "Since January 2025",
      icon: <Users className="w-6 h-6" />
    },
    {
      organization: "IEEE Computational Intelligence Society",
      role: "Member",
      period: "Since January 2022",
      icon: <Cpu className="w-6 h-6" />
    },
    {
      organization: "IEEE Women in Engineering",
      role: "Member",
      period: "Since March 2019",
      icon: <Users className="w-6 h-6" />
    },
    {
      organization: "IEEE Young Professionals",
      role: "Member",
      period: "Since October 2018",
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      organization: "IEEE",
      role: "Member",
      period: "Since January 2016",
      icon: <Users className="w-6 h-6" />
    },
    // Adding the new ones
    {
      organization: "Curriculum development committee for Master of Computer Science [MCS] and Master of Science in Computer Science [MSc (CS)], Faculty of Graduate Studies",
      role: "Member",
      period: "Since 30 July 2024",
      icon: <Cpu className="w-6 h-6" />
    },
    {
      organization: "Career Guidance Cell Faculty of Science",
      role: "Member",
      period: "Since 3 November 2023",
      icon: <Users className="w-6 h-6" />
    },
    {
      organization: "Science Faculty Board, University of Jaffna",
      role: "Member",
      period: "Since 10 February 2023",
      icon: <Users className="w-6 h-6" />
    }
  ];

  const [sortedMemberships, setSortedMemberships] = useState<Membership[]>([]);

  useEffect(() => {
    const sorted = memberships.sort((a, b) => {
      const dateA = new Date(a.period.replace("Since ", ""));
      const dateB = new Date(b.period.replace("Since ", ""));
      return dateB.getTime() - dateA.getTime();
    });
    setSortedMemberships(sorted);
  }, []);

  return (
    <section id="professionalmemberships" className="mb-8 bg-gray-800 bg-opacity-50 p-6 rounded-lg backdrop-blur-sm shadow-lg">
      <CardSpotlight>
        <h2 className="text-2xl font-bold mb-6 text-purple-400">Professional Memberships</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sortedMemberships.map((membership, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="bg-purple-500 bg-opacity-20 p-3 rounded-full">
                {membership.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-200">{membership.organization}</h3>
                <p className="text-purple-300">{membership.role}</p>
                <p className="text-sm text-gray-400">{membership.period}</p>
              </div>
            </div>
          ))}
        </div>
      </CardSpotlight>
    </section>
  );
}
