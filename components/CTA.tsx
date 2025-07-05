import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Start Your Coding Journey?
        </h2>
        <h3 className="text-xl md:text-2xl font-bold mb-4">
          We inspire students to fall in love with programming..!
        </h3>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Join our community of passionate developers and take your programming skills to the next level.
        </p>
        <Link
          href="/join-us"
          className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
        >
          Join Quanta Crew
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}