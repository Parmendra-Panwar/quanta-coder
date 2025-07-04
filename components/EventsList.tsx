import { Calendar, Award, Users, Code } from 'lucide-react';

export default function EventsList() {
  const pastEvents = [
    {
      title: 'JavaScript Fundamentals',
      date: 'Feb 15, 2024',
      type: 'Workshop',
      attendees: 65,
      description: 'Comprehensive introduction to JavaScript programming',
      achievements: ['50+ projects built', '90% completion rate'],
    },
    {
      title: 'Web Development Bootcamp',
      date: 'Jan 20, 2024',
      type: 'Bootcamp',
      attendees: 100,
      description: 'Full-stack web development intensive course',
      achievements: ['15 full-stack projects', '85% job placement rate'],
    },
    {
      title: 'Coding Challenge 2024',
      date: 'Dec 10, 2023',
      type: 'Competition',
      attendees: 150,
      description: 'Annual coding competition with exciting prizes',
      achievements: ['120 submissions', '30+ winners'],
    },
    {
      title: 'Open Source Contribution',
      date: 'Nov 25, 2023',
      type: 'Workshop',
      attendees: 40,
      description: 'Learn to contribute to open source projects',
      achievements: ['25 PRs merged', '10+ repositories contributed'],
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Past Events
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Look at our successful events and the impact we've made
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pastEvents.map((event, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  event.type === 'Workshop' ? 'bg-blue-100 text-blue-800' :
                  event.type === 'Bootcamp' ? 'bg-green-100 text-green-800' :
                  event.type === 'Competition' ? 'bg-purple-100 text-purple-800' :
                  'bg-orange-100 text-orange-800'
                }`}>
                  {event.type}
                </span>
              </div>
              
              <p className="text-gray-600 mb-4">{event.description}</p>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-2" />
                  {event.date}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Users className="w-4 h-4 mr-2" />
                  {event.attendees} attended
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-gray-900 flex items-center">
                  <Award className="w-4 h-4 mr-2" />
                  Achievements
                </h4>
                <ul className="space-y-1">
                  {event.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="text-sm text-gray-600 flex items-center">
                      <Code className="w-3 h-3 mr-2 text-purple-600" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}