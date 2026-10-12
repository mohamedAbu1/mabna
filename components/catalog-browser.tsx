"use client";

import Link from "next/link";
import { ArrowUpRight, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { catalogCategories, catalogProducts } from "@/lib/catalog";

export function CatalogBrowser({ initialCategory = "all", initialQuery = "" }: { initialCategory?: string; initialQuery?: string }) {
  const [activeCategory] = useState(initialCategory);
  const [query, setQuery] = useState(initialQuery);

  const products = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return catalogProducts.filter((product) => {
      const matchesCategory = activeCategory === "all" || product.category === activeCategory;
      const matchesQuery = !normalized || `${product.name} ${product.summary} ${product.categoryLabel}`.toLowerCase().includes(normalized);
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  return (
    <section className="catalog-browser" aria-label="MABNA product catalogue">
      <form className="catalog-toolbar glass-panel" action="/products#catalogue" method="get">
        <div className="catalog-search"><Search size={19} /><input name="q" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search materials, tools or systems" aria-label="Search catalogue" /></div>
        <input type="hidden" name="category" value={activeCategory === "all" ? "" : activeCategory} />
        <div className="catalog-count"><strong>{products.length}</strong> curated starting points</div>
      </form>
      <div className="catalog-filter-row" aria-label="Filter by category">
        <Link href="/products#catalogue" className={activeCategory === "all" ? "is-active" : ""}>All products</Link>
        {catalogCategories.map((category) => <Link href={`/products?category=${category.slug}#catalogue`} className={activeCategory === category.slug ? "is-active" : ""} key={category.slug}>{category.title}</Link>)}
      </div>
      <div className="catalog-grid">
        {products.map((product) => (
          <article className="product-card" key={product.slug}>
            <div className="product-card-image" style={{ backgroundImage: `url(${product.image})` }}><span>{product.badge ?? "Project-ready"}</span></div>
            <div className="product-card-body"><span className="product-category-label">{product.categoryLabel}</span><h3>{product.name}</h3><p>{product.summary}</p><div className="product-meta"><span>{product.spec}</span><span>{product.useCase}</span></div><Link href={`/products/${product.category}/${product.slug}`} className="text-link">View direction <ArrowUpRight size={17} /></Link></div>
          </article>
        ))}
      </div>
      {!products.length && <div className="empty-catalog glass-panel"><strong>No matching materials yet.</strong><span>Try a broader search or return to all products.</span><Link href="/products#catalogue">Reset catalogue</Link></div>}
    </section>
  );
}
