import React from 'react'

export interface ConferenceDay {
  id: string
  date: string
  label: string
  theme: string
}

interface ScheduleDayNavigationProps {
  conferenceDays: ConferenceDay[]
  selectedDay: string
  onDaySelect: (dayId: string) => void
}

const ScheduleDayNavigation: React.FC<ScheduleDayNavigationProps> = ({
  conferenceDays,
  selectedDay,
  onDaySelect
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      {conferenceDays.map((day) => (
        <button
          key={day.id}
          onClick={() => onDaySelect(day.id)}
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
  )
}

export default ScheduleDayNavigation