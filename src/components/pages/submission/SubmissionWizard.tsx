import React from 'react'
import { CheckCircle } from 'lucide-react'

interface SubmissionWizardProps {
  currentStep: number
  totalSteps: number
}

const SubmissionWizard = ({ currentStep, totalSteps }: SubmissionWizardProps) => {
  const steps = [
    { number: 1, title: 'Paper Details', description: 'Title, abstract, keywords' },
    { number: 2, title: 'Authors', description: 'Author information' },
    { number: 3, title: 'Upload Files', description: 'PDF and supplementary files' },
    { number: 4, title: 'Review & Submit', description: 'Final review and submission' }
  ]

  return (
    <div className="max-w-4xl mx-auto mb-12">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-center">
            <div className="flex flex-col items-center">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                currentStep >= step.number
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-600'
              }`}>
                {currentStep > step.number ? (
                  <CheckCircle className="w-6 h-6" />
                ) : (
                  step.number
                )}
              </div>
              <div className="mt-2 text-center">
                <p className="text-sm font-medium">{step.title}</p>
                <p className="text-xs text-gray-600">{step.description}</p>
              </div>
            </div>
            {index < steps.length - 1 && (
              <div className={`w-20 md:w-32 h-1 mx-2 transition-all duration-300 ${
                currentStep > step.number ? 'bg-blue-600' : 'bg-gray-200'
              }`} />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default SubmissionWizard