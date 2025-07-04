import { CheckCircle, Circle, Code, Database, Globe, Smartphone, Brain, Cloud } from 'lucide-react';

export default function RoadmapTimeline() {
  const roadmapItems = [
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
      title: 'Specialization',
      description: 'Choose your path: Mobile, AI/ML, or Cloud',
      icon: Brain,
      skills: ['React Native/Flutter', 'Machine Learning', 'Cloud Services', 'Advanced Topics'],
      duration: '4-6 months',
      level: 'Expert',
    },
  ];

  return (
    <section id="roadmap" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Learning Roadmap
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Follow our structured path to become a skilled developer
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-600 to-blue-600"></div>

            {roadmapItems.map((item, index) => (
              <div key={index} className="relative mb-12 last:mb-0">
                <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline node */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-white" />
                  </div>

                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          item.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                          item.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                          item.level === 'Advanced' ? 'bg-orange-100 text-orange-800' :
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