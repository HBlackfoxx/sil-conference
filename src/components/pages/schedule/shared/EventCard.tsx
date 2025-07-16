import React from 'react'
import { 
  Calendar, Mic, Award, BookOpen, Network, Briefcase, 
  Coffee, Utensils, Users, MapPin, Star, Tag
} from 'lucide-react'

export interface EventSession {
  title: string
  location: string
  track: string
  papers?: number
  instructor?: string
}

export interface Event {
  time: string
  type: string
  title: string
  location?: string
  speaker?: string
  description?: string
  track?: string
  sessions?: EventSession[]
  moderator?: string
  panelists?: string[]
}

export interface Track {
  id: string
  name: string
  color: string
}

interface EventCardProps {
  event: Event
  tracks: Track[]
}

const EventCard: React.FC<EventCardProps> = ({ event, tracks }) => {
  const getEventTypeStyle = (type: string) => {
    const styles: Record<string, string> = {
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

  const getEventIcon = (type: string) => {
    const icons: Record<string, React.ComponentType<{ className?: string }>> = {
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

  return (
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
  )
}

export default EventCard