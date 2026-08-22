import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { posts } from "./data/posts";
import { getAllTags, getSeriesWithPosts, sortByDateDesc } from "./blogUtils";
import { BlogPostCard } from "./BlogPostCard";
import "./Blog.css";

const Blog: React.FC = () => {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const allTags = useMemo(() => getAllTags(posts), []);
  const seriesGroups = useMemo(() => getSeriesWithPosts(posts), []);

  const filtered = useMemo(() => {
    const scoped = activeTag
      ? posts.filter((p) => p.tags.includes(activeTag))
      : posts;
    return sortByDateDesc(scoped);
  }, [activeTag]);

  return (
    <main className="kh-page kh-blog-page">
      <div className="kh-page__noise" />
      <div className="kh-container kh-blog-page__container">
        <header className="kh-blog-page__header">
          <p className="kh-section-heading__eyebrow">BUILD LOG</p>
          <h1 className="kh-blog-page__title">Blog</h1>
          <p className="kh-blog-page__intro">
            A running log of what I'm learning across agentic AI, data
            engineering, and software delivery. These are mostly informal
            notes to myself as I go — not polished write-ups or finished case
            studies.
          </p>
        </header>

        {allTags.length > 0 && (
          <div className="kh-blog-page__filters" role="group" aria-label="Filter by tag">
            <button
              type="button"
              className={`kh-blog-filter${activeTag === null ? " kh-blog-filter--active" : ""}`}
              onClick={() => setActiveTag(null)}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                type="button"
                className={`kh-blog-filter${activeTag === tag ? " kh-blog-filter--active" : ""}`}
                onClick={() => setActiveTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        )}

        {posts.length === 0 ? (
          <div className="kh-blog-page__empty" data-reveal="">
            <p>First article coming soon.</p>
            <p className="kh-blog-page__empty-sub">
              Check back shortly — new posts are added directly to this
              branch as I write them.
            </p>
          </div>
        ) : (
          <>
            {!activeTag && seriesGroups.length > 0 && (
              <section className="kh-blog-series-list" aria-label="Series">
                {seriesGroups.map(({ series, posts: seriesPosts }) => (
                  <article key={series.id} className="kh-blog-series-card" data-reveal="">
                    <p className="kh-blog-series-card__label">SERIES</p>
                    <h2 className="kh-blog-series-card__name">{series.name}</h2>
                    <p className="kh-blog-series-card__description">
                      {series.description}
                    </p>
                    <ol className="kh-blog-series-card__posts">
                      {seriesPosts.map((post, i) => (
                        <li key={post.slug}>
                          <Link to={`/blog/${post.slug}`}>
                            <span className="kh-blog-series-card__index">
                              {i + 1}.
                            </span>{" "}
                            {post.title}
                          </Link>
                        </li>
                      ))}
                    </ol>
                  </article>
                ))}
              </section>
            )}

            <section className="kh-blog-page__grid" aria-label="All posts">
              {filtered.map((post, idx) => (
                <BlogPostCard key={post.slug} post={post} revealDelay={idx * 0.06} />
              ))}
            </section>
          </>
        )}
      </div>
    </main>
  );
};

export default Blog;
