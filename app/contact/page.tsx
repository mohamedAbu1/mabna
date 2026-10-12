import Image from "next/image";
import { Mail, MapPin, Phone, Timer } from "lucide-react";
import { PageEyebrow, PageShell } from "@/components/page-shell";
import { QuoteForm } from "@/components/quote-form";

export default function ContactPage() {
  return (
    <PageShell active="contact">
      <section className="contact-hero page-hero"><div className="page-hero-copy"><PageEyebrow>Let&apos;s make a plan</PageEyebrow><h1>Start with<br /><em>what you know.</em></h1><p>Send the list, the sketch, the dimensions or simply the question. A useful project brief can start small.</p><div className="contact-detail-list"><div><Mail size={18} /><span><strong>Email</strong>hello@mabna.build</span></div><div><Phone size={18} /><span><strong>Project desk</strong>Available for material questions</span></div><div><Timer size={18} /><span><strong>Response</strong>We will follow up with the next useful step</span></div></div></div><div className="contact-hero-grid"><span className="contact-grid-label">MABNA / PROJECT DESK</span><div className="contact-grid-cross cross-one" /><div className="contact-grid-cross cross-two" /><Image className="contact-3d-object" src="/assets/3d/quote-kit.png" alt="3D quote kit with clipboard, pencil, concrete sample and location pin" width={1312} height={1199} priority /><div className="contact-grid-card"><MapPin size={23} /><span>For the work<br />ahead.</span></div></div></section>

      <section className="contact-layout page-section"><QuoteForm /><aside className="contact-aside"><span className="contact-kicker">A clear brief can include</span><h2>Start wherever<br />the detail is.</h2><ul><li>Material category and approximate quantity</li><li>Dimensions, grade or finish if known</li><li>Project stage and preferred timing</li><li>Delivery area and access notes</li></ul><p>No BOQ yet? That is fine. Tell us what you are trying to build.</p></aside></section>
    </PageShell>
  );
}
