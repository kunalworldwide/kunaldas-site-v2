import { GraduationCap, MapPin, Sparkles, Users } from "lucide-react";
import type { Metadata } from "next";

import { AnimatedSection } from "@/components/animated-section";
import {
  bio,
  communities,
  education,
  experience,
  technicalSkills,
} from "@/lib/site-data";
import { certifications } from "@/lib/site-data";

import { Certifications } from "./certifications";
import { ExperienceTimeline } from "./experience";
import { SkillsGrid } from "./skills";

export const metadata: Metadata = {
  title: "About — Kunal Das",
  description:
    "Full bio, work experience, skills, communities, certifications, and education for Kunal Das, Developer Advocate APAC at CAST AI.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-content space-y-24 px-6 py-16 md:py-24">
      {/* Page header */}
      <header className="space-y-4">
        <AnimatedSection>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent-warm">
            About
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.05}>
          <h1 className="font-heading text-4xl font-semibold text-foreground md:text-5xl lg:text-6xl">
            Builder, advocate, community organizer.
          </h1>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <p className="max-w-2xl text-lg text-muted-foreground">
            8+ years in DevOps & Cloud. Architected zero-downtime deployments
            for 30+ microservices across 3 continents. Active community
            builder organizing 5+ tech communities across India.
          </p>
        </AnimatedSection>
      </header>

      {/* Bio card */}
      <AnimatedSection className="rounded-3xl border border-border bg-surface p-6 md:p-10">
        <div className="grid gap-8 md:grid-cols-[200px_1fr] md:items-start">
          <div className="relative mx-auto w-40 md:mx-0 md:w-48">
            <div
              aria-hidden
              className="absolute -inset-2 rounded-full bg-gradient-to-br from-accent/30 via-accent-warm/20 to-transparent blur-xl"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={bio.profileImage}
              alt={`Portrait of ${bio.name}`}
              className="relative aspect-square w-full rounded-full border border-border object-cover"
            />
          </div>

          <div className="space-y-5">
            <div className="space-y-1">
              <h2 className="font-heading text-3xl font-semibold text-foreground">
                {bio.name}
              </h2>
              <p className="text-base text-muted-foreground">
                {bio.role} at{" "}
                <span className="font-medium text-foreground">
                  {bio.company}
                </span>
              </p>
            </div>

            <p className="max-w-2xl leading-relaxed text-foreground/85">
              {bio.longBio}
            </p>

            <div className="flex flex-wrap gap-2">
              <BioChip icon={<MapPin size={14} aria-hidden />}>
                {bio.location}
              </BioChip>
              <BioChip icon={<GraduationCap size={14} aria-hidden />}>
                MSc Data Science
              </BioChip>
              <BioChip icon={<Sparkles size={14} aria-hidden />}>
                12+ Certifications
              </BioChip>
              <BioChip icon={<Users size={14} aria-hidden />}>
                5+ Communities Led
              </BioChip>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Experience */}
      <ExperienceTimeline experience={experience} />

      {/* Skills */}
      <SkillsGrid skills={technicalSkills} />

      {/* Communities */}
      <section className="space-y-8">
        <AnimatedSection className="space-y-3">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent-warm">
            Community
          </p>
          <h2 className="font-heading text-3xl font-semibold text-foreground md:text-4xl">
            Communities I Organize
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            Meetups, user groups, and conferences I help run across India —
            see the{" "}
            <a href="/communities/" className="font-medium">
              communities page
            </a>{" "}
            for the full list.
          </p>
        </AnimatedSection>

        <div className="grid gap-4 md:grid-cols-2">
          {communities.map((community, idx) => (
            <AnimatedSection
              key={community.name}
              delay={idx * 0.04}
              className="group rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/15 hover:shadow-[0_12px_40px_-20px_rgba(26,26,26,0.35)]"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {community.name}
                </h3>
                {community.members && (
                  <span className="shrink-0 rounded-full border border-accent-warm/30 bg-accent-warm/10 px-2.5 py-1 font-mono text-[11px] font-medium text-accent-warm">
                    {community.members}
                  </span>
                )}
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                {community.role} · {community.period}
              </p>
              {community.city && (
                <p className="mt-3 inline-flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin size={12} aria-hidden /> {community.city}
                </p>
              )}
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <Certifications
        active={certifications.active}
        expired={certifications.expired}
      />

      {/* Education */}
      <section className="space-y-8">
        <AnimatedSection className="space-y-3">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent-warm">
            Education
          </p>
          <h2 className="font-heading text-3xl font-semibold text-foreground md:text-4xl">
            Academic Background
          </h2>
        </AnimatedSection>

        <div className="grid gap-5 md:grid-cols-3">
          {education.map((item, idx) => (
            <AnimatedSection
              key={`${item.degree}-${item.institution}`}
              delay={idx * 0.05}
              className="rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/15 hover:shadow-[0_12px_40px_-20px_rgba(26,26,26,0.35)]"
            >
              <span className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <GraduationCap size={18} aria-hidden />
              </span>
              <h3 className="font-heading text-lg font-semibold leading-snug text-foreground">
                {item.degree}
              </h3>
              <p className="mt-1 text-sm font-medium text-muted-foreground">
                {item.institution}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                {item.description}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  );
}

interface BioChipProps {
  icon: React.ReactNode;
  children: React.ReactNode;
}

function BioChip({ icon, children }: BioChipProps) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary px-3 py-1.5 text-xs text-foreground/85">
      <span className="text-accent">{icon}</span>
      {children}
    </span>
  );
}
