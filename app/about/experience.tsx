import { Briefcase, Building2, MapPin, Clock, Sparkles } from "lucide-react";

import { AnimatedSection } from "@/components/animated-section";
import type { Experience } from "@/lib/site-data";

interface ExperienceTimelineProps {
  experience: Experience[];
}

export function ExperienceTimeline({ experience }: ExperienceTimelineProps) {
  return (
    <section className="space-y-8">
      <AnimatedSection className="space-y-3">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent-warm">
          Career
        </p>
        <h2 className="font-heading text-3xl font-semibold text-foreground md:text-4xl">
          Work Experience
        </h2>
        <p className="max-w-2xl text-muted-foreground">
          A decade of building, breaking, and automating cloud platforms —
          from datacenter racks to multi-region Kubernetes.
        </p>
      </AnimatedSection>

      <div className="relative space-y-6">
        {/* Subtle vertical timeline rail (md+) */}
        <div
          aria-hidden
          className="absolute left-[19px] top-2 bottom-2 hidden w-px bg-border md:block"
        />

        {experience.map((item, index) => (
          <AnimatedSection
            key={`${item.company}-${item.role}`}
            delay={index * 0.05}
            className="relative md:pl-14"
          >
            {/* Timeline dot */}
            <span
              aria-hidden
              className={`absolute left-[12px] top-7 hidden h-4 w-4 items-center justify-center rounded-full border-2 border-background md:flex ${
                item.current
                  ? "bg-accent-warm shadow-[0_0_0_4px_rgba(217,119,6,0.15)]"
                  : "bg-muted-foreground/40"
              }`}
            />

            <article className="group relative rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/15 hover:shadow-[0_12px_40px_-20px_rgba(26,26,26,0.35)] md:p-8">
              <header className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <CompanyLogo
                    logo={item.logo}
                    name={item.company}
                    current={item.current}
                  />
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      {item.role}
                    </h3>
                    <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">
                        {item.company}
                      </span>
                      <span aria-hidden className="text-border">
                        |
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock size={14} aria-hidden />
                        {item.period} <span className="text-border">·</span>{" "}
                        {item.duration}
                      </span>
                    </p>
                  </div>
                </div>

                {item.current && (
                  <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-accent-warm/30 bg-accent-warm/10 px-2.5 py-1 font-mono text-[11px] font-medium uppercase tracking-wide text-accent-warm">
                    <Sparkles size={12} aria-hidden />
                    Current
                  </span>
                )}
              </header>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>

              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <MapPin size={12} aria-hidden />
                  {item.location}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-border bg-secondary px-2 py-0.5 font-mono text-[11px] uppercase tracking-wide">
                  {item.type}
                </span>
              </div>

              {item.highlights.length > 0 && (
                <ul className="mt-5 space-y-2 text-sm text-foreground/85">
                  {item.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-2 leading-relaxed"
                    >
                      <span
                        aria-hidden
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}

              {item.skills.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border bg-secondary px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </article>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}

interface CompanyLogoProps {
  logo?: string;
  name: string;
  current: boolean;
}

function CompanyLogo({ logo, name, current }: CompanyLogoProps) {
  const initials = name
    .split(/\s+/)
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div
      className={`flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border bg-secondary ${
        current ? "" : ""
      }`}
      aria-label={`${name} logo`}
    >
      {logo ? (
        // Plain img tag — assets are in /public and we want zero-config
        // rendering under static export without configuring remotePatterns.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={logo}
          alt={`${name} logo`}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      ) : (
        <span className="flex items-center gap-1 font-mono text-[11px] font-semibold text-muted-foreground">
          {initials ? (
            <span className="text-[13px] tracking-wide">{initials}</span>
          ) : (
            <Building2 size={18} aria-hidden />
          )}
          <Briefcase size={10} aria-hidden className="sr-only" />
        </span>
      )}
    </div>
  );
}
