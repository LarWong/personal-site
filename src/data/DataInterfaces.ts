export interface OverviewInterface {
  id: string;
  summary: {
    description: string;
    name: string;
    occupation: string;
    location: string;
    email: string;
    telephoneNumber: string;
    imagePath: string;
  };
}
export interface Social {
  label: string;
  platform: string;
  url: string;
  iconName: string;
}

export interface SocialMediaInterface {
  id: string;
  socials: Social[];
}

export interface AcademicInstitution {
  institution: string;
  degree: string;
  iconPath: string;
  isAttending: boolean;
  fromDate: string;
  toDate: string;
  location: string;
  gpa: number;
  interestingClasses: string[];
}

export interface AcademicsInterface {
  id: string;
  institutions: AcademicInstitution[];
}

export interface IndustryExperience {
  company: string;
  description: string[];
  relevantSkills: string[];
  title: string;
  isCurrent: boolean;
  fromDate: string;
  toDate: string;
  iconPath: string;
}

export interface IndustryInterface {
  id: string;
  entries: IndustryExperience[];
}

export interface ProjectExperience {
  name: string;
  description: string[];
  relevantSkills: string[];
  relevantUrl: string;
}

export interface ProjectsInterface {
  id: string;
  entries: ProjectExperience[];
}
