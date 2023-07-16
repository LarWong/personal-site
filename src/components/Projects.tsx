import { ProjectsInterface, ProjectExperience } from "../data/DataInterfaces";
import { Description } from "./ExperienceDescription";

const Project = ({ name, description, relevantUrl }: ProjectExperience) => {
  return (
    <div className="experience__content">
      <div className="experience__time">
        <span className="experience__rounder"></span>
        <span className="experience__line"></span>
      </div>
      <div className="experience__data bd-grid">
        <h3 className="experience__title">{name}</h3>
        <span className="experience__proyect">{relevantUrl}</span>
        {description.map((desc, i) => (
          <Description key={i} desc={desc} />
        ))}
      </div>
    </div>
  );
};

export const Projects = ({ entries }: ProjectsInterface) => {
  return (
    <section className="proyects-experience section" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="experience__container bd-grid">
        {entries.map((project) => (
          <Project key={project.name.replace(/\s/g, "")} {...project} />
        ))}
      </div>
    </section>
  );
};
