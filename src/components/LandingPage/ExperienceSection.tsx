import React from "react";
import { experiences } from "./data/experience";

export const ExperienceSection: React.FC = () => {
  return (
    <section
      className="kh-card kh-experience"
      aria-labelledby="experience-heading"
    >
      <div className="kh-section-heading">
        <p className="kh-section-heading__eyebrow">PROFESSIONAL EXPERIENCE</p>
        <h2 className="kh-section-heading__title" id="experience-heading">
          Delivery track record
        </h2>
      </div>
      <p className="kh-experience__intro">
        Delivered across government, healthcare, and consulting. Sensitive
        details have been removed in accordance with confidentiality
        requirements.
      </p>
      <div className="kh-experience__list">
        {experiences.map((exp) => (
          <article key={exp.id} data-reveal="" className="kh-experience-card">
            <div className="kh-experience-card__header">
              <p className="kh-experience-card__sector">
                {exp.sector.toUpperCase()}
              </p>
              <p className="kh-experience-card__scope">{exp.scope}</p>
            </div>
            <p className="kh-experience-card__context">{exp.context}</p>
            <ul
              className="kh-experience-card__outcomes"
              aria-label="Key outcomes"
            >
              {exp.outcomes.map((outcome, i) => (
                <li key={i}>{outcome}</li>
              ))}
            </ul>
            <div className="kh-experience-card__tags">
              {exp.tags.map((tag) => (
                <span key={tag} className="kh-tag">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
