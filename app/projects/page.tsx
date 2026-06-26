import Link from "next/link";

import { AnimatedSection } from "@/components/animated-section";
import { getProjects } from "@/lib/content";

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

export const metadata = {
  title: "Projects — Kunal Das",
  description:
    "Open-source projects and tools by Kunal Das — focused on cloud cost optimization, Kubernetes, and developer experience.",
};

export default function ProjectsPage() {
  const projects = getProjects();
  const featured = projects.find((project) => project.featured);
  const rest = projects.filter((project) => !project.featured);

  return (
    <div className="mx-auto max-w-content px-6 py-16 md:py-24">
      <AnimatedSection>
        <header className="mb-12 md:mb-16">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">
            Building
          </p>
          <h1 className="font-heading text-4xl font-bold tracking-tight md:text-5xl">
            Projects
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Open-source tools and side projects focused on cloud cost
            optimization, Kubernetes, and developer experience.
          </p>
        </header>
      </AnimatedSection>

      {featured && (
        <AnimatedSection>
          <Link
            href={`/projects/${featured.slug}/`}
            className="group mb-12 block rounded-xl border-2 border-accent bg-card p-8 no-underline transition-shadow duration-200 hover:shadow-md md:p-10"
          >
            <span className="inline-flex items-center rounded-full bg-accent px-2.5 py-0.5 font-mono text-xs uppercase tracking-widest text-accent-foreground">
              Featured
            </span>

            <h2 className="mt-4 font-heading text-2xl font-bold leading-tight text-foreground group-hover:text-accent md:text-3xl">
              {featured.title}
            </h2>

            <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {featured.description}
            </p>

            {featured.tech && featured.tech.length > 0 && (
              <ul className="mt-5 flex flex-wrap gap-2">
                {featured.tech.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-secondary px-2.5 py-0.5 font-mono text-xs text-secondary-foreground"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            )}

            <span className="mt-6 inline-flex items-center gap-1 font-mono text-xs uppercase tracking-widest text-accent">
              View project
              <span aria-hidden="true">&rarr;</span>
            </span>
          </Link>
        </AnimatedSection>
      )}

      {rest.length > 0 && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {rest.map((project, index) => (
            <AnimatedSection
              key={project.slug}
              delay={Math.min(index, 6) * 0.05}
            >
              <Link
                href={`/projects/${project.slug}/`}
                className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 no-underline transition-all duration-200 hover:border-accent hover:shadow-sm"
              >
                <div className="mb-3 font-mono text-xs text-muted-foreground">
                  <time dateTime={project.date}>{formatDate(project.date)}</time>
                </div>

                <h2 className="font-heading text-xl font-semibold leading-snug text-foreground group-hover:text-accent md:text-2xl">
                  {project.title}
                </h2>

                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                {project.tech && project.tech.length > 0 && (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.tech.slice(0, 4).map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full bg-secondary px-2.5 py-0.5 font-mono text-xs text-secondary-foreground"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}
              </Link>
            </AnimatedSection>
          ))}
        </div>
      )}

      {projects.length === 0 && (
        <p className="text-center text-muted-foreground">
          No projects yet. Check back soon.
        </p>
      )}
    </div>
  );
}
