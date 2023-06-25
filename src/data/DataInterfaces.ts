export type OverviewInterface = {
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
};

export type SocialMediaInterface = {
  id: string;
  social: {
    label: string;
    platform: string;
    url: string;
    className: string;
  }[];
};

export type AcademicsInterface = {
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
};

export type ProjectsInterface = {
  id: string;
  entries: {
    name: string;
    url: string;
    iconPath: string;
    description: string[];
    relevantSkills: string[];
  }[];
};

export type IndustryInterface = {
  id: string;
  experiences: {
    company: string;
    companyUrl: string;
    title: string;
    isCurrent: boolean;
    fromDate: string;
    toDate: string;
    iconPath: string;
    description: string[];
    relevantSkills: string[];
  }[];
};
