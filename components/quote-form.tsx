"use client";

import { ArrowRight, Check } from "lucide-react";
import { FormEvent, useState } from "react";

export function QuoteForm() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return <div className="quote-success glass-panel"><span className="success-icon"><Check size={28} /></span><span className="contact-kicker">Brief received</span><h2>That is a strong first step.</h2><p>Your project note is ready for a MABNA specialist to review. For now, keep your quantities and delivery timing close.</p><button type="button" className="outline-button" onClick={() => setSent(false)}>Send another brief</button></div>;
  }

  return (
    <form className="quote-form glass-panel" onSubmit={submit}>
      <div className="form-heading"><span className="contact-kicker">Start your brief</span><h2>Tell us what you are building.</h2><p>A short note is enough. Add a BOQ or dimensions if you already have them.</p></div>
      <div className="form-grid"><label>Full name<input required name="name" placeholder="Your name" /></label><label>Project type<select name="project"><option>Residential build</option><option>Commercial project</option><option>Renovation or repair</option><option>Trade / contractor supply</option></select></label><label className="full-field">Email or phone<input required name="contact" placeholder="How should we reach you?" /></label><label className="full-field">What do you need?<textarea required name="brief" rows={5} placeholder="Cement, steel sections, tools… tell us what you know so far." /></label></div>
      <button className="estimate-button form-submit" type="submit"><span>Prepare my quote</span><ArrowRight size={20} /></button>
    </form>
  );
}
