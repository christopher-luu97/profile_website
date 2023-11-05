import React from "react";
import { skills } from "./Skills";

export const SkillsGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-6">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="flex flex-col items-center p-4 bg-gray-100 rounded-lg transform transition duration-300 hover:scale-105 hover:bg-gray-200"
        >
          <img
            src={skill.icon}
            alt={skill.name}
            className="h-8 w-8 mb-2 animate-bounce-slow" // Adjust size as needed
          />
          <h3 className="text-md text-gray-800 font-bold">{skill.name}</h3>
        </div>
      ))}
    </div>
  );
};
