import { Description } from "./ExperienceDescription";
import { IndustryInterface, Experiences } from "../data/DataInterfaces";
/*
  name: string;
  description: string[];
  relevantSkills: string[];
  relevantUrl?: string;
  title?: string;
  isCurrent?: boolean;
  fromDate?: string;
  toDate?: string;
  iconPath?: string;
 * */
// TODO: use the rest of the fields shown above
const Work = ({ name, title, fromDate, description }: Experiences) => {
  return (
    <div className="experience__content">
      <div className="experience__time">
        <span className="experience__rounder"></span>
        <span className="experience__line"></span>
      </div>
      <div className="experience__data bd-grid">
        <h3 className="experience__title">{title}</h3>
        <span className="experience__company">
          {fromDate} | {name}
        </span>
        {description.map((desc, i) => (
          <Description key={i} desc={desc} />
        ))}
      </div>
    </div>
  );
};

export const IndustryExperience = ({ entries }: IndustryInterface) => {
  return (
    <section className="work-experience section" id="experience">
      <h2 className="section-title">Experiences</h2>
      <div className="experience__container bd-grid">
        {entries.map((work) => (
          <Work key={work.name} {...work} />
        ))}
      </div>
    </section>
  );
};
