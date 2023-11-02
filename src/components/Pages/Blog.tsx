import React from "react";
import { Link } from "react-router-dom";

interface Article {
  id: number;
  title: string;
  image: string; // URL to the image
  excerpt: string;
  githubLink: string;
  youtubeLink: string;
  mediumLink: string;
  articlePath: string; // Path to the Article page
}

const articles: Article[] = [
  // Populate this array with your article details
];

const Blog: React.FC = () => {
  return (
    <>
      <main className="container mx-auto mt-10">
        <h1 className="text-3xl font-bold text-center mb-8">Blog</h1>
        <div className="grid grid-cols-4 gap-4">
          {articles.map((article) => (
            <div key={article.id} className="border p-4 rounded">
              <img src={article.image} alt={article.title} className="w-full" />
              <h2 className="text-xl font-bold mt-2">{article.title}</h2>
              <p className="text-sm mt-2">{article.excerpt}</p>
              <div className="flex justify-around mt-4">
                <a href={article.githubLink}>GitHub</a>
                <a href={article.youtubeLink}>YouTube</a>
                <a href={article.mediumLink}>Medium</a>
                <Link to={article.articlePath}>Read More</Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Blog;
