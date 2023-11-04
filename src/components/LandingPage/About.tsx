import React from "react";
import { ProfileImage } from "./ProfileImage"; // Assuming the ProfileImage component is in the same directory
import { SkillsGrid } from "./SkillsGrid"; // Assuming the SkillsGrid component is in the same directory

export const About: React.FC = () => {
  return (
    <section className="container mx-auto p-6">
      {/* Profile image only visible on mobile */}
      <div className="md:hidden p-4">
        <ProfileImage />
      </div>
      <div className="flex flex-col md:flex-row">
        {/* Text section */}
        <div className="flex-1 text-left p-4">
          <h2 className="text-3xl font-bold mb-4">Who I Am</h2>
          <p className="mb-4">
            I'm a dedicated software developer with a passion for coding and
            innovation. I thrive on tackling complex problems and turning ideas
            into reality.
          </p>
          <p>
            With hands-on experience in developing applications and a passion
            for building decision-making tools, I am always eager to adopt new
            technologies and strive for excellence in my work.
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
