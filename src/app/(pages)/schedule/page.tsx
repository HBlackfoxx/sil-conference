import React, { useState } from 'react'
import { 
  Calendar, Clock, Users, MapPin, Coffee, Utensils, 
  Mic, Award, BookOpen, Network, Briefcase, Star,
  ChevronRight, Filter, Download, Search, Tag
} from 'lucide-react'

const SchedulePage = () => {
  const [selectedDay, setSelectedDay] = useState('day1')
  const [selectedTrack, setSelectedTrack] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const conferenceDays = [
    { id: 'day1', date: 'May 15, 2025', label: 'Day 1', theme: 'Opening & Keynotes' },
    { id: 'day2', date: 'May 16, 2025', label: 'Day 2', theme: 'Technical Sessions' },
    { id: 'day3', date: 'May 17, 2025', label: 'Day 3', theme: 'Workshops & Closing' }
  ]

  const tracks = [
    { id: 'all', name: 'All Tracks', color: 'gray' },
    { id: 'ai', name: 'AI & Machine Learning', color: 'blue' },
    { id: 'logistics', name: 'Smart Logistics', color: 'green' },
    { id: 'sustainability', name: 'Sustainability', color: 'emerald' },
    { id: 'industry', name: 'Industry 4.0', color: 'purple' }
  ]

  const schedule = {
    day1: [
      {
        time: '08:00 - 09:00',
        type: 'registration',
        title: 'Registration & Welcome Coffee',
        location: 'Main Lobby',
        description: 'Check-in, collect your badge and conference materials'
      },
      {
        time: '09:00 - 09:30',
        type: 'ceremony',
        title: 'Opening Ceremony',
        location: 'Main Auditorium',
        speaker: 'Prof. Ahmed Benali, Conference Chair',
        description: 'Welcome address and conference overview'
      },
      {
        time: '09:30 - 10:30',
        type: 'keynote',
        title: 'The Future of AI in Logistics',
        location: 'Main Auditorium',
        speaker: 'Dr. Sarah Johnson, MIT',
        description: 'Exploring how artificial intelligence is revolutionizing supply chain management',
        track: 'ai'
      },
      {
        time: '10:30 - 11:00',
        type: 'break',
        title: 'Coffee Break & Networking',
        location: 'Exhibition Hall'
      },
      {
        time: '11:00 - 12:30',
        type: 'session',
        title: 'Parallel Sessions A',
        sessions: [
          {
            title: 'Machine Learning Applications',
            location: 'Room A',
            track: 'ai',
            papers: 4
          },
          {
            title: 'Green Logistics Solutions',
            location: 'Room B',
            track: 'sustainability',
            papers: 4
          },
          {
            title: 'IoT in Supply Chain',
            location: 'Room C',
            track: 'logistics',
            papers: 4
          }
        ]
      },
      {
        time: '12:30 - 14:00',
        type: 'lunch',
        title: 'Lunch Break',
        location: 'Restaurant'
      },
      {
        time: '14:00 - 15:00',
        type: 'keynote',
        title: 'Sustainable Innovation for Smart Cities',
        location: 'Main Auditorium',
        speaker: 'Prof. Michael Chen, Stanford',
        description: 'Building resilient and sustainable urban logistics systems',
        track: 'sustainability'
      },
      {
        time: '15:00 - 16:30',
        type: 'session',
        title: 'Parallel Sessions B',
        sessions: [
          {
            title: 'Industry 4.0 Case Studies',
            location: 'Room A',
            track: 'industry',
            papers: 4
          },
          {
            title: 'Blockchain in Logistics',
            location: 'Room B',
            track: 'logistics',
            papers: 4
          },
          {
            title: 'AI Ethics & Governance',
            location: 'Room C',
            track: 'ai',
            papers: 4
          }
        ]
      },
      {
        time: '16:30 - 17:00',
        type: 'break',
        title: 'Coffee Break',
        location: 'Exhibition Hall'
      },
      {
        time: '17:00 - 18:00',
        type: 'panel',
        title: 'Panel Discussion: Future of Smart Logistics',
        location: 'Main Auditorium',
        moderator: 'Dr. Emily Rodriguez',
        panelists: ['Industry Leaders', 'Researchers', 'Policy Makers']
      },
      {
        time: '19:00 - 21:00',
        type: 'social',
        title: 'Welcome Reception',
        location: 'Garden Terrace',
        description: 'Networking dinner with traditional Moroccan music'
      }
    ],
    day2: [
      {
        time: '09:00 - 10:00',
        type: 'keynote',
        title: 'Digital Transformation in Global Supply Chains',
        location: 'Main Auditorium',
        speaker: 'Dr. Li Wei, Tsinghua University',
        track: 'industry'
      },
      {
        time: '10:00 - 10:30',
        type: 'break',
        title: 'Coffee Break',
        location: 'Exhibition Hall'
      },
      {
        time: '10:30 - 12:00',
        type: 'session',
        title: 'Parallel Sessions C',
        sessions: [
          {
            title: 'Deep Learning & Computer Vision',
            location: 'Room A',
            track: 'ai',
            papers: 4
          },
          {
            title: 'Circular Economy Models',
            location: 'Room B',
            track: 'sustainability',
            papers: 4
          },
          {
            title: 'Autonomous Vehicles',
            location: 'Room C',
            track: 'logistics',
            papers: 4
          },
          {
            title: 'Smart Manufacturing',
            location: 'Room D',
            track: 'industry',
            papers: 4
          }
        ]
      },
      {
        time: '12:00 - 13:30',
        type: 'lunch',
        title: 'Lunch & Poster Session',
        location: 'Restaurant & Gallery',
        description: 'View poster presentations while enjoying lunch'
      },
      {
        time: '13:30 - 15:00',
        type: 'workshop',
        title: 'Parallel Workshops',
        sessions: [
          {
            title: 'Hands-on ML for Logistics',
            location: 'Lab A',
            track: 'ai',
            instructor: 'Google AI Team'
          },
          {
            title: 'Sustainable Supply Chain Design',
            location: 'Lab B',
            track: 'sustainability',
            instructor: 'MIT CTL'
          }
        ]
      },
      {
        time: '15:00 - 15:30',
        type: 'break',
        title: 'Coffee Break',
        location: 'Exhibition Hall'
      },
      {
        time: '15:30 - 17:00',
        type: 'session',
        title: 'Parallel Sessions D',
        sessions: [
          {
            title: 'Edge Computing & IoT',
            location: 'Room A',
            track: 'industry',
            papers: 4
          },
          {
            title: 'Last-Mile Delivery Innovation',
            location: 'Room B',
            track: 'logistics',
            papers: 4
          },
          {
            title: 'Renewable Energy in Logistics',
            location: 'Room C',
            track: 'sustainability',
            papers: 4
          }
        ]
      },
      {
        time: '17:00 - 18:00',
        type: 'special',
        title: 'Industry Showcase',
        location: 'Exhibition Hall',
        description: 'Live demonstrations from leading technology companies'
      },
      {
        time: '20:00 - 23:00',
        type: 'social',
        title: 'Gala Dinner',
        location: 'Crystal Ballroom',
        description: 'Awards ceremony and cultural performances'
      }
    ],
    day3: [
      {
        time: '09:00 - 10:00',
        type: 'keynote',
        title: 'Building Resilient Supply Chains',
        location: 'Main Auditorium',
        speaker: 'Prof. Anna Schmidt, TU Munich',
        track: 'logistics'
      },
      {
        time: '10:00 - 11:30',
        type: 'session',
        title: 'Best Paper Presentations',
        location: 'Main Auditorium',
        description: 'Presentations from best paper award winners'
      },
      {
        time: '11:30 - 12:00',
        type: 'break',
        title: 'Coffee Break',
        location: 'Exhibition Hall'
      },
      {
        time: '12:00 - 13:00',
        type: 'panel',
        title: 'Future Directions Panel',
        location: 'Main Auditorium',
        description: 'Expert panel on emerging trends and future research directions'
      },
      {
        time: '13:00 - 14:30',
        type: 'lunch',
        title: 'Farewell Lunch',
        location: 'Restaurant'
      },
      {
        time: '14:30 - 15:30',
        type: 'ceremony',
        title: 'Closing Ceremony & Awards',
        location: 'Main Auditorium',
        description: 'Conference summary, awards, and announcement of next year\'s venue'
      },
      {
        time: '16:00 - 18:00',
        type: 'tour',
        title: 'Optional City Tour',
        location: 'Meeting Point: Main Lobby',
        description: 'Guided tour of Marrakech\'s historic sites'
      }
    ]
  }

  const getEventTypeStyle = (type) => {
    const styles = {
      keynote: 'bg-purple-100 border-purple-300 text-purple-800',
      session: 'bg-blue-100 border-blue-300 text-blue-800',
      workshop: 'bg-green-100 border-green-300 text-green-800',
      break: 'bg-gray-100 border-gray-300 text-gray-800',
      lunch: 'bg-orange-100 border-orange-300 text-orange-800',
      ceremony: 'bg-red-100 border-red-300 text-red-800',
      panel: 'bg-indigo-100 border-indigo-300 text-indigo-800',
      social: 'bg-pink-100 border-pink-300 text-pink-800',
      registration: 'bg-yellow-100 border-yellow-300 text-yellow-800',
      special: 'bg-teal-100 border-teal-300 text-teal-800',
      tour: 'bg-emerald-100 border-emerald-300 text-emerald-800'
    }
    return styles[type] || 'bg-gray-100 border-gray-300 text-gray-800'
  }

  const getEventIcon = (type) => {
    const icons = {
      keynote: Mic,
      session: BookOpen,
      workshop: Briefcase,
      break: Coffee,
      lunch: Utensils,
      ceremony: Award,
      panel: Users,
      social: Network,
      registration: Calendar,
      special: Star,
      tour: MapPin
    }
    const Icon = icons[type] || Calendar
    return <Icon className="w-5 h-5" />
  }

  const filteredEvents = schedule[selectedDay]?.filter(event => {
    if (selectedTrack !== 'all') {
      if (event.track && event.track !== selectedTrack) return false
      if (event.sessions) {
        return event.sessions.some(session => session.track === selectedTrack)
      }
    }
    if (searchTerm) {
      const search = searchTerm.toLowerCase()
      return event.title.toLowerCase().includes(search) ||
             event.speaker?.toLowerCase().includes(search) ||
             event.description?.toLowerCase().includes(search)
    }
    return true
  })

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Conference Program</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three days of inspiring keynotes, technical sessions, workshops, and networking opportunities
          </p>
        </div>

        {/* Quick Actions */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center space-x-2">
            <Download className="w-5 h-5" />
            <span>Download Full Program (PDF)</span>
          </button>
          <button className="bg-white text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300 flex items-center space-x-2 border border-gray-200">
            <Calendar className="w-5 h-5" />
            <span>Add to Calendar</span>
          </button>
        </div>

        {/* Day Selection */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {conferenceDays.map((day) => (
            <button
              key={day.id}
              onClick={() => setSelectedDay(day.id)}
              className={`px-8 py-4 rounded-xl font-medium transition-all duration-300 ${
                selectedDay === day.id
                  ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              <div className="text-lg font-bold">{day.label}</div>
              <div className="text-sm opacity-80">{day.date}</div>
              <div className="text-xs mt-1">{day.theme}</div>
            </button>
          ))}
        </div>

        {/* Filters */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="grid md:grid-cols-2 gap-4">
              {/* Track Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Filter by Track
                </label>
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={selectedTrack}
                    onChange={(e) => setSelectedTrack(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                  >
                    {tracks.map((track) => (
                      <option key={track.id} value={track.id}>{track.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Search */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Search Sessions
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search by title, speaker..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Schedule Timeline */}
        <div className="max-w-4xl mx-auto">
          {filteredEvents?.map((event, index) => (
            <div key={index} className="relative">
              {/* Timeline Line */}
              {index < filteredEvents.length - 1 && (
                <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-gray-300" />
              )}

              {/* Event Card */}
              <div className="flex items-start mb-8">
                {/* Time */}
                <div className="flex-shrink-0 w-32 text-right pr-8">
                  <div className="font-bold text-lg">{event.time.split(' - ')[0]}</div>
                  <div className="text-sm text-gray-600">{event.time.split(' - ')[1]}</div>
                </div>

                {/* Timeline Dot */}
                <div className="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full mt-2 relative z-10" />

                {/* Event Content */}
                <div className="flex-1 ml-8">
                  <div className={`border-2 rounded-xl p-6 ${getEventTypeStyle(event.type)}`}>
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        {getEventIcon(event.type)}
                        <h3 className="text-xl font-bold">{event.title}</h3>
                      </div>
                      {event.track && (
                        <span className="px-3 py-1 bg-white rounded-full text-xs font-medium">
                          {tracks.find(t => t.id === event.track)?.name}
                        </span>
                      )}
                    </div>

                    {event.speaker && (
                      <p className="text-sm font-medium mb-2">Speaker: {event.speaker}</p>
                    )}

                    {event.location && (
                      <div className="flex items-center space-x-2 text-sm mb-2">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                    )}

                    {event.description && (
                      <p className="text-sm opacity-80 mb-3">{event.description}</p>
                    )}

                    {/* Parallel Sessions */}
                    {event.sessions && (
                      <div className="mt-4 space-y-3">
                        <p className="font-semibold text-sm">Parallel Sessions:</p>
                        <div className="grid md:grid-cols-2 gap-3">
                          {event.sessions.map((session, idx) => (
                            <div key={idx} className="bg-white/50 rounded-lg p-3">
                              <h4 className="font-semibold text-sm">{session.title}</h4>
                              <div className="flex items-center justify-between mt-1">
                                <span className="text-xs flex items-center space-x-1">
                                  <MapPin className="w-3 h-3" />
                                  <span>{session.location}</span>
                                </span>
                                {session.papers && (
                                  <span className="text-xs">{session.papers} papers</span>
                                )}
                                {session.instructor && (
                                  <span className="text-xs">By {session.instructor}</span>
                                )}
                              </div>
                              {session.track && (
                                <Tag className="w-3 h-3 inline-block mr-1 mt-1" />
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Panel Info */}
                    {event.panelists && (
                      <div className="mt-3 text-sm">
                        <p><strong>Moderator:</strong> {event.moderator}</p>
                        <p><strong>Panelists:</strong> {event.panelists.join(', ')}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Important Notes */}
        <div className="max-w-4xl mx-auto mt-12 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h3 className="font-semibold text-blue-900 mb-3">Important Information</h3>
          <ul className="space-y-2 text-blue-800 text-sm">
            <li>• All times are in Western European Time (WET)</li>
            <li>• Sessions may be subject to minor changes</li>
            <li>• Presenters must upload their slides 24 hours before their session</li>
            <li>• Coffee and refreshments will be available throughout the day</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SchedulePage