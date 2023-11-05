// ProjectsGrid.tsx
import React from "react";
import { projects } from "./ProjectData";
import { mediaLinks } from "../Header/mediaLinks";

export const ProjectsGrid: React.FC = () => {
  const getMediaIcon = (mediaName: string) => {
    return mediaLinks.find((media) => media.name === mediaName)?.icon;
  };

  const hoverSupported = window.matchMedia(
    "(hover: hover) and (pointer: fine)"
  ).matches;

  return (
    <section className="container mx-auto p-6 bg-white rounded-lg shadow-xl animate-slide-in-bottom">
      <div className="text-left p-4">
        <h1 className="text-5xl font-bold mb-4 text-indigo-600">Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
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
                <p className="text-gray-700 text-base flex-grow overflow-hidden overflow-ellipsis whitespace-nowrap">
                  {project.projectDescription}
                </p>
                <div className="flex justify-start space-x-4 mt-4">
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
          ))}
        </div>
      </div>
    </section>
  );
};
