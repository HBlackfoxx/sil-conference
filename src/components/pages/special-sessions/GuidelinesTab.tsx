import React from 'react'
import { CheckCircle } from 'lucide-react'

const GuidelinesTab = () => {
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

  return (
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
  )
}

export default GuidelinesTab