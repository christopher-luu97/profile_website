import React from "react";
import { Link } from "react-router-dom";
import { BlogPost } from "./data/types";
import { formatPostDate } from "./blogUtils";

interface BlogPostCardProps {
  post: BlogPost;
  revealDelay?: number;
}

export const BlogPostCard: React.FC<BlogPostCardProps> = ({
  post,
  revealDelay = 0,
}) => {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="kh-blog-card"
      data-reveal=""
      style={{ "--reveal-delay": `${revealDelay}s` } as React.CSSProperties}
    >
      <p className="kh-blog-card__date">{formatPostDate(post.date)}</p>
      <h3 className="kh-blog-card__title">{post.title}</h3>
      <p className="kh-blog-card__excerpt">{post.excerpt}</p>
      {post.tags.length > 0 && (
        <div className="kh-blog-card__tags">
          {post.tags.map((tag) => (
            <span key={tag} className="kh-tag">
              {tag}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
};
