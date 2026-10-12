import Link from "next/link";
import { ArrowUpRight, ChevronDown, Menu, Search, ShoppingCart, UserRound } from "lucide-react";
import { catalogCategories } from "@/lib/catalog";

export function SiteHeader({ active }: { active?: string }) {
  return (
    <>
      <header className="page-nav glass-panel">
        <Link href="/" className="page-logo" aria-label="MABNA home">
          <span className="logo-mark"><span className="logo-accent" />MABNA</span>
        </Link>

        <nav className="page-nav-links" aria-label="Main navigation">
          <details className={`page-products-menu ${active === "products" ? "is-active" : ""}`}>
            <summary><span>Products</span><ChevronDown size={15} /></summary>
            <div className="page-product-dropdown">
              <Link href="/products" className="page-product-all">All products <ArrowUpRight size={15} /></Link>
              {catalogCategories.map((category) => (
                <Link href={`/products/${category.slug}`} key={category.slug}>
                  <strong>{category.title}</strong>
                  <small>{category.accent}</small>
                </Link>
              ))}
            </div>
          </details>
          <Link className={active === "how-it-works" ? "is-active" : ""} href="/how-it-works">How It Works</Link>
          <Link className={active === "resources" ? "is-active" : ""} href="/resources">Resources</Link>
          <Link className={active === "about" ? "is-active" : ""} href="/about">Why MABNA?</Link>
          <Link className={active === "contact" ? "is-active" : ""} href="/contact">Contact</Link>
        </nav>

        <div className="page-nav-actions">
          <Link href="/products" className="page-icon-button" aria-label="Search products"><Search size={20} /></Link>
          <span className="nav-divider" />
          <Link href="/contact" className="page-icon-button" aria-label="Account"><UserRound size={20} /></Link>
          <span className="nav-divider" />
          <Link href="/contact" className="page-icon-button" aria-label="Shopping cart"><ShoppingCart size={20} /><span className="cart-badge">0</span></Link>
        </div>
      </header>

      <header className="page-mobile-nav glass-panel">
        <details className="mobile-page-menu">
          <summary><Menu size={22} /><span>Menu</span></summary>
          <div>
            <Link href="/products">Products</Link>
            <Link href="/how-it-works">How It Works</Link>
            <Link href="/resources">Resources</Link>
            <Link href="/about">Why MABNA?</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </details>
        <Link href="/" className="page-logo" aria-label="MABNA home"><span className="logo-mark"><span className="logo-accent" />MABNA</span></Link>
        <div className="page-nav-actions">
          <Link href="/products" className="page-icon-button" aria-label="Search products"><Search size={22} /></Link>
          <Link href="/contact" className="page-icon-button" aria-label="Shopping cart"><ShoppingCart size={22} /><span className="cart-badge">0</span></Link>
        </div>
      </header>
    </>
  );
}
