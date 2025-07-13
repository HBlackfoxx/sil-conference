import React, { useState } from 'react'
import { 
  Sparkles, Users, Calendar, Clock, MapPin, Send, 
  FileText, CheckCircle, Award, Briefcase, Globe,
  Brain, Cpu, Shield, Leaf, ChevronRight, Info,
  Target, TrendingUp, Building, Download
} from 'lucide-react'

const SpecialSessionsPage = () => {
  const [expandedSession, setExpandedSession] = useState(null)
  const [activeTab, setActiveTab] = useState('accepted')

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
        'Carbon footprint tracking'
      ],
      schedule: 'Day 2, 14:00-15:30',
      room: 'Green Innovation Hall',
      submissions: 18,
      accepted: 8
    },
    {
      id: 3,
      title: 'Blockchain Security in Supply Chain Management',
      organizers: [
        { name: 'Dr. Satoshi Chain', affiliation: 'ETH Zurich', email: 'schain@ethz.ch' },
        { name: 'Prof. Li Wei', affiliation: 'Tsinghua University', email: 'lwei@tsinghua.edu.cn' }
      ],
      icon: Shield,
      track: 'Security & Trust',
      description: 'Examining the latest developments in blockchain technology for secure, transparent, and efficient supply chain management systems.',
      topics: [
        'Smart contracts for logistics',
        'Decentralized tracking systems',
        'Privacy-preserving protocols',
        'Cross-border trade facilitation'
      ],
      schedule: 'Day 3, 09:00-10:30',
      room: 'Blockchain Center',
      submissions: 15,
      accepted: 7
    },
    {
      id: 4,
      title: 'Human-AI Collaboration in Industry 4.0',
      organizers: [
        { name: 'Prof. Emma Robot', affiliation: 'CMU Robotics', email: 'erobot@cmu.edu' },
        { name: 'Dr. Hans Industry', affiliation: 'Siemens AG', email: 'hindustry@siemens.com' }
      ],
      icon: Users,
      track: 'Human-Centric AI',
      description: 'Exploring the synergy between human workers and AI systems in modern manufacturing and logistics environments.',
      topics: [
        'Augmented reality in warehouses',
        'Collaborative robots (cobots)',
        'AI-assisted decision making',
        'Workforce training and adaptation'
      ],
      schedule: 'Day 1, 15:00-16:30',
      room: 'Innovation Lab',
      submissions: 20,
      accepted: 9
    },
    {
      id: 5,
      title: 'Edge Computing for Real-time Logistics',
      organizers: [
        { name: 'Dr. Edge Runner', affiliation: 'Microsoft Azure', email: 'erunner@microsoft.com' },
        { name: 'Prof. Cloud Native', affiliation: 'UC Berkeley', email: 'cnative@berkeley.edu' }
      ],
      icon: Globe,
      track: 'Distributed Systems',
      description: 'Investigating edge computing architectures and applications for ultra-low latency logistics operations and real-time decision making.',
      topics: [
        'Edge AI for autonomous vehicles',
        '5G-enabled edge logistics',
        'Fog computing in warehouses',
        'Edge-cloud hybrid architectures'
      ],
      schedule: 'Day 2, 15:30-17:00',
      room: 'Edge Computing Lab',
      submissions: 16,
      accepted: 8
    }
  ]

  const proposalGuidelines = [
    {
      title: 'Proposal Requirements',
      items: [
        'Session title and 200-word abstract',
        'List of topics to be covered',
        'Names and affiliations of organizers',
        'Expected number of papers',
        'Target audience and relevance'
      ]
    },
    {
      title: 'Organizer Responsibilities',
      items: [
        'Promote the session and solicit papers',
        'Manage the review process',
        'Ensure quality of accepted papers',
        'Chair the session during conference',
        'Prepare session summary report'
      ]
    },
    {
      title: 'Important Dates',
      items: [
        'Proposal Deadline: January 15, 2025',
        'Notification: January 30, 2025',
        'Paper Submission: March 15, 2025',
        'Final Program: April 20, 2025'
      ]
    }
  ]

  const benefits = [
    { icon: Award, title: 'Recognition', description: 'Listed as session organizer in proceedings' },
    { icon: Users, title: 'Networking', description: 'Connect with experts in your field' },
    { icon: FileText, title: 'Publication', description: 'Potential for journal special issue' },
    { icon: Target, title: 'Impact', description: 'Shape research directions in your area' }
  ]

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center space-x-3">
            <Sparkles className="w-10 h-10 text-yellow-500" />
            <span>Special Sessions</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Focused sessions on emerging topics and cutting-edge research areas, 
            organized by leading experts in their fields
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab('accepted')}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              activeTab === 'accepted'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            Accepted Sessions
          </button>
          <button
            onClick={() => setActiveTab('cfp')}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              activeTab === 'cfp'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            Call for Proposals
          </button>
          <button
            onClick={() => setActiveTab('guidelines')}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              activeTab === 'guidelines'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            Guidelines
          </button>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto">
          {/* Accepted Sessions Tab */}
          {activeTab === 'accepted' && (
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
          )}

          {/* Call for Proposals Tab */}
          {activeTab === 'cfp' && (
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
                <h2 className="text-3xl font-bold mb-4">Propose a Special Session</h2>
                <p className="text-lg mb-6 opacity-90">
                  We invite proposals for special sessions on emerging topics that align with the 
                  conference themes. This is an excellent opportunity to bring together researchers 
                  working on cutting-edge problems.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                    Submit Proposal
                  </button>
                  <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                    <Download className="w-5 h-5 inline mr-2" />
                    Download Template
                  </button>
                </div>
              </div>

              {/* Why Organize */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6">Why Organize a Special Session?</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {benefits.map((benefit, index) => {
                    const Icon = benefit.icon
                    return (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">{benefit.title}</h4>
                          <p className="text-gray-600 text-sm">{benefit.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Topics of Interest */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4">Suggested Topics for Special Sessions</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    'Explainable AI in Logistics',
                    'Digital Twins for Supply Chain',
                    'Autonomous Last-Mile Delivery',
                    'Green Hydrogen Economy',
                    'Metaverse in Industry',
                    'Neuromorphic Computing',
                    'Space Logistics',
                    'Bio-inspired Optimization',
                    'Quantum Machine Learning'
                  ].map((topic, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Guidelines Tab */}
          {activeTab === 'guidelines' && (
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold mb-6">Special Session Guidelines</h2>
                
                {proposalGuidelines.map((section, index) => (
                  <div key={index} className="mb-8 last:mb-0">
                    <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
                    <div className="space-y-3">
                      {section.items.map((item, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Evaluation Criteria */}
              <div className="bg-blue-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4">Proposal Evaluation Criteria</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Technical Merit</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Relevance to conference themes</li>
                      <li>• Scientific/technical quality</li>
                      <li>• Innovation and timeliness</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Organizational Aspects</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Organizer expertise and track record</li>
                      <li>• Expected audience and impact</li>
                      <li>• Feasibility and planning</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-gray-900 text-white rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Questions?</h3>
                <p className="mb-6 opacity-90">
                  For inquiries about special sessions, please contact the Special Sessions Chairs
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="mailto:special-sessions@sil2025.com"
                    className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
                  >
                    special-sessions@sil2025.com
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SpecialSessionsPage