import Hero from '@/components/Hero';
import Mission from '@/components/Mission';
import Members from '@/components/Members';

export default function AboutUs() {
  return (
    <div className="overflow-hidden">
      <Hero 
        title="About Quanta Crew"
        subtitle="Building a stronger coding community together"
        description="We are a passionate group of 6 core members leading a community of 100+ students, dedicated to fostering coding excellence and innovation in our college."
        buttonText="Meet Our Team"
        buttonLink="#team"
        imageSrc="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        imageAlt="Team collaboration"
      />
      <Mission />
      <Members />
    </div>
  );
}