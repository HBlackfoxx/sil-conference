import React, { useState } from 'react'
import { 
  Calendar, Clock, MapPin, Users, Star, Filter, Search,
  Plus, Check, X, Download, Share2, Bell, Heart,
  BookOpen, Mic, Coffee, Utensils, ChevronRight,
  Grid, List, Eye, Info, AlertCircle, Bookmark
} from 'lucide-react'

const PersonalScheduleBuilder = () => {
  const [selectedDay, setSelectedDay] = useState('day1')
  const [viewMode, setViewMode] = useState('grid')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTracks, setSelectedTracks] = useState([])
  const [mySchedule, setMySchedule] = useState([])
  const [showConflictAlert, setShowConflictAlert] = useState(false)

  const days = [
    { id: 'day1', date: 'May 15', label: 'Day 1' },
    { id: 'day2', date: 'May 16', label: 'Day 2' },
    { id: 'day3', date: 'May 17', label: 'Day 3' }
  ]

  const tracks = [
    { id: 'ai', name: 'AI & Machine Learning', color: 'blue' },
    { id: 'logistics', name: 'Smart Logistics', color: 'green' },
    { id: 'sustainability', name: 'Sustainability', color: 'emerald' },
    { id: 'industry', name: 'Industry 4.0', color: 'purple' }
  ]

  const sessions = {
    day1: [
      {
        id: 's1',
        title: 'Opening Keynote: The Future of AI',
        speaker: 'Dr. Sarah Johnson',
        time: '09:00 - 10:00',
        startTime: '09:00',
        endTime: '10:00',
        location: 'Main Auditorium',
        type: 'keynote',
        track: 'ai',
        capacity: 1000,
        registered: 450,
        description: 'Exploring the next frontier of artificial intelligence and its impact on society.'
      },
      {
        id: 's2',
        title: 'Workshop: Machine Learning Basics',
        speaker: 'Prof. Michael Chen',
        time: '10:30 - 12:00',
        startTime: '10:30',
        endTime: '12:00',
        location: 'Workshop Room A',
        type: 'workshop',
        track: 'ai',
        capacity: 50,
        registered: 48,
        description: 'Hands-on introduction to machine learning concepts and tools.'
      },
      {
        id: 's3',
        title: 'Panel: Sustainable Supply Chains',
        speaker: 'Multiple Speakers',
        time: '10:30 - 12:00',
        startTime: '10:30',
        endTime: '12:00',
        location: 'Conference Room B',
        type: 'panel',
        track: 'sustainability',
        capacity: 200,
        registered: 120,
        description: 'Industry leaders discuss sustainable practices in modern supply chains.'
      },
      {
        id: 's4',
        title: 'Lunch & Networking',
        time: '12:00 - 13:30',
        startTime: '12:00',
        endTime: '13:30',
        location: 'Restaurant',
        type: 'break',
        capacity: null,
        registered: null,
        description: 'Enjoy lunch and network with fellow attendees.'
      },
      {
        id: 's5',
        title: 'Technical Session: IoT Applications',
        speaker: 'Various Authors',
        time: '14:00 - 15:30',
        startTime: '14:00',
        endTime: '15:30',
        location: 'Room C',
        type: 'technical',
        track: 'industry',
        capacity: 150,
        registered: 89,
        description: 'Paper presentations on latest IoT applications in industry.'
      }
    ],
    day2: [
      {
        id: 's6',
        title: 'Keynote: Blockchain in Logistics',
        speaker: 'Dr. Li Wei',
        time: '09:00 - 10:00',
        startTime: '09:00',
        endTime: '10:00',
        location: 'Main Auditorium',
        type: 'keynote',
        track: 'logistics',
        capacity: 1000,
        registered: 520,
        description: 'How blockchain is revolutionizing global supply chains.'
      }
    ],
    day3: [
      {
        id: 's7',
        title: 'Closing Ceremony',
        time: '15:00 - 16:00',
        startTime: '15:00',
        endTime: '16:00',
        location: 'Main Auditorium',
        type: 'ceremony',
        capacity: 1000,
        registered: 600,
        description: 'Conference wrap-up and awards presentation.'
      }
    ]
  }

  const getSessionTypeIcon = (type) => {
    switch (type) {
      case 'keynote': return Mic
      case 'workshop': return BookOpen
      case 'panel': return Users
      case 'technical': return FileText
      case 'break': return Coffee
      case 'ceremony': return Award
      default: return Calendar
    }
  }

  const getSessionTypeColor = (type) => {
    switch (type) {
      case 'keynote': return 'purple'
      case 'workshop': return 'blue'
      case 'panel': return 'green'
      case 'technical': return 'orange'
      case 'break': return 'gray'
      case 'ceremony': return 'red'
      default: return 'gray'
    }
  }

  const isSessionInSchedule = (sessionId) => {
    return mySchedule.includes(sessionId)
  }

  const hasTimeConflict = (session) => {
    const sessionsOnDay = sessions[selectedDay]
    const mySessionsOnDay = sessionsOnDay.filter(s => mySchedule.includes(s.id))
    
    return mySessionsOnDay.some(s => {
      if (s.id === session.id) return false
      const sessionStart = new Date(`2025-05-15 ${session.startTime}`)
      const sessionEnd = new Date(`2025-05-15 ${session.endTime}`)
      const sStart = new Date(`2025-05-15 ${s.startTime}`)
      const sEnd = new Date(`2025-05-15 ${s.endTime}`)
      
      return (sessionStart < sEnd && sessionEnd > sStart)
    })
  }

  const toggleSession = (sessionId) => {
    const session = sessions[selectedDay].find(s => s.id === sessionId)
    
    if (isSessionInSchedule(sessionId)) {
      setMySchedule(mySchedule.filter(id => id !== sessionId))
      setShowConflictAlert(false)
    } else {
      if (hasTimeConflict(session)) {
        setShowConflictAlert(true)
        setTimeout(() => setShowConflictAlert(false), 3000)
      } else {
        setMySchedule([...mySchedule, sessionId])
      }
    }
  }

  const filteredSessions = sessions[selectedDay]?.filter(session => {
    const matchesSearch = session.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         session.speaker?.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesTrack = selectedTracks.length === 0 || 
                        (session.track && selectedTracks.includes(session.track))
    return matchesSearch && matchesTrack
  })

  const downloadSchedule = () => {
    // In real implementation, this would generate a PDF or ICS file
    alert('Schedule download will be implemented with backend integration')
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Build Your Schedule</h1>
          <p className="text-gray-600">Select sessions to create your personalized conference agenda</p>
        </div>

        {/* Stats Bar */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-600">{mySchedule.length}</p>
                <p className="text-sm text-gray-600">Sessions Selected</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600">
                  {filteredSessions?.filter(s => s.type !== 'break').length || 0}
                </p>
                <p className="text-sm text-gray-600">Available Sessions</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={downloadSchedule}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Download Schedule</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>

        {/* Conflict Alert */}
        {showConflictAlert && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <AlertCircle className="w-5 h-5 text-red-600" />
              <p className="text-red-800">This session conflicts with another session in your schedule!</p>
            </div>
            <button
              onClick={() => setShowConflictAlert(false)}
              className="text-red-600 hover:text-red-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Filters and Controls */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          {/* Day Selection */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center space-x-2">
              {days.map((day) => (
                <button
                  key={day.id}
                  onClick={() => setSelectedDay(day.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${
                    selectedDay === day.id
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <div className="text-sm">{day.label}</div>
                  <div className="text-xs opacity-80">{day.date}</div>
                </button>
              ))}
            </div>
            
            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${viewMode === 'grid' ? 'bg-white shadow-sm' : ''}`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${viewMode === 'list' ? 'bg-white shadow-sm' : ''}`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Search and Track Filter */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search sessions..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <div className="flex flex-wrap gap-2">
                {tracks.map((track) => (
                  <button
                    key={track.id}
                    onClick={() => {
                      setSelectedTracks(
                        selectedTracks.includes(track.id)
                          ? selectedTracks.filter(t => t !== track.id)
                          : [...selectedTracks, track.id]
                      )
                    }}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                      selectedTracks.includes(track.id)
                        ? `bg-${track.color}-600 text-white`
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {track.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sessions Display */}
        <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 gap-6' : 'space-y-4'}>
          {filteredSessions?.map((session) => {
            const Icon = getSessionTypeIcon(session.type)
            const isSelected = isSessionInSchedule(session.id)
            const hasConflict = hasTimeConflict(session) && !isSelected
            const isAlmostFull = session.capacity && (session.registered / session.capacity) > 0.9
            
            return (
              <div
                key={session.id}
                className={`bg-white rounded-lg shadow-sm hover:shadow-md transition-all ${
                  isSelected ? 'ring-2 ring-blue-600' : ''
                } ${hasConflict ? 'opacity-60' : ''}`}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start space-x-3">
                      <div className={`w-10 h-10 bg-${getSessionTypeColor(session.type)}-100 rounded-lg flex items-center justify-center`}>
                        <Icon className={`w-5 h-5 text-${getSessionTypeColor(session.type)}-600`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1">{session.title}</h3>
                        {session.speaker && (
                          <p className="text-gray-600 text-sm">{session.speaker}</p>
                        )}
                      </div>
                    </div>
                    <button
                      onClick={() => toggleSession(session.id)}
                      disabled={hasConflict}
                      className={`p-2 rounded-lg transition-all ${
                        isSelected
                          ? 'bg-blue-600 text-white'
                          : hasConflict
                          ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {isSelected ? <Check className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </button>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{session.time}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{session.location}</span>
                      </span>
                    </div>
                    
                    {session.capacity && (
                      <div className="flex items-center space-x-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full transition-all ${
                              isAlmostFull ? 'bg-red-500' : 'bg-green-500'
                            }`}
                            style={{ width: `${(session.registered / session.capacity) * 100}%` }}
                          />
                        </div>
                        <span className="text-xs text-gray-600">
                          {session.registered}/{session.capacity}
                        </span>
                      </div>
                    )}
                  </div>

                  <p className="text-sm text-gray-600 mb-4">{session.description}</p>

                  {hasConflict && (
                    <div className="flex items-center space-x-2 text-sm text-red-600">
                      <AlertCircle className="w-4 h-4" />
                      <span>Conflicts with your schedule</span>
                    </div>
                  )}

                  {isAlmostFull && !hasConflict && (
                    <div className="flex items-center space-x-2 text-sm text-orange-600">
                      <AlertCircle className="w-4 h-4" />
                      <span>Almost full - register soon!</span>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* My Schedule Summary */}
        {mySchedule.length > 0 && (
          <div className="mt-12 bg-blue-50 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Your Selected Sessions</h2>
            <div className="space-y-2">
              {mySchedule.map((sessionId) => {
                const session = Object.values(sessions).flat().find(s => s.id === sessionId)
                if (!session) return null
                
                return (
                  <div key={sessionId} className="flex items-center justify-between bg-white rounded-lg p-3">
                    <div className="flex items-center space-x-3">
                      <div className={`w-2 h-8 bg-${getSessionTypeColor(session.type)}-500 rounded-full`} />
                      <div>
                        <p className="font-medium">{session.title}</p>
                        <p className="text-sm text-gray-600">{session.time} • {session.location}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleSession(sessionId)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default PersonalScheduleBuilder