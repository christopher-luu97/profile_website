import React from "react";
import { SkillsGrid } from "./SkillsGrid";

export const About: React.FC = () => {
  return (
    <section className="kh-card kh-about">
      <div className="kh-section-heading kh-about__heading">
        <p className="kh-section-heading__eyebrow">PROFILE</p>
        <h2 className="kh-section-heading__title">About</h2>
      </div>

      <div className="kh-about__layout">
        <div className="kh-about__main">
          <div className="kh-about__content">
            <h3 className="kh-about__headline">Hey, I’m Chris.</h3>

            <p className="kh-about__lead">
              I work broadly across the software and digital delivery space as a
              technical engineer who can move between strategy and
              implementation.
            </p>

            <p className="kh-about__body">
              That includes architecture, prototyping, system design, AI and
              analytics, integration, delivery, and understanding how technology
              works end to end across an organisation.
            </p>

            <p className="kh-about__body">
              I enjoy turning ideas into practical outcomes, from proofs of
              concept and pilots through to production-ready systems that are
              useful, maintainable, and aligned to real business needs.
            </p>

            <div className="kh-about__divider" />
          </div>

          <aside className="kh-about__panel" aria-label="Profile summary">
            <div className="kh-about__panel-card">
              <p className="kh-about__panel-label">AT A GLANCE</p>

              <h4 className="kh-about__panel-title">Technical Engineer</h4>

              <p className="kh-about__panel-text">
                Experienced across the entire technology lifecycle
              </p>

              <div className="kh-about__panel-divider" />

              <ul className="kh-about__panel-list">
                <li>Strategy, discovery, and problem framing</li>
                <li>Prototyping, experimentation, and validation</li>
                <li>Engineering, systems, and implementation</li>
                <li>Production delivery and operationalisation</li>
              </ul>
            </div>
          </aside>
        </div>

        <div className="kh-about__skills">
          <SkillsGrid />
        </div>
      </div>
    </section>
  );
};
