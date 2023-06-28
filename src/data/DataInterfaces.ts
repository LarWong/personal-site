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

export interface AcademicsInterface {
  id: string;
  institutions: {
    institution: string;
    url: string;
    iconPath: string;
    isAttending: boolean;
    fromDate: string;
    toDate: string;
    location: string;
    gpa: number;
    interestingClasses: string[];
  }[];
}

export interface Experiences {
  name: string;
  description: string[];
  relevantSkills: string[];
  relevantUrl?: string;
  title?: string;
  isCurrent?: boolean;
  fromDate?: string;
  toDate?: string;
  iconPath?: string;
}

export interface ProjectsInterface {
  id: string;
  entries: Experiences[];
}

export interface IndustryInterface {
  id: string;
  entries: Experiences[];
}
