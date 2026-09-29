"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { projects, type Project } from "@/content/profile";
import { ArrowLeftIcon, ArrowRightIcon, CloseIcon, CodeIcon, ExternalIcon } from "./icons";

const GAP = 24;
const CARD_TAGS = 3;

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
                  {p.stack.slice(0, CARD_TAGS).map((s) => (
                    <li key={s} className="tag">
                      {s}
                    </li>
                  ))}
                  {p.stack.length > CARD_TAGS && <li className="tag">+{p.stack.length - CARD_TAGS}</li>}
                </ul>
                <div className="icon-links">
                  {p.live && (
                    <a className="btn btn-light icon-btn" href={p.live} target="_blank" rel="noreferrer" aria-label={`${p.title} — ${p.liveLabel ?? "live site"}`}>
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
            <div className={`gallery gallery-${Math.min(current.shots.length, 3)}`}>
              {current.shots.map((shot) => (
                <a key={shot.src} className="gallery-item" href={shot.src} target="_blank" rel="noreferrer">
                  <Image src={shot.src} alt={shot.alt} width={1600} height={1000} sizes="(max-width: 760px) 90vw, 400px" />
                </a>
              ))}
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
                      {current.liveLabel ?? "Visit live"} ↗
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

function Preview({ project }: { project: Project }) {
  const [from, to] = project.tint;
  const cover = project.shots[0];
  return (
    <div className="preview" style={{ background: `linear-gradient(160deg, ${from}, ${to})` }}>
      <div className="window">
        <div className="window-bar" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="window-body">
          <Image src={cover.src} alt={cover.alt} fill sizes="(max-width: 640px) 100vw, 640px" className="window-img" />
        </div>
      </div>
    </div>
  );
}
