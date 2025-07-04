import { Target, Eye, Heart } from 'lucide-react';

export default function Mission() {
  const items = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To create an inclusive environment where students can learn, grow, and excel in programming while building meaningful connections and contributing to real-world projects.',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To be the leading student coding community that bridges the gap between academic learning and industry requirements, producing skilled developers ready for the tech world.',
    },
    {
      icon: Heart,
      title: 'Our Values',
      description: 'We believe in collaboration, continuous learning, innovation, and supporting each other through challenges. Every member matters and contributes to our collective success.',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Foundation
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Built on strong principles that guide our community forward
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">{item.title}</h3>
              <p className="text-gray-600 text-center leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}