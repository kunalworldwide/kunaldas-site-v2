import fs from "fs";
import path from "path";
import matter from "gray-matter";

import type { ContentLink, Post, Project, Talk } from "./types";

const contentDir = path.join(process.cwd(), "content");

function asString(value: unknown): string | undefined {
  return typeof value === "string" && value.length > 0 ? value : undefined;
}

function asStringArray(value: unknown): string[] | undefined {
  if (Array.isArray(value)) {
    const items = value.filter((v): v is string => typeof v === "string");
    return items.length > 0 ? items : undefined;
  }
  return undefined;
}

function asBoolean(value: unknown): boolean | undefined {
  if (typeof value === "boolean") return value;
  return undefined;
}

function readMarkdownFile<T>(filePath: string): { data: Record<string, unknown>; content: string } {
  const raw = fs.readFileSync(filePath, "utf-8");
  const parsed = matter(raw);
  return {
    data: parsed.data as Record<string, unknown>,
    content: parsed.content,
  };
}

function toIsoDate(value: unknown): string {
  if (value instanceof Date) return value.toISOString();
  if (typeof value === "string") return value;
  return "";
}

function sortByDateDesc<T extends { date: string }>(items: T[]): T[] {
  return [...items].sort((a, b) => {
    const at = Date.parse(a.date);
    const bt = Date.parse(b.date);
    // Fall back to string compare for unparseable dates so order is still stable.
    if (Number.isNaN(at) && Number.isNaN(bt)) return a.date.localeCompare(b.date);
    if (Number.isNaN(at)) return 1;
    if (Number.isNaN(bt)) return -1;
    return bt - at;
  });
}

function buildTalkLinks(data: Record<string, unknown>): ContentLink[] | undefined {
  const links: ContentLink[] = [];
  const eventLink = asString(data.eventLink);
  if (eventLink) links.push({ label: "Event", url: eventLink });
  const slides = asString(data.slides);
  if (slides) links.push({ label: "Slides", url: slides });
  const video = asString(data.video);
  if (video) links.push({ label: "Video", url: video });
  if (Array.isArray(data.links)) {
    for (const entry of data.links) {
      if (
        entry &&
        typeof entry === "object" &&
        "label" in entry &&
        "url" in entry &&
        typeof (entry as { label: unknown }).label === "string" &&
        typeof (entry as { url: unknown }).url === "string"
      ) {
        links.push({
          label: (entry as { label: string }).label,
          url: (entry as { url: string }).url,
        });
      }
    }
  }
  return links.length > 0 ? links : undefined;
}

function buildTalk(file: string): Talk {
  const { data, content } = readMarkdownFile<Talk>(path.join(contentDir, "talks", file));
  const categories = asStringArray(data.categories);
  return {
    slug: file.replace(/\.md$/, ""),
    title: asString(data.title) ?? "",
    description: asString(data.description),
    date: toIsoDate(data.date),
    location: asString(data.location),
    event: asString(data.event),
    venue: asString(data.venue),
    eventLink: asString(data.eventLink),
    slides: asString(data.slides),
    video: asString(data.video),
    categories,
    tags: categories,
    links: buildTalkLinks(data),
    body: content,
  };
}

function buildPost(file: string): Post {
  const { data, content } = readMarkdownFile<Post>(path.join(contentDir, "posts", file));
  const categories = asStringArray(data.categories);
  return {
    slug: file.replace(/\.md$/, ""),
    title: asString(data.title) ?? "",
    description: asString(data.description),
    date: toIsoDate(data.date),
    categories,
    tags: categories,
    image: asString(data.image),
    body: content,
  };
}

function buildProject(file: string): Project {
  const { data, content } = readMarkdownFile<Project>(path.join(contentDir, "projects", file));
  const techStack = asStringArray(data.techStack);
  const tech = asStringArray(data.tech) ?? techStack;
  const github = asString(data.github);
  const repo = asString(data.repo) ?? github;
  return {
    slug: file.replace(/\.md$/, ""),
    title: asString(data.title) ?? "",
    description: asString(data.description) ?? "",
    date: toIsoDate(data.date),
    techStack,
    tech,
    demo: asString(data.demo),
    github,
    repo,
    featured: asBoolean(data.featured),
    body: content,
  };
}

function listMarkdownFiles(subdir: string): string[] {
  const dir = path.join(contentDir, subdir);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .sort();
}

export function getTalks(): Talk[] {
  return sortByDateDesc(listMarkdownFiles("talks").map(buildTalk));
}

export function getPosts(): Post[] {
  return sortByDateDesc(listMarkdownFiles("posts").map(buildPost));
}

export function getProjects(): Project[] {
  return sortByDateDesc(listMarkdownFiles("projects").map(buildProject));
}

export function getTalkBySlug(slug: string): Talk | undefined {
  return getTalks().find((talk) => talk.slug === slug);
}

export function getPostBySlug(slug: string): Post | undefined {
  return getPosts().find((post) => post.slug === slug);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getProjects().find((project) => project.slug === slug);
}
