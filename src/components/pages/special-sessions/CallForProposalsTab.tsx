import React from 'react'
import { 
  Award, Users, FileText, Target, Download, TrendingUp
} from 'lucide-react'

const CallForProposalsTab = () => {
  const benefits = [
    { icon: Award, title: 'Recognition', description: 'Listed as session organizer in proceedings' },
    { icon: Users, title: 'Networking', description: 'Connect with experts in your field' },
    { icon: FileText, title: 'Publication', description: 'Potential for journal special issue' },
    { icon: Target, title: 'Impact', description: 'Shape research directions in your area' }
  ]

  return (
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
  )
}

export default CallForProposalsTab