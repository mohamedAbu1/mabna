import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="page-footer">
      <div className="page-footer-brand">
        <Link href="/" className="page-logo" aria-label="MABNA home">
          <span className="logo-mark logo-mark-light"><span className="logo-accent" />MABNA</span>
        </Link>
        <p>Clearer material choices for stronger projects.</p>
      </div>
      <div className="page-footer-links">
        <div><span className="footer-heading">Explore</span><Link href="/products">Products</Link><Link href="/how-it-works">How It Works</Link><Link href="/resources">Resources</Link></div>
        <div><span className="footer-heading">MABNA</span><Link href="/about">Why MABNA?</Link><Link href="/contact">Contact</Link><Link href="/contact">Request a quote <ArrowUpRight size={13} /></Link></div>
      </div>
      <div className="page-footer-bottom"><span>© {new Date().getFullYear()} MABNA Materials</span><span>Built for the work ahead.</span></div>
    </footer>
  );
}
