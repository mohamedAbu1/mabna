"use client";

import {
  ArrowRight,
  Boxes,
  Calculator,
  Check,
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
  X,
} from "lucide-react";
import { useMemo, useState } from "react";

type MaterialKey = "steel" | "cement" | "tools";

const materials: Array<{
  key: MaterialKey;
  name: string;
  short: string;
  description: string;
  imageClass: string;
}> = [
  {
    key: "steel",
    name: "Steel",
    short: "Steel & Sections",
    description: "Sections, pipes and structural steel",
    imageClass: "planner-steel",
  },
  {
    key: "cement",
    name: "Cement",
    short: "Cement & Materials",
    description: "Cement, blocks and site essentials",
    imageClass: "planner-cement",
  },
  {
    key: "tools",
    name: "Tools",
    short: "Building Tools",
    description: "Reliable tools for every stage",
    imageClass: "planner-tools",
  },
];

const categories = [
  { title: "Site Setup", kind: "site", icon: House, caption: "Everything you need before the first pour." },
  { title: "Building Tools", kind: "tools", icon: Hammer, caption: "Tools that stay ready for the work ahead." },
  { title: "Cement & Materials", kind: "cement", icon: Package, caption: "Strong foundations start with the right mix." },
  { title: "Steel & Sections", kind: "steel", icon: Wrench, caption: "Built for the structure you have in mind." },
];

function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className={`logo-mark ${light ? "logo-mark-light" : ""}`} aria-label="MABNA">
      <span className="logo-accent" />
      MABNA
    </span>
  );
}

function IconButton({
  label,
  children,
  onClick,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button type="button" aria-label={label} className={`icon-button ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default function Home() {
  const [selectedMaterial, setSelectedMaterial] = useState<MaterialKey>("steel");
  const [productsOpen, setProductsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [estimateOpen, setEstimateOpen] = useState(false);
  const [quantity, setQuantity] = useState("250");
  const [submitted, setSubmitted] = useState(false);

  const selected = useMemo(
    () => materials.find((material) => material.key === selectedMaterial) ?? materials[0],
    [selectedMaterial],
  );

  function openEstimate() {
    setSubmitted(false);
    setEstimateOpen(true);
  }

  function closeEstimate() {
    setEstimateOpen(false);
    setSubmitted(false);
  }

  function scrollToSection(id: string) {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <main className="mabna-site">
      <div className="blueprint blueprint-one" />
      <div className="blueprint blueprint-two" />

      <header className="desktop-nav glass-panel">
        <div className="nav-actions">
          <div className="nav-icon-group">
            <IconButton label="Shopping cart"><ShoppingCart size={25} strokeWidth={2} /><span className="cart-badge">3</span></IconButton>
            <span className="nav-divider" />
            <IconButton label="Account"><UserRound size={24} strokeWidth={2} /></IconButton>
            <span className="nav-divider" />
            <IconButton label="Search"><Search size={25} strokeWidth={2} /></IconButton>
          </div>
        </div>

        <nav className="desktop-links" aria-label="Main navigation">
          <div className="product-menu">
            <button type="button" onClick={() => setProductsOpen((open) => !open)} className="nav-link">
              Products <ChevronDown size={16} className={productsOpen ? "rotate-180" : ""} />
            </button>
            {productsOpen && (
              <div className="product-dropdown">
                {materials.map((material) => (
                  <button type="button" key={material.key} onClick={() => { setSelectedMaterial(material.key); setProductsOpen(false); scrollToSection("planner"); }}>
                    <span>{material.name}</span>
                    <small>{material.description}</small>
                  </button>
                ))}
              </div>
            )}
          </div>
          <button type="button" className="nav-link" onClick={() => scrollToSection("why-mabna")}>Why MABNA?</button>
          <button type="button" className="nav-link" onClick={() => scrollToSection("how-it-works")}>How It Works</button>
          <button type="button" className="nav-link" onClick={() => scrollToSection("contact")}>Contact Us</button>
        </nav>

        <button type="button" className="logo-button" onClick={() => scrollToSection("top")}><Logo /></button>
      </header>

      <header className="mobile-nav glass-panel">
        <button type="button" className="mobile-menu-trigger" onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? <X size={29} /> : <Menu size={31} />}<span>Menu</span>
        </button>
        <button type="button" className="logo-button" onClick={() => scrollToSection("top")}><Logo /></button>
        <div className="mobile-nav-actions">
          <IconButton label="Search"><Search size={28} strokeWidth={2} /></IconButton>
          <span className="nav-divider" />
          <IconButton label="Shopping cart"><ShoppingCart size={28} strokeWidth={2} /><span className="cart-badge">3</span></IconButton>
        </div>
      </header>

      {menuOpen && (
        <div className="mobile-menu glass-panel">
          <button type="button" onClick={() => scrollToSection("planner")}>Products</button>
          <button type="button" onClick={() => scrollToSection("why-mabna")}>Why MABNA?</button>
          <button type="button" onClick={() => scrollToSection("how-it-works")}>How It Works</button>
          <button type="button" onClick={() => scrollToSection("contact")}>Contact Us</button>
        </div>
      )}

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
              <button type="button" className="estimate-button" onClick={openEstimate}>
                <ArrowRight className="estimate-leading-icon" size={24} /><span>Estimate your needs</span><Calculator size={25} strokeWidth={2.1} />
              </button>
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
            <button type="button" className="section-action" onClick={() => scrollToSection("contact")}>Explore categories <ArrowRight size={20} /></button>
          </div>
          <div className="category-grid">
            {categories.map((category) => {
              const CategoryIcon = category.icon;
              return (
                <button type="button" className="category-card" key={category.title} onClick={() => setSelectedMaterial(category.kind === "steel" ? "steel" : category.kind === "cement" ? "cement" : "tools")}>
                  <span className={`category-image category-${category.kind}`} aria-hidden="true" />
                  <span className="category-bar"><span className="circle-arrow"><ArrowRight size={20} /></span><span className="category-title">{category.title}</span><CategoryIcon className="category-icon" size={28} strokeWidth={1.9} /></span>
                  <span className="category-caption">{category.caption}</span>
                </button>
              );
            })}
          </div>
          <div className="mobile-dots" aria-hidden="true"><span className="active" /><span /><span /></div>
        </section>

        <section id="contact" className="contact-strip glass-panel">
          <div><span className="contact-kicker">Ready when you are</span><h2>Make the next step<br />the stronger one.</h2></div>
          <div className="contact-action-wrap"><p>Tell us what you’re building and we’ll help you plan the materials.</p><button type="button" className="outline-button" onClick={openEstimate}>Start a project estimate <ArrowRight size={19} /></button></div>
        </section>

        <footer className="site-footer"><Logo light /><span>Building a stronger future.</span><span>© {new Date().getFullYear()} MABNA Materials</span></footer>
      </div>

      {estimateOpen && (
        <div className="modal-backdrop" role="presentation" onMouseDown={closeEstimate}>
          <section className="estimate-modal glass-panel" role="dialog" aria-modal="true" aria-labelledby="estimate-title" onMouseDown={(event) => event.stopPropagation()}>
            <button type="button" className="modal-close" aria-label="Close estimate" onClick={closeEstimate}><X size={22} /></button>
            {!submitted ? (
              <>
                <span className="modal-icon"><Calculator size={26} /></span><span className="contact-kicker">Project planner</span><h2 id="estimate-title">Estimate your needs</h2><p>Start with a quick material brief. We’ll use it to prepare a clear quote for your project.</p>
                <div className="estimate-summary"><span>Selected material</span><strong>{selected.name}</strong></div>
                <label className="quantity-label" htmlFor="quantity">Approximate quantity</label>
                <div className="quantity-row"><input id="quantity" value={quantity} onChange={(event) => setQuantity(event.target.value)} inputMode="numeric" /><span>units / m²</span></div>
                <button type="button" className="estimate-button modal-submit" onClick={() => setSubmitted(true)}><span>Prepare my quote</span><ArrowRight size={22} /></button>
              </>
            ) : (
              <div className="success-state"><span className="success-icon"><Check size={29} /></span><span className="contact-kicker">Planner saved</span><h2>Your material brief is ready.</h2><p>{selected.name} · {quantity || "0"} units / m². A MABNA specialist can take it from here.</p><button type="button" className="outline-button" onClick={closeEstimate}>Done</button></div>
            )}
          </section>
        </div>
      )}
    </main>
  );
}
