import Link from "next/link";
import { ArrowRight, Calendar, MapPin, Mic } from "lucide-react";

import { AnimatedSection } from "@/components/animated-section";
import { getTalks } from "@/lib/content";

function formatTalkDate(date: string): string {
  if (!date) return "";
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return date;
  return parsed.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

export function SelectedTalks() {
  const talks = getTalks().slice(0, 6);

  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-content">
        <AnimatedSection>
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="font-mono text-sm uppercase tracking-wider text-muted-foreground mb-3">
                Selected Talks
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                Speaking on cloud-native, AI &amp; FinOps.
              </h2>
            </div>
            <Link
              href="/talks/"
              className="hidden md:inline-flex items-center gap-1.5 text-sm font-medium text-accent no-underline transition-colors duration-200 hover:opacity-80"
            >
              All talks
              <ArrowRight size={16} />
            </Link>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {talks.map((talk) => (
              <article
                key={talk.slug}
                className="group flex flex-col rounded-xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-3 flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent">
                  <Mic size={14} />
                  {talk.event ?? "Talk"}
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3 leading-snug">
                  {talk.title}
                </h3>
                <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                  {talk.date && (
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar size={14} />
                      {formatTalkDate(talk.date)}
                    </span>
                  )}
                  {talk.location && (
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin size={14} />
                      {talk.location}
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="mt-10 md:hidden">
            <Link
              href="/talks/"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent no-underline"
            >
              All talks
              <ArrowRight size={16} />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
