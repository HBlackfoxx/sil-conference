'use client'

import React, { useState } from 'react'
import ScheduleHeader from './ScheduleHeader'
import ScheduleDayNavigation, { ConferenceDay } from './ScheduleDayNavigation'
import ScheduleFilters from './ScheduleFilters'
import Day1Schedule from './Day1Schedule'
import Day2Schedule from './Day2Schedule'
import Day3Schedule from './Day3Schedule'
import { Event, Track } from './shared/EventCard'

const ScheduleContent = () => {
  const [selectedDay, setSelectedDay] = useState('day1')
  const [selectedTrack, setSelectedTrack] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const conferenceDays: ConferenceDay[] = [
    { id: 'day1', date: 'May 15, 2025', label: 'Day 1', theme: 'Opening & Keynotes' },
    { id: 'day2', date: 'May 16, 2025', label: 'Day 2', theme: 'Technical Sessions' },
    { id: 'day3', date: 'May 17, 2025', label: 'Day 3', theme: 'Workshops & Closing' }
  ]

  const tracks: Track[] = [
    { id: 'all', name: 'All Tracks', color: 'gray' },
    { id: 'ai', name: 'AI & Machine Learning', color: 'blue' },
    { id: 'logistics', name: 'Smart Logistics', color: 'green' },
    { id: 'sustainability', name: 'Sustainability', color: 'emerald' },
    { id: 'industry', name: 'Industry 4.0', color: 'purple' }
  ]

  const schedule: Record<string, Event[]> = {
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

  const renderScheduleForDay = () => {
    switch (selectedDay) {
      case 'day1':
        return <Day1Schedule tracks={tracks} filteredEvents={filteredEvents} />
      case 'day2':
        return <Day2Schedule tracks={tracks} filteredEvents={filteredEvents} />
      case 'day3':
        return <Day3Schedule tracks={tracks} filteredEvents={filteredEvents} />
      default:
        return <Day1Schedule tracks={tracks} filteredEvents={filteredEvents} />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="container mx-auto px-4">
        <ScheduleHeader />
        
        <ScheduleDayNavigation 
          conferenceDays={conferenceDays}
          selectedDay={selectedDay}
          onDaySelect={setSelectedDay}
        />
        
        <ScheduleFilters 
          tracks={tracks}
          selectedTrack={selectedTrack}
          searchTerm={searchTerm}
          onTrackChange={setSelectedTrack}
          onSearchChange={setSearchTerm}
        />

        {renderScheduleForDay()}

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

export default ScheduleContent