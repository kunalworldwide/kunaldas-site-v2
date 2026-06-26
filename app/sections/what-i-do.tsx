import { AnimatedSection } from "@/components/animated-section";
import { bio } from "@/lib/site-data";

export function WhatIDo() {
  return (
    <section className="px-6 py-16 md:py-24 border-t border-border">
      <div className="mx-auto max-w-content">
        <AnimatedSection>
          <p className="font-mono text-sm uppercase tracking-wider text-muted-foreground mb-6">
            What I Do
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8 max-w-3xl">
            Helping engineering teams run Kubernetes smarter across APAC.
          </h2>
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <p className="text-lg leading-relaxed text-foreground">
              As Developer Advocate APAC at <span className="font-semibold">{bio.company}</span>,
              I work with platform teams and engineers across the region to make
              cloud-native infrastructure faster, cheaper, and easier to operate.
              My focus is on <span className="text-accent font-medium">Kubernetes</span>{" "}
              optimization and <span className="text-accent font-medium">FinOps</span>{" "}
              practices that turn cloud cost into a first-class engineering
              signal.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {bio.shortBio} I write about the patterns that work in production,
              speak at meetups and conferences, and organize communities so the
              next wave of cloud engineers has somewhere to learn in public.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
