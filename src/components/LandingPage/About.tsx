import React from "react";
import { ProfileImage } from "./ProfileImage"; // Assuming the ProfileImage component is in the same directory
import { SkillsGrid } from "./SkillsGrid"; // Assuming the SkillsGrid component is in the same directory

export const About: React.FC = () => {
  return (
    <section className="container mx-auto p-6 bg-white shadow-xl animate-slide-in-bottom">
      {/* Profile image only visible on mobile */}
      <div className="md:hidden p-4">
        <ProfileImage />
      </div>
      <div className="flex flex-col md:flex-row">
        {/* Text section */}
        <div className="flex-1 text-left p-4">
          <h1 className="text-5xl font-bold mb-4">Who I Am</h1>
          <h2 className="text-xl mb-4">
            Welcome to my website, where I share my passion for building
            software tools and showcasing them to the world. Join me on this
            journey as I turn ideas into innovative products that you can follow
            along with.
          </h2>
          <p>
            Software Engineer, Data Scienctist, Data Analyst, Consultant, Code
            Wizard, I'm a professional engineer that has worn many hats. Here
            are some of my key techincal skills and knowledge developed through
            my years of experience.
          </p>
          <SkillsGrid />
        </div>
        {/* Profile image only visible on desktop */}
        <div className="flex-1 p-2 hidden md:block">
          <ProfileImage />
        </div>
      </div>
    </section>
  );
};
