// Used for project and work experience descriptions
interface ExperienceEntry {
  iconPath: string,
  url?: URL,
  description: string[],
  relevantSkills: string[]
}

export interface ProjectEntry extends ExperienceEntry {
  projectName: string
}

export interface IndustryEntry extends ExperienceEntry {
  company: string,
  title: string,
  isCurrent: boolean,
  fromDate: Date,
  toDate: Date,
}
