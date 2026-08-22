import React from "react";
import { About } from "./About";
import { CapabilitiesSection } from "./CapabilitiesSection";
import { ExperienceSection } from "./ExperienceSection";
import { BlogTeaser } from "./BlogTeaser";
import { StackSection } from "./StackSection";
import { ContactSection } from "./ContactSection";
import { ProjectsGrid } from "./ProjectGrid";
import { AgentTerminal } from "./AgentTerminal";
import "./LandingPage.css";

export const LandingPage: React.FC = () => {
  return (
    <main className="kh-page">
      <div className="kh-page__noise" />

      {/* Hero */}
      <section className="kh-hero" aria-label="Introduction">
        <div className="kh-hero__inner">
          <div className="kh-hero__copy">
            <p className="kh-hero__eyebrow">CHRISTOPHER LUU</p>
            <h1 className="kh-hero__title">
              Software engineer
              <span>AI · data · systems</span>
            </h1>
            <p className="kh-hero__subtitle">
              Building practical production systems across agentic AI, RAG and
              enterprise search, data engineering, full stack applications,
              geospatial analytics, and secure government delivery.
            </p>
            <div className="kh-hero__actions">
              <a
                href="https://www.linkedin.com/in/christopher-luu-542691149"
                className="kh-button kh-button--primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/christopher-luu97"
                className="kh-button kh-button--outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a href="#capabilities" className="kh-button kh-button--ghost">
                View capabilities ↓
              </a>
            </div>
          </div>
          <div className="kh-hero__visual">
            <AgentTerminal />
          </div>
        </div>

        <div className="kh-divider">
          <div className="kh-divider__orb" />
          <div className="kh-divider__bar" />
        </div>
      </section>

      {/* About / Summary */}
      <section className="kh-section kh-section--about" id="about">
        <div className="kh-container">
          <About />
        </div>
      </section>

      {/* Capabilities with recruiter mode selector */}
      <section className="kh-section" id="capabilities">
        <div className="kh-container">
          <CapabilitiesSection />
        </div>
      </section>

      {/* Experience proof */}
      <section className="kh-section" id="experience">
        <div className="kh-container">
          <ExperienceSection />
        </div>
      </section>

      {/* Blog / build log */}
      <section className="kh-section" id="blog">
        <div className="kh-container">
          <BlogTeaser />
        </div>
      </section>

      {/* Technical stack */}
      <section className="kh-section" id="stack">
        <div className="kh-container">
          <StackSection />
        </div>
      </section>

      {/* Public builds */}
      <section className="kh-section" id="projects">
        <div className="kh-container">
          <ProjectsGrid />
        </div>
      </section>

      {/* Contact */}
      <section className="kh-section" id="contact">
        <div className="kh-container">
          <ContactSection />
        </div>
      </section>
    </main>
  );
};
