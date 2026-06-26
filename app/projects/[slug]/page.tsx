import Link from "next/link";
import { notFound } from "next/navigation";

import { getProjectBySlug, getProjects } from "@/lib/content";
import { markdownToHtml } from "@/lib/markdown";

function formatDate(value: string): string {
  if (!value) return "";
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return value;
  return parsed.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export async function generateStaticParams() {
  return getProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: `${project.title} — Kunal Das`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const content = await markdownToHtml(project.body);

  return (
    <article className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <Link
        href="/projects/"
        className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-widest text-muted-foreground no-underline hover:text-accent"
      >
        <span aria-hidden="true">&larr;</span>
        <span>All projects</span>
      </Link>

      <header className="mt-8 mb-12 border-b border-border pb-10">
        <p className="mb-3 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-accent">
          <span>Project</span>
          {project.featured && (
            <span className="rounded-full bg-accent px-2 py-0.5 text-[10px] text-accent-foreground">
              Featured
            </span>
          )}
        </p>

        <h1 className="font-heading text-3xl font-bold leading-tight tracking-tight md:text-4xl">
          {project.title}
        </h1>

        <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-3 text-sm md:grid-cols-2">
          <div>
            <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Date
            </dt>
            <dd className="mt-1">
              <time dateTime={project.date}>{formatDate(project.date)}</time>
            </dd>
          </div>
          {project.tech && project.tech.length > 0 && (
            <div>
              <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Stack
              </dt>
              <dd className="mt-1 flex flex-wrap gap-1.5">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-secondary px-2 py-0.5 font-mono text-xs text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </dd>
            </div>
          )}
        </dl>

        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        {(project.repo || project.demo) && (
          <ul className="mt-6 flex flex-wrap gap-3">
            {project.demo && (
              <li>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-1.5 text-sm font-medium text-foreground no-underline transition-colors duration-200 hover:border-accent hover:text-accent"
                >
                  Live demo
                </a>
              </li>
            )}
            {project.repo && (
              <li>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-1.5 text-sm font-medium text-foreground no-underline transition-colors duration-200 hover:border-accent hover:text-accent"
                >
                  Source
                </a>
              </li>
            )}
          </ul>
        )}
      </header>

      <div
        className="prose-content"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  );
}
