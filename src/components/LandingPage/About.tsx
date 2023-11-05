import React from "react";
import { ProfileImage } from "./ProfileImage"; // Assuming the ProfileImage component is in the same directory
import { SkillsGrid } from "./SkillsGrid"; // Assuming the SkillsGrid component is in the same directory

export const About: React.FC = () => {
  return (
    <section className="container mx-auto p-6 pb-0 bg-[#9C8B7E] animate-slide-in-bottom text-white">
      {/* Profile image only visible on mobile */}
      <div className="md:hidden p-4">
        <ProfileImage />
      </div>
      <div className="flex flex-col md:flex-row">
        {/* Text section */}
        <div className="flex-1 text-left p-4">
          <h1 className="text-5xl font-bold mb-4 font-sans">Hey, I'm Chris!</h1>
          <h2 className="text-xl mb-4 font-mono font-semibold">
            Here I share my passion for building software tools and showcasing
            them to the world. I talk about what I have built and explored as a
            hobby over on Medium and Youtube with the associated code all on
            Github. Have a snoop around!
          </h2>
          <p>
            Software engineer, Data Scientist, Consultant, Data Analyst, Code
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
