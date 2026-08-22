import { BlogPost, BlogSeries } from "./data/types";
import { series } from "./data/series";

/** Posts sorted newest first. */
export const sortByDateDesc = (items: BlogPost[]): BlogPost[] =>
  [...items].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

/** "22 August 2026" — Australian long date format. */
export const formatPostDate = (isoDate: string): string => {
  const date = new Date(`${isoDate}T00:00:00`);
  if (Number.isNaN(date.getTime())) return isoDate;
  return date.toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

/** Rough reading time from word count — good enough for short notes. */
export const estimateReadingTime = (markdown: string): number => {
  const words = markdown.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
};

export const getSeriesById = (seriesId: string): BlogSeries | undefined =>
  series.find((s) => s.id === seriesId);

/** All posts in a series, ordered by seriesOrder. */
export const getSeriesPosts = (
  allPosts: BlogPost[],
  seriesId: string,
): BlogPost[] =>
  allPosts
    .filter((p) => p.seriesId === seriesId)
    .sort((a, b) => (a.seriesOrder ?? 0) - (b.seriesOrder ?? 0));

/** Previous/next post within the same series, if any. */
export const getSeriesNeighbours = (
  allPosts: BlogPost[],
  post: BlogPost,
): { prev?: BlogPost; next?: BlogPost } => {
  if (!post.seriesId) return {};
  const ordered = getSeriesPosts(allPosts, post.seriesId);
  const index = ordered.findIndex((p) => p.slug === post.slug);
  if (index === -1) return {};
  return { prev: ordered[index - 1], next: ordered[index + 1] };
};

export const getAllTags = (allPosts: BlogPost[]): string[] => {
  const tagSet = new Set<string>();
  allPosts.forEach((p) => p.tags.forEach((t) => tagSet.add(t)));
  return Array.from(tagSet).sort();
};

/** Series that currently have at least one published post. */
export const getSeriesWithPosts = (
  allPosts: BlogPost[],
): { series: BlogSeries; posts: BlogPost[] }[] =>
  series
    .map((s) => ({ series: s, posts: getSeriesPosts(allPosts, s.id) }))
    .filter((entry) => entry.posts.length > 0);
