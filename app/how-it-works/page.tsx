import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Boxes, ClipboardList, Truck, UserRound } from "lucide-react";
import { PageEyebrow, PageShell, SectionHeading } from "@/components/page-shell";

const steps = [
  { number: "01", image: "/assets/3d/unique/step-select-materials.png", title: "Start with the job", text: "Choose a material family or tell us the stage of the build you are working through." },
  { number: "02", image: "/assets/3d/unique/step-shape-brief.png", title: "Shape the brief", text: "Share quantities, dimensions, drawings or simply the outcome you need to achieve." },
  { number: "03", image: "/assets/3d/unique/step-review-quote.png", title: "Review the quote", text: "We organise the request into clear line items so the next decision is easier to make." },
  { number: "04", image: "/assets/3d/unique/step-plan-site.png", title: "Plan the site", text: "Confirm timing, delivery context and the practical details that matter when work starts." },
];

export default function HowItWorksPage() {
  return (
    <PageShell active="how-it-works">
      <section className="page-hero process-hero"><div className="page-hero-copy"><PageEyebrow>From idea to site</PageEyebrow><h1>Less guesswork.<br /><em>More build.</em></h1><p>Construction gets easier when the material decision is clear before the work begins. MABNA helps you move from a rough need to an organised brief.</p><Link href="/contact" className="primary-page-button">Start with your brief <ArrowRight size={18} /></Link></div><div className="process-hero-diagram"><div className="diagram-ring ring-one" /><div className="diagram-ring ring-two" /><Image className="process-3d-sequence" src="/assets/3d/unique/workflow-path-v2.png" alt="A unique 3D workflow path from material selection to site delivery" width={2048} height={683} priority /><div className="diagram-node node-one"><Boxes size={23} /><span>Choose</span></div><div className="diagram-node node-two"><ClipboardList size={23} /><span>Brief</span></div><div className="diagram-node node-three"><Truck size={23} /><span>Deliver</span></div><span className="diagram-caption">A stronger sequence</span></div></section>

      <section className="page-section"><SectionHeading eyebrow="The MABNA sequence" title="Every project has a next useful step." description="Our flow is designed for both a quick material question and a full project list. Start wherever your brief is clearest." /><div className="steps-grid">{steps.map((step) => <article className="step-card" key={step.number}><span className="step-number">{step.number}</span><Image className="step-icon-3d" src={step.image} alt="" width={512} height={512} aria-hidden="true" /><h3>{step.title}</h3><p>{step.text}</p></article>)}</div></section>

      <section className="principles-panel"><div><PageEyebrow>What we optimise for</PageEyebrow><h2>Clarity on paper.<br />Confidence on site.</h2></div><div className="principles-list"><div><UserRound size={21} /><span><strong>Useful guidance</strong>Start from the job, not a catalogue maze.</span></div><div><ClipboardList size={21} /><span><strong>Clear quantities</strong>Turn a rough list into an actionable brief.</span></div><div><Truck size={21} /><span><strong>Site-aware planning</strong>Keep timing, access and delivery in the conversation.</span></div></div></section>
    </PageShell>
  );
}
