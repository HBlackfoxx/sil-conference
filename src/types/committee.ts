export interface CommitteeMember {
  name: string
  role: string
  affiliation: string
  email: string
  bio: string
  image: string
  social: {
    linkedin?: string
    twitter?: string
  }
}

export interface ScientificMember {
  name: string
  affiliation: string
  expertise: string
}

export interface AdvisoryMember {
  name: string
  affiliation: string
  role: string
  image: string
}

export interface CommitteeData {
  organizingCommittee: CommitteeMember[]
  scientificCommittee: ScientificMember[]
  advisoryBoard: AdvisoryMember[]
}