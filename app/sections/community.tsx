import Link from "next/link";
import { ArrowRight, Users } from "lucide-react";

import { AnimatedSection } from "@/components/animated-section";
import { communities } from "@/lib/site-data";

// Show the first three curated communities from site-data.
const featuredCommunities = communities.slice(0, 3);

export function Community() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-content">
        <AnimatedSection>
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="font-mono text-sm uppercase tracking-wider text-muted-foreground mb-3">
                Community
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                Building spaces where cloud engineers learn in public.
              </h2>
            </div>
            <Link
              href="/communities/"
              className="hidden md:inline-flex items-center gap-1.5 text-sm font-medium text-accent no-underline transition-colors duration-200 hover:opacity-80"
            >
              All communities
              <ArrowRight size={16} />
            </Link>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="grid gap-6 md:grid-cols-3">
            {featuredCommunities.map((community) => (
              <article
                key={community.name}
                className="group flex flex-col rounded-xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-3 flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent">
                  <Users size={14} />
                  {community.role}
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2 leading-snug">
                  {community.name}
                </h3>
                {community.tagline && (
                  <p className="text-base text-foreground italic mb-3 leading-relaxed">
                    &ldquo;{community.tagline}&rdquo;
                  </p>
                )}
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-4">
                  {community.description}
                </p>
                <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  {community.city && <span>{community.city}</span>}
                  {community.members && <span>{community.members} members</span>}
                </div>
              </article>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="mt-10 md:hidden">
            <Link
              href="/communities/"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent no-underline"
            >
              All communities
              <ArrowRight size={16} />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
