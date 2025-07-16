import React from 'react'
import { AlertCircle } from 'lucide-react'

interface FormFieldProps {
  label: string
  required?: boolean
  error?: string
  children: React.ReactNode
  description?: string
}

const FormField = ({ label, required = false, error, children, description }: FormFieldProps) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {description && (
        <p className="text-sm text-gray-600">{description}</p>
      )}
      {children}
      {error && (
        <div className="flex items-center space-x-2 text-red-600 text-sm">
          <AlertCircle className="w-4 h-4" />
          <span>{error}</span>
        </div>
      )}
    </div>
  )
}

export default FormField