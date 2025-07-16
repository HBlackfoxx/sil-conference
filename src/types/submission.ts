export interface Author {
  name: string
  email: string
  affiliation: string
  country: string
  isCorresponding: boolean
}

export interface PaperType {
  value: string
  label: string
  icon: any
}

export interface SubmissionFormData {
  title: string
  abstract: string
  keywords: string[]
  track: string
  paperType: string
  conflictOfInterest: string
  ethicsStatement: boolean
  originalityStatement: boolean
}

export interface UploadedFile {
  name: string
  size: string
  file: File
}

export interface SubmissionStep {
  number: number
  title: string
  icon: any
}