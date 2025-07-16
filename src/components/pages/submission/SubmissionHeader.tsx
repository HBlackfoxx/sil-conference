import React from 'react'
import { Upload, Info } from 'lucide-react'

const SubmissionHeader = () => {
  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center space-x-3">
        <Upload className="w-10 h-10 text-blue-600" />
        <span>Paper Submission</span>
      </h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Submit your research paper to SIL 2025. Follow our guided process to ensure 
        your submission meets all requirements.
      </p>
      
      <div className="mt-8 p-4 bg-blue-50 rounded-lg max-w-2xl mx-auto">
        <div className="flex items-start space-x-3">
          <Info className="w-5 h-5 text-blue-600 mt-0.5" />
          <div className="text-left">
            <h3 className="font-semibold text-blue-900">Submission Deadline</h3>
            <p className="text-blue-800 text-sm">March 15, 2025 at 11:59 PM (GMT)</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubmissionHeader