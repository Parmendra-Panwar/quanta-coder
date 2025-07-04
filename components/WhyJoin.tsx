'use client';

import { useEffect, useState, useRef } from 'react';
import { CheckCircle, Users, Zap, Trophy, BookOpen, Heart } from 'lucide-react';

export default function WhyJoin() {
  const [visibleBenefits, setVisibleBenefits] = useState<boolean[]>([]);
  const [imageVisible, setImageVisible] = useState(false);
  const benefitRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRef = useRef<HTMLDivElement>(null);

  const benefits = [
    {
      icon: Users,
      title: 'Peer Learning',
      description: 'Learn from and teach fellow students in a collaborative environment',
    },
    {
      icon: Zap,
      title: 'Skill Building',
      description: 'Develop technical and soft skills through real-world projects',
    },
    {
      icon: Trophy,
      title: 'Recognition',
      description: 'Showcase your work and get recognized for your contributions',
    },
    {
      icon: BookOpen,
      title: 'Resources',
      description: 'Access to exclusive learning materials and industry insights',
    },
    {
      icon: Heart,
      title: 'Community',
      description: 'Be part of a supportive network of like-minded individuals',
    },
  ];

  useEffect(() => {
    const benefitObservers = benefitRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleBenefits(prev => {
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

    const imageObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImageVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (imageRef.current) {
      imageObserver.observe(imageRef.current);
    }

    return () => {
      benefitObservers.forEach(observer => observer?.disconnect());
      imageObserver.disconnect();
    };
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Join Our Community?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Become part of a thriving ecosystem where innovation meets collaboration. 
              Here's what makes Quanta Crew special:
            </p>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  ref={el => {benefitRefs.current[index] = el}}
                  className={`flex items-start space-x-4 transition-all duration-700 ease-out ${
                    visibleBenefits[index]
                      ? 'opacity-100 blur-0 translate-x-0'
                      : 'opacity-0 blur-sm -translate-x-8'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div 
            ref={imageRef}
            className={`relative transition-all duration-1000 ease-out ${
              imageVisible 
                ? 'opacity-100 blur-0 translate-x-0' 
                : 'opacity-0 blur-sm translate-x-8'
            }`}
          >
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Students collaborating"
              className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}