import React from "react";
import { Project } from "../Interfaces/projectInterface";

const projects: Project[] = [
  // Populate this array with your project details
  // Example:
  // { id: 1, title: 'Project 1', image: 'url', description: '...', githubLink: '...', youtubeLink: '...', mediumLink: '...', blogLink: '/blog/article/project1' },
];

const Projects: React.FC = () => {
  return (
    <>
      <main className="container mx-auto mt-10">
        <h1 className="text-3xl font-bold text-center mb-8">Projects</h1>
        <div className="grid grid-cols-4 gap-4">
          {projects.map((project) => (
            <div key={project.id} className="border p-4 rounded">
              <img src={project.image} alt={project.title} className="w-full" />
              <h2 className="text-xl font-bold mt-2">{project.title}</h2>
              <p className="text-sm mt-2">{project.description}</p>
              <div className="flex justify-around mt-4">
                <a href={project.githubLink}>GitHub</a>
                <a href={project.youtubeLink}>YouTube</a>
                <a href={project.mediumLink}>Medium</a>
                <a href={project.blogLink}>Blog</a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Projects;
