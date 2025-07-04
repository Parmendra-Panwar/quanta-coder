'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';
import RoadmapTimeline from '@/components/RoadmapTimeline';
import { Code, Globe, Database, Coffee, Brain, Building } from 'lucide-react';

export default function Roadmap() {
  const [selectedRoadmap, setSelectedRoadmap] = useState('fullstack');

  const roadmapTypes = [
    {
      id: 'fullstack',
      title: 'Full Stack Developer',
      icon: Code,
      description: 'Master both frontend and backend development',
      color: 'from-purple-600 to-blue-600'
    },
    {
      id: 'frontend',
      title: 'Frontend Developer',
      icon: Globe,
      description: 'Specialize in user interface and experience',
      color: 'from-blue-600 to-cyan-600'
    },
    {
      id: 'backend',
      title: 'Backend Developer',
      icon: Database,
      description: 'Focus on server-side development and APIs',
      color: 'from-green-600 to-teal-600'
    },
    {
      id: 'java',
      title: 'Java Developer',
      icon: Coffee,
      description: 'Enterprise Java development and frameworks',
      color: 'from-orange-600 to-red-600'
    },
    {
      id: 'ai',
      title: 'AI/ML Developer',
      icon: Brain,
      description: 'Artificial Intelligence and Machine Learning',
      color: 'from-pink-600 to-purple-600'
    },
    {
      id: 'company',
      title: 'Company Preparation',
      icon: Building,
      description: 'Complete preparation for tech companies',
      color: 'from-gray-600 to-slate-600'
    }
  ];

  return (
    <div className="overflow-hidden">
      <Hero 
        title="Learning Roadmap"
        subtitle="Your journey to coding excellence"
        description="Follow our comprehensive roadmaps designed to take you from beginner to advanced. Each path is crafted to build your skills progressively."
        buttonText="Start Learning"
        buttonLink="#roadmap-selection"
        imageSrc="https://images.pexels.com/photos/3183154/pexels-photo-3183154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        imageAlt="Learning path"
      />
      
      {/* Roadmap Selection */}
      <section id="roadmap-selection" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Path
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Select a roadmap that aligns with your career goals and interests
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {roadmapTypes.map((roadmap) => (
              <button
                key={roadmap.id}
                onClick={() => setSelectedRoadmap(roadmap.id)}
                className={`p-6 rounded-xl border-2 transition-all duration-300 text-left group ${
                  selectedRoadmap === roadmap.id
                    ? 'border-purple-600 bg-purple-50 shadow-lg scale-105'
                    : 'border-gray-200 hover:border-purple-300 hover:shadow-md'
                }`}
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${roadmap.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <roadmap.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{roadmap.title}</h3>
                <p className="text-gray-600 text-sm">{roadmap.description}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      <RoadmapTimeline selectedRoadmap={selectedRoadmap} />
    </div>
  );
}