import Hero from '@/components/Hero';
import EventsList from '@/components/EventsList';
import UpcomingEvents from '@/components/UpcomingEvents';

export default function Events() {
  return (
    <div className="overflow-hidden">
      <Hero 
        title="Events & Workshops"
        subtitle="Connect, learn, and grow together"
        description="Join our exciting events, workshops, and coding competitions. Stay updated with the latest in technology and connect with fellow developers."
        buttonText="View Events"
        buttonLink="#events"
        imageSrc="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        imageAlt="Tech event"
      />
      <UpcomingEvents />
      <EventsList />
    </div>
  );
}