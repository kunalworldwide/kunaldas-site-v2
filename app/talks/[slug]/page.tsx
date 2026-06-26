import Link from "next/link";
import { notFound } from "next/navigation";

import { getTalkBySlug, getTalks } from "@/lib/content";
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
  return getTalks().map((talk) => ({ slug: talk.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const talk = getTalkBySlug(slug);
  if (!talk) return { title: "Talk not found" };
  return {
    title: `${talk.title} — Kunal Das`,
    description:
      talk.description ??
      `Talk by Kunal Das at ${talk.event ?? "an event"}.`,
  };
}

export default async function TalkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const talk = getTalkBySlug(slug);
  if (!talk) notFound();

  const content = await markdownToHtml(talk.body);

  return (
    <article className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <Link
        href="/talks/"
        className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-widest text-muted-foreground no-underline hover:text-accent"
      >
        <span aria-hidden="true">&larr;</span>
        <span>All talks</span>
      </Link>

      <header className="mt-8 mb-12 border-b border-border pb-10">
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">
          Talk
        </p>
        <h1 className="font-heading text-3xl font-bold leading-tight tracking-tight md:text-4xl">
          {talk.title}
        </h1>

        <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-3 text-sm md:grid-cols-2">
          {talk.event && (
            <div>
              <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Event
              </dt>
              <dd className="mt-1">{talk.event}</dd>
            </div>
          )}
          <div>
            <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Date
            </dt>
            <dd className="mt-1">
              <time dateTime={talk.date}>{formatDate(talk.date)}</time>
            </dd>
          </div>
          {talk.location && (
            <div>
              <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Location
              </dt>
              <dd className="mt-1">{talk.location}</dd>
            </div>
          )}
          {talk.venue && (
            <div>
              <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Venue
              </dt>
              <dd className="mt-1">{talk.venue}</dd>
            </div>
          )}
        </dl>

        {talk.links && talk.links.length > 0 && (
          <ul className="mt-6 flex flex-wrap gap-3">
            {talk.links.map((link) => (
              <li key={link.url}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-1.5 text-sm font-medium text-foreground no-underline transition-colors duration-200 hover:border-accent hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
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
