import React from "react";
import { useParams } from "react-router-dom";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

// Example Article data structure
interface ArticleData {
  id: number;
  title: string;
  content: string; // Article content
  // Add other necessary fields...
}

const Article: React.FC = () => {
  const { articleId } = useParams();

  // Fetch the article data based on articleId
  // For now, let's use a placeholder
  const article: ArticleData = {
    id: parseInt(articleId!),
    title: "Sample Article",
    content: "This is a sample article content...",
  };

  return (
    <>
      <Header />
      <main className="container mx-auto mt-10">
        <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
        <article className="p-4">{article.content}</article>
      </main>
      <Footer />
    </>
  );
};

export default Article;
