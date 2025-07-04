import { Code, Users, Trophy, BookOpen } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Code,
      title: 'Skill Development',
      description: 'Learn programming languages, frameworks, and best practices through hands-on projects and mentorship.',
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Connect with like-minded students, share knowledge, and collaborate on exciting projects.',
    },
    {
      icon: Trophy,
      title: 'Competitions',
      description: 'Participate in coding contests, hackathons, and challenges to test your skills.',
    },
    {
      icon: BookOpen,
      title: 'Learning Resources',
      description: 'Access curated tutorials, documentation, and educational materials for continuous learning.',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Quanta Crew?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide everything you need to excel in your coding journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-blue-50 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}