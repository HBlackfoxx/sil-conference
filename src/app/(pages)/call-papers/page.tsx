import React, { useState } from 'react'
import { 
  FileText, Calendar, Award, Users, BookOpen, Send, 
  Download, CheckCircle, AlertCircle, ChevronRight, Target,
  Cpu, Globe, Leaf, Brain, Network, Shield, Truck, Database
} from 'lucide-react'

const CallForPapersPage = () => {
  const [activeTab, setActiveTab] = useState('overview')

  const topicAreas = [
    {
      icon: Brain,
      title: 'Artificial Intelligence & Machine Learning',
      topics: [
        'Deep Learning Applications',
        'Natural Language Processing',
        'Computer Vision',
        'Reinforcement Learning',
        'AI Ethics and Fairness'
      ]
    },
    {
      icon: Truck,
      title: 'Smart Logistics & Supply Chain',
      topics: [
        'IoT in Logistics',
        'Blockchain for Supply Chain',
        'Autonomous Vehicles',
        'Warehouse Automation',
        'Last-Mile Delivery Innovation'
      ]
    },
    {
      icon: Leaf,
      title: 'Sustainable Innovation',
      topics: [
        'Green Technology',
        'Circular Economy',
        'Renewable Energy Systems',
        'Smart Cities',
        'Environmental Monitoring'
      ]
    },
    {
      icon: Network,
      title: 'Industry 4.0',
      topics: [
        'Digital Twins',
        'Cyber-Physical Systems',
        'Predictive Maintenance',
        'Smart Manufacturing',
        'Industrial IoT'
      ]
    },
    {
      icon: Database,
      title: 'Big Data & Analytics',
      topics: [
        'Data Mining',
        'Business Intelligence',
        'Real-time Analytics',
        'Data Visualization',
        'Cloud Computing'
      ]
    },
    {
      icon: Shield,
      title: 'Cybersecurity & Privacy',
      topics: [
        'Network Security',
        'Data Privacy',
        'Blockchain Security',
        'Security in IoT',
        'Privacy-Preserving ML'
      ]
    }
  ]

  const importantDates = [
    { event: 'Abstract Submission Opens', date: 'December 1, 2024', status: 'completed' },
    { event: 'Abstract Submission Deadline', date: 'February 15, 2025', status: 'upcoming' },
    { event: 'Full Paper Submission Deadline', date: 'March 15, 2025', status: 'upcoming' },
    { event: 'Notification of Acceptance', date: 'April 10, 2025', status: 'upcoming' },
    { event: 'Camera-Ready Paper Due', date: 'April 25, 2025', status: 'upcoming' },
    { event: 'Conference Dates', date: 'May 15-17, 2025', status: 'upcoming' }
  ]

  const submissionGuidelines = [
    {
      title: 'Paper Categories',
      items: [
        'Full Papers: 10-12 pages presenting completed research',
        'Short Papers: 6-8 pages for work in progress',
        'Industry Papers: 4-8 pages focusing on practical applications',
        'Poster Papers: 2-4 pages for preliminary results'
      ]
    },
    {
      title: 'Formatting Requirements',
      items: [
        'Papers must follow the Springer LNCS format',
        'All submissions must be in English',
        'PDF format only',
        'Anonymous submission (double-blind review)'
      ]
    },
    {
      title: 'Review Process',
      items: [
        'All papers undergo double-blind peer review',
        'Minimum of 3 reviewers per paper',
        'Authors receive detailed feedback',
        'Acceptance rate: ~30% for full papers'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Call for Papers</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            SIL 2025 invites high-quality research papers on smart innovation and logistics. 
            Share your groundbreaking research with a global audience of experts.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <FileText className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold">100+</div>
            <div className="text-gray-600 text-sm">Papers Expected</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <Award className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold">30%</div>
            <div className="text-gray-600 text-sm">Acceptance Rate</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold">3+</div>
            <div className="text-gray-600 text-sm">Reviewers per Paper</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <BookOpen className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold">Springer</div>
            <div className="text-gray-600 text-sm">Publication</div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {['overview', 'topics', 'guidelines', 'dates'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="max-w-6xl mx-auto">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold mb-6">Conference Overview</h2>
                <div className="prose max-w-none text-gray-600">
                  <p className="mb-4">
                    The International Conference on Smart Innovation & Logistics (SIL 2025) provides a premier 
                    interdisciplinary platform for researchers, practitioners, and educators to present and discuss 
                    the most recent innovations, trends, and concerns as well as practical challenges encountered 
                    and solutions adopted in the fields of Smart Innovation and Logistics.
                  </p>
                  <p className="mb-6">
                    We invite original contributions that advance the state-of-the-art in areas including but not 
                    limited to artificial intelligence, machine learning, IoT, blockchain, sustainable technologies, 
                    and their applications in logistics and supply chain management.
                  </p>

                  <h3 className="text-xl font-semibold mb-4">Why Submit to SIL 2025?</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                      <div>
                        <h4 className="font-semibold">Springer Publication</h4>
                        <p className="text-sm">All accepted papers will be published in Springer LNCS proceedings</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                      <div>
                        <h4 className="font-semibold">Indexing</h4>
                        <p className="text-sm">Papers will be indexed in Scopus, ISI, and other major databases</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                      <div>
                        <h4 className="font-semibold">Best Paper Awards</h4>
                        <p className="text-sm">Outstanding papers will receive recognition and prizes</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                      <div>
                        <h4 className="font-semibold">Journal Special Issues</h4>
                        <p className="text-sm">Selected papers invited for journal special issues</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center space-x-2">
                    <Send className="w-5 h-5" />
                    <span>Submit Your Paper</span>
                  </button>
                  <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-300 flex items-center space-x-2">
                    <Download className="w-5 h-5" />
                    <span>Download CFP PDF</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Topics Tab */}
          {activeTab === 'topics' && (
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold mb-6">Conference Topics</h2>
                <p className="text-gray-600 mb-8">
                  We welcome submissions in the following areas, but not limited to:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  {topicAreas.map((area, index) => {
                    const Icon = area.icon
                    return (
                      <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                            <Icon className="w-6 h-6 text-blue-600" />
                          </div>
                          <h3 className="font-semibold text-lg">{area.title}</h3>
                        </div>
                        <ul className="space-y-2">
                          {area.topics.map((topic, idx) => (
                            <li key={idx} className="flex items-center space-x-2 text-gray-600">
                              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                              <span className="text-sm">{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )
                  })}
                </div>

                <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                  <h3 className="font-semibold text-lg mb-3">Special Sessions</h3>
                  <p className="text-gray-700 mb-4">
                    SIL 2025 also welcomes proposals for special sessions on emerging topics. 
                    Special session proposals should include a brief description, list of topics, 
                    and potential contributors.
                  </p>
                  <button className="text-blue-600 font-semibold hover:text-blue-700 flex items-center space-x-2">
                    <span>Propose a Special Session</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Guidelines Tab */}
          {activeTab === 'guidelines' && (
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold mb-6">Submission Guidelines</h2>

                {submissionGuidelines.map((section, index) => (
                  <div key={index} className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
                    <ul className="space-y-3">
                      {section.items.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-yellow-900">Important Notes</h4>
                      <ul className="mt-2 space-y-1 text-yellow-800 text-sm">
                        <li>• Papers must be original and not published elsewhere</li>
                        <li>• Authors must follow ethical guidelines and declare conflicts of interest</li>
                        <li>• At least one author must register and present the paper</li>
                        <li>• Papers not presented will not be included in the proceedings</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-semibold mb-3">Submission Process</h4>
                    <ol className="list-decimal list-inside space-y-2 text-gray-600 text-sm">
                      <li>Prepare your paper using the Springer template</li>
                      <li>Ensure anonymity for double-blind review</li>
                      <li>Submit via EasyChair platform</li>
                      <li>Receive confirmation within 24 hours</li>
                    </ol>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-semibold mb-3">Review Criteria</h4>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li>• Originality and innovation</li>
                      <li>• Technical/scientific quality</li>
                      <li>• Relevance to conference themes</li>
                      <li>• Clarity of presentation</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center space-x-2">
                    <Download className="w-5 h-5" />
                    <span>Download Paper Template</span>
                  </button>
                  <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-300 flex items-center space-x-2">
                    <FileText className="w-5 h-5" />
                    <span>View Sample Paper</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Dates Tab */}
          {activeTab === 'dates' && (
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold mb-6">Important Dates</h2>
                
                <div className="relative">
                  {/* Timeline Line */}
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300" />
                  
                  {importantDates.map((date, index) => (
                    <div key={index} className="relative flex items-start mb-8 last:mb-0">
                      {/* Timeline Dot */}
                      <div className={`absolute left-8 w-4 h-4 rounded-full transform -translate-x-1/2 ${
                        date.status === 'completed' ? 'bg-green-600' : 'bg-blue-600'
                      }`} />
                      
                      {/* Content */}
                      <div className="ml-16 flex-1">
                        <div className="bg-gray-50 rounded-lg p-6">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="font-semibold text-lg">{date.event}</h3>
                              <p className="text-blue-600 font-medium mt-1">{date.date}</p>
                            </div>
                            {date.status === 'completed' && (
                              <CheckCircle className="w-5 h-5 text-green-600" />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                  <h3 className="font-semibold text-lg mb-3">Stay Updated</h3>
                  <p className="text-gray-700 mb-4">
                    Subscribe to our mailing list to receive reminders about important deadlines.
                  </p>
                  <div className="flex gap-4">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="max-w-4xl mx-auto mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Submit Your Research?</h3>
          <p className="mb-6 opacity-90">
            Join researchers from around the world in advancing the field of smart innovation and logistics.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2">
            <Send className="w-5 h-5" />
            <span>Submit via EasyChair</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CallForPapersPage