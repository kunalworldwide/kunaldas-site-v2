import Link from "next/link";
import { notFound } from "next/navigation";

import { getPostBySlug, getPosts } from "@/lib/content";
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
  return getPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post not found" };
  return {
    title: `${post.title} — Kunal Das`,
    description: post.description ?? `Article by Kunal Das.`,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const content = await markdownToHtml(post.body);

  return (
    <article className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <Link
        href="/posts/"
        className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-widest text-muted-foreground no-underline hover:text-accent"
      >
        <span aria-hidden="true">&larr;</span>
        <span>All posts</span>
      </Link>

      <header className="mt-8 mb-12 border-b border-border pb-10">
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">
          Post
        </p>
        <h1 className="font-heading text-3xl font-bold leading-tight tracking-tight md:text-4xl">
          {post.title}
        </h1>

        <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs text-muted-foreground">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          {post.tags && post.tags.length > 0 && (
            <>
              <span aria-hidden="true">·</span>
              <span>{post.tags.join(", ")}</span>
            </>
          )}
        </div>

        {post.description && (
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {post.description}
          </p>
        )}
      </header>

      <div
        className="prose-content"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  );
}
