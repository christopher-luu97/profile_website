import React from "react";

export const LandingPage: React.FC = () => {
  return (
    <div className="text-center p-12">
      <h1 className="text-4xl font-bold mb-4">
        Welcome to My Personal Website
      </h1>
      <p className="mb-8">
        This is the starting point of my professional online presence.
      </p>
      <div className="flex justify-center">
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
