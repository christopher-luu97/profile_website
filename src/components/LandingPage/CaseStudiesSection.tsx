import React from "react";
import { caseStudies, CaseStudyStatus } from "./data/caseStudies";

const statusBadgeClass: Record<CaseStudyStatus, string> = {
  planned: "kh-status-badge--planned",
  "in-progress": "kh-status-badge--in-progress",
  available: "kh-status-badge--available",
};

export const CaseStudiesSection: React.FC = () => {
  return (
    <section
      className="kh-card kh-case-studies"
      aria-labelledby="case-studies-heading"
    >
      <div className="kh-section-heading">
        <p className="kh-section-heading__eyebrow">UPCOMING WORK</p>
        <h2 className="kh-section-heading__title" id="case-studies-heading">
          Case studies in progress
        </h2>
      </div>
      <p className="kh-case-studies__intro">
        These case studies are in development. Each will demonstrate a real
        delivery pattern using synthetic or anonymised data that I have
        delivered in production.
      </p>
      <div className="kh-case-studies__grid">
        {caseStudies.map((cs, idx) => (
          <article
            key={cs.id}
            data-reveal=""
            style={
              { "--reveal-delay": `${idx * 0.09}s` } as React.CSSProperties
            }
            className="kh-case-study-card"
          >
            <div className="kh-case-study-card__header">
              <h3 className="kh-case-study-card__name">{cs.name}</h3>
              <span
                className={`kh-status-badge ${statusBadgeClass[cs.statusType]}`}
                aria-label={`Status: ${cs.status}`}
              >
                {cs.status}
              </span>
            </div>
            <p className="kh-case-study-card__description">{cs.description}</p>
            <div>
              <p className="kh-case-study-card__list-label">WILL DEMONSTRATE</p>
              <ul className="kh-case-study-card__list">
                {cs.willDemonstrate.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="kh-case-study-card__footer">
              <div className="kh-experience-card__tags">
                {cs.technologies.map((tech) => (
                  <span key={tech} className="kh-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
