import Link from "next/link";
import { ArrowRight, Calendar, FileText } from "lucide-react";

import { AnimatedSection } from "@/components/animated-section";
import { getPosts } from "@/lib/content";

function formatPostDate(date: string): string {
  if (!date) return "";
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return date;
  return parsed.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function LatestPosts() {
  const posts = getPosts().slice(0, 4);

  return (
    <section className="px-6 py-16 md:py-24 bg-subtle border-y border-border">
      <div className="mx-auto max-w-content">
        <AnimatedSection>
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="font-mono text-sm uppercase tracking-wider text-muted-foreground mb-3">
                Latest Posts
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                Notes from the cloud-native trenches.
              </h2>
            </div>
            <Link
              href="/posts/"
              className="hidden md:inline-flex items-center gap-1.5 text-sm font-medium text-accent no-underline transition-colors duration-200 hover:opacity-80"
            >
              All posts
              <ArrowRight size={16} />
            </Link>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="grid gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col rounded-xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-3 flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent">
                  <FileText size={14} />
                  Post
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2 leading-snug">
                  {post.title}
                </h3>
                {post.description && (
                  <p className="text-base text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                    {post.description}
                  </p>
                )}
                <div className="mt-auto flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Calendar size={14} />
                  {formatPostDate(post.date)}
                </div>
              </article>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="mt-10 md:hidden">
            <Link
              href="/posts/"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent no-underline"
            >
              All posts
              <ArrowRight size={16} />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
