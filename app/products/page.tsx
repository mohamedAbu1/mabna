import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Ruler, ShieldCheck, Truck } from "lucide-react";
import { CatalogBrowser } from "@/components/catalog-browser";
import { PageEyebrow, PageShell, SectionHeading } from "@/components/page-shell";
import { catalogCategories } from "@/lib/catalog";

export default function ProductsPage() {
  return (
    <PageShell active="products">
      <section className="page-hero products-hero">
        <div className="page-hero-copy"><PageEyebrow>Materials, organised</PageEyebrow><h1>Everything the<br /><em>build</em> needs.</h1><p>Browse by the way you work: structure, mix, frame, finish and the tools that keep the site moving.</p><div className="hero-inline-actions"><Link href="#catalogue" className="primary-page-button">Browse the catalogue <ArrowRight size={18} /></Link><span><Ruler size={18} /> Clearer specifications</span></div></div>
        <div className="page-hero-visual products-hero-visual"><div className="hero-drawing-label">MABNA / MATERIAL SYSTEM 01</div><div className="hero-drawing-lines" /><Image className="catalogue-3d-hero" src="/assets/3d/unique/products-material-study-v2.png" alt="3D architectural study of concrete, reinforcement steel and structural sections" width={1254} height={1254} priority /><div className="hero-material-stack" aria-hidden="true"><span className="stack-slab slab-one" /><span className="stack-slab slab-two" /><span className="stack-slab slab-three" /><span className="stack-bar bar-one" /><span className="stack-bar bar-two" /></div><div className="hero-visual-caption"><strong>Build from a<br />clearer brief.</strong><span>Structural materials<br />to site essentials.</span></div></div>
      </section>

      <section className="trust-rail glass-panel"><div><Truck size={21} /><span>Plan delivery around the site</span></div><div><ShieldCheck size={21} /><span>Start with dependable categories</span></div><div><Ruler size={21} /><span>Quote against a clear brief</span></div></section>

      <section className="page-section category-directory"><SectionHeading eyebrow="The MABNA catalogue" title="Choose the system you are solving for." description="The best material choice starts with context. Open a department for a focused view, then send us the quantities or specifications you already have." /><div className="directory-grid">{catalogCategories.map((category) => <Link href={`/products/${category.slug}`} className="directory-card" key={category.slug}><div className="directory-image" style={{ backgroundImage: `url(${category.image})` }}><span>{category.eyebrow}</span></div><div className="directory-copy"><span className="directory-accent">{category.accent}</span><h3>{category.title}</h3><p>{category.description}</p><span className="text-link">Open department <ArrowUpRight size={17} /></span></div></Link>)}</div></section>

      <section id="catalogue" className="page-section"><div className="catalog-section-head"><SectionHeading eyebrow="Quote-ready starting points" title="A focused catalogue, not a noisy warehouse." description="Use these starting points to shape a material brief. Final availability and pricing are confirmed against your project, quantity and delivery needs." /><Link href="/contact" className="outline-button">Send a BOQ <ArrowUpRight size={17} /></Link></div><CatalogBrowser /></section>
    </PageShell>
  );
}
