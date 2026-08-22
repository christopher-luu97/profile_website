import React, { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { marked } from "marked";
import { posts } from "./data/posts";
import {
  estimateReadingTime,
  formatPostDate,
  getSeriesById,
  getSeriesNeighbours,
} from "./blogUtils";
import "./Blog.css";

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);

  // Content is authored by me only (see data/types.ts), so it's safe to
  // render straight from Markdown without extra sanitisation.
  const html = useMemo(
    () => (post ? (marked.parse(post.content) as string) : ""),
    [post],
  );

  if (!post) {
    return (
      <main className="kh-page kh-blog-page">
        <div className="kh-container kh-blog-page__container">
          <div className="kh-blog-page__empty" data-reveal="">
            <p>Couldn't find that post.</p>
            <Link to="/blog" className="kh-button kh-button--outline">
              ← Back to the blog
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const series = post.seriesId ? getSeriesById(post.seriesId) : undefined;
  const { prev, next } = getSeriesNeighbours(posts, post);

  return (
    <main className="kh-page kh-blog-page">
      <div className="kh-container kh-blog-page__container kh-blog-post">
        <Link to="/blog" className="kh-blog-post__back">
          ← Back to the blog
        </Link>

        {series && (
          <p className="kh-blog-post__series">
            Part of <strong>{series.name}</strong>
            {post.seriesOrder ? ` · ${post.seriesOrder}` : ""}
          </p>
        )}

        <h1 className="kh-blog-post__title">{post.title}</h1>

        <div className="kh-blog-post__meta">
          <span>{formatPostDate(post.date)}</span>
          <span aria-hidden="true">·</span>
          <span>{estimateReadingTime(post.content)} min read</span>
        </div>

        {post.tags.length > 0 && (
          <div className="kh-blog-post__tags">
            {post.tags.map((tag) => (
              <span key={tag} className="kh-tag">
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="kh-prose" dangerouslySetInnerHTML={{ __html: html }} />

        {(prev || next) && (
          <nav className="kh-blog-post__nav" aria-label="Series navigation">
            {prev ? (
              <Link to={`/blog/${prev.slug}`} className="kh-blog-post__nav-link">
                ← {prev.title}
              </Link>
            ) : (
              <span />
            )}
            {next && (
              <Link
                to={`/blog/${next.slug}`}
                className="kh-blog-post__nav-link kh-blog-post__nav-link--next"
              >
                {next.title} →
              </Link>
            )}
          </nav>
        )}
      </div>
    </main>
  );
};

export default BlogPost;
