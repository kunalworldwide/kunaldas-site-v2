import Link from "next/link";

import { AnimatedSection } from "@/components/animated-section";
import { getPosts } from "@/lib/content";

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
  title: "Posts — Kunal Das",
  description:
    "Articles on Azure, Kubernetes, DevOps, FinOps, and cloud-native engineering from Kunal Das.",
};

export default function PostsPage() {
  const posts = getPosts();

  return (
    <div className="mx-auto max-w-content px-6 py-16 md:py-24">
      <AnimatedSection>
        <header className="mb-12 md:mb-16">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">
            Writing
          </p>
          <h1 className="font-heading text-4xl font-bold tracking-tight md:text-5xl">
            Posts
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Long-form articles on Azure, Kubernetes, DevOps, FinOps, and the
            cloud-native ecosystem.
          </p>
        </header>
      </AnimatedSection>

      <div className="flex flex-col gap-8">
        {posts.map((post, index) => (
          <AnimatedSection key={post.slug} delay={Math.min(index, 6) * 0.04}>
            <Link
              href={`/posts/${post.slug}/`}
              className="group block border-b border-border pb-8 no-underline transition-colors duration-200 last:border-b-0"
            >
              <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-muted-foreground">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                {post.tags && post.tags.length > 0 && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span>{post.tags.slice(0, 3).join(", ")}</span>
                  </>
                )}
              </div>

              <h2 className="font-heading text-2xl font-semibold leading-snug text-foreground group-hover:text-accent md:text-3xl">
                {post.title}
              </h2>

              {post.description && (
                <p className="mt-3 line-clamp-3 text-base leading-relaxed text-muted-foreground">
                  {post.description}
                </p>
              )}

              <span className="mt-3 inline-flex items-center gap-1 font-mono text-xs uppercase tracking-widest text-accent">
                Read article
                <span aria-hidden="true">&rarr;</span>
              </span>
            </Link>
          </AnimatedSection>
        ))}
      </div>

      {posts.length === 0 && (
        <p className="text-center text-muted-foreground">
          No posts yet. Check back soon.
        </p>
      )}
    </div>
  );
}
