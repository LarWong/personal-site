import {
  AcademicsInterface,
  AcademicInstitution,
} from "../data/DataInterfaces";

export const AcademicExperiences = ({ institutions }: AcademicsInterface) => {
  return (
    <section className="academic-experience section" id="education">
      <h2 className="section-title">Education</h2>
      <div className="education__container bd-grid">
        {institutions.map((academy) => (
          <AcademicExperience key={academy.institution} {...academy} />
        ))}
      </div>
    </section>
  );
};

const AcademicExperience = ({
  degree,
  fromDate,
  toDate,
  institution,
}: AcademicInstitution) => {
  return (
    <div className="education__content">
      <div className="education__time">
        <span className="education__rounder"></span>
        <span className="education__line"></span>
      </div>
      <div className="education__data bd-grid">
        <h3 className="education__title">{degree}</h3>
        <span className="education__year">{`${fromDate} - ${toDate}`}</span>
        <span className="education__studies">{institution}</span>
      </div>
    </div>
  );
};
