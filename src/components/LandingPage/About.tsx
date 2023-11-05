// In your About.tsx file
import React from "react";
import { ProfileImage } from "./ProfileImage";
import { SkillsGrid } from "./SkillsGrid";

export const About: React.FC = () => {
  return (
    <section className="container mx-auto p-6 bg-white rounded-lg shadow-xl animate-slide-in-bottom">
      {/* Profile image only visible on mobile */}
      <div className="md:hidden p-4 animate-fade-in">
        <ProfileImage />
      </div>
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <div className="flex-1 text-left p-4">
          <h1 className="text-5xl font-bold mb-4 text-indigo-600">Who I Am</h1>
          <h2 className="text-xl mb-4 text-gray-700">
            Welcome to my website, where I share my passion for building
            software tools and showcasing them to the world. Join me on this
            journey as I turn ideas into innovative products that you can follow
            along with.
          </h2>
          <p className="mb-6 text-gray-600">
            Software Engineer, Data Scientist, Data Analyst, Consultant, Code
            Wizard — I'm a professional engineer that has worn many hats. Here
            are some of my key technical skills and knowledge developed through
            my years of experience.
          </p>
          <SkillsGrid />
        </div>
        {/* Profile image only visible on desktop */}
        <div className="flex-1 p-2 hidden md:block animate-slide-in-right">
          <ProfileImage />
        </div>
      </div>
    </section>
  );
};
