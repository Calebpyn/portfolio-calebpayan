"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { projects, type Project } from "@/content/profile";
import { ArrowLeftIcon, ArrowRightIcon, CloseIcon, CodeIcon, ExternalIcon } from "./icons";

const GAP = 24;

export function Projects() {
  const trackRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [openId, setOpenId] = useState<string | null>(null);
  const current = projects.find((p) => p.id === openId) ?? null;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (current && dialog && !dialog.open) dialog.showModal();
  }, [current]);

  const scroll = (dir: 1 | -1) => {
    const track = trackRef.current;
    const card = track?.querySelector("article");
    if (track && card) track.scrollBy({ left: dir * (card.offsetWidth + GAP), behavior: "smooth" });
  };

  // The whole card opens the details; links inside it keep working on their own.
  const onCardClick = (e: MouseEvent, id: string) => {
    if ((e.target as HTMLElement).closest("a, button")) return;
    setOpenId(id);
  };

  return (
    <section id="work" className="work" aria-labelledby="work-title">
      <div className="blob work-blob-1" aria-hidden="true" />
      <div className="blob slow work-blob-2" aria-hidden="true" />

      <div className="container work-head">
        <div className="section-head">
          <p className="eyebrow">Selected work</p>
          <h2 id="work-title" className="section-title">
            Built, shipped, in use.
          </h2>
        </div>
        <div className="carousel-controls">
          <button type="button" className="btn round" aria-label="Previous project" onClick={() => scroll(-1)}>
            <ArrowLeftIcon size={20} />
          </button>
          <button type="button" className="btn round" aria-label="Next project" onClick={() => scroll(1)}>
            <ArrowRightIcon size={20} />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="track"
        tabIndex={0}
        role="region"
        aria-roledescription="carousel"
        aria-label="Projects — use arrow keys to scroll"
      >
        {projects.map((p) => (
          <article key={p.id} className="glass card project-card" onClick={(e) => onCardClick(e, p.id)}>
            <Preview project={p} />
            <div className="glass sheen caption">
              <div className="meta">
                <span>{p.num}</span>
                <span>{p.eyebrow}</span>
              </div>
              <h3 className="project-title">
                <button className="stretch" type="button" aria-haspopup="dialog" onClick={() => setOpenId(p.id)}>
                  {p.title}
                </button>
              </h3>
              <p className="project-tagline">{p.tagline}</p>
              <div className="project-foot">
                <ul className="tags" aria-label="Stack">
                  {p.stack.map((s, i) => (
                    <li key={i} className="tag">
                      {s}
                    </li>
                  ))}
                </ul>
                <div className="icon-links">
                  {p.live && (
                    <a className="btn btn-light icon-btn" href={p.live} target="_blank" rel="noreferrer" aria-label={`${p.title} — live site`}>
                      <ExternalIcon />
                    </a>
                  )}
                  {p.code && (
                    <a className="btn btn-light icon-btn" href={p.code} target="_blank" rel="noreferrer" aria-label={`${p.title} — source code`}>
                      <CodeIcon />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        className="dialog"
        aria-labelledby="dlg-title"
        onClose={() => setOpenId(null)}
        onClick={(e) => e.target === e.currentTarget && dialogRef.current?.close()}
      >
        {current && (
          <div className="dialog-body">
            <div className="dialog-head">
              <div className="dialog-intro">
                <p className="eyebrow dialog-eyebrow">
                  {current.num} · {current.eyebrow}
                </p>
                <h3 id="dlg-title" className="dialog-title">
                  {current.title}
                </h3>
                <p className="dialog-tagline">{current.tagline}</p>
              </div>
              <button
                type="button"
                className="btn round dialog-close"
                aria-label="Close details"
                autoFocus
                onClick={() => dialogRef.current?.close()}
              >
                <CloseIcon size={18} />
              </button>
            </div>
            <div className="details">
              <Detail title="What I built" text={current.built} />
              <Detail title="Technical decisions" text={current.decisions} />
              <Detail title="Results" text={current.results} />
            </div>
            <div className="dialog-foot">
              <div className="tags">
                {current.stack.map((s, i) => (
                  <span key={i} className="tag">
                    {s}
                  </span>
                ))}
              </div>
              {(current.code || current.live) && (
                <div className="dialog-actions">
                  {current.code && (
                    <a className="btn btn-light" href={current.code} target="_blank" rel="noreferrer">
                      View code
                    </a>
                  )}
                  {current.live && (
                    <a className="btn btn-dark" href={current.live} target="_blank" rel="noreferrer">
                      Visit live ↗
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}

function Detail({ title, text }: { title: string; text: string }) {
  return (
    <div className="detail">
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
}

const POS_TILES = [
  { dot: "#E9D8C4", bar: "70%" },
  { dot: "var(--accent-soft)", bar: "55%", active: true },
  { dot: "#D9C3A8", bar: "64%" },
  { dot: "#EFE2D2", bar: "48%" },
];

function Preview({ project }: { project: Project }) {
  if (project.image) {
    return (
      <div className="preview">
        <Image src={project.image} alt="" fill sizes="(max-width: 640px) 90vw, 520px" className="preview-img" />
      </div>
    );
  }

  if (project.mockup === "pos") {
    return (
      <div className="preview preview-pos" aria-hidden="true">
        <div className="pos-grid">
          {POS_TILES.map((t, i) => (
            <div key={i} className={`pos-tile${t.active ? " is-active" : ""}`}>
              <div className="pos-dot" style={{ background: t.dot }} />
              <div className="bar" style={{ width: t.bar }} />
            </div>
          ))}
        </div>
        <div className="pos-ticket">
          <div className="bar dark" />
          <div className="bar" style={{ width: "80%" }} />
          <div className="bar" style={{ width: "64%" }} />
          <div className="pos-pay" />
        </div>
      </div>
    );
  }

  return (
    <div className="preview preview-generic" aria-hidden="true">
      <div className="browser">
        <div className="browser-bar">
          <span />
          <span />
          <span />
        </div>
        <div className="browser-body">[Screenshot / mockup]</div>
      </div>
    </div>
  );
}
