import { Description } from "./ExperienceDescription";
import { IndustryInterface, IndustryExperience } from "../data/DataInterfaces";

// TODO: use the rest of the fields
const IndustryEntry = ({
  company,
  title,
  fromDate,
  description,
}: IndustryExperience) => {
  return (
    <div className="experience__content">
      <div className="experience__time">
        <span className="experience__rounder"></span>
        <span className="experience__line"></span>
      </div>
      <div className="experience__data bd-grid">
        <h3 className="experience__title">{title}</h3>
        <span className="experience__company">
          {fromDate} | {company}
        </span>
        {description.map((desc, i) => (
          <Description key={i} desc={desc} />
        ))}
      </div>
    </div>
  );
};

export const IndustryExperiences = ({ entries }: IndustryInterface) => {
  return (
    <section className="work-experience section" id="experience">
      <h2 className="section-title">Experiences</h2>
      <div className="experience__container bd-grid">
        {entries.map((work) => (
          <IndustryEntry key={work.company} {...work} />
        ))}
      </div>
    </section>
  );
};
