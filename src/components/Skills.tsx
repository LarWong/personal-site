type SkillEntry = { skill: string };
type SkillList = { technicalSkills: string[]; softSkills: string[] };

const SkillItem = ({ skill }: SkillEntry) => {
  return (
    <li className="skills__name">
      <span className="skills__circle" /> {skill}
    </li>
  );
};
export const Skills = ({ technicalSkills, softSkills }: SkillList) => {
  return (
    <>
      <section className="technical-skills section" id="skills">
        <h2 className="section-title">Technologies</h2>
        <div className="skills__content bd-grid">
          <ul className="skills__data">
            {technicalSkills.map((skill) => (
              <SkillItem key={`hard-${skill}`} skill={skill} />
            ))}
          </ul>
        </div>
      </section>
      <section className="soft-skills section">
        <h2 className="section-title">Skills</h2>
        <div className="skills__content bd-grid">
          <ul className="skills__data">
            {softSkills.map((skill) => (
              <SkillItem key={`soft-${skill}`} skill={skill} />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};
