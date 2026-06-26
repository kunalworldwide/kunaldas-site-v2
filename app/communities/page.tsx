import {
  ArrowRight,
  Building2,
  Calendar,
  ExternalLink,
  MapPin,
  Sparkles,
  Users,
} from "lucide-react";
import type { Metadata } from "next";

import { AnimatedSection } from "@/components/animated-section";
import { communities } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Communities — Kunal Das",
  description:
    "Conferences, meetups, and user groups I help organize across India — building the cloud-native community one event at a time.",
};

// Local photo gallery — copied from the legacy /public/community folder.
const communityPhotos = [
  "20250807_153913 Medium.jpeg",
  "20250823_160659 Medium.jpeg",
  "20250823_171218 Medium.jpeg",
  "20250906_101953 Medium.jpeg",
  "20250913_103314 Medium.jpeg",
  "20251102_133834 Medium.jpeg",
  "20251116_110243 Medium.jpeg",
  "20251206_133443 Medium.jpeg",
  "Copy of GDG Blr-563 Medium.jpeg",
  "DSC01119 Medium.jpeg",
  "IMG20251220161007 Medium.jpeg",
  "WhatsApp Image 2025-11-22 at 18.56.33 Medium.jpeg",
  "WhatsApp Image 2025-11-30 at 8.45.26 PM-3 Medium.jpeg",
];

// Featured community is the CLOUDxAI conference. Everything else falls into
// the secondary grid below.
const featured = communities.find((c) => c.highlight) ?? communities[0];
const others = communities.filter((c) => c.name !== featured.name);

export default function CommunitiesPage() {
  return (
    <div className="mx-auto max-w-content space-y-24 px-6 py-16 md:py-24">
      {/* Page header */}
      <header className="space-y-4">
        <AnimatedSection>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent-warm">
            Communities
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.05}>
          <h1 className="font-heading text-4xl font-semibold text-foreground md:text-5xl lg:text-6xl">
            Building the cloud-native community, one meetup at a time.
          </h1>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Conferences, user groups, and grassroots meetups I help run across
            India.
          </p>
        </AnimatedSection>
      </header>

      {/* Featured: CLOUDxAI Conference */}
      <AnimatedSection className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-accent/10 via-surface to-accent-warm/10 p-8 md:p-12">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.12),transparent_60%)]"
        />
        <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-start">
          <div className="space-y-5">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-warm/30 bg-accent-warm/10 px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-wide text-accent-warm">
              <Sparkles size={12} aria-hidden />
              Featured
            </span>
            <h2 className="font-heading text-3xl font-semibold text-foreground md:text-4xl">
              {featured.name}
            </h2>
            <p className="font-heading text-xl italic text-muted-foreground">
              &ldquo;{featured.tagline}&rdquo;
            </p>
            <p className="max-w-2xl leading-relaxed text-foreground/85">
              {featured.description}
            </p>

            <dl className="flex flex-wrap gap-x-6 gap-y-3 pt-2 text-sm">
              <div className="flex items-center gap-2">
                <Users
                  size={14}
                  aria-hidden
                  className="text-muted-foreground"
                />
                <dt className="sr-only">Role</dt>
                <dd className="text-foreground/85">{featured.role}</dd>
              </div>
              <div className="flex items-center gap-2">
                <Calendar
                  size={14}
                  aria-hidden
                  className="text-muted-foreground"
                />
                <dt className="sr-only">Period</dt>
                <dd className="text-foreground/85">{featured.period}</dd>
              </div>
              {featured.city && (
                <div className="flex items-center gap-2">
                  <MapPin
                    size={14}
                    aria-hidden
                    className="text-muted-foreground"
                  />
                  <dt className="sr-only">City</dt>
                  <dd className="text-foreground/85">{featured.city}</dd>
                </div>
              )}
            </dl>

            {featured.links && featured.links.length > 0 && (
              <div className="flex flex-wrap gap-3 pt-2">
                {featured.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-foreground px-4 py-2.5 text-sm font-medium text-background no-underline transition-opacity hover:opacity-90"
                  >
                    {link.label}
                    <ArrowRight size={14} aria-hidden />
                  </a>
                ))}
              </div>
            )}
          </div>

          <div
            aria-hidden
            className="hidden h-32 w-32 items-center justify-center rounded-3xl bg-gradient-to-br from-accent to-accent-warm/80 text-background md:flex"
          >
            <Building2 size={48} strokeWidth={1.5} />
          </div>
        </div>
      </AnimatedSection>

      {/* Other communities */}
      <section className="space-y-8">
        <AnimatedSection className="space-y-3">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent-warm">
            Organizer
          </p>
          <h2 className="font-heading text-3xl font-semibold text-foreground md:text-4xl">
            Other Communities
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            Active user groups and meetups I co-organize or support across the
            country.
          </p>
        </AnimatedSection>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {others.map((community, idx) => (
            <AnimatedSection
              key={community.name}
              delay={idx * 0.05}
              className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/15 hover:shadow-[0_14px_44px_-24px_rgba(26,26,26,0.35)]"
            >
              <header className="mb-4 flex items-start justify-between gap-3">
                <h3 className="font-heading text-lg font-semibold leading-snug text-foreground">
                  {community.name}
                </h3>
                {community.members && (
                  <span className="shrink-0 rounded-full border border-accent-warm/30 bg-accent-warm/10 px-2.5 py-1 font-mono text-[11px] font-medium text-accent-warm">
                    {community.members}
                  </span>
                )}
              </header>

              <p className="text-sm font-medium text-muted-foreground">
                {community.role}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                {community.period}
              </p>

              {community.city && (
                <p className="mt-3 inline-flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin size={12} aria-hidden /> {community.city}
                </p>
              )}

              {community.links && community.links.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2 pt-2">
                  {community.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-full border border-border bg-background px-3 py-1.5 font-mono text-[11px] text-foreground/85 no-underline transition-colors hover:border-accent/40 hover:bg-accent/5 hover:text-accent"
                    >
                      {link.label}
                      <ExternalLink size={10} aria-hidden />
                    </a>
                  ))}
                </div>
              )}
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Photo gallery */}
      <section className="space-y-8">
        <AnimatedSection className="space-y-3">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent-warm">
            Memories
          </p>
          <h2 className="font-heading text-3xl font-semibold text-foreground md:text-4xl">
            From our events
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            Snapshots from meetups, conferences, and community gatherings
            across India.
          </p>
        </AnimatedSection>

        <div className="columns-2 gap-4 md:columns-3 lg:columns-4">
          {communityPhotos.map((photo, idx) => (
            <AnimatedSection
              key={photo}
              delay={(idx % 4) * 0.04}
              className="mb-4 break-inside-avoid"
            >
              <div className="overflow-hidden rounded-xl border border-border bg-subtle">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/community/${encodeURIComponent(photo)}`}
                  alt={`Community event photo ${idx + 1}`}
                  loading="lazy"
                  className="h-auto w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <AnimatedSection className="rounded-3xl border border-border bg-surface p-8 text-center md:p-12">
        <h2 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">
          Want to join or speak?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          We&apos;re always looking for passionate speakers and contributors.
          Whether you want to share your knowledge or learn from others, our
          communities welcome you.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href="/contact/"
            className="inline-flex items-center gap-2 rounded-lg bg-foreground px-5 py-2.5 text-sm font-medium text-background no-underline transition-opacity hover:opacity-90"
          >
            Get in Touch
            <ArrowRight size={14} aria-hidden />
          </a>
          {featured.links?.[0] && (
            <a
              href={featured.links[0].href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground no-underline transition-colors hover:bg-subtle"
            >
              CLOUDxAI Conference
              <ExternalLink size={14} aria-hidden />
            </a>
          )}
        </div>
      </AnimatedSection>
    </div>
  );
}
