import React from "react";
import { skills } from "./Skills";

export const SkillsGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
      {skills.map((skill, index) => (
        <div key={index} className="flex flex-col items-center">
          <img
            src={`/icons/${skill.name.toLowerCase()}.png`} // Replace with the actual path to your icons
            alt={skill.name}
            className="h-12 w-12 mb-2" // Adjust size as needed
          />
          <h3 className="text-lg font-semibold">{skill.name}</h3>
          <p className="text-sm text-center">{skill.description}</p>
        </div>
      ))}
    </div>
  );
};
