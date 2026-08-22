import React from "react";
import { Link } from "react-router-dom";
import { posts } from "../Blog/data/posts";
import { sortByDateDesc } from "../Blog/blogUtils";
import { BlogPostCard } from "../Blog/BlogPostCard";

export const BlogTeaser: React.FC = () => {
  const latest = sortByDateDesc(posts).slice(0, 3);

  return (
    <section className="kh-card kh-blog-teaser" aria-labelledby="blog-heading">
      <div className="kh-section-heading">
        <p className="kh-section-heading__eyebrow">BUILD LOG</p>
        <h2 className="kh-section-heading__title" id="blog-heading">
          From the blog
        </h2>
      </div>
      <p className="kh-blog-teaser__intro">
        A running log of what I'm learning — mostly short, informal notes
        rather than polished write-ups. No demos here, just the thinking as
        it happens.
      </p>

      {latest.length === 0 ? (
        <div className="kh-blog-teaser__empty" data-reveal="">
          <p>First article coming soon.</p>
          <Link to="/blog" className="kh-button kh-button--outline">
            Visit the blog →
          </Link>
        </div>
      ) : (
        <>
          <div className="kh-blog-teaser__grid">
            {latest.map((post, idx) => (
              <BlogPostCard key={post.slug} post={post} revealDelay={idx * 0.09} />
            ))}
          </div>
          <Link to="/blog" className="kh-button kh-button--outline kh-blog-teaser__cta">
            Read all posts →
          </Link>
        </>
      )}
    </section>
  );
};
