"use client";

import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { FormEvent, useState } from "react";

export function QuoteForm({ initialSent = false }: { initialSent?: boolean }) {
  const [sent, setSent] = useState(initialSent);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return <div className="quote-success glass-panel" aria-live="polite"><span className="success-icon"><Check size={28} /></span><span className="contact-kicker">Brief received</span><h2>That is a strong first step.</h2><p>Your project note is ready for a MABNA specialist to review. For now, keep your quantities and delivery timing close.</p><Link href="/contact" className="outline-button" onClick={() => setSent(false)}>Send another brief</Link></div>;
  }

  return (
    <form className="quote-form glass-panel" action="/contact" method="get" onSubmit={submit}>
      <div className="form-heading"><span className="contact-kicker">Start your brief</span><h2>Tell us what you are building.</h2><p>A short note is enough. Add a BOQ or dimensions if you already have them.</p></div>
      <input type="hidden" name="submitted" value="1" />
      <div className="form-grid"><label>Full name<input required placeholder="Your name" /></label><label>Project type<select><option>Residential build</option><option>Commercial project</option><option>Renovation or repair</option><option>Trade / contractor supply</option></select></label><label className="full-field">Email or phone<input required placeholder="How should we reach you?" /></label><label className="full-field">What do you need?<textarea required rows={5} placeholder="Cement, steel sections, tools… tell us what you know so far." /></label></div>
      <button className="estimate-button form-submit" type="submit"><span>Prepare my quote</span><ArrowRight size={20} /></button>
    </form>
  );
}
