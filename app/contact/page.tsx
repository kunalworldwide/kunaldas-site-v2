import {
  ArrowRight,
  AtSign,
  Calendar,
  ExternalLink,
  Mail,
  MapPin,
} from "lucide-react";
import type { Metadata } from "next";

import { AnimatedSection } from "@/components/animated-section";
import { bio, contactOptions, socialLinks } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact — Kunal Das",
  description:
    "Book a 1:1 consultation, send an email, or connect on LinkedIn. Available for cloud architecture, DevOps, and speaking opportunities.",
};

// lucide-react v1.21.0 doesn't export a Linkedin icon; we use the inline
// LinkedinIcon component declared at the bottom of this file.
const optionIcons = {
  "Book a Call": Calendar,
  "Send an Email": Mail,
  "Connect on LinkedIn": "linkedin" as const,
} as const;

const optionTones = {
  "Book a Call": {
    iconWrap: "bg-accent/10 text-accent",
    border: "hover:border-accent/40",
  },
  "Send an Email": {
    iconWrap: "bg-accent-warm/10 text-accent-warm",
    border: "hover:border-accent-warm/40",
  },
  "Connect on LinkedIn": {
    iconWrap: "bg-foreground/10 text-foreground",
    border: "hover:border-foreground/30",
  },
} as const;

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-content space-y-20 px-6 py-16 md:py-24">
      {/* Page header */}
      <header className="space-y-4">
        <AnimatedSection>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent-warm">
            Contact
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.05}>
          <h1 className="font-heading text-4xl font-semibold text-foreground md:text-5xl lg:text-6xl">
            Let&apos;s talk.
          </h1>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Have a question or want to work together? I&apos;d love to hear
            from you — pick the channel that fits best.
          </p>
        </AnimatedSection>
      </header>

      {/* Contact cards */}
      <section className="grid gap-6 md:grid-cols-3">
        {contactOptions.map((option, idx) => {
          const iconKey = optionIcons[option.title as keyof typeof optionIcons];
          const tone =
            optionTones[option.title as keyof typeof optionTones] ??
            optionTones["Send an Email"];

          return (
            <AnimatedSection
              key={option.title}
              delay={idx * 0.07}
              className={`group flex h-full flex-col rounded-2xl border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_-25px_rgba(26,26,26,0.35)] ${tone.border}`}
            >
              <span
                className={`mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl ${tone.iconWrap}`}
              >
                {iconKey === "linkedin" ? (
                  <LinkedinIcon size={20} />
                ) : (
                  (() => {
                    const Icon = iconKey as React.ComponentType<{
                      size?: number;
                      "aria-hidden"?: boolean;
                    }>;
                    return <Icon size={20} aria-hidden />;
                  })()
                )}
              </span>

              <h2 className="font-heading text-xl font-semibold text-foreground">
                {option.title}
              </h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {option.description}
              </p>

              <a
                href={option.href}
                target={option.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  option.href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent no-underline transition-colors group-hover:text-foreground"
              >
                {option.buttonText}
                <ArrowRight
                  size={14}
                  aria-hidden
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </a>
            </AnimatedSection>
          );
        })}
      </section>

      {/* Social links */}
      <section className="space-y-6">
        <AnimatedSection className="space-y-3">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent-warm">
            Follow
          </p>
          <h2 className="font-heading text-3xl font-semibold text-foreground md:text-4xl">
            Find me online
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.05}>
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full border border-border bg-surface px-4 py-2.5 text-sm no-underline transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/30 hover:shadow-[0_10px_30px_-20px_rgba(26,26,26,0.35)]"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-secondary text-foreground">
                  {link.name === "GitHub" ? (
                    <GithubIcon size={14} />
                  ) : link.name === "Twitter" ? (
                    <TwitterIcon size={14} />
                  ) : link.name === "LinkedIn" ? (
                    <LinkedinIcon size={14} />
                  ) : (
                    <AtSign size={14} aria-hidden />
                  )}
                </span>
                <span className="flex flex-col leading-tight">
                  <span className="font-medium text-foreground">
                    {link.name}
                  </span>
                  <span className="font-mono text-[11px] text-muted-foreground">
                    {link.handle}
                  </span>
                </span>
                <ExternalLink
                  size={12}
                  aria-hidden
                  className="text-muted-foreground transition-colors group-hover:text-accent"
                />
              </a>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* Location note */}
      <AnimatedSection className="rounded-3xl border border-border bg-surface p-8 md:p-10">
        <div className="flex flex-col gap-5 md:flex-row md:items-start md:gap-6">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
            <MapPin size={20} aria-hidden />
          </span>
          <div className="space-y-2">
            <h3 className="font-heading text-xl font-semibold text-foreground">
              Based in {bio.location}
            </h3>
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Open to remote collaborations worldwide. For in-person meetings
              in Bengaluru, reach out via email and we&apos;ll find a slot.
            </p>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Brand icons — lucide-react v1.21.0 does not export Github/Twitter/         */
/*  Linkedin, so we inline the same SVGs the Footer component uses.           */
/* -------------------------------------------------------------------------- */

function GithubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function TwitterIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function LinkedinIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
