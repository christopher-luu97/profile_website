import React from "react";
import { About } from "./About";
import { ProjectsGrid } from "./ProjectGrid";
import { BlogsGrid } from "./BlogGrid";

export const LandingPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="pb-16"></div>
      <About />
      <ProjectsGrid />
      <BlogsGrid />
      <div className="flex justify-center my-8">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2">
          Projects
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mx-2">
          Blog
        </button>
        {/* Add other navigation buttons as needed */}
      </div>
    </div>
  );
};
