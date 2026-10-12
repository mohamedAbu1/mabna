"use client";

import type { CSSProperties } from "react";
import { useCallback, useEffect, useRef, useState } from "react";

const WELCOME_SEEN_KEY = "mabna-welcome-seen";
const word = "MABNA";

export function WelcomeExperience() {
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const [canEnter, setCanEnter] = useState(false);
  const dismissing = useRef(false);

  const complete = useCallback(() => {
    if (dismissing.current) return;
    dismissing.current = true;
    window.sessionStorage.setItem(WELCOME_SEEN_KEY, "1");
    setLeaving(true);
    window.setTimeout(() => setVisible(false), 720);
  }, []);

  useEffect(() => {
    if (window.sessionStorage.getItem(WELCOME_SEEN_KEY)) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const showTimer = window.setTimeout(() => setVisible(true), 0);
    const enterTimer = window.setTimeout(() => setCanEnter(true), reduceMotion ? 50 : 6200);
    const autoTimer = window.setTimeout(complete, reduceMotion ? 900 : 9000);
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") complete();
    };
    window.addEventListener("keydown", handleKey);

    return () => {
      window.clearTimeout(showTimer);
      window.clearTimeout(enterTimer);
      window.clearTimeout(autoTimer);
      window.removeEventListener("keydown", handleKey);
    };
  }, [complete]);

  if (!visible) return null;

  return (
    <div className={`welcome-screen${leaving ? " is-leaving" : ""}`} role="dialog" aria-modal="true" aria-labelledby="welcome-title">
      <div className="welcome-atmosphere" aria-hidden="true">
        <div className="welcome-grid" />
        <div className="welcome-glow welcome-glow-one" />
        <div className="welcome-glow welcome-glow-two" />
        <div className="welcome-dust dust-one" />
        <div className="welcome-dust dust-two" />
        <div className="welcome-dust dust-three" />
      </div>

      <div className="welcome-structure" aria-hidden="true">
        <div className="welcome-foundation" />
        <div className="welcome-frame">
          <div className="welcome-column welcome-column-one" />
          <div className="welcome-column welcome-column-two" />
          <div className="welcome-column welcome-column-three" />
          <div className="welcome-beam welcome-beam-one" />
          <div className="welcome-beam welcome-beam-two" />
          <div className="welcome-beam welcome-beam-three" />
          <div className="welcome-slab welcome-slab-one" />
          <div className="welcome-slab welcome-slab-two" />
        </div>
        <div className="welcome-block-wall welcome-wall-one">
          {Array.from({ length: 7 }, (_, index) => <span key={index} style={{ "--block-index": index } as CSSProperties} />)}
        </div>
        <div className="welcome-block-wall welcome-wall-two">
          {Array.from({ length: 6 }, (_, index) => <span key={index} style={{ "--block-index": index } as CSSProperties} />)}
        </div>
        <div className="welcome-rebar rebar-one" />
        <div className="welcome-rebar rebar-two" />
        <div className="welcome-rebar rebar-three" />
      </div>

      <div className="welcome-copy">
        <span className="welcome-index">MABNA / MATERIAL SYSTEM 01</span>
        <div className="welcome-rule" aria-hidden="true"><span /></div>
        <h1 id="welcome-title" className="welcome-word" aria-label={word}>
          {word.split("").map((letter, index) => <span key={letter} style={{ "--letter-index": index } as CSSProperties}>{letter}</span>)}
        </h1>
        <p className="welcome-message" lang="en" dir="ltr">Welcome to MABNA.</p>
        <p className="welcome-tagline">Build with better materials.</p>
        <div className="welcome-progress" aria-hidden="true"><span /></div>
        <p className="welcome-phase">STRUCTURE / CRAFT / DIRECTION</p>
      </div>

      <button type="button" className={`welcome-enter${canEnter ? " is-ready" : ""}`} onClick={complete} disabled={!canEnter}>
        <span>Enter MABNA</span><i aria-hidden="true">↗</i>
      </button>
      <button type="button" className="welcome-skip" onClick={complete}>Skip intro <span aria-hidden="true">Esc</span></button>
    </div>
  );
}
