import Link from "next/link";
import { ArrowRight, Check, HardHat, ScanLine, ShieldCheck, Wrench } from "lucide-react";
import { PageEyebrow, PageShell, SectionHeading } from "@/components/page-shell";

const values = [
  { icon: ScanLine, title: "See the whole job", text: "Materials make more sense when they are connected to the stage, sequence and setting of the work." },
  { icon: ShieldCheck, title: "Keep the brief honest", text: "Clear options, useful constraints and practical context matter more than a long product list." },
  { icon: Wrench, title: "Respect the craft", text: "The details that look small on a screen are often the details that save time on site." },
];

export default function AboutPage() {
  return (
    <PageShell active="about">
      <section className="page-hero about-hero"><div className="page-hero-copy"><PageEyebrow>Why MABNA?</PageEyebrow><h1>The material<br /><em>behind the work.</em></h1><p>MABNA is a clearer way to plan construction materials: grounded in the real sequence of a project, designed for people who need the next decision to be useful.</p><Link href="/products" className="primary-page-button">Explore the catalogue <ArrowRight size={18} /></Link></div><div className="about-hero-visual"><img src="/assets/mabna-desktop-reference.png" alt="MABNA material planning reference" /><div className="about-hero-note"><span>FIELD NOTE / 001</span><strong>Good materials<br />start with good questions.</strong></div></div></section>

      <section className="page-section about-intro"><SectionHeading eyebrow="A different kind of materials partner" title="Less catalogue noise. More useful direction." description="MABNA brings categories, project thinking and quote-ready communication into one calmer experience. We are building the place where a contractor, homeowner or project team can begin with what they know and still move forward." /><div className="about-signal-row"><div><strong>01</strong><span>Material systems<br />over random products</span></div><div><strong>02</strong><span>Project context<br />over catalogue noise</span></div><div><strong>03</strong><span>Clear next steps<br />over guesswork</span></div></div></section>

      <section className="page-section"><SectionHeading eyebrow="The MABNA standard" title="Built around the way work actually moves." /><div className="value-grid">{values.map((value) => { const Icon = value.icon; return <article className="value-card" key={value.title}><Icon size={28} className="orange-icon" /><h3>{value.title}</h3><p>{value.text}</p><span className="value-check"><Check size={15} /></span></article>; })}</div></section>

      <section className="about-cta"><div><HardHat size={28} /><span className="contact-kicker">Ready to make a start?</span><h2>Bring the next piece<br />of the project into focus.</h2></div><Link href="/contact" className="outline-button">Talk to MABNA <ArrowRight size={18} /></Link></section>
    </PageShell>
  );
}
