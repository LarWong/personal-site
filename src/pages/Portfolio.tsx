import { useState, useEffect } from "react";

// components
import { SEO } from "../components/SEO";
import { Menu } from "../components/Menu";
import { Profile } from "../components/Profile";

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
            {/* <AboutMe {...aboutMe} /> */}
            {/* <Skills {...skills} /> */}
            {/* <SocialMedia {...socialMedia} /> */}
          </div>
          <div className="resume__right">
            {/* <Works {...experience} /> */}
            {/* <Academic {...experience} /> */}
            {/* <Proyects {...experience} /> */}
          </div>
        </div>
      </main>
    </>
  );
};
