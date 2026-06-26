import {
  Calendar,
  ExternalLink,
  Play,
  Radio,
  Sparkles,
  Tv,
  Users,
} from "lucide-react";
import type { Metadata } from "next";

import { AnimatedSection } from "@/components/animated-section";
import { mediaVideos } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Media — Kunal Das",
  description:
    "Podcasts, livestreams, and collaborations featuring Kunal Das on cloud-native, DevOps, Kubernetes, and AI.",
};

const categoryIcons = {
  Podcast: Radio,
  Livestream: Tv,
  Collaboration: Users,
  "Guest Appearance": Sparkles,
} as const;

function formatDate(iso: string): string {
  if (!iso) return "";
  // Use a fixed UTC parse to avoid hydration drift between server and client.
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default function MediaPage() {
  const featured =
    mediaVideos.find((v) => v.featured) ?? mediaVideos[0];
  const rest = mediaVideos.filter((v) => v.youtubeId !== featured.youtubeId);

  const podcastCount = mediaVideos.filter((v) => v.category === "Podcast").length;
  const livestreamCount = mediaVideos.filter(
    (v) => v.category === "Livestream",
  ).length;
  const channels = new Set(mediaVideos.map((v) => v.channel)).size;

  return (
    <div className="mx-auto max-w-content space-y-20 px-6 py-16 md:py-24">
      {/* Page header */}
      <header className="space-y-4">
        <AnimatedSection>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent-warm">
            Media
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.05}>
          <h1 className="font-heading text-4xl font-semibold text-foreground md:text-5xl lg:text-6xl">
            Appearances &amp; conversations.
          </h1>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Podcasts, livestreams, and collaborations I&apos;ve joined to talk
            about DevOps, Kubernetes, cloud cost, and the future of
            infrastructure.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.15}>
          <div className="flex flex-wrap gap-2 pt-2">
            <StatPill label="Videos" value={mediaVideos.length} />
            <StatPill label="Channels" value={channels} />
            <StatPill label="Podcasts" value={podcastCount} />
            <StatPill label="Livestreams" value={livestreamCount} />
          </div>
        </AnimatedSection>
      </header>

      {/* Featured video (embedded) */}
      {featured && (
        <section className="space-y-6">
          <AnimatedSection className="flex items-center gap-2">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-accent-warm/10 text-accent-warm">
              <Sparkles size={14} aria-hidden />
            </span>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent-warm">
              Featured
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.05}>
            <h2 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">
              {featured.title}
            </h2>
            <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
              <CategoryBadge category={featured.category} />
              <span className="font-medium text-foreground/85">
                {featured.channel}
              </span>
              <span className="inline-flex items-center gap-1">
                <Calendar size={14} aria-hidden />
                {formatDate(featured.date)}
              </span>
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="relative overflow-hidden rounded-2xl border border-border bg-black shadow-[0_20px_60px_-30px_rgba(0,0,0,0.4)]">
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${featured.youtubeId}`}
                  title={featured.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <p className="max-w-3xl leading-relaxed text-foreground/85">
              {featured.description}
            </p>
          </AnimatedSection>
        </section>
      )}

      {/* Other videos */}
      {rest.length > 0 && (
        <section className="space-y-8">
          <AnimatedSection className="space-y-3">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent-warm">
              More
            </p>
            <h2 className="font-heading text-3xl font-semibold text-foreground md:text-4xl">
              Other appearances
            </h2>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-2">
            {rest.map((video, idx) => (
              <AnimatedSection
                key={video.youtubeId}
                delay={idx * 0.05}
                className="group"
              >
                <a
                  href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface no-underline transition-all duration-300 hover:-translate-y-1 hover:border-foreground/15 hover:shadow-[0_18px_50px_-25px_rgba(26,26,26,0.35)]"
                >
                  <div className="relative aspect-video overflow-hidden bg-black">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`}
                      alt={`Thumbnail for ${video.title}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-foreground/0 transition-colors duration-300 group-hover:bg-foreground/20">
                      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-background/90 text-foreground opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100">
                        <Play size={22} aria-hidden className="ml-1" />
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col gap-3 p-5">
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <CategoryBadge category={video.category} />
                      <span className="font-mono text-muted-foreground">
                        {video.channel}
                      </span>
                    </div>
                    <h3 className="font-heading text-lg font-semibold leading-snug text-foreground">
                      {video.title}
                    </h3>
                    <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                      {video.description}
                    </p>
                    <div className="flex items-center justify-between pt-2 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1">
                        <Calendar size={12} aria-hidden />
                        {formatDate(video.date)}
                      </span>
                      <span className="inline-flex items-center gap-1 font-medium text-accent">
                        Watch
                        <ExternalLink size={12} aria-hidden />
                      </span>
                    </div>
                  </div>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <AnimatedSection className="rounded-3xl border border-border bg-surface p-8 text-center md:p-12">
        <h2 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">
          Want to collaborate?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          I&apos;m always open to podcast invitations, livestream
          collaborations, and guest appearances on DevOps, Kubernetes, and
          cloud-native topics.
        </p>
        <div className="mt-6">
          <a
            href="/contact/"
            className="inline-flex items-center gap-2 rounded-lg bg-foreground px-5 py-2.5 text-sm font-medium text-background no-underline transition-opacity hover:opacity-90"
          >
            Get in Touch
            <ExternalLink size={14} aria-hidden />
          </a>
        </div>
      </AnimatedSection>
    </div>
  );
}

interface CategoryBadgeProps {
  category: keyof typeof categoryIcons;
}

function CategoryBadge({ category }: CategoryBadgeProps) {
  const Icon = categoryIcons[category] ?? Radio;
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-border bg-secondary px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-wide text-foreground/80">
      <Icon size={11} aria-hidden />
      {category}
    </span>
  );
}

interface StatPillProps {
  label: string;
  value: number;
}

function StatPill({ label, value }: StatPillProps) {
  return (
    <span className="inline-flex items-baseline gap-1.5 rounded-full border border-border bg-surface px-3 py-1.5 font-mono text-xs text-muted-foreground">
      <span className="text-base font-semibold text-foreground">{value}</span>
      <span className="uppercase tracking-wide">{label}</span>
    </span>
  );
}
