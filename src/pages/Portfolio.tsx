import { useState, useEffect } from "react";

// components
import { SEO } from "../components/SEO";
import { Menu } from "../components/Menu";
import { Profile } from "../components/Profile";
import { Skills } from "../components/Skills";
import { SocialMedia } from "../components/Socials";
import { IndustryExperiences } from "../components/Industry";
import { AcademicExperiences } from "../components/Academics";
import { Projects } from "../components/Projects";
import { Footer } from "../components/Footer";

// interfaces
import {
  OverviewInterface,
  SocialMediaInterface,
  AcademicsInterface,
  ProjectsInterface,
  IndustryInterface,
} from "../data/DataInterfaces";

// import data
import _overviewData from "../data/portfolio/Overview.json";
import _socialMediaData from "../data/portfolio/SocialMedia.json";
import _academicsData from "../data/portfolio/Academics.json";
import _projectsData from "../data/portfolio/Projects.json";
import _industryData from "../data/portfolio/Industry.json";

// cast json to discourage changes to jsons without changes to interfaces
const overviewData: OverviewInterface = _overviewData.overview;
const socialMediaData: SocialMediaInterface = _socialMediaData.socialMedia;
const academicsData: AcademicsInterface = _academicsData.academics;
const projectsData: ProjectsInterface = _projectsData.projects;
const industryData: IndustryInterface = _industryData.industry;

const gatherSkills = () => {
  // Current sources of skills:
  // - projectsData
  // - industryData
  // To add more sources of skills, document source above, add to parameters,
  // and edit logic below
  type SkillsTrait = { relevantSkills: string[] };
  let allSkills = new Set<string>();
  const collect = <T extends SkillsTrait>(list: T[]) => {
    list.forEach((entry) => {
      entry.relevantSkills.forEach((skill) => allSkills.add(skill));
    });
  };
  collect(projectsData.entries);
  collect(industryData.entries);
  return Array.from(allSkills);
};

const skillsData: string[] = gatherSkills();

export const Portfolio = () => {
  // make shortcut menu appear when screen is small
  // for mobile devices
  const query = "(min-width: 968px)";
  const [widthMatches, setWidthMatches] = useState<boolean>(
    window.matchMedia(query).matches
  );

  useEffect(() => {
    const media = window.matchMedia(query);
    const checkWidthListener = () => setWidthMatches(media.matches);
    media.addEventListener("change", checkWidthListener);
    return () => media.removeEventListener("change", checkWidthListener);
  });

  return (
    <>
      <SEO {...overviewData} />
      {!widthMatches && <Menu />}
      <main className="l-main bd-container" id="bd-container">
        <div className="resume" id="area-cv">
          <div className="resume__left">
            <Profile {...overviewData} />
            <Skills technicalSkills={skillsData} softSkills={skillsData} />
            <SocialMedia {...socialMediaData} />
            <div className="padding"></div>
          </div>
          <div className="resume__right">
            <IndustryExperiences {...industryData} />
            <AcademicExperiences {...academicsData} />
            <Projects {...projectsData} />
            <div className="padding"></div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};
