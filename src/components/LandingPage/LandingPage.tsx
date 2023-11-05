import React from "react";
import { About } from "./About";
import { ProjectsGrid } from "./ProjectGrid";

export const LandingPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="pb-16"></div>
      <About />
      <ProjectsGrid />
    </div>
  );
};
