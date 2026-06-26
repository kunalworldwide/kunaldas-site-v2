/**
 * Domain types for the Kunal Das portfolio site.
 *
 * The base shape mirrors the implementation plan (Task 3.1, Step 1).
 * Additional optional fields capture the full frontmatter used by the
 * markdown content sourced from the legacy astro-site. The plan-level
 * aliases (`tags`, `tech`, `repo`, `links`) are populated by the loaders
 * in `content.ts` so that downstream code can rely on a single shape.
 */

export interface ContentLink {
  label: string;
  url: string;
}

export interface Talk {
  slug: string;
  title: string;
  description?: string;
  date: string;
  location?: string;
  event?: string;
  venue?: string;
  /** Plan-level alias populated from `eventLink`, `slides`, and `video`. */
  links?: ContentLink[];
  /** Plan-level alias populated from `categories`. */
  tags?: string[];
  /** Original frontmatter field preserved verbatim. */
  categories?: string[];
  /** Raw frontmatter fields present on talk markdown. */
  eventLink?: string;
  slides?: string;
  video?: string;
  body: string;
}

export interface Post {
  slug: string;
  title: string;
  description?: string;
  date: string;
  /** Plan-level alias populated from `categories`. */
  tags?: string[];
  /** Original frontmatter field preserved verbatim. */
  categories?: string[];
  image?: string;
  body: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  date: string;
  /** Plan-level alias populated from `techStack`. */
  tech?: string[];
  /** Original frontmatter field preserved verbatim. */
  techStack?: string[];
  demo?: string;
  /** Plan-level alias populated from `github`. */
  repo?: string;
  /** Original frontmatter field preserved verbatim. */
  github?: string;
  featured?: boolean;
  body: string;
}
