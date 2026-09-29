"use client";

import { useEffect, useState } from "react";
import { profile } from "@/content/profile";
import { CloseIcon, MenuIcon } from "./icons";

const links = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth > 760 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <nav className="glass nav container" aria-label="Primary">
        <a href="#top" className="nav-brand" onClick={close}>
          {profile.name}
        </a>
        <div className="nav-links">
          {links.map((l) => (
            <a key={l.href} className="ulink" href={l.href}>
              {l.label}
            </a>
          ))}
        </div>
        <div className="nav-actions">
          <a className="btn btn-dark btn-sm nav-cv" href={profile.cv} download>
            Download CV
          </a>
          <button
            type="button"
            className="btn round nav-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <CloseIcon size={18} /> : <MenuIcon size={18} />}
          </button>
        </div>
      </nav>
      <div id="mobile-menu" className="glass mobile-menu container" hidden={!open}>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={close}>
            {l.label}
          </a>
        ))}
        <a className="btn btn-dark btn-md" href={profile.cv} download onClick={close}>
          Download CV
        </a>
      </div>
    </header>
  );
}
