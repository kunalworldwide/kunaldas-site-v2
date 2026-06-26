import Link from "next/link";

import { AnimatedSection } from "@/components/animated-section";
import { getTalks } from "@/lib/content";

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
  title: "Talks — Kunal Das",
  description:
    "Conference talks, meetup presentations, and workshops on Kubernetes, FinOps, AI infrastructure, and cloud-native platforms.",
};

export default function TalksPage() {
  const talks = getTalks();

  return (
    <div className="mx-auto max-w-content px-6 py-16 md:py-24">
      <AnimatedSection>
        <header className="mb-12 md:mb-16">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">
            Speaking
          </p>
          <h1 className="font-heading text-4xl font-bold tracking-tight md:text-5xl">
            Talks
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Conference talks, meetup presentations, and workshops on
            Kubernetes, FinOps, AI infrastructure, and cloud-native
            platforms.
          </p>
        </header>
      </AnimatedSection>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {talks.map((talk, index) => (
          <AnimatedSection key={talk.slug} delay={Math.min(index, 6) * 0.05}>
            <Link
              href={`/talks/${talk.slug}/`}
              className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 no-underline transition-all duration-200 hover:border-accent hover:shadow-sm"
            >
              <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-muted-foreground">
                <time dateTime={talk.date}>{formatDate(talk.date)}</time>
                {talk.location && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span>{talk.location}</span>
                  </>
                )}
              </div>

              <h2 className="font-heading text-xl font-semibold leading-snug text-foreground group-hover:text-accent md:text-2xl">
                {talk.title}
              </h2>

              {talk.event && (
                <p className="mt-2 text-sm font-medium text-accent">
                  {talk.event}
                </p>
              )}

              {talk.description && (
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                  {talk.description}
                </p>
              )}

              {talk.tags && talk.tags.length > 0 && (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {talk.tags.slice(0, 4).map((tag) => (
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

      {talks.length === 0 && (
        <p className="text-center text-muted-foreground">
          No talks yet. Check back soon.
        </p>
      )}
    </div>
  );
}
