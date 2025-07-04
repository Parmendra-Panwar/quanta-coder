'use client';

import { useEffect, useState, useRef } from 'react';
import { CheckCircle, Circle, Code, Database, Globe, Smartphone, Brain, Cloud, Coffee, Building, BookOpen, Trophy, Users, Zap } from 'lucide-react';

interface RoadmapTimelineProps {
  selectedRoadmap: string;
}

export default function RoadmapTimeline({ selectedRoadmap }: RoadmapTimelineProps) {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const roadmaps = {
    fullstack: [
      {
        title: 'Foundation',
        description: 'Learn programming fundamentals and basic concepts',
        icon: Code,
        skills: ['HTML/CSS', 'JavaScript', 'Git/GitHub', 'Problem Solving'],
        duration: '2-3 months',
        level: 'Beginner',
      },
      {
        title: 'Frontend Development',
        description: 'Master modern frontend technologies and frameworks',
        icon: Globe,
        skills: ['React/Vue', 'TypeScript', 'Responsive Design', 'State Management'],
        duration: '3-4 months',
        level: 'Intermediate',
      },
      {
        title: 'Backend Development',
        description: 'Build robust server-side applications and APIs',
        icon: Database,
        skills: ['Node.js/Python', 'Databases', 'REST APIs', 'Authentication'],
        duration: '3-4 months',
        level: 'Intermediate',
      },
      {
        title: 'Full Stack Integration',
        description: 'Combine frontend and backend for complete applications',
        icon: Cloud,
        skills: ['System Design', 'DevOps', 'Testing', 'Deployment'],
        duration: '2-3 months',
        level: 'Advanced',
      },
      {
        title: 'Advanced Topics',
        description: 'Microservices, scalability, and performance optimization',
        icon: Brain,
        skills: ['Microservices', 'Docker', 'Kubernetes', 'Performance'],
        duration: '4-6 months',
        level: 'Expert',
      },
    ],
    frontend: [
      {
        title: 'HTML & CSS Mastery',
        description: 'Master the building blocks of web development',
        icon: Code,
        skills: ['HTML5', 'CSS3', 'Flexbox', 'Grid', 'Responsive Design'],
        duration: '1-2 months',
        level: 'Beginner',
      },
      {
        title: 'JavaScript Fundamentals',
        description: 'Learn modern JavaScript and ES6+ features',
        icon: Globe,
        skills: ['ES6+', 'DOM Manipulation', 'Async/Await', 'Modules'],
        duration: '2-3 months',
        level: 'Beginner',
      },
      {
        title: 'Frontend Frameworks',
        description: 'Master React, Vue, or Angular',
        icon: Smartphone,
        skills: ['React/Vue/Angular', 'Component Architecture', 'State Management', 'Routing'],
        duration: '3-4 months',
        level: 'Intermediate',
      },
      {
        title: 'Advanced Frontend',
        description: 'Performance optimization and advanced patterns',
        icon: Brain,
        skills: ['Performance', 'Testing', 'Build Tools', 'PWAs'],
        duration: '2-3 months',
        level: 'Advanced',
      },
      {
        title: 'UI/UX Integration',
        description: 'Design systems and user experience',
        icon: Trophy,
        skills: ['Design Systems', 'Accessibility', 'Animation', 'User Testing'],
        duration: '2-3 months',
        level: 'Expert',
      },
    ],
    backend: [
      {
        title: 'Programming Fundamentals',
        description: 'Master a backend programming language',
        icon: Code,
        skills: ['Python/Java/Node.js', 'Data Structures', 'Algorithms', 'OOP'],
        duration: '2-3 months',
        level: 'Beginner',
      },
      {
        title: 'Database Management',
        description: 'Learn database design and management',
        icon: Database,
        skills: ['SQL', 'NoSQL', 'Database Design', 'Query Optimization'],
        duration: '2-3 months',
        level: 'Intermediate',
      },
      {
        title: 'API Development',
        description: 'Build RESTful and GraphQL APIs',
        icon: Cloud,
        skills: ['REST APIs', 'GraphQL', 'Authentication', 'API Security'],
        duration: '3-4 months',
        level: 'Intermediate',
      },
      {
        title: 'System Architecture',
        description: 'Design scalable backend systems',
        icon: Building,
        skills: ['System Design', 'Microservices', 'Load Balancing', 'Caching'],
        duration: '3-4 months',
        level: 'Advanced',
      },
      {
        title: 'DevOps & Deployment',
        description: 'Deploy and maintain production systems',
        icon: Brain,
        skills: ['Docker', 'Kubernetes', 'CI/CD', 'Monitoring'],
        duration: '2-3 months',
        level: 'Expert',
      },
    ],
    java: [
      {
        title: 'Java Fundamentals',
        description: 'Master Java programming language basics',
        icon: Coffee,
        skills: ['Java Syntax', 'OOP', 'Collections', 'Exception Handling'],
        duration: '2-3 months',
        level: 'Beginner',
      },
      {
        title: 'Advanced Java',
        description: 'Learn advanced Java concepts and features',
        icon: Code,
        skills: ['Multithreading', 'Generics', 'Lambda Expressions', 'Streams API'],
        duration: '2-3 months',
        level: 'Intermediate',
      },
      {
        title: 'Spring Framework',
        description: 'Master the Spring ecosystem',
        icon: Globe,
        skills: ['Spring Core', 'Spring Boot', 'Spring MVC', 'Spring Data'],
        duration: '3-4 months',
        level: 'Intermediate',
      },
      {
        title: 'Enterprise Development',
        description: 'Build enterprise-grade applications',
        icon: Building,
        skills: ['Microservices', 'Spring Cloud', 'JPA/Hibernate', 'Testing'],
        duration: '3-4 months',
        level: 'Advanced',
      },
      {
        title: 'Performance & Deployment',
        description: 'Optimize and deploy Java applications',
        icon: Brain,
        skills: ['JVM Tuning', 'Performance', 'Docker', 'Kubernetes'],
        duration: '2-3 months',
        level: 'Expert',
      },
    ],
    ai: [
      {
        title: 'Mathematics & Statistics',
        description: 'Build the mathematical foundation for AI/ML',
        icon: BookOpen,
        skills: ['Linear Algebra', 'Statistics', 'Probability', 'Calculus'],
        duration: '2-3 months',
        level: 'Beginner',
      },
      {
        title: 'Python for AI',
        description: 'Master Python and essential libraries',
        icon: Code,
        skills: ['Python', 'NumPy', 'Pandas', 'Matplotlib', 'Jupyter'],
        duration: '2-3 months',
        level: 'Beginner',
      },
      {
        title: 'Machine Learning',
        description: 'Learn core ML algorithms and techniques',
        icon: Brain,
        skills: ['Supervised Learning', 'Unsupervised Learning', 'Scikit-learn', 'Model Evaluation'],
        duration: '3-4 months',
        level: 'Intermediate',
      },
      {
        title: 'Deep Learning',
        description: 'Master neural networks and deep learning',
        icon: Zap,
        skills: ['Neural Networks', 'TensorFlow/PyTorch', 'CNN', 'RNN'],
        duration: '4-5 months',
        level: 'Advanced',
      },
      {
        title: 'Specialized AI',
        description: 'Focus on specific AI domains',
        icon: Trophy,
        skills: ['NLP', 'Computer Vision', 'Reinforcement Learning', 'MLOps'],
        duration: '4-6 months',
        level: 'Expert',
      },
    ],
    company: [
      {
        title: 'Programming Foundation',
        description: 'Master core programming concepts and a primary language',
        icon: Code,
        skills: ['Java/Python/C++', 'OOP', 'Design Patterns', 'Clean Code'],
        duration: '3-4 months',
        level: 'Beginner',
      },
      {
        title: 'Data Structures & Algorithms',
        description: 'Master DSA for technical interviews',
        icon: Brain,
        skills: ['Arrays', 'Linked Lists', 'Trees', 'Graphs', 'Dynamic Programming'],
        duration: '4-6 months',
        level: 'Intermediate',
      },
      {
        title: 'System Design',
        description: 'Learn to design scalable systems',
        icon: Building,
        skills: ['Scalability', 'Load Balancing', 'Databases', 'Caching', 'Microservices'],
        duration: '3-4 months',
        level: 'Advanced',
      },
      {
        title: 'Computer Networks',
        description: 'Understand networking fundamentals',
        icon: Globe,
        skills: ['TCP/IP', 'HTTP/HTTPS', 'DNS', 'Load Balancers', 'CDN'],
        duration: '2-3 months',
        level: 'Intermediate',
      },
      {
        title: 'Academic Excellence',
        description: 'Maintain strong academic performance',
        icon: Trophy,
        skills: ['CGPA > 7.5', 'Core Subjects', 'Projects', 'Internships'],
        duration: 'Ongoing',
        level: 'Essential',
      },
    ],
  };

  const currentRoadmap = roadmaps[selectedRoadmap as keyof typeof roadmaps] || roadmaps.fullstack;

  useEffect(() => {
    setVisibleItems([]);
    itemRefs.current = [];
  }, [selectedRoadmap]);

  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
          }
        },
        { threshold: 0.3 }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, [currentRoadmap]);

  return (
    <section id="roadmap" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {roadmaps[selectedRoadmap as keyof typeof roadmaps] ? 
              `${selectedRoadmap.charAt(0).toUpperCase() + selectedRoadmap.slice(1)} Roadmap` : 
              'Learning Roadmap'
            }
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Follow our structured path to become a skilled developer
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-600 to-blue-600"></div>

            {currentRoadmap.map((item, index) => (
              <div key={index} className="relative mb-12 last:mb-0">
                <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline node */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-white" />
                  </div>

                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div 
                      ref={el => {itemRefs.current[index] = el}}
                      className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-700 ease-out ${
                        visibleItems[index]
                          ? 'opacity-100 blur-0 translate-y-0'
                          : 'opacity-0 blur-sm translate-y-8'
                      }`}
                      style={{ transitionDelay: `${index * 200}ms` }}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          item.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                          item.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                          item.level === 'Advanced' ? 'bg-orange-100 text-orange-800' :
                          item.level === 'Essential' ? 'bg-red-100 text-red-800' :
                          'bg-purple-100 text-purple-800'
                        }`}>
                          {item.level}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      <p className="text-sm text-purple-600 font-medium mb-4">Duration: {item.duration}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}