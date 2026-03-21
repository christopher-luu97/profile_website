import React from "react";
import { About } from "./About";
import { ProjectsGrid } from "./ProjectGrid";
import { ProfileImage } from "./ProfileImage";
import "./LandingPage.css";

export const LandingPage: React.FC = () => {
  return (
    <main className="kh-page">
      <div className="kh-page__noise" />
      <div className="kh-page__glow kh-page__glow--left" />
      <div className="kh-page__glow kh-page__glow--right" />

      <section className="kh-hero">
        <div className="kh-hero__inner">
          <div className="kh-hero__copy">
            <p className="kh-hero__eyebrow">CHRISTOPHER LUU</p>
            <h1 className="kh-hero__title">
              Technical engineer
              <span>for modern systems</span>
            </h1>
            <p className="kh-hero__subtitle">
              I work across strategy, software, analytics, AI, and delivery,
              helping turn ideas into proof of concepts, pilots, production
              systems, and better organisational outcomes.
            </p>
          </div>
          <div className="kh-hero__visual">
            <ProfileImage />
          </div>
        </div>

        <div className="kh-divider">
          <div className="kh-divider__orb" />
          <div className="kh-divider__bar" />
        </div>
      </section>

      <section className="kh-section kh-section--about">
        <div className="kh-container">
          <About />
        </div>
      </section>

      <section className="kh-section kh-section--projects">
        <div className="kh-container">
          <ProjectsGrid />
        </div>
      </section>
    </main>
  );
};
