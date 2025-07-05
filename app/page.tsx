import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Features from '@/components/Features';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero 
        title="Welcome to Quanta Crew"
        subtitle="Empowering 100+ students to excel in coding and technology"
        description="Join our vibrant community of passionate coders, innovators, and tech enthusiasts. Together, we're building the future of technology, one line of code at a time."
        buttonText="Join Our Community"
        buttonLink="/join-us"
        imageSrc="image/15871.webp"
        imageAlt="Coding community"
      />
      <Stats />
      <Features />
      <CTA />
    </div>
  );
}