import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="site-footer" aria-labelledby="footer-heading">
      <div className="footer-main">
        <div className="footer-brand-block">
          <div className="footer-brand-top">
            <Link href="/" className="page-logo" aria-label="MABNA home">
              <span className="logo-mark logo-mark-light"><span className="logo-accent" />MABNA</span>
            </Link>
            <span className="footer-status"><span /> Ready for the next build</span>
          </div>
          <span className="footer-kicker">Build with intent</span>
          <h2 id="footer-heading">The right materials<br /><em>move projects forward.</em></h2>
          <p>Steel, cement, tools and practical guidance for the work ahead.</p>
          <Link href="/contact" className="footer-cta">Start a project brief <ArrowUpRight size={16} /></Link>
        </div>

        <div className="footer-link-grid">
          <div className="footer-column">
            <span className="footer-heading">Shop</span>
            <Link href="/products">All products <ArrowRight size={14} /></Link>
            <Link href="/products/steel-sections">Steel &amp; sections</Link>
            <Link href="/products/cement-materials">Cement &amp; materials</Link>
            <Link href="/products/tools-equipment">Tools &amp; equipment</Link>
          </div>
          <div className="footer-column">
            <span className="footer-heading">Explore</span>
            <Link href="/how-it-works">How it works</Link>
            <Link href="/resources">Resources</Link>
            <Link href="/about">Why MABNA?</Link>
            <Link href="/contact">Contact the team</Link>
          </div>
          <div className="footer-column footer-contact-column">
            <span className="footer-heading">Start here</span>
            <p>Have a project in mind? Share the brief and we’ll help you make the next material choice clearer.</p>
            <Link href="/contact" className="footer-contact-link">Tell us what you’re building <ArrowUpRight size={15} /></Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} MABNA Materials</span>
        <span className="footer-bottom-note"><span className="footer-dot" /> Material clarity for the work ahead.</span>
        <a href="#top">Back to top <ArrowUpRight size={13} /></a>
      </div>
    </footer>
  );
}
