// ProjectsGrid.tsx
import React from "react";
import { Link } from "react-router-dom";
import { projects } from "./ProjectData";

export const ProjectsGrid: React.FC = () => {
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
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline"
                >
                  <img
                    src={project.imageUrl}
                    alt={project.name}
                    className="w-full h-64 object-cover"
                  />
                </a>
              ) : (
                <Link
                  to={`/blog/article/${project.articleSlug}`}
                  className="no-underline"
                >
                  <img
                    src={project.imageUrl}
                    alt={project.name}
                    className="w-full h-64 object-cover"
                  />
                </Link>
              )}
              <div className="p-4 bg-white flex flex-col flex-grow">
                <h5 className="text-lg font-bold mb-2">{project.name}</h5>
                <p className="text-gray-700 text-base flex-grow overflow-hidden overflow-ellipsis whitespace-nowrap">
                  {project.projectDescription}
                </p>
                {/* Icons and links for GitHub and other platforms can be added here */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
