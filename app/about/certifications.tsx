import { Award, CheckCircle2, ShieldAlert } from "lucide-react";

import { AnimatedSection } from "@/components/animated-section";
import type { Certification } from "@/lib/site-data";

interface CertificationsProps {
  active: Certification[];
  expired: Certification[];
}

export function Certifications({ active, expired }: CertificationsProps) {
  return (
    <section className="space-y-12">
      <AnimatedSection className="space-y-3">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent-warm">
          Credentials
        </p>
        <h2 className="font-heading text-3xl font-semibold text-foreground md:text-4xl">
          Certifications
        </h2>
        <p className="max-w-2xl text-muted-foreground">
          A mix of vendor-issued expert credentials and specialized badges.
          Active certs are kept current; expired ones are kept for the record.
        </p>
      </AnimatedSection>

      <div className="space-y-10">
        <CertGroup
          title="Active"
          icon={<CheckCircle2 size={18} aria-hidden />}
          tone="active"
          certs={active}
        />
        <CertGroup
          title="Expired"
          icon={<ShieldAlert size={18} aria-hidden />}
          tone="expired"
          certs={expired}
        />
      </div>
    </section>
  );
}

interface CertGroupProps {
  title: string;
  icon: React.ReactNode;
  tone: "active" | "expired";
  certs: Certification[];
}

function CertGroup({ title, icon, tone, certs }: CertGroupProps) {
  return (
    <div className="space-y-5">
      <div className="flex items-center gap-2">
        <span
          className={`flex h-8 w-8 items-center justify-center rounded-lg ${
            tone === "active"
              ? "bg-accent/10 text-accent"
              : "bg-muted text-muted-foreground"
          }`}
        >
          {icon}
        </span>
        <h3 className="font-heading text-xl font-semibold text-foreground">
          {title}
        </h3>
        <span className="font-mono text-xs text-muted-foreground">
          ({certs.length})
        </span>
      </div>

      {certs.length === 0 ? (
        <p className="text-sm text-muted-foreground">No entries yet.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certs.map((cert, idx) => (
            <AnimatedSection
              key={`${cert.title}-${cert.date}`}
              delay={idx * 0.03}
              className={`group flex h-full gap-4 rounded-2xl border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/15 hover:shadow-[0_12px_40px_-20px_rgba(26,26,26,0.35)] ${
                tone === "expired" ? "opacity-80 grayscale-[20%]" : ""
              }`}
            >
              <CertBadge logo={cert.logo} title={cert.title} />
              <div className="min-w-0 flex-1">
                <p className="font-heading text-sm font-semibold leading-snug text-foreground">
                  {cert.title}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {cert.issuer}
                </p>
                <p className="mt-2 font-mono text-[11px] text-muted-foreground">
                  Issued {cert.date}
                  {cert.expires && (
                    <>
                      <span className="px-1 text-border">|</span>
                      Expires {cert.expires}
                    </>
                  )}
                </p>
                {cert.skills && cert.skills.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {cert.skills.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-border bg-secondary px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                )}
                {cert.id && (
                  <p className="mt-2 truncate font-mono text-[10px] text-muted-foreground/70">
                    ID: {cert.id}
                  </p>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      )}
    </div>
  );
}

interface CertBadgeProps {
  logo?: string;
  title: string;
}

function CertBadge({ logo, title }: CertBadgeProps) {
  return (
    <div
      className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border bg-background"
      aria-label={`${title} badge`}
    >
      {logo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={logo}
          alt={`${title} badge`}
          className="h-full w-full object-contain p-1"
          loading="lazy"
        />
      ) : (
        <Award size={20} aria-hidden className="text-accent" />
      )}
    </div>
  );
}
