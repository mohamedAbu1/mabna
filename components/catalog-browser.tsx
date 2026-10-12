"use client";

import Link from "next/link";
import { ArrowUpRight, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { catalogCategories, catalogProducts } from "@/lib/catalog";

export function CatalogBrowser() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [query, setQuery] = useState("");

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
      <div className="catalog-toolbar glass-panel">
        <div className="catalog-search"><Search size={19} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search materials, tools or systems" aria-label="Search catalogue" /></div>
        <div className="catalog-count"><strong>{products.length}</strong> curated starting points</div>
      </div>
      <div className="catalog-filter-row" aria-label="Filter by category">
        <button className={activeCategory === "all" ? "is-active" : ""} type="button" onClick={() => setActiveCategory("all")}>All products</button>
        {catalogCategories.map((category) => <button className={activeCategory === category.slug ? "is-active" : ""} type="button" key={category.slug} onClick={() => setActiveCategory(category.slug)}>{category.title}</button>)}
      </div>
      <div className="catalog-grid">
        {products.map((product) => (
          <article className="product-card" key={product.slug}>
            <div className="product-card-image" style={{ backgroundImage: `url(${product.image})` }}><span>{product.badge ?? "Project-ready"}</span></div>
            <div className="product-card-body"><span className="product-category-label">{product.categoryLabel}</span><h3>{product.name}</h3><p>{product.summary}</p><div className="product-meta"><span>{product.spec}</span><span>{product.useCase}</span></div><Link href={`/products/${product.category}/${product.slug}`} className="text-link">View direction <ArrowUpRight size={17} /></Link></div>
          </article>
        ))}
      </div>
      {!products.length && <div className="empty-catalog glass-panel"><strong>No matching materials yet.</strong><span>Try a broader search or return to all products.</span><button type="button" onClick={() => { setQuery(""); setActiveCategory("all"); }}>Reset catalogue</button></div>}
    </section>
  );
}
