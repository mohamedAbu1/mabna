"use client";

import {
  ArrowRight,
  Boxes,
  Calculator,
  ChevronDown,
  ClipboardList,
  FileText,
  HardHat,
  Hammer,
  House,
  Menu,
  Package,
  Search,
  ShieldCheck,
  ShoppingCart,
  Truck,
  UserRound,
  Wrench,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { SiteFooter } from "@/components/site-footer";

type MaterialKey = "steel" | "cement" | "tools";

const materials: Array<{
  key: MaterialKey;
  name: string;
  short: string;
  description: string;
  imageClass: string;
  href: string;
}> = [
  {
    key: "steel",
    name: "Steel",
    short: "Steel & Sections",
    description: "Sections, pipes and structural steel",
    imageClass: "planner-steel",
    href: "/products/steel-sections",
  },
  {
    key: "cement",
    name: "Cement",
    short: "Cement & Materials",
    description: "Cement, blocks and site essentials",
    imageClass: "planner-cement",
    href: "/products/cement-materials",
  },
  {
    key: "tools",
    name: "Tools",
    short: "Building Tools",
    description: "Reliable tools for every stage",
    imageClass: "planner-tools",
    href: "/products/tools-equipment",
  },
];

const categories = [
  { title: "Site Setup", kind: "site", href: "/products/site-setup", icon: House, caption: "Everything you need before the first pour." },
  { title: "Building Tools", kind: "tools", href: "/products/tools-equipment", icon: Hammer, caption: "Tools that stay ready for the work ahead." },
  { title: "Cement & Materials", kind: "cement", href: "/products/cement-materials", icon: Package, caption: "Strong foundations start with the right mix." },
  { title: "Steel & Sections", kind: "steel", href: "/products/steel-sections", icon: Wrench, caption: "Built for the structure you have in mind." },
];

function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className={`logo-mark ${light ? "logo-mark-light" : ""}`} aria-label="MABNA">
      <span className="logo-accent" />
      MABNA
    </span>
  );
}

export default function Home() {
  const [selectedMaterial, setSelectedMaterial] = useState<MaterialKey>("steel");

  return (
    <main className="mabna-site">
      <div className="blueprint blueprint-one" />
      <div className="blueprint blueprint-two" />

      <header className="desktop-nav glass-panel">
        <div className="nav-actions">
          <div className="nav-icon-group">
              <Link href="/products" className="icon-button" aria-label="Browse products"><ShoppingCart size={25} strokeWidth={2} /></Link>
            <span className="nav-divider" />
              <Link href="/contact" className="icon-button" aria-label="Contact MABNA"><UserRound size={24} strokeWidth={2} /></Link>
            <span className="nav-divider" />
              <Link href="/products#catalogue" className="icon-button" aria-label="Search products"><Search size={25} strokeWidth={2} /></Link>
          </div>
        </div>

        <nav className="desktop-links" aria-label="Main navigation">
          <details className="product-menu">
            <summary className="nav-link"><span>Products</span><ChevronDown size={16} /></summary>
            <div className="product-dropdown">
              <Link href="/products" className="product-dropdown-all">Browse all products <ArrowRight size={15} /></Link>
              {materials.map((material) => <Link href={material.href} key={material.key}><span>{material.name}</span><small>{material.description}</small></Link>)}
            </div>
          </details>
          <a href="#why-mabna" className="nav-link">Why MABNA?</a>
          <a href="#how-it-works" className="nav-link">How It Works</a>
          <Link href="/resources" className="nav-link">Resources</Link>
          <Link href="/contact" className="nav-link">Contact Us</Link>
        </nav>

        <Link href="/" className="logo-button" aria-label="MABNA home"><Logo /></Link>
      </header>

      <header className="mobile-nav glass-panel">
        <details className="home-mobile-menu">
          <summary className="mobile-menu-trigger"><Menu size={31} /><span>Menu</span></summary>
          <div className="mobile-menu glass-panel">
            <Link href="/products">Products</Link>
            <a href="#why-mabna">Why MABNA?</a>
            <a href="#how-it-works">How It Works</a>
            <Link href="/resources">Resources</Link>
            <Link href="/contact">Contact Us</Link>
          </div>
        </details>
        <Link href="/" className="logo-button" aria-label="MABNA home"><Logo /></Link>
        <div className="mobile-nav-actions">
          <Link href="/products#catalogue" className="icon-button" aria-label="Search products"><Search size={28} strokeWidth={2} /></Link>
          <span className="nav-divider" />
          <Link href="/products" className="icon-button" aria-label="Browse products"><ShoppingCart size={28} strokeWidth={2} /></Link>
        </div>
      </header>

      <div id="top" className="site-content">
        <section className="hero-section">
          <div className="hero-copy">
            <div className="eyebrow"><span /> <span>Start your project</span></div>
            <h1>Build with<br />better materials</h1>
            <p className="hero-subtitle">Steel, Cement &amp; Building Tools</p>
            <p className="hero-tagline">Smarter choices for every project.</p>

            <section id="planner" className="planner-card glass-panel">
              <div className="planner-heading">
                <div><h2>Your Project Planner</h2><p>Choose materials and estimate quantities</p></div>
                <ClipboardList className="orange-icon" size={35} strokeWidth={1.9} />
              </div>
              <div className="planner-materials">
                {materials.map((material) => (
                  <button type="button" className={`planner-tile ${selectedMaterial === material.key ? "selected" : ""} tile-${material.key}`} key={material.key} onClick={() => setSelectedMaterial(material.key)} aria-pressed={selectedMaterial === material.key}>
                    <span className={`planner-photo ${material.imageClass}`} aria-hidden="true" />
                    <span className="planner-tile-label"><ChevronDown size={15} />{material.name}</span>
                  </button>
                ))}
              </div>
              <Link href="/contact" className="estimate-button">
                <ArrowRight className="estimate-leading-icon" size={24} /><span>Estimate your needs</span><Calculator size={25} strokeWidth={2.1} />
              </Link>
            </section>
          </div>

          <div className="hero-visual">
            <picture>
              <img src="/assets/hero-storefront.png" alt="MABNA building materials store with steel, cement, tools and a forklift" fetchPriority="high" />
            </picture>
            <div className="hero-side-note side-note-top">Building a<br />stronger future</div>
            <div className="hero-side-note side-note-bottom">Trusted materials<br />for bigger projects</div>
            <div className="hero-feature-list glass-panel" aria-label="MABNA benefits">
              <div><Truck size={23} /><span>Wide Selection</span></div>
              <div><ShieldCheck size={23} /><span>Competitive Prices</span></div>
              <div><HardHat size={23} /><span>Expert Support</span></div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="process-bar glass-panel" aria-label="How it works">
          <div className="process-step active"><span className="process-icon active-number">1</span><Boxes size={26} /><div><strong>Choose materials</strong><small>Select materials and quantities</small></div></div>
          <div className="process-separator"><ArrowRight size={21} /></div>
          <div className="process-step"><span className="process-icon"><FileText size={25} /></span><div><strong>Prepare your quote</strong><small>Get a detailed price breakdown</small></div></div>
          <div className="process-separator"><ArrowRight size={21} /></div>
          <div className="process-step"><span className="process-icon dark-number">3</span><Truck size={26} /><div><strong>Deliver to site</strong><small>Fast and reliable delivery</small></div></div>
        </section>

        <section id="why-mabna" className="category-section">
          <div className="section-intro">
            <div><div className="eyebrow compact"><span /> <span>Shop materials</span></div><p>Everything your next build needs, in one place.</p></div>
            <Link href="/products" className="section-action">Explore categories <ArrowRight size={20} /></Link>
          </div>
          <div className="category-grid">
            {categories.map((category) => {
              const CategoryIcon = category.icon;
              return (
                <Link href={category.href} className="category-card" key={category.title}>
                  <span className={`category-image category-${category.kind}`} aria-hidden="true" />
                  <span className="category-bar"><span className="circle-arrow"><ArrowRight size={20} /></span><span className="category-title">{category.title}</span><CategoryIcon className="category-icon" size={28} strokeWidth={1.9} /></span>
                  <span className="category-caption">{category.caption}</span>
                </Link>
              );
            })}
          </div>
          <div className="mobile-dots" aria-hidden="true"><span className="active" /><span /><span /></div>
        </section>

        <section id="contact" className="contact-strip glass-panel">
          <div><span className="contact-kicker">Ready when you are</span><h2>Make the next step<br />the stronger one.</h2></div>
          <div className="contact-action-wrap"><p>Tell us what you’re building and we’ll help you plan the materials.</p><Link href="/contact" className="outline-button">Start a project estimate <ArrowRight size={19} /></Link></div>
        </section>

        <SiteFooter />
      </div>

    </main>
  );
}
