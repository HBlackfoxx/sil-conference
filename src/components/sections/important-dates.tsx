"use client"

import React, { useState } from 'react'
import { Calendar, Clock, AlertCircle, CheckCircle, FileText, Users, Award, Mic } from 'lucide-react'

const ImportantDates = () => {
  const [activeCategory, setActiveCategory] = useState('submission')

  const dateCategories = {
    submission: {
      title: 'Paper Submission',
      icon: FileText,
      dates: [
        {
          title: 'Abstract Submission Deadline',
          date: 'February 15, 2025',
          status: 'upcoming',
          description: 'Submit your paper abstract for initial review'
        },
        {
          title: 'Full Paper Submission',
          date: 'March 15, 2025',
          status: 'upcoming',
          description: 'Complete paper submission for peer review'
        },
        {
          title: 'Notification of Acceptance',
          date: 'April 10, 2025',
          status: 'upcoming',
          description: 'Authors will be notified of paper acceptance status'
        },
        {
          title: 'Camera-Ready Submission',
          date: 'April 25, 2025',
          status: 'upcoming',
          description: 'Final version of accepted papers due'
        }
      ]
    },
    registration: {
      title: 'Registration',
      icon: Users,
      dates: [
        {
          title: 'Early Bird Registration Opens',
          date: 'January 10, 2025',
          status: 'active',
          description: 'Register early for discounted rates'
        },
        {
          title: 'Early Bird Registration Closes',
          date: 'March 31, 2025',
          status: 'upcoming',
          description: 'Last day for early bird pricing'
        },
        {
          title: 'Regular Registration Closes',
          date: 'April 30, 2025',
          status: 'upcoming',
          description: 'Standard registration deadline'
        },
        {
          title: 'On-site Registration',
          date: 'May 15, 2025',
          status: 'upcoming',
          description: 'Registration available at the venue'
        }
      ]
    },
    conference: {
      title: 'Conference Events',
      icon: Mic,
      dates: [
        {
          title: 'Pre-Conference Workshops',
          date: 'May 14, 2025',
          status: 'upcoming',
          description: 'Optional workshops and tutorials'
        },
        {
          title: 'Conference Day 1',
          date: 'May 15, 2025',
          status: 'upcoming',
          description: 'Opening ceremony and keynote speeches'
        },
        {
          title: 'Conference Day 2',
          date: 'May 16, 2025',
          status: 'upcoming',
          description: 'Technical sessions and panel discussions'
        },
        {
          title: 'Conference Day 3 & Gala Dinner',
          date: 'May 17, 2025',
          status: 'upcoming',
          description: 'Final sessions and closing ceremony'
        }
      ]
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-500" />
      case 'active':
        return <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
      case 'upcoming':
        return <Clock className="w-5 h-5 text-blue-500" />
      default:
        return <AlertCircle className="w-5 h-5 text-gray-400" />
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'border-green-500 bg-green-50'
      case 'active':
        return 'border-blue-500 bg-blue-50 ring-2 ring-blue-200'
      case 'upcoming':
        return 'border-gray-300 bg-white'
      default:
        return 'border-gray-200 bg-gray-50'
    }
  }

  return (
    <section id="dates" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Key Deadlines</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Important Dates
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't miss these crucial deadlines for SIL 2025. Mark your calendar!
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(dateCategories).map(([key, category]) => {
            const Icon = category.icon
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === key
                    ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{category.title}</span>
              </button>
            )
          })}
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300" />

            {/* Date Items */}
            {dateCategories[activeCategory].dates.map((item, index) => (
              <div
                key={index}
                className="relative flex items-start mb-8 last:mb-0 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 w-4 h-4 bg-white rounded-full transform -translate-x-1/2 border-4 border-blue-500 z-10" />

                {/* Content Card */}
                <div className={`ml-20 flex-1 border-2 rounded-xl p-6 transition-all duration-300 hover:shadow-lg ${getStatusColor(item.status)}`}>
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                    {getStatusIcon(item.status)}
                  </div>
                  <div className="flex items-center space-x-2 mb-3">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span className="text-lg font-medium text-gray-700">{item.date}</span>
                    {item.status === 'active' && (
                      <span className="ml-2 px-2 py-1 bg-green-500 text-white text-xs rounded-full">
                        Now Open
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Don't Miss Out!</h3>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter to receive reminders about important deadlines and conference updates.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  )
}

export default ImportantDates