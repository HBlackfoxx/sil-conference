import React from 'react'
import EventCard, { Event, Track } from './shared/EventCard'
import TimeSlot from './shared/TimeSlot'

interface Day2ScheduleProps {
  tracks: Track[]
  filteredEvents: Event[]
}

const Day2Schedule: React.FC<Day2ScheduleProps> = ({ tracks, filteredEvents }) => {
  return (
    <div className="max-w-4xl mx-auto">
      {filteredEvents?.map((event, index) => (
        <div key={index} className="relative">
          {/* Event Card */}
          <div className="flex items-start mb-8">
            <TimeSlot time={event.time} isLast={index === filteredEvents.length - 1} />

            {/* Event Content */}
            <div className="flex-1 ml-8">
              <EventCard event={event} tracks={tracks} />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Day2Schedule