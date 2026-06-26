import { Wrench } from "lucide-react";

import { AnimatedSection } from "@/components/animated-section";
import type { TechnicalSkill } from "@/lib/site-data";

interface SkillsGridProps {
  skills: TechnicalSkill[];
}

export function SkillsGrid({ skills }: SkillsGridProps) {
  const grouped = skills.reduce<Record<string, TechnicalSkill[]>>(
    (acc, skill) => {
      (acc[skill.category] ||= []).push(skill);
      return acc;
    },
    {},
  );

  const categories = Object.keys(grouped).sort((a, b) =>
    a.localeCompare(b),
  );

  return (
    <section className="space-y-8">
      <AnimatedSection className="space-y-3">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent-warm">
          Toolbox
        </p>
        <h2 className="font-heading text-3xl font-semibold text-foreground md:text-4xl">
          Technical Skills
        </h2>
        <p className="max-w-2xl text-muted-foreground">
          The platforms, languages, and tools I reach for daily — grouped by
          discipline.
        </p>
      </AnimatedSection>

      <div className="grid gap-6 md:grid-cols-2">
        {categories.map((category, idx) => (
          <AnimatedSection
            key={category}
            delay={idx * 0.04}
            className="rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/15 hover:shadow-[0_12px_40px_-20px_rgba(26,26,26,0.35)]"
          >
            <header className="mb-4 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary text-accent">
                <Wrench size={16} aria-hidden />
              </span>
              <h3 className="font-heading text-lg font-semibold text-foreground">
                {category}
              </h3>
            </header>
            <div className="flex flex-wrap gap-2">
              {grouped[category].map((skill) => (
                <span
                  key={skill.name}
                  className="rounded-full border border-border bg-background px-3 py-1.5 font-mono text-xs text-foreground/85 transition-colors hover:border-accent/40 hover:bg-accent/5"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
