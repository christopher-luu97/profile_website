export interface Project {
  id: number;
  title: string;
  image: string; // URL to the image
  description: string;
  githubLink: string;
  youtubeLink: string;
  mediumLink: string;
  blogLink: string; // Assuming link to /blog/article/articlename
}
