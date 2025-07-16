import { 
  Brain, Truck, Leaf, Network, Database, Shield
} from 'lucide-react'
import { CallPapersData } from '@/types/call-papers'

export const callPapersData: CallPapersData = {
  topicAreas: [
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
  ],

  importantDates: [
    { event: 'Abstract Submission Opens', date: 'December 1, 2024', status: 'completed' },
    { event: 'Abstract Submission Deadline', date: 'February 15, 2025', status: 'upcoming' },
    { event: 'Full Paper Submission Deadline', date: 'March 15, 2025', status: 'upcoming' },
    { event: 'Notification of Acceptance', date: 'April 10, 2025', status: 'upcoming' },
    { event: 'Camera-Ready Paper Due', date: 'April 25, 2025', status: 'upcoming' },
    { event: 'Conference Dates', date: 'May 15-17, 2025', status: 'upcoming' }
  ],

  submissionGuidelines: [
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
}