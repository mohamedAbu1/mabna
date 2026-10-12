import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Calculator, Compass, Layers3, Ruler } from "lucide-react";
import { PageEyebrow, PageShell, SectionHeading } from "@/components/page-shell";

const resources = [
  { icon: Calculator, type: "Calculator", title: "Material quantity planner", text: "A simple way to organise your first estimate before you request a quote." },
  { icon: Layers3, type: "Field note", title: "Build by phase", text: "Separate structure, services, finishes and site essentials so the list stays usable." },
  { icon: Ruler, type: "Specification", title: "What to include in a brief", text: "Dimensions, quantities, grade, timing and access are the details that make a quote clearer." },
  { icon: Compass, type: "Guide", title: "Choosing the right category", text: "Start with the job you are solving, then narrow down to the material system." },
];

export default function ResourcesPage() {
  return (
    <PageShell active="resources">
      <section className="page-hero resources-hero"><div className="page-hero-copy"><PageEyebrow>Field notes for better builds</PageEyebrow><h1>Make the next<br /><em>decision clearer.</em></h1><p>Useful starting points for homeowners, contractors and project teams who want to move from “I need materials” to a brief people can act on.</p><Link href="/contact" className="primary-page-button">Ask a specialist <ArrowRight size={18} /></Link></div><div className="resource-index"><span>INDEX / 04</span><div className="index-lines"><i /><i /><i /><i /></div><Image className="resource-3d-object" src="/assets/3d/resources-blueprint-desk.png" alt="3D architectural notebook, pencil and concrete sample" width={1536} height={1024} priority /><strong>Build<br />with intent.</strong><small>MABNA / FIELD NOTES</small></div></section>

      <section className="page-section"><SectionHeading eyebrow="The resource desk" title="A better brief starts before the quote." description="These are practical prompts, not generic content. Use them to get your project information into a shape that is easy to review." /><div className="resource-grid">{resources.map((resource) => { const Icon = resource.icon; return <article className="resource-card" key={resource.title}><span className="resource-icon"><Icon size={24} /></span><span className="resource-type">{resource.type}</span><h3>{resource.title}</h3><p>{resource.text}</p><Link href="/contact" className="text-link">Use this direction <ArrowUpRight size={17} /></Link></article>; })}</div></section>

      <section className="resource-cta glass-panel"><div><span className="contact-kicker">Have a list already?</span><h2>Send the rough version.<br />We will help make it useful.</h2></div><Link href="/contact" className="outline-button">Request a quote <ArrowRight size={18} /></Link></section>
    </PageShell>
  );
}
