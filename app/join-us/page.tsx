import Hero from '@/components/Hero';
import JoinForm from '@/components/JoinForm';
import WhyJoin from '@/components/WhyJoin';

export default function JoinUs() {
  return (
    <div className="overflow-hidden">
      <Hero 
        title="Join Quanta Crew"
        subtitle="Ready to start your coding journey?"
        description="Become part of our thriving community of 100+ students. Access mentorship, resources, and opportunities to grow your programming skills."
        buttonText="Apply Now"
        buttonLink="#join-form"
        imageSrc="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        imageAlt="Students coding together"
      />
      <JoinForm />
      <WhyJoin />
    </div>
  );
}