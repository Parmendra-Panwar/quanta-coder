'use client';

import { useEffect, useState, useRef } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Members() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const members = [
    {
      name: 'Alex Johnson',
      role: 'Community Leader',
      expertise: 'Full Stack Development',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1',
      bio: 'Leading the community with passion for modern web technologies and mentoring.',
    },
    {
      name: 'Sarah Chen',
      role: 'Technical Lead',
      expertise: 'Machine Learning',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1',
      bio: 'Specializing in AI/ML projects and helping students dive into data science.',
    },
    {
      name: 'Mike Rodriguez',
      role: 'Events Coordinator',
      expertise: 'Mobile Development',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1',
      bio: 'Organizing workshops and events while building innovative mobile applications.',
    },
    {
      name: 'Emma Wilson',
      role: 'Mentorship Lead',
      expertise: 'DevOps & Cloud',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1',
      bio: 'Focused on cloud technologies and helping students with deployment strategies.',
    },
    {
      name: 'David Kim',
      role: 'Community Manager',
      expertise: 'Backend Development',
      image: 'https://images.pexels.com/photos/2379003/pexels-photo-2379003.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1',
      bio: 'Building scalable backend systems and fostering community engagement.',
    },
    {
      name: 'Lisa Zhang',
      role: 'Content Creator',
      expertise: 'UI/UX Design',
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1',
      bio: 'Creating beautiful user experiences and educational content for the community.',
    },
  ];

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards(prev => {
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
  }, []);

  return (
    <section id="team" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Core Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The passionate individuals leading our community forward
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <div
              key={index}
              ref={el => cardRefs.current[index] = el}
              className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-700 ease-out group ${
                visibleCards[index]
                  ? 'opacity-100 blur-0 translate-y-0'
                  : 'opacity-0 blur-sm translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-purple-600 font-medium mb-2">{member.role}</p>
                <p className="text-sm text-gray-500 mb-3">{member.expertise}</p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                <div className="flex space-x-3">
                  <a href="#" className="p-2 bg-gray-100 rounded-lg hover:bg-purple-100 transition-colors">
                    <Github className="w-4 h-4 text-gray-600" />
                  </a>
                  <a href="#" className="p-2 bg-gray-100 rounded-lg hover:bg-purple-100 transition-colors">
                    <Linkedin className="w-4 h-4 text-gray-600" />
                  </a>
                  <a href="#" className="p-2 bg-gray-100 rounded-lg hover:bg-purple-100 transition-colors">
                    <Mail className="w-4 h-4 text-gray-600" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}