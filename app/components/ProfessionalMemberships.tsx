"use client";

import { useEffect, useState } from 'react';
import { IconUsers, IconCpu, IconBriefcase } from '@tabler/icons-react';
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
      organization: "IEEE",
      role: "Senior Member",
      period: "Since January 2025",
      icon: <IconUsers className="w-5 h-5 md:w-6 md:h-6" />
    },
    {
      organization: "IEEE Computer Society Technical Committee on Intelligent Informatics",
      role: "Member",
      period: "Since January 2025",
      icon: <IconCpu className="w-5 h-5 md:w-6 md:h-6" />
    },
    {
      organization: "IEEE Computer Society Technical Committee on Pattern Analysis and Machine Intelligence",
      role: "Member",
      period: "Since January 2025",
      icon: <IconCpu className="w-5 h-5 md:w-6 md:h-6" />
    },
    {
      organization: "IEEE Computer Society",
      role: "Member",
      period: "Since January 2025",
      icon: <IconUsers className="w-5 h-5 md:w-6 md:h-6" />
    },
    {
      organization: "IEEE Computational Intelligence Society",
      role: "Member",
      period: "Since January 2022",
      icon: <IconCpu className="w-5 h-5 md:w-6 md:h-6" />
    },
    {
      organization: "IEEE Women in Engineering",
      role: "Member",
      period: "Since March 2019",
      icon: <IconUsers className="w-5 h-5 md:w-6 md:h-6" />
    },
    {
      organization: "IEEE Young Professionals",
      role: "Member",
      period: "Since October 2018",
      icon: <IconBriefcase className="w-5 h-5 md:w-6 md:h-6" />
    },
    {
      organization: "IEEE",
      role: "Professional Member",
      period: "2022-2025",
      icon: <IconUsers className="w-5 h-5 md:w-6 md:h-6" />
    },
    {
      organization: "IEEE",
      role: "Graduate Member",
      period: "2019-2022",
      icon: <IconUsers className="w-5 h-5 md:w-6 md:h-6" />
    },
    {
      organization: "IEEE",
      role: "Student Member",
      period: "2017-2019",
      icon: <IconUsers className="w-5 h-5 md:w-6 md:h-6" />
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
    <section id="memberships" className="mb-8 bg-gray-800 bg-opacity-50 p-6 rounded-lg backdrop-blur-sm shadow-lg">
      <CardSpotlight>
        <h2 className="text-[clamp(1.25rem,4vw,1.5rem)] font-bold mb-6 text-purple-400">Professional Memberships</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {sortedMemberships.map((membership, index) => (
            <div key={index} className="flex items-start space-x-3 md:space-x-4">
              <div className="bg-purple-500 bg-opacity-20 p-2 md:p-3 rounded-full shrink-0">
                {membership.icon}
              </div>
              <div>
                <h3 className="text-[clamp(1rem,3vw,1.125rem)] font-semibold text-gray-200">{membership.organization}</h3>
                <p className="text-purple-300 text-[clamp(0.875rem,2.5vw,1rem)]">{membership.role}</p>
                <p className="text-[clamp(0.8rem,2vw,0.875rem)] text-gray-400">{membership.period}</p>
              </div>
            </div>
          ))}
        </div>
      </CardSpotlight>
    </section>
  );
}
