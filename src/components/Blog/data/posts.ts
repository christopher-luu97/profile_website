import { BlogPost } from "./types";

/**
 * Blog posts, newest-first isn't required — Blog.tsx sorts by date.
 *
 * This is a running log of what I'm learning, mostly written for myself.
 * Posts don't need to be polished or exhaustive — a few paragraphs and a
 * code snippet is a complete post.
 *
 * How to add a post:
 * 1. Copy the shape below.
 * 2. `slug` must be unique and URL-safe (used as /blog/<slug>).
 * 3. `content` is Markdown — headings, lists, links, and ```code blocks```
 *    all work, rendered via `marked` on the post page.
 * 4. To group a post into a series (a "suite of articles"), add the series
 *    to ./series.ts first, then set `seriesId` + `seriesOrder` (1, 2, 3...).
 *
 * Example:
 *
 * {
 *   slug: "why-im-starting-a-build-log",
 *   title: "Why I'm starting a build log",
 *   date: "2026-08-22",
 *   excerpt: "A short note on why this blog exists and what to expect from it.",
 *   tags: ["meta"],
 *   content: `
 * Short paragraphs about the actual thing I'm doing.
 *
 * \`\`\`ts
 * const example = "code blocks work too";
 * \`\`\`
 * `,
 * },
 */
export const posts: BlogPost[] = [];
