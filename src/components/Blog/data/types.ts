// Data shapes for the blog. Kept deliberately simple: this is a build log of
// what I'm learning, not a CMS. New posts are added by editing posts.ts.

export interface BlogSeries {
  /** Stable id referenced by BlogPost.seriesId. Kebab-case. */
  id: string;
  /** Display name, e.g. "Learning RAG". */
  name: string;
  /** One or two sentences describing what the series covers. */
  description: string;
}

export interface BlogPost {
  /** URL-safe unique identifier, used as the /blog/:slug route param. */
  slug: string;
  title: string;
  /** ISO date string, e.g. "2026-08-22". */
  date: string;
  /** One or two sentence summary shown in listings. */
  excerpt: string;
  /** Free-form topic tags, lowercase kebab-case, e.g. "agentic-ai". */
  tags: string[];
  /** If part of a series, the matching BlogSeries.id. */
  seriesId?: string;
  /** 1-based position within the series, used for ordering and prev/next. */
  seriesOrder?: number;
  /**
   * Post body written in Markdown. Rendered with `marked` on the post page.
   * This content is authored by me only — it is not user-submitted, so it is
   * rendered without additional sanitisation.
   */
  content: string;
}
