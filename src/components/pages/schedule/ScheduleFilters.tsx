import React from 'react'
import { Filter, Search } from 'lucide-react'
import { Track } from './shared/EventCard'

interface ScheduleFiltersProps {
  tracks: Track[]
  selectedTrack: string
  searchTerm: string
  onTrackChange: (trackId: string) => void
  onSearchChange: (searchTerm: string) => void
}

const ScheduleFilters: React.FC<ScheduleFiltersProps> = ({
  tracks,
  selectedTrack,
  searchTerm,
  onTrackChange,
  onSearchChange
}) => {
  return (
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
                onChange={(e) => onTrackChange(e.target.value)}
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
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search by title, speaker..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScheduleFilters