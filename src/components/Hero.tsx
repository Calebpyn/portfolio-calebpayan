import Image from "next/image";
import { profile } from "@/content/profile";
import { DownloadIcon } from "./icons";

export function Hero() {
  const initials = profile.name
    .split(" ")
    .map((w) => w[0])
    .join("");

  return (
    <section id="top" className="hero" aria-label="Introduction">
      <div className="blob hero-blob-1" aria-hidden="true" />
      <div className="blob slow hero-blob-2" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow rise">
            {profile.fullName} — {profile.role}
          </p>
          <h1 className="hero-title rise d1">
            I build web products people use <span className="accent">every day</span>.
          </h1>
          <p className="hero-lede rise d2">
            React, Next.js and TypeScript engineer with 4+ years shipping for real clients — now
            focused on AI-powered products.
          </p>
          <div className="hero-actions rise d3">
            <a className="btn btn-dark btn-lg" href="#work">
              View projects
            </a>
            <a className="btn btn-light btn-lg" href={profile.cv} download>
              Download CV
              <DownloadIcon />
            </a>
          </div>
        </div>

        <aside className="hero-aside" aria-label="Profile">
          <div className="glass sheen card profile-card rise d2">
            <div className="profile-head">
              <div className="avatar">
                {profile.photo ? (
                  <Image src={profile.photo} alt={profile.name} width={64} height={64} priority />
                ) : (
                  <span aria-hidden="true">{initials}</span>
                )}
              </div>
              <div>
                <div className="profile-name">{profile.name}</div>
                <div className="status">
                  <span className="status-dot" aria-hidden="true" />
                  {profile.availability}
                </div>
              </div>
            </div>
            <dl className="facts">
              {profile.facts.map((f) => (
                <div className="fact" key={f.label}>
                  <dt>{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </aside>
      </div>
    </section>
  );
}
