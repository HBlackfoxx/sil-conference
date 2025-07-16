import React from 'react'

interface TimeSlotProps {
  time: string
  isLast?: boolean
}

const TimeSlot: React.FC<TimeSlotProps> = ({ time, isLast = false }) => {
  const [startTime, endTime] = time.split(' - ')

  return (
    <div className="flex items-start">
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-gray-300" />
      )}

      {/* Time Display */}
      <div className="flex-shrink-0 w-32 text-right pr-8">
        <div className="font-bold text-lg">{startTime}</div>
        <div className="text-sm text-gray-600">{endTime}</div>
      </div>

      {/* Timeline Dot */}
      <div className="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full mt-2 relative z-10" />
    </div>
  )
}

export default TimeSlot