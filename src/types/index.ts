export interface Speaker {
  id: string
  name: string
  role: string
  organization: string
  bio: string
  image: string
  featured?: boolean
  socialLinks?: {
    linkedin?: string
    twitter?: string
    website?: string
  }
}

export interface Sponsor {
  id: string
  name: string
  logo: string
  website: string
  tier: 'platinum' | 'gold' | 'silver' | 'bronze'
}

export interface ImportantDate {
  id: string
  title: string
  date: string
  description?: string
  highlight?: boolean
}

export interface FAQItem {
  id: string
  question: string
  answer: string
  category?: string
}

export interface GalleryImage {
  id: string
  src: string
  alt: string
  caption?: string
}