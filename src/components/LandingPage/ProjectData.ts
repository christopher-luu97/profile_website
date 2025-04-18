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
    id: "project-005",
    name: "Canberra Food Guide",
    projectDescription:
      "Restaurant finder for the city of Canberra, a Google maps replacement",
    imageUrl: "https://img.youtube.com/vi/cppcNVOCIek/maxresdefault.jpg",
    articleUrl:
      "https://medium.com/@cluu.codes1337/i-built-my-own-restaurant-finder-because-google-maps-was-starving-me-8dc861857c0b",
    githubUrl: "#",
    youtubeUrl:
      "https://youtu.be/cppcNVOCIek",
  },
  {
    id: "project-004",
    name: "Manga Tracker Application",
    projectDescription:
      "Manga tracking across various websites all through one interface",
    imageUrl: "https://i3.ytimg.com/vi/4EDpw_qhb-A/maxresdefault.jpg",
    articleUrl:
      "https://medium.com/@cluu.codes1337/building-a-manga-tracking-application-journey-and-design-6fd7d7d68655",
    githubUrl: "https://github.com/christopher-luu97/manga_bookmarker",
    youtubeUrl:
      "https://www.youtube.com/watch?v=4EDpw_qhb-A&ab_channel=chriscodes",
  },
  {
    id: "project-003",
    name: "Code search and question answering",
    projectDescription:
      " Vector search on code repositories with Marqo and question answering with a large language model, all offline.",
    imageUrl: "https://i.ytimg.com/vi/tcz7p1Tx0LY/maxresdefault.jpg",
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
      "Efficiently search through transcriptions with Weaviate. A clone of www.hubermantranscripts.com but with my own spin.",
    imageUrl: "https://i.ytimg.com/vi/1Rlz3VlKcsk/maxresdefault.jpg",
    articleUrl:
      "https://medium.com/@cluu.codes1337/how-i-made-a-complete-vector-search-web-application-with-weaviate-d88e3b667bb",
    githubUrl: "https://github.com/christopher-luu97/TranscriptionSearch",
    youtubeUrl:
      "https://www.youtube.com/watch?v=1Rlz3VlKcsk&ab_channel=chriscodes",
  },
  {
    id: "project-001",
    name: "Transcription web application",
    projectDescription:
      "Transcribe your uploaded media files all in the browser using WhisperX combined with an interface to search via keywords and timestamps",
    imageUrl: "https://i.ytimg.com/vi/FIFocNaa4mo/maxresdefault.jpg",
    githubUrl: "https://github.com/christopher-luu97/transcription_webapp",
    youtubeUrl:
      "https://www.youtube.com/watch?v=FIFocNaa4mo&ab_channel=chriscodes",
  },
];
