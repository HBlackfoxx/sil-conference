export interface TopicArea {
  icon: any
  title: string
  topics: string[]
}

export interface ImportantDate {
  event: string
  date: string
  status: 'completed' | 'upcoming'
}

export interface SubmissionGuideline {
  title: string
  items: string[]
}

export interface CallPapersData {
  topicAreas: TopicArea[]
  importantDates: ImportantDate[]
  submissionGuidelines: SubmissionGuideline[]
}