import React from 'react'
import { 
  Users, Calendar, MapPin, FileText, CheckCircle, ChevronRight,
  Cpu, Leaf, Shield, Brain, Globe, Award
} from 'lucide-react'

interface AcceptedSessionsTabProps {
  expandedSession: number | null
  setExpandedSession: (sessionId: number | null) => void
}

const AcceptedSessionsTab = ({ expandedSession, setExpandedSession }: AcceptedSessionsTabProps) => {
  const acceptedSessions = [
    {
      id: 1,
      title: 'Quantum Computing Applications in Logistics Optimization',
      organizers: [
        { name: 'Dr. Alice Quantum', affiliation: 'IBM Research', email: 'alice.q@ibm.com' },
        { name: 'Prof. Bob Zhang', affiliation: 'MIT CSAIL', email: 'bzhang@mit.edu' }
      ],
      icon: Cpu,
      track: 'Advanced Computing',
      description: 'This special session explores the revolutionary potential of quantum computing in solving complex logistics optimization problems, including route planning, warehouse management, and supply chain optimization.',
      topics: [
        'Quantum algorithms for vehicle routing',
        'Quantum annealing in supply chain',
        'Hybrid classical-quantum approaches',
        'Real-world case studies'
      ],
      schedule: 'Day 2, 10:30-12:00',
      room: 'Quantum Lab',
      submissions: 12,
      accepted: 6
    },
    {
      id: 2,
      title: 'AI-Driven Sustainability in Smart Cities',
      organizers: [
        { name: 'Prof. Maria Green', affiliation: 'Stanford University', email: 'mgreen@stanford.edu' },
        { name: 'Dr. Carlos Eco', affiliation: 'Barcelona Smart City', email: 'ceco@bcn.es' }
      ],
      icon: Leaf,
      track: 'Sustainable Innovation',
      description: 'Focusing on how artificial intelligence can enhance sustainability in urban environments through smart resource management, energy optimization, and circular economy models.',
      topics: [
        'Smart grid optimization',
        'Waste management AI',
        'Urban mobility predictions',
        'Carbon footprint reduction'
      ],
      schedule: 'Day 1, 14:00-15:30',
      room: 'Green Tech Hall',
      submissions: 18,
      accepted: 8
    },
    {
      id: 3,
      title: 'Cybersecurity in IoT and Edge Computing',
      organizers: [
        { name: 'Dr. Sarah Shield', affiliation: 'CyberSec Institute', email: 'sshield@cybersec.org' },
        { name: 'Prof. Michael Lock', affiliation: 'Security University', email: 'mlock@secuni.edu' }
      ],
      icon: Shield,
      track: 'Security & Privacy',
      description: 'Addressing emerging security challenges in IoT ecosystems and edge computing environments, with focus on scalable security solutions for smart logistics.',
      topics: [
        'IoT device authentication',
        'Edge security protocols',
        'Blockchain for IoT',
        'Privacy-preserving analytics'
      ],
      schedule: 'Day 3, 09:00-10:30',
      room: 'Security Center',
      submissions: 15,
      accepted: 7
    },
    {
      id: 4,
      title: 'Neural Networks for Predictive Logistics',
      organizers: [
        { name: 'Dr. Alex Brain', affiliation: 'DeepMind Logistics', email: 'abrain@deepmind.com' },
        { name: 'Prof. Lisa Neural', affiliation: 'AI Research Lab', email: 'lneural@ailab.edu' }
      ],
      icon: Brain,
      track: 'Machine Learning',
      description: 'Exploring advanced neural network architectures for demand forecasting, route optimization, and supply chain risk assessment in modern logistics systems.',
      topics: [
        'Time series forecasting',
        'Graph neural networks',
        'Reinforcement learning',
        'Transfer learning applications'
      ],
      schedule: 'Day 2, 14:00-15:30',
      room: 'AI Innovation Hub',
      submissions: 22,
      accepted: 10
    }
  ]

  return (
    <div className="space-y-6">
      {acceptedSessions.map((session) => {
        const Icon = session.icon
        return (
          <div key={session.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
            <div className="p-6">
              {/* Session Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{session.title}</h3>
                    <p className="text-blue-600 font-medium">{session.track}</p>
                  </div>
                </div>
                <button
                  onClick={() => setExpandedSession(expandedSession === session.id ? null : session.id)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <ChevronRight className={`w-6 h-6 transition-transform ${
                    expandedSession === session.id ? 'rotate-90' : ''
                  }`} />
                </button>
              </div>

              {/* Session Info */}
              <p className="text-gray-600 mb-4">{session.description}</p>

              {/* Quick Info */}
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span>{session.schedule}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>{session.room}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <FileText className="w-4 h-4" />
                  <span>{session.accepted}/{session.submissions} papers accepted</span>
                </div>
              </div>

              {/* Expanded Content */}
              {expandedSession === session.id && (
                <div className="mt-6 pt-6 border-t border-gray-200">
                  {/* Organizers */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Session Organizers</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {session.organizers.map((organizer, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                            <Users className="w-5 h-5 text-gray-600" />
                          </div>
                          <div>
                            <p className="font-medium">{organizer.name}</p>
                            <p className="text-sm text-gray-600">{organizer.affiliation}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Topics */}
                  <div>
                    <h4 className="font-semibold mb-3">Topics Covered</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {session.topics.map((topic, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-6 flex gap-4">
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                      View Papers
                    </button>
                    <button className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-300">
                      Contact Organizers
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default AcceptedSessionsTab