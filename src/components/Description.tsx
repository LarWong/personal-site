// Used for project and work experience descriptions
export interface Entry {
  iconPath: string,
  url?: URL,
  description: string[],
  relevantSkills: string[]
}

export interface ProjectEntry extends Entry {
  projectName: string
}

export interface IndustryEntry extends Entry {
  company: string,
  title: string,
  isCurrent: boolean,
  fromDate: Date,
  toDate: Date,
}
