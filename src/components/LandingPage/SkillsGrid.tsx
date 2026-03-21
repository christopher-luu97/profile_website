import React from "react";
import { skills } from "./Skills";

export const SkillsGrid: React.FC = () => {
  return (
    <div className="kh-skills">
      <p className="kh-skills__label">Capabilities</p>

      <div className="kh-skills__grid">
        {skills.map((skill, index) => (
          <div key={index} className="kh-skill-card">
            <img
              src={skill.icon}
              alt={skill.name}
              className="kh-skill-card__icon"
            />
            <div>
              <h3 className="kh-skill-card__title">{skill.name}</h3>
              {skill.description && (
                <p className="kh-skill-card__description">
                  {skill.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
