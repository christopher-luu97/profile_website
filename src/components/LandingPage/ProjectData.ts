// projectsData.ts

export interface Project {
  id: string;
  name: string;
  projectDescription: string;
  imageUrl: string;
  articleUrl?: string;
  githubUrl?: string;
  youtubeUrl?: string;
}

export const projects: Project[] = [
  {
    id: "project-003",
    name: "Code search and question answering",
    projectDescription:
      "Vector search on code repositories with Marqo and question answering with a large language model, all offline",
    imageUrl: "https://i.ytimg.com/vi/tcz7p1Tx0LY/maxresdefault.jpg", // replace with your image path
    articleUrl:
      "https://medium.com/@cluu.codes1337/code-search-and-question-answering-using-marqo-and-a-locally-hosted-llm-00d0dda8e8e7",
    githubUrl: "https://github.com/christopher-luu97/repo_search",
    youtubeUrl:
      "https://www.youtube.com/watch?v=tcz7p1Tx0LY&ab_channel=chriscodes",
  },
  {
    id: "project-002",
    name: "Search your transcripts",
    projectDescription:
      "Efficiently search through transcriptions with Weaviate",
    imageUrl: "https://i.ytimg.com/vi/1Rlz3VlKcsk/maxresdefault.jpg", // replace with your image path
    articleUrl:
      "https://medium.com/@cluu.codes1337/how-i-made-a-complete-vector-search-web-application-with-weaviate-d88e3b667bb",
    githubUrl: "https://github.com/christopher-luu97/TranscriptionSearch",
    youtubeUrl:
      "https://www.youtube.com/watch?v=1Rlz3VlKcsk&ab_channel=chriscodes",
  },
  {
    id: "project-001",
    name: "Transcription web application",
    projectDescription: "Transcribe youtube videos all in one place",
    imageUrl: "https://i.ytimg.com/vi/FIFocNaa4mo/maxresdefault.jpg", // replace with your image path
    githubUrl: "https://github.com/christopher-luu97/transcription_webapp",
    youtubeUrl:
      "https://www.youtube.com/watch?v=FIFocNaa4mo&ab_channel=chriscodes",
  },
];
