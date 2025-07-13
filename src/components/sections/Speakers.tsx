import React, { useState } from 'react'
import { Linkedin, Twitter, Globe, ChevronDown, Award, Briefcase } from 'lucide-react'

const Speakers = () => {
  const [showAll, setShowAll] = useState(false)
  const [hoveredSpeaker, setHoveredSpeaker] = useState(null)

  const speakers = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      role: 'AI Research Director',
      organization: 'MIT Computer Science Lab',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400',
      bio: 'Leading expert in machine learning and artificial intelligence with 15+ years of experience in autonomous systems.',
      keynote: true,
      social: {
        linkedin: '#',
        twitter: '#',
        website: '#'
      }
    },
    {
      id: 2,
      name: 'Prof. Michael Chen',
      role: 'Supply Chain Innovation Expert',
      organization: 'Stanford Business School',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400',
      bio: 'Pioneering researcher in blockchain applications for supply chain management and logistics optimization.',
      keynote: true,
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      role: 'Sustainable Tech Advocate',
      organization: 'Google Research',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400',
      bio: 'Expert in green technology and sustainable innovation practices in the tech industry.',
      keynote: true,
      social: {
        linkedin: '#',
        website: '#'
      }
    },
    {
      id: 4,
      name: 'Dr. James Park',
      role: 'IoT Systems Architect',
      organization: 'Samsung Electronics',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400',
      bio: 'Specializes in Internet of Things applications for smart cities and industrial automation.',
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      id: 5,
      name: 'Prof. Lisa Anderson',
      role: 'Data Science Professor',
      organization: 'Harvard University',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400',
      bio: 'Research focuses on big data analytics and predictive modeling for business intelligence.',
      social: {
        linkedin: '#',
        website: '#'
      }
    },
    {
      id: 6,
      name: 'Dr. Ahmed Hassan',
      role: 'Robotics Engineer',
      organization: 'Boston Dynamics',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400',
      bio: 'Leading the development of autonomous robotic systems for logistics and manufacturing.',
      social: {
        twitter: '#',
        website: '#'
      }
    }
  ]

  const displayedSpeakers = showAll ? speakers : speakers.slice(0, 3)

  return (
    <section id="speakers" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Featured Speakers</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Meet Our Speakers
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn from industry leaders and renowned researchers who are shaping the future of technology and innovation.
          </p>
        </div>

        {/* Speakers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedSpeakers.map((speaker, index) => (
            <div
              key={speaker.id}
              className="group relative animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredSpeaker(speaker.id)}
              onMouseLeave={() => setHoveredSpeaker(null)}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Speaker Image */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {speaker.keynote && (
                    <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                      <Award className="w-4 h-4" />
                      <span>Keynote</span>
                    </div>
                  )}
                  
                  {/* Overlay with Bio */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end p-6 transition-opacity duration-300 ${
                    hoveredSpeaker === speaker.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <p className="text-white text-sm">{speaker.bio}</p>
                  </div>
                </div>

                {/* Speaker Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{speaker.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{speaker.role}</p>
                  <p className="text-gray-600 text-sm flex items-center space-x-1 mb-4">
                    <Briefcase className="w-4 h-4" />
                    <span>{speaker.organization}</span>
                  </p>

                  {/* Social Links */}
                  <div className="flex space-x-3">
                    {speaker.social.linkedin && (
                      <a
                        href={speaker.social.linkedin}
                        className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                    {speaker.social.twitter && (
                      <a
                        href={speaker.social.twitter}
                        className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-400 hover:text-white transition-all duration-300"
                      >
                        <Twitter className="w-4 h-4" />
                      </a>
                    )}
                    {speaker.social.website && (
                      <a
                        href={speaker.social.website}
                        className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-800 hover:text-white transition-all duration-300"
                      >
                        <Globe className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {speakers.length > 3 && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center space-x-2 bg-white border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              <span>{showAll ? 'Show Less' : 'View All Speakers'}</span>
              <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} />
            </button>
          </div>
        )}

        {/* Call for Speakers */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Want to Speak at SIL 2025?</h3>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Share your expertise with our global audience. We're looking for innovative speakers to join our lineup.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            Apply to Speak
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  )
}

export default Speakers