import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

import { AnimatedSection } from "@/components/animated-section";

export function ContactCTA() {
  return (
    <section className="px-6 py-24 md:py-32 bg-foreground text-background">
      <div className="mx-auto max-w-content text-center">
        <AnimatedSection>
          <p className="font-mono text-sm uppercase tracking-wider text-background/70 mb-4">
            Let&apos;s Connect
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 text-background">
            Have something to build, talk, or ship?
          </h2>
          <p className="text-lg md:text-xl text-background/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            I&apos;m always up for conversations about Kubernetes, FinOps,
            developer communities, or speaking engagements across APAC.
          </p>
          <Link
            href="/contact/"
            className="inline-flex items-center gap-2 rounded-lg bg-background px-6 py-3 font-medium text-foreground no-underline transition-opacity duration-300 hover:opacity-90"
          >
            <Mail size={18} />
            Get in Touch
            <ArrowRight size={18} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
