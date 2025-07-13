import React, { useState, useEffect } from 'react'
import { 
  Search, X, Filter, Calendar, Users, FileText, MapPin,
  Clock, Tag, TrendingUp, ChevronRight, Loader2,
  BookOpen, Mic, Award, Building, Globe, History
} from 'lucide-react'

const GlobalSearch = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [activeFilter, setActiveFilter] = useState('all')
  const [isSearching, setIsSearching] = useState(false)
  const [searchResults, setSearchResults] = useState([])
  const [recentSearches, setRecentSearches] = useState([
    'Machine Learning',
    'Keynote Sessions',
    'Dr. Sarah Johnson',
    'Workshop Schedule'
  ])

  // Mock search data
  const mockData = {
    sessions: [
      {
        id: 1,
        type: 'session',
        title: 'Deep Learning Applications in Supply Chain',
        description: 'Exploring how deep learning transforms modern supply chains',
        speaker: 'Dr. Sarah Johnson',
        time: 'May 15, 10:30 AM',
        location: 'Room A',
        track: 'AI & Machine Learning'
      },
      {
        id: 2,
        type: 'session',
        title: 'Blockchain Workshop for Beginners',
        description: 'Hands-on introduction to blockchain technology',
        speaker: 'Prof. Michael Chen',
        time: 'May 16, 2:00 PM',
        location: 'Workshop Lab',
        track: 'Blockchain'
      }
    ],
    speakers: [
      {
        id: 1,
        type: 'speaker',
        name: 'Dr. Sarah Johnson',
        title: 'AI Research Director',
        organization: 'MIT Computer Science Lab',
        bio: 'Leading expert in machine learning and AI applications',
        sessions: 3
      },
      {
        id: 2,
        type: 'speaker',
        name: 'Prof. Michael Chen',
        title: 'Blockchain Expert',
        organization: 'Stanford University',
        bio: 'Pioneer in blockchain applications for logistics',
        sessions: 2
      }
    ],
    papers: [
      {
        id: 1,
        type: 'paper',
        title: 'Optimizing Last-Mile Delivery with AI',
        authors: ['John Doe', 'Jane Smith'],
        track: 'Smart Logistics',
        abstract: 'This paper presents a novel approach to last-mile delivery optimization...'
      }
    ],
    pages: [
      {
        id: 1,
        type: 'page',
        title: 'Registration Information',
        url: '/registration',
        description: 'Conference registration details, fees, and deadlines'
      },
      {
        id: 2,
        type: 'page',
        title: 'Venue & Travel',
        url: '/venue',
        description: 'Conference venue location, hotels, and travel information'
      }
    ]
  }

  const filters = [
    { id: 'all', label: 'All Results', icon: Search },
    { id: 'sessions', label: 'Sessions', icon: Calendar },
    { id: 'speakers', label: 'Speakers', icon: Users },
    { id: 'papers', label: 'Papers', icon: FileText },
    { id: 'pages', label: 'Pages', icon: Globe }
  ]

  const trendingTopics = [
    'Artificial Intelligence',
    'Sustainable Logistics',
    'Industry 4.0',
    'Blockchain',
    'Smart Cities'
  ]

  useEffect(() => {
    if (searchQuery.length > 2) {
      performSearch()
    } else {
      setSearchResults([])
    }
  }, [searchQuery, activeFilter])

  const performSearch = () => {
    setIsSearching(true)
    
    // Simulate search delay
    setTimeout(() => {
      const results = []
      const query = searchQuery.toLowerCase()
      
      // Search in all categories
      if (activeFilter === 'all' || activeFilter === 'sessions') {
        const sessionResults = mockData.sessions.filter(item =>
          item.title.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          item.speaker.toLowerCase().includes(query) ||
          item.track.toLowerCase().includes(query)
        )
        results.push(...sessionResults)
      }
      
      if (activeFilter === 'all' || activeFilter === 'speakers') {
        const speakerResults = mockData.speakers.filter(item =>
          item.name.toLowerCase().includes(query) ||
          item.title.toLowerCase().includes(query) ||
          item.organization.toLowerCase().includes(query) ||
          item.bio.toLowerCase().includes(query)
        )
        results.push(...speakerResults)
      }
      
      if (activeFilter === 'all' || activeFilter === 'papers') {
        const paperResults = mockData.papers.filter(item =>
          item.title.toLowerCase().includes(query) ||
          item.abstract.toLowerCase().includes(query) ||
          item.authors.some(author => author.toLowerCase().includes(query))
        )
        results.push(...paperResults)
      }
      
      if (activeFilter === 'all' || activeFilter === 'pages') {
        const pageResults = mockData.pages.filter(item =>
          item.title.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query)
        )
        results.push(...pageResults)
      }
      
      setSearchResults(results)
      setIsSearching(false)
    }, 500)
  }

  const handleSearch = (value) => {
    setSearchQuery(value)
    if (value && !recentSearches.includes(value)) {
      setRecentSearches([value, ...recentSearches.slice(0, 3)])
    }
  }

  const getResultIcon = (type) => {
    switch (type) {
      case 'session': return Calendar
      case 'speaker': return Users
      case 'paper': return FileText
      case 'page': return Globe
      default: return Search
    }
  }

  const getResultColor = (type) => {
    switch (type) {
      case 'session': return 'blue'
      case 'speaker': return 'green'
      case 'paper': return 'purple'
      case 'page': return 'orange'
      default: return 'gray'
    }
  }

  return (
    <>
      {/* Search Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all hover:scale-110 z-40"
      >
        <Search className="w-6 h-6" />
      </button>

      {/* Search Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-20 px-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[80vh] overflow-hidden">
            {/* Search Header */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center space-x-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    placeholder="Search sessions, speakers, papers..."
                    className="w-full pl-12 pr-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    autoFocus
                  />
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Filters */}
              <div className="flex items-center space-x-2 mt-4 overflow-x-auto">
                {filters.map((filter) => {
                  const Icon = filter.icon
                  return (
                    <button
                      key={filter.id}
                      onClick={() => setActiveFilter(filter.id)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                        activeFilter === filter.id
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{filter.label}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Search Results */}
            <div className="overflow-y-auto" style={{ maxHeight: 'calc(80vh - 200px)' }}>
              {searchQuery.length === 0 ? (
                <div className="p-6">
                  {/* Recent Searches */}
                  <div className="mb-8">
                    <h3 className="text-sm font-semibold text-gray-600 mb-3 flex items-center space-x-2">
                      <History className="w-4 h-4" />
                      <span>Recent Searches</span>
                    </h3>
                    <div className="space-y-2">
                      {recentSearches.map((search, index) => (
                        <button
                          key={index}
                          onClick={() => handleSearch(search)}
                          className="flex items-center justify-between w-full p-3 text-left hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          <span className="text-gray-700">{search}</span>
                          <ChevronRight className="w-4 h-4 text-gray-400" />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Trending Topics */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-600 mb-3 flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4" />
                      <span>Trending Topics</span>
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {trendingTopics.map((topic, index) => (
                        <button
                          key={index}
                          onClick={() => handleSearch(topic)}
                          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                        >
                          {topic}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : isSearching ? (
                <div className="p-12 text-center">
                  <Loader2 className="w-8 h-8 animate-spin text-blue-600 mx-auto mb-4" />
                  <p className="text-gray-600">Searching...</p>
                </div>
              ) : searchResults.length === 0 ? (
                <div className="p-12 text-center">
                  <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-600 text-lg mb-2">No results found</p>
                  <p className="text-gray-500 text-sm">Try different keywords or check your spelling</p>
                </div>
              ) : (
                <div className="p-6">
                  <p className="text-sm text-gray-600 mb-4">
                    Found {searchResults.length} results for "{searchQuery}"
                  </p>
                  <div className="space-y-4">
                    {searchResults.map((result) => {
                      const Icon = getResultIcon(result.type)
                      const color = getResultColor(result.type)
                      
                      return (
                        <div
                          key={`${result.type}-${result.id}`}
                          className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-all cursor-pointer"
                        >
                          <div className="flex items-start space-x-4">
                            <div className={`w-10 h-10 bg-${color}-100 rounded-lg flex items-center justify-center flex-shrink-0`}>
                              <Icon className={`w-5 h-5 text-${color}-600`} />
                            </div>
                            <div className="flex-1">
                              {result.type === 'session' && (
                                <>
                                  <h4 className="font-semibold text-gray-900">{result.title}</h4>
                                  <p className="text-sm text-gray-600 mt-1">{result.description}</p>
                                  <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                                    <span className="flex items-center space-x-1">
                                      <Users className="w-3 h-3" />
                                      <span>{result.speaker}</span>
                                    </span>
                                    <span className="flex items-center space-x-1">
                                      <Clock className="w-3 h-3" />
                                      <span>{result.time}</span>
                                    </span>
                                    <span className="flex items-center space-x-1">
                                      <MapPin className="w-3 h-3" />
                                      <span>{result.location}</span>
                                    </span>
                                  </div>
                                </>
                              )}
                              
                              {result.type === 'speaker' && (
                                <>
                                  <h4 className="font-semibold text-gray-900">{result.name}</h4>
                                  <p className="text-sm text-gray-600">{result.title} • {result.organization}</p>
                                  <p className="text-sm text-gray-500 mt-1">{result.bio}</p>
                                  <p className="text-xs text-blue-600 mt-2">{result.sessions} sessions</p>
                                </>
                              )}
                              
                              {result.type === 'paper' && (
                                <>
                                  <h4 className="font-semibold text-gray-900">{result.title}</h4>
                                  <p className="text-sm text-gray-600 mt-1">By {result.authors.join(', ')}</p>
                                  <p className="text-sm text-gray-500 mt-1">{result.abstract.substring(0, 150)}...</p>
                                  <span className="inline-block mt-2 px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">
                                    {result.track}
                                  </span>
                                </>
                              )}
                              
                              {result.type === 'page' && (
                                <>
                                  <h4 className="font-semibold text-gray-900">{result.title}</h4>
                                  <p className="text-sm text-gray-600 mt-1">{result.description}</p>
                                  <a href={result.url} className="text-sm text-blue-600 hover:text-blue-700 mt-2 inline-flex items-center space-x-1">
                                    <span>View Page</span>
                                    <ChevronRight className="w-3 h-3" />
                                  </a>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default GlobalSearch