import React from 'react'
import { CheckCircle, AlertCircle, Download, FileText } from 'lucide-react'
import { SubmissionGuideline } from '@/types/call-papers'

interface GuidelinesTabProps {
  guidelines: SubmissionGuideline[]
}

const GuidelinesTab = ({ guidelines }: GuidelinesTabProps) => {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold mb-6">Submission Guidelines</h2>

        {guidelines.map((section, index) => (
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
  )
}

export default GuidelinesTab