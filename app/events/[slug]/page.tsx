import {
  ArrowLeft,
  Calendar,
  Clock,
  Link,
  MapPin,
  Share2,
  Star,
  Users,
} from "lucide-react";
import events from "./events";

// Params type
type Params = { slug: string };

// Required for static export
export async function generateStaticParams(): Promise<Params[]> {
  return [
    { slug: "react-workshop-2024" },
    { slug: "coding-bootcamp-2024" },
    { slug: "ai-ml-hackathon-2024" },
  ];
}

// 🛠️ No need to import PageProps or any Next types
export default async function EventPage({
  params,
}: {
  params: Params;
}) {
  const { slug: eventId } = params;
  const event = events[eventId as keyof typeof events];

  if (!event) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Event Not Found</h1>
          <Link href="/events" className="text-purple-600 hover:text-purple-800">
            ← Back to Events
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link 
              href="/events" 
              className="inline-flex items-center text-purple-600 hover:text-purple-800 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Events
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  event.type === 'Workshop' ? 'bg-blue-100 text-blue-800' :
                  event.type === 'Bootcamp' ? 'bg-green-100 text-green-800' :
                  'bg-purple-100 text-purple-800'
                }`}>
                  {event.type}
                </span>
                <span className="text-sm text-gray-500">{event.price}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {event.title}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {event.longDescription}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-5 h-5 mr-3 text-purple-600" />
                  {event.date}
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="w-5 h-5 mr-3 text-purple-600" />
                  {event.time}
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-3 text-purple-600" />
                  {event.location}
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="w-5 h-5 mr-3 text-purple-600" />
                  {event.attendees}/{event.maxAttendees} registered
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  Register Now
                </button>
                <button className="flex items-center justify-center border border-gray-300 text-gray-700 font-semibold py-3 px-8 rounded-lg hover:bg-gray-50 transition-all duration-300">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share Event
                </button>
              </div>
            </div>
            
            <div className="relative">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Agenda */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Event Agenda</h2>
                <div className="space-y-4">
                  {event.agenda.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="text-sm font-medium text-purple-600 min-w-[120px]">
                        {item.time}
                      </div>
                      <div className="text-gray-900">{item.topic}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Prerequisites */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Prerequisites</h2>
                <ul className="space-y-2">
                  {event.prerequisites.map((prereq, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <Star className="w-4 h-4 mr-3 text-purple-600" />
                      {prereq}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Topics Covered</h2>
                <div className="flex flex-wrap gap-2">
                  {event.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Instructor */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Instructor</h3>
                <div className="flex items-center space-x-4">
                  <img
                    src={event.instructorImage}
                    alt={event.instructor}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{event.instructor}</h4>
                    <p className="text-sm text-gray-600">{event.instructorRole}</p>
                  </div>
                </div>
              </div>

              {/* Event Info */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Event Information</h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm text-gray-500">Registration Deadline</span>
                    <p className="font-medium text-gray-900">{event.registrationDeadline}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Available Spots</span>
                    <p className="font-medium text-gray-900">
                      {event.maxAttendees - event.attendees} remaining
                    </p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Price</span>
                    <p className="font-medium text-gray-900">{event.price}</p>
                  </div>
                </div>
              </div>

              {/* Registration Progress */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Registration Progress</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Registered</span>
                    <span>{event.attendees}/{event.maxAttendees}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full"
                      style={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}