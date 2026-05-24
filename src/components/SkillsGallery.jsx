import React from "react";
import SkillCard from "./SkillCard";

const SkillsGallery = () => {
  const skills = [
    { name: "JavaScript" },
    { name: "React" },
    { name: "HTML" },
    { name: "Python" },
    // Add or customize skills here
  ];

  return (
    <section className="skills-gallery">
      <h2 className="skills-gallery__title">Skills</h2>
      <div className="skills-gallery__grid">
        {skills.map((skill) => (
          <SkillCard key={skill.name} name={skill.name} />
        ))}
      </div>
    </section>
  );
};

export default SkillsGallery;
