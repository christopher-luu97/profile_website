import React from "react";
import { About } from "./About";

export const LandingPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold my-12 text-center">
        Welcome to My Personal Website
      </h1>
      <About />
      <p className="my-8 text-center">
        This is the starting point of my professional online presence.
      </p>
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
