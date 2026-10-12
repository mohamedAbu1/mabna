import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, FileText } from "lucide-react";
import { notFound } from "next/navigation";
import { PageEyebrow, PageShell } from "@/components/page-shell";
import { catalogCategories, catalogProducts, getCategory } from "@/lib/catalog";

export function generateStaticParams() {
  return catalogCategories.map((category) => ({ category: category.slug }));
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();
  const products = catalogProducts.filter((product) => product.category === category.slug);

  return (
    <PageShell active="products">
      <section className="category-hero page-hero"><div className="page-hero-copy"><Link href="/products" className="back-link"><ArrowLeft size={16} /> All products</Link><PageEyebrow>{category.eyebrow}</PageEyebrow><h1>{category.title}<br /><em>with intent.</em></h1><p>{category.description}</p><Link href="/contact" className="primary-page-button">Request a project quote <ArrowRight size={18} /></Link></div><div className="category-hero-image" style={{ backgroundImage: `url(${category.image})` }}><span>{category.accent}</span><div><strong>01</strong><small>Material direction</small></div></div></section>

      <section className="detail-layout page-section"><div className="detail-main"><div className="section-kicker">What belongs here</div><h2>A considered starting point for the work ahead.</h2><p className="detail-lead">Every project has a different brief. Use this department to organise the essentials, then let MABNA help you confirm the right quantities, specifications and delivery sequence.</p><div className="detail-item-grid">{category.items.map((item, index) => <div key={item}><span className="detail-number">0{index + 1}</span><strong>{item}</strong><Check size={17} /></div>)}</div></div><aside className="quote-aside glass-panel"><FileText size={26} className="orange-icon" /><span className="contact-kicker">Need a complete list?</span><h3>Send us your quantities.</h3><p>Share a BOQ, sketch or a simple note about what you are building. We will shape it into a clearer material brief.</p><Link href="/contact" className="text-link">Start a quote <ArrowUpRight size={17} /></Link></aside></section>

      <section className="page-section related-products"><div className="catalog-section-head"><div><div className="section-kicker">Suggested starting points</div><h2>Begin with the pieces that matter.</h2></div><Link href="/products" className="outline-button">Back to catalogue <ArrowUpRight size={17} /></Link></div><div className="catalog-grid">{products.length ? products.map((product) => <article className="product-card" key={product.slug}><div className="product-card-image" style={{ backgroundImage: `url(${product.image})` }}><span>{product.badge ?? "Project-ready"}</span></div><div className="product-card-body"><span className="product-category-label">{product.categoryLabel}</span><h3>{product.name}</h3><p>{product.summary}</p><div className="product-meta"><span>{product.spec}</span><span>{product.useCase}</span></div><Link href={`/products/${product.category}/${product.slug}`} className="text-link">View direction <ArrowUpRight size={17} /></Link></div></article>) : <div className="empty-catalog glass-panel"><strong>We are building this department with you.</strong><span>Send your list and we will prepare a tailored quote.</span><Link href="/contact" className="text-link">Request a quote <ArrowUpRight size={17} /></Link></div>}</div></section>
    </PageShell>
  );
}
