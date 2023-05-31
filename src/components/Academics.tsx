export interface AcademiaEntry {
  institution: string,
  url: URL,
  iconPath: string,
  isAttending: boolean,
  fromDate: Date,
  toDate: Date,
  location: String,
  gpa: number,
  interestingClasses: string[]
}

export interface Academics {
  entries: AcademiaEntry[]
}
