import { AnimatedSection } from "@/components/animated-section";
import { stats } from "@/lib/site-data";

export function Stats() {
  return (
    <section className="px-6 py-16 md:py-24 bg-subtle border-y border-border">
      <div className="mx-auto max-w-content">
        <AnimatedSection>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-border bg-background p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <p className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-2">
                  {stat.value}
                </p>
                <p className="text-sm uppercase tracking-wider text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
