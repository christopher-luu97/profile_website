import React from "react";

export const About: React.FC = () => {
  return (
    <section className="kh-card kh-about" aria-labelledby="about-heading">
      <div className="kh-section-heading kh-about__heading">
        <p className="kh-section-heading__eyebrow">PROFILE</p>
        <h2 className="kh-section-heading__title" id="about-heading">
          About
        </h2>
      </div>

      <div className="kh-about__main">
        <div className="kh-about__content">
          <h3 className="kh-about__headline">Hey, I'm Chris.</h3>

          <p className="kh-about__lead">
            I'm a software engineer and data/AI consultant based in Canberra,
            Australia.
          </p>

          <p className="kh-about__body">
            I specialise in building end-to-end systems that turn complex data,
            documents, and processes into practical, production-ready tools —
            working across the full stack, from agentic AI and RAG pipelines to
            analytics platforms, geospatial tools, and secure government
            delivery.
          </p>

          <p className="kh-about__body">
            I'm most useful in environments where the problem is ambiguous, the
            data is messy, and the delivery expectations are high. I work across
            strategy and implementation — from proof of concept through to
            production.
          </p>

          <div className="kh-about__divider" />
        </div>

        <aside className="kh-about__panel" aria-label="Profile summary">
          <div className="kh-about__panel-card">
            <p className="kh-about__panel-label">AT A GLANCE</p>
            <h4 className="kh-about__panel-title">Technical Engineer</h4>
            <p className="kh-about__panel-text">
              Building production systems across the full delivery lifecycle
            </p>
            <div className="kh-about__panel-divider" />
            <ul className="kh-about__panel-list">
              <li>Agentic AI and RAG systems</li>
              <li>Data engineering and analytics platforms</li>
              <li>Full stack web and R/Shiny applications</li>
              <li>Geospatial and policy decision-support tools</li>
              <li>Secure government and enterprise delivery</li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
};
