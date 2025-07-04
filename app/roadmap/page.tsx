import Hero from '@/components/Hero';
import RoadmapTimeline from '@/components/RoadmapTimeline';

export default function Roadmap() {
  return (
    <div className="overflow-hidden">
      <Hero 
        title="Learning Roadmap"
        subtitle="Your journey to coding excellence"
        description="Follow our comprehensive roadmap designed to take you from beginner to advanced. Each step is crafted to build your skills progressively."
        buttonText="Start Learning"
        buttonLink="#roadmap"
        imageSrc="https://images.pexels.com/photos/3183154/pexels-photo-3183154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        imageAlt="Learning path"
      />
      <RoadmapTimeline />
    </div>
  );
}