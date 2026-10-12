import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function PageShell({ active, children }: { active?: string; children: ReactNode }) {
  return (
    <main id="top" className="mabna-site">
      <div className="blueprint blueprint-one" />
      <div className="blueprint blueprint-two" />
      <SiteHeader active={active} />
      <div className="page-content">{children}</div>
      <SiteFooter />
    </main>
  );
}

export function PageEyebrow({ children }: { children: ReactNode }) {
  return <div className="eyebrow"><span /> <span>{children}</span></div>;
}

export function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="page-section-heading">
      <PageEyebrow>{eyebrow}</PageEyebrow>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}
