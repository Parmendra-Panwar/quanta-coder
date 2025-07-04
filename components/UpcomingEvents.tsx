'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

export default function UpcomingEvents() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const upcomingEvents = [
    {
      id: 'react-workshop-2024',
      title: 'React Workshop',
      date: 'March 15, 2024',
      time: '2:00 PM - 5:00 PM',
      location: 'Computer Lab A',
      attendees: 45,
      description: 'Learn React fundamentals and build your first component',
      type: 'Workshop',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1',
    },
    {
      id: 'coding-bootcamp-2024',
      title: 'Coding Bootcamp',
      date: 'March 22, 2024',
      time: '10:00 AM - 4:00 PM',
      location: 'Main Auditorium',
      attendees: 120,
      description: 'Intensive full-day coding session with industry experts',
      type: 'Bootcamp',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1',
    },
    {
      id: 'ai-ml-hackathon-2024',
      title: 'AI/ML Hackathon',
      date: 'March 29, 2024',
      time: '9:00 AM - 9:00 PM',
      location: 'Innovation Hub',
      attendees: 80,
      description: 'Build intelligent solutions in 12 hours',
      type: 'Hackathon',
      image: 'https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1',
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
    <section id="events" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Upcoming Events
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't miss these exciting opportunities to learn and connect
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event, index) => (
            <div 
              key={index} 
              ref={el => cardRefs.current[index] = el}
              className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-700 ease-out ${
                visibleCards[index]
                  ? 'opacity-100 blur-0 translate-y-0'
                  : 'opacity-0 blur-sm translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {event.type}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-2" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-2" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="w-4 h-4 mr-2" />
                    {event.attendees} registered
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <Link
                    href={`/events/${event.id}`}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-center"
                  >
                    View Details
                  </Link>
                  <button className="flex-1 border border-purple-600 text-purple-600 font-semibold py-2 px-4 rounded-lg hover:bg-purple-50 transition-all duration-300">
                    Register
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}