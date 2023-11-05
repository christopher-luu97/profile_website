// ProjectsGrid.tsx
import React, { useState } from "react";
import { projects } from "./ProjectData";
import { mediaLinks } from "../Header/mediaLinks";

export const ProjectsGrid: React.FC = () => {
  const [displayCount, setDisplayCount] = useState(3);
  const [expandedDesc, setExpandedDesc] = useState<Record<string, boolean>>({});

  const handleSeeMore = () => {
    setDisplayCount((prevCount) => prevCount + 3);
  };

  // Reset the number of projects displayed to the initial count
  const handleShowLess = () => {
    setDisplayCount(3);
  };

  const getMediaIcon = (mediaName: string) => {
    return mediaLinks.find((media) => media.name === mediaName)?.icon;
  };

  // Toggle the full description view
  const toggleDescription = (id: string) => {
    setExpandedDesc((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const hoverSupported = window.matchMedia(
    "(hover: hover) and (pointer: fine)"
  ).matches;

  return (
    <section className="container mx-auto p-6 bg-white shadow-xl animate-slide-in-bottom">
      <div className="text-left p-4">
        <h1 className="text-5xl font-bold mb-4 text-indigo-600">Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, displayCount).map((project) => (
            <div
              key={project.id}
              className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full"
            >
              <img
                src={project.imageUrl}
                alt={project.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white flex flex-col flex-grow">
                <h5 className="text-lg font-bold mb-2">{project.name}</h5>
                <p
                  className={`text-gray-700 text-base mb-4 flex-grow ${
                    !expandedDesc[project.id] ? "line-clamp-3" : ""
                  }`}
                  onClick={() => toggleDescription(project.id)}
                >
                  {project.projectDescription}
                </p>
                {/* Spacer div to push the icons down */}
                <div className="mt-auto">
                  <div className="flex justify-start space-x-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={getMediaIcon("GitHub")}
                          alt="GitHub"
                          className={`clickable-icon mx-2 w-8 h-8 hover:scale-110 focus:scale-110 transition-transform ${
                            !hoverSupported ? "animate-pulse" : ""
                          }`}
                        />
                      </a>
                    )}
                    {project.articleUrl && (
                      <a
                        href={project.articleUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={getMediaIcon("Medium")}
                          alt="Medium"
                          className={`clickable-icon mx-2 w-8 h-8 hover:scale-110 focus:scale-110 transition-transform ${
                            !hoverSupported ? "animate-pulse" : ""
                          }`}
                        />
                      </a>
                    )}
                    {project.youtubeUrl && (
                      <a
                        href={project.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={getMediaIcon("Youtube")}
                          alt="Youtube"
                          className={`clickable-icon mx-2 w-8 h-8 hover:scale-110 focus:scale-110 transition-transform ${
                            !hoverSupported ? "animate-pulse" : ""
                          }`}
                        />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6 space-x-3">
          {displayCount < projects.length && (
            <button
              onClick={handleSeeMore}
              className="px-6 py-2 border rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none"
            >
              See more
            </button>
          )}
          {displayCount > 3 && (
            <button
              onClick={handleShowLess}
              className="px-6 py-2 border rounded-md bg-red-600 text-white hover:bg-red-700 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none"
            >
              Show less
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
