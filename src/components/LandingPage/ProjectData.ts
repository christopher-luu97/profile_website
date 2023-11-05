// projectsData.ts

export interface Project {
  id: string;
  name: string;
  projectDescription: string;
  imageUrl: string;
  articleSlug: string;
  githubUrl?: string;
  youtubeUrl?: string;
}

export const projects: Project[] = [
  {
    id: "project-1",
    name: "Project One",
    projectDescription: "This is a short description of the first project.",
    imageUrl: "path_to_your_project_image.jpg", // replace with your image path
    articleSlug: "article_name_1",
    githubUrl: "/",
    youtubeUrl: "/",
  },
  {
    id: "project-2",
    name: "Project Two",
    projectDescription: "This is a short description of the second project.",
    imageUrl: "path_to_your_project_image.jpg", // replace with your image path
    articleSlug: "article_name_2",
    githubUrl: "/",
    youtubeUrl: "/",
  },
  // ...add more projects as needed
];
