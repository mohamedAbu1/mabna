import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, FileText, Ruler, Truck } from "lucide-react";
import { notFound } from "next/navigation";
import { PageEyebrow, PageShell } from "@/components/page-shell";
import { catalogProducts, getProduct } from "@/lib/catalog";

export function generateStaticParams() {
  return catalogProducts.map((product) => ({ category: product.category, slug: product.slug }));
}

export default async function ProductPage({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const { category, slug } = await params;
  const product = getProduct(slug);
  if (!product || product.category !== category) notFound();

  return (
    <PageShell active="products">
      <section className="product-detail-hero page-hero"><div className="page-hero-copy"><Link href={`/products/${product.category}`} className="back-link"><ArrowLeft size={16} /> {product.categoryLabel}</Link><PageEyebrow>{product.badge ?? "Project-ready starting point"}</PageEyebrow><h1>{product.name}<br /><em>for the next stage.</em></h1><p>{product.summary}</p><Link href="/contact" className="primary-page-button">Request this in a quote <ArrowRight size={18} /></Link></div><div className="product-detail-visual" style={{ backgroundImage: `url(${product.image})` }}><span>SPEC / {product.categoryLabel.toUpperCase()}</span><div className="product-detail-stamp">MABNA<br /><small>Material direction</small></div></div></section>

      <section className="detail-layout page-section"><div className="detail-main"><div className="section-kicker">A clearer brief</div><h2>Use the product direction to start the conversation.</h2><p className="detail-lead">This is a planning reference, not a substitute for a project specification. Share your quantities, dimensions or drawings and our team can help confirm the right route for your site.</p><div className="product-detail-facts"><div><Ruler size={20} /><span><strong>Working spec</strong>{product.spec}</span></div><div><Truck size={20} /><span><strong>Delivery context</strong>{product.useCase}</span></div><div><FileText size={20} /><span><strong>Quote format</strong>Clear line items for your brief</span></div></div></div><aside className="quote-aside glass-panel"><span className="modal-icon"><Check size={23} /></span><span className="contact-kicker">Next move</span><h3>Turn a direction into a quote.</h3><p>Tell us the quantities and timing you have in mind. We will take it from there.</p><Link href="/contact" className="text-link">Start a quote <ArrowRight size={17} /></Link></aside></section>
    </PageShell>
  );
}
